<template>
    <div class="order">
       
       <div class="warpper" >
 <ul>
          <li v-for="(item,i) in list" v-bind:key="i" @click="msg_go(item.personnel_list[0].invite_num,item.personnel_list,item.class_name)">
            <span class="img"></span>
            <span class="name" style="font-size:15px;">  {{item.class_name}}</span>
            <span class="time">时间</span>
            <span class="msg_num">1</span>
            <span class="msg_content">消息内容</span>
            
          

          </li>
      </ul>
       </div>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
//import func from '../../../vue-temp/vue-editor-bridge'
export default {
    data(){
     return{
      key:true,
      list:[]
     }
    },
   methods:{
       ...mapActions(["login_on", "footer_on"]),
   msg_go(inv_num,per_list,cla_name){
      
       this.$store.state.msg_nums = inv_num;
       this.$store.state.per_list = per_list;
       this.$store.state.cla_name = cla_name;
       this.$router.replace("./msg");
        this.footer_on(false);
   }
   },
   created:function(){
      let sef = this;
  let data = null;
      let nums = this.$store.state.num.slice(0,2);
      let num = this.$store.state.num.slice(3);
      if(nums == "工号"){
          data = {
        teacher_num: num
      };
      }else if(nums == "学号"){
          data = {
        student_num: num
      };
      }
      
       $.ajax({
        url: "http://111.229.53.240:8080/qiluweb/class/findclass",
        type: "POST",
        data: data,
        
        success: function(result) {
          if (result) {
            
            sef.list = result.class_list;
            if(result.class_list.length != 0){
              sef.key = false;
            }
           
          }
        },
        error: function(err) {
          setTimeout(() => {
            console.log(err);
            alert("提交失败！");
          }, 500);
        }
      });
   }
}
</script>
<style scoped>
.warpper{
    position: relative;
    width: 96%;
    margin: 0 auto;
    margin-top:10px;
}
 ul li{
   position: relative;
   
   height: 52px;
   margin-bottom: 5px;
 }
 ul li .img{
  position: absolute;
  left: 4px;
  top:0px;
  width: 50px;
  height: 48px;
  border:1px solid black;
}
ul li .name{
  position: absolute;
  left: 65px;
  top:0px;

} 
ul li .time{
  position: absolute;
  right:5px;
}
ul li .msg_num{
  position: absolute;
  right:5px;
   bottom: 3px;
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background: red;
   text-align: center;
   line-height: 20px;
   color:white;
}
ul li .msg_content{
  position: absolute;
  left: 65px;
bottom: 3px;
color:darkgray;
}
</style>