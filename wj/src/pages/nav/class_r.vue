<template>
  <div class="nav">
    <div class="to_back" style="font-size:20px; margin:8px 0 0 7px;" @click="back_inp()">
      <i class="iconfont icon-jiantou1"></i>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
         

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
    return {};
  },
  methods: {
    ...mapActions(["footer_on"]),
    back_inp() {
      this.$router.replace("./msite");
      this.footer_on(true);
    }
  },
  created: function() {
    let sef = this;
  },
  mounted() {
    let mySwiper = new Swiper(".swiper-container", {
    //   direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },

    //   // 如果需要前进后退按钮
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev"
    //   },

    //   // 如果需要滚动条
    //   scrollbar: {
    //     el: ".swiper-scrollbar"
    //   }
    });
  }
};
</script>
<style scoped>
.nav ul {
  width: 90%;
  height: 60px;
  border: 1px solid black;
  margin: 0 auto;
}
.nav ul li {
  width: 33.3%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  float: left;
  border: 1px solid black;
}
.war {
  width: 80%;
  margin: 0 auto;
}
.swiper-container {
    width: 80%;
    height: 400px;
}  
</style>