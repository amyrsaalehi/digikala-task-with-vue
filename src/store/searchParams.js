export default {
    namespaced: true,
    state: () => ({
        "has_selling_stock": 1,
        "price_range": [0, 1726074600],
        "sort": 22,
        "current_page": 1,
    }),
    mutations: {
        toggleHasSellingStock(state, payload) {
            state.searchParams.has_selling_stock = payload;
        },
        changePriceRange(state, { from, to }) {
            state.searchParams.price_range = [from, to];
        },
    },
    actions: {}
}