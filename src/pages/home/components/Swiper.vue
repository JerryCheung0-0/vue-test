<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swipe-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div slot="pagination" class="swiper-pagination" />
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>-->
      <!-- <div class="swiper-button-next" slot="button-next"></div>-->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: {
      list: { type: Array, default() {
        return []
      }}
    },
    // 当在子组件里面定义变量(data)时,data一定是一个函数,而return返回的对象就是对应的变量
    // data()是一个es6写法，相当于data:function(){}
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.67%
    background: #eee

    .swipe-img
      width: 100%
</style>
