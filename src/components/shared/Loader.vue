<template>
  <div v-if="condition" class="loader">
    <img
      src="https://i.pinimg.com/originals/c1/bc/d8/c1bcd8a8c945b53da6b29f10a2a553c0.gif"
      alt="Loader"
    />
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: ["condition"],
};
</script>

<style scoped>
.loader {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader > img {
  max-width: 400px;
  max-height: 400px;
  object-fit: cover;
}
</style>