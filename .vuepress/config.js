const CompressionPlugin = require("compression-webpack-plugin");


module.exports = {
    title: "我的学习文档",
    //指定 vuepress build 的输出目录
    dest: "./dist",
    theme: 'antdocs',
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
        logo: '/logo.jpg',
        hostname: "https://study.ddmcc.cn/",
        repo: "https://github.com/ddmcc/study-docs",
        editLinks: true,
        editLinkText: '前往编辑',
        navbar: true,
        lastUpdated: "上次更新",
        sidebarDepth: 2,
        nav: [
            {
                text: "我的博客",
                icon: false,
                link: "https://ddmcc.cn"
            },
            {
                text: "面试宝典",
                link: "https://interview.ddmcc.cn"
            },
        ],
        sidebar: [
            {
                title: "消息队列",
                children: [
                    "/message-queue/1消息队列的应用场景",
                    "/message-queue/2如何选择消息队列",
                    "/message-queue/3消息模型",
                    "/message-queue/4事务消息",
                    "/message-queue/5如何确保消息不会丢失",
                    "/message-queue/6如何处理重复消息"
                ],
            },
            {
                title: "Spring框架",
                children: [
                    {
                        title: "核心注解",
                        path: "/spring-framework/基本注解",
                        children: [
                            "/spring-framework/annotation/configuration",
                            "/spring-framework/annotation/componentScan",
                            "/spring-framework/annotation/scope"
                        ]

                    }
                ],
            },
            {
                title: "spring-cloud-gateway",
                children: [
                    {
                        title: "名词解释",
                        path: "/spring-cloud-gateway/名词解释"
                    },
                    {
                        title: "工作原理",
                        path: "/spring-cloud-gateway/工作原理"
                    },
                    {
                        title: "网关整合服务注册中心nacos",
                        path: "/spring-cloud-gateway/网关整合服务注册中心nacos"
                    }
                ],
            },
            {
                title: "mybatis-3",
                children: [
                    {
                        title: "基础模块",
                        path: "/mybatis/基础模块"
                    }
                ],
            }
        ],
        smoothScroll: true,
        backToTop: true,
        ads:{
            style: 3,
            title: '赞助商',
            btnText: '成为赞助商',
            msgTitle: '成为赞助商',
            msgText: '如果您有品牌推广、活动推广、招聘推广、社区合作等需求，欢迎联系我们，成为赞助商。您的广告将出现在文档侧边栏等页面。',
            msgOkText: '确定',
        },
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
    searchMaxSuggestions: 10,
    markdown: {
        anchor: {
            level: [1, 2, 3]
        }
    }
}