// 引入默认主题类型
import type { Theme } from 'vitepress';
// 默认主题
import DefaultTheme from 'vitepress/theme';
// 自定义样式
import './custom.css';
// 引入naive ui
import { create, NButton, NRadioGroup, NRadio, NDivider } from 'naive-ui';

const naive = create({
  components: [NButton, NRadioGroup, NRadio, NDivider],
});

/* 注册全局组件 */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(naive);
  },
} satisfies Theme;

/* satisfies 运算符用于验证表达式的类型是否匹配某种类型，而不改变该表达式的结果类型。这是它与 as 运算符最大的区别之一。*/
