<template>
    <div >
        <div class="to_back" style="font-size:20px; margin:8px 0 10px 7px;" @click="back_inp()">
      <i class="iconfont icon-jiantou1"></i>
    </div>
      <div class="warpper">
        
    
      <ul>
          <li>
        
            <span class="name">标题</span>
            <i class="see">内容</i>
          </li>
      </ul>
      </div>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
    data(){
        return{

        }
    },
    methods:{
         ...mapActions(["footer_on"]),
        back_inp(){
            this.$router.replace("./msite");
      this.footer_on(true);
        }
    }
}
</script>
<style scoped>
.warpper{
    width: 96%;

    float: right;
}
.but{
    width: 95%;
    height: 40px;
    border:1px solid  #02a774;
     border-radius: 15px;
     text-align: center;
     line-height: 40px;
     font-size: 16px;
     margin-bottom: 10px;

}
.but .iconfont{

 font-size: 30px;
}
.but .text{
    position: relative;
    top:-4px;
}
ul{
    border-radius: 5px;
    
}
ul li{
    
    
width: 100%;
height: 50px;
  margin-left: 5px;
margin-bottom: 5px;
position: relative;
}
 li .img{
  position: absolute;
  left: 4px;
  top:0px;
  width: 50px;
  height: 48px;
  border:1px solid black;
}
 li .name{
  position: absolute;
  left: 65px;
  top:0px;
  font-size: 18px;
} 
 li .see{
  position: absolute;
  left: 65px;
  top:28px;
 
  width: 100px;
  height: 20px;

}

</style>