<template>
  <div class="img-container">
    <img :src="product.images.main" :alt="product.title" />
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
.img-container {
  flex: 0 1 45%;
  position: relative;
  margin-bottom: 3rem;
}
.img-container > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media screen and (max-width: 768px) {
  .img-container {
    flex: 1 1 100%;
  }
}
</style>