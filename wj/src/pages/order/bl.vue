<template>
  <div>
    <p style="padding-left:10px; margin:8px 0 14px 0">
      <i class="iconfont icon-daohangjiantouzuodingbu" @click="back_inp()" style="font-size:28px;"></i>
    </p>

    <div class="warpper">
    
      <p>
        姓名：
        <span>{{bl_con.student_name}}</span>
      </p>
     
      <p>
        位置信息：
        <!-- <span class="posi">

        </span>-->
      </p>
      <div id="container"></div>
      <p>健康信息：</p>
      <p>
        1.是否有发烧症状：
        <span>{{bl_con.health.one}}</span>
      </p>
      <p>
        2.是否接触过新冠肺炎患者或被确诊：
        <span>{{bl_con.health.tow}}</span>
      </p>
      <p>
        3.其他方面不适：
        <span>{{bl_con.health.three}}</span>
      </p>
     
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
      this.$router.replace("./tz");
      this.footer_on(false);
    }
  },
  created: function() {

  },
  computed: {
    ...mapState(["data_pun_stu","bl_con"])
  },
  mounted() {


  let  map = new BMapGL.Map("container");    // 创建Map实例
	map.centerAndZoom(new BMapGL.Point(this.bl_con.location_lon,this.bl_con.location_lat), 15);  // 初始化地图,设置中心点坐标和地图级别
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	map.setHeading(64.5);
	map.setTilt(73);
  }
};
</script>
<style scoped>
.warpper {
  width: 80%;
  margin: 0 auto;

  height: 500px;
}

img {
  width: 40px;
  height: 40px;
}
p {
  margin-bottom: 10px;
  color: grey;
}
.posi {
  width: 70%;
  height: 130px;
  border: 1px solid grey;
  display: block;
  margin-top: 10px;
}
#container {
  width: 70%;
  height: 130px;
  margin-bottom: 10px;
}
</style>