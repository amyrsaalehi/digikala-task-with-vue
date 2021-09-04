<template>
  <li>
    <Count :product="product" />
    <Actions :product="product" />
    <Image :product="product" />
  </li>
</template>

<script>
import Count from "@/components/Cart/Card/Count.vue";
import Image from "@/components/Cart/Card/Image.vue";
import Actions from "@/components/Cart/Card/Actions.vue";

export default {
  components: { Count, Image, Actions },
  props: ["product"],
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

@media screen and (max-width: 913px) {
  li {
    height: auto;
    flex-flow: column-reverse wrap;
  }
}
</style>