<template>
  <div class="price-container" v-if="product.status === 'marketable'">
    <span class="selling"> {{ product.price.selling_price + " " }}ریال </span>
    <span
      v-if="product.price.selling_price !== product.price.rrp_price"
      class="rrp"
    >
      {{ product.price.rrp_price + " " }}ریال
    </span>
  </div>
</template>

<script>
export default {
  // TODO: make it 3digits
  props: ["product"],
};
</script>

<style scoped>
.price-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  gap: 15px;
}
.price-container > span {
  display: block;
}

.selling {
  font-size: 1.8rem;
  font-weight: bold;
}

.rrp {
  font-size: 1.3rem;
  text-decoration: 2px rgb(173, 55, 55) line-through;
}
</style>