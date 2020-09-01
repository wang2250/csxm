<template>
  <div>
    <p style="padding-left:10px; margin:8px 0 14px 0">
      <i class="iconfont icon-jiantou2" @click="go_back()" style="font-size:28px;"></i>
    </p>
    <div class="list">
      <h2>已签到</h2>
       <ul class="punch">
         <li  v-for="(item,i) in punch" v-bind:key="i" >
          <img :src="item.img" alt="">
          {{item.student_name}}
         </li>
       </ul>
      
    </div>

    <div class="unpunch">
       <h2>未签到</h2>
       <ul class="un_punch">
         <li  v-for="(item,i) in unpunch" v-bind:key="i">
           <img :src="item.img" alt="" >
          <span>  {{item.personnel_name}}</span>
         </li>
       </ul>
    </div>

<div class="two">
      <h2>请选择班级</h2>
      <ul>
        <li v-for="(item,i) in list_to" v-bind:key="i">
          <span class="img"></span>
          <span class="name">{{item.class_name}}</span>
   <span class="see" @click="on_to($event,item.personnel_list[0].invite_num,item.class_name)"></span>
    
        </li>
      </ul>
      <span @click="creat()" class="sucss">确定</span>
    </div>
    
  </div>
  
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      list_to:[],
      num:"",
      color_key:true,
      name:"",
      list_per:[],
      punch:[],
      unpunch:[]
      };
  },
  methods: {
    ...mapActions(["login_on", "footer_on"]),
    go_back() {
      this.$router.replace("./punch_in_teacher");
      this.footer_on(false);
    },
     on_to(e, nums, names) {
      if (this.color_key) {
        e.currentTarget.style.background = "red";
        this.color_key = false;
        this.num = nums;
        this.name = names;
      } else {
        e.currentTarget.style.background = "none";
        this.color_key = true;
        this.num = "";
        this.name = "";
      }
    },
    creat(){
let sef = this;

        $.ajax({
      url: "http://huangfufu.top:8080/qiluweb/attendance/studentssigninforclass",
      type: "post",
      data: {
      lass_num:sef.num
      },

      success: function(result) {
        
        if (result) {
         
          let dom = document.querySelector(".two");
dom.style.display = "none";
 //选择选中的班级
 sef.list_to.forEach((item,i)=>{
   if(item.class_name == sef.name){
      sef.list_per = item.personnel_list;
      
   }
 })
 
 //分数组

 sef.punch = result.data;
  sef.list_per.shift();
 sef.list_per.forEach((item,i)=>{
    let seff = item;
    let key = true;
   sef.punch.forEach((item,i)=>{
    if(item.student_name == seff.personnel_name){
      item.img = seff.img;
      item.phone = seff.phone;
      key = false;
    }
   })

   if(key){
     sef.unpunch.push(seff);
   }
   

 })

 



         
        }
      },
      error: function(err) {
        setTimeout(() => {
          alert("创建失败！");
        }, 500);
      }
    });
    }
   
  },
    created:function(){
        let sef = this;
   //   let dom = document.querySelector(".two");

      let num = this.$store.state.num.slice(3);
      let data = {
        teacher_num: num
      };
   
      //dom.style.display = "block";
      $.ajax({
        url: "http://111.229.53.240:8080/qiluweb/class/findclass",
        type: "POST",
        data: data,
        //cache: false,
        //processData: false,
        //contentType: "application/json;charset=UTF-8",
        success: function(result) {
          if (result) {
            //console.log(result.class_list[2].personnel_list)
            sef.list_to = result.class_list;
           
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

};
</script>
<style scoped>
.two {
  width: 100%;
   height: 100%;

  position: absolute;
 padding: 0 20px 0 20px;
  top: 0px;
  margin-top: 30px;

}
.two ul {
  margin-top: 10px;
}
.two ul li {
 
  position: relative;
 height: 55px;
}
li .img {
  position: absolute;
  left: 4px;
  top: 0px;
  width: 50px;
  height: 48px;
  border: 1px solid black;
}
li .name {
  position: absolute;
  left: 65px;
  top: 0px;
}
li .see {
  position: absolute;
  right: 15px;
  top: 10px;
  width: 20px;
  height: 20px;
  border: 1px solid silver;
}
.sucss {
  /* position: absolute;
  left: 20px;
  bottom: 0; */
  background: seagreen;
  width: 120px;
  height: 35px;
display: inline-block;
  color: white;
  text-align: center;
  line-height: 35px;
  margin-top: 18px;

}
.list{
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}
.list  li {
   width: 20%;
   height: 70px;
    border:1px solid black;
    float: left;
    margin: 0  10px 10px 0;
}
.list li img{
  display: inline-block;
  width: 70%;
  height: 40px;
  border:1px solid greenyellow;
}
.list li li span{
  display: inline-block;
  width: 70%;
   text-align: center;
}

.unpunch{
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}
.unpunch li {
   width: 20%;
   height: 70px;
  
    float: left;
    margin: 0  10px 10px 0;
    
}
.unpunch li img{
  display: inline-block;
  width: 70%;
  height: 40px;
  border:1px solid grey;
}
.unpunch li span{
  display: inline-block;
  width: 70%;
   text-align: center;
}
</style>