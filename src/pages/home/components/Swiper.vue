<template>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>
      <img class="swipe-img" src="@image/swipe1.jpg">
    </swiper-slide>
    <swiper-slide>
      <img class="swipe-img" src="@image/swipe2.jpg">
    </swiper-slide>
    <swiper-slide>
      <img class="swipe-img" src="@image/swipe3.jpg">
    </swiper-slide>
    <!-- Optional controls -->
    <div slot="pagination" class="swiper-pagination" />
    <!--        <div class="swiper-button-prev" slot="button-prev"></div>-->
    <!--        <div class="swiper-button-next" slot="button-next"></div>-->
    <!--        <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
  </swiper>
</template>

<script>
    export default {
        name: 'HomeSwiper',
        // 当在子组件里面定义变量(data)时,data一定是一个函数,而return返回的对象就是对应的变量
        // data()是一个es6写法，相当于data:function(){}
        data() {
            return {
                swiperOption: {}
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .swipe-img
        width: 100%
</style>
