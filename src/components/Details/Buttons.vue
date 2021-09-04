<template>
  <button
    v-if="product.status === 'marketable'"
    class="add-to-cart"
    @click="addToCart"
  >
    افزودن به سبد خرید
  </button>
  <button v-else disabled class="add-to-cart">موجود شد به من اطلاع بده</button>
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
.add-to-cart {
  background-color: var(--dark);
  color: #eee;
  padding: 1rem 0;
  font-size: 1.2rem;
  border-radius: 5px;
}

button.add-to-cart:disabled,
button.add-to-cart[disabled] {
  color: #888;
  background-color: #eee;
  cursor: initial;
}
</style>