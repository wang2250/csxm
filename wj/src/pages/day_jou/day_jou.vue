<template>
    <div>

    <div class="to_back" style="font-size:20px; margin:8px 0 10px 7px;" @click="back_inp()">
      <i class="iconfont icon-jiantou1"></i>
    </div>

 
    <div class="warpper">
<form id="formData" enctype="multipart/form-data">
         <input type="text" name="lass_num" :value="lass_num" style="display:none;">
         <input type="text" name="title" placeholder="请输入标题" class="title">
         <p >文字配图：<input type="file"></p>
         <!-- <textarea><textarea> -->
             <textarea name="text"  placeholder="请输入内容" maxlength="500" style="margin-top:10px;">
 
                 
 
             </textarea>
             <p class="sub" @click="sub()">提交日志</p>
    </form>
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
    
  computed: {
    ...mapState(["lass_num"])
  },
    methods:{
         ...mapActions(["footer_on"]),
        back_inp(){
            this.$router.replace("./day_jou_teacher");
      this.footer_on(false);
        },
        sub(){
            let sef =this;
            let data  = new FormData(document.querySelector("#formData"));
            $.ajax({
    url: '',
    type: "post",
    data: data,
    cache: false,
    processData: false,
    contentType: false,
    success: function (result) {
 
      if (result) {
       
    console.log(result);
        setTimeout(() => {
          if(result.code == 1){
          alert("提交成功");
          sef.$router.replace("./day_jou_teacher");
          }else{
          alert(result.msg);
          }
          
          
        }, 500);

      }
    },
    error: function (err) {
     
      setTimeout(() => {

        alert("提交失败！");
      
      }, 500)

    }
  
  })
        }
    }
}
</script>
<style scoped>
.warpper{
    width: 80%;
    height: 500px;

    margin:0 auto;
}
.warpper input{
    width: 98%;
}
.warpper textarea{
    width: 98%;
    height: 300px;
 
}
.warpper .title{
    height: 30px;
    margin-bottom: 15px;

}
.sub{
    width:98%;
    height:34px;
    background:#02a774;
    margin:0 auto;
    text-align:center;
    line-height:34px;
    color:white;
    margin-top:15px;
}

</style>