import { BASE_URL } from '@/constants';
import { getFetchConfigs } from '@/constants/configs';
import axios from 'axios';
import { calculateDiscountPercentage } from '@/utils/helpers'

export default {
    namespaced: true,
    state: () => ({
        product: {
            id: 0,
            title: '',
            rating: {
                rate: 0,
                count: 0
            },
            status: 'marketable',
            images: {
                main: ''
            },
            price: {
                selling_price: 0,
                rrp_price: 0
            },
        },
        found: false,
        loading: true
    }),
    mutations: {
        setProduct(state, paylaod) {
            state.product = paylaod
            state.found = true;
        },
        notFound(state) {
            state.found = false;
        },
        setLoading(state, loading) {
            state.loading = loading
        }
    },
    actions: {
        getProductDetails({ commit }, payload) {
            commit('setLoading', true)
            axios.get(`${BASE_URL}/product/${payload}/`, getFetchConfigs).then(res => {
                if (res.data.status === 200) {
                    commit('setProduct', res.data.data.product)
                } else {
                    commit('notFound')
                }
            }).finally(() => {
                commit('setLoading', false)
            })
        }
    },
    getters: {
        totalDiscount(state) {
            return calculateDiscountPercentage(state.product.price.selling_price, state.product.price.rrp_price)
        },
    }
}