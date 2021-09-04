<template>
  <div class="wrapper">
    <div class="img-container">
      <img
        src="https://icon-library.com/images/progress-icon-gif/progress-icon-gif-11.jpg"
        alt="not-marketable"
      />
    </div>
    <h1>هیچ محصولی انتخاب نشده</h1>
    <p>
      روی این <router-link :to="{ name: 'PLP' }">Link</router-link> کلیک کنید و
      محصولی را انتخاب کنید
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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

h1 {
  margin: 2rem 0;
}

h1,
p {
  text-align: center;
  direction: rtl;
}

a {
  transition: 200ms all ease-in-out;
  color: #666;
  font-weight: bolder;
}
</style>