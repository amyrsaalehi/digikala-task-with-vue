import { BASE_URL } from '../constants'
import { getFetchConfigs } from '../constants/configs'

export default {
    namespaced: true,
    state: () => ({
        "filters": {},
        "products": [],
        "sort": {},
        "pager": {}
    }),
    mutations: {
        updateInits(state, paylaod) {
            state.inits = paylaod;
        },
    },
    actions: {
        async getProducts({ commit }, { page = 1, rows = 25, minPrice = 0, maxPrice = 1726074600, hasSellingStock = 1, sort = 4, q = 'سیب' }) {
            const data = await fetch(`${BASE_URL}/search/?page=${page}&rows=${rows}&price[min]=${minPrice}&price[max]=${maxPrice}&has_selling_stock=${hasSellingStock}&sort=${sort}&q=${q}`, getFetchConfigs)
                .then(data => data.json())
            if (data.status === 200) {
                commit('updateInits', data.data);
            }
        },
    }
}