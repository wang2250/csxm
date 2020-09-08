<template>
  <div id="app">
    <router-view />
    <FooterGuide v-if="footer_on" />
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
import { mapState, mapActions } from "vuex";
import Swiper from "swiper"
import 'swiper/css/swiper.min.css'
// import 'swiper/js/'

export default {
  components: {
    FooterGuide
  },
  computed: {
    ...mapState(["footer_on"])
  },
  created: function() {
   
      this.$store.state.footer_on = true;
   
    
  },
  methods: {},
  mounted() {
    let userJsonStr = localStorage.getItem("user");
    let nu = "";
    if (userJsonStr) {
      let userEntity = JSON.parse(userJsonStr);
      this.$store.state.num = userEntity.num;
      nu = userEntity.num.slice(3);
      this.$store.state.name = userEntity.name;
      this.$store.state.login = false;

      let sef = this;

      if (userEntity.num.slice(0,2) == "学号") {
        $.ajax({
          url: "https://huangfufu.top:8080/qiluweb/class/findclass",
          type: "POST",
          data: {
            student_num: nu
          },
          success: function(result) {
            if (result) {
               sef.$store.state.class_list_fist = result.class_list
              sef.$store.state.lass_num =
                result.class_list[0].personnel_list[0].invite_num;
            }
          },
          error: function(err) {
            setTimeout(() => {
              console.log(err);
              alert("提交失败！");
            }, 500);
          }
        });
      }else if(userEntity.num.slice(0,2) == "工号"){
          $.ajax({
          url: "https://huangfufu.top:8080/qiluweb/class/findclass",
          type: "POST",
          data: {
            teacher_num: nu
          },
          success: function(result) {
          
            if (result) {
      sef.$store.state.class_list = [];
      sef.$store.state.class_na = [];
      sef.$store.state.class_list_fist = result.class_list
              result.class_list.forEach(function(item){
                sef.$store.state.class_list.push(item.personnel_list[0].invite_num)
                sef.$store.state.class_na.push(item.class_name)
              })
         
              console.log(sef.$store.state.class_na);
            }
          },
          error: function(err) {
            setTimeout(() => {
              console.log(err);
              alert("提交失败！");
            }, 500);
          }
        });
      }
    }
  }
};
</script>

<style >
#app {
  width: 100%;
  height: 100%;
}
</style>