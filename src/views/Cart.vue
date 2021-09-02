<template>
  <div v-for="product in products" :key="product.id">
    {{
      `${product.title} - ${product.count} - ${totalRrpPrice} - ${totalSellingPrice}`
    }}
  </div>
</template>

<script>
// import {useStore} from 'vuex'

export default {
  setup() {
    // const store = useStore()
    const products = [];
    const totalSellingPrice = 0;
    const totalRrpPrice = 0;

    return {
      products,
      totalSellingPrice,
      totalRrpPrice,
    };
  },
};
</script>

<style>
</style>