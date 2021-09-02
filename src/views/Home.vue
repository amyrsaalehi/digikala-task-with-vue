<template>
  <Filters />
  <Products :products="products" />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Filters from "../components/Home/Filters.vue";
import Products from "../components/Home/Products/index.vue";

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
