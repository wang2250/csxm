<template>

   <div class="footer_guide">
     <a href="javascript:;" class="guide_item" :class="{on:'/msite'=== $route.path}" @click="goTo('/msite')">
       <span class="item_icon">
         <i class="iconfont icon-shouye"></i>
       </span>
       <span>首页</span>
     </a>
    
      <a href="javascript:;" class="guide_item" :class="{on:'/order'=== $route.path}" @click="goTo('/order')">
          <span class="item_icon">
         <i class="iconfont icon-xiaoxi"></i>
       </span>
       <span>消息</span>
     </a>
      <a href="javascript:;" class="guide_item" :class="{on:'/Profile'=== $route.path}" @click="goTo('/Profile')">
          <span class="item_icon">
         <i class="iconfont icon-personal"></i>
       </span>
       <span>我的</span>
     </a>
   </div>

</template>

<script>
export default {
    methods:{
     goTo(path){
       this.$router.replace(path);
     }
    }
}
</script>

<style>


 .footer_guide{
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:#fff;
    width: 100%;
    height: 50px;
    display: flex; 
    font-size: 16px;
 }
  .footer_guide .guide_item{
      display: flex;
      flex: 1;
       text-align: center;
      flex-direction: column;
      align-items: center;
      margin: 5px;
      color: #999999;
  }
   .footer_guide .on{
      color: #02a774;
   }
   .guide_item span{
       font-size: 12px;
       
   }
</style>