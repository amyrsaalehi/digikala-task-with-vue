import { createLogger, createStore } from 'vuex'
import inits from './inits'
import searchParams from './searchParams'
import cart from './cart'
import currentProduct from './currentProduct'


export default createStore({
    plugins: [
        createLogger()
    ],
    state: {},
    mutations: {},
    actions: {},
    modules: {
        inits,
        searchParams,
        cart,
        currentProduct,
    }
})