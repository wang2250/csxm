<template>
  <div class="nav">
    <div class="to_back" style="font-size:20px; margin:8px 0 0 7px;" @click="back_inp()">
      <i class="iconfont icon-daohangjiantouzuodingbu"></i>
    </div>

    <div class="htmleaf-container">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h2>请签名:</h2>
            <div class="js-signature"></div>
            <p>
              <button id="saveBtn" class="btn btn-default" disabled>确认</button>&nbsp;
              <button id="clearBtn" class="btn btn-default">重写</button>
              <!-- <input type="file" id="imgTest" onchange="imgChange(event)" accept=".gif,.jpg,.jpeg,.png"> -->
            </p>
            <div id="signature">
              <p></p>
              <div></div>
            </div>
          </div>
        </div>
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
      this.$router.replace("./leave_to");
      this.footer_on(false);
    }
  },
  created: function() {
    this.footer_on(false);
  },

  mounted() {
    console.log("sss")
    let dom = document.querySelector(".nav");
    let nums = dom.offsetHeight - 110;
    let sef = this;

    

      if ($(".js-signature").length) {
        var _width = 600;
        var _height = nums;
        var rate = 0;
        if (screen.width < _width) {
          rate = _width / screen.width;
          _width = _width / rate - 60;
          _height = nums;
        }
        $(".js-signature").jqSignature({
          autoFit: false,
          width: _width,
          height: _height
        });
      }
      $(".js-signature").on("jq.signature.changed", function() {
        $("#saveBtn").attr("disabled", false);
      });
      $("#clearBtn").on("click", function() {
        $("#signature").html("<p>写上签名并点击预览</p><div></div>");
        $(".js-signature").jqSignature("clearCanvas");
        $("#saveBtn").attr("disabled", true);
      });

      $("#saveBtn").on("click", function() {
        $("#signature").empty();
        var dataUrl = $(".js-signature").jqSignature("getDataURL");
        var img = $("<img>").attr("src", dataUrl);
        $("#signature").append($("<p>").text("Here's your signature:"));
        $("#signature").append(img);

        let imga = document.querySelector("img").src;
        sef.$store.state.leave_data.img_name = imga;
        console.log(sef.$store.state.leave_data)
          //请求
      $.ajax({
        url: "https://huangfufu.top:8080/qiluweb/leave/permit",
        type: "post",
        data: sef.$store.state.leave_data,
        success: function(result) {
          if (result) {
            if (result.code == 1) {
              alert("审批成功");
              sef.$router.replace("./leave_to");
            }
          }
        },
        error: function(err) {
          setTimeout(() => {
            alert("创建失败！");
          }, 500);
        }
      });
         





      });


    function imgChange(e) {
      alert("ss");
      console.info(e.target.files[0]); //图片文件
      var dom = $("input[id^='imgTest']")[0];
      console.info(dom.value);
      console.log(e.target.value);
      var reader = new FileReader();
      reader.onload = (function(file) {
        return function(e) {
          var img = $("<img>").attr("src", this.result);
          $("#signature div").html(img);
          $(".js-signature").jqSignature("setData", this.result);
          $("#saveBtn").attr("disabled", false);
        };
      })(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);
    }
  }
};
</script>
<style scoped>
.nav {
  width: 100%;
  height: 100%;
  overflow: hidden;

  box-sizing: border-box;
}
.htmleaf-container {
  width: 95%;
  margin: 0 auto;

  position: relative;
}

.btn-default {
  position: fixed;
  bottom: 60px;
  right: -60px;
  width: 120px;
  height: 30px;
  background: skyblue;
  border: none;
  outline: none;
  margin-right: 20px;
  transform: rotate(-90deg);
}
.btn-default:nth-of-type(2) {
  bottom: 200px;
}
/* .js-signature{
   width: 70%;
   height: 70%;
} */
</style>