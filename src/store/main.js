import { BASE_URL } from '@/constants'
import { getFetchConfigs } from '@/constants/configs'
import { split3Digits } from "@/utils/helpers";
import axios from 'axios';

export default {
    namespaced: true,
    state: () => ({
        filters: {
            price: {
                min: 0,
                max: 0
            }
        },
        products: [],
        allProducts: [],
        sort: 22,
        pager: {
            current_page: 1,
            total_items: 0,
            total_pages: 0
        },
        found: true,
        allFound: false,
        finishsed: false
    }),
    mutations: {
        clearInits(state) {
            state.filters.price = {
                min: 0,
                max: 0
            };
            state.products = [];
            state.allProducts = [];
            state.sort = 22;
            state.pager = {
                current_page: 1,
                total_items: 0,
                total_pages: 0
            };
            state.found = true
            state.allFound = false
            state.finishsed = false
        },
        updateInits(state, { filters, products, sort, pager }) {
            state.filters.price = {
                min: filters.price.options.min || 0,
                max: filters.price.options.max || 0
            };
            state.products = products;
            state.sort = sort.default;
            state.pager = pager;
            if (pager.current_page > 1) {
                state.allProducts.push(...products)
            } else {
                state.allProducts = products
            }
            state.allFound = true;
            state.found = true;
        },
        notFound(state) {
            state.allProducts = undefined
            state.allFound = false;
            state.found = false;
        },
        loadingFoundAll(state) {
            state.allFound = false
        },
        finished(state) {
            state.finishsed = true
        }
    },
    actions: {
        updateInits({ commit }, query) {
            commit('loadingFoundAll')
            axios.get(`${BASE_URL}/search/`, {
                    ...getFetchConfigs,
                    params: {
                        ...query,
                    },
                })
                .then(res => {
                    if (res.data.status === 200) {
                        if (res.data.data.pager.total_items == 0) {
                            commit('notFound')
                            return;
                        }
                        if (res.data.data.pager.current_page === res.data.data.pager.total_pages) {
                            commit('finished')
                        }
                        commit('updateInits', res.data.data);
                    } else {
                        commit('notFound')
                    }
                }).catch(() => {
                    commit('notFound')
                })
        },
    },
    getters: {
        minPricePlaceHolder(state) {
            return `قیمت از ${split3Digits(
              state.filters.price.min
            )} تومان`;
        },
        maxPricePlaceHolder(state) {
            return `قیمت تا ${split3Digits(
              state.filters.price.max
            )} تومان`;
        },
    }
}