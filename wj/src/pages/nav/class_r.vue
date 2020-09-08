<template>
  <div class="nav">
    <div class="to_back" style="font-size:20px; margin:8px 0 0 7px;" @click="back_inp()">
      <i class="iconfont icon-daohangjiantouzuodingbu"></i>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(item,i) in class_list" v-bind:key="i" class="swiper-slide">
          <h2 style="padding-left:5px;">{{class_na[i]}}</h2>
          <ul class="weekend_list" @click="change_to($event)">
            <li class="colo" @click="change_week(1)" >星期一</li>
            <li @click="change_week(2)">星期二</li>
            <li @click="change_week(3)" >星期三</li>
            <li @click="change_week(4)" >星期四</li>
            <li @click="change_week(5)" >星期五</li>
          </ul>
          <ul class="list_cl">
            <li class="lis">
              <span></span>
              <span>fffff</span>
              <span>ffff</span>
              <span>fffff</span>
            </li>

            <li class="great_cour">
              <span @click="go_creat(item)">新建一门课程</span>
              <span>编辑课程表</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      week_num: 1,
      week_list:{}
    };
  },
  watch: {},
  methods: {
    ...mapActions(["footer_on"]),
    back_inp() {
      this.$router.replace("./msite");
      this.footer_on(true);
    },
    go_creat(numss) {
      this.$store.state.creat_numss = numss;
      this.$router.replace("./class_creat");
      this.footer_on(false);
    },
    change_to(dom) {
      dom.path[1].querySelectorAll("li").forEach(function(item) {
        if (item.className == "colo") {
          item.className = "";
        }
      });
      dom.path[0].className = "colo";
    },
    change_week(num){
    this.week_num = num;
    }
  },
  created: function() {
    let sef = this;
    let data_cl = {
      class_num:"tT79"
    }
   sef.$store.state.class_list.forEach(function(num,i){
 $.ajax({
      url: "https://huangfufu.top:8080/qiluweb/classtable/findbyclass",
      type: "POST",
      data: {
         class_num:num
      },
      success: function(result) {
        if (result) {
       if(result.code == 1){

         sef.week_list[i] =  JSON.stringify(result.data)
       }
        }     
      },
      error: function(err) {
        setTimeout(() => {
          console.log(err);
          alert("提交失败！");
        }, 500);
      }
    });
   })

   console.log(sef.week_list)
   
  },
  mounted() {
    let mySwiper = new Swiper(".swiper-container", {
      //   direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  computed: {
    ...mapState(["class_list", "class_na"])
  }
};
</script>
<style scoped>

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
  background: transparent;
}
.great_cour span {
  display: inline-block;
  height: 100%;
  width: 40%;
  border-radius: 20px;
  background: salmon;
  margin-right: 10px;
  text-align: center;
  line-height: 40px;
  color: white;
  margin-left: 3px;
}
.weekend_list {
  width: 100%;
  height: 40px;
  padding-left: 5px;
  margin-bottom: 15px;
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
  border-bottom: 1px solid crimson;
}
.swiper-pagination {
  left: 20px;
}

.list_cl .lis span {
  position: absolute;
}
.list_cl .lis span:nth-last-of-type(1) {
  left: 13px;
  top: 10px;
  width: 100px;
  height: 25px;
}
.list_cl .lis span:nth-last-of-type(2) {
  right: 10px;
  top: 10px;
  width: 100px;
  height: 25px;
}
.list_cl .lis span:nth-last-of-type(3) {
  left: 13px;
  bottom: 3px;
  width: 100px;
  height: 25px;
}
.list_cl li span:nth-last-of-type(4) {
  right: 10px;
  bottom: 3px;
  width: 100px;
  height: 25px;
}
</style>