<template>
  <main>
    <slot></slot>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  width: 100%;
  padding: 2rem 10rem 0;
  min-height: 100vh;
}

@media screen and (max-width: 1200px) {
  main {
    padding: 2rem 4rem 0;
  }
}

@media screen and (max-width: 900px) {
  main {
    padding: 2rem 2rem 0;
  }
}
</style>