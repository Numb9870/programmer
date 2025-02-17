<template>
  <div class="container">
    <div class="btns">
      <button class="btn" @click="show = 'center'">center</button>
      <button class="btn" @click="show = 'start'">start</button>
      <button class="btn" @click="show = 'end'">end</button>
      <button class="btn" @click="show = 'flex-start'">flex-start</button>
      <button class="btn" @click="show = 'flex-end'">flex-end</button>
      <button class="btn" @click="show = 'left'">left</button>
      <button class="btn" @click="show = 'right'">right</button>
    </div>
    <div v-show="show == 'center'" class="center-content">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
    <div v-show="show == 'start'" class="start-content">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
    <div v-show="show == 'end'" class="end-content">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
    <div v-show="show == 'flex-start'" class="flex-start-content">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref<'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right'>('center');
</script>

<style scoped lang="scss">
.container {
  display: flex;
  .btns {
    width: 200px;
    display: flex;
    flex-wrap: wrap;
    .btn {
      width: 100%;
      display: block;
      text-align: center;
      border: 1px solid #909090;
    }
  }
}
.center-content {
  width: 100%;
  height: 200px;
  background-color: #333333;
  display: flex;
  justify-content: center;
}
.item {
  width: 100px;
  height: 100px;
  background-color: #2aaccc;
  &:nth-child(even) {
    background-color: #2ace50;
  }
}
</style>
