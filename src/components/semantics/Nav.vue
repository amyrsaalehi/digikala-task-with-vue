<template>
  <nav>
    <router-link to="/">Home</router-link>
    <!-- This page is just for test -->
    <router-link to="/product-1">Detail</router-link>
    <!-- This page is just for test -->
    <router-link to="/not/found-page">Not Found</router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
nav {
  padding: 2rem;
  background-color: #eee;
  position: sticky;
  top: 0;
  width: 100%;
  box-shadow: 10px 0 30px #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0.25rem 1rem;
}

nav a:not(:last-child) {
  border-right: 1px solid #999;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>