<template>
  <!-- 容器 -->
  <div class="container">
    <!-- 蒙层 -->
    <div class="modal">
      <!-- 文字 -->
      <p>Astral</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 10px;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('/programmer/image/resource/astral.jpg') no-repeat center/100%;
}
.modal {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  // 撑满父元素
  p {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-size: 12vw;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    // 文字描边
    -webkit-text-stroke: 1px #fff;
    // 背景与父元素保持一致
    background: url('/programmer/image/resource/astral.jpg') no-repeat center/100%;
    // 将背景只显示到文本
    background-clip: text;
    // 去除文字颜色
    color: transparent;
  }
}
</style>
