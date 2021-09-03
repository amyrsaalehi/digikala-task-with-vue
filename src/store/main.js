import { BASE_URL } from '../constants'
import { getFetchConfigs } from '../constants/configs'
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
        sort: 22,
        pager: {
            current_page: 1,
            total_items: 0,
            total_pages: 0
        },
        found: true
    }),
    mutations: {
        clearInits(state) {
            state.filters.price = {
                min: 0,
                max: 0
            };
            state.products = [];
            state.sort = 22;
            state.pager = {
                current_page: 1,
                total_items: 0,
                total_pages: 0
            };
        },
        updateInits(state, { filters, products, sort, pager }) {
            state.filters.price = {
                min: filters.price.options.min || 0,
                max: filters.price.options.max || 0
            };
            state.products = products;
            state.sort = sort.default;
            state.pager = pager;
            state.found = true;
        },
        notFound(state) {
            state.products = undefined;
            state.found = false;
        }
    },
    actions: {
        getProducts({ commit }, query) {
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
        products(state) {
            return state.products
        },
        prices(state) {
            return state.filters.price
        },
        sort(state) {
            return state.sort
        },
        pager(state) {
            return state.pager
        },
        maxPage(state) {
            return state.pager.total_pages
        },
        maxItems(state) {
            return state.pager.total_items
        },
        getFound(state) {
            return state.found
        }
    }
}