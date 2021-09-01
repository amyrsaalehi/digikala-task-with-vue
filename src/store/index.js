import { createStore } from 'vuex'

export default createStore({
    state: {
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
        }, ],
        sort: 22,
        pager: {
            "current_page": 1,
            "total_pages": 500,
            "total_items": 163034
        },
    },
    mutations: {},
    actions: {},
    getters: {},
    modules: {}
})