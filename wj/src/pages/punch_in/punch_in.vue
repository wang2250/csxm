<template>
  <div class="punch_in">
    <p style="padding-left:10px; margin:8px 0 14px 0">
      <i class="iconfont icon-daohangjiantouzuodingbu" @click="go_back()" style="font-size:28px;"></i>
    </p>

    <div class="one">
      <p>
        <input type="text" placeholder="输入考勤名称 如：每日签到 （可以为空）" class="name" />
      </p>
      <p>
        <span class="kuang" style="background:skyblue;" @click="ever()"></span>
        <span class="text">单次签到</span>
        <span class="kuang" style="left:97px;" @click="ever()" id="onlyy"></span>
        <span class="text" style="left:120px;">系统每天8点自动发布</span>
      </p>
      <p style="position: relative;" class="time">
        签到有效期(单位:小时)
        <!-- <input type="text" name="time" placeholder="今日内有效" id="time" /> -->
        <select name id="time">
          <option value="0">今日有效</option>
          <option value="1h">1</option>
          <option value="2h">2</option>
          <option value="3h">3</option>
          <option value="4h">4</option>
          <option value="5h">5</option>
          <option value="6h">6</option>
          <option value="7h">7</option>
          <option value="8h">8</option>
          <option value="9h">9</option>
          <option value="10h">10</option>
          <option value="11h">11</option>
          <option value="12h">12</option>
        </select>
      </p>
      <p class="auto" style="display:none">系统将每天早8:00自动发布签到</p>
      <p>
        <span class="kuang" style="background:skyblue;" @click="her()" id="healths"></span>
        <span class="text">上传健康健康状况</span>
      </p>
      <p>
        <span class="kuang" style="background:skyblue;" @click="posi()" id="positions"></span>
        <span class="text">请求学生位置信息</span>
      </p>
      <p
        style="width:50%; height:40px; background:skyblue; line-height: 40px;text-align:center; color:white"
        @click="creat()"
      >创建考勤</p>
    </div>
    <div class="two">
      <h2>请选择班级</h2>
      <ul>
        <li v-for="(item,i) in list_to" v-bind:key="i">
          <span class="img">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-qunzu" />
            </svg>
          </span>
          <span class="name">{{item.class_name}}</span>
          <span class="see" @click="on_to($event,item.personnel_list[0].invite_num)"></span>
        </li>
      </ul>
      <span @click="creat_sta()" class="sucss">开始签到</span>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      flag_her: true,
      flag_posi: true,
      list_to: [],
      lass_num: "",
      color_key: true
    };
  },
  computed: {
    ...mapState(["login", "name", "num"])
  },
  methods: {
    ...mapActions(["login_on", "footer_on"]),
    go_back() {
      this.$router.replace("./punch_in_teacher");
      this.footer_on(false);
    },
    ever() {
      let dom = document.querySelectorAll(".kuang");
      let time = document.querySelector(".time");
      let auto = document.querySelector(".auto");
      if (dom[1].style.background == "") {
        dom[1].style.background = "skyblue";
        dom[0].style.background = "";

        time.style.display = "none";
        auto.style.display = "block";
      } else {
        dom[1].style.background = "";
        dom[0].style.background = "skyblue";
        time.style.display = "block";
        auto.style.display = "none";
      }
    },
    her() {
      let dom = document.querySelectorAll(".kuang");

      if (this.flag_her) {
        dom[2].style.background = "";
        this.flag_her = false;
      } else {
        dom[2].style.background = "skyblue";
        this.flag_her = true;
      }
    },
    posi() {
      let dom = document.querySelectorAll(".kuang");
      let flag = true;
      if (this.flag_posi) {
        dom[3].style.background = "";
        this.flag_posi = false;
      } else {
        dom[3].style.background = "skyblue";
        this.flag_posi = true;
      }
    },
    creat_sta() {
      let dom = document.querySelector(".two");

      dom.style.display = "none";
    },
    creat() {
      let name = document.querySelector(".name").value;
      let nu = this.num.slice(3);
      let sef = this;
      let selects = document.querySelector("#time");
      let indexs = selects.selectedIndex;
      let time = selects.querySelectorAll("option")[indexs].value;
      let pos = 1;
      let hea = 1;
      let on = 0;

      let dom1 = document.querySelector("#healths");
      let dom2 = document.querySelector("#positions");
      let dom3 = document.querySelector("#onlyy");

      if (dom1.style.background == "") {
        hea = 0;
      }
      if ((dom2.style.background == "")) {
        pos = 0;
      }
      if (dom3.style.background == "skyblue") {
        on = 1;
      }

      let times = "";

      if (time == "") {
        times = 0;
      } else {
        times = time;
      }
      let form = {
        class_num: sef.lass_num,
        punch_in_name: name,
        only: on,
        time: times,
        health: hea,
        position: pos
      };
      console.log(form);
      $.ajax({
        url: "https://huangfufu.top:8080/qiluweb/attendance/issue",
        type: "post",
        data: form,

        success: function(result) {
          if (result) {
            let dom = document.querySelector(".two");
            dom.style.display = "none";
            console.log(result)
            alert(result.msg);
          }
        },
        error: function(err) {
          setTimeout(() => {
            alert("创建失败！");
          }, 500);
        }
      });
    },
    on_to(e, nums) {
      if (this.color_key) {
        e.currentTarget.style.background = "red";
        this.color_key = false;
        this.lass_num = nums;
      } else {
        e.currentTarget.style.background = "none";
        this.color_key = true;
        this.lass_num = "";
      }
    }
  },
  created: function() {
    this.list_to = this.$store.state.class_list_fist;
  }
};
</script>
<style scoped>
.punch_in {
  width: 100%;
  position: relative;
}
.kuang {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid black;
  position: absolute;
  top: 4px;
}

.text {
  display: inline-block;
  position: absolute;
  top: -2px;
  left: 22px;
}
.one {
  width: 80%;
  height: 400px;

  margin: 0 auto;
}
.one input {
  border: 1px solid grey;
  width: 99%;
  height: 30px;
}
.one p {
  height: 30px;
  margin-bottom: 10px;
  font-size: 16px;
  position: relative;
  line-height: 30px;
}
#time {
  position: absolute;
  width: 80px;
  height: 22px;
  top: 3px;
  outline: none;
  border: none;
  border-bottom: 1px solid grey;
  margin-left: 10px;
  -webkit-border: none;
  -webkit-outline: none;
  background: transparent;
}
.two {
  width: 100%;

  height: 400px;
  position: absolute;
  padding: 0 20px 0 20px;
  top: 0px;
}
.two ul {
  margin-top: 10px;
}
.two ul li {
  position: relative;
  height: 55px;
}
li .img {
  position: absolute;
  left: 4px;
  top: 0px;
  width: 50px;
  height: 48px;
}
li .name {
  position: absolute;
  left: 65px;
  top: 0px;
}
li .see {
  position: absolute;
  right: 15px;
  top: 10px;
  width: 20px;
  height: 20px;
  border: 1px solid silver;
}
.sucss {
  display: inline-block;
  margin-top: 20px;
  background: skyblue;
  width: 120px;
  height: 35px;

  color: white;
  text-align: center;
  line-height: 35px;
}
</style>