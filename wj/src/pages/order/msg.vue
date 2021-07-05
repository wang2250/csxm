<template>
  <div class="msg">
    <div class="but">
      <p style="padding:10px 0 0 10px; position:relative; ">
        <i class="iconfont icon-daohangjiantouzuodingbu" @click="go_back()" style="font-size:28px;"></i>
        <span class="cla_name">{{cla_name}}</span>
      </p>
    </div>
    <div class="warpper_content">
      <ul id="list_cot">
        <li v-for="(item,i) in msg_list_arr" :key="i">
          <span :class="item.cla_img">
            <img :src="item.per_img" alt />
          </span>
          <span :class="item.cla_cot" :id="item.cla_cot">{{item.msg_content}}</span>
          <span :class="item.cla_name">{{item.per_name}}</span>
        </li>
      </ul>
    </div>
    <div class="inp">
      <input type="text" id="content" />
      <span @click="up_for()" @keyup.enter="up_for()">
        <i class="iconfont icon-fasong" style="font-size:25px;"></i>
      </span>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      key: true,
       nums:"",
      msg_list: [],
      msg_key: true,
      key_cla: true,
      key_first: true
    };
  },
  computed: {
    ...mapState(["cla_name", "msg_nums", "per_list", "msg_list_arr"])
  },
  methods: {
    ...mapActions(["login_on", "footer_on"]),
    go_back() {
      this.$router.replace("./order");
      this.footer_on(true);
    },
    up_for() {
      let sef = this;

      let data = {
        per_name: sef.$store.state.name,
        per_img: sef.$store.state.img,
        msg_content: document.querySelector("#content").value,
        class_num: sef.$store.state.msg_nums
      };


     let inp = document.querySelector("#content");
     inp.value = "";

      $.ajax({
        url: "https://huangfufu.top:8080/qiluweb/chat/send",
        type: "POST",
        data: data,

        success: function(result) {
          if (result) {
          }
        },
        error: function(err) {
          setTimeout(() => {
            alert("提交失败！");
          }, 500);
        }
      });
    }
  },
  created: function() {
    let ws = null;
    let sef = this;

    let on_teastu = sef.$store.state.num.slice(0, 2);
    let num = sef.$store.state.msg_nums;
    let per_num = sef.$store.state.num.slice(3);
    let str = num + "_" + per_num;
    if (on_teastu == "工号") {
      sef.$store.state.msg_teacher_arr.forEach(function(item, i) {
        if (item.ite == num) {
          sef.$store.state.msg_list_arr = item.data;
          sef.key_first = false;
        }
      });
      if (sef.key_first) {
        sef.$store.state.msg_list_arr = [];
      }
    }

    if (sef.$store.state.last_num.indexOf(num) == -1) {
      sef.$store.state.last_num.push(num);
      // sef.$store.state.last_num = sef.$store.state.msg_nums
 
      ws = new WebSocket(`wss://huangfufu.top:8080/qiluweb/websocket/${str}`);
      ws.onopen = function() {
        console.log("建立连接");
      };

      ws.onclose = function() {
        console.log("与服务器断开连接");
      };
      ws.onerror = function() {
        console.log("数据传输发生错误");
      };
      ws.onmessage = function(receiveMsg) {

        let data = JSON.parse(receiveMsg.data);
          let dom_ul = document.querySelector("#list_cot");
          let dom_war = document.querySelector(".warpper_content");
        if (data.msg_content) {
          
          if (data.per_name == sef.$store.state.name) {
            data.cla_img = "revers";
            data.cla_cot = "reverse";
            data.cla_name = "r_right";
          } else {
            data.cla_img = "msg_img";
            data.cla_cot = "msg_cot";
            data.cla_name = "r_left";
          }


          if (on_teastu == "学号") {
            sef.$store.state.msg_list_arr.push(data);
          } else {
            //主体循环
            sef.$store.state.msg_teacher_arr.forEach(function(item, i) {
              if (item.ite == num) {
                item.data.push(data);

                sef.$store.state.msg_list_arr = item.data;
                sef.key_cla = false;
              }
            });

            //没找到
            if (sef.key_cla) {
              sef.$store.state.msg_teacher_arr.push({ ite: num, data: [] });
              let nuu = sef.$store.state.msg_teacher_arr.length - 1;
              sef.$store.state.msg_teacher_arr[nuu].data.push(data);
              sef.$store.state.msg_list_arr =
                sef.$store.state.msg_teacher_arr[nuu].data;
            }
          }
        }
  if (sef.$store.state.msg_list_arr.length > sef.nums) {
             dom_ul.style.top = dom_ul.offsetTop - 60 + "px";
             sef.$store.state.dom_top = dom_ul.offsetTop;
          }
         
      };
    }
  },
   mounted(){
               let dom_war = document.querySelector(".warpper_content");
  this.nums = dom_war.offsetHeight/60

//   let msg_nums =  this.$store.state.msg_list_arr.length * 60;
  let ul_war = document.querySelector("#list_cot");

 ul_war.style.top = this.$store.state.dom_top +"px"
// console.log(this.$store.state.msg_list_arr.length)

   }
};
</script>
<style scoped>
.msg {
  width: 100%;
  height: 100%;
  position: relative;
}
.cla_name {
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 16px;
  width: 80px;
  height: 40px;
  line-height: 40px;

  text-align: center;
  margin: -15px 0 0 -40px;
}
.warpper_content {
  width: 90%;

  margin: 0 auto;
  height: 86%;
  overflow: hidden;
  position: relative;
  
}
.warpper_content ul {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 10px 10px 0 10px;
}
.warpper_content ul li {
  height: 50px;

  position: relative;
  margin-bottom: 10px;
}
.warpper_content ul li img {
  width: 100%;
  height: 100%;
}
.msg_img {
  width: 40px;
  height: 40px;
  left: 0;
  top: 0;
  position: absolute;
}
.msg_cot {
  left: 60px;
  top: 50%;
  margin-top: -6px;
  position: absolute;

  height: 30px;
  font-size: 17px;
  border-radius: 5px;
  background: greenyellow;
  line-height: 30px;
  padding: 0 5px 0 5px;
}
.inp {
  width: 90%;
  height: 7%;

  position: absolute;
  bottom: 0;
  left: 5%;
  
}
.inp span {
  position: absolute;
  right: 5px;
  top: 5px;
}
.revers {
  width: 40px;
  height: 40px;
  right: 0;
  top: 0;
  position: absolute;
}
.reverse {
  right: 52px;
  top: 50%;
  margin-top: -6px;
  position: absolute;

  height: 30px;
  font-size: 17px;
  border-radius: 5px;
  background: greenyellow;
  line-height: 30px;
  padding: 0 5px 0 5px;
}

.r_left {
  position: absolute;
  left: 54px;
  color: darkgrey;
}
.r_right {
  position: absolute;
  right: 54px;
  color: darkgrey;
}
.but {

  height: 7%;
}
#content {
  height: 30px;
  width: 80%;
  outline: none;
  border:none;
  border: 1px solid gray;
}
</style>