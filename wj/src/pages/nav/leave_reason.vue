<template>
  <div class="nav">
    <div class="to_back" style="font-size:20px; margin:8px 0 0 7px;" @click="back_inp()">
      <i class="iconfont icon-daohangjiantouzuodingbu"></i>
    </div>
    <div class="war">
      <h2>
        您的请假申请：
        <span style="color:red">{{msg}}</span>
      </h2>
      <div v-if="key">
        <h2>请假时间</h2>
        <h3>3</h3>
        <h2>老师留言：</h2>

        <textarea name="" id="" cols="30" rows="5" :placeholder="cont"></textarea>
        <h2>电子签名凭证：</h2>
        <img :src="leave_img" alt />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      msg: "未审批",
      cont: "",
      key: false,
      leave_img: ""
    };
  },
  methods: {
    ...mapActions(["footer_on"]),
    back_inp() {
      this.$router.replace("./leave");
      this.footer_on(false);
    }
  },
  created: function() {
    let sef = this;
    let data = {
      student_nun: sef.$store.state.num.slice(3),
      lass_num: sef.$store.state.lass_num
    };
    console.log(data);
    $.ajax({
      url: "https://huangfufu.top:8080/qiluweb/leave/studentdetails",
      type: "POST",
      data: data,

      success: function(result) {
        if (result) {
          console.log(result);
          if (result.msg != "暂无请假信息") {
            if (result.data.key) {
              sef.msg = "成功";
              sef.key = true;
              sef.cont = result.data.msg;
              sef.leave_img = result.data.img_name;
            } else {
              if (result.data.msg) {
                sef.msg = "失败";
                sef.key = true;
                sef.cont = result.data.msg;
              }
            }
          }
        }
      },
      error: function(err) {
        setTimeout(() => {
          alert("创建失败！");
        }, 500);
      }
    });
  }
};
</script>
<style scoped>
.war{
  width: 80%;
  margin: 0 auto;
}
img{
  width: 100%;
  height: 200px;
}
 
</style>