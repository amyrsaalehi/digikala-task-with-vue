<template>
  <div :style="cssVars" class="text-3d">{{ text }}</div>
</template>

<script>
export default {
  name: "Text3D",
  props: ["text"],
  computed: {
    cssVars() {
      return {
        "--content": `'${this.text}'`,
      };
    },
  },
};
</script>

<style scoped>
:root {
  --content: "";
}
.text-3d {
  text-align: center;
  margin: 200px 0 50px;
  font-size: 8rem;
  position: relative;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) skewY(-6deg); */
  transform: skewY(-6deg);
  transform-origin: bottom left;

  color: transparent;
  text-shadow:
     
     /* This set has more blur distance to create glowing effect */ 1px -1px
      10px rgba(255, 255, 255, 0.4),
    0px -1px 10px rgba(255, 255, 255, 0.4),
    -1px -1px 10px rgba(255, 255, 255, 0.4), 0px -2px 3px #eee,
    -1px -2px 3px #eee, -2px -2px 3px #eee,
    /* This set has darken color to create depth */ -1px -3px 2px #aaa,
    -2px -3px 2px #aaa, -3px -3px 2px #aaa, -2px -4px 2px #eee,
    -3px -4px 2px #eee, -4px -4px 2px #eee, -3px -5px 1px #eee,
    -4px -5px 1px #eee, -5px -5px 1px #eee;
}

.text-3d:before {
  content: var(--content);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  transform: skewX(30deg);
  transform-origin: bottom left;

  z-index: -1;
  color: transparent;
  text-shadow: 15px 0px 20px rgba(0, 0, 0, 0.25),
    15px 0px 25px rgba(0, 0, 0, 0.2), 15px 0px 35px rgba(0, 0, 0, 0.15),
    15px 0px 45px rgba(0, 0, 0, 0.1);
}
</style>