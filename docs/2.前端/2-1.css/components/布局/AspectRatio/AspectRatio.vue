<template>
  <div>当前图片宽度：{{ imgSize.width }}，当前图片高度：{{ imgSize.height }}</div>

  <div class="container">
    <img id="aspect_ratio_img" src="/programmer/image/resource/astral.jpg" alt="astral" />
  </div>

  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <n-button>预设比例值</n-button>
  </n-dropdown>
</template>

<script setup lang="ts">
import { NDropdown, NButton } from 'naive-ui';
import { nextTick, onMounted, reactive } from 'vue';

// 加载完毕时计算一次图片宽高比
onMounted(async () => {
  const aspect_ratio_img = document.querySelector('#aspect_ratio_img') as HTMLElement;
  // 找不到元素
  if (!aspect_ratio_img) {
    imgSize.width = '0px';
    imgSize.height = '0px';
    throw new Error('aspect_ratio_img is not found');
  }
  // 设置16 / 9
  aspect_ratio_img.style.width = '600px';
  // 等待更新完毕
  await nextTick();
  // 拿到宽高比
  const rect = aspect_ratio_img.getBoundingClientRect();
  imgSize.width = rect.width + 'px';
  imgSize.height = rect.height + 'px';
});

// 图片宽高的像素
const imgSize = reactive({ width: '', height: '' });

// 预设比例值
const options = [
  {
    label: 'auto',
    key: 'auto',
  },
  {
    label: '1 / 1',
    key: '1 / 1',
  },
  {
    label: '16 / 9',
    key: '16 / 9',
  },
  {
    label: '0.5',
    key: '0.5',
  },
];

// 自定义比例值
const handleSelect = (key: string) => {
  const aspect_ratio_img = document.querySelector('#aspect_ratio_img') as HTMLElement;
  // 找不到元素
  if (!aspect_ratio_img) {
    throw new Error('aspect_ratio_img is not found');
  }
  aspect_ratio_img.style.aspectRatio = key;
  const rect = aspect_ratio_img.getBoundingClientRect();
  imgSize.width = rect.width + 'px';
  imgSize.height = rect.height + 'px';
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 400px;
  background-color: #333333;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 20px;
}
</style>
