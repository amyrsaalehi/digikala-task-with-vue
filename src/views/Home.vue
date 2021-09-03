<template>
  <Filters />
  <Products :products="products" />
  <Pagination :maxPage="maxPage" :shouldShow="products?.length > 0" />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Filters from "../components/Home/Filters/Filters.vue";
import Products from "../components/Home/Products/Products.vue";
import Pagination from "../components/Home/Filters/Pagination.vue";

export default {
  name: "Home",
  components: { Filters, Products, Pagination },
  setup() {
    const store = useStore();
    const products = computed(() => store.getters["main/products"]);
    const maxPage = computed(() => store.getters["main/maxPage"]);

    return {
      products,
      maxPage,
    };
  },
};
</script>

<style scoped>
</style>
