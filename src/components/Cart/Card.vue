<template>
  <li>
    <div class="count-actions">
      <button class="reduce-count" @click="reduceCount">-</button>
      <span class="count">
        {{ product.count }}
      </span>
      <button class="add-count" @click="addCount">+</button>
    </div>

    <div class="actions-container">
      <h4 class="title">
        {{ product.title }}
      </h4>
      <div class="main-actions">
        <router-link :to="`/product/${product.id}`"> بیشتر </router-link>
        <button class="remove-from-cart" @click="removeFromCart">حذف</button>
      </div>
    </div>

    <div class="img-container">
      <img :src="product.images.main" />
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
  height: 200px;
  display: flex;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  flex-flow: row nowrap;
  justify-content: space-between;
}

li > .img-container {
  height: 100%;
  overflow: hidden;
}

li > p {
  direction: rtl;
  font-size: 1.1rem;
  padding: 1rem;
  text-align: right;
}

li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  font-size: 1.5rem;
  text-align: right;
}

.actions-container {
  display: flex;
  flex: 9 1 100px;
  flex-flow: column nowrap;
  justify-content: space-evenly;
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

.main-actions > a,
.main-actions > button {
  font-size: 1.2rem;
}

.main-actions > a {
  justify-content: center;
  display: block;
  color: #eee;
  background-color: #2c2c2c;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.count-actions {
  display: flex;
  flex-flow: column-reverse nowrap;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  flex: 1 1 100px;
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

@media screen and (max-width: 768px) {
  li {
    height: auto;
    flex-flow: column-reverse wrap;
  }

  .title {
    font-size: 1.2rem;
    padding: 1rem 0;
    text-align: center;
  }

  .img-container {
    height: 300px;
  }

  .img-container > img {
    max-width: 100%;
  }

  .count-actions {
    flex-flow: row nowrap;
  }

  .main-actions > a,
  .main-actions > button {
    width: 100%;
    font-size: 1rem;
  }

  .count-actions {
    flex-flow: row-reverse nowrap;
  }
}
</style>