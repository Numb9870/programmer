<template>
  <div :class="$style.back_btn_container">
    <button :class="$style.button" @click="BackFrontIndexEvent" style="text-align: right">🔙返回前端模块</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vitepress';

// vitepress提供的路由
const router = useRouter();

// 返回前端模块
const BackFrontIndexEvent = () => {
  router.go('/front-end/');
};

</script>

<style module>
.back_btn_container {
  margin: 10px 0;
}

.button {
  margin-right: 10px;
}
</style>
