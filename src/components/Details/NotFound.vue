<template>
  <div class="not-found">
    <h1>Product not found</h1>
    <p>
      Click this <router-link :to="{ name: 'PLP' }">Link</router-link> tot go
      back to Home page.
    </p>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 3rem;
}

.not-found > p {
  color: #777;
}

.not-found a {
  color: var(--dark);
}
</style>