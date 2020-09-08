<template>
  <div class="class_list">
    <div class="top">
      <i class="iconfont icon-daohangjiantouzuodingbu" @click="go_back()"></i>
      <span>我的班级</span>
    </div>
    <ul>
      <li v-for="(item,i) in list" v-bind:key="i" @click="go_rea(item)">
        <span class="img">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qunzu" />
          </svg>
        </span>
        <span class="name">{{item.class_name}}</span>
        <i class="see">
          邀请码：
          <i style="color:#02a774">{{item.personnel_list[0].invite_num}}</i>
        </i>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      list: []
    };
  },
  created: function() {
      this.list =  this.$store.state.class_list_fist 

    // let num = this.$store.state.num.slice(3);
    // let data = null;
    // if (this.$store.state.num.slice(0, 2) == "学号") {
    //   data = {
    //     student_num: num
    //   };
    // } else {
    //   data = {
    //     teacher_num: num
    //   };
    // }
    // console.log(data);

    // $.ajax({
    //   url: "https://huangfufu.top:8080/qiluweb/class/findclass",
    //   type: "POST",
    //   data: data,
    //   //cache: false,
    //   //processData: false,
    //   //contentType: "application/json;charset=UTF-8",
    //   success: function(result) {
    //     if (result) {
    //       //console.log(result.class_list[2].personnel_list)
    //       sef.list = result.class_list;
    //     }
    //   },
    //   error: function(err) {
    //     setTimeout(() => {
    //       console.log(err);
    //       alert("提交失败！");
    //     }, 500);
    //   }
    // });
  },
  computed: {},
  components: {},
  methods: {
    ...mapActions(["footer_on"]),
    go_back() {
      this.$router.replace("./Profile");
      this.footer_on(true);
    },
    go_rea(list_rea) {
      this.$store.state.cla_reason = list_rea;
      this.$router.replace("./class_rea");
    }
  },
  mounted() {}
};
</script>

<style scoped>
.class_list li {
  width: 100%;
  height: 50px;
  margin-left: 5px;
  margin-bottom: 5px;
  position: relative;
}
.top {
  width: 100%;
  height: 50px;

  margin-bottom: 5px;
  padding-top: 5px;
  position: relative;
}
.top .iconfont {
  font-size: 25px;
  margin: 15px 0 0 3px;
}
.top span {
  position: absolute;
  left: 35%;
  top: 8px;
  font-size: 15px;
}

.class_list li .img {
  position: absolute;
  left: 4px;
  top: 0px;
  width: 50px;
  height: 48px;
}
.class_list li .img svg {
  width: 100%;
  height: 100%;
}
.class_list li .name {
  position: absolute;
  left: 65px;
  top: 0px;
}
.class_list li .see {
  position: absolute;
  left: 65px;
  top: 25px;

  width: 100px;
  height: 20px;
}
</style>