<template>
  <li class="sort-filter">
    <Accordion title="مرتب سازی">
      <div class="sort-btn">
        <button
          @click="sort = 22"
          class="btn-outline"
          :class="{ 'sort-btn-active': sort == 22 }"
        >
          مرتبط ترین
        </button>
        <button
          @click="sort = 4"
          class="btn-outline"
          :class="{ 'sort-btn-active': sort == 4 }"
        >
          بیشترین بازدید
        </button>
        <button
          @click="sort = 27"
          class="btn-outline"
          :class="{ 'sort-btn-active': sort == 27 }"
        >
          پیشنهاد کاربران
        </button>
      </div>
    </Accordion>
  </li>
</template>

<script>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import Accordion from "@/components/shared/Accordion.vue";

export default {
  components: { Accordion },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const sort = ref(route.query.sort || store.state.searchParams.sort || 22);

    watch(sort, (val) => {
      let query = Object.assign({}, route.query, {
        sort: val,
        page: 1,
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
.sort-filter {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  background-color: var(--white);
  font-size: 1.2rem;
  margin-top: 1rem;
  direction: rtl;
  flex: 0 1 100%;
}

.sort-btn {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
}

.sort-filter p {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.sort-filter button {
  flex: 1 1 auto;
}

button.sort-btn-active {
  background-color: var(--dark);
  color: var(--white);
  font-weight: bold;
}
</style>