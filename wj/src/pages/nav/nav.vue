<template>
    <div class="nav">
    <div class="to_back" style="font-size:20px; margin:8px 0 0 7px;" @click="back_inp()">
      <i class="iconfont icon-jiantou1"></i>
    </div>
        <ul>
            <li>
                周报/月报
            </li>
            <li @click="go_click()">
                事件推送
            </li>
             <li @click="go_leave()">
                请假
            </li>
            
        </ul>
    </div>
</template>
<script>
import {mapState, mapActions } from "vuex";
export default {
    data(){
        return {

        }
    },
    methods:{
         ...mapActions(["footer_on"]),
        back_inp(){
              this.$router.replace("./msite");
      this.footer_on(true);
        },
        go_click(){
              this.$router.replace("./go_click");
        },
        go_leave(){
            this.$router.replace("./leave");
        }
    }
}
</script>
<style scoped>
  .nav ul {
      width: 90%;
      height: 60px;
      border:1px solid black;
      margin: 0 auto;

      
  }
    .nav ul li{
        width: 33.3%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        float: left;
        border:1px solid black;
    }
</style>