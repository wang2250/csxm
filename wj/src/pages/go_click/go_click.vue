<template>
 <div class="warpper">
     <div class="to_back" style="font-size:20px; margin:8px 0 0 7px;" @click="back_inp()">
      <i class="iconfont icon-jiantou1"></i>
    </div>
    <ul >
       <li>
           数据收集
       </li>
       <li @click="go_generate()">
           在线表格
       </li>
    </ul>
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
       go_generate(){
           this.$router.replace("./go_generate");
       },
       back_inp(){
            this.$router.replace("./nav");
   
       }
    }
}
</script>
<style scoped>

 .warpper{
     width: 100%;
     height: 50px;

 }
 .warpper ul{
     width: 90%;
     margin: 0 auto;
 }
 .warpper li{
     float: left;
     border:1px solid black;
     width: 50%;
     line-height: 50px;
     text-align: center;
     

     
 }
</style>