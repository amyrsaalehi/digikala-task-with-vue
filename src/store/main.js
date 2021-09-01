import { BASE_URL } from '../constants'
import { getFetchConfigs } from '../constants/configs'

export default {
    namespaced: true,
    state: () => ({
        filters: {
            has_selling_stock: {
                title: "فقط کالاهای موجود",
            },
            price: {
                title: "محدوده قیمت",
                min: 0,
                max: 0
            }
        },
        products: [],
        sort: 22,
        pager: {
            current_page: 1,
            total_items: 0,
            total_pages: 0
        }
    }),
    mutations: {
        updateInits(state, { filters, products, sort, pager }) {
            state.filters.price = {
                ...state.filters.price,
                min: filters.price.options.min,
                max: filters.price.options.max
            };
            state.products = products;
            state.sort = sort.default;
            state.pager = pager;
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
    },
    getters: {
        products(state) {
            return state.products
        },
        filters(state) {
            return state.filters
        }
    }
}