<template>
  <ConditionalLoader :condition="product">
    <div class="container" v-if="found">
      <div class="img-container">
        <img :src="product.images.main" :alt="product.title" />
      </div>
      <div class="wrapper">
        <h1>{{ product.title }}</h1>
        <div class="price-container" v-if="product.status === 'marketable'">
          <span class="selling">
            {{ product.price.selling_price + " " }}ریال
          </span>
          <span
            v-if="product.price.selling_price !== product.price.rrp_price"
            class="rrp"
          >
            {{ product.price.rrp_price + " " }}ریال
          </span>
        </div>
        <div class="rating">
          <p class="rate">
            <span>{{ `امتیاز ${product.rating.rate}` }}</span>
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/star-bookmark-favorite-shape-rank-like-32386.png"
              width="25"
              height="25"
              alt="star"
            />
          </p>
          <p class="count">
            {{ `${product.rating.count} نفر به این محصول رای دادند` }}
          </p>
        </div>
        <button
          v-if="product.status === 'marketable'"
          class="add-to-cart"
          @click="addToCart"
        >
          افزودن به سبد خرید
        </button>
        <button v-else disabled class="add-to-cart">
          موجود شد به من اطلاع بده
        </button>
      </div>
    </div>
    <div v-else class="not-found">
      <h1>Product not found</h1>
      <p>
        Click this <router-link to="/">Link</router-link> tot go back to Home
        page.
      </p>
    </div>
  </ConditionalLoader>
</template>


<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import ConditionalLoader from "../components/shared/ConditionalLoader.vue";
import { updateCart, isProductInCart } from "../utils/cart";

export default {
  name: "Details",
  components: { ConditionalLoader },
  created() {
    (async () => {
      await this.$store.dispatch(
        "currentProduct/getProductDetails",
        this.$route.params.id
      );
    })();
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const found = computed(() => store.getters["currentProduct/found"]);
    const product = computed(() => store.getters["currentProduct/product"]);

    function addToCart() {
      if (!isProductInCart(store, product.value.id)) {
        updateCart(
          store,
          "cart/addProduct",
          {
            id: product.value.id,
            title: product.value.title,
            images: product.value.images,
            price: product.value.price,
            count: 1,
          },
          window.localStorage
        );
      } else {
        updateCart(
          store,
          "cart/addCount",
          product.value.id,
          window.localStorage
        );
      }
    }

    return {
      id: route.params.id,
      product,
      addToCart,
      found,
    };
  },
};
</script>

<style scoped>
button.add-to-cart:disabled,
button.add-to-cart[disabled] {
  color: #888;
  background-color: #eee;
  cursor: initial;
}
.wrapper > h1 {
  font-size: 2.5rem;
  text-align: center;
}
.container {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}
.not-marketable {
  width: 100%;
  margin: 4rem 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.not-marketable > img {
  width: 50%;
  height: 100%;
  object-fit: cover;
}
.not-marketable > h2 {
  padding: 2rem 3rem;
  color: #777;
}
.not-marketable a {
  color: #333;
}
.img-container {
  flex: 0 1 45%;
  position: relative;
  margin-bottom: 3rem;
}
.img-container > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.status {
  position: relative;
  top: 20px;
  left: 20px;
  color: #333;
  background-color: #eee;
  padding: 1rem 2rem;
  border-radius: 5px;
  z-index: 2;
}
.wrapper {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  direction: rtl;
  flex: 1 1 50%;
  gap: 50px;
}
.price-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  gap: 15px;
}
.price-container > span {
  display: block;
}

.selling {
  font-size: 1.8rem;
  font-weight: bold;
}

.rrp {
  font-size: 1.3rem;
  text-decoration: 2px rgb(173, 55, 55) line-through;
}

.rating {
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
}

.rate {
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.rate > span {
  font-size: 1.5rem;
  font-weight: bold;
}

.rate > img {
  object-fit: cover;
  margin-top: -5px;
}

.count {
  font-size: 1.2rem;
  font-weight: 500;
}

.add-to-cart {
  background-color: #333;
  color: #eee;
  padding: 1rem 0;
  font-size: 1.2rem;
  border-radius: 5px;
}

.not-found {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 3rem;
}

.not-found > p {
  color: #777;
}

.not-found a {
  color: #333;
}

@media screen and (max-width: 768px) {
  .img-container {
    flex: 1 1 100%;
  }

  .wrapper > h1 {
    font-size: 2rem;
    text-align: justify;
  }
}
</style>