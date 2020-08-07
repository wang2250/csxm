<template>
    <div >
        <div class="to_back" style="font-size:20px; margin:8px 0 10px 7px;" @click="back_inp()">
      <i class="iconfont icon-jiantou1"></i>
    </div>
      <div class="warpper">
   
   <div class="stu_to" v-if="key">
     <form >
         <textarea name="" placeholder="请输入请假原因">

         </textarea>
  <p style="margin-bottom:10px;">上传图片凭证：<input type="file"></p>
  <p style="margin-bottom:10px;">请假时间：<input type="leave_time" placeholder="请输入数字单位"></p>
  <p class="sub" style="margin-bottom:10px;">提交</p>
  <p class="reason">查看我的请假申请 <i class="iconfont icon-weimingmingwenjianjia_jiantou"></i></p>
     </form>
   </div>
    
        
    
      <ul v-else>
          <li>
        
            <span class="name">姓名 学号（班级名称）</span>
            <i class="see">请假原因</i>
            <i class="iconfont icon-weimingmingwenjianjia_jiantou" style="float:right; font-size:30px;margin:5px 4px 0 0 ;" @click="leave_go()"></i>
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
            this.$router.replace("./nav");
      this.footer_on(false);
        },
        leave_go(){
            //组件传值
            this.$router.replace("./leave_to");
        }
    },
    computed: {
    key(){
        if(this.$store.state.num.slice(0,2) == "工号"){
               return  false;
        }else{
            return true;
        }
  
    }
  },
}
</script>
<style scoped>
.warpper{
    width: 96%;

    float: right;
}
.but{
    width: 95%;
    height: 40px;
    border:1px solid  #02a774;
     border-radius: 15px;
     text-align: center;
     line-height: 40px;
     font-size: 16px;
     margin-bottom: 10px;

}
.but .iconfont{

 font-size: 30px;
}
.but .text{
    position: relative;
    top:-4px;
}
ul{
    border-radius: 5px;
    
}
ul li{
    
    
width: 100%;
height: 50px;
  margin-left: 5px;
margin-bottom: 5px;
position: relative;
}
 
 li .name{
  position: absolute;
  left: 5px;
  top:0px;
  font-size: 18px;
} 
 li .see{
  position: absolute;
  left: 5px;
  top:28px;
 
  width: 100px;
  height: 20px;

}
.stu_to{
    width: 100%;

}
.stu_to textarea{
    width: 85%;
    height: 50px;
    margin-bottom: 10px;

}
.sub{
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color:white;
    background: darkorange;

}
.reason{
   width: 130px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color:darkorange;
 
    
}
</style>