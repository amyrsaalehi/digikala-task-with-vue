<template>
  <div class="total">
    <div class="first">
      <p class="rrp-price">قیمت اولیه : {{ totalRrpPrice + " " }}تومان</p>
      <p class="discount-price">تخفیف : {{ totalDiscountPrice + " " }}تومان</p>
    </div>
    <p class="selling-price">قیمت نهایی : {{ totalSellingPrice + " " }}تومان</p>
    <button @click="pay" class="pay">پرداخت</button>
  </div>
</template>

<script>
export default {
  props: ["totalRrpPrice", "totalDiscountPrice", "totalSellingPrice"],
  methods: {
    pay() {
      alert("برو با بزرگترت بیا مرسی اه :دی");
    },
  },
};
</script>

<style scoped>
.total {
  position: fixed;
  bottom: 0;
  left: 10%;
  right: 10%;
  display: flex;
  background-color: #333;
  direction: rtl;
  flex-flow: column nowrap;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.total > .first {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

p {
  font-size: 1.4rem;
  color: #fff;
  padding: 0.5rem 0;
}

.selling-price {
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.rrp-price,
.discount-price {
  font-size: 1.2rem;
}

.pay {
  background-color: teal;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 5px;
}

@media screen and (max-width: 768px) {
  p {
    font-size: 1rem;
    color: #fff;
    padding: 0.5rem 0;
  }
  .total {
    left: 0;
    right: 0;
  }
}
</style>