<template>
  <div>
    <p style="padding-left:10px; margin:8px 0 14px 0">
      <i class="iconfont icon-daohangjiantouzuodingbu" @click="go_back()" style="font-size:28px;"></i>
    </p>
   <div class="warpper">
      <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-chenggong" />
      </svg>
      <p>签到成功</p>
   </div>

    
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
      this.$router.replace("./punch_in_student");
      this.footer_on(false);
    },
   
  },
    
};
</script>
<style scoped>
.warpper{
    width: 200px;
    height: 200px;
    
   position: absolute;
   left: 50%;
   top:50%;
   transform: translate(-50%,-50%)



}
.warpper .icon{
  width: 200px;
  height: 60px;
}
.warpper p{
  margin-top: 20px;
  font-size: 20px;
  color:grey;
  text-align: center;
}
</style>