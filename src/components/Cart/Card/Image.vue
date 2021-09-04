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
  height: 100%;
  overflow: hidden;
}

.img-container > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media screen and (max-width: 913px) {
  .img-container {
    height: 300px;
  }

  .img-container > img {
    max-width: 100%;
  }
}
</style>