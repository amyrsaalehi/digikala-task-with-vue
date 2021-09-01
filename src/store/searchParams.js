export default {
    namespaced: true,
    state: () => ({
        has_selling_stock: 0,
        price_range: [0, 0],
        sort: 22,
        current_page: 1,
    }),
    mutations: {
        toggleHasSellingStock(state, payload) {
            state.has_selling_stock = payload;
        },
        changePriceRange(state, { from, to }) {
            state.price_range = [from, to];
        },
    },
    actions: {}
}