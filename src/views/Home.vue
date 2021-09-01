<template>
  <!-- <h2>Filters</h2>
  <ConditionalLoader :condition="filters">
    <ul class="filter-container">
      <li class="has-selling-stock-filter">
        {{ `${filters.has_selling_stock.title}` }}
        <Switch />
      </li>

      <li class="price-filter">
        {{ `${filters.price.title} - ${filters.price.type}` }}
        <Slider />
      </li>
    </ul>
  </ConditionalLoader> -->

  <h2>Products</h2>
  <ConditionalLoader :condition="products">
    <ul class="product-container">
      <li v-for="product in products" :key="product.id">
        <img :src="product.images.main" />
        {{ product.title }}
      </li>
    </ul>
  </ConditionalLoader>
</template>

<script>
import ConditionalLoader from "../components/shared/ConditionalLoader.vue";
// import Slider from "../components/shared/Slider.vue";
// import Switch from "../components/shared/Switch.vue";
export default {
  name: "Home",
  components: { ConditionalLoader },
  computed: {
    products() {
      return this.$store.state.inits.inits.products;
    },
    filters() {
      return this.$store.state.inits.inits.filters;
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 15px;
  padding: 2rem 1rem;
}
li {
  display: flex;
  background-color: #eee;
  padding: 1rem 2rem;
  border-radius: 10px;
  direction: rtl;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.has-selling-stock-filter {
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.price-filter {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
</style>
