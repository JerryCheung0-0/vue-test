<template>
  <div>
    <home-header :city="city"/>
    <home-swiper :list="swiperList"/>
    <home-icons :list="iconList"/>
    <home-recommend :list="recommendList"/>
    <home-weekend :list="weekendList"/>
  </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import axios from 'axios'

  export default {
    name: 'Home',
    components: {
      HomeWeekend,
      HomeRecommend,
      HomeHeader,
      HomeSwiper,
      HomeIcons
    },
    data() {
      return {
        city: '',
        iconList: [],
        swiperList: [],
        recommendList: [],
        weekendList: []
      }
    },
    mounted() {
      this.getHomeData()
    },
    methods: {
      getHomeData() {
        axios.get('/api/index.json')
          .then(this.getHomeDataSucc)
      },
      getHomeDataSucc(res) {
        if (res.data) {
          this.city = res.data.city
          this.iconList = res.data.iconList
          this.swiperList = res.data.swiperList
          this.recommendList = res.data.recommendList
          this.weekendList = res.data.weekendList
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
