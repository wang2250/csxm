<template>
  <div>
    <div class="to_back" style="font-size:15px; margin:15px 0 0 10px;" @click="back_inp()">
      <i class="iconfont icon-daohangjiantouzuodingbu"></i>
      添加课程
    </div>

    <div class="warpper">
      <ul>
        <li>
          <svg class="icon" aria-hidden="true" style="width:30px">
            <use xlink:href="#icon-kecheng1" />
          </svg>
          <input type="text" class="cou_name" placeholder="课程名称" />
        </li>
        <li>
          <svg class="icon" aria-hidden="true" style="width:30px;top:-9px">
            <use xlink:href="#icon-naozhongshijian" />
          </svg>
          <!-- <input type="text" class="cou_name" placeholder="授课时间"> -->
          <select class="week_list" id="week" style=" margin-left:35px;">
            <option value="1">星期一</option>
            <option value="2">星期二</option>
            <option value="3">星期三</option>
            <option value="4">星期四</option>
            <option value="5">星期五</option>
          </select>

          <select id="one_time">
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
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
          </select>:
          <select id="two_time">
            <option value="00">00</option>
            <option value="10">10</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>~
          <select id="three_time">
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
             <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </select>:
          <select id="four_time">
            <option value="00">00</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </li>
        <li>
          <svg class="icon" aria-hidden="true" style="width:30px">
            <use xlink:href="#icon-xiaochengxu_tubiao" />
          </svg>
          <input type="text" class="cou_position" placeholder="授课地点" />
        </li>
        <li>
          <svg class="icon" aria-hidden="true" style="width:30px">
            <use xlink:href="#icon-wode" />
          </svg>
          <input type="text" class="cou_teacher" placeholder="授课老师" />
        </li>
        <li>
          <svg class="icon" aria-hidden="true" style="width:25px;top:0;">
            <use xlink:href="#icon-PHONEBOOK" />
          </svg>
          <input type="text" class="cou_teacher_tel" placeholder="老师电话" />
        </li>
        <li>
          <p @click="go_creat()">添加课程</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["footer_on"]),
    back_inp() {
      this.$router.replace("./class_r");
      this.footer_on(false);
    },
    go_creat() {
      let sef = this;

      //获取数据
      let week = document.querySelector("#week");
      let index = week.selectedIndex;
      let one_time = document.querySelector("#one_time");
      let index_one = one_time.selectedIndex;
      let two_time = document.querySelector("#two_time");
      let index_two = two_time.selectedIndex;
      let three_time = document.querySelector("#three_time");
      let index_three = three_time.selectedIndex;
      let four_time = document.querySelector("#four_time");
      let index_four = four_time.selectedIndex;
      let cla_name = document.querySelector(".cou_name");
      let cla_posi = document.querySelector(".cou_position");
      let cla_tea = document.querySelector(".cou_teacher");
      let cla_tea_tel = document.querySelector(".cou_teacher_tel");
      let numms = `${[
        one_time.options[index_one].value,
        two_time.options[index_two].value,
        three_time.options[index_three].value,
        four_time.options[index_four].value
      ]}`;
      let data = {
        class_num: sef.$store.state.creat_numss,
        cou_name: cla_name.value,
        cou_position: cla_posi.value,
        cou_teacher: cla_tea.value,
        cou_teacher_tel: cla_tea_tel.value,
        cou_week: week.options[index].value,
        cou_time: numms
      };

      

      //请求提交

      $.ajax({
        url: "https://huangfufu.top:8080/qiluweb/classtable/add",
        type: "POST",
        data: data,

        success: function(result) {
          if (result) {
            alert(result.msg);
            $.ajax({
              url:
                "https://huangfufu.top:8080/qiluweb/classtable/findbyteacher",
              type: "POST",
              data: {
                lass_num: sef.$store.state.num.slice(3)
              },
              success: function(result) {
                if (result) {
                  if (result.code == 1) {
                    sef.$store.state.week_list = result.data;
                  }
                }
              },
              error: function(err) {
                setTimeout(() => {
          
                  alert("提交失败！");
                }, 500);
              }
            });
            sef.$router.replace("./class_r");
            sef.footer_on(false);
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
  created: function() {},
  mounted() {},
  computed: {
    ...mapState(["class_list", "class_na"])
  }
};
</script>
<style scoped>
.warpper {
  width: 90%;

  margin: 0 auto;
  margin-top: 30px;
}
.warpper li {
  width: 100%;

  margin-bottom: 15px;
  position: relative;
}
.warpper li input {
  display: inline-block;
  border: none;
  outline: none;
  height: 30px;
  margin: 0 0 10px 35px;
  width: 220px;
  border-bottom: 1px solid grey;
}
.warpper li p {
  width: 260px;
  height: 35px;
  border: 1px solid beige;
  line-height: 35px;
  text-align: center;
  background: skyblue;
  color: white;
}
.warpper select {
  outline: none;
  border: none;
  border-bottom: 1px solid gray;
  color: gray;
  padding-bottom: 3px;
}
.warpper .week_list {
  padding-bottom: 3px;
}
svg {
  position: absolute;
  top: 0px;
}
</style>