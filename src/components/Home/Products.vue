<template>
  <h2>Products</h2>
  <ConditionalLoader :condition="products?.length > 0">
    <ul class="product-container">
      <Card :product="product" v-for="product in products" :key="product.id" />
    </ul>
  </ConditionalLoader>
</template>

<script>
import Card from "../shared/Card.vue";
import ConditionalLoader from "../shared/ConditionalLoader.vue";
export default {
  name: "Products",
  components: { ConditionalLoader, Card },
  props: ["products"],
};
</script>

<style scoped>
ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 30px;
  padding: 2rem 1rem;
}
</style>