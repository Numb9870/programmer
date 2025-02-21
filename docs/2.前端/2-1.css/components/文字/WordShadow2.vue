<template>
  <div class="container">
    <p class="word-shadow">Word Shadow</p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 200px;
  background: linear-gradient(to right, blue, pink);
  display: flex;
  justify-content: center;
  align-items: center;
  .word-shadow {
    font-size: 5rem;
    // 设置文字颜色为透明
    color: transparent;
    // 设置文字边框
    -webkit-text-stroke: 2px #fff;
    // 覆盖文字内容，防止文字变细
    &::after {
      content: attr(data-content);
      position: absolute;
      left: 0;
      top: 0;
      -webkit-text-stroke: 0;
    }
  }
}
</style>
