import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '广州'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {
    console.log(e)
}

export default new Vuex.Store({
    state: {
        city: defaultCity
    },
    mutations: {
        changeCity(state, city) {
            // 该state为上述state
            state.city = city
            try {
                localStorage.city = city
            } catch (e) {
                console.log(e)
            }
        }
    }
    // actions: {
    //     changeCity(ctx, city) {
    //         // 触发mutations的changeCity
    //         ctx.commit('changeCity', city)
    //     }
    // }
})
