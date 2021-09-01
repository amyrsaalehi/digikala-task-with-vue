import { BASE_URL } from '../constants';
import { getFetchConfigs } from '../constants/configs';

export default {
    namespaced: true,
    state: () => ({}),
    mutations: {
        currentProduct(state, paylaod) {
            state = paylaod;
        }
    },
    actions: {
        async getProductDetails({ commit }, { productId }) {

            const data = await fetch(`${BASE_URL}/front-end/product/${productId}/`, getFetchConfigs)
                .then(data => data.json())

            if (data.status === 200) {
                commit('currentProduct', data.data.product)
            }
        }
    }
}