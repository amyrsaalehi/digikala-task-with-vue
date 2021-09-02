<template>
  <li>
    <div class="img-container">
      <img :src="product.images.main" />
    </div>
    <p>
      {{ product.title }}
    </p>
    <div class="actions-container">
      <router-link :to="`/product/${product.id}`"> Read More </router-link>
      <button>Add to Cart</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
li {
  display: flex;
  flex: 1 1 300px;
  background-color: #fff;
  border: 1px solid #eee;
  padding: 1rem 2rem;
  border-radius: 10px;
  direction: rtl;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

li > .img-container {
  overflow: hidden;
}

li > p {
  font-size: 1.1rem;
  padding: 1rem 0;
}

li img {
  transition: 300ms all ease-out;
}

li:hover img {
  transform: scale(1.1);
}

.actions-container {
  /* background-color: #2c2c2c; */
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  flex-flow: row wrap;
}

.actions-container > a {
  display: block;
  color: #eee;
  background-color: #2c2c2c;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  font-size: 0.75rem;
  height: 40px;
  display: flex;
  align-items: center;
}

.actions-container > button {
  display: block;
  color: #eee;
  background-color: #2c2c2c;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.75rem;
  height: 40px;
}
</style>