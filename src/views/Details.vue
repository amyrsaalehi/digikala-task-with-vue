<template>
  <ConditionalLoader :condition="product">
    <div class="container" v-if="product.status === 'marketable'">
      <div class="img-container">
        <img :src="product.images.main" :alt="product.title" />
      </div>
      <div class="wrapper">
        <h1>{{ product.title }}</h1>
        <div class="price-container">
          <span class="selling"> {{ product.price.selling_price }}$ </span>
          <span class="rrp"> {{ product.price.rrp_price }}$ </span>
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
        <button class="add-to-cart" @click="addToCart">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
    <div v-else class="not-marketable">
      <img
        src="http://grootech.id/frontAsset/img/not-found.gif"
        alt="not-marketable"
      />
      <h2>
        Please go back to <router-link to="/">Home</router-link> and pick
        another one, It's not markable.
      </h2>
    </div>
  </ConditionalLoader>
</template>


<script>
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import ConditionalLoader from "../components/shared/ConditionalLoader.vue";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "Details",
  components: { ConditionalLoader },
  setup() {
    const store = useStore();
    const route = useRoute();
    const product = computed(() => store.getters["currentProduct/product"]);

    onMounted(async () => {
      await store.dispatch("currentProduct/getProductDetails", route.params.id);
    });

    function addToCart() {
      //TODO: add to cart commit
    }

    return {
      id: route.params.id,
      product,
      addToCart,
    };
  },
};
</script>

<style scoped>
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
  flex: 0 1 50%;
  position: relative;
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
  gap: 50px;
}
.wrapper > h1 {
  font-size: 3rem;
}
.price-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.price-container > span {
  display: block;
}

.selling {
  font-size: 1.5rem;
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
</style>