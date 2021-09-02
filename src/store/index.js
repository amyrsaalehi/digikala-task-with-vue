import { createLogger, createStore } from 'vuex'
import main from './main'
import searchParams from './searchParams'
import cart from './cart'
import currentProduct from './currentProduct'


export default createStore({
    plugins: [createLogger()],
    state: {
        globalLoading: false
    },
    mutations: {
        setGlobalLoading(state, paylaod) {
            state.globalLoading = paylaod
        }
    },
    actions: {},
    getters: {
        globalLoading(state) {
            return state.globalLoading
        }
    },
    modules: {
        main,
        searchParams,
        cart,
        currentProduct,
    }
})