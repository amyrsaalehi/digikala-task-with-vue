<template>
  <div class="container" v-if="shouldShow">
    <button
      :disabled="currentPage >= maxPage"
      @click="currentPage++"
      class="next"
    >
      {{ nextText }}
    </button>
    {{ maxPage }} - {{ currentPage }}
    <button :disabled="currentPage <= 1" @click="currentPage--" class="prev">
      >>
    </button>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "Pagination",
  props: ["maxPage", "shouldShow"],
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const searchParams = computed(
      () => store.getters["searchParams/getSearchParams"]
    );
    console.log(searchParams.value.current_page);
    const currentPage = ref(searchParams.value.current_page || 1);

    watch(currentPage, (val) => {
      if (val <= 1) {
        currentPage.value = 1;
      }
      if (val >= props.maxPage) {
        currentPage.value = props.maxPage;
      }
      search();
    });

    function search() {
      let query = Object.assign({}, route.query, {
        page: currentPage.value,
      });
      store.commit("searchParams/changeSearchParams", {
        has_selling_stock: searchParams.value.has_selling_stock,
        minPrice: searchParams.value.minPrice,
        maxPrice: searchParams.value.maxPrice,
        sort: searchParams.value.sort,
        current_page: currentPage.value,
        rows: searchParams.value.rows,
        q: searchParams.value.q,
      });
      router.replace({ query });
    }
    return {
      currentPage,
      nextText: "<<",
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  gap: 20px;
  direction: rtl;
  width: 100%;
}
button {
  background-color: rgb(25, 85, 134);
  color: #fff;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 50%;
}

button:disabled,
button[disabled] {
  background-color: rgb(110, 110, 110);
  color: #fff;
  padding: 1rem;
  font-size: 1.2rem;
}
</style>