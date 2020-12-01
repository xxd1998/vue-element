import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        count:0,
        userInfo:{},
    },
    //执行异步方法 this.$store.dispath()
    actions:{

    },
    //相当于method this.$store.commit()
    mutations:{
        add(state){
            return state.count++
        },
        reduce(state){
            return state.count--
        }
    }
})
