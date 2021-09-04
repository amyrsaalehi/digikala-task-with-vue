<template>
  <router-link :to="{ name: 'PDP', params: { id } }">
    {{ title }}
  </router-link>
</template>

<script>
export default {
  props: ["title", "id"],
};
</script>

<style scoped>
a {
  justify-content: center;
  display: block;
  color: #eee;
  background-color: #2c2c2c;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
</style>