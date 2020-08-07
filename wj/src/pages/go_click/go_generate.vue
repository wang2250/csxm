<template>
 <div>
    <div class="to_back" style="font-size:20px; margin:8px 0 0 7px;" @click="back_inp()">
      <i class="iconfont icon-jiantou1"></i>
    </div>

    <div class="warpper">
          <input type="text" name="" id="" placeholder="请输入行数">
          <input type="text" name="" id="" placeholder="请输入列数">
          <div class="but">生成</div>
    </div>
 </div>
</template>
<script>
import {mapState, mapActions } from "vuex";
export default {

    data(){
        return{

        }
    },
    methods:{
          ...mapActions(["footer_on"]),
       back_inp(){
             this.$router.replace("./go_click");
    
       }
    }
}
</script>
<style scoped>


 .warpper{
     width: 70%;
     height: 300px;
    
     margin:0 auto;
     position: relative;
 }
 input{
     width: 180px;
   position: absolute;
   left: 50%;
   margin-left: -90px;
   top:10px;
   height: 23px;

 }
 input:nth-of-type(2){
     top:55px;
 }
 .but{
 width: 185px;
   position: absolute;
   left: 50%;
   margin-left: -90px;
   top:95px;
   text-align: center;
   background: #02a774;
   color: white;
   height: 26px;
   line-height: 26px;
 }
 
</style>