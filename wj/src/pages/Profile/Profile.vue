<template>
  <div class="profile">
  
      <div class="top">
        <div class="left_img">
          <!-- <img :src="img" alt /> -->
        </div>
        <div class="right_content">
          <div v-if="login">请登录</div>
          <div v-else class="top_two">
            <span class="top_name">{{name}}</span>
            <span class="top_num">{{num}}</span>
          </div>
          
        </div>
        <span class="con_svg">
          <i class="iconfont icon-weimingmingwenjianjia_jiantou" @click="to_login()"></i>
         </span>
      </div>
   
    <!---->
    <ul class="list">
      <li @click="go_class_list()">
        <i class="iconfont icon-kebiao" style="font-size:25px;"></i>
        <span>我的班级</span>
        <i class="iconfont icon-weimingmingwenjianjia_jiantou" style="font-size:24px;float:right;"></i>
      </li>
      <li @click="go_phone()">
        <i class="iconfont icon-webicon18" style="font-size:35px;"></i>
        <span>班级通讯录</span>
        <i class="iconfont icon-weimingmingwenjianjia_jiantou" style="font-size:24px;float:right;"></i>
      </li>

      <li @click="go_jianyi()">
        <i class="iconfont icon-fankui" style="font-size:24px;"></i>
        <span>意见/建议/需求反馈</span>
        <i class="iconfont icon-weimingmingwenjianjia_jiantou" style="font-size:24px;float:right;"></i>
      </li>

      <li @click="go_banben()">
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
      } else {
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
    sezhi() {},
    go_jianyi() {
      this.$router.replace("./jianyi");
      this.footer_on(false);
    },
    go_banben() {
      this.$router.replace("./banben");
      this.footer_on(false);
    },
    go_phone() {
      this.$router.replace("./phone");
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
  padding-top:10px;
}
.top{
  width: 92%;
  margin: 0 auto;
  height: 79px;

  position: relative;
  box-sizing: border-box;
}
.top .left_img{
  width: 60px;
  height: 60px;
  border:1px solid skyblue;
  position: absolute;
  top:10px;

  margin-right: 20px;
}

.top .right_content{
   position: absolute;
   width: 200px;
   left: 76px;
   top:10px;
  height: 60px;
 
}
.right_content .top_num{
  position: absolute;
  top:35px;
    color:grey;
    font-size: 14px;
}
.right_content .top_name{
   position: absolute;
  top:4px;
  font-size: 18px;

}
.con_svg{
    position: absolute;
  right: 7px;
  bottom: 15px;

  color: skyblue;
}
.con_svg i{
  font-size: 24px;
}


.list {
  width: 95%;
  height: 300px;

  margin: 0 auto;

}
.list li {
  width: 97%;
  height: 55px;

  line-height: 55px;
  padding-left: 13px;
  font-size: 17px;
  position: relative;
}
.list li i {
  color: skyblue;
}
.list li span {
  color: grey;
}
.list li i:nth-of-type(1) {
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