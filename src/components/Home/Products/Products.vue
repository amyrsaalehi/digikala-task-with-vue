<template>
  <ul class="product-container" v-if="found">
    <Card :product="product" v-for="product in products" :key="product.id" />
  </ul>
  <div v-if="products === undefined && !found && !allFound" class="not-found">
    <h1>Products not found</h1>
    <p>Please search something else.</p>
  </div>
  <Loader v-else :condition="(!finished && !found) || !allFound" />
</template>

<script>
import Card from "@/components/Home/Products/Card/Card.vue";
import Loader from "@/components/shared/Loader.vue";
import { mapState } from "vuex";

export default {
  name: "Products",
  components: { Loader, Card },
  props: ["products"],
  computed: {
    ...mapState("main", ["found"]),
    ...mapState("main", ["allFound"]),
    ...mapState("main", ["finished"]),
  },
};
</script>

<style scoped>
ul.product-container {
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
  margin-top: 8rem;
}

.not-found > p {
  color: #777;
}
</style>