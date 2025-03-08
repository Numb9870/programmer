<template>
  <div style="display: flex; flex-wrap: wrap; justify-content: space-around">
    <!-- flex-wrap -->
    <n-dropdown trigger="hover" :options="flex_wrap_options" @select="handleFlexWrapChange">
      <n-button>flex-direction</n-button>
    </n-dropdown>

    <!-- flex-direction -->
    <n-dropdown trigger="hover" :options="flex_direction_options" @select="handleFlexDirectionChange">
      <n-button>flex-direction</n-button>
    </n-dropdown>

    <!-- justify-content -->
    <n-dropdown trigger="hover" :options="justify_content_options" @select="handleJustifyContentChange">
      <n-button>justify-content</n-button>
    </n-dropdown>

    <!-- align-items -->
    <n-dropdown trigger="hover" :options="align_items_options" @select="handleAlignItemsChange">
      <n-button>justify-content</n-button>
    </n-dropdown>
  </div>

  <!-- 展示容器 -->
  <div class="selected-flex-show">
    <code>flex-wrap：{{ selected_flex_wrap }}</code>
    <code>flex-direction：{{ selected_flex_direction }}</code>
    <code>justify-content：{{ selected_justify_content }}</code>
    <code>align-items：{{ selected_align_items }}</code>
  </div>
  <div class="flex-container">
    <div v-for="(item, index) in flex_item" :key="index" class="item">{{ item }}</div>
  </div>

  <!-- 容器修改按钮 -->
  <div class="flex-container-button">
    <NButton @click="flex_item.push(flex_item.length)">添加元素</NButton>
    <n-button @click="flex_item.pop()">删除元素</n-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NButton, NDropdown } from 'naive-ui';

/* *******************************************flex 属性勾选******************************************* */
// flex-wrap
const selected_flex_wrap = ref('wrap');
const flex_wrap_options = [
  {
    label: 'nowrap 🚀 flex 的元素被摆放到到一行，这可能导致 flex 容器溢出。cross-start 会根据 flex-direction 的值等价于 start 或 before。为该属性的默认值。',
    key: 'nowrap',
  },
  {
    label: 'wrap 🚀 flex 元素 被打断到多个行中。cross-start 会根据 flex-direction 的值等价于 start 或before。cross-end 为确定的 cross-start 的另一端。',
    key: 'wrap',
  },
  {
    label: 'wrap-reverse 🚀 和 wrap 的行为一样，但是 cross-start 和 cross-end 互换。',
    key: 'wrap-reverse',
  },
];
const handleFlexWrapChange = (key: string) => {
  selected_flex_wrap.value = key;
  (document.querySelector('.flex-container') as HTMLElement)!.style.flexWrap = key;
};

// flex-direction
const selected_flex_direction = ref('row');
const flex_direction_options = [
  {
    label: 'row 🚀 flex 容器的主轴被定义为与文本方向相同。主轴起点和主轴终点与内容方向相同。',
    key: 'row',
  },
  {
    label: 'row-reverse 🚀 表现和 row 相同，但是置换了主轴起点和主轴终点',
    key: 'row-reverse',
  },
  {
    label: 'column 🚀 flex 容器的主轴和块轴相同。主轴起点与主轴终点和书写模式的前后点相同',
    key: 'column',
  },
  {
    label: 'column-reverse 🚀 表现和column相同，但是置换了主轴起点和主轴终点',
    key: 'column-reverse',
  },
];
const handleFlexDirectionChange = (key: string) => {
  selected_flex_direction.value = key;
  (document.querySelector('.flex-container') as HTMLElement)!.style.flexDirection = key;
};

// justify-content
const selected_justify_content = ref('center');
const justify_content_options = [
  {
    label: 'center 🚀 伸缩元素向每行中点排列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同。',
    key: 'center',
  },
  {
    label: 'start 🚀 从行首开始排列。每行第一个元素与行首对齐，同时所有后续的元素与前一个对齐。',
    key: 'start',
  },
  {
    label: 'end 🚀 从行尾开始排列。每行最后一个元素与行尾对齐，同时所有前面的元素与后一个对齐。',
    key: 'end',
  },
  {
    label: 'flex-start 🚀 元素紧密地排列在弹性容器的主轴起始侧。仅应用于弹性布局的项目。对于不是弹性容器里的元素，此值将被视为 start。',
    key: 'flex-start',
  },
  {
    label: 'flex-end 🚀 元素紧密地排列在弹性容器的主轴结束侧。仅应用于弹性布局的元素。对于不是弹性容器里的元素，此值将被视为 end。',
    key: 'flex-end',
  },
  {
    label: 'left 🚀 伸缩元素一个挨一个在对齐容器得左边缘，如果属性的轴与内联轴不平行，则 left 的行为类似于 start。',
    key: 'left',
  },
  {
    label: 'right 🚀 元素以容器右边缘为基准，一个挨着一个对齐，如果属性轴与内联轴不平行，则 right 的行为类似于 end。',
    key: 'right',
  },
  {
    label: 'space-between 🚀 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐。',
    key: 'space-between',
  },
  {
    label: 'space-around 🚀 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。',
    key: 'space-around',
  },
  {
    label: 'space-evenly 🚀 flex 项都沿着主轴均匀分布在指定的对齐容器中。相邻 flex 项之间、主轴起始位置到第一个 flex 项、主轴结束位置到最后一个 flex 项的间距，都完全一样。',
    key: 'space-evenly',
  },
  {
    label: 'stretch 🚀 如果元素沿主轴的组合尺寸小于对齐容器的尺寸，任何尺寸设置为 auto 的元素都会等比例地增加其尺寸（而不是按比例增加）。',
    key: 'stretch',
  },
  {
    label: 'safe 🚀 如果元素溢出对齐容器，则元素将按照对齐模式为 start 进行对齐。所期望的对齐将不会被实现。',
    key: 'safe',
  },
  {
    label: 'unsafe 🚀 即使元素溢出对齐容器，也会实现所需的对齐方式。与 safe 不同，safe 会忽略所要求的对齐方式以防止溢出。',
    key: 'unsafe',
  },
];
const handleJustifyContentChange = (key: string) => {
  selected_justify_content.value = key;
  (document.querySelector('.flex-container') as HTMLElement)!.style.justifyContent = key;
};

// align-items
const selected_align_items = ref('center');
const align_items_options = [
  {
    label: 'center 🚀 所有行朝向容器的中心填充。容器的垂直轴起点边和第一行的距离相等于容器的垂直轴终点边和最后一行的距离。',
    key: 'center',
  },
  {
    label: 'start 🚀 所有行从容器的起始边缘开始填充。',
    key: 'start',
  },
  {
    label: 'end 🚀 所有行从容器的结束边缘开始填充。',
    key: 'end',
  },
  {
    label: 'flex-start 🚀 所有行从垂直轴起点开始填充。第一行的垂直轴起点边和容器的垂直轴起点边对齐。接下来的每一行紧跟前一行。',
    key: 'flex-start',
  },
  {
    label: 'flex-end 🚀 所有行从垂直轴末尾开始填充。最后一行的垂直轴终点和容器的垂直轴终点对齐。同时所有后续行与前一个对齐。',
    key: 'flex-end',
  },
  {
    label: 'normal 🚀 这些项按默认位置填充，就像没有设置对齐内容值一样。',
    key: 'normal',
  },
  {
    label: 'space-between 🚀 所有行在容器中平均分布。相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的边对齐。',
    key: 'space-between',
  },
  {
    label: 'space-around 🚀 所有行在容器中平均分布，相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的距离是相邻两行间距的一半。',
    key: 'space-around',
  },
  {
    label: 'space-evenly 🚀 所有行沿垂直轴均匀分布在对齐容器内。每对相邻的项之间的间距，主开始边和第一项，以及主结束边和最后一项，都是完全相同的。',
    key: 'space-evenly',
  },
  {
    label: 'stretch 🚀 拉伸所有行来填满剩余空间。剩余空间平均地分配给每一行。',
    key: 'stretch',
  },
  {
    label: 'safe 🚀 与对齐关键字一起使用。如果所选的关键字意味着项溢出对齐容器（data loss），则将采用备用策略对项进行对齐，就像启动了 start 对齐模式一样。',
    key: 'safe',
  },
  {
    label: 'unsafe 🚀 与对齐关键字一起使用。无论元素和对齐容器的相对大小如何、是否会导致一些元素溢出可见范围（data loss），都使用给定的对齐值。',
    key: 'unsafe',
  },
];
const handleAlignItemsChange = (key: string) => {
  selected_align_items.value = key;
  (document.querySelector('.flex-container') as HTMLElement)!.style.alignItems = key;
};

/* *******************************************flex item******************************************* */
const flex_item = ref(Array.from({ length: 10 }, (e, i) => i));
</script>

<style lang="scss" scoped>
.selected-flex-show {
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
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
