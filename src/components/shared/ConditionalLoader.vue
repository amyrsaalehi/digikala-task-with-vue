<template>
  <div v-if="condition">
    <slot></slot>
  </div>
  <div v-else class="loader">
    <img
      src="https://i.pinimg.com/originals/c1/bc/d8/c1bcd8a8c945b53da6b29f10a2a553c0.gif"
      alt="Loader"
    />
  </div>
</template>

<script>
export default {
  name: "ConditionalLoader",
  props: ["condition"],
};
</script>

<style scoped>
.loader {
  margin-top: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader > img {
  max-width: 80%;
  max-height: 80%;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  .loader > img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>