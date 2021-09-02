<template>
  <Filters />
  <Products :products="products" :found="found" />
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
    const found = computed(() => store.getters["main/found"]);
    return {
      products,
      found,
    };
  },
};
</script>

<style scoped>
</style>
