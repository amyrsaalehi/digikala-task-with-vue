<template>
  <div>
    <div class="progress-container">
      <span>{{ minValue }}</span>
      <progress
        :value="value"
        :min="minValue"
        :max="maxValue"
        ref="progressRef"
      ></progress>
      <span>{{ maxValue }}</span>
    </div>
    <div class="action-container">
      <button @click="minus">-</button>
      <button @click="plus">+</button>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

export default {
  name: "Slider",
  setup() {
    const store = useStore();
    const value = ref(10000);

    const maxValue = computed(() => store.state.main.filters.price.max);
    const minValue = computed(() => store.state.main.filters.price.min);

    function minus() {
      value.value -= 1000000;
    }
    function plus() {
      value.value += 1000000;
    }

    watch(value, (val) => {
      store.commit("searchParams/changePriceRange", {
        from: 0,
        to: parseInt(val),
      });
    });

    return {
      value,
      minus,
      plus,
      maxValue,
      minValue,
    };
  },
};
</script>

<style scoped>
.action-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.progress-container {
  display: flex;
  flex-flow: row nowrap;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
}

.progress-container > span {
  display: inline-block;
  text-align: center;
}

progress {
  display: inline-block;
  height: 30px;
  color: #eee;
}

button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #333;
  color: #eee;
  margin-left: -5px;
}
</style>