<template>
  <div class="login_ind">
    <div class="login_top">
      <i class="iconfont icon-jiantou2" @click="go_back()"></i>
    </div>
    <div class="login_body">
      <form action="#" method="POST" id="formData">
        <span class="up" :class="{xian:show}" @click="up_on()">老师</span>
        <span class="ph" :class="{xian:!show}" @click="ph_on()">学生</span>

        <div class="up_go" v-if="show">
          <input type="text" value="山东协和学院" name="school" />
          <input type="text" name="name" placeholder="请输入姓名" class="nam" @focus="change_color()"/>
          <input type="text" placeholder="请输入工号" name="teacher_num" class="num" />

          <input type="password" placeholder="请输入登录密码" name="password" />

          <input type="button" class="sub" value="登录" @click="log_in()" />
        </div>

        <!---->
        <div class="ph_go" v-if="!show">
          <input type="text" value="山东协和学院" name="school" />
          <input type="text" name="name" placeholder="请输入姓名" class="nam" @focus="change_color()"/>
          <input type="text" placeholder="请输入学号" name="student_num" class="num" />

          <input type="password" placeholder="请输入登录密码" name="password" />

          <input type="button" class="sub" value="登录" @click="log_in()" />
        </div>
      </form>
    </div>
    <div class="buttom">
      <span>没有账号?</span>
      <span style="color:#02a774;" @click="go_reg()">立即注册&gt;</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import "../../../static/js/animation.js";
export default {
  data() {
    return {
      show: true
    };
  },
  computed: {
    ...mapState(["login", "name", "num"]),
    numType: {
      get() {
        return this.$store.state.num;
      },
      set(val) {
        this.$store.state.num = val;
      }
    }
  },
  components: {},
  methods: {
    ...mapActions(["login_on", "footer_on"]),
    go_back() {
      this.$router.replace("./Profile");
      this.footer_on(true);
    },
    ph_on() {
      this.show = false;
    },
    up_on() {
      this.show = true;
    },
    go_reg() {
      this.$router.replace("./reg");
    },
    log_in() {
      let sef = this;
      let form = new FormData(document.querySelector("#formData"));
      let inp = document.querySelector("#formData").querySelector(".num");
      let name = document.querySelector("#formData").querySelector(".nam");
      if (inp.name == "student_num") {
        this.$store.state.num = `学号：${inp.value}`;
        this.$store.state.name = name.value;
      } else {
        this.$store.state.num = `工号：${inp.value}`;
        this.$store.state.name = name.value;

        //       login_on(false);
        //       sef.name = result.name;
      }
      $.ajax({
        url: "http://huangfufu.top:8080/qiluweb/number/login",
        type: "post",
        data: form,
        cache: false,
        processData: false,
        contentType: false,
        success: function(result) {
          if (result) {
            setTimeout(() => {
              if (result.code == 1) {
                sef.$store.state.footer_on = true;
                sef.$store.state.login = false;
                sef.$router.replace("./Profile");
                let user = {
                  num: sef.$store.state.num,
                  name: sef.$store.state.name,
                  sex: result.sex,
                  img: sef.$store.state.img
                };

                localStorage.setItem("user", JSON.stringify(user));

                location.reload();
              } else {
                alert(result.msg);
              }
            }, 500);
          }
        },
        error: function(err) {
          setTimeout(() => {
            alert("提交失败！");
          }, 500);
        }
      });
    },
    change_color(){
      let sub = document.querySelector(".sub");
      sub.style.background = "#02a774"
    }
  }
};
</script>

<style scoped>
.up {
  margin-left: 50px;
}
.ph {
  margin-right: -10px;
}
.login_ind {
  width: 100%;
  background: white;
}
.iconfont {
  font-size: 32px;
  margin: 10px 0 0 5px;
}
.login_body {
  width: 80%;
  height: 400px;
 margin:0 auto;
 
  position: relative;
}
span {
  display: inline-block;
}
.login_body form {
  width: 100%;
  height: 300px;


  position: relative;
}
.login_body .up,
.ph {
  position: absolute;

  top: 40px;

  height: 43px;
  font-size: 16px;
  padding: 5px;
  box-sizing: border-box;
  line-height: 40px;
}
.ph {
  left: 180px;
}
.xian {
  border-bottom: 2px solid #02a774;
  color: #02a774;
  font-weight: bold;
}
.login_body input {
  margin-bottom: 10px;
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  border-bottom: 1px solid #e4e0e0;
}
.login_body form div {
  position: absolute;
  top: 90px;
  width: 100%;
  height: 200px;
}

.login_body form .ph_go .yz_warpper {
  width: 250px;
  height: 32px;
  border: 1px solid darkgrey;
  background: white;
  margin-bottom: 10px;
  line-height: 32px;
}

.sub {

  border-radius: 20px;
  background: #e4e0e0;
  color: white;
  font-size: 15px;
}
.login_top {
  margin: 5px 0 0 5px;
}
.buttom {
  position: absolute;
  bottom: 40px;
  left: 50%;
  font-size: 15px;
  margin-left: -80px;
}
</style>