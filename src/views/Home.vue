<template>
  <Filters />
  <Products :products="allProducts" />
</template>

<script>
import { mapState } from "vuex";
import Filters from "@/components/Home/Filters/Filters.vue";
import Products from "@/components/Home/Products/Products.vue";

export default {
  name: "Home",
  components: { Filters, Products },
  data() {
    return {
      page: this.current_page || 1,
    };
  },
  computed: {
    ...mapState("main", ["allProducts"]),
    ...mapState("searchParams", ["current_page"]),
  },
  methods: {
    loadMorePosts() {
      let query = Object.assign({}, this.$route.query, {
        page: this.page,
      });
      this.$store.commit("searchParams/changeCurrentPage", this.page);
      this.$router.replace({ query });
    },
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 10) {
        if (this.allProducts.length === 0) {
          console.log("avaleshe baba");
          return;
        }
        this.page += 1;
        this.loadMorePosts();
        console.log("berim update baby");
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
</style>
