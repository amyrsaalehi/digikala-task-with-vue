<template>
  <h2>Filters</h2>
  <ConditionalLoader :condition="filters">
    <ul class="filter-container">
      <li class="has-selling-stock-filter">
        {{ `${filters.has_selling_stock.title}` }}
        <Switch />
      </li>

      <li class="price-filter">
        {{ `${filters.price.title} - ${filters.price.type}` }}
        <Slider />
      </li>
    </ul>
  </ConditionalLoader>
</template>

<script>
import Slider from "../shared/Slider.vue";
import Switch from "../shared/Switch.vue";
import ConditionalLoader from "../shared/ConditionalLoader.vue";
export default {
  name: "Filters",
  components: { ConditionalLoader, Slider, Switch },
  props: ["filters"],
};
</script>

<style scoped>
ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 15px;
  padding: 2rem 1rem;
}
li {
  display: flex;
  background-color: #eee;
  padding: 1rem 2rem;
  border-radius: 10px;
  direction: rtl;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.has-selling-stock-filter {
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.price-filter {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
</style>