<template>
  <div class="wrapper">
    <!-- <div class="img-container">
      <img
        src="http://grootech.id/frontAsset/img/not-found.gif"
        alt="not-marketable"
      />
    </div> -->
    <Text3D text="404" />
    <p>
      Unfortunatly, This page is removed or doesn't exist. You can click this
      <router-link :to="{ name: 'PLP' }">Link</router-link> to go back Home
      page.
    </p>
  </div>
</template>

<script>
import Text3D from "@/components/shared/Text3D.vue";
export default {
  name: "NotFound",
  components: {
    Text3D,
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
}
.img-container {
  max-width: 700px;
  max-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1,
p {
  text-align: center;
}

a {
  transition: 200ms all ease-in-out;
  color: #666;
  font-weight: bolder;
}

a:hover {
  color: #000;
}
</style>