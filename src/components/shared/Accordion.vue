<template>
  <details>
    <summary>{{ title }}</summary>
    <slot></slot>
  </details>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
details {
  display: flex;
  width: 100%;
  flex-flow: row wrap;
}

summary {
  width: 100%;
  text-align: right;
  direction: rtl;
  padding: 1rem 1rem 1rem 0;
  font-size: 1.3rem;
  font-weight: 500;
  background-color: #eee;
  border-radius: 10px;
}
</style>