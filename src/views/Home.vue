<template>
  <h2>Filters</h2>
  <ConditionalLoader :condition="filters">
    <ul class="filter-container">
      <li>
        {{
          `${filters.has_selling_stock.title} - ${filters.has_selling_stock.type}`
        }}
      </li>
      <li>
        {{ `${filters.price.title} - ${filters.price.type}` }}
      </li>
    </ul>
  </ConditionalLoader>

  <h2>Products</h2>
  <ConditionalLoader :condition="products.length">
    <ul class="product-container">
      <li v-for="product in products" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
  </ConditionalLoader>
</template>

<script>
import ConditionalLoader from "../components/shared/ConditionalLoader.vue";
export default {
  name: "Home",
  components: { ConditionalLoader },
  computed: {
    products() {
      return this.$store.state.products;
    },
    filters() {
      return this.$store.state.filters;
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding: 2rem 1rem;
}
li {
  background-color: #eee;
  padding: 1rem 2rem;
  border-radius: 10px;
}
</style>
