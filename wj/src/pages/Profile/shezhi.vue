<template>
    <div >
        <div class="to_back" style="font-size:20px; margin:8px 0 10px 7px;" @click="back_inp()">
      <i class="iconfont icon-jiantou1"></i>
    </div>
     
     
     
     <div class="warpper">
         <h2>设置</h2>
         <div class="out">
             <div v-if="login" @click="go_login()">登录</div>
             <div v-else @click="out_login()">退出登录</div>
         </div>
     </div>
        
    
      
     
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
    data(){
        return{
        login:this.$store.state.login
        }
    },
    
  computed: {

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

    },
    go_login(){
        this.$router.replace("./login");
        this.footer_on(false);
    }        
    },
    computed: {
    
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
.out{
    position: absolute;
   left: 10px;
   bottom: 0px;
    width: 80%;
    height: 35px;
    line-height: 33px;
    text-align: center;
    color:cadetblue;
    border:1px solid silver;
    
  

}




</style>