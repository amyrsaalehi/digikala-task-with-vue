<template>
  <nav>
    <div>
      <router-link :to="{ name: 'PLP' }">خانه</router-link>
      <router-link :to="{ name: 'Cart' }">سبد خرید</router-link>
    </div>
    <button @click="shouldShow = true" class="quick-cart">
      <img
        src="https://i.pinimg.com/originals/84/ef/44/84ef447b1462d8ed463d868d017ea365.gif"
      />
    </button>
    <Modal :shouldShow="shouldShow" @close="shouldShow = false" />
  </nav>
</template>

<script>
import Modal from "@/components/Cart/Modal.vue";
export default {
  components: { Modal },
  name: "Nav",
  data() {
    return {
      shouldShow: false,
    };
  },
};
</script>

<style scoped>
nav {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  padding: 2rem;
  background-color: #fff;
  width: 100%;
  max-height: 100px;
  box-shadow: 10px 0 30px #2c3e50;
  direction: rtl;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0.25rem 1rem;
  height: 100%;
  display: inline-block;
}

nav a:not(:last-child) {
  border-left: 1px solid #999;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.quick-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  padding: 1rem;
  background-color: transparent;
  color: #333;
  overflow: hidden;
}

.quick-cart > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(5);
  margin-top: -10px;
}
</style>