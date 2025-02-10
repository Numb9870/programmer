// 引入默认主题类型
import type { Theme } from 'vitepress';
// 默认主题
import DefaultTheme from 'vitepress/theme';
// 自定义样式
import './custom.css';

// 返回计算机首页
import BackComputerIndex from '../../components/BackComputerIndex.vue';
// 返回全段首页
import BackFrontIndex from '../../components/BackFrontIndex.vue';

/* 注册全局组件 */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component('BackComputerIndex', BackComputerIndex);
    app.component('BackFrontIndex', BackFrontIndex);
  },
} satisfies Theme;

/* satisfies 运算符用于验证表达式的类型是否匹配某种类型，而不改变该表达式的结果类型。这是它与 as 运算符最大的区别之一。*/
