<template>
  <div id="app">
    <router-view />
    <FooterGuide v-if="footer_on" />
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    FooterGuide
  },
  computed: {
    ...mapState(["footer_on"])
  },
  created: function() {
    if (
      this.$route.path == "/msite" ||
      this.$route.path == "/Profile" ||
      this.$route.path == "/order"
    ) {
      this.$store.state.footer_on = true;
    } else {
      this.$store.state.footer_on = false;
    }
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
   console.log(userEntity.num.slice(0,2))
      if (userEntity.num.slice(0,2) == "学号") {
        $.ajax({
          url: "http://111.229.53.240:8080/qiluweb/class/findclass",
          type: "POST",
          data: {
            student_num: nu
          },
          success: function(result) {
            if (result) {
         
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