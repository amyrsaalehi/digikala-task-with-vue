import { CART_LOCALSTORAGE_KEY } from '../constants/index'

export function updateCart(store, type, paylaod, storage) {
    store.commit(type, paylaod);
    store.commit('cart/calculateTotalPrices');
    if (storage) {
        updateCartDatas(store, storage)
    }
}

export function isProductInCart(store, id) {
    const ids = getIdsOfProducts(store.getters["cart/getProducts"]);
    return ids.includes(id)
}

export function getIdsOfProducts(products) {
    return products.map(product => product.id)
}

export function restoreCartDatas(store, storage) {
    if (!storage) {
        console.log('There is no Storage provided or exist');
        return;
    }

    const rawData = storage.getItem(CART_LOCALSTORAGE_KEY);

    if (!rawData) {
        console.log('There is No data');
        return;
    }

    const data = JSON.parse(rawData);

    console.log('data for restore', data)

    store.commit('cart/restoreCart', data)
}

export function updateCartDatas(store, storage) {
    if (!storage) {
        console.log('There is no Storage provided or exist');
        return;
    }
    const datas = store.state.cart;
    storage.setItem(CART_LOCALSTORAGE_KEY, JSON.stringify(datas))
}