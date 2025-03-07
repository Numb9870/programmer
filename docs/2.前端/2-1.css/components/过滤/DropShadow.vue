<template>
  <div class="container">
    <div class="left">
      <p>box-shadow</p>
      <img class="box-shadow-img" width="100%" src="https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg" alt="firefox" />
    </div>
    <div class="right">
      <p>filter:drop-shadow()</p>
      <img class="drop-shadow-img" width="100%" src="https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg" alt="firefox" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 400px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  .left {
    text-align: center;
    width: 40%;
    .box-shadow-img {
      box-shadow: 0 0 5px #bfc;
    }
  }
  .right {
    text-align: center;
    width: 40%;
    .drop-shadow-img {
      filter: drop-shadow(0 0 5px #bfc);
    }
  }
}
</style>
