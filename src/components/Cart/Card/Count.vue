<template>
  <div class="count-actions">
    <button class="reduce-count" @click="reduceCount">-</button>
    <span class="count">
      {{ count }}
    </span>
    <button class="add-count" @click="addCount">+</button>
  </div>
</template>

<script>
import { updateCart } from "@/utils/cart";
export default {
  props: ["product"],
  data() {
    return {
      count: this.product.count,
    };
  },
  methods: {
    removeFromCart() {
      updateCart(
        this.$store,
        "cart/removeProduct",
        this.product.id,
        window.localStorage
      );
    },
    reduceCount() {
      console.log("reduce");
      if (--this.count > 0) {
        updateCart(
          this.$store,
          "cart/reduceCount",
          this.product.id,
          window.localStorage
        );
      } else {
        this.removeFromCart();
      }
    },

    addCount() {
      updateCart(
        this.$store,
        "cart/addCount",
        this.product.id,
        window.localStorage
      );
      this.count++;
    },
  },
};
</script>

<style scoped>
.count-actions {
  display: flex;
  flex-flow: column-reverse nowrap;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  flex: 1 1 100px;
}
.count {
  display: block;
}
.count-actions > button {
  width: 30px;
  height: 30px;
  color: #2c2c2c;
  border-radius: 50%;
  border: 1px solid #2c2c2c;
  background-color: transparent;
}
.reduce-count {
}
.add-count {
}
@media screen and (max-width: 913px) {
  .count-actions {
    flex-flow: row-reverse nowrap;
  }
}
</style>