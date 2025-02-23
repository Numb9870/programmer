<template>
  <div class="nav">
    <div>
      当前吸附类型：<code>{{ snapType }}</code>
    </div>
    <div>
      当前越过类型：<code>{{ snapStop }}</code>
    </div>
  </div>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
  </div>
  <div class="options">
    <n-dropdown trigger="hover" :options="scrollSnapType" size="large" @select="handleTypeSelect">
      <n-button style="margin-right: 20px">吸附类型</n-button>
    </n-dropdown>
    <n-dropdown trigger="hover" :options="scrollSnapStop" size="large" @select="handleStopSelect">
      <n-button>越过类型</n-button>
    </n-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { NDropdown, NButton } from 'naive-ui';

// 默认吸附类型
const snapType = ref('proximity');
// 默认越过类型
const snapStop = ref('always');

// 滚动吸附类型
const scrollSnapType = reactive([
  {
    label: '无吸附 none',
    key: 'none',
  },
  {
    label: '强吸附 mandatory',
    key: 'mandatory',
  },
  {
    label: '弱吸附 proximity',
    key: 'proximity',
  },
]);
// 滚动越过类型
const scrollSnapStop = reactive([
  {
    label: '不可越过 always',
    key: 'always',
  },
  {
    label: '连续滚动 normal',
    key: 'normal',
  },
]);

// 滚动吸附类型选择
const handleTypeSelect = (key: string) => {
  switch (key) {
    case 'none':
      snapType.value = key;
      document.querySelector('.container')!.setAttribute('style', 'scroll-snap-type: y none;');
      break;
    case 'mandatory':
      snapType.value = key;
      document.querySelector('.container')!.setAttribute('style', 'scroll-snap-type: y mandatory;');
      break;
    case 'proximity':
      snapType.value = key;
      document.querySelector('.container')!.setAttribute('style', 'scroll-snap-type: y proximity;');
      break;
  }
};
// 滚动越过类型选择
const handleStopSelect = (key: string) => {
  switch (key) {
    case 'always':
      snapStop.value = key;
      document.querySelector('.container')!.setAttribute('style', 'scroll-snap-stop: always;');
      break;
    case 'normal':
      snapStop.value = key;
      document.querySelector('.container')!.setAttribute('style', 'scroll-snap-stop: normal;');
  }
};
</script>

<style lang="scss" scoped>
.nav {
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
}
.container {
  width: 100%;
  height: 400px;
  overflow: scroll;
  // 设置了在有滚动容器的情形下吸附至吸附点的严格程度
  scroll-snap-type: y proximity;
  .item {
    width: 100%;
    height: 400px;
    font-size: 2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    // 滚动到该元素时，该元素居中
    scroll-snap-align: center;
    // 滚动到该元素时，该元素不会重复滚动
    scroll-snap-stop: always;
  }
  .item:nth-child(2n + 1) {
    background-color: aquamarine;
  }
  .item:nth-child(2n) {
    background-color: burlywood;
  }
}
.options {
  margin-top: 20px;
}
</style>
