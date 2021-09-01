import { createStore } from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
// import SecureLS from 'secure-ls';
// const ls = new SecureLS({ isCompression: false });
import { BASE_URL } from '../constants'

export default createStore({
    state: {
        inits: {
            "filters": {},
            "products": [],
            "sort": {},
            "pager": {}
        },
        searchParams: {
            "has_selling_stock": true,
            "price_range": [0, 1726074600],
            "sort": 22,
            "current_page": 1,

        },
        currentProduct: {}
    },
    // plugins: [
    //     createPersistedState({
    //         storage: {
    //             getItem: key => ls.get(key),
    //             setItem: (key, value) => ls.set(key, value),
    //             removeItem: key => ls.remove(key)
    //         }
    //     })
    // ],
    mutations: {
        toggleHasSellingStock(state, payload) {
            state.searchParams.has_selling_stock = payload;
        },
        changePriceRange(state, { from, to }) {
            state.searchParams.price_range = [from, to];
        },
        updateInits(state, paylaod) {
            state.inits = paylaod;
        },
    },
    actions: {
        async getProducts({ commit }, { page = 1, rows = 25, minPrice = 0, maxPrice = 1726074600, hasSellingStock = 1, sort = 4, q = 'سیب' }) {
            const data = await fetch(`${BASE_URL}/search/?page=${page}&rows=${rows}&price[min]=${minPrice}&price[max]=${maxPrice}&has_selling_stock=${hasSellingStock}&sort=${sort}&q=${q}`, {
                    headers: {
                        "token": localStorage.getItem('access_token'),
                        'Content-Type': 'application/json'
                    }
                })
                .then(data => data.json())
            if (data.status === 200) {
                commit('updateInits', data.data);
            }
        },
        async getProductDetails({ commit }, { productId }) {

            const data = await fetch(`${BASE_URL}/front-end/product/${productId}/`, {
                    headers: {
                        "token": localStorage.getItem('access_token'),
                        'Content-Type': 'application/json'
                    }
                })
                .then(data => data.json())

            if (data.status === 200) {
                commit('currentProduct', data.data.product)
            }
        }
    },
    getters: {},
    modules: {},
})