<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="page of pages" :key="page.id">
        <div v-for="(icon,index) of page.list" :key="index" class="icon">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl">
          </div>
          <p class="icon-desc">{{ icon.tag }}</p>
        </div>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination icon-pagination" />
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeIcons',
    props: {
      list: { type: Array, default() {
        return []
      }}
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    computed: {
      pages() {
        const pages = []
        this.list.forEach((item, index) => {
          const i = Math.floor(index / 8)
          if (!pages[i]) {
            pages[i] = {id: i, list: []}
          }
          pages[i].list.push(item)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@css/varibles.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 51%
  .icons >>> .icon-pagination
    bottom: 0.01rem
  .icons >>> .swiper-pagination-bullet
      border-style: solid;
      border-color: #333333
      border-width: 0 0 0.04rem 0;
      border-radius: 0;
      height: 0px;
  .icons >>> .swiper-pagination-bullet-active
    border-color: rgba(0, 0, 0, 0.83)
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0.44rem
      box-sizing: border-box
      padding: 0.1rem
      .icon-img-content
        display: block
        margin:0 auto
        height:100%
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: 0.44rem
      line-height: 0.44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>
