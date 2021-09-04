<template>
  <div class="price-container" v-if="product.status === 'marketable'">
    <span class="selling"> {{ sellingPrice + " " }}تومان </span>
    <span
      v-if="product.price.selling_price !== product.price.rrp_price"
      class="rrp"
    >
      {{ rrpPrice + " " }}تومان
    </span>
  </div>
</template>

<script>
import { split3Digits } from "@/utils/helpers";
export default {
  // TODO: make it 3digits
  props: ["product"],
  computed: {
    sellingPrice() {
      return split3Digits(this.product.price.selling_price);
    },
    rrpPrice() {
      return split3Digits(this.product.price.rrp_price);
    },
  },
};
</script>

<style scoped>
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
</style>