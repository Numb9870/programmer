<template>
  <div class="container">
    <div class="btns">
      <button class="btn" @click="show = 'row'">➡️ row</button>
      <button class="btn" @click="show = 'row-reverse'">⬅️ row-reverse</button>
      <button class="btn" @click="show = 'column'">⬇️ column</button>
      <button class="btn" @click="show = 'column-reverse'">⬆️ column-reverse</button>
    </div>
    <div v-show="show == 'row'" class="row-content">
      <div class="row-item"></div>
      <div class="row-item"></div>
      <div class="row-item"></div>
      <div class="row-item"></div>
    </div>
    <div v-show="show == 'row-reverse'" class="row-reverse-content">
      <div class="row-item"></div>
      <div class="row-item"></div>
      <div class="row-item"></div>
      <div class="row-item"></div>
    </div>
    <div v-show="show == 'column'" class="column-content">
      <div class="column-item"></div>
      <div class="column-item"></div>
      <div class="column-item"></div>
      <div class="column-item"></div>
    </div>
    <div v-show="show == 'column-reverse'" class="column-reverse-content">
      <div class="column-item"></div>
      <div class="column-item"></div>
      <div class="column-item"></div>
      <div class="column-item"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref<'row' | 'row-reverse' | 'column' | 'column-reverse'>('row');
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

.row-content {
  width: 100%;
  height: 200px;
  background-color: #333333;
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.row-reverse-content {
  width: 100%;
  height: 200px;
  background-color: #333333;
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
}
.row-item {
  width: 100px;
  height: 100px;
  background-color: #2aaccc;
}

.column-content {
  width: 100%;
  height: 200px;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.column-reverse-content {
  width: 100%;
  height: 200px;
  background-color: #333333;
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
}
.column-item {
  width: 35px;
  height: 35px;
  background-color: #2aaccc;
}
</style>
