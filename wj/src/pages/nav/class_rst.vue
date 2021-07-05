<template>
  <div class="nav">
    <div class="to_back" style="font-size:20px; margin:8px 0 0 7px;" @click="back_inp()">
      <i class="iconfont icon-daohangjiantouzuodingbu" style="font-size:25px;"></i>
    </div>
    <h2 style="padding-left:5px;">{{class_na[index]}}</h2>

    <ul class="weekend_list" @click="change_to($event)">
      <li class="colo" @click="change_week($event,1)">星期一</li>
      <li @click="change_week($event,2)">星期二</li>
      <li @click="change_week($event,3)">星期三</li>
      <li @click="change_week($event,4)">星期四</li>
      <li @click="change_week($event,5)">星期五</li>
    </ul>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(item,ind) in class_list" v-bind:key="ind" class="swiper-slide">
          <ul class="list_cl" v-if="JSON.parse(JSON.stringify(week_list))" @click="go_change($event)">
            <li
              class="lis"
              v-for="(item,i) in 
            JSON.parse(JSON.stringify(week_list))[nums]
           "
              v-bind:key="i"
              :value="item.id"
            >
              <span>{{item.cou_teacher_tel}}</span>
              <span>{{item.cou_teacher}}</span>
              <span>{{item.cou_position}}</span>
              <span style="width:150px;display:inline-block">
                {{item.cou_name}}
                {{item.cou_time[0]}}:
                {{item.cou_time[1]}}~
                {{item.cou_time[2]}}:
                {{item.cou_time[3]}}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="great_cour">
        
      </div>-->
      <!-- 如果需要分页器 -->
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      week_num: 1,
      nums: 1,
      index: 0,
      ban_ji: "编辑课程表",
      change_key:false
    };
  },
  watch: {},
  methods: {
    ...mapActions(["footer_on"]),
    back_inp() {
      this.$router.replace("./msite");
      this.footer_on(true);
    },
    go_creat() {
      this.$store.state.creat_numss = this.class_list[this.index];

      this.$router.replace("./class_creat");
      this.footer_on(false);
    },
    go_del() {

      let dom = document.querySelector(".swiper-wrapper");
      let oLi = dom.querySelectorAll("li");
      if (this.ban_ji == "编辑课程表") {
        oLi.forEach(function(item, i) {
          item.style.border = "1px dashed grey";
        });
        this.ban_ji = "取消编辑"
        this.change_key = true;
      }else if(this.ban_ji == "取消编辑"){
         oLi.forEach(function(item, i) {
          item.style.border = "none";
        });
      
        this.ban_ji = "编辑课程表"
        this.change_key = false;
      }


    },
    go_change(dom){
      if(this.change_key){



 //删除请求
      }
     

    },
    change_to(dom) {
    
    },
    change_week(dom_li, num_s) {
      let sef = this;

      

      let col = document.querySelector(".weekend_list");
      col.querySelectorAll("li").forEach(function(item) {
        if (item.className == "colo") {
          item.className = "";
        }
      });
 
      dom_li.target.className = "colo";
      this.nums = num_s;
    }
  },
  created: function() {
  
    let sef = this;
    sef.class_list.forEach(function(item, i) {
      sef.num_list.push(1);
    });

   
      $.ajax({
        url: "https://huangfufu.top:8080/qiluweb/classtable/findbyclass",
        type: "POST",
        data: {
          class_num: sef.class_list[0]
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
    
  },
  mounted() {
    let sef = this;
    let mySwiper = new Swiper(".swiper-container", {
      //   direction: "vertical", // 垂直切换选项
      // loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },

      on: {
        slideChangeTransitionEnd: function() {
          sef.week_num = sef.num_list[this.activeIndex];
          sef.index = this.activeIndex;
        }
      }
    });
  },
  computed: {
    ...mapState([
      "class_list",
      "class_na",
      "class_list",
      "week_list",
      "num_list"
    ])
  }
};
</script>
<style scoped>
.nav {
  position: relative;
}
.war {
  width: 80%;
  margin: 0 auto;
}
.swiper-container {
  width: 80%;
  padding-bottom: 40px;
}
ul {
  position: relative;
}
.list_cl .lis {
  width: 100%;
  height: 60px;
  background: linear-gradient(left, #d9f7f3, #d0f7f7);
  margin-bottom: 10px;
  border-radius: 20px;
  position: relative;
}
.list_cl .great_cour {
  width: 100%;
  height: 40px;
  position: absolute;
  left: 0;
  bottom: 0;
}
.great_cour span {
  display: inline-block;
  height: 100%;
  width: 40%;
  border-radius: 15px;
  background: skyblue;
  margin-right: 10px;
  text-align: center;
  line-height: 40px;
  color: white;
  margin-left: 3px;
}
.weekend_list {
  width: 80%;
  height: 40px;
  padding-left: 5px;
  margin-bottom: 15px;
  margin: 0 auto;
}
.weekend_list li {
  float: left;
  width: 15%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-right: 5px;
  color: skyblue;
}
.colo {
  border-bottom: 1px solid red;
}
.swiper-pagination {
  left: 20px;
}

.list_cl .lis span {
  position: absolute;
  color: gray;
}
.list_cl .lis span:nth-last-of-type(1) {
  left: 13px;
  top: 10px;
  width: 160px;
  height: 25px;
}
.list_cl .lis span:nth-last-of-type(2) {
  right: 10px;
  top: 10px;
  width: 120px;
  height: 25px;
}
.list_cl .lis span:nth-last-of-type(3) {
  left: 13px;
  bottom: -3px;
  width: 100px;
  height: 25px;
}
.list_cl li span:nth-last-of-type(4) {
  right: 10px;
  bottom: -3px;
  width: 120px;
  height: 25px;
}
h2 {
  width: 78%;

  margin: 0 auto;
  margin-bottom: 20px;
}
.nav_cl {
  position: absolute;
  width: 160px;
  height: 30px;

  right: 0;
  top: 0;
}
</style>