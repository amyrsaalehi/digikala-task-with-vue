<template>
  <footer>
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background-color: var(--light);
  padding: 1rem 2rem;
  text-align: center;
}
footer > p {
  color: var(--dark);
}
</style>