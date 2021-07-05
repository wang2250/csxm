<template>
  <div class="punch_in">
    <p style="padding-left:10px; margin:8px 0 14px 0">
      <i class="iconfont icon-daohangjiantouzuodingbu" @click="go_back()" style="font-size:28px;"></i>
    </p>

    <div v-if="key" class="none">您当前暂无签到任务~</div>
    <div v-else class="body">
      <h2>签到名称：{{data.name}}</h2>
      <div v-if="data.health">
        <p style="color:#02a774">健康信息</p>

        <p style="margin-bottom:3px;">1.是否有发烧症状(如有发烧症状请写明具体体温)</p>
        <p style="padding-left:10px; margin-bottom:8px;">
          <input type="text" value="无" class="one" />
        </p>
        <p style="margin-bottom:3px;">2.是否接触过新冠肺炎患者或被确诊</p>
        <p style="padding-left:10px; margin-bottom:8px;">
          <input type="text" value="否" class="two" />
        </p>

        <p style="margin-bottom:3px;">3.其他方面不适</p>
        <p style="padding-left:10px; margin-bottom:8px;">
          <input type="text" value="无" class="three" />
        </p>
      </div>
      <div v-if="data.position" style="margin:15px 0 15px 0">
        <p style="color:#02a774">位置信息</p>
        <p>请允许系统获取您的位置信息</p>
        <p>
          <svg class="icon" aria-hidden="true" style="width:30px">
            <use xlink:href="#icon-weixian" />
          </svg>
        </p>
        <p>
          <span style="color:red">暴露通知：</span>在疫情结束之前 如果您提交的打卡信息存在异常 系统会通过您的位置信息 锁定近距离的用户 并推送通知给他们 请您如实填写健康信息!
        </p>
      </div>

      <p>本次签到截止：{{data.time}}</p>
      <div class="go_to" @click="go_to()">开始签到</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      key: true,
      data: null,
      data_on: null,
      lass_num: ""
    };
  },
  computed: {
    ...mapState(["login", "name", "num", "lo", "la"])
  },
  methods: {
    ...mapActions(["login_on", "footer_on"]),
    go_back() {
      this.$router.replace("./msite");
      this.footer_on(true);
    },
    go_to() {
      let sef = this;
      let one = document.querySelector(".one").value;
      let two = document.querySelector(".two").value;
      let three = document.querySelector(".three").value;

      let data = {
        lass_num: sef.$store.state.lass_num,
        student_num: sef.$store.state.num.slice(3),
        health: {
          one: one,
          tow: two,
          three: three
        },
        position: {
          location_lon: sef.lo,
          location_lat: sef.la
        }
      };

      data.health = JSON.stringify(data.health);
      data.position = JSON.stringify(data.position);

      //请求

      console.log(data);
      setTimeout(function() {
        $.ajax({
          url: "https://huangfufu.top:8080/qiluweb/attendance/studenttosignin",
          type: "post",
          data: data,

          success: function(result) {
            if (result) {
              if (result.code) {
                sef.$router.replace("./success");
                sef.footer_on(false);
              }
            }
          },
          error: function(err) {
            setTimeout(() => {
              alert("创建失败！");
            }, 500);
          }
        });
      }, 500);
    }
  },
  created: function() {
    let sef = this;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        sef.$store.state.lo = position.coords.longitude;
        sef.$store.state.la = position.coords.latitude;
  
      });
    } else {
      alert("您的设备不支持定位功能");
    }

    let num = this.$store.state.num.slice(3);

    sef.$store.state.footer_on = false;

    let data = {
      lass_num: sef.$store.state.lass_num,
      student_num: num
    };

    $.ajax({
      url: "https://huangfufu.top:8080/qiluweb/attendance/studentattendance",
      type: "post",
      data: data,

      success: function(result) {
        if (result) {
          // console.log(result.data.code);
          sef.data = result.data;
          if (result.code) {
            sef.key = false;
          }
        }
      },
      error: function(err) {
        setTimeout(() => {
          alert("创建失败！");
        }, 500);
      }
    });
  }
};
</script>
<style scoped>
.none {
  width: 100%;
  height: 30px;

  padding-left: 40px;
  font-size: 19px;
  line-height: 30px;
}
.body {
  width: 80%;
  margin: 0 auto;
  font-size: 14px;
}
.body input {
  width: 100px;
}
.body .go_to {
  width: 60%;
  height: 30px;
  background: #02a774;

  color: white;
  text-align: center;
  line-height: 30px;
  margin-top: 5px;
}
</style>