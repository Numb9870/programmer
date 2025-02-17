<template>
  <!-- 测试requestAnimationFrame -->
  <div class="container">
    <div ref="box" class="box"></div>
    <button class="btn" @click="resetMove">✍️再次执行</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const box = ref<HTMLDivElement | null>();

onMounted(() => {
  // 启动动画
  move();
});

const move = () => {
  // 到达界面停止
  if (box.value!.offsetLeft >= 200) return;
  // 移动
  box.value!.style.left = box.value!.offsetLeft + 1 + 'px';
  // requestAnimationFrame()是一次性的,必须重新调用,否则动画不会继续
  requestAnimationFrame(move);
};

const resetMove = () => {
  box.value!.style.left = '0px';
  move();
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 300px;
  position: relative;
  background-color: #333333;
  .box {
    height: 50px;
    width: 50px;
    position: absolute;
    background-color: #22b3b1;
    margin: 10px;
  }
  .btn {
    margin: 10px;
    border-radius: 10%;
    background-color: #0f75ce;
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
