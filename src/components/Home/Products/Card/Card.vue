<template>
  <li>
    <Image :product="product" />
    <h4>
      {{ product.title }}
    </h4>
    <Price
      :discountPercentage="discountPercentage"
      :product="product"
      :price="price"
    />
    <Actions :product="product" />
  </li>
</template>

<script>
import { split3Digits, calculateDiscountPercentage } from "@/utils/helpers";
import Image from "@/components/Home/Products/Card/Image.vue";
import Price from "@/components/Home/Products/Card/Price.vue";
import Actions from "@/components/Home/Products/Card/Actions.vue";

export default {
  components: { Image, Price, Actions },
  props: ["product"],
  computed: {
    price() {
      return split3Digits(this.product.price.selling_price);
    },
    discountPercentage() {
      return calculateDiscountPercentage(
        this.product.price.selling_price,
        this.product.price.rrp_price
      );
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  flex: 1 1 400px;
  background-color: var(--white);
  border: 1px solid #eee;
  border-radius: 10px;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

li > h4 {
  direction: rtl;
  padding: 1rem;
  text-align: right;
}

li:hover img {
  transform: scale(1.1);
}
</style>