<template>
  <div>
    <home-header />
    <home-swiper />
    <home-icons />
  </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons
    }
  }
</script>

<style lang="stylus" scoped>
</style>
