<template>
  <div>
    <div class="to_back" style="font-size:20px; margin:8px 0 10px 7px;" @click="back_inp()">
      <i class="iconfont icon-daohangjiantouzuodingbu"></i>
    </div>

    <div class="warpper">
     
     
      <textarea name="" id="" cols="30" rows="10" placeholder="请输入建议信息">

      

      </textarea>
      <div class="btn" @click="go_ti()">
       提交建议
      </div>

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
    go_ti(){
      alert("提交成功");
    }
    
  },
  computed: {
  
  }
};
</script>
<style scoped>
.warpper {
  width: 80%;
  height: 500px;
  margin: 0 auto;

  position: relative;
}
.btn{
     width: 100px;
     height: 30px;
     text-align: center;
     line-height: 30px;
     color:white;
     background: skyblue;
     margin-top: 15px;

}
</style>