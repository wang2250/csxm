<template>
  <div class="punch_in">
    <p style="padding-left:10px; margin:8px 0 14px 0">
      <i class="iconfont icon-jiantou2" @click="go_back()" style="font-size:28px;"></i>
    </p>

    <div class="one">
      <p>
        <input type="text" placeholder="输入考勤名称 如：每日签到 （可以为空）" class="name" />
      </p>
      <p>
        <span class="kuang" style="background:#02a774;" @click="ever()"></span>
        <span class="text">单次签到</span>
        <span class="kuang" style="left:97px;" @click="ever()"></span>
        <span class="text" style="left:120px;">每日签到除周末、节假日</span>
      </p>
      <p style="position: relative;" class="time">
        签到有效期：
        <input type="text" name="time" placeholder="今日内有效" id="time" />
      </p>
      <p class="auto" style="display:none">系统将每天早8:00自动发布签到</p>
      <p>
        <span class="kuang" style="background:#02a774;" @click="her()"></span>
        <span class="text">上传健康健康状况</span>
      </p>
      <p>
        <span class="kuang" style="background:#02a774;" @click="posi()"></span>
        <span class="text">请求学生位置信息</span>
      </p>
      <p
        style="width:100%; height:40px;border:1px solid #e4e0e0; background:#02a774; line-height: 40px;text-align:center; color:white"
        @click="creat_sta()"
      >创建考勤</p>
    </div>
    <div class="two">
      <h2>请选择班级</h2>
      <ul>
        <li v-for="(item,i) in list_to" v-bind:key="i">
          <span class="img"></span>
          <span class="name">{{item.class_name}}</span>
   <span class="see" @click="on_to($event,item.personnel_list[0].invite_num)"></span>
    
        </li>
      </ul>
      <span @click="creat()" class="sucss">开始签到</span>
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
        dom[1].style.background = "#02a774";
        dom[0].style.background = "";

        time.style.display = "none";
        auto.style.display = "block";
      } else {
        dom[1].style.background = "";
        dom[0].style.background = "#02a774";
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
        dom[2].style.background = "#02a774";
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
        dom[3].style.background = "#02a774";
        this.flag_posi = true;
      }
    },
    creat_sta() {
      let sef = this;
      let dom = document.querySelector(".two");

      let num = this.$store.state.num.slice(3);
      let data = {
        teacher_num: num
      };
      dom.style.display = "block";
      $.ajax({
        url: "http://111.229.53.240:8080/qiluweb/class/findclass",
        type: "POST",
        data: data,
        //cache: false,
        //processData: false,
        //contentType: "application/json;charset=UTF-8",
        success: function(result) {
          if (result) {
            //console.log(result.class_list[2].personnel_list)
            sef.list_to = result.class_list;
    
          }
        },
        error: function(err) {
          setTimeout(() => {
            console.log(err);
            alert("提交失败！");
          }, 500);
        }
      });
    },
    creat() {
      let name = document.querySelector(".name").value;
      let nu = this.num.slice(3);
      let sef = this;
      let time = document.querySelector("#time").value;
      let times = "";
      if (time == "") {
        times = 0;
      } else {
        times = time;
      }
      let form = {
        class_num: sef.lass_num,
        punch_in_name: name,
        only: 0,
        time: times,
        health: 1,
        position: 1
      };
  
      $.ajax({
        url: "http://huangfufu.top:8080/qiluweb/attendance/issue",
        type: "post",
        data: form,
        // cache: false,
        // processData: false,
        // contentType: false,
        success: function(result) {
          if (result) {
          
            let dom = document.querySelector(".two");
              dom.style.display = "none";
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
  width: 100px;
  height: 17px;
  top: 3px;
}
.two {
  width: 100%;
  
   height: 400px;
  position: absolute;
 padding: 0 20px 0 20px;
  top: 0px;
  display: none;
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
  border: 1px solid black;
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
  background: seagreen;
  width: 120px;
  height: 35px;

  color: white;
  text-align: center;
  line-height: 35px;

}
</style>