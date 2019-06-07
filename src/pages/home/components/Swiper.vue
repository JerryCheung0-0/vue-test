<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
    // 当在子组件里面定义变量(data)时,data一定是一个函数,而return返回的对象就是对应的变量
    // data()是一个es6写法，相当于data:function(){}
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true
        },
        swiperList: [
          { id: 101, imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg' },
          { id: 102, imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/46615d61d13ad13c173c72565bc202b0.jpg_750x200_3ca0aaf9.jpg' },
          { id: 103, imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/5f6eaa320a5e9bc02e6ab12ba3c2841a.jpg_750x200_291d4dad.jpg' }
        ]
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
