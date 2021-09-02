<template>
  <ul class="container">
    <Card v-for="product in products" :key="product.id" :product="product" />
  </ul>
  <div class="total">
    <div class="first">
      <p class="rrp-price">قیمت اولیه : {{ totalRrpPrice + " " }}ریال</p>
      <p class="discount-price">تخفیف : {{ totalDiscountPrice + " " }}ریال</p>
    </div>
    <p class="selling-price">قیمت نهایی : {{ totalSellingPrice + " " }}ریال</p>
    <button @click="pay" class="pay">پرداخت</button>
  </div>
</template>

<script>
import { computed, reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import Card from "../components/Cart/Card.vue";

export default {
  components: { Card },
  setup() {
    const store = useStore();
    const products = reactive(store.getters["cart/getProducts"]);
    const totalSellingPrice = computed(
      () => store.getters["cart/getTotalSellingPriceSplitted"]
    );
    const totalRrpPrice = computed(
      () => store.getters["cart/getTotalRrpPriceSplitted"]
    );
    const totalDiscountPrice = computed(
      () => store.getters["cart/getTotalDiscountPriceSplitted"]
    );
    return {
      products,
      totalSellingPrice,
      totalDiscountPrice,
      totalRrpPrice,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: column wrap;
  gap: 30px;
  margin-bottom: 3rem;
  min-height: 100vh;
}

.total {
  position: sticky;
  bottom: 0;
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
}
</style>