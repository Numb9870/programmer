<template>
  <div class="container">
    <div class="modal">Card</div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #f0f, #0ff);
  position: relative;
  &::before {
    content: '磨砂玻璃效果';
    font-size: 5rem;
    font-weight: 600;
    color: #ffffff;
  }

  .modal {
    position: absolute;
    width: 40%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    font-weight: 600;
    backdrop-filter: blur(3px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
}
</style>
