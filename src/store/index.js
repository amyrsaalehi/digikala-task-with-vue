// import { createStore, createLogger } from 'vuex'
import { createStore } from 'vuex'
import main from '@/store/main'
import searchParams from '@/store/searchParams'
import cart from '@/store/cart'
import currentProduct from '@/store/currentProduct'


export default createStore({
    // plugins: [createLogger()],
    modules: {
        main,
        searchParams,
        cart,
        currentProduct,
    }
})