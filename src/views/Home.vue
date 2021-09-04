<template>
  <Filters />
  <Products :products="products" />
  <Pagination
    :maxPage="$store.state.main.pager.total_pages"
    :shouldShow="products?.length > 0"
  />
</template>

<script>
import { mapState } from "vuex";
import Filters from "@/components/Home/Filters/Filters.vue";
import Products from "@/components/Home/Products/Products.vue";
import Pagination from "@/components/Home/Pagination.vue";

export default {
  name: "Home",
  components: { Filters, Products, Pagination },
  computed: {
    ...mapState("main", ["products"]),
  },
};
</script>

<style scoped>
</style>
