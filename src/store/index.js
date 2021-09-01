import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls';
const ls = new SecureLS({ isCompression: false });

export default createStore({
    state: {
        inits: {
            filters: {
                "has_selling_stock": {
                    "title": "فقط کالاهای موجود",
                    "options": [{
                        "title": "کالاهای موجود"
                    }],
                    "type": "switch"
                },
                "price": {
                    "title": "محدوده قیمت",
                    "options": {
                        "min": 0,
                        "max": 1726074600
                    },
                    "type": "slider"
                }
            },
            products: [{
                    "id": 5154511,
                    "title": "کوله پشتی 50 لیتری گوگانا کد 30309",
                    "rating": {
                        "rate": 80,
                        "count": 0
                    },
                    "status": "marketable",
                    "images": {
                        "main": "http://dkstatics-public.digikala.com/digikala-products/89b3060c2b29598a493ec3e5d51c25ece70569fb_1620822493.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    },
                    "price": {
                        "selling_price": 1790000,
                        "rrp_price": 5490000
                    }
                },
                {
                    "id": 5143892,
                    "title": "ساک ورزشی فوروارد کد FCLT9908",
                    "rating": {
                        "rate": 0,
                        "count": 0
                    },
                    "status": "marketable",
                    "images": {
                        "main": "http://dkstatics-public.digikala.com/digikala-products/460bf82fba3977401af9efdb2daf47ef5aef49d9_1620728567.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    },
                    "price": {
                        "selling_price": 1199000,
                        "rrp_price": 2990000
                    }
                },
                {
                    "id": 5155091,
                    "title": "کیف کمری گوگانا کد GOOG-400400",
                    "rating": {
                        "rate": 0,
                        "count": 0
                    },
                    "status": "marketable",
                    "images": {
                        "main": "http://dkstatics-public.digikala.com/digikala-products/eda0ce297dc1b60b0c490f7cf1c0d9c295f84176_1620825324.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    },
                    "price": {
                        "selling_price": 399000,
                        "rrp_price": 1690000
                    }
                },
            ],
            sort: 22,
            pager: {
                "current_page": 1,
                "total_pages": 500,
                "total_items": 163034
            },
        },
        searchParams: {
            "has_selling_stock": true,
            "price_range": [0, 1726074600],
            "sort": 22,
            "current_page": 1,

        }
    },
    mutations: {
        toggleHasSellingStock(state, payload) {
            state.searchParams.has_selling_stock = payload;
            console.log(state.searchParams)
        }
    },
    actions: {},
    getters: {},
    modules: {},
    plugins: [
        createPersistedState({
            storage: {
                getItem: key => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: key => ls.remove(key)
            }
        })
    ],
})