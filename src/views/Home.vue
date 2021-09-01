<template>
  <Filters :filters="filters" />
  <Products :products="products" />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Filters from "../components/Home/Filters.vue";
import Products from "../components/Home/Products.vue";

export default {
  name: "Home",
  components: { Products, Filters },

  setup() {
    const store = useStore();
    const products = computed(() => store.getters["main/products"]);
    const filters = computed(() => store.getters["main/filters"]);
    return {
      products,
      filters,
    };
  },
};
</script>

<style scoped>
</style>
