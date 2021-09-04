<template>
  <Loader :condition="!products?.length && found" />
  <ul class="product-container" v-if="found">
    <Card :product="product" v-for="product in products" :key="product.id" />
  </ul>
  <div v-else class="not-found">
    <h1>Products not found</h1>
    <p>Please search something else.</p>
  </div>
</template>

<script>
import Card from "@/components/Home/Products/Card.vue";
import Loader from "@/components/shared/Loader.vue";
import { mapState } from "vuex";

export default {
  name: "Products",
  components: { Loader, Card },
  props: ["products"],
  computed: {
    ...mapState("main", ["found"]),
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 2rem 1rem;
}

.not-found {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 3rem;
}

.not-found > p {
  color: #777;
}
</style>