<template>
  <div class="conatiner">
    <div class="content">
      <div class="inner">
        <div class="item">padding-top</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.conatiner {
  width: 100%;
  height: 700px;
  background-color: #333333;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  // 外包装
  .content {
    width: 100%;
    margin: 0 auto;
    // 设置content高度为宽度的75%
    .inner {
      width: 100%;
      // 元素顶部内边距区域的高度 - <percentage> 相对于包含块的行内尺寸（水平语言中的宽度，由 writing-mode 定义）的百分比。
      padding-top: 75%;
      position: relative;
      // 真正展示的内容
      .item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #5bceaa;
        font-size: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
