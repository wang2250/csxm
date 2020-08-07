<template>
  <div class="msg">
<p style="padding:10px 0 0 10px; position:relative;">
      <i class="iconfont icon-jiantou2" @click="go_back()" style="font-size:28px;"></i>
     <span class="cla_name">{{cla_name}}</span>
    </p>
   <div class="warpper_content">

   </div>
   <div class="inp">
     <div class="inpu">
       <input type="text" name="" id="content" >
       <span >
    <i class="iconfont icon-jia join"></i>
       </span>
     </div>
   </div>


  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
//import func from '../../../vue-temp/vue-editor-bridge'
export default {
  data() {
    return {
      key: true,
      list: []
    };
  },
  computed:{
...mapState(["cla_name", "msg_nums", "per_list"])
  },
  methods: {
        ...mapActions(["login_on", "footer_on"]),
      go_back(){
this.$router.replace("./order");
      this.footer_on(true);
      }
       
  },
//   created: function() {
//     let sef = this;
//     let data = null;
//     let nums = this.$store.state.num.slice(0, 2);
//     let num = this.$store.state.num.slice(3);
//     if (nums == "工号") {
//       data = {
//         teacher_num: num
//       };
//     } else if (nums == "学号") {
//       data = {
//         student_num: num
//       };
//     }

//     $.ajax({
//       url: "http://111.229.53.240:8080/qiluweb/class/findclass",
//       type: "POST",
//       data: data,

//       success: function(result) {
//         if (result) {
//           sef.list = result.class_list;
//           if (result.class_list.length != 0) {
//             sef.key = false;
//           }
//         }
//       },
//       error: function(err) {
//         setTimeout(() => {
//           console.log(err);
//           alert("提交失败！");
//         }, 500);
//       }
//     });
//   }
};
</script>
<style scoped>
.msg{
  width: 100%;
  height: 100%;
  position: relative;
}
.cla_name{
  position: absolute;
  left: 50%;
  top:50%;
  font-size: 16px;
  width: 80px;
  height: 40px;
  line-height: 40px;

  text-align: center;
  margin: -15px 0 0 -40px;
}
.warpper_content{
   width: 90%;
   
   margin:0 auto;
   height: 80%;
   
   
}
.inp{
    
     width: 90%;
     height: 10%;
    
   
 position: absolute;
 bottom: 0;
 left: 5%;

}
.inpu{
  width: 100%;
  height: 35px;

  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%)

}
.inpu input{
  height: 90%;
  width: 80%;
  border-radius: 20px;
}
.inpu span{
  display: inline-block;
  width: 18%;
  
  height: 100%;
  position: absolute;
  text-align: center;
  line-height: 35px;
}
</style>