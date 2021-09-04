<template>
  <ul class="container" v-if="$store.state.cart.products.length">
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
  <NotFound v-else />
</template>

<script>
import { mapGetters } from "vuex";
import Card from "@/components/Cart/Card/Card.vue";
import Total from "@/components/Cart/Total.vue";
import NotFound from "@/components/Cart/NotFound.vue";

export default {
  name: "Cart",
  components: { Card, Total, NotFound },
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