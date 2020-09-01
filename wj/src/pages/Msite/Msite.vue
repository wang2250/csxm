<template>
  <div class="msite">
    <div class="top">
      <div class="ttop">
        <span>
          <i class="iconfont icon-xiugaitouxiang" style="color:greenyellow"></i>
        </span>
        <span v-if="!login">{{name}}</span>
        <span class="time"></span>
        <span>：)</span>
      </div>
      <i class="iconfont icon-jia join" @click="join_go()"></i>
      <!-- <span class="join_to" :id="join_to" @click="join_go()">{{join_to}}</span> -->
    </div>
    <div class="nav swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ul>
            <li>
              <svg class="icon" aria-hidden="true" @click="go_punch_in()">
                <use xlink:href="#icon-qiandao" />
              </svg>
              <!-- <i class="iconfont icon-kaoqin" @click="go_punch_in()"></i> -->
              <span>考勤</span>
            </li>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weekly" />
              </svg>
              <!-- <i class="iconfont icon-wj-rz" @click="go_zb()"></i> -->
              <span>周报</span>
            </li>
            <li>
              <svg class="icon" aria-hidden="true" @click="go_class_r()">
                <use xlink:href="#icon-kechengbiaoselected" />
              </svg>
              <!-- <i class="iconfont icon-gongneng" @click="go_nav()"></i> -->
              <span>课程表</span>
            </li>
            <li>
              <svg class="icon" aria-hidden="true" @click="go_leave()">
                <use xlink:href="#icon-qingjia" />
              </svg>
              <span>请假</span>
            </li>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-ziyuan" />
              </svg>
              <span>推送</span>
            </li>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-chengjishouji" />
              </svg>
              <span>数据收集</span>
            </li>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xingtuxuetang-toupiao-" />
              </svg>
              <!-- <i class="iconfont icon-kaoqin" @click="go_punch_in()"></i> -->
              <span>投票</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="swiper-pagination"></div> -->
    </div>
    <div class="course">
      <h2>当前课程</h2>
      <div class="swiper-container">
        <div class="course_cont swiper-wrapper">
          <div class="swiper-slide">

           
               <div>10:20~11:20</div>
            <div>张三 | 主楼1-02</div>
       
           
               <div>3，4</div>
                 <div>高等数学</div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      location: "",
      arr: [],
      key: true,
      key_but: true
    };
  },
  computed: {
    ...mapState(["login", "name", "num", "class_na"]),
    join_to_do() {
      let nu = this.num.slice(0, 2);
      if (nu == "学号") {
        return "加入班级";
      } else {
        return "创建班级";
      }
    },
    on_teacher() {
      let nu = this.num.slice(0, 2);
      if (nu != "工号") {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    ...mapActions(["footer_on"]),

    join_go() {
      if (this.join_to_do == "加入班级") {
        this.$router.replace("./join_class");
        this.footer_on();
      } else {
        this.$router.replace("./creat_class");
        this.footer_on();
      }
    },
    go_punch_in() {
      let nu = this.num.slice(0, 2);
      if (nu == "工号") {
        this.$router.replace("./punch_in_teacher");
      } else {
        this.$router.replace("./punch_in_student");
      }

      this.footer_on(false);
    },
    go_zb() {},
    go_class_r() {
      this.$router.replace("./class_r");
      this.footer_on(false);
    },

    change() {},

    go_leave() {
      if (this.$store.state.num.slice(0, 2) == "学号") {
        this.$router.replace("./leave");
        this.footer_on(false);
      } else if (this.$store.state.num.slice(0, 2) == "工号") {
        this.$router.replace("./leave_to");
        this.footer_on(false);
      }
    }
  },
  mounted() {
    let mySwiper = new Swiper(".swiper-container", {
      //   direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
    let get_time = function() {
      let time = document.querySelector(".time");
      let hour = new Date().getHours();

      if (hour > 0 && hour < 5) {
        time.innerHTML = "凌晨好";
      } else if (hour >= 5 && hour < 12) {
        time.innerHTML = "中午好";
      } else if (hour >= 12 && hour < 18) {
        time.innerHTML = "下午好";
      } else {
        time.innerHTML = "晚上好";
      }
    };
    get_time();
  },
  components: {}
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 60px;

  padding: 5px 18px 0 20px;
}
.top .ttop {
  padding-top: 6px;
  font-size: 17px;
  color: #02a774;
  position: relative;
}
.top .ttop span {
  display: inline-block;
}
.top .ttop span:nth-of-type(1) {
  position: absolute;
  top: 0px;
  left: 25px;
}
.top .ttop span:nth-of-type(2) {
  margin-left: 30px;
}
.top .ttop span:nth-of-type(3) {
  font-size: 15px;
}

.nav {
  width: 95%;
  height: 155px;
  border: 1px solid #e4e0e0;
  margin-top: 10px;
  padding-top: 10px;
  margin: 0 auto;
  color: black;
  margin-bottom: 20px;
}
.nav li {
  float: left;

  width: 33%;
  height: 60px;

  margin: 0 auto;
  position: relative;
  margin-bottom: 13px;
}
/* .nav li .iconfont {
  position: absolute;
  left: 50%;
  top: -4px;
  font-size: 40px;
  transform: translateX(-50%);
} */
.nav li svg {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
/* .nav li:nth-of-type(2) .iconfont {
  font-size: 35px;
  top: -1px;
}
.nav li:nth-of-type(3) .iconfont {
  font-size: 36px;
  top: -2px;
} */
.nav li span {
  position: absolute;
  left: 50%;
  top: 42px;
  font-size: 14px;
  transform: translateX(-50%);
  color: grey;
}
.top i {
  position: absolute;
  right: 10px;
  top: 10px;
}

.join_to {
  width: 100px;
  height: 30px;
  display: none;
  position: absolute;
  right: 0;
  top: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  border: 1px solid grey;
  border-radius: 20px;
}

.class_list {
  width: 95%;

  height: 400px;
  margin: 0 auto;
  position: relative;
  padding-left: 6px;
  overflow: hidden;
}
.class_list ul {
  width: 96%;
  /* height: 300px;
  position: absolute;
  top:50px;
  left:20px; */
  margin: 0 auto;
  height: 250px;
  border: 1px solid #e4e0e0;
  overflow: hidden;
}
.class_list ul li {
  width: 16.6%;
  height: 40px;
  position: relative;
  float: left;
  text-align: center;
  line-height: 25px;
}
.class_list ul li textarea {
  height: 50px;
  width: 40px;
  position: absolute;
  left: 0;
  right: 0;

  border: none;
  outline: none;
  font-size: 13px;
}

.set_class_list {
  width: 100%;
  height: 40px;
  margin-top: 10px;
  overflow: hidden;
  padding-left: 5px;
}
.set_class_list span {
  display: inline-block;
  height: 30px;
  width: 35%;
  text-align: center;
  line-height: 30px;
  border-bottom: 1px solid grey;
  display: none;
}
.set_class_list span:nth-of-type(1) {
  margin-left: 5px;
}
.set_class_list .icon-kujialeqiyezhan_mohutuozhuaichicun {
  display: none;
  font-size: 28px;
  color: #02a774;
  float: right;
}
.warpper {
  width: 100%;
  height: 247px;
  position: absolute;
  background: transparent;
  top: 40px;
}
.set {
  width: 100%;
  height: 5px;

  position: relative;
}
.set i {
  font-size: 20px;
  position: absolute;
  top: -15px;
  right: -7px;
  display: none;
}
.course {
  width: 90%;

  margin: 0 auto;
}
.course h2 {
  padding-left: 8px;
  color: sandybrown;
}

.course swiper-wrapper {
  width: 100%;
  height: 70px;
  border: 1px solid sandybrown;

  border-radius: 20px;
}
.course .swiper-slide {
  width: 100%;
  height: 70px;
  background: linear-gradient(left, #d9f7f3, #d0f7f7);
  border-radius: 20px;
  padding: 5px 5px 15px 15px;
  color: grey;
  position: relative;
}
.course .swiper-slide div{
position: absolute;
background: transparent;
}
.course .swiper-slide div:nth-last-of-type(1){
  
  left: 13px;
  top:10px;
  width: 100px;
  height: 25px;
  
}
.course .swiper-slide div:nth-last-of-type(2){
  
  right: 10px;
  top:10px;
  width: 100px;
  height: 25px;
  
}
.course .swiper-slide div:nth-last-of-type(3){
  
  left: 13px;
  bottom:3px;
  width: 100px;
  height: 25px;
  
}
.course .swiper-slide div:nth-last-of-type(4){
  
  right: 10px;
  bottom:3px;
  width: 100px;
  height: 25px;
  
}
</style>
 
