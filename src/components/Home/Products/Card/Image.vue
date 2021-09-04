<template>
  <div class="img-container">
    <img :src="product.images.main" />
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
.img-container {
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 300ms all ease-out;
}
</style>