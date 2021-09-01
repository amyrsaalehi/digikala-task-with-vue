<template>
  <h2>Filters</h2>
  <ConditionalLoader :condition="filters">
    <ul class="filter-container">
      <li class="has-selling-stock-filter">
        {{ `${filters.has_selling_stock.title}` }}
        <Switch />
      </li>

      <li class="price-filter">
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
import Switch from "../components/shared/Switch.vue";
export default {
  name: "Home",
  components: { ConditionalLoader, Switch },
  computed: {
    products() {
      return this.$store.state.inits.products;
    },
    filters() {
      return this.$store.state.inits.filters;
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
  display: flex;
  background-color: #eee;
  padding: 1rem 2rem;
  border-radius: 10px;
}

.has-selling-stock-filter {
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
</style>
