<template>
  <li class="price-range-filter">
    <Accordion title="بازه قیمت">
      <form @submit.prevent="search">
        <input
          type="number"
          v-model="minPrice"
          :placeholder="minPricePlaceHolder"
        />
        <input
          type="number"
          v-model="maxPrice"
          :placeholder="maxPricePlaceHolder"
        />
        <input type="submit" value="اعمال" />
      </form>
    </Accordion>
  </li>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Accordion from "@/components/shared/Accordion.vue";

export default {
  components: { Accordion },
  data() {
    return {
      minPrice:
        parseInt(this.$route.query["price[min]"]) / 10 ||
        parseInt(this.price_range?.[0]) / 10 ||
        "",
      maxPrice:
        parseInt(this.$route.query["price[max]"]) / 10 ||
        parseInt(this.price_range?.[1]) / 10 ||
        "",
    };
  },
  computed: {
    ...mapState("searchParams", ["price_range"]),
    ...mapGetters({
      minPricePlaceHolder: "main/minPricePlaceHolder",
      maxPricePlaceHolder: "main/maxPricePlaceHolder",
    }),
  },
  watch: {
    minPrice(val) {
      if (val <= 0) {
        this.minPrice = "";
      }
      if (val >= this.$store.state.main.filters.price.max / 10) {
        this.minPrice = this.$store.state.main.filters.price.max / 10;
      }
      if (val >= this.maxPrice) {
        this.minPrice = this.maxPrice;
      }
    },
    maxPrice(val) {
      if (val <= 0) {
        this.maxPrice = "";
      }
      if (val >= this.$store.state.main.filters.price.max / 10) {
        this.maxPrice = this.$store.state.main.filters.price.max / 10;
      }
      if (val <= this.$store.state.main.filters.price.min / 10) {
        this.maxPrice = this.$store.state.main.filters.price.min / 10;
      }
      if (val <= this.minPrice) {
        this.maxPrice = this.minPrice;
      }
    },
  },
  methods: {
    search() {
      // TODO: *10
      if (this.minPrice === "") {
        this.minPrice = 0;
      }
      if (this.maxPrice === "") {
        this.maxPrice = 0;
      }
      const rialMaxPrice = this.maxPrice * 10;
      const rialMinPrice = this.minPrice * 10;

      let query = Object.assign({}, this.$route.query, {
        "price[min]": rialMinPrice,
        "price[max]": rialMaxPrice,
        page: 1,
      });
      this.$store.commit("searchParams/changePriceRange", {
        from: rialMinPrice,
        to: rialMaxPrice,
      });
      this.$router.replace({ query });
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  flex-flow: row-reverse wrap;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 20px;
}

form {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-flow: row-reverse wrap;
}
.price-range-filter input[type="number"] {
  display: flex;
  flex: 1 1 30%;
  width: 100%;
  direction: rtl;
  border: 1px solid #eee;
}

.price-range-filter input[type="submit"] {
  border: 1px solid #333;
  color: #333;
  cursor: pointer;
  transition: 0.2s all linear;
}
.price-range-filter input[type="submit"]:hover {
  background-color: #333;
  color: #eee;
}
@media screen and (max-width: 768px) {
  form {
    flex-flow: column wrap;
  }
}
</style>