<template>
    <div >
        <div class="to_back" style="font-size:20px; margin:8px 0 10px 7px;" @click="back_inp()">
      <i class="iconfont icon-jiantou1"></i>
    </div>
      <div class="warpper">
   


   <div class="bea">
     
   </div>
   <div class="img">

   </div>
   <div class="but">
       <div class="but_agr">
           同意
       </div>
       <div class="but_pas">
           驳回
       </div>
   </div>
        
       
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
            this.$router.replace("./leave");
      this.footer_on(false);
        }
    },
    
}
</script>
<style scoped>
.warpper{
    width: 80%;
     height: 400px;


    
    margin: 0 auto;
}
.warpper .bea{
    width: 100%;
    height: 70px;
    border:1px solid darkgrey;
    overflow: hidden;
    margin-bottom: 15px;
}
.warpper .img{
    width: 100%;
    height: 280px;
    border:1px solid black;
        margin-bottom: 15px;
}

.warpper .but{
     width: 100%;
    height: 35px;
   
}
.but div{
    height: 35px;
    background: sandybrown;
    width: 45%;
    line-height: 35px;
    text-align: center;
    color:white;
  
}
.but .but_agr{
     float: left;
}
.but .but_pas{
    float: right;
}

</style>