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
export default {
  name: "Slider",
  data() {
    return {
      value: 10000,
    };
  },
  methods: {
    minus() {
      this.value -= 100000000;
      console.log(this.$refs.progressRef);
    },
    plus() {
      this.value += 100000000;
      console.log(this.$refs.progressRef);
      console.log(this.$store.state);
    },
  },
  computed: {
    maxValue() {
      return this.$store.state.inits.inits.filters.price.options.max;
    },
    minValue() {
      return this.$store.state.inits.inits.filters.price.options.min;
    },
  },
  watch: {
    value: function () {
      this.$store.commit("changePriceRange", {
        from: 0,
        to: parseInt(this.value),
      });
    },
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