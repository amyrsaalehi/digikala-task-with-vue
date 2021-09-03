<template>
  <vue3-progress />
  <Nav />
  <Main>
    <router-view />
  </Main>
</template>

<script>
import Nav from "./components/semantics/Nav.vue";
import Main from "./components/semantics/Main.vue";
import { restoreCartDatas } from "./utils/cart";

export default {
  name: "App",
  components: {
    Nav,
    Main,
  },
  created() {
    this.$progress.start();
    restoreCartDatas(this.$store, window.localStorage);
    this.$router.beforeEach(async (to, from, next) => {
      if (to.name === "PLP") {
        const query = to.query;

        (async () => {
          console.log("app squery", query);
          await this.$store.commit("main/clearInits");
          await this.$store.dispatch("main/getProducts", {
            page: query.page,
            rows: query.rows,
            "price[min]": query["price[min]"],
            "price[max]": query["price[max]"],
            hasSellingStock: query.has_selling_stock || undefined,
            sort: query.sort || 22,
            q: query.q || undefined,
          });
        })();

        this.$store.commit("searchParams/changeSearchParams", {
          has_selling_stock: query.has_selling_stock || 0,
          minPrice: query["price[min]"] || 0,
          maxPrice: query["price[max]"] || 0,
          sort: query.sort || 22,
          current_page: query.page || 1,
          rows: query.rows || 25,
          q: query.q || undefined,
        });
      }
      this.$progress.start();
      next();
    });

    this.$router.afterEach(() => {
      // window.scrollTo(0, 0);
      this.$progress.finish();
    });
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
  cursor: pointer;
}

button:disabled,
button[disabled] {
  color: #eee;
  background-color: #fff;
  cursor: initial;
}

input {
  border: none;
  background-color: #fff;
  color: #333;
  padding: 1rem 2rem;
  font-size: 1.3rem;
  border-radius: 10px;
}

/* App styles */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  scroll-behavior: smooth;
}
</style>
