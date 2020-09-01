<template>
  <div class="msg">
    <p style="padding:10px 0 0 10px; position:relative; ">
      <i class="iconfont icon-jiantou2" @click="go_back()" style="font-size:28px;"></i>
      <span class="cla_name">{{cla_name}}</span>
    </p>
    <div class="warpper_content">
      <ul id="list_cot">
        <li v-for="(item,i) in msg_list_arr" :key="i" >
          <span :class="item.cla_img" >
            <img :src="item.img" alt="" >
              
          </span>
          <span :class="item.cla_cot" :id="item.cla_cot">{{item.msg_content}}</span>
        <span :class="item.cla_name">{{item.per_name}}</span>
        </li>
      </ul>
    </div>
    <div class="inp">
      <div class="inpu">
        <input type="text" id="content" />
        <span @click="up_for()">
          <i class="iconfont icon-fasong" style="font-size:25px;"></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";



export default {
  data() {
    return {
      key: true,
    
      msg_list:[],
      msg_key:true
      
    };
  },
  computed: {
    ...mapState(["cla_name", "msg_nums", "per_list","msg_list_arr"])
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

      $.ajax({
        url: "http://huangfufu.top:8080/qiluweb/chat/send",
        type: "POST",
        data: data,

        success: function(result) {
          if (result) {
          console.log(result)
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
  },
   created:function(){
     let ws = null;
   let sef  = this;
  let num = sef.$store.state.msg_nums;
  let per_num  = sef.$store.state.num.slice(3);
  let str = num + '_' + per_num;
  
  console.log(sef.$store.state.last_num.indexOf(num) == -1)
   if(sef.$store.state.last_num.indexOf(num) == -1){
     
    
      sef.$store.state.last_num.push(num);
     // sef.$store.state.last_num = sef.$store.state.msg_nums
     console.log(num,1111)
   ws =  new WebSocket(`ws://huangfufu.top:8080/qiluweb/websocket/${str}`);
    ws.onopen = function () {
		console.log("建立连接")
    ws.send(sef.$store.state.lass_num);
    //sef.$store.state.key_msg_web = false;
	}

	ws.onclose = function () {
	console.log("与服务器断开连接")
	}
	ws.onerror = function () {
		console.log("数据传输发生错误")
  }
  	ws.onmessage = function (receiveMsg) {
   let data = JSON.parse(receiveMsg.data);
   console.log(data,1111)
     if(data.msg_content){
       //console.log(sef.$store.state.name)
       if(data.per_name == sef.$store.state.name){

data.cla_img = "revers";
data.cla_cot = "reverse";
data.cla_name = "r_right"
       }else{
         data.cla_img = "msg_img";
data.cla_cot = "msg_cot";
data.cla_name = "r_left"
       }
let dom_ul = document.querySelector("#list_cot");
let dom_war= document.querySelector(".warpper_content");
console.log(dom_ul.offsetHeight,dom_war.offsetHeight)
if(dom_ul.offsetHeight >dom_war.offsetHeight){
  
  dom_ul.style.top =dom_ul.offsetTop -65 +'px';
}

//判断消息列表所属班级 
//let list_msg = sef.$store.state.msg_list_arr
// if(!list_msg.length){
  
//  list_msg.push({});
//  list_msg[0].name = num;
//  list_msg[0].list = [];
//  list_msg[0].list.push(data);

// }else{
//  list_msg.forEach(function(item,i){
//      if(item.name == num){
//        item.list.push(data);
//      }else{
      
//      }
//   })
// }
//  list_msg.forEach(function(item,i){
//      if(item.name == num){
//        item.list.push(data);
//        sef.msg_key = false;
//      }
//   })

//   if(sef.msg_key){
//     list_msg.push({data:num,list:[data]})
//   }
//  list_msg.forEach(function(item,i){
//      if(item.name == num){
      
//        sef.msg_list = item.list;
//        console.log(sef.msg_list)
//      }
//   })



sef.$store.state.msg_list_arr.push(data);

//console.log(sef.msg_list)
   }



	}

   }
   
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
  height: 80%;
  overflow: hidden;
  position: relative;

}
.warpper_content ul{
  width: 100%;
  position: absolute;
  left:0;
  top:0;
  padding:10px  10px 0 10px;



}
.warpper_content ul li{
   height: 50px;
  
  position: relative;
  margin-bottom: 10px;
}
.warpper_content ul li img{
  width: 100%;
  height: 100%;

}
.msg_img{
    width: 40px;
    height: 40px;
    left:0 ;
    top:0;
    position: absolute;
    border:1px solid salmon;
}
.msg_cot{
left:60px ;
    top:50%;
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
  height: 10%;

  position: absolute;
  bottom: 0;
  left: 5%;
}
.inpu {
  width: 100%;
  height: 35px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.inpu input {
  height: 90%;
  width: 80%;
  border-radius: 5px;
}
.inpu span {
  display: inline-block;
  width: 18%;

  height: 100%;
  position: absolute;
  text-align: center;
  line-height: 35px;
}
.revers{
    
   

    width: 40px;
    height: 40px;
 right:0 ;
    top:0;
    position: absolute;
    border:1px solid salmon;
    
}
.reverse{
right:60px ;
    top:50%;
    margin-top: -6px;
    position: absolute;
    
    height: 30px;
    font-size: 17px;
    border-radius: 5px;
    background: greenyellow;
    line-height: 30px;
    padding: 0 5px 0 5px;
}

.r_left{
position: absolute;
left:62px ;
color:darkgrey;
}
.r_right{
position: absolute;
right:62px ;
color:darkgrey;
}
</style>