<template>
  <ul class="filter-container">
    <SearchBox />
    <PriceRange />
    <div class="sort-stock">
      <Sort />
      <Stock />
    </div>
  </ul>
</template>

<script>
// import { computed, onBeforeUnmount, ref } from "vue";
// import { useRouter, useRoute } from "vue-router";
// import { useStore } from "vuex";
import SearchBox from "@/components/Home/Filters/SearchBox.vue";
import Sort from "@/components/Home/Filters/Sort.vue";
import PriceRange from "@/components/Home/Filters/PriceRange.vue";
import Stock from "@/components/Home/Filters/Stock.vue";

export default {
  components: { SearchBox, Sort, PriceRange, Stock },
  // setup() {
  //   const store = useStore();
  //   const router = useRouter();
  //   const route = useRoute();

  //   const searchParams = computed(
  //     () => store.getters["searchParams/getSearchParams"]
  //   );

  //   const has_selling_stock = computed(
  //     () => searchParams.value.has_selling_stock
  //   );
  //   const current_page = ref(searchParams.value.current_page);
  //   const sort = ref(searchParams.value.sort);
  //   const minPrice = ref(searchParams.value.minPrice);
  //   const maxPrice = ref(searchParams.value.maxPrice);
  //   const rows = ref(searchParams.value.rows);
  //   const q = ref(searchParams.value.q);

  //   onBeforeUnmount(() => {
  //     store.commit("searchParams/changeSearchParams", {
  //       has_selling_stock: 0,
  //       minPrice: "",
  //       maxPrice: "",
  //       sort: 22,
  //       current_page: 1,
  //       rows: 25,
  //       q: undefined,
  //     });
  //   });

  //   function search() {
  //     let query = Object.assign({}, route.query, {
  //       page: current_page.value,
  //       rows: rows.value,
  //       "price[min]": minPrice.value || 0,
  //       "price[max]": maxPrice.value || 0,
  //       has_selling_stock: has_selling_stock.value || undefined,
  //       sort: sort.value,
  //       q: q.value !== "" ? q.value : undefined,
  //     });
  //     store.commit("searchParams/changeSearchParams", {
  //       has_selling_stock: has_selling_stock.value,
  //       minPrice: minPrice.value,
  //       maxPrice: maxPrice.value,
  //       sort: sort.value,
  //       current_page: current_page.value,
  //       rows: rows.value,
  //       q: q.value,
  //     });
  //     router.replace({ query });
  //   }
  //   return {
  //     current_page,
  //     search,
  //     minPrice,
  //     maxPrice,
  //     q,
  //     rows,
  //     sort,
  //   };
  // },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  gap: 5px;
}
.sort-stock {
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: space-between;
}
</style>