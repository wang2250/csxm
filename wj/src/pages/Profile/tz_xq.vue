<template>

    <div>
      <div class="to_back" style="font-size:20px; margin:8px 0 10px 7px;" @click="back_inp()">
        <i class="iconfont icon-daohangjiantouzuodingbu"></i>
      </div>
     <div class="warpper">
       <h2>
          {{JSON.parse(JSON.stringify(tz_obj)).tile}}
      </h2>
      <textarea name="" id="" cols="30" rows="10" :placeholder="JSON.parse(JSON.stringify(tz_obj)).content">

      </textarea>
  
    
   <p style="margin-top:10px;">
          <a :href="JSON.parse(JSON.stringify(tz_obj)).file">
          点击下载附件
      </a>
   </p>


     </div>
      
    </div>

</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
       tile:""
    };
  },
  computed: {
    ...mapState(["tz_obj"])
  },
  methods: {
    ...mapActions(["footer_on"]),
    back_inp() {
      this.$router.replace("./tz");
      this.footer_on(false);
    },
    
  },
  created: function() {
    let sef = this;


  },
  mounted(){
        //  console.log(JSON.parse(JSON.stringify(this.tz_obj)))
        //  this.tile = JSON.parse(JSON.stringify(this.tz_obj)).tile
  }
 
};
</script>
<style scoped>
.warpper {
  width: 80%;
   
  margin: 0 auto;
}


</style>