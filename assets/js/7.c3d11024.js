(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{749:function(v,_,a){"use strict";a.r(_);var t=a(109),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h2",{attrs:{id:"常见消息队列与特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见消息队列与特点"}},[v._v("#")]),v._v(" 常见消息队列与特点")]),v._v(" "),a("h3",{attrs:{id:"rabbitmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq"}},[v._v("#")]),v._v(" RabbitMQ")]),v._v(" "),a("ul",[a("li",[a("p",[a("strong",[v._v("优点")])]),v._v(" "),a("ul",[a("li",[v._v("轻量级的消息队列，容易部署和使用")]),v._v(" "),a("li",[v._v("拥有灵活的路由配置，提供 "),a("code",[v._v("Exchange")]),v._v(" 模块，根据配置的路有规则将生产者消息分发到不同的队列中，支持自己实现路有规则，扩展容易")])])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("缺点")])]),v._v(" "),a("ul",[a("li",[v._v("对消息堆积支持不好，在它设计里面，消息队列是一个管道，"),a("u",[v._v("当大量消息积压的时候，会导致 "),a("code",[v._v("RabbitMQ")]),v._v(" 性能急剧下降")])]),v._v(" "),a("li",[a("strong",[v._v("性能相较于其它消息队列是最差的")]),v._v("，大概每秒可以处理几万到十几万消息，如果对性能要求非常高，那就不要选择 "),a("code",[v._v("RabbitMQ")])]),v._v(" "),a("li",[a("code",[v._v("RabbitMQ")]),v._v(" 使用 "),a("code",[v._v("Erlang")]),v._v(" 开发，如果你想基于它做一些扩展和二次开发什么的，建议慎重考虑")])])])]),v._v(" "),a("h3",{attrs:{id:"rocketmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq"}},[v._v("#")]),v._v(" RocketMQ")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("优点")]),v._v(" "),a("ul",[a("li",[a("code",[v._v("RocketMQ")]),v._v(" 中文社区活跃，大多数问题可以找到中文的答案。另外使用 "),a("code",[v._v("Java")]),v._v(" 语言开发，贡献者大多都是中文人，源码比较容易读懂，容易对其进行扩展或二次开发")]),v._v(" "),a("li",[a("u",[v._v("对响应做了很多优化")]),v._v("，大多数情况下可以做到毫秒级响应")]),v._v(" "),a("li",[v._v("性能要比 "),a("code",[v._v("RabbitMQ")]),v._v(" 高一个量级，每秒大概能处理几十万条消息")])])]),v._v(" "),a("li",[a("strong",[v._v("缺点")]),v._v(" "),a("ul",[a("li",[v._v("作为国产消息队列，在国际上还没那么流行，与周边生态系统集成和兼容程度要略逊一筹")])])])]),v._v(" "),a("h3",{attrs:{id:"kafka"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kafka"}},[v._v("#")]),v._v(" Kafka")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("优点")]),v._v(" "),a("ul",[a("li",[v._v("与周边生态系统的兼容性是做好的，尤其在大数据和流计算领域，几乎所有相关的开源系统都会优先支持 "),a("code",[v._v("Kafka")])]),v._v(" "),a("li",[v._v("设计上大量的使用了批量和异步的思想，使之有着超高的性能。但与 "),a("code",[v._v("RocketMQ")]),v._v(" 并没有量级上的差异，大约每秒可以处理几十万条消息")])])]),v._v(" "),a("li",[a("strong",[v._v("缺点")]),v._v(" "),a("ul",[a("li",[v._v("同步收发消息延迟比较高，因为收到一条消息时，"),a("code",[v._v("Kafka")]),v._v(" 并不会立即发出去，而是要攒一会，一批一起发送。如果每秒消息数量没那么多，延迟反而会比较高")])])])]),v._v(" "),a("h3",{attrs:{id:"pulsar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pulsar"}},[v._v("#")]),v._v(" Pulsar")]),v._v(" "),a("h2",{attrs:{id:"如何选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何选择"}},[v._v("#")]),v._v(" 如何选择？")]),v._v(" "),a("p",[v._v("选择中间件的考量维度："),a("code",[v._v("可靠性")]),v._v("，"),a("code",[v._v("性能")]),v._v("，"),a("code",[v._v("功能")]),v._v("，"),a("code",[v._v("可运维性")]),v._v("，"),a("code",[v._v("可拓展性")]),v._v("，"),a("code",[v._v("是否开源")]),v._v(" 及 "),a("code",[v._v("社区活跃度")])]),v._v(" "),a("ul",[a("li",[a("p",[v._v("如果说，消息队列并不是你将要构建系统的主角之一，你对消息队列功能和性能都没有很高的要求，只需要一个开箱即用易于维护的产品，建议你使用 "),a("code",[v._v("RabbitMQ")]),v._v("。")])]),v._v(" "),a("li",[a("p",[v._v("如果你的系统使用消息队列主要场景是处理在线业务，比如在交易系统中用消息队列传递订单，那 "),a("code",[v._v("RocketMQ")]),v._v(" 的低延迟和金融级的稳定性是你需要的。")])]),v._v(" "),a("li",[a("p",[v._v("如果你需要处理海量的消息，像收集日志、监控信息或是前端的埋点这类数据，或是你的应用场景大量使用了大数据、流计算相关的开源产品，那 Kafka 是最适合你的消息队列")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);