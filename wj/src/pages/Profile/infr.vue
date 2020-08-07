<template>
    <div >
        <div class="to_back" style="font-size:20px; margin:8px 0 10px 7px;" @click="back_inp()">
      <i class="iconfont icon-jiantou1"></i>
    </div>
     
     
     <div class="warpper">

    <h2>个人信息</h2>
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





</style>