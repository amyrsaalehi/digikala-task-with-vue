<template>
  <Nav />
  <Main>
    <router-view />
  </Main>
</template>

<script>
import Nav from "./components/semantics/Nav.vue";
import Main from "./components/semantics/Main.vue";

export default {
  components: {
    Nav,
    Main,
  },
};
</script>

<style>
/* Reset Styles */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  border: none;
  outline: none;
}

input {
}

/* App styles */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
