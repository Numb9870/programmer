<template>
  <div>
    <!-- flex-direction -->
    <code>flex-direction：</code>
    <n-radio-group v-model:value="selected_flex_direction" @change="handleFlexDirectionChange">
      <n-radio v-for="(item, index) in flex_direction" :key="index" :value="item" :label="item" />
    </n-radio-group>
    <n-divider />

    <!-- justify-content -->
    <code>justify-content：</code>
    <n-radio-group v-model:value="selected_justify_content" @change="handleJustifyContentChange">
      <n-radio v-for="(item, index) in justify_content" :key="index" :value="item" :label="item" />
    </n-radio-group>
    <n-divider />

    <!-- align-items -->
    <code>align-items：</code>
    <n-radio-group v-model:value="selected_align_items" @change="handleAlignItemsChange">
      <n-radio v-for="(item, index) in align_items" :key="index" :value="item" :label="item" />
    </n-radio-group>
    <n-divider />

    <!-- flex-wrap -->
    <code>flex-wrap：</code>
    <NRadioGroup v-model:value="selected_flex_wrap" @change="handleFlexWrapChange">
      <NRadio v-for="(item, index) in flex_wrap" :key="index" :value="item" :label="item" />
    </NRadioGroup>
    <NDivider />

    <!-- align-content -->
    <code>align-content：</code>
    <n-radio-group v-model:value="selected_align_content" @change="handleAlignContentChange">
      <n-radio v-for="(item, index) in align_content" :key="index" :value="item" :label="item" />
    </n-radio-group>
  </div>

  <!-- 展示容器 -->
  <div class="flex-container">
    <div v-for="(item, index) in flex_item" :key="index" class="item">{{ item }}</div>
  </div>

  <!-- 容器修改按钮 -->
  <div class="flex-container-button">
    <NButton @click="flex_item.push(flex_item.length)">添加</NButton>
    <n-button @click="flex_item.pop()">删除</n-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

/* *******************************************flex 属性勾选******************************************* */
// flex-direction
const selected_flex_direction = ref('row');
const flex_direction = ref(['row', 'row-reverse', 'column', 'column-reverse']);
const handleFlexDirectionChange = (e: Event) => {
  (document.querySelector('.flex-container') as HTMLElement)!.style.flexDirection = (e.target as HTMLInputElement).value;
};

// justify-content
const selected_justify_content = ref('center');
const justify_content = ref([
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'left',
  'right',
  'space-between',
  'space-around',
  'space-evenly',
  'stretch',
  'baseline',
  'first baseline',
  'last baseline',
  'safe center',
  'unsafe center',
]);
const handleJustifyContentChange = (e: Event) => {
  (document.querySelector('.flex-container') as HTMLElement)!.style.justifyContent = (e.target as HTMLInputElement).value;
};

// align-items
const selected_align_items = ref('center');
const align_items = ref([
  'normal',
  'stretch',
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'self-start',
  'self-end',
  'baseline',
  'first baseline',
  'last baseline',
  'safe center',
  'unsafe center',
]);
const handleAlignItemsChange = (e: Event) => {
  (document.querySelector('.flex-container') as HTMLElement)!.style.alignItems = (e.target as HTMLInputElement).value;
};

// flex-wrap
const selected_flex_wrap = ref('wrap');
const flex_wrap = ref(['nowrap', 'wrap', 'wrap-reverse']);
const handleFlexWrapChange = (e: Event) => {
  (document.querySelector('.flex-container') as HTMLElement)!.style.flexWrap = (e.target as HTMLInputElement).value;
};

// align-content
const selected_align_content = ref('normal');
const align_content = ref([
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'normal',
  'baseline',
  'first baseline',
  'last baseline',
  'space-between',
  'space-around',
  'space-evenly',
  'stretch',
  'safe center',
  'unsafe center',
]);
const handleAlignContentChange = (e: Event) => {
  (document.querySelector('.flex-container') as HTMLElement)!.style.alignContent = (e.target as HTMLInputElement).value;
};

// order

/* *******************************************flex item******************************************* */
const flex_item = ref(Array.from({ length: 10 }, (e, i) => i));
</script>

<style lang="scss" scoped>
.flex-container {
  width: 100%;
  height: 450px;
  padding: 4px;
  background-color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: normal;
  .item {
    width: 50px;
    height: 50px;
    background-color: #19a6a8;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.flex-container-button {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}
</style>
