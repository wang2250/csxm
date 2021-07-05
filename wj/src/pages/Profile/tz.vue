<template>
  <div class="odiv">
    <div>
      <div class="to_back" style="font-size:20px; margin:8px 0 10px 7px;" @click="back_inp()">
        <i class="iconfont icon-daohangjiantouzuodingbu"></i>
      </div>
<div class="warpper">
  <ul class="baolu">

   <li
   v-for="(item,i) in baolu_arr" v-bind:key="i" 
   
   >
 
   
   
   
   <p style="font-size:15px;color:red">暴露通知</p>
   <p style="margin-top:14px;" @click="go_bl(item)">
     <svg class="icon" aria-hidden="true" style="width:23px;height:23px" >
            <use xlink:href="#icon-weixianpincongyerenyuan" />
          </svg>
          <span style="color:grey;font-size:14px;">点击查看详情</span>
           <i class="iconfont icon-jiantouyou" style="float:right;margin-right:20px;margin-bottom:10px;"

              ></i>
   </p>
   
   <p>
    
   </p>
   
   </li>

  </ul>

        <ul class="msg">
          <li v-for="(item,i) in msg_ct" v-bind:key="i">
            <p style="font-size:15px;">{{item.title}}</p>
            <p style="color:grey">{{item.content}}</p>
            <p>
              <span>查看详情</span>
              <i class="iconfont icon-jiantouyou" style="float:right;margin-right:20px;"
               @click="go_xiang(item.title,item.content,item.file)"
              ></i>
            </p>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      msg_ct: "",
      war_ct:""
    };
  },
  computed: {
    ...mapState(["class_list","baolu_arr"])
  },
  methods: {
    ...mapActions(["footer_on"]),
    back_inp() {
      this.$router.replace("./order");
      this.footer_on(true);
    },
    go_xiang(til,con,fil){
        this.$store.state.tz_obj = {
          tile:til,
          content:con,
          file:fil
        }
      this.$router.replace("./tz_xq");
      this.footer_on(false);
    },
    go_bl(data){
      this.$store.state.bl_con = data
       this.$router.replace("./bl");
      this.footer_on(false);
    }
  },
  created: function() {
    let sef = this;
    let form = {
      class_num: sef.class_list[0]
    };

    $.ajax({
      url: "https://huangfufu.top:8080/qiluweb/teacher/push/getmessage",
      type: "post",
      data: form,

      success: function(result) {
        let key_on  = true;
        if (result) {
          sef.msg_ct = result.data.msg[0];
          sef.war_ct = result.data.warning[0];

          result.data.warning[0].forEach(function(item,i){
             let lat = item.location_lat.split(".")[1].substring(0,3);
             let lon = item.location_lon.split(".")[1].substring(0,3);

            let lon_c = sef.$store.state.lo.split(".")[1].substring(0,3)
            let lat_c = sef.$store.state.la.split(".")[1].substring(0,3)

            if(lon-lon_c <200 || lon-lon_c>-200  && lat-lat_c <200 || lat-lat_c>-200){
              if(sef.$store.state.baolu_arr.length){
                 sef.$store.state.baolu_arr.forEach(function(ite,i){
                  if(ite.location_lon == item.location_lon && ite.location_lat == item.location_lat){
                      key_on = false;
                  }
                  


                 })
 
               if(key_on){
                 sef.$store.state.baolu_arr.push(item)
               }


              }else{
               sef.$store.state.baolu_arr.push(item)
              }


             
            }

          
          })
          
        }
      },
      error: function(err) {
        setTimeout(() => {
          alert("创建失败！");
        }, 500);
      }
    });
  }
};
</script>
<style scoped>
.warpper {
  width: 90%;
   
  margin: 0 auto;
}
.msg li {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid grey;
  margin-bottom: 15px;
  /* border-radius: 20px; */
}
.msg li p {
  padding-left: 20px;
  height: 25px;
}
.baolu li{
  width: 100%;
  height: 80px;
  border-bottom: 1px solid grey;
  margin-bottom: 15px;
}
 .baolu li p {
  padding-left: 20px;
  height: 25px;
}
</style>