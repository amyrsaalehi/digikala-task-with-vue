<template>
  <vue3-progress />
  <Nav />
  <Header v-if="this.$route.name === 'PLP'">
    <HomeHeader />
  </Header>
  <Main>
    <router-view />
  </Main>
  <Footer>
    <p>All rights reserved 2021&copy;</p>
  </Footer>
</template>

<script>
import Nav from "@/components/semantics/Nav.vue";
import Main from "@/components/semantics/Main.vue";
import { restoreCartDatas } from "@/utils/cart";
import Header from "@/components/semantics/Header.vue";
import HomeHeader from "@/components/Home/HomeHeader.vue";
import Footer from "@/components/semantics/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Main,
    Header,
    HomeHeader,
    Footer,
  },
  methods: {
    updateSearchParams(query) {
      this.$store.commit("searchParams/changeSearchParams", {
        has_selling_stock: parseInt(query.has_selling_stock) || 0,
        minPrice: parseInt(query["price[min]"]) || 0,
        maxPrice: parseInt(query["price[max]"]) || 0,
        sort: parseInt(query.sort) || 22,
        current_page: parseInt(query.page) || 1,
        rows: parseInt(query.rows) || 25,
        q: query.q || undefined,
      });
    },
    updateInits(query) {
      this.$store.dispatch("main/updateInits", {
        page: query.page,
        rows: query.rows,
        "price[min]": query["price[min]"],
        "price[max]": query["price[max]"],
        has_selling_stock: query.has_selling_stock || undefined,
        sort: query.sort || 22,
        q: query.q || undefined,
      });
    },
  },
  created() {
    this.$progress.start();

    // Restore Cart Datas
    restoreCartDatas(this.$store, window.localStorage);

    // Router Befor
    this.$router.beforeEach(async (to, from, next) => {
      this.$progress.start();

      // Redirect from '/' to '/?query'
      if (to.fullPath === "/") {
        this.$router.push("/?page=1&rows=10&price[min]=0&price[max]=0&sort=22");
        next();
        return;
      }

      // When history pushed from a page to another remove all `Old Datas`
      if (from.name !== to.name) {
        this.$store.commit("main/clearInits");
      }

      // Change query params in `PLP` = Firstlyn Request to server for fresh datas, Lastly update the `URLSearchParams`
      if (to.name === "PLP") {
        const query = to.query;
        this.updateInits(query);
        this.updateSearchParams(query);
      }
      next();
    });

    // Router after
    this.$router.afterEach(() => {
      // window.scrollTo(0, 0);
      this.$progress.finish();
    });
  },
};
</script>

<style>
/* Variables */
:root {
  --btn-danger: #b94724;
  --dark: #333;
  --light: #eee;
  --white: #fff;
  --pay: teal;
  --nav: #2c3e50;
  --router-active: #42b983;
}

/* Vazir Fonts */
@font-face {
  font-family: Vazir;
  src: url("./assets/fonts/Vazir-Bold.eot");
  src: url("./assets/fonts/Vazir-Bold.woff") format("woff"),
    url("./assets/fonts/Vazir-Bold.ttf") format("truetype")
      url("./assets/fonts/Vazir-Bold.woff2") format("woff2");
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: Vazir;
  src: url("./assets/fonts/Vazir-Medium.eot");
  src: url("./assets/fonts/Vazir-Medium.woff") format("woff"),
    url("./assets/fonts/Vazir-Medium.ttf") format("truetype")
      url("./assets/fonts/Vazir-Medium.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: VazirDigits;
  src: url("./assets/fonts/Vazir-Bold-FD-WOL.eot");
  src: url("./assets/fonts/Vazir-Bold-FD-WOL.woff") format("woff"),
    url("./assets/fonts/Vazir-Bold-FD-WOL.ttf") format("truetype")
      url("./assets/fonts/Vazir-Bold-FD-WOL.woff2") format("woff2");
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: VazirDigits;
  src: url("./assets/fonts/Vazir-FD-WOL.eot");
  src: url("./assets/fonts/Vazir-FD-WOL.woff") format("woff"),
    url("./assets/fonts/Vazir-FD-WOL.ttf") format("truetype")
      url("./assets/fonts/Vazir-FD-WOL.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}
/* Reset Styles */
* {
  font-family: "Vazir", "VazirDigits", sans-serif;
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
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3 all ease-in-out;
  border-radius: 10px;
  padding: 0.5rem 1rem;
}

button.btn-outline {
  background-color: var(--white);
  color: var(--dark);
  border: 1px solid var(--dark);
  font-size: 1rem;
}

button.btn-danger {
  background-color: var(--white);
  border: 1px solid var(--btn-danger);
  color: var(--btn-danger);
  font-size: 0.75rem;
}

button.outline:hover {
  background-color: var(--dark);
  color: var(--white);
  border: 1px solid var(--dark);
}

button:disabled,
button[disabled] {
  color: var(--light);
  background-color: var(--white);
  cursor: initial;
}

input {
  border: none;
  background-color: var(--white);
  color: var(--dark);
  padding: 1rem 2rem;
  font-size: 1.3rem;
  border-radius: 10px;
}

/* App styles */

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
</style>
