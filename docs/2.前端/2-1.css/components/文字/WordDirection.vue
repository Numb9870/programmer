<template>
  <div ref="container" class="container">
    <div class="title">雨霖铃·寒蝉凄切</div>
    <p class="author">
      <span> 宋·柳永 </span>
      <span class="year">987</span>
      <span class="year">~</span>
      <span class="year">1053</span>
    </p>
    <div>
      <p>寒蝉凄切，对长亭晚，骤雨初歇。</p>
      <p>都门帐饮无绪，留恋处，兰舟催发。</p>
      <p>执手相看泪眼，竟无语凝噎。</p>
      <p>念去去，千里烟波，暮霭沉沉楚天阔。</p>
      <p>多情自古伤离别，更那堪，冷落清秋节！</p>
      <p>今宵酒醒何处？杨柳岸，晓风残月。</p>
      <p>此去经年，应是良辰好景虚设。</p>
      <p>便纵有千种风情，更与何人说？</p>
    </div>
  </div>
  <div>
    <h3 style="margin-bottom: 20px">尝试一下：</h3>
    <div>
      <n-dropdown :options="writingMode" @select="handleWritingMode">
        <n-button>文字方向</n-button>
      </n-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { NDropdown, NButton } from 'naive-ui';

// 文章容器
const container = ref();
// 文字方向选项
const writingMode = reactive([
  {
    label: 'horizontal-tb',
    key: 'horizontal-tb',
  },
  {
    label: 'vertical-lr',
    key: 'vertical-lr',
  },
  {
    label: 'vertical-rl',
    key: 'vertical-rl',
  },
  {
    label: 'sideways-lr',
    key: 'sideways-lr',
  },
  {
    label: 'sideways-rl',
    key: 'sideways-rl',
  },
]);

// 文字方向选择处理
const handleWritingMode = (key: string | number) => {
  container.value.style.writingMode = key;
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: fit-content;
  background-color: #333;
  color: #fff;
  .title {
    font-size: 1.5rem;
    margin: 10px 0;
  }
  .author {
    font-size: 0.8rem;
    font-weight: 600;
    margin-block-start: 10px;
    margin-block-end: 10px;
    .year {
      text-combine-upright: all;
    }
  }
}
</style>
