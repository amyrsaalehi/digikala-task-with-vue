export function updateCart(store, type, paylaod) {
    store.commit(type, paylaod);
    store.commit('cart/calculateTotalPrices')
}

export function isProductInCart(store, id) {
    const ids = getIdsOfProducts(store.getters["cart/getProducts"]);
    return ids.includes(id)
}

export function getIdsOfProducts(products) {
    return products.map(product => product.id)
}