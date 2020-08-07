<template>
  <div class="msite">
    <div class="top">
      <div class="ttop">
        <span>
          <i class="iconfont icon-laoshi" style="color:red"></i>
        </span>
        <span v-if="!login">{{name}}</span>
        <span class="time"></span>
      </div>
      <i class="iconfont icon-jia join" @click="join()"></i>
      <span class="join_to" :id="join_to" @click="join_go()">{{join_to}}</span>
    </div>
    <div class="nav">
      <ul>
        <li>
          <i class="iconfont icon-kaoqin" @click="go_punch_in()"></i>
          <span>考勤</span>
        </li>
        <li>
          <i class="iconfont icon-wj-rz" @click="go_day_jou()"></i>
          <span>日志</span>
        </li>
        <li>
          <i class="iconfont icon-gongneng" @click="go_nav()"></i>
          <span>常用功能</span>
        </li>
      </ul>
    </div>
    <div class="class_list">
      <h2>课程表</h2>
      <ul class="list">
        <li>
          <input type="text" />
        </li>
        <li>
          <input type="text" value="星期一" />
        </li>
        <li>
          <input type="text" value="星期二" />
        </li>
        <li>
          <input type="text" value="星期三" />
        </li>
        <li>
          <input type="text" value="星期四" />
        </li>
        <li>
          <input type="text" value="星期五" />
        </li>
        <li>
          <input type="text" value="第一节" />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value="第二节" />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value="ddd3" />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value="dddd" />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value="第三节" />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value="第四节" />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value="第五节" />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value="第六节" />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
        <li>
          <input type="text" value />
        </li>
      </ul>
      <div class="set">
        <i class="iconfont icon-jiantou-shangxia posi"></i>
      </div>
      <div class="warpper"></div>
      <div class="set_class_list" v-if="on_teacher">
        <i class="iconfont icon-youkuozhan" style="font-size:23px;" @click="but_on()"></i>
        <span class="edit" @click="edit()">编辑课程表</span>
        <span class="reset" @click="reset()">重置课表</span>
        <i class="iconfont icon-kujialeqiyezhan_mohutuozhuaichicun"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
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
    ...mapState(["login", "name", "num"]),
    join_to() {
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
    join() {
      let join_to = document.querySelector(".join_to");
      if (join_to.style.display == "inline-block") {
        join_to.style.display = "none";
      } else {
        join_to.style.display = "inline-block";
      }
    },
    join_go() {
      let join_to = document.querySelector(".join_to");

      if (join_to.id == "加入班级") {
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
    go_nav() {
      this.$router.replace("./nav");
      this.footer_on(false);
    },
    edit() {
      let oUl = document.querySelector(".list");
      let oLi = oUl.querySelectorAll("li");
      let domm = null;
      let edit = document.querySelector(".edit");
      let reset = document.querySelector(".reset");

      let war = document.querySelector(".warpper");
      let sef = this;
      let posi = document.querySelector(".posi");
      war.style.display = "none";

      if (sef.key == true) {
        oUl.style.border = "none";
        posi.style.display = "block";
        oLi.forEach(function(item) {
          item.style.border = "1px dashed black";
        });

        oUl.addEventListener("click", function(dom) {
          if (domm != null) {
            domm.style.border = "";
          }
          sef.arr.push({ dom: dom.target, value: dom.target.value });

          dom.target.style.border = "1px solid #02a774";

          domm = dom.target;
        });
        edit.innerHTML = "确认编辑";
        reset.innerHTML = "取消编辑";
        sef.key = false;

        function moveBlack(elem) {
          elem.onmousedown = function(e) {
            e = e || window.event;

            var cha_x = e.pageX - elem.offsetLeft; //鼠标点击的地方与方块left之间的差值
            var cha_y = e.pageY - elem.offsetTop;

            document.onmousemove = function(e) {
              e = e || window.event;

              var on_x = e.pageX - cha_x;
              var on_y = e.pageY - cha_y;

              //  elem.style.left = on_x + "px";
              elem.style.top = on_y + "px";
            };

            elem.onmouseup = function() {
              document.onmousemove = null;
              let num = -12 - elem.offsetTop;

              oUl.style.height = oUl.offsetHeight - num + "px";
              elem.style.top = elem.offsetTop + num + "px";
            };
          };
        }
        function moveBlack_phone(elem) {
          elem.ontouchstart = function(e) {
            e = e || window.event;

            var cha_x = e.pageX - elem.offsetLeft; //鼠标点击的地方与方块left之间的差值
            var cha_y = e.pageY - elem.offsetTop;

            document.ontouchmove = function(e) {
              e = e || window.event;

              var on_x = e.pageX - cha_x;
              var on_y = e.pageY - cha_y;

              //  elem.style.left = on_x + "px";
              elem.style.top = on_y + "px";
            };

            elem.ontouchend = function() {
              document.onmousemove = null;
              let num = -12 - elem.offsetTop;

              oUl.style.height = oUl.offsetHeight - num + "px";
              elem.style.top = elem.offsetTop + num + "px";
            };
          };
        }
        let os = (function() {
          let ua = navigator.userAgent,
            isWindowsPhone = /(?:Windows Phone)/.test(ua),
            isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
            isAndroid = /(?:Android)/.test(ua),
            isFireFox = /(?:Firefox)/.test(ua),
            isChrome = /(?:Chrome|CriOS)/.test(ua),
            isTablet =
              /(?:iPad|PlayBook)/.test(ua) ||
              (isAndroid && !/(?:Mobile)/.test(ua)) ||
              (isFireFox && /(?:Tablet)/.test(ua)),
            isPhone = /(?:iPhone)/.test(ua) && !isTablet,
            isPc = !isPhone && !isAndroid && !isSymbian;
          return {
            isTablet: isTablet,
            isPhone: isPhone,
            isAndroid: isAndroid,
            isPc: isPc
          };
        })();
        if (os.isAndroid || os.isPhone) {
    moveBlack_phone(posi)
        } else if (os.isTablet) {
            moveBlack_phone(posi)
        } else if (os.isPc) {
         moveBlack(posi)
        }
      } else {
        let reset = document.querySelector(".reset");
        let oLi = oUl.querySelectorAll("li");
        oLi.forEach(function(item) {
          item.querySelector("input").style.border = "none";
          item.style.border = "none";
        });
        posi.style.display = "none";
        oUl.style.border = "1px solid #e4e0e0";

        let edit = document.querySelector(".edit");
        edit.innerHTML = "编辑课程表";
        sef.key = true;

        let war = document.querySelector(".warpper");
        war.style.display = "block";
        reset.innerHTML = "重置课表";
        //发送请求
      }
    },
    reset() {
      let oUl = document.querySelector(".list");
      let oLi = oUl.querySelectorAll("li");
      let posi = document.querySelector(".posi");
      let edit = document.querySelector(".edit");
      posi.style.display = "none";
      oUl.style.border = "1px solid #e4e0e0";
      oLi.forEach(function(item) {
        item.querySelector("input").style.border = "none";
        item.style.border = "none";
      });
      this.arr.forEach(function(item) {
        item.dom.value = item.value;
      });
      let war = document.querySelector(".warpper");
      war.style.display = "block";
      oUl.style.height = "250px";
      edit.innerHTML = "编辑课程表";
    },
    change() {},
    go_day_jou() {
      let name = this.$store.state.num.slice(0, 2);

      if (name == "工号") {
        this.$router.replace("./day_jou_teacher");
        this.footer_on(false);
      } else {
        this.$router.replace("./day_jou_student");
        this.footer_on(false);
      }
    },
    but_on() {
      let obut = document.querySelector(
        ".icon-kujialeqiyezhan_mohutuozhuaichicun"
      );
      let oOne = document.querySelector(".edit");
      let oTwo = document.querySelector(".reset");
      let oI = document.querySelector(".set_class_list").querySelector("i");
      if (this.key_but) {
        oI.className = "iconfont icon-zuokuozhan";
        oOne.style.display = "inline-block";
        oTwo.style.display = "inline-block";
        obut.style.display = "inline-block";
        this.key_but = false;
      } else {
        oI.className = "iconfont icon-youkuozhan";
        oOne.style.display = "none";
        oTwo.style.display = "none";
        obut.style.display = "none";
        this.key_but = true;
      }
    }
  },
  mounted() {
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
  position: absolute;
}
.top .ttop span:nth-of-type(1) {
  top: 0px;
  left: 25px;
}
.top .ttop span:nth-of-type(2) {
  top: 7px;
  left: 22px;
}
.top .ttop span:nth-of-type(3) {
  top: 7px;
  left: 80px;
}
.nav {
  width: 95%;
  height: 60px;
  border: 1px solid #e4e0e0;
  margin-top: 10px;
  border-radius: 30px;
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
}
.nav li .iconfont {
  position: absolute;
  left: 50%;
  top: -4px;
  font-size: 40px;
  transform: translateX(-50%);
}
.nav li:nth-of-type(2) .iconfont {
  font-size: 35px;
  top: -1px;
}
.nav li:nth-of-type(3) .iconfont {
  font-size: 36px;
  top: -2px;
}
.nav li span {
  position: absolute;
  left: 50%;
  top: 38px;
  font-size: 14px;
  transform: translateX(-50%);
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
  width: 100%;
  /* height: 300px;
  position: absolute;
  top:50px;
  left:20px; */
  height: 250px;
  border: 1px solid #e4e0e0;
  overflow: hidden;
}
.class_list ul li {
  width: 16.6%;
  height: 35px;

  float: left;
  text-align: center;
  line-height: 25px;
}
.class_list ul li input {
  width: 90%;
  height: 88%;
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
</style>
 
