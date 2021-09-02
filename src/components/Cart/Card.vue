<template>
  <li>
    <div class="img-container">
      <img :src="product.images.main" />
    </div>
    <p class="title">
      {{ product.title }}
    </p>
    <div class="actions-container">
      <div class="main-actions">
        <router-link :to="`/product/${product.id}`"> Read More </router-link>
        <button class="remove-from-cart" @click="removeFromCart">
          Remove from Cart
        </button>
      </div>
      <div class="count-actions">
        <button class="reduce-count" @click="reduceCount">-</button>
        <span class="count">
          {{ product.count }}
        </span>
        <button class="add-count" @click="addCount">+</button>
      </div>
    </div>
  </li>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { updateCart } from "../../utils/cart";

export default {
  props: ["product"],
  setup(props) {
    const store = useStore();
    const count = ref(props.product.count);

    function removeFromCart() {
      updateCart(
        store,
        "cart/remoteProduct",
        props.product.id,
        window.localStorage
      );
    }

    function reduceCount() {
      if (--count.value > 0) {
        updateCart(
          store,
          "cart/reduceCount",
          props.product.id,
          window.localStorage
        );
      } else {
        removeFromCart();
      }
    }

    function addCount() {
      updateCart(store, "cart/addCount", props.product.id, window.localStorage);
      count.value++;
    }

    return {
      removeFromCart,
      reduceCount,
      addCount,
    };
  },
};
</script>

<style scoped>
li {
  display: flex;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  direction: rtl;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

li > .img-container {
  overflow: hidden;
}

li > p {
  font-size: 1.1rem;
  padding: 1rem 0;
}

li img {
  transition: 300ms all ease-out;
}

li:hover img {
  transform: scale(1.1);
}

.title {
  width: 50%;
  text-align: justify;
}

.action-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.main-actions {
  /* background-color: #2c2c2c; */
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  flex-flow: row wrap;
}

.main-actions > a {
  display: block;
  color: #eee;
  background-color: #2c2c2c;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  font-size: 0.75rem;
  height: 40px;
  display: flex;
  align-items: center;
}

.count-actions {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 2rem 0;
}

.count {
  display: block;
}

.count-actions > button {
  width: 30px;
  height: 30px;
  color: #2c2c2c;
  border-radius: 50%;
  border: 1px solid #2c2c2c;
  background-color: transparent;
}

.reduce-count {
}

.add-count {
}

.remove-from-cart {
  display: block;
  color: #eee;
  background-color: #2c2c2c;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.75rem;
  height: 40px;
}
</style>