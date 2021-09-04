<template>
  <li class="sort-filter">
    <p>مرتب سازی</p>
    <div class="sort-btn">
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
  </li>
</template>

<script>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const sort = ref(22);

    watch(sort, (val) => {
      let query = Object.assign({}, route.query, {
        sort: val,
      });
      store.commit("searchParams/changeSort", val);
      router.replace({ query });
    });

    return {
      sort,
    };
  },
};
</script>

<style scoped>
li {
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
}
.sort-filter {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  font-size: 1.2rem;
  margin-top: 1rem;
  direction: rtl;
}

.sort-filter > p {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sort-btn {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 20px;
}

.sort-filter p {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.sort-filter button {
  transition: 0.3 all ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
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
</style>