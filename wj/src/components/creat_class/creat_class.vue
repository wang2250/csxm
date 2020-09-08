<template>
  <div class="join_class">
    <i class="iconfont icon-daohangjiantouzuodingbu" @click="go_back()"></i>
    <div class="warpper">
      <form  id="formData" method="POST" action="#">
        <input type="text" name="teacher_num" :value="num" />
        <input type="text" placeholder="请输入班级名称" class="name" name="class_name" />
        <input type="button" value="创建"  @click="creat_class()"/>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      num: this.$store.state.num.slice(3)
    };
  },
  methods: {
    ...mapActions(["footer_on"]),
    go_back() {
      this.$router.replace("./msite");
      this.footer_on(true);
    },
    creat_class() {
      let sef = this;
      let cla = document.querySelector(".name");
      if (cla.value == "") {
        alert("请输入班级名称");
        return;
      }

      let form = new FormData(document.querySelector("#formData"));
   
      $.ajax({
        url: "https://huangfufu.top:8080/qiluweb/class/creat",
        type: "POST",
        data: form,
        cache: false,
        processData: false,
       contentType: false,
        success: function(result) {
          if (result) {
            console.log(result);
            setTimeout(() => {
              if (result.code == 1) {
                sef.$store.state.footer_on = true;
                alert("创建成功！");
                sef.$router.replace("./msite");
              } else {
                alert(result.msg);
              }
            }, 500);
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
  width: 90%;
  height: 35px;
  position: absolute;
  left: 50%;

  top: 40%;
  transform: translate(-50%, -50%);
} 
input:nth-last-of-type(1) {
  top: 55%;
  background: #02a774;
  border:none;
  outline: none;
  color:white;
} 

</style>
 