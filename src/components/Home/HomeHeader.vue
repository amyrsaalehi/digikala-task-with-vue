<template>
  <div class="home">
    <h1>به مینیکالا خوش آمدید</h1>
  </div>
</template>

<style scoped>
.home {
  box-sizing: border-box;
  min-height: 100vh;
  width: 100vw;
  background-size: cover;
  padding: 30vw 0 5vw;
  position: relative;
  transform-style: inherit;
}

.home h1 {
  color: #eee;
  text-shadow: #eee 1px 1px 30px;
  font-size: 4rem;
  text-align: center;
}

.home,
.home:before {
  background: 50% 50% / cover;
}

.home::before {
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: block;
  background-image: url("https://cdn.vuetifyjs.com/images/parallax/material.jpg");
  background-size: cover;
  transform-origin: center center 0;
  transform: translateZ(-1px) scale(2);
  z-index: -1;
  min-height: 100vh;
}
</style>