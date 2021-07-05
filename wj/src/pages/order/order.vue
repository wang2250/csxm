<template>
  <div class="order">
    <div class="warpper">
      <ul>
        <li @click="go_tz()">
          <span class="img">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-ziyuan" />
            </svg>
          </span>
          <span class="name" style="font-size:15px;">通知助手</span>
          <span class="time"></span>
          <span class="msg_num">
  <i class="iconfont icon-lingdang" style="font-size:8px;"></i>
          </span>
          <span class="msg_content"></span>
        </li>
        <li
          v-for="(item,i) in cl_list"
          v-bind:key="i"
          @click="msg_go(item.personnel_list[0].invite_num,item.personnel_list,item.class_name)"
        >
          <span class="img">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-qunzu" />
            </svg>
          </span>
          <span class="name" style="font-size:15px;" >{{item.class_name}}</span>
          <span class="time" v-if="msg_last[i]">{{msg_last[i][0].time.split(" ")[1]}}</span>
          <span class="msg_num" v-if="msg_last[i]">{{msg_last[i][0].numss}}</span>
          <span class="msg_content" v-if="msg_last[i]">{{msg_last[i][0].per_name}}{{fuhao}} {{msg_last[i][0].msg_content}}</span>
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
      key: true,
      list: [],
      times:"",
      cot:"",
      names:"",
      nums:0,
      msg_last:[],
      fuhao:""
    };
  },
  methods: {
    ...mapActions(["login_on", "footer_on"]),
    msg_go(inv_num, per_list, cla_name) {
      this.$store.state.msg_nums = inv_num;
      this.$store.state.per_list = per_list;
      this.$store.state.cla_name = cla_name;
      this.$router.replace("./msg");
      this.footer_on(false);
    },
    go_tz(){
      this.$router.replace("./tz");
      this.footer_on(false);
    }
  },
  computed: {
    ...mapState(["cl_list","class_list","msg_teacher_arr","msg_list_arr"])
  },
  created: function() {
    let sef = this;
    let data = null;
    let nums = this.$store.state.num.slice(0, 2);
    let num = this.$store.state.num.slice(3);
    if (nums == "工号") {
      data = {
        teacher_num: num
      };
    } else if (nums == "学号") {
      data = {
        student_num: num
      };
    }

    $.ajax({
      url: "https://huangfufu.top:8080/qiluweb/class/findclass",
      type: "POST",
      data: data,

      success: function(result) {
        if (result) {
          if (sef.$store.state.cla_number != result.class_list.length) {
            sef.$store.state.cl_list = result.class_list;
          }
          sef.$store.state.cla_number = result.class_list.length;

          if (result.class_list.length != 0) {
            sef.key = false;
          }
        }
      },
      error: function(err) {
        setTimeout(() => {
 
          alert("提交失败！");
        }, 500);
      }
    });





if(sef.$store.state.num.slice(0,2) == "工号"){
if(sef.$store.state.msg_teacher_arr.length){
  sef.msg_teacher_arr.forEach(function(item,i){
    if(item.data.length){
       sef.fuhao = ":"
      sef.msg_last[i] = item.data;
      sef.msg_last[i][0].numss = item.data.length
    }
  })
}
}else if(sef.$store.state.num.slice(0,2) == "学号"){
  if(sef.msg_list_arr.length){
    sef.fuhao = ":"
 let nums = sef.msg_list_arr.length-1
  sef.msg_last[0] = [];
   sef.msg_last[0].push(sef.msg_list_arr[nums]);
   sef.msg_last[0][0].numss = nums+1;
  
  } 
}
if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          sef.$store.state.lo = position.coords.longitude
         sef.$store.state.la = position.coords.latitude
        });
      } 
    
  }
};
</script>
<style scoped>
.warpper {
  position: relative;
  width: 96%;
  margin: 0 auto;
  margin-top: 10px;
}
ul li {
  position: relative;

  height: 52px;
  margin-bottom: 5px;
}
ul li .img {
  position: absolute;
  left: 4px;
  top: 0px;
  width: 50px;
  height: 48px;
  /* border:1px solid black; */
}
ul li .img {
  box-sizing: border-box;
  padding: 5px 0 0 5px;
}
ul li .name {
  position: absolute;
  left: 65px;
  top: 0px;
}
ul li .time {
  position: absolute;
  right: 5px;
}
ul li .msg_num {
  position: absolute;
  right: 5px;
  bottom: 8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: red;
  text-align: center;
  line-height: 20px;
  color: white;
}
ul li .msg_content {
  position: absolute;
  left: 65px;
  bottom: 3px;
  color: darkgray;
}
</style>