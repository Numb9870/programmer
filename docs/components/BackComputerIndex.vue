<template>
  <div :class="$style.back_btn_container">
    <button :class="$style.button" @click="backComputerIndexEvent" style="text-align: right">🔙返回计算机模块</button>
    <button v-if="router.route.path.indexOf('hardware') == -1" :class="$style.button" @click="backHardwareIndexEvent" style="text-align: right">🔜前往硬件模块</button>
    <button v-if="router.route.path.indexOf('software') == -1" :class="$style.button" @click="backSoftwareIndexEvent" style="text-align: right">🔜前往软件模块</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vitepress';

// vitepress提供的路由
const router = useRouter();

// 返回计算机模块
const backComputerIndexEvent = () => {
  router.go('/computer/');
};

// 返回硬件模块
const backHardwareIndexEvent = () => {
  router.go('/computer/hardware/');
};

// 返回软件模块
const backSoftwareIndexEvent = () => {
  router.go('/computer/software/');
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
