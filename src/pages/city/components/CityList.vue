<template>
  <div ref="wrapper" class="list">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            v-for="item of hotCityList"
            :key="item.id"
            class="button-wrapper"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div v-for="(city,key) of cityList" :key="key" :ref="key" class="area">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of city"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import { mapState,mapMutations } from 'vuex'
  export default {
    name: 'CityList',
    props: {
      hotCityList: {
        type: Array, default() {
          return []
        }
      },
      cityList: {
        type: Object, default() {
          return {}
        }
      },
      letter: {type: String, default: ''}
    },
    computed: {
      ...mapState({
        currentCity: 'city'
      })
    },
    watch: {
      letter() {
        if (this.letter) {
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
      }
    },
    mounted() {
      // better-scroll需要设置click:true才能够点击触发click事件
      this.scroll = new Bscroll(this.$refs.wrapper, {
        click: true
      })
    },
    methods: {
      handleCityClick(city) {
        this.changeCity(city)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    }
  }
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: 0.54rem
      background: #eee
      padding-left: 0.2rem
      color: #666;
      font-size: 0.26rem
    .button-list
      padding: 0.1rem 0.6rem 0.1rem 0.1rem
      overflow: hidden
      .button-wrapper
        float: left
        width: 33.33%
        .button
          text-align: center
          padding: 0.1rem 0
          margin: 0.1rem
          border: 0.02rem solid #ccc
          border-radius: 0.06rem
    .item-list
      .item
        line-height: 0.76rem
        /*color: #666;*/
        padding-left: 0.2rem
</style>
