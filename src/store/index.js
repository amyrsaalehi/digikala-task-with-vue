import { createLogger, createStore } from 'vuex'
import main from './main'
import searchParams from './searchParams'
import cart from './cart'
import currentProduct from './currentProduct'


export default createStore({
    plugins: [createLogger()],
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        main,
        searchParams,
        cart,
        currentProduct,
    }
})