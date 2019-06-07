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
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
        iconList: [
          {tag: '景点门票', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
          {tag: '广州必游', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'},
          {tag: '动植物园', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'},
          {tag: '自然风光', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png'},
          {tag: '珠江夜游', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png'},
          {tag: '长隆亲子月', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png'},
          {tag: '长隆度假区', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png'},
          {tag: '长隆度假区', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png'},
          {tag: '珠江夜游', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png'},
          {tag: '长隆亲子月', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png'},
          {tag: '长隆度假区', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png'},
          {tag: '长隆度假区', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png'},
          {tag: '珠江夜游', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png'},
          {tag: '长隆亲子月', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png'},
          {tag: '长隆度假区', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png'},
          {tag: '长隆度假区', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png'}
        ]
      }
    },
    computed: {
      pages() {
        const pages = []
        this.iconList.forEach((item, index) => {
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
