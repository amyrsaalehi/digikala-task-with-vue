<template>
  <div class="actions-container">
    <h4 class="title">
      {{ product.title }}
    </h4>
    <div class="main-actions">
      <router-link :to="{ name: 'PDP', params: { id: product.id } }">
      </router-link>
      <Link title="بیشتر" :id="product.id" />
      <button class="remove-from-cart btn-danger" @click="removeFromCart">
        حذف
      </button>
    </div>
  </div>
</template>

<script>
import { updateCart } from "@/utils/cart";
import Link from "@/components/shared/Link.vue";
export default {
  components: { Link },
  props: ["product"],
  methods: {
    removeFromCart() {
      updateCart(
        this.$store,
        "cart/removeProduct",
        this.product.id,
        window.localStorage
      );
    },
  },
};
</script>

<style scoped>
.actions-container {
  display: flex;
  flex: 9 1 100px;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
}
.title {
  font-size: 1.5rem;
  text-align: right;
}

.main-actions {
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  flex-flow: row wrap;
}

.main-actions > a,
.main-actions > button {
  font-size: 1.2rem;
}

.remove-from-cart {
  display: block;
  height: 40px;
}
@media screen and (max-width: 913px) {
  .title {
    font-size: 1.2rem;
    padding: 1rem 0;
    text-align: center;
  }
  .main-actions > a,
  .main-actions > button {
    width: 100%;
    font-size: 1rem;
  }
}
</style>