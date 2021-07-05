<template>
  <div>
    <div class="to_back" style="font-size:20px; margin:8px 0 10px 7px;" @click="back_inp()">
      <i class="iconfont icon-jiantou1"></i>
    </div>
    <div class="two">
      <h2>请选择班级</h2>
      <ul>
        <li v-for="(item,i) in list_to" v-bind:key="i">
          <span class="img">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-qunzu" />
            </svg>
          </span>
          <span class="name">{{item.class_name}}</span>
          <span
            class="see"
            @click="on_to($event,item.personnel_list[0].invite_num,item.class_name)"
          ></span>
        </li>
      </ul>
      <span @click="creat()" class="sucss">确定</span>
    </div>
    <div class="warpper">
      
      <ul>
          <li class="arrr" v-for="(item,i) in re_list" v-bind:key="i">
            <img :src="item.img" alt="">
            <span class="name">{{item.personnel_name}}</span>
            <span class="phon">{{item.phone}}</span>
          </li>
      </ul>
     
      
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      color_key:true,
      list_to: [],
      num_lto:"",
      re_list:[]
    };
  },
  methods: {
    ...mapActions(["footer_on"]),
    back_inp() {
      this.$router.replace("./Profile");
      this.footer_on(true);
    },
    go_to_jou() {
      this.$router.replace("./day_jou");
      this.footer_on(false);
    },
    on_to(e, nums, names) {
      if (this.color_key) {
        e.currentTarget.style.background = "red";
        this.color_key = false;
        this.num_lto = nums;
    
      } else {
        e.currentTarget.style.background = "none";
        this.color_key = true;
        this.num_lto = "";
       
      }
    },
    creat(){
       let dom = document.querySelector(".two");
      dom.style.display = "none";
      let sef = this;
      let data = {
        lass_num: sef.num_lto
      };
 
     this.list_to.forEach(function(item,i){
         if(item.personnel_list[0].invite_num == sef.num_lto){
           sef.re_list = item.personnel_list
         }
     })


    }

  },
  created: function() {
  
     this.list_to= this.$store.state.class_list_fist
  

 
  }
};
</script>
<style scoped>
.warpper {
  width: 80%;


  margin: 0 auto;
  margin-top: 40px;
}
.go_to {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  background: skyblue;
}

.two {
  width: 100%;
  height: 100%;
  
  position: absolute;
  padding: 0 20px 0 20px;
  top: 0px;
  margin-top: 30px;
  z-index: 111;
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
}

li .name {
  position: absolute;
  left: 60px;
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
.arrr{
    width: 100%;
    height: 70px;
    padding-bottom: 5px;
    border-bottom: 1px solid gray;
    position: relative;
    margin-bottom: 15px;
}
.arrr img{
    width: 60px;
    height: 60px;
}
.arrr .name{
    position: absolute;
    left: 70px;;
    top:5px;
    font-size: 16px;

}
.arrr .phone{
    position: absolute;
    left: 70px;;
    bottom:10px;
    font-size: 14px;
}
</style>