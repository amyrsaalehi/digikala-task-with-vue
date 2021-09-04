<template>
  <div class="actions-container">
    <router-link :to="{ name: 'PDP', params: { id: product.id } }">
      جزیات
    </router-link>
    <button
      v-if="product.status === 'marketable'"
      class="add-to-cart"
      @click="addToCart"
    >
      افزودن
    </button>
    <button v-else class="add-to-cart" disabled="true">اتمام موجودی</button>
  </div>
</template>

<script>
import { updateCart, isProductInCart } from "@/utils/cart";
export default {
  props: ["product"],
  methods: {
    addToCart() {
      if (!isProductInCart(this.$store, this.product.id)) {
        updateCart(
          this.$store,
          "cart/addProduct",
          {
            id: this.product.id,
            title: this.product.title,
            images: this.product.images,
            price: this.product.price,
            count: 1,
          },
          window.localStorage
        );
      } else {
        updateCart(
          this.$store,
          "cart/addCount",
          this.product.id,
          window.localStorage
        );
      }
    },
  },
};
</script>

<style scoped>
.actions-container {
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

button.add-to-cart:disabled,
button.add-to-cart[disabled] {
  color: #888;
  background-color: #eee;
  cursor: initial;
}
</style>