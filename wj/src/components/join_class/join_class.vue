<template>
  <div class="join_class">
    <i class="iconfont icon-daohangjiantouzuodingbu" @click="go_back()"></i>
    <div class="warpper">
 
        <input type="text" placeholder="请输入班级邀请码"  class="class_num"/>
        <input type="button" value="加入" @click="join_class()" />
   
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import "../../../static/js/animation.js"
export default {
  methods: {
    ...mapActions(["footer_on"]),
    go_back() {
  
      this.$router.replace("./msite");
      this.footer_on(true);
    },
    join_class() {
     
      let num = document.querySelector('.class_num').value;
      $.ajax({
        url: "https://huangfufu.top:8080/qiluweb/class/join",
        type: "POST",
        data:{
          student_num:this.$store.state.num.slice(3),
          class_num:num

      },
    
        success: function(result) {
          if (result) {
              if(result.code == 1){
                 alert("加入成功");
                  sef.$router.replace("./msite");
                location.reload();
              }else{
                 alert(result.msg)
              }
        
       
           
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
       this.footer_on(false);
  }
};
</script>

<style scoped>
i {
  position: absolute;
  left: 10px;
  top: 10px;
  font-size: 20px;
}
.warpper {
  width: 80%;
  height: 400px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

input {
  width: 85%;
  height: 30px;
  position: absolute;
  left: 50%;

  top: 40%;
  transform: translate(-50%, -50%);
}
input:nth-last-of-type(1) {
  top: 55%;
  background: skyblue;
  outline: none;
  border:none;
  -webkit-outline: none;
   -webkit-border: none;
}
</style>
 