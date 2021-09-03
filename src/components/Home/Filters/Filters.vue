<template>
  <ul class="filter-container">
    <li class="search-filter">
      <input
        required
        type="text"
        v-model="q"
        placeholder="جستجو در دیجیکالا..."
      />
    </li>
    <li class="sort-filter">
      <div class="sort-btn">
        <p>مرتب سازی</p>
        <button @click="sort = 22" :class="{ 'sort-btn-active': sort == 22 }">
          مرتبط ترین
        </button>
        <button @click="sort = 4" :class="{ 'sort-btn-active': sort == 4 }">
          بیشترین بازدید
        </button>
        <button @click="sort = 27" :class="{ 'sort-btn-active': sort == 27 }">
          پیشنهاد کاربران
        </button>
      </div>

      <div class="price-range-filter">
        <input type="number" v-model="minPrice" placeholder="قیمت از" />
        <input type="number" v-model="maxPrice" placeholder="قیمت تا" />
      </div>
    </li>
    <li class="actions">
      <!-- <button class="clear" @click="clear">clear</button> -->
      <button class="search" @click="search">جستجو</button>
      <div class="has-selling-stock-filter">
        <Switch />
        <p>کالا های موجود</p>
      </div>
    </li>
  </ul>
</template>

<script>
import { computed, onBeforeUnmount, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import Switch from "../../shared/Switch.vue";

export default {
  name: "Filters",
  components: { Switch },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const searchParams = computed(
      () => store.getters["searchParams/getSearchParams"]
    );

    const has_selling_stock = computed(
      () => searchParams.value.has_selling_stock
    );
    const current_page = ref(searchParams.value.current_page);
    const sort = ref(searchParams.value.sort);
    const minPrice = ref(searchParams.value.minPrice);
    const maxPrice = ref(searchParams.value.maxPrice);
    const rows = ref(searchParams.value.rows);
    const q = ref(searchParams.value.q);

    onBeforeUnmount(() => {
      store.commit("searchParams/changeSearchParams", {
        has_selling_stock: 0,
        minPrice: "",
        maxPrice: "",
        sort: 22,
        current_page: 1,
        rows: 25,
        q: undefined,
      });
    });

    function search() {
      let query = Object.assign({}, route.query, {
        page: current_page.value,
        rows: rows.value,
        "price[min]": minPrice.value || 0,
        "price[max]": maxPrice.value || 0,
        has_selling_stock: has_selling_stock.value || undefined,
        sort: sort.value,
        q: q.value !== "" ? q.value : undefined,
      });
      store.commit("searchParams/changeSearchParams", {
        has_selling_stock: has_selling_stock.value,
        minPrice: minPrice.value,
        maxPrice: maxPrice.value,
        sort: sort.value,
        current_page: current_page.value,
        rows: rows.value,
        q: q.value,
      });
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
  gap: 5px;
}
li {
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
}

input {
  width: 100%;
  direction: rtl;
  border: 1px solid #eee;
}

.search-filter {
  display: flex;
  flex-flow: row nowrap;
  flex: 1 0 100%;
}
.search-filter > input {
  width: 100%;
  direction: rtl;
  border: 1px solid #eee;
}

.sort-filter {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  font-size: 1.2rem;
  margin-top: 1rem;
}

.sort-filter > p {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sort-btn {
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: center;
  gap: 20px;
}

.sort-btn > p {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.sort-btn > button {
  transition: 0.3 all ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 100px;
  background-color: #fff;
  color: #333;
  border: 1px solid #333;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.5rem 1rem;
}

button.sort-btn-active {
  background-color: #333;
  color: #fff;
  font-weight: bold;
}

.price-range-filter {
  flex: 1 1 auto;
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.price-range-filter > input {
  display: flex;
  flex: 1 1 30%;
}

.actions {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: transparent;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.has-selling-stock-filter {
  display: flex;
  flex-flow: row nowrap;
  flex: 0 1 200px;
  justify-content: center;
  align-items: center;
  gap: 5px;
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

@media screen and (max-width: 768px) {
  .actions {
    display: flex;
    flex-flow: column-reverse nowrap;
    justify-content: space-between;
    background-color: transparent;
    margin-top: 1rem;
    gap: 20px;
  }
  .has-selling-stock-filter {
    flex: 1 1 100%;
  }

  .search {
    width: 100%;
  }

  .price-range-filter {
    flex-flow: column wrap;
  }
}
</style>