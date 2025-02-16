<template>
  <div class="box">
    <div class="water2">
      <p>{{ range }}%</p>
      <div class="active" :style="`bottom:${range}%`"></div>
    </div>
    <input v-model="range" type="range" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const range = ref(10);
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 400px;
  background-color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .water2 {
    width: 200px;
    height: 200px;
    padding: 10px;
    background-color: #fff;
    border: 10px solid #fff;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    p {
      font-size: 1.2rem;
      font-weight: 600;
      z-index: 3;
    }

    .active {
      width: 170%;
      height: 170%;
      background-color: #1faad4;
      border-radius: 40%;
      position: absolute;
      bottom: 0%;
      animation: rotate 3s linear infinite;
    }

    @keyframes rotate {
      0% {
        transform: translateY(102%) rotate(0deg);
      }
      100% {
        transform: translateY(102%) rotate(360deg);
      }
    }
  }

  input {
    margin-top: 20px;
  }
}
</style>
