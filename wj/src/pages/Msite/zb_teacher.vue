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
          <span class="see" @click="on_to($event,item.personnel_list[0].invite_num)"></span>
        </li>
      </ul>
      <span @click="creat()" class="sucss">确定</span>
    </div>
    <div class="warpper">
      <form id="formData" enctype="multipart/form-data">
        <p class="title">
          标题：
          <input type="text" name="title" />
        </p>
        <p class="person_list">
          <span>收件人</span>
          <span class="per_num" @click="go_per()">*所有班级成员</span>
        </p>
        <p class="text_content">
          内容：
          <textarea name="content"></textarea>
        </p>

        <p class="go_send" @click="go_to_on()">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-A" />
          </svg>
          <span>发送</span>
        </p>
        <span v-if="key" style="color:grey">正在提交中。。。</span>
      </form>

      <p style="color:grey;margin-top:10px;">*本年度的第{{week}}周</p>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      color_key: true,
      list_to: [],
      num_lto: "",
      key: false,
      week:""
    };
  },
  methods: {
    ...mapActions(["footer_on"]),
    back_inp() {
      this.$router.replace("./msite");
      this.footer_on(true);
    },
    go_to_jou() {
      this.$router.replace("./day_jou");
      this.footer_on(false);
    },
    on_to(e, nums) {
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
    creat() {
      let dom = document.querySelector(".two");
      dom.style.display = "none";
      let sef = this;
      let data = {
        lass_num: sef.num_lto
      };
    
    },
    go_img() {
      let dom = document.querySelector("#img_file");
      dom.click();
    },
    go_per() {},
    go_to_on() {
      let sef = this;
      let form = new FormData(document.querySelector("#formData"));
      form.append("class_num", this.num_lto);
      let d1 = new Date();
      let d2 = new Date();
      d2.setMonth(0);
      d2.setDate(1);
      let rq = d1 - d2;
      let s1 = Math.ceil(rq / (24 * 60 * 60 * 1000));
      let s2 = Math.ceil(s1 / 7);
 
      form.append("week", s2);
      this.key = true;
      $.ajax({
        url: "https://huangfufu.top:8080/qiluweb/weekly/creat",
        type: "POST",
        data: form,
        cache: false,
        processData: false,
        contentType: false,
        success: function(result) {
          if (result) {
            sef.key = false;
            alert(result.msg);
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
  created: function() {
    this.list_to = this.$store.state.class_list_fist;
  },

  mounted() {
         let d1 = new Date();
      let d2 = new Date();
      d2.setMonth(0);
      d2.setDate(1);
      let rq = d1 - d2;
      let s1 = Math.ceil(rq / (24 * 60 * 60 * 1000));
      let s2 = Math.ceil(s1 / 7);
     this.week  = s2;
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

.title {
  width: 100%;
  height: 40px;

  margin-bottom: 15px;
  font-size: 18px;
  color: gray;
  border-bottom: 1px solid gray;
}
.title input {
  width: 200px;
  height: 30px;
  outline: none;
  border: none;
}
.person_list {
  width: 100%;
  height: 40px;
  display: inline-block;
  line-height: 40px;
  margin-bottom: 15px;
  font-size: 16px;
  color: gray;
  border-bottom: 1px solid gray;
}
.person_list span:nth-last-of-type(1) {
  color: aqua;
}

.text_content {
  width: 100%;
  height: 200px;
  font-size: 18px;
  margin-bottom: 15px;
  color: gray;
}
.text_content textarea {
  width: 100%;
  height: 100%;
  margin-top: 5px;
}
.imgs {
  width: 100%;
  height: 30px;
  position: relative;
  margin-top: 45px;
}
.imgs .icon {
  width: 30px;
}
.imgs input {
  display: none;
}
.go_send {
  width: 30%;
  height: 40px;

  margin-top: 35px;
  display: inline-block;
  position: relative;
  background: skyblue;
  line-height: 40px;
}
.go_send .icon {
  width: 30px;
  margin-right: 10px;
}
.go_send span {
  position: absolute;
  color: white;
  font-size: 18px;
  margin-bottom: 10px;
}
.dob_cli {
  position: absolute;
  color: grey;
  top: 15px;
  left: 40px;
}
</style>