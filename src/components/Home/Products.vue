<template>
  <h2>Products</h2>
  <ConditionalLoader :condition="products">
    <ul class="product-container">
      <li v-for="product in products" :key="product.id">
        <img :src="product.images.main" />
        {{ product.title }}
      </li>
    </ul>
  </ConditionalLoader>
</template>

<script>
import ConditionalLoader from "../shared/ConditionalLoader.vue";
export default {
  name: "Products",
  components: { ConditionalLoader },
  props: ["products"],
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
</style>