<template>
  <div class="punch_in">
    <p style="padding-left:10px; margin:8px 0 14px 0">
      <i class="iconfont icon-daohangjiantouzuodingbu" @click="go_back()" style="font-size:28px;"></i>
    </p>

    <div class="one" @click="go_xq()">
        <svg class="icon" aria-hidden="true" style="width:23px;height:23px" >
            <use xlink:href="#icon-tongji1" />
          </svg>
      <span class="tongji">考勤统计</span>
   <i class="iconfont icon-weimingmingwenjianjia_jiantou" style="float: right;font-size:25px"></i>
    </div>

    

    <div class="san" @click="go_punch_in()">创建考勤</div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["login_on", "footer_on"]),
    go_back() {
      this.$router.replace("./msite");
      this.footer_on(true);
    },
    go_punch_in() {
      this.$router.replace("./punch_in");
    },
    go_xq(){
      this.$router.replace("./punch_xq");
    }
  }
};
</script>
<style scoped>
.punch_in div {
  width: 90%;
  margin: 0 auto;

  height: 50px;
  font-size: 17px;
  line-height: 50px;
  margin-bottom: 10px;
}
.punch_in .two {
  margin-bottom: 20px;
}
.punch_in .san {

  height: 35px;
background: skyblue;
  text-align: center;
  line-height: 35px;
  color: white;
  width: 180px;
  float: left;
  margin-left: 5.5%;
 
}
.one svg{
  margin-bottom: -2px;
  margin-right: 2px;
  margin-left: 2px;
}


</style>