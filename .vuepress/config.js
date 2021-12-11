const CompressionPlugin = require("compression-webpack-plugin");


module.exports = {
    title: "我的学习文档",
    //指定 vuepress build 的输出目录
    dest: "./dist",
    theme: 'antdocs',
    // 是否开启默认预加载js
    shouldPrefetch: (file, type) => false,
    configureWebpack: {
        //vuepress 编译压缩
        plugins: [new CompressionPlugin({
                                            filename: "[path].gz", //编译后的文件名
                                            algorithm: "gzip",
                                            test: /\.js$|\.css$|\.html$/,//需要编译的文件
                                            threshold: 10240,//需要编译的文件大小
                                            minRatio: 0.8,//压缩比
                                            deleteOriginalAssets: false,//编译时是否删除源文件
                                        })],
    },
    themeConfig: {
        hostname: "http://study.ddmcc.cn/",
        repo: "https://github.com/ddmcc/study-docs",
        editLinks: true,
        navbar: true,
        sidebarDepth: 0,
        sidebar: [
            {
                title: "消息队列",
                children: [
                    "/message-queue/消息队列的应用场景",
                    "/message-queue/如何选择消息队列",
                    "/message-queue/消息模型",
                    "/message-queue/事务消息"
                ],
            }
        ],
    },

    locales: {
        "/": {
            lang: "zh-CN"
        }
    },
    git: {
        timezone: "Asia/Shanghai",
    },
    search: true,
    searchMaxSuggestions: 10
}