<template>
  <div class="container">
    <h3>滕王阁序</h3>
    <p>唐·王勃</p>
    <span>
      嗟乎！时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见机，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。
    </span>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
span {
  // 文字行距
  line-height: 2rem;
  // 文字大小
  font-size: 1.25rem;
  // 背景渐变 不重复 靠右 靠下
  background: linear-gradient(to right, #1f94cf, #d76ddf) no-repeat right bottom;
  // 背景大小 当为0的时候，不存在下划线，当为100%的时候，存在下划线
  background-size: 0 2px;
  // 设置过渡动画
  transition: background-size 1s;
  &:hover {
    // 背景大小 当为0的时候，不存在下划线，当为100%的时候，存在下划线
    background-size: 100% 2px;
    // 当鼠标移除时，反向回收下划线
    background-position: left bottom;
  }
}
</style>
