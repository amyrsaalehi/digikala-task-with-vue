<template>
  <Header>
    <p>totalRrpPrice = {{ totalRrpPrice }}</p>
    <p>totalSellingPrice = {{ totalSellingPrice }}</p>
  </Header>
  <ul class="container">
    <Card v-for="product in products" :key="product.id" :product="product" />
  </ul>
</template>

<script>
import { computed, reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import Card from "../components/Cart/Card.vue";
import Header from "../components/semantics/Header.vue";
import { split3Digits } from "../utils/helpers";

export default {
  components: { Card, Header },
  setup() {
    const store = useStore();
    const products = reactive(store.getters["cart/getProducts"]);
    const totalSellingPrice = computed(() =>
      split3Digits(store.getters["cart/getTotalSellingPrice"])
    );
    const totalRrpPrice = computed(() =>
      split3Digits(store.getters["cart/getTotalRrpPrice"])
    );

    return {
      products,
      totalSellingPrice,
      totalRrpPrice,
    };
  },
};
</script>

<style scoped>
header {
}
.container {
  display: flex;
  flex-flow: row wrap;
  gap: 30px;
  justify-content: center;
}
</style>