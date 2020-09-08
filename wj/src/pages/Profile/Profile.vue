<template>
  <div class="profile">
   
    <div class="top">
      <div class="headerimg">
        <img :src="img" alt />
      </div>
      <div class="nologin">
        <div v-if="login">请登录</div>
        <div v-else>
          <span style="position:absolute; left:0;top:-10px;font-size:17px;">{{name}}</span>
          <span style="position:absolute;left:0;top:14px;font-size:12px;color:darkgrey">{{num}}</span>
        </div>
      </div>
      <span class="right">
        <i class="iconfont icon-jiantou" @click="to_login()"></i>
      </span>
    </div>
    <div class="ad"></div>
    <div class="nav">
      <div class="left">
        <!-- <img src="../../../static/img/xh.jpg" alt=""> -->
      </div>
      <div class="right">
        <div>
          
          <svg class="icon" aria-hidden="true" @click="go_class_list()">
                <use xlink:href="#icon-gerenxinxiyesuozaibanji" />
              </svg>
          <!-- <i class="iconfont icon-banjiguanli" ></i> -->
          <span>班级</span>
        </div>
      </div>
    </div>
    <ul class="list">
      <li>
        <i class="iconfont icon-kebiao" style="font-size:25px;"></i>
        <span>班级课表</span>
        <i class="iconfont icon-weimingmingwenjianjia_jiantou" style="font-size:24px;float:right;"></i>
      </li>
      <li>
        <i class="iconfont icon-webicon18" style="font-size:35px;"></i>
        <span>班级通讯录</span>
        <i class="iconfont icon-weimingmingwenjianjia_jiantou" style="font-size:24px;float:right;"></i>
      </li>

      <li>
        <i class="iconfont icon-fankui" style="font-size:24px;"></i>
        <span>意见/建议/需求反馈</span>
        <i class="iconfont icon-weimingmingwenjianjia_jiantou" style="font-size:24px;float:right;"></i>
      </li>

      <li>
        <i class="iconfont icon-banben" style="font-size:29px;"></i>
        <span>版本信息</span>
        <i class="iconfont icon-weimingmingwenjianjia_jiantou" style="font-size:24px;float:right;"></i>
      </li>
    </ul>
    
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["login", "name", "num", "img"])
  },
  components: {},
  methods: {
    ...mapActions(["footer_on"]),
    to_login() {
      if (this.$store.state.login == true) {
        this.$router.replace("./login");
        this.footer_on(false);
      }else{
        this.$router.replace("./infr");
        this.footer_on(false);
      }
    },
    go_class_list() {
      this.$router.replace("./class_list");
      this.footer_on(false);
    },
    to_login_go() {
      this.$router.replace("./login");
      this.footer_on(false);
    },
    sezhi(){
         this.$router.replace("./shezhi");
        this.footer_on(false);
    }
  }
};
</script>

<style scoped>
.profile {
  width: 93%;
  margin: 0 auto;
  background: white;
  height: 500px;
}

.top {
  width: 100%;
  height: 60px;
  margin: 20px 0 5px 0;
  position: relative;
}
.top .headerimg {
  width: 60px;
  height: 60px;

  border-radius: 50%;
  display: inline-block;
  overflow: hidden;
  margin-left: 4px;
  border: 1px solid #f6de3e;
}
.top .nologin {
  width: 200px;
  height: 100%;
  position: absolute;
  left: 70px;
  top: 0px;
  font-size: 16px;

  line-height: 60px;
}
.top .right {
  position: absolute;
  right: 5px;
  top: 20px;
}

.set_up {
  position: absolute;
  right: 20px;
  top: 6px;
  font-size: 17px;
}
img {
  width: 100%;
  height: 100%;
}
.ad {
  width: 100%;
  height: 60px;
  border: 1px solid #e4e0e0;
  border-radius: 30px;
  margin-top: 10px;
  position: relative;
  margin: 0 auto;
}
.nav {
  width: 100%;
  height: 60px;
  margin-top: 10px;
  position: relative;
}
.nav .left {
  position: absolute;
  left: 0px;
  top: 0;
  width: 60%;
  height: 100%;
  border: 1px solid #e4e0e0;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}
.nav .right {
  position: absolute;
  right: 10px;
  top: 0;
  width: 30%;
  height: 100%;
  border: 1px solid #e4e0e0;
  border-radius: 10px;
}
.nav .right svg {
  font-size: 33px;
  color: #f6de3e;
  position: absolute;
  left: 50%;
  top: 5px;
  transform: translateX(-50%);
}
.nav .right span {
  position: absolute;
  left: 50%;
  top: 40px;
  transform: translateX(-50%);
}
.list {
  width: 100%;
  height: 300px;

  margin: 15px 0 10px 0;
}
.list li {
  width: 97%;
  height: 55px;

  line-height: 55px;
  padding-left: 13px;
  font-size: 17px;
  position: relative;
}
.list li i:nth-of-type(1) {
  color: #f6de3e;
  position: absolute;
  left: 5px;
  top: 0;
}
.list li:nth-of-type(2) i {
  left: 2px;
}
.list li:nth-of-type(3) i {
  left: 7px;
}
.list li span {
  position: absolute;
  left: 40px;
  top: 0;
}

</style>