---
# 指定页面的布局(doc/home/page) https://vitepress.dev/reference/default-theme-home-page
layout: home

# 当 layout 设置为 home 时，定义主页 hero 部分的内容。 https://vitejs.cn/vitepress/reference/default-theme-home-page
hero:
  name: "程序员"
  text: "全栈的进阶之路"
  tagline: 天下事有难易乎？为之，则难者亦易矣；不为，则易者亦难矣   —— 劝学《荀子》。
  image: '/image/programmer.png'
  actions:
    - theme: brand
      text: 前端
      link: /2.前端/
    - theme: alt
      text: nodejs
      link: /3.nodejs/

features:
  - icon: 💻
    title: 计算机
    details: 计算机组成原理、嵌入式、操作系统等等。
  - icon: 🌐
    title: 前端
    details: 创建WEB页面或APP等前端界面呈现给用户，通过HTML，CSS及JavaScript以及衍生出来的各种技术、框架、解决方案。
  - icon: ⚙️
    title: nodejs
    details: nodejs是一个基于Chrome V8引擎的JavaScript运行环境，用于在服务器端运行JavaScript代码。
---
