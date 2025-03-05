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
    color: aquamarine;
    font-size: 5rem;
    text-shadow: -1px 1px #bbb, -2px 2px #bbb, -3px 3px #bbb, -4px 4px #bbb, -12px 12px #0009;
  }
}
</style>
