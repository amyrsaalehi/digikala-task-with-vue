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
      scrollTop: document.documentElement.scrollTop,
      scrollHeight: document.documentElement.scrollHeight,
      clientHeight: document.documentElement.clientHeight,
    };
  },
  computed: {
    ...mapState("main", ["allProducts"]),
    ...mapState("searchParams", ["current_page"]),
    shouldLoadMore() {
      return this.scrollTop + this.clientHeight >= this.scrollHeight - 10;
    },
  },
  watch: {
    page(val, oldVal) {
      val === oldVal + 1 && this.loadMorePosts();
    },
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
      this.scrollTop = document.documentElement.scrollTop;
      this.scrollHeight = document.documentElement.scrollHeight;
      this.clientHeight = document.documentElement.clientHeight;

      if (this.shouldLoadMore) {
        this.page += 1;
        console.error("add page");
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
