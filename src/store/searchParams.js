export default {
    namespaced: true,
    state: () => ({
        has_selling_stock: 0,
        price_range: ['', ''],
        // 4: the most views | 22: the most relevant | 27: customers recommendation
        sort: 22,
        current_page: 1,
        q: undefined,
        rows: 25
    }),
    mutations: {
        toggleHasSellingStock(state, has_selling_stock) {
            state.has_selling_stock = has_selling_stock;
        },
        changePriceRange(state, { from, to }) {
            state.price_range = [from, to];
        },
        changeSort(state, sort) {
            state.sort = sort
        },
        changeQuery(state, q) {
            state.q = q
        },
        changeCurrentPage(state, current_page) {
            state.current_page = current_page
        },
        changeRows(state, rows) {
            state.rows = rows
        },
        changeSearchParams(state, { has_selling_stock, minPrice, maxPrice, sort, current_page, rows, q }) {
            state.has_selling_stock = has_selling_stock;
            state.price_range = [minPrice, maxPrice];
            state.sort = sort;
            state.current_page = current_page;
            state.q = q;
            state.rows = rows;
        },
    },
    actions: {},
    getters: {
        getSearchParams(state) {
            return state;
        },
        getHasSellingStock(state) {
            return state.has_selling_stock
        },
        getQuery(state) {
            return state.query;
        },
        getRows(state) {
            return state.rows;
        },
        getMinPrice(state) {
            return state.price_range[0]
        },
        getMaxPrice(state) {
            return state.price_range[1]
        },
        getSort(state) {
            return state.sort;
        },
        getCurrentPage(state) {
            return state.current_page
        }
    }
}