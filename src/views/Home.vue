<template>
  <Filters :filters="filters" />
  <Products :products="products" />
</template>

<script>
import Filters from "../components/Home/Filters.vue";
import Products from "../components/Home/Products.vue";

export default {
  name: "Home",
  components: { Products, Filters },
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
</style>
