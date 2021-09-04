<template>
  <li class="price-range-filter">
    <input type="number" v-model="minPrice" placeholder="قیمت از" />
    <input type="number" v-model="maxPrice" placeholder="قیمت تا0" />
  </li>
</template>

<script>
export default {
  //TODO: add placeholder
};
</script>

<style scoped>
li {
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
}
.price-range-filter {
  flex: 1 1 auto;
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.price-range-filter > input {
  display: flex;
  flex: 1 1 30%;
  width: 100%;
  direction: rtl;
  border: 1px solid #eee;
}
@media screen and (max-width: 768px) {
  .price-range-filter {
    flex-flow: column wrap;
  }
}
</style>