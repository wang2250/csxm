<template>
  <div class="profile">
    <div class="to_back" style="font-size:20px; margin:8px 0 0 10px;" @click="back_inp()">
      <i class="iconfont icon-jiantou1"></i>
    </div>
    <div class="list">
      <form id="formData">
        <p style="margin:0;font-size:15px">
          <span>学校</span>
        </p>
        <p>
          <input
            type="text"
          
            name="school"
            style="display:inline-block; margin-right:5px;"
            placeholder="山东协和学院"
          />
         
        </p>
        <p style="margin:0;font-size:15px">
          <span>工号/学号</span>
          <span>
            <span
              style="display:inline-block;width:10px;height:10px;border:1px solid #e4e0e0"
              @click="change()"
              class="change_on"
            ></span> 我是老师
          </span>
        </p>

        <p>
          <input type="text" :placeholder="on_teacher" :name="num" />
        </p>
        <p>
          <input type="text" placeholder="请输入姓名" name="name" />
        </p>
        <p>
          <input type="text" placeholder="请输入联系方式" name="phone" />
        </p>
        <p style="font-size:16px;">
          <!-- <input type="text" placeholder="性别" name="sex"></p> -->性别：
<select style="font-size:16px;" name="sex">
  <option value="男">男</option>
  <option value="女">女</option>
  
</select >
        <p>
          <input type="password" placeholder="密码" name="password" @focus="fou()" />
        </p>
        <p style="margin-bottom:4px;">
          <input type="password" placeholder="确认密码" @focus="fou()" />
        </p>
        <p style="font-size:8px; color:darkgrey">
          <span>(数字字母符合搭配组合)</span>
        </p>
        <p>
          <span style="display:block;width:400px;margin:0 auto">
            <span
              style="display:inline-block;width:10px;height:10px;border:1px solid #e4e0e0"
              class="ido"
              @click="i_do()"
            ></span>
            同意协议
            <span style="color:green">《和和通使用协议》</span>
            <span class="pass_on"></span>
          </span>
        </p>
        <p>
          <input type="button" value="注册" class="reg_sub" @click="sub()" id="submit" />
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      on_teacher: "学号",
      teacher_key: true,
      i_do_key: true,
      num: "student_num"
    };
  },
  computed: {},
  components: {},
  methods: {
    // ...mapActions(["footer_on"]),
    // to_login() {
    //   this.$router.replace("./login");
    //   this.footer_on(false);
    // }
    change() {
      let dom = document.querySelector(".change_on");
      if (this.teacher_key) {
        this.on_teacher = "工号";
        this.teacher_key = false;
        dom.style.backgroundColor = "green";
        this.num = "teacher_num";
      } else {
        this.on_teacher = "学号";
        this.teacher_key = true;
        dom.style.backgroundColor = "";
        this.num = "student_num";
      }
    },
    i_do() {
      let dom = document.querySelector(".ido");
      let but = document.querySelector(".reg_sub");
      if (this.i_do_key) {
        this.i_do_key = false;
        dom.style.backgroundColor = "green";
        but.style.backgroundColor = "green";
      } else {
        this.i_do_key = true;
        dom.style.backgroundColor = "";
        but.style.backgroundColor = "";
      }
    },
    back_inp() {
      this.$router.replace("./login");
    },
    sub() {
         let formData = document.querySelector("#formData");
      let inp = formData.querySelectorAll("input");
      let arr = [].slice.call(inp);
      let arrpass = arr[4];
       let num = arr[4].value;
      let arrpass2 = arr[5];
       let dom = document.querySelector(".pass_on");
       let sef = this;
      function to_sub() {
     

     
        if (arr[4].value != arr[5].value) {
          dom.innerHTML = "两次密码不一致";
          return false;
        } else if (arr[4].value.length > 16) {
          dom.innerHTML = "密码长度过长";
          return false;
        } else if (arr[4].value.length < 8) {
          dom.innerHTML = "密码长度过短";
          return false;
        } else {
          let passwordStrength = function(num) {
            console.log(num);
            let passwordLevel = ["弱", "普通", "较强", "强"];
            let arr = new Array(4); // 记录密码等级
            num
              .split("")
              .map(e => e.charCodeAt())
              .forEach(e => {
                if (e >= 48 && e <= 57) {
                  arr[0] = 1;
                } else if (e >= 65 && e <= 90) {
                  arr[1] = 1;
                } else if (e >= 91 && e <= 122) {
                  arr[2] = 1;
                } else {
                  arr[3] = 1;
                }
              });
            return passwordLevel[arr.reduce((a, b) => a + b) - 1];
          };
          if (passwordStrength(num) == "较强" || passwordStrength(num) == "强") {
            return true;
          } else {
            console.log(passwordStrength(num))
            dom.innerHTML = "密码过于简单";
            return false;
          }
        }
      }
      if (!to_sub()) {
        arrpass.style.borderBottom = "1px solid red";
        arrpass2.style.borderBottom = "1px solid red";
        dom.style.color = "red";
        return false;
      }

  let form = new FormData(document.querySelector("#formData"));
  $.ajax({
    url: 'https://huangfufu.top:8080/qiluweb/number/singin',
    type: "post",
    data: form,
    cache: false,
    processData: false,
    contentType: false,
    success: function (result) {
 
      if (result) {
       
    console.log(result);
        setTimeout(() => {
          if(result.code == 1){
          alert("提交成功");
          sef.$router.replace("./login");
          }else{
          alert(result.msg);
          }
          
          
        }, 500);

      }
    },
    error: function (err) {
     
      setTimeout(() => {

        alert("提交失败！");
      
      }, 500)

    }
  
  })
    },
    fou() {
      let formData = document.querySelector("#formData");
      let inp = formData.querySelectorAll("input");
      let arr = [].slice.call(inp);
      let dom = document.querySelector(".pass_on");
      dom.innerHTML = "";
      arr[4].style.borderBottom = "";
      arr[5].style.borderBottom = "";
    }
  },
  mounted() {}
};
</script>

<style scoped>
.list {
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;
  position: relative;
}
p {
  margin-bottom: 15px;
}
p input {
  height: 38px;
  width: 95%;
  border: none;
  outline: none;
  border-bottom: 1px solid darkgrey;
}
.reg_sub {
  border-radius: 20px;
  color: white;
  font-size: 18px;
  width: 85%;
  margin: 0 auto;
  display: block;
  height: 40px;
  background: darkgrey;
}
.to_school {
  position: absolute;
  right: 15px;
  top: 30px;
}
</style>