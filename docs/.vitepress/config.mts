import { defineConfig } from 'vitepress';
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions: Parameters<typeof defineConfig>[0] = {
  /* 站点元数据 */
  // 站点的标题。使用默认主题时，这将显示在导航栏中。
  title: '程序员手册',
  // 站点的描述。这将呈现为页面 HTML 中的 <meta> 标签。
  description: '记录计算机笔记，学习计算机知识',
  // 在页面 HTML 的 <head> 标签中呈现的其他元素
  head: [
    // 添加一个 favicon
    ['link', { rel: 'icon', href: '/public/favicon.ico' }],
  ],
  // 站点的 lang 属性
  lang: 'zh-CN',
  /* 路由 */
  // 当设置为 true 时，VitePress 将从 URL 中删除 .html 后缀。
  cleanUrls: true,

  /* 默认主题配置 */
  themeConfig: {
    // 站点图标
    logo: '/public/logo.svg',
    // 站点标题
    siteTitle: '学习笔记',
    // 导航栏 https://vitejs.cn/vitepress/reference/default-theme-sidebar
    nav: [
      { text: '首页', link: '/' },
      { text: '计算机', link: '/1.计算机/' },
      { text: '前端', link: '/2.前端/' },
      { text: '后端', link: '/3.后端/' },
    ],
    // 社交链接
    socialLinks: [{ icon: 'github', link: 'https://github.com/Numb9870' }],
    // 渲染大纲容器
    outline: {
      // outline 中要显示的标题级别
      level: 'deep',
      // 显示在 outline 上的标题
      label: '文章大纲',
    },
    // 用于自定义深色模式开关标签，该标签仅在移动端视图中显示
    darkModeSwitchLabel: '外观',
    // 用于自定义悬停时显示的浅色模式开关标题
    lightModeSwitchTitle: '浅色模式',
    // 用于自定义悬停时显示的深色模式开关标题
    darkModeSwitchTitle: '深色模式',
    // 用于自定义侧边栏菜单标签，该标签仅在移动端视图中显示
    sidebarMenuLabel: '菜单',
    // 用于自定义返回顶部按钮的标签，该标签仅在移动端视图中显示
    returnToTopLabel: '返回顶部',
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: "Copyright © 2025-present <a href='https://www.npmjs.com/~numb9870' style='color:#baa' target='_blank'>Numb9870</a>",
    },
    // 可用于自定义出现在上一页和下一页链接上方的文本
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    // 本地搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除查询条件',
            noResultsText: '无法找到相关结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    // 允许自定义上次更新的文本和日期格式
    lastUpdated: {
      text: '最后更新于：',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
  },

  /* 主题 */
  // 是否使用 Git 获取每个页面的最后更新时间戳。时间戳将包含在每个页面的页面数据中，可通过 useData 访问。
  lastUpdated: true,

  /* 自定义 */
  // Markdown 配置
  markdown: {
    // 是否在代码块中显示行号
    lineNumbers: true,
    // Options for `markdown-it-container`
    container: {
      infoLabel: '提示',
      noteLabel: '注意',
      tipLabel: '小提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      detailsLabel: '详情',
      importantLabel: '重要',
      cautionLabel: '警示',
    },
  },
  // Vite 配置
  vite: {
    // 服务器设置
    server: {
      // 监听端口
      port: 5173,
    },
  },
};

const vitePressSidebarOptions = [
  {
    // 文档文件所在的顶级路径。默认值为 /。
    documentRootPath: '/docs',
    scanStartPath: '1.计算机',
    basePath: '/1.计算机/',
    resolvePath: '/1.计算机/',
    // 如果为false,则创建菜单时所有分组都处于展开状态。如果为true,则创建菜单时所有分组都处于折叠状态。
    collapsed: true,
    // 是否将标题的第一个单词大写。
    capitalizeFirst: true,
    // 如果该值为true,则如果菜单名称以数字开头,则按数字而不是名称排序
    sortMenusOrderNumericallyFromTitle: true,
    // 从所有操作完成后显示的菜单项的每个菜单标题中删除特定的前缀。
    removePrefixAfterOrdering: true,
    // 此选项只能与 removePrefixAfterOrdering 选项结合使用以删除前缀。从提取的菜单文本中删除指定数量字符（至少一个）的第一部分。
    prefixSeparator: '.',
  },
  {
    // 文档文件所在的顶级路径。默认值为 /。
    documentRootPath: '/docs',
    scanStartPath: '2.前端',
    basePath: '/2.前端/',
    resolvePath: '/2.前端/',
    // 如果为false,则创建菜单时所有分组都处于展开状态。如果为true,则创建菜单时所有分组都处于折叠状态。
    collapsed: true,
    // 是否将标题的第一个单词大写。
    capitalizeFirst: true,
    // 如果该值为true,则如果菜单名称以数字开头,则按数字而不是名称排序
    sortMenusOrderNumericallyFromTitle: true,
    // 从所有操作完成后显示的菜单项的每个菜单标题中删除特定的前缀。
    removePrefixAfterOrdering: true,
    // 此选项只能与 removePrefixAfterOrdering 选项结合使用以删除前缀。从提取的菜单文本中删除指定数量字符（至少一个）的第一部分。
    prefixSeparator: '.',
  },
  {
    // 文档文件所在的顶级路径。默认值为 /。
    documentRootPath: '/docs',
    scanStartPath: '3.后端',
    basePath: '/3.后端/',
    resolvePath: '/3.后端/',
    // 如果为false,则创建菜单时所有分组都处于展开状态。如果为true,则创建菜单时所有分组都处于折叠状态。
    collapsed: true,
    // 是否将标题的第一个单词大写。
    capitalizeFirst: true,
    // 如果该值为true,则如果菜单名称以数字开头,则按数字而不是名称排序
    sortMenusOrderNumericallyFromTitle: true,
    // 从所有操作完成后显示的菜单项的每个菜单标题中删除特定的前缀。
    removePrefixAfterOrdering: true,
    // 此选项只能与 removePrefixAfterOrdering 选项结合使用以删除前缀。从提取的菜单文本中删除指定数量字符（至少一个）的第一部分。
    prefixSeparator: '.',
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
