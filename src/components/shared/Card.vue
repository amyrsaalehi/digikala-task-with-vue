<template>
  <li>
    <div class="img-container">
      <img :src="product.images.main" />
    </div>
    <p>
      {{ product.title }}
    </p>
    <div class="actions-container">
      <router-link :to="`/product/${product.id}`"> Read More </router-link>
      <button class="add-to-cart" @click="addToCart">Add to Cart</button>
    </div>
  </li>
</template>

<script>
import { useStore } from "vuex";
import { updateCart, isProductInCart } from "../../utils/cart";

export default {
  props: ["product"],
  setup(props) {
    const store = useStore();

    function addToCart() {
      if (!isProductInCart(store, props.product.id)) {
        updateCart(
          store,
          "cart/addProduct",
          {
            id: props.product.id,
            title: props.product.title,
            images: props.product.images,
            price: props.product.price,
            count: 1,
          },
          window.localStorage
        );
      } else {
        updateCart(
          store,
          "cart/addCount",
          props.product.id,
          window.localStorage
        );
      }
    }
    return {
      addToCart,
    };
  },
};
</script>

<style scoped>
li {
  display: flex;
  flex: 1 1 300px;
  background-color: #fff;
  border: 1px solid #eee;
  padding: 1rem 2rem;
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

.actions-container {
  /* background-color: #2c2c2c; */
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  flex-flow: row wrap;
}

.actions-container > a {
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

.add-to-cart {
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