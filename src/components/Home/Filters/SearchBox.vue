<template>
  <li class="search-filter">
    <form @submit.prevent="search">
      <input
        required
        type="text"
        v-model="q"
        placeholder="نام کالا را تایپ کنید و کلید Enter را فشار دهید"
      />
    </form>
  </li>
</template>

<script>
export default {
  data() {
    return {
      q: this.$store.state.searchParams.q || this.$route.query.q || "",
    };
  },
  methods: {
    search() {
      let query = Object.assign({}, this.$route.query, {
        q: this.q !== "" ? this.q : undefined,
        page: 1,
      });
      this.$store.commit("searchParams/changeQuery", this.q);
      this.$router.replace({ query });
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  background-color: var(--white);
  justify-content: center;
  align-items: center;
}
form {
  width: 100%;
  height: 100%;
}
.search-filter {
  display: flex;
  flex-flow: row nowrap;
  flex: 1 0 100%;
}
.search-filter input {
  width: 100%;
  direction: rtl;
  background: #eee;
}
</style>