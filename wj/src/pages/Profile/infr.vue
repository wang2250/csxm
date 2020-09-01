<template>
    <div >
        <div class="to_back" style="font-size:20px; margin:8px 0 10px 7px;" @click="back_inp()">
      <i class="iconfont icon-jiantou1"></i>
    </div>
     
     
     <div class="warpper">

    <h2>个人信息</h2>

     <ul v-if="login" >
      
       <h3>您还未登录</h3>
     </ul>
     <ul v-else>
        <li style="padding:0">
          <img :src="img" alt="" style="width:60px;height:60px;  border-radius: 50%; border:1px solid green;" >
       </li>
 <li>
      <h3>姓名：{{name}}</h3>
    </li>
    <li>
      <h3>{{num}}</h3>
    </li>
    <li>
      <h3>姓名：{{name}}</h3>
    </li>
     </ul>
   

   


     </div>
             
        
    
      
     
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
    data(){
        return{

        }
    },
    methods:{
         ...mapActions(["footer_on"]),
        back_inp(){
            this.$router.replace("./Profile");
      this.footer_on(true);
    
        },
    out_login() {
      localStorage.clear();
      this.$store.state.num = "";
      this.$store.state.name = "";
      this.$store.state.login = true;
      animation("已成功退出登录");
      this.$router.replace("./Profile");
      this.footer_on(true);

    }
        
    },
     computed: {
    ...mapState(["login", "name", "num","img"])
  },
}
</script>
<style scoped>
.warpper{
    width: 80%;
   height: 500px;
  margin: 0 auto;

  position: relative;
}
ul{
  width: 90%;
  height: 400px;


}
ul li {
 padding-left: 60px;
}




</style>