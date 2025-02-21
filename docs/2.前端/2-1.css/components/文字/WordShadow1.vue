<template>
  <div class="container">
    <p class="word-shadow">Word Shadow</p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 200px;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  .word-shadow {
    font-size: 5rem;
    color: #333;
    text-shadow: #fff 1px 0, #fff 1px 1px, #fff 0 1px, #fff -1px 1px, #fff -1px 0, #fff -1px -1px, #fff 0 -1px, #fff 1px -1px;
  }
}
</style>
