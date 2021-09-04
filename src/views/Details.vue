<template>
  <Loader :condition="loading" />
  <div v-if="!loading">
    <div class="container" v-if="product.id && found">
      <Image :product="product" />
      <div class="wrapper">
        <h1>{{ product.title }}</h1>
        <Prices :product="product" />
        <Rates :product="product" />
        <Buttons :product="product" />
      </div>
    </div>
    <div v-else>
      <NotFound />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loader from "@/components/shared/Loader.vue";
import Image from "@/components/Details/Image.vue";
import Prices from "@/components/Details/Prices.vue";
import Rates from "@/components/Details/Rates.vue";
import Buttons from "@/components/Details/Buttons.vue";
import NotFound from "@/components/Details/NotFound.vue";

export default {
  name: "Details",
  components: { Loader, Image, Prices, Rates, Buttons, NotFound },
  created() {
    this.$store.dispatch(
      "currentProduct/getProductDetails",
      this.$route.params.id
    );
  },
  computed: {
    ...mapState("currentProduct", "found"),
    ...mapState("currentProduct", "product"),
    ...mapState("currentProduct", "loading"),
  },
};
</script>

<style scoped>
.wrapper > h1 {
  font-size: 2.5rem;
  text-align: center;
}
.container {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}

.wrapper {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  direction: rtl;
  flex: 1 1 50%;
  gap: 50px;
}

@media screen and (max-width: 768px) {
  .wrapper > h1 {
    font-size: 2rem;
    text-align: justify;
  }
}
</style>