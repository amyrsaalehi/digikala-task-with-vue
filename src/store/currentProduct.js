import { BASE_URL } from '../constants';
import { getFetchConfigs } from '../constants/configs';
import axios from 'axios';

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
            status: '',
            images: {
                main: ''
            },
            price: {
                selling_price: 0,
                rrp_price: 0
            },
        }
    }),
    mutations: {
        setProduct(state, paylaod) {
            state.product = paylaod
        }
    },
    actions: {
        getProductDetails({ commit, }, payload) {
            return axios.get(`${BASE_URL}/product/${payload}/`, getFetchConfigs).then(res => {
                if (res.data.status === 200) {
                    commit('setProduct', res.data.data.product)
                }
            })
        }
    },
    getters: {
        product(state) {
            console.log('getter for curretn product')
            return state.product;
        },
    }
}