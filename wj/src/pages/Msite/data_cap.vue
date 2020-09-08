<template>
  <div class>
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
      num_lto: "",
      name_lto: "",
      color_key: true,
      list: [],
      numbers: "",
      student_num: "",
      key: "",
      msg: "",
      key_to: false
    };
  },
  methods: {
    ...mapActions(["footer_on"]),
    back_inp() {
      this.$router.replace("./msite");
      this.footer_on(true);
    },
    on_to(e, nums, names) {
      if (this.color_key) {
        e.currentTarget.style.background = "red";
        this.color_key = false;
        this.num_lto = nums;
        this.name_lto = names;
      } else {
        e.currentTarget.style.background = "none";
        this.color_key = true;
        this.num_lto = "";
        this.name_lto = "";
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
    up_true(nu) {
      let dom = document.querySelector(".number");
      dom.style.display = "block";

      let oSapn = document.querySelector(".up_true");

      oSapn.style.background = "silver";

      console.log(nu);
      this.key = true;
      this.student_num = nu;
    },
    up_false(nu) {
      let dom = document.querySelector(".number");
      dom.style.display = "block";

      let oSapn = document.querySelector(".up_false");

      oSapn.style.background = "silver";

      this.key = false;
      this.student_num = nu;
    },
  
  },

  computed: {
    ...mapState(["lass_num", "name", "num"])
  },
  created: function() {
    let sef = this;
  

    let num = this.$store.state.num.slice(3);

    sef.list_to = this.$store.state.class_list_fist
    

   
  
  },
  mounted() {
    let mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>
<style scoped>
.swiper-container {
  width: 80%;
  height: 600px;
}
.swiper-wrapper {
}
.swiper-slide {
  /* float: left;
  width: 20%; */
  height: 480px;

  position: relative;
}
.swiper-slide div {
  width: 80%;
  margin: 0 auto;

  margin-bottom: 10px;
}
.swiper-slide .title {
  height: 50px;
}
.swiper-slide .img {
  width: 240px;
  height: 240px;
  margin: 0 auto;
}
.swiper-slide .img img {
  display: inline-block;
  width: 100%;

  height: 240px;
}
.swiper-slide .time {
  height: 50px;
}
.swiper-slide .on_to {
  height: 50px;

  margin-top: 15px;
}
.swiper-slide .on_to span {
  display: inline-block;
  width: 80px;
  height: 30px;
  background: darkorange;
  margin-right: 20px;
  color: white;
  text-align: center;
  line-height: 30px;
}
.swiper-slide .number {
  height: 55px;
  display: none;
  padding-top: 5px;
}
.swiper-slide .number p {
  margin-top: 10px;
  width: 80px;
  height: 30px;
  background: darkcyan;
  text-align: center;
  line-height: 30px;
  color: white;
}
.but div {
  height: 35px;
  background: sandybrown;
  width: 45%;
  line-height: 35px;
  text-align: center;
  color: white;
}
.but .but_agr {
  float: left;
}
.but .but_pas {
  float: right;
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
</style>