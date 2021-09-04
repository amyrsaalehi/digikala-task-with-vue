<template>
  <div class="price-container" v-if="product.status === 'marketable'">
    <p class="discount" v-if="discountPercentage !== 0">
      -{{ discountPercentage }}%
    </p>
    <p class="price">{{ price + " " }}تومان</p>
  </div>
</template>

<script>
export default {
  props: ["product", "discountPercentage", "price"],
};
</script>

<style scoped>
.price-container {
  display: flex;
  flex-flow: row nowrap;
  gap: 15px;
}

.discount {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  color: white;
  font-weight: 700;
  font-size: 0.75rem;
  border-radius: 5px;
  padding: 0.25rem 0.75rem;
}

.price {
  font-weight: bolder;
  font-size: 1.2rem;
  padding: 0.5rem 0.75rem;
  background-color: #efefef;
  border-radius: 5px;
}
</style>