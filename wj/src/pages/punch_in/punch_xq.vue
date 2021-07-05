<template>
  <div>
    <p style="padding-left:10px; margin-top:10px">
      <i class="iconfont icon-daohangjiantouzuodingbu" @click="go_back()" style="font-size:28px;"></i>
    </p>
    <div class="list">
      <h2>已签到</h2>
      <ul class="punch">
        <li v-for="(item,i) in punch" v-bind:key="i">
          <img :src="item.img" alt />
          <p class="st_na">
            <span>{{item.student_name}}</span>
            
          </p>
          <svg class="icon" aria-hidden="true" style="width:23px;height:23px" @click="go_pun_xq(item)">
            <use xlink:href="#icon-jiantou2" />
          </svg>
        </li>
      </ul>
    </div>

    <div class="unpunch">
      <h2>未签到</h2>
      <ul class="un_punch">
        <li v-for="(item,i) in unpunch" v-bind:key="i">
          <img :src="item.img" alt />
          <p class="pe_na">
            <span>{{item.personnel_name}}</span>

            <span>(联系电话:{{item.phone}})</span>
          </p>
        </li>
      </ul>
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
          <span
            class="see"
            @click="on_to($event,item.personnel_list[0].invite_num,item.class_name)"
          ></span>
        </li>
      </ul>
      <span @click="creat()" class="sucss">确定</span>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      list_to: [],
      num: "",
      color_key: true,
      name: "",
      list_per: [],
      punch: [],
      unpunch: []
    };
  },
  methods: {
    ...mapActions(["login_on", "footer_on"]),
    go_back() {
      this.$router.replace("./punch_in_teacher");
      this.footer_on(false);
    },
    on_to(e, nums, names) {
     

      if (this.color_key) {
        e.currentTarget.style.background = "red";
        this.color_key = false;
        this.num = nums;
        this.name = names;
      } else {
        e.currentTarget.style.background = "none";
        this.color_key = true;
        this.num = "";
        this.name = "";
      }
    },
    creat() {
      let sef = this;

      $.ajax({
        url:
          "https://huangfufu.top:8080/qiluweb/attendance/studentssigninforclass",
        type: "post",
        data: {
          lass_num: sef.num
        },

        success: function(result) {
          if (result) {
            let dom = document.querySelector(".two");
            dom.style.display = "none";
            //选择选中的班级
            sef.list_to.forEach((item, i) => {
              if (item.class_name == sef.name) {
                sef.list_per = item.personnel_list;
              }
            });

            //分数组

            sef.punch = result.data;
            sef.list_per.shift();
            sef.list_per.forEach((item, i) => {
              let seff = item;
              let key = true;
              sef.punch.forEach((item, i) => {
                if (item.student_name == seff.personnel_name) {
                  item.img = seff.img;
                  item.phone = seff.phone;
                  key = false;
                }
              });

              if (key) {
                sef.unpunch.push(seff);
              }
            });
           
          }
        },
        error: function(err) {
          setTimeout(() => {
            alert("创建失败！");
          }, 500);
        }
      });
    },
    go_pun_xq(data_pun){
      //跳转
       this.$store.state.data_pun_stu = data_pun;
      this.$router.replace("./pun_xq");
      this.footer_on(false);


    }
  },
  created: function() {
    let sef = this;
    let nu = this.$store.state.num.slice(3);
    $.ajax({
      url: "https://huangfufu.top:8080/qiluweb/class/findclass",
      type: "POST",
      data: {
        teacher_num: nu
      },
      success: function(result) {
        if (result) {
        
          sef.list_to = result.class_list;
        }
      },
      error: function(err) {
        setTimeout(() => {
     
          alert("提交失败！");
        }, 500);
      }
    });
  }
};
</script>
<style scoped>
.two {
  width: 100%;
  height: 100%;

  position: absolute;
  padding: 0 20px 0 20px;
  top: 10px;
  margin-top: 30px;
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
  left: 65px;
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
  background: #f6de3e;
  width: 120px;
  height: 35px;
  display: inline-block;
  color: white;
  text-align: center;
  line-height: 35px;
  margin-top: 18px;
}
.list {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}
.list li {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid skyblue;
  border-radius: 10px;
  float: left;
  margin: 0 10px 10px 0;
  position: relative;
}
.list li img {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 10px 0 0 10px;
}
.list li .icon {
  width: 40px;
  float: right;
  margin-top: 14px;
}
.list li .st_na {
  position: absolute;
  top: 7px;
  left: 55px;
  font-size: 15px;
}
.list li .pho {
  position: absolute;
  top: 9px;
  left: 85px;
}
.list li li span {
  display: inline-block;
  width: 70%;
  text-align: center;
}

.unpunch {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}
.unpunch li {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid skyblue;
  border-radius: 10px;
  position: relative;
  margin: 0 10px 10px 0;
}
.unpunch li img {
  display: inline-block;
  width: 40px;
  height: 40px;
}
.unpunch li .pho {
  position: absolute;
  top: 2px;
  left: 85px;
}
.unpunch li .pe_na {
  position: absolute;
  top: 2px;
  left: 45px;
  font-size: 15px;
}
</style>