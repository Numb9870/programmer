<template>
  <div class="container">
    <div class="nav">
      <h1>导航栏</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 400px;
  background-color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  .nav {
    width: 100%;
    height: 50px;
    background-color: rgba(175, 175, 175, 0.5);
    h1 {
      background-color: #37ad54;
      line-height: 50px;
      width: fit-content;
    }
  }
}
</style>
