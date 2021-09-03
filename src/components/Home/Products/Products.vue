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
import Card from "./Card.vue";
import Loader from "../../shared/Loader.vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default {
  name: "Products",
  components: { Loader, Card },
  props: ["products"],
  setup() {
    const store = useStore();
    const found = computed(() => store.getters["main/getFound"]);

    return {
      found,
    };
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