<template>
  <div>
    <div class="to_back" style="font-size:20px; margin:8px 0 10px 7px;" @click="back_inp()">
      <i class="iconfont icon-daohangjiantouzuodingbu"></i>
    </div>

    <div class="warpper">
<div class="img">
       <img src="img/log.png" alt="">
</div>
      v1.0.0

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
      this.$router.replace("./Profile");
      this.footer_on(true);
    },
    
  },
  computed: {
  
  }
};
</script>
<style scoped>
.warpper {
  width: 100px;
  height: 50px;

  font-size: 25px;
  position: relative;
  color:gray;
  position: absolute;
  top:45%;
  left: 40%;
}
.img{
 width: 50px;
 height: 50px;
 margin: 0 auto;
transform: translateX(-10px)

}
.img img{
  width: 40px;
}
</style>