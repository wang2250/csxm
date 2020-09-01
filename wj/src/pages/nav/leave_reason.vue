<template>
    <div class="nav">
    <div class="to_back" style="font-size:20px; margin:8px 0 0 7px;" @click="back_inp()">
      <i class="iconfont icon-jiantou1"></i>
    </div>
    <div class="war">
        <h2>您的请假申请：<span style="color:red">{{msg}}</span></h2>
       <h2 v-if="key">老师留言:</h2>
       <h3 >{{cont}}</h3>
    </div>
       
    </div>
</template>
<script>
import {mapState, mapActions } from "vuex";

export default {
    data(){
        return {
           msg:"未审批",
           cont:"",
           key:false
        }
    },
    methods:{
         ...mapActions(["footer_on"]),
        back_inp(){
              this.$router.replace("./leave");
      this.footer_on(false);
        },
        
    },
    created:function(){
        let sef = this;
        let data = {
         student_num:sef.$store.state.num.slice(3),
         lass_num:sef.$store.state.lass_num
        }
      
         $.ajax({
        url: "http://huangfufu.top:8080/qiluweb/leave/studentdetails",
        type: "POST",
        data: data,
        
      
        success: function(result) {
          if (result) {
         
             
                    if(result.data.key){
                    sef.msg = "成功"
                    sef.key = true;
                sef.cont  = result.data.msg;
                    
                }else {
                    if(result.data.msg){
                         sef.msg = "失败"
                    }
                   
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
    .war{
        width: 80%;
        margin: 0 auto;
    }
</style>