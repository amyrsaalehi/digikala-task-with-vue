<template>
  <header>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  overflow-x: hidden;
  perspective: 1px;
  transform-style: preserve-3d;
}
</style>