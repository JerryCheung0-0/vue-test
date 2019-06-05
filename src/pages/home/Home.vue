<template>
  <div>
    <home-header />
    <home-swiper />
  </div>
</template>

<script>
    import HomeHeader from './components/HomeHeader'
    import HomeSwiper from './components/Swiper'

    export default {
        name: 'Home',
        components: {
            HomeHeader,
            HomeSwiper
        }
    }
</script>

<style lang="stylus" scoped>
</style>
