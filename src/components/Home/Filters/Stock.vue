<template>
  <li class="has-selling-stock-container">
    <div class="has-selling-stock-filter">
      <Switch />
      <p>کالا های موجود</p>
    </div>
  </li>
</template>

<script>
import Switch from "@/components/Home/Filters/Switch.vue";
export default {
  components: { Switch },
};
</script>

<style scoped>
li {
  display: flex;
  background-color: var(--white);
  justify-content: center;
  align-items: center;
}

.has-selling-stock-container {
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: space-between;
  background-color: transparent;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.search {
  flex: 0 1 40%;
  padding: 1rem;
  font-size: 1.4rem;
  color: #eee;
  background-color: var(--dark);
  border-radius: 5px;
}

.has-selling-stock-filter {
  display: flex;
  flex-flow: row nowrap;
  flex: 0 1 200px;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

@media screen and (max-width: 768px) {
  .has-selling-stock-container {
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
}
</style>