<template>
  <div>
    <p style="padding-left:10px; margin:8px 0 14px 0">
      <i class="iconfont icon-jiantou2" @click="go_back()" style="font-size:28px;"></i>
    </p>
   <div class="warpper">
      签到成功
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
    ...mapActions(["login_on", "footer_on"]),
    go_back() {
      this.$router.replace("./punch_in_student");
      this.footer_on(false);
    },
   
  },
    
};
</script>
<style scoped>
.warpper{
    width: 80%;
    height: 400px;

}
</style>