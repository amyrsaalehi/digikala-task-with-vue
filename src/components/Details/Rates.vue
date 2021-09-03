<template>
  <div class="rating">
    <p class="rate">
      <span>{{ `امتیاز ${product.rating.rate}` }}</span>
      <img
        src="https://cdn.iconscout.com/icon/free/png-512/star-bookmark-favorite-shape-rank-like-32386.png"
        width="25"
        height="25"
        alt="star"
      />
    </p>
    <p class="count">
      {{ `${product.rating.count} نفر به این محصول رای دادند` }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
.rating {
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
}

.rate {
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.rate > span {
  font-size: 1.5rem;
  font-weight: bold;
}

.rate > img {
  object-fit: cover;
  margin-top: -5px;
}

.count {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>