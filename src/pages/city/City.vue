<template>
  <div>
    <city-header />
    <city-search :cityList="cityList"/>
    <city-list
      :cityList="cityList"
      :hotCityList="hotCityList"
      :letter="letter"
    />
    <city-alphabet :city-list="cityList" @change="handleCityLetterChange" />
  </div>
</template>

<script>
  import axios from 'axios'
  import CityHeader from './components/CityHeader'
  import CitySearch from './components/CitySearch'
  import CityList from './components/CityList'
  import CityAlphabet from './components/CityAlphabet'

  export default {
    name: 'City',
    components: {
      CityAlphabet,
      CityList,
      CitySearch,
      CityHeader
    },
    data() {
      return {
        cityList: {},
        hotCityList: [],
        letter: ''
      }
    },
    mounted() {
      this.getCityData()
    },
    methods: {
      getCityData() {
        axios.get('/api/city.json')
          .then(this.handleCityData)
      },
      handleCityData(res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.cityList = data.cities
          this.hotCityList = data.hotCities
        }
      },
      handleCityLetterChange(letter) {
        this.letter = letter
      }
    }
  }
</script>

<style scoped>

</style>
