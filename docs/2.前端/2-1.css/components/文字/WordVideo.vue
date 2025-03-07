<template>
  <div class="container">
    <video class="word-video" src="/video/flame.mkv?url" autoplay muted loop preload></video>
    <div class="word-text">三国恋</div>
  </div>
  <div class="info">
    <n-dropdown trigger="hover" :options="mixBlendModeOptions" @select="handleSelect">
      <n-button style="margin-right: 50px">看看其他混合模式</n-button>
    </n-dropdown>
    当前模式：{{ currentMode }}
  </div>
</template>

<script setup lang="ts">
import { NDropdown, NButton } from 'naive-ui';
import { ref } from 'vue';

// 当前模式
const currentMode = ref('screen');
// 混合模式
const mixBlendModeOptions = [
  {
    label: 'normal',
    key: 'normal',
  },
  {
    label: 'multiply',
    key: 'multiply',
  },
  {
    label: 'screen',
    key: 'screen',
  },
  {
    label: 'overlay',
    key: 'overlay',
  },
  {
    label: 'darken',
    key: 'darken',
  },
  {
    label: 'lighten',
    key: 'lighten',
  },
  {
    label: 'color-dodge',
    key: 'color-dodge',
  },
  {
    label: 'color-burn',
    key: 'color-burn',
  },
  {
    label: 'hard-light',
    key: 'hard-light',
  },
  {
    label: 'soft-light',
    key: 'soft-light',
  },
  {
    label: 'difference',
    key: 'difference',
  },
  {
    label: 'exclusion',
    key: 'exclusion',
  },
  {
    label: 'hue',
    key: 'hue',
  },
  {
    label: 'saturation',
    key: 'saturation',
  },
  {
    label: 'color',
    key: 'color',
  },
  {
    label: 'luminosity',
    key: 'luminosity',
  },
  {
    label: 'plus-darker',
    key: 'plus-darker',
  },
  {
    label: 'plus-lighter',
    key: 'plus-lighter',
  },
];
// 切换混合模式
const handleSelect = (key: string) => {
  const text = document.querySelector('.word-text') as HTMLElement;
  currentMode.value = key;
  text.style.mixBlendMode = key;
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #333;
  position: relative;
  .word-video {
    width: 100%;
  }
  .word-text {
    font-size: 5rem;
    // 文字间距
    letter-spacing: 20px;
    color: #000000;
    font-weight: bold;
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    // 设置背景色
    background-color: rgba(255, 255, 255);
    // 混合
    mix-blend-mode: screen;
  }
}

.info {
  margin-top: 20px;
}
</style>
