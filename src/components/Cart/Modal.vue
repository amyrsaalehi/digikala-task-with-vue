<template>
  <div class="backdrop" v-if="shouldShow">
    <div class="container">
      <div class="close">
        <button class="close-btn" @click="close">X</button>
      </div>
      <ul class="content-container" v-if="$store.state.cart.products.length">
        <Card
          v-for="product in $store.state.cart.products"
          :key="product.id"
          :product="product"
        />
      </ul>
      <Total
        :totalRrpPrice="totalRrpPrice"
        :totalDiscountPrice="totalDiscountPrice"
        :totalSellingPrice="totalSellingPrice"
        v-if="$store.state.cart.products.length"
      />
      <NotFound v-else />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Cart/Card/Card.vue";
import { mapGetters } from "vuex";
import Total from "@/components/Cart/Total.vue";
import NotFound from "@/components/Cart/NotFound.vue";

export default {
  props: ["shouldShow"],
  emits: ["close"],
  components: {
    Card,
    Total,
    NotFound,
  },
  computed: {
    ...mapGetters({
      totalSellingPrice: "cart/getTotalSellingPriceSplitted",
      totalRrpPrice: "cart/getTotalRrpPriceSplitted",
      totalDiscountPrice: "cart/getTotalDiscountPriceSplitted",
    }),
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.container {
  display: flex;
  flex-flow: column nowrap;
  background-color: #fff;
  gap: 30px;
  padding-bottom: 10rem;
  width: 80%;
  height: 90%;
  z-index: 101;
}

.close {
  border-bottom: 1px solid #efefef;
}

.close-btn {
  padding: 1rem;
  font-size: 1.5rem;
  background-color: transparent;
  transition: 0.3s all linear;
  color: #aaa;
}

.close-btn:hover {
  color: #333;
}

.content-container {
  background-color: #fff;
  height: 100%;
  overflow-y: scroll;
  padding: 1rem 2rem;
}
.total {
  position: fixed;
  bottom: 0;
  left: 10%;
  right: 10%;
  display: flex;
  background-color: #333;
  direction: rtl;
  flex-flow: column nowrap;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.total > .first {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

p {
  font-size: 1.4rem;
  color: #fff;
  padding: 0.5rem 0;
}

.selling-price {
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.rrp-price,
.discount-price {
  font-size: 1.2rem;
}

.pay {
  background-color: teal;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 5px;
}

@media screen and (max-width: 768px) {
  p {
    font-size: 1rem;
    color: #fff;
    padding: 0.5rem 0;
  }
  .container {
    width: 100%;
    height: 100%;
  }
  .total {
    right: 0;
    left: 0;
  }
}
</style>