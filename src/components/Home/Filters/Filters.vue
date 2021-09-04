<template>
  <ul class="filter-container">
    <SearchBox />
    <Sort />
    <PriceRange />
    <Stock />
  </ul>
</template>

<script>
import SearchBox from "@/components/Home/Filters/SearchBox.vue";
import Sort from "@/components/Home/Filters/Sort.vue";
import PriceRange from "@/components/Home/Filters/PriceRange.vue";
import Stock from "@/components/Home/Filters/Stock.vue";

export default {
  components: { SearchBox, Sort, PriceRange, Stock },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  gap: 5px;
}
</style>