<template>
  <div>
    <div class="to_back" style="font-size:25px; margin:8px 0 10px 7px;" @click="back_inp()">
      <i class="iconfont icon-daohangjiantouzuodingbu" style="font-size:25px;"></i>
    </div>
    <div class="warpper">
      <h2 >申请请假：</h2>
      <div class="stu_to" v-if="key">
        <form id="formData" enctype="multipart/form-data">
          <input type="text" name="student_nun" :value="stu_num" style="display:none" />
          <input type="text" name="lass_num" :value="lass_num" style="display:none" />
          <input type="text" name="student_name" :value="name" style="display:none" />
          <textarea name="reason" placeholder="请输入你的请假原因"></textarea>
          <div style="margin:0 0 20px 3px;">
            <h3>
              上传图片凭证：
            </h3>
            <input type="file" name="reason_img" id="img_file"    style="display:none"/>

         <svg class="icon" aria-hidden="true"  @click="go_too()">
              <use xlink:href="#icon-picture" />
            </svg>
          </div>
          <div style="margin:0 10px 0 4px;">
            <h3>请假时间：</h3>

            <select name id="one">
              <option value="01">1</option>
              <option value="02">2</option>
              <option value="03">3</option>
              <option value="04">4</option>
              <option value="05">5</option>
              <option value="06">6</option>
              <option value="07">7</option>
              <option value="08">8</option>
              <option value="09">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>号
            <select name id="two">
               <option value="01">1</option>
              <option value="02">2</option>
              <option value="03">3</option>
              <option value="04">4</option>
              <option value="05">5</option>
              <option value="06">6</option>
              <option value="07">7</option>
              <option value="08">8</option>
              <option value="09">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>点 ~ 
            <select name id="three">
              <option value="01">1</option>
              <option value="02">2</option>
              <option value="03">3</option>
              <option value="04">4</option>
              <option value="05">5</option>
              <option value="06">6</option>
              <option value="07">7</option>
              <option value="08">8</option>
              <option value="09">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>号
            <select name id="four">
              <option value="01">1</option>
              <option value="02">2</option>
              <option value="03">3</option>
              <option value="04">4</option>
              <option value="05">5</option>
              <option value="06">6</option>
              <option value="07">7</option>
              <option value="08">8</option>
              <option value="09">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>点
          </div>

          <p class="sub" style="margin-bottom:10px;" @click="upload_leave()">提交申请</p>
          <p class="reason" @click="leave_reason()">
            查看我的电子请假条
            <i class="iconfont icon-weimingmingwenjianjia_jiantou"></i>
          </p>

        </form>
      </div>

      <ul v-else>
        <li>
          <span class="name">姓名 学号（班级名称）</span>
          <i class="see">请假原因</i>
          <i
            class="iconfont icon-weimingmingwenjianjia_jiantou"
            style="float:right; font-size:30px;margin:5px 4px 0 0 ;"
            @click="leave_go()"
          ></i>
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
       
    };
  },
  methods: {
    ...mapActions(["footer_on"]),
    back_inp() {
      this.$router.replace("./msite");
      this.footer_on(true);
    },
    leave_go() {
      //组件传值
      this.$router.replace("./leave_to");
    },
    leave_reason() {
      this.$router.replace("./leave_reason");
      this.footer_on(false);
    },
    go_too(){
      let dom = document.querySelector("#img_file")
  dom.click()
    },
    upload_leave() {
     let one  = document.querySelector("#one");
    let two  = document.querySelector("#two");
    let three  = document.querySelector("#three");
    let four  = document.querySelector("#four");
  

     let nums = one.options[one.selectedIndex].value + 
     two.options[two.selectedIndex].value +
     three.options[three.selectedIndex].value + 
     four.options[four.selectedIndex].value

     

      let form = new FormData(document.querySelector("#formData"));
      form.append("leave_time",nums);
   
      $.ajax({
        url: "https://huangfufu.top:8080/qiluweb/leave/gotoleave",
        type: "POST",
        data: form,
        cache: false,
        processData: false,
        contentType: false,
        success: function(result) {
          if (result) {
       
            alert(result.msg);
          }
        },
        error: function(err) {
          setTimeout(() => {
            alert("创建失败！");
          }, 500);
        }
      });
    },
  },
  computed: {
    ...mapState(["lass_num", "name", "num"]),
    key() {
      if (this.$store.state.num.slice(0, 2) == "工号") {
        return false;
      } else {
        return true;
      }
    },
    stu_num() {
      return this.num.slice(3);
    }
  }
};
</script>
<style scoped>
.warpper {
  width: 90%;

  float: right;
}
.but {
  width: 95%;
  height: 40px;
  border: 1px solid #02a774;
  border-radius: 15px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  margin-bottom: 10px;
}
.but .iconfont {
  font-size: 30px;
}
.but .text {
  position: relative;
  top: -4px;
}
ul {
  border-radius: 5px;
}
ul li {
  width: 100%;
  height: 50px;
  margin-left: 5px;
  margin-bottom: 5px;
  position: relative;
}

li .name {
  position: absolute;
  left: 5px;
  top: 0px;
  font-size: 18px;
}
li .see {
  position: absolute;
  left: 5px;
  top: 28px;

  width: 100px;
  height: 20px;
}
.stu_to {
  width: 100%;
}
.stu_to textarea {
  width: 85%;
  height: 50px;
  margin: 0 0 10px 5px;
}
.sub {
  width: 200px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: white;
  background: skyblue;
  margin-top: 25px;
}
.reason {
  width: 140px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: skyblue;
}
select{
  border: none;
  outline: none;
  -webkit-border: none;
  -webkit-outline: none;
  width: 40px;
  border-bottom: 1px solid gray;
}
</style>