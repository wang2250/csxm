<template>
 
  <div >
    <div class="top">
      <i class="iconfont icon-daohangjiantouzuodingbu" @click = "go_back()"></i>
      <span>班级详情</span>
    </div>
    <div class="warpper">
        <h2 style="padding-left:3px;">{{list_cla_rea.class_name}}</h2>
       <ul>
    <li v-for="(item,i) in list_cla_rea.personnel_list" v-bind:key="i">
      <img :src="item.img" alt="">
      <span>{{item.personnel_name}}</span>
    </li>
   
     <li class="out_log">
        <span>退出班级</span>
     </li>
       </ul>
    </div>
      
  </div>

</template>

<script>
import {mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      list_cla_rea:[]
    };
  },
  created:function(){

   
   
    this.list_cla_rea = this.$store.state.cla_reason;
 
        
        
     
  },
  computed: {},
  components: {},
  methods: {
     ...mapActions(['footer_on']),
  go_back(){
       this.$router.replace("./class_list");
      this.footer_on(false);
  },



  },
  mounted() {

  }
};
</script>

<style scoped>

.top{
  width: 100%;
  height:50px;

   margin-bottom: 5px;
   padding-top: 5px;
   position: relative;
   
}
.top .iconfont{
  font-size: 25px;
  margin:15px 0 0 3px;
}
.top span{
  position: absolute;
  left:35%;
  top:8px;
  font-size: 15px;
}

.warpper{
    width: 90%;
    height: 300px;

    margin:0 auto;
}
.warpper ul li {
    float: left;
    width: 40px;
    height: 50px;
    margin: 5px;
   
    position: relative;
}
.warpper ul li img{
    width: 40px;
    height: 40px;

}
.warpper ul li span{
    position: absolute;
    left: 0;
    bottom: 0;
}
 .warpper .out_log{
     width: 90%;
     height: 30px;
     margin-top: 25px;
   
 }
 .warpper .out_log span{
       display: inline-block;
     width: 120px;
   
     height: 30px;
     border:1px solid skyblue;
     text-align: center;
     line-height: 30px;
 }
</style>