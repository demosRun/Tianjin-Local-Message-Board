module.exports = {
  // 项目根目录
  root: "/src",
  // 项目入口文件
  entry: "home",
  // 页面标题
  title: '{TAG_14226_TAG}',
  // 输出目录
  outFolder: "./dist",
  // 资源目录
  resourceFolder: "./src/resource",
  // head属性清单
  headList: [
    {
      'http-equiv': 'content-type',
      content: 'text/html; charset=UTF-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no',
    },
    {
      name: 'format-detection',
      content: 'telephone=no, email=no',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'white',
    },
    {
      name: 'renderer',
      content: 'webkit',
    },
    {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge,chrome=1',
    },
    {
      name: 'keywords',
      content: '{TAG_59446_TAG}',
    },
    {
      name: 'description',
      content: '{TAG_59447_TAG}',
    },
    {
      name: 'catalogs',
      content: '{TAG_83943_TAG}',
    },
    {
      name: 'filetype',
      content: '1',
    },
    {
      name: 'publishedtype',
      content: '1',
    },
    {
      name: 'pagetype',
      content: '2',
    },
    {
      name: 'screen-orientation',
      content: 'portrait',
    },
    {
      name: 'x5-orientation',
      content: 'portrait',
    },
    {
      name: 'full-screen',
      content: 'yes',
    },
    {
      name: 'x5-fullscreen',
      content: 'true',
    },
    {
      name: 'browsermode',
      content: 'application',
    },
    {
      name: 'x5-page-mode',
      content: 'app',
    },
  ],
  // 使用到的外部脚本清单
  scriptList: [
    {
      name: "jquery1.11.0",
      src: "http://tools.people.com.cn/libs/jquery/1.11.1/jquery-1.11.1.min.js"
    },
    {
      name: "idangerous.swiper.min",
      src: "http://tools.people.com.cn/libs/swiper/2.0/idangerous.swiper.min.js"
    },
    {
      name: "jquery.easing",
      src: "http://dangjian.people.com.cn/img/MAIN/2019/05/119287/js/jquery.easing.1.3.js"
    },
    {
      name: "roundabout",
      src: "http://dangjian.people.com.cn/img/MAIN/2019/05/119287/js/roundabout.js"
    },
    {
      name: "main",
      src: "./src/main.js"
    }
  ],
  // 使用到的样式列表
  styleList: [
    {
      name: "main",
      src: "./src/main.css",
      resource: true
    },
    {
      name: "idangerous.swiper",
      src: "http://tools.people.com.cn/libs/swiper/2.0/idangerous.swiper.css"
    },
  ],
  // 页面清单
  pageList: [
    {
      // 是否为页面主入口
      main: true,
      isPage: true,
      name: 'home',
      src: './src/page/home.page'
    }
  ],
  // 调试模式配置
  dev: {
    // 基础目录
    basePath: './',
    // 是否监测文件改动重新打包
    watcher: {
      // 是否启用
      enable: true,
      // 忽略监控的文件或文件夹，支持正则，默认为输出目录
      ignored: './dist/*',
      // 监测深度,默认99
      depth: 99
    },
    // 输出配置
    outPut: {
      // 是否压缩css
      minifyCss: false,
      // 是否压缩js
      minifyJs: false,
      // 输出文件自动追加版本号，可以用来消除缓存
      addVersion: false,
    },
    serverPort: 8000,
    // 静态文件服务
    server: true,
    // 自动重新加载
    autoReload: true,
    // 远程调试
    remoteDebug: false
  },
  // 编译模式配置
  build: {
    // 基础目录
    basePath: './',
    // 外链警告
    alertLink: true,
    // 输出配置
    outPut: {
      // 是否将主要css, js合并到html中
      merge: false,
      // 是否压缩css
      minifyCss: false,
      // 是否压缩js
      minifyJs: false,
      // 输出文件自动追加版本号，可以用来消除缓存
      addVersion: true,
      // 小于多大的资源会嵌入到代码中,单位kb,默认10,设置为0则不启用
      embedSize: 1,
      // 将重要样式和js合并到html中以优化页面打开速度
      merge: false
    }
  }
}