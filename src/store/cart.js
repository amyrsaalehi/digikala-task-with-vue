export default {
    namespaced: true,
    state: () => ({
        products: [],
        total_selling_price: 0,
        total_rrp_price: 0
    }),
    mutations: {
        restoreCart(state, payload) {
            state.products = payload.products;
            state.total_rrp_price = payload.total_rrp_price;
            state.total_selling_price = payload.total_selling_price
        },
        addCount(state, id) {
            const index = state.products.findIndex(item => item.id === id);
            state.products[index].count++;
        },
        reduceCount(state, id) {
            const index = state.products.findIndex(item => item.id === id);
            state.products[index].count--;
        },
        changeProductCount(state, { id, count }) {
            const index = state.products.findIndex(item => item.id === id);
            state.products[index].count = count;
        },
        addProduct(state, product) {
            state.products.push(product)
        },
        remoteProduct(state, id) {
            const index = state.products.findIndex(item => item.id === id);
            state.products.splice(index, 1)
        },
        calculateTotalPrices(state) {
            state.total_selling_price = 0;
            state.total_rrp_price = 0;
            state.products.forEach(product => {
                state.total_selling_price += product.price.selling_price
                state.total_rrp_price += product.price.rrp_price
            })
        }
    },
    actions: {},
    getters: {
        getProducts(state) {
            return state.products
        },
        getTotalSellingPrice(state) {
            return state.total_selling_price
        },
        getTotalRrpPrice(state) {
            return state.total_rrp_price
        },
    },
}