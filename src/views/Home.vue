<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.title }}
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState(["products"]),
  },
};
</script>
