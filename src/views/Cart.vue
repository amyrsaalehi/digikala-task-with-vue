<template>
  <ul class="container">
    <Card
      v-for="product in $store.state.cart.products"
      :key="product.id"
      :product="product"
    />
    <Total
      :totalRrpPrice="totalRrpPrice"
      :totalDiscountPrice="totalDiscountPrice"
      :totalSellingPrice="totalSellingPrice"
    />
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "@/components/Cart/Card.vue";
import Total from "@/components/Cart/Total.vue";

export default {
  components: { Card, Total },
  computed: {
    ...mapGetters({
      totalSellingPrice: "cart/getTotalSellingPriceSplitted",
      totalRrpPrice: "cart/getTotalRrpPriceSplitted",
      totalDiscountPrice: "cart/getTotalDiscountPriceSplitted",
    }),
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
  margin-bottom: 15rem;
  min-height: 100vh;
}
</style>