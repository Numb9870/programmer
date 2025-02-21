// 引入css渲染库
import { setup } from '@css-render/vue3-ssr';
// 引入vitepress
import type { Theme } from 'vitepress';
import { useRoute } from 'vitepress';
// 默认主题
import DefaultTheme from 'vitepress/theme';
// 自定义样式
import './custom.css';
// 引入naive ui
import { NConfigProvider } from 'naive-ui';
// 引入vue 的组件类型
import { defineComponent, h, inject } from 'vue';

// DefineComponent 定义组件类型
const { Layout } = DefaultTheme;

const CssRenderStyle = defineComponent({
  setup() {
    const collect = inject('css-render-collect');
    return {
      // @ts-ignore
      style: collect(),
    };
  },
  render() {
    return h('css-render-style', {
      innerHTML: this.style,
    });
  },
});

const VitepressPath = defineComponent({
  setup() {
    const route = useRoute();
    return () => {
      return h('vitepress-path', null, [route.path]);
    };
  },
});

const NaiveUIProvider = defineComponent({
  render() {
    return h(
      NConfigProvider,
      { abstract: true, inlineThemeDisabled: true },
      {
        // @ts-ignore
        default: () => [h(Layout, null, { default: this.$slots.default?.() }), import.meta.env.SSR ? [h(CssRenderStyle), h(VitepressPath)] : null],
      }
    );
  },
});

/* 注册全局组件 */
export default {
  extends: DefaultTheme,
  Layout: NaiveUIProvider,
  enhanceApp({ app }) {
    // @ts-ignore
    if (import.meta.env.SSR) {
      const { collect } = setup(app);
      app.provide('css-render-collect', collect);
    }
  },
} satisfies Theme;

/* satisfies 运算符用于验证表达式的类型是否匹配某种类型，而不改变该表达式的结果类型。这是它与 as 运算符最大的区别之一。*/
