<template>
  <Filters :filters="filters" />
  <Products :products="products" />
</template>

<script>
import { computed, onMounted } from "vue";
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
    onMounted(async () => {
      await store.dispatch("main/getProducts", {
        page: 1,
        rows: 25,
        minPrice: 0,
        maxPrice: 1726074600,
        hasSellingStock: 1,
        sort: 22,
        q: "سیب",
      });
    });
    return {
      products,
      filters,
    };
  },
};
</script>

<style scoped>
</style>
