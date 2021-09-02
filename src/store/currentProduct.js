import { BASE_URL } from '../constants';
import { getFetchConfigs } from '../constants/configs';
import axios from 'axios';
import { calculateDiscountPercentage } from '../utils/helpers'

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
        founnd: true
    }),
    mutations: {
        setProduct(state, paylaod) {
            state.product = paylaod
            state.found = true;
        },
        notFound(state) {
            state.found = false;
        }
    },
    actions: {
        getProductDetails({ commit, }, payload) {
            return axios.get(`${BASE_URL}/product/${payload}/`, getFetchConfigs).then(res => {
                if (res.data.status === 200) {
                    commit('setProduct', res.data.data.product)
                } else {
                    commit('notFound')
                }
            })
        }
    },
    getters: {
        product(state) {
            return state.product;
        },
        totalDiscount(state) {
            return calculateDiscountPercentage(state.product.price.selling_price, state.product.price.rrp_price)
        },
        found(state) {
            return state.found
        }
    }
}