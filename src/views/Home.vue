<template>
  <Filters />
  <Products :products="allProducts" :loading="loading" />
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
    ...mapState("main", ["products"]),
    ...mapState("searchParams", ["current_page"]),
    ...mapState("main", ["found"]),
    ...mapState("main", ["allFound"]),
    shouldLoadMore() {
      return this.scrollTop + this.clientHeight >= this.scrollHeight - 10;
    },
    loading() {
      return (
        this.allProducts.length === this.products.length ||
        !this.found ||
        !this.allFound ||
        this.allProducts.length === 0
      );
    },
    // canScroll() {
    //   return !this.loading && !this.shouldLoadMore;
    // },
  },
  watch: {
    // canScroll(val) {
    //   if (!val) {
    //     this.disableScrolling();
    //   } else {
    //     this.enableScrolling();
    //   }
    // },
    page(val, oldVal) {
      val === oldVal + 1 && this.loadMorePosts();
    },
    loading(val) {
      console.log(val);
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
    // disableScrolling() {
    //   document.documentElement.style.overflow = "hidden";
    // },
    // enableScrolling() {
    //   document.documentElement.style.overflow = "auto";
    // },
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
