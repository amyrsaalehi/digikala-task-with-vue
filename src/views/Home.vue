<template>
  <Filters />
  <Products :products="products" />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Filters from "../components/Home/Filters/Filters.vue";
import Products from "../components/Home/Products/Products.vue";

export default {
  name: "Home",
  components: { Filters, Products },

  setup() {
    const store = useStore();
    const products = computed(() => store.getters["main/products"]);
    return {
      products,
    };
  },
};
</script>

<style scoped>
</style>
