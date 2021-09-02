<template>
  <li>
    <div class="img-container">
      <img :src="product.images.main" />
    </div>
    <h4>
      {{ product.title }}
    </h4>
    <div class="price-container" v-if="product.status === 'marketable'">
      <p class="discount" v-if="discountPercentage !== 0">
        -{{ discountPercentage }}%
      </p>
      <p class="price">{{ price + " " }}ریال</p>
    </div>
    <div class="actions-container" v-if="product.status === 'marketable'">
      <router-link :to="`/product/${product.id}`"> جزیات </router-link>
      <button class="add-to-cart" @click="addToCart">افزودن</button>
    </div>
    <div class="actions-container" v-else>
      <router-link :to="`/product/${product.id}`"> جزیات </router-link>
      <button class="add-to-cart" disabled="true">اتمام موجودی</button>
    </div>
  </li>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { updateCart, isProductInCart } from "../../../utils/cart";
import {
  split3Digits,
  calculateDiscountPercentage,
} from "../../../utils/helpers";

export default {
  props: ["product"],
  setup(props) {
    const store = useStore();
    const price = computed(() =>
      split3Digits(props.product.price.selling_price)
    );
    const discountPercentage = computed(() =>
      calculateDiscountPercentage(
        props.product.price.selling_price,
        props.product.price.rrp_price
      )
    );
    function addToCart() {
      if (!isProductInCart(store, props.product.id)) {
        updateCart(
          store,
          "cart/addProduct",
          {
            id: props.product.id,
            title: props.product.title,
            images: props.product.images,
            price: props.product.price,
            count: 1,
          },
          window.localStorage
        );
      } else {
        updateCart(
          store,
          "cart/addCount",
          props.product.id,
          window.localStorage
        );
      }
    }
    return {
      addToCart,
      price,
      discountPercentage,
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
li {
  display: flex;
  flex: 1 1 400px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

li > .img-container {
  overflow: hidden;
}

li > h4 {
  direction: rtl;
  padding: 1rem;
  text-align: right;
}

li > p {
  direction: rtl;
  font-size: 1rem;
}

li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 300ms all ease-out;
}

li:hover img {
  transform: scale(1.1);
}

.price-container {
  display: flex;
  flex-flow: row nowrap;
  gap: 15px;
}

.discount {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  color: white;
  font-weight: 700;
  font-size: 0.75rem;
  border-radius: 5px;
  padding: 0.25rem 0.75rem;
}

.price {
  font-weight: bolder;
  font-size: 1.2rem;
  padding: 0.5rem 0.75rem;
  background-color: #efefef;
  border-radius: 5px;
}

.actions-container {
  /* background-color: #2c2c2c; */
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  flex-flow: row nowrap;
}

.actions-container > a {
  display: block;
  color: #eee;
  background-color: #2c2c2c;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  height: 40px;
  display: flex;
  align-items: center;
}

.add-to-cart {
  display: block;
  color: #eee;
  background-color: #2c2c2c;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  height: 40px;
}
</style>