module.exports = {
  base: "/website/",
  title: "blog-demo",
  description: "Vuepress blog demo",
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: "https://github.com/xilongwang1/website",
    // 自定义仓库链接文字。
    repoLabel: "My GitHub",
    nav: [
      { text: "首页", link: "/" },
      { text: "博客", link: "/blog/01-vue.md" },
    ],
    sidebar: [
      ["/", "首页"],
      ["/blog/01-vue.md", "我的第一篇博客"],
    ],
  },
};
