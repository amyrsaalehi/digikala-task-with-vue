<template>
  <h2>Filters</h2>
  <ul class="filter-container">
    <li class="has-selling-stock-filter">
      سرچ
      <input required type="text" v-model="q" placeholder="search" />
    </li>
    <li class="has-selling-stock-filter">
      کالا های موجود
      <Switch />
    </li>
    <li class="has-selling-stock-filter">
      صفحه
      <input type="number" v-model="current_page" placeholder="current page" />
    </li>
    <li class="has-selling-stock-filter">
      مرتب
      <select v-model="sort">
        <option value="22">مرتبط ترین</option>
        <option value="4">بیشترین بازدید</option>
        <option value="27">پیشنهاد کاربران</option>
      </select>
    </li>
    <li class="has-selling-stock-filter">
      بازه قیمت
      <input type="number" v-model="maxPrice" placeholder="maxPrice" />
      <input type="number" v-model="minPrice" placeholder="minPrice" />
    </li>
    <li class="actions">
      <!-- <button class="clear" @click="clear">clear</button> -->
      <button class="search" @click="search">search</button>
    </li>
  </ul>
</template>

<script>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Switch from "../shared/Switch.vue";

export default {
  name: "Filters",
  components: { Switch },
  setup() {
    const store = useStore();
    const router = useRouter();

    const has_selling_stock = store.getters["searchParams/getHasSellingStock"];

    const current_page = ref(store.getters["main/pager"].current_page);

    const sort = ref(store.getters["searchParams/getSort"]);
    const minPrice = ref(store.getters["searchParams/getMinPrice"]);
    const maxPrice = ref(store.getters["searchParams/getMaxPrice"]);

    const rows = ref(store.getters["searchParams/getRows"]);
    const q = ref(store.getters["searchParams/getQuery"]);

    watch(current_page, (val) => {
      const maxPage = store.getters["main/pager"].total_pages;
      if (val < 1) {
        current_page.value = 1;
      }
      if (val > store.getters["main/pager"].total_pages) {
        current_page.value = maxPage;
      }
    });

    function search() {
      let query = Object.assign({}, router.query, {
        page: current_page.value,
        rows: rows.value,
        "price[min]": minPrice.value || 0,
        "price[max]": maxPrice.value || 0,
        has_selling_stock: has_selling_stock || undefined,
        sort: sort.value,
        q: q.value === "" ? undefined : q.value,
      });
      store.commit("searchParams/changeCurrentPage", current_page.value);
      store.commit("searchParams/changePriceRange", {
        from: minPrice.value,
        to: maxPrice.value,
      });
      store.commit("searchParams/changeSort", sort.value);
      store.commit("searchParams/changeQuery", q.value);
      router.replace({ query });
    }

    return {
      current_page,
      search,
      minPrice,
      maxPrice,
      q,
      rows,
      sort,
    };
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  gap: 15px;
  padding: 2rem 1rem;
}
li {
  display: flex;
  background-color: #eee;
  padding: 1rem 2rem;
  border-radius: 10px;
  direction: rtl;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.has-selling-stock-filter {
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.price-filter {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.actions {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  background-color: transparent;
}

.search {
  flex: 0 1 40%;
  padding: 1rem;
  font-size: 1.4rem;
  color: #eee;
  background-color: #333;
  border-radius: 5px;
}

.clear {
  flex: 0 1 40%;
  padding: 1rem;
  font-size: 1.4rem;
  color: rgb(177, 100, 100);
  border: 2px solid rgb(177, 100, 100);
  background-color: transparent;
  border-radius: 5px;
}
</style>