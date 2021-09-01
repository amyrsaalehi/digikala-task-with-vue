<template>
  <h1>404 | Not Found</h1>
  <p>
    Unfortunatly, This page is removed or doesn't exist. You can click this
    <router-link to="/">Link</router-link> to go back Home page.
  </p>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
h1 {
  margin: 12rem 0 2rem;
}

h1,
p {
  text-align: center;
}

a {
  transition: 200ms all ease-in-out;
  color: #666;
  font-weight: bolder;
}

a:hover {
  color: #000;
}
</style>