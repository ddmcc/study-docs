(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{761:function(_,v,e){"use strict";e.r(v);var r=e(109),o=Object(r.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h2",{attrs:{id:"检测消息是否丢失"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检测消息是否丢失"}},[_._v("#")]),_._v(" 检测消息是否丢失")]),_._v(" "),e("h4",[_._v("分布式链路追踪")]),_._v(" "),e("p",[_._v("可以使用此类系统来追踪每一条消息")]),_._v(" "),e("h4",[_._v("利用消息队列的有序性来验证")]),_._v(" "),e("p",[_._v("在 "),e("code",[_._v("生产者")]),_._v(" 端给每个发出的消息加上一个连续递增的序号，在 "),e("code",[_._v("消费者")]),_._v(" 端来检查这个序号的连续性")]),_._v(" "),e("p",[_._v("大多数消息队列都支持 "),e("code",[_._v("拦截器机制")]),_._v("，可以 "),e("strong",[_._v("在生产者的拦截器中注入消息序号")]),_._v(" ， "),e("strong",[_._v("在消费者的拦截器中检测序号的连续性")]),_._v(" ，这样的好处是检测代码不会侵入到业务代码中，系统稳定后也方便关闭或删除")]),_._v(" "),e("h4",[_._v("分布式系统中需要注意的问题")]),_._v(" "),e("ul",[e("li",[_._v("像 "),e("code",[_._v("Kafka")]),_._v(" 和 "),e("code",[_._v("RocketMQ")]),_._v(" 这样的消息队列，它不能保证在 "),e("code",[_._v("Topic")]),_._v(" 上的严格顺序的，只能保证分区/队列上的消息是有序的，所以我们在发消息的时候必须要指定分区/队列，并且，在每个分区/队列单独检测消息序号的连续性")]),_._v(" "),e("li",[_._v("如果系统中生产者是多实例，由于并不好协调多个 "),e("code",[_._v("Producer")]),_._v(" 之间的发送顺序，所以需要每个 "),e("code",[_._v("Producer")]),_._v(" 分别生成各自的序号，在 "),e("code",[_._v("Consumer")]),_._v(" 端按照每个 "),e("code",[_._v("Producer")]),_._v(" 分别来检测序号的连续性")]),_._v(" "),e("li",[e("code",[_._v("Consumer")]),_._v(" 实例的数量最好和分区/队列数量一致，做到 "),e("code",[_._v("Consumer")]),_._v(" 和分区/队列一一对应，这样会比较方便地在 "),e("code",[_._v("Consumer")]),_._v(" 内检测消息序号的连续性")])]),_._v(" "),e("h2",{attrs:{id:"如何确保消息可靠传递"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何确保消息可靠传递"}},[_._v("#")]),_._v(" 如何确保消息可靠传递")]),_._v(" "),e("p",[_._v("消息传递主要分为三个阶段："),e("code",[_._v("生产阶段")]),_._v("，"),e("code",[_._v("存储阶段")]),_._v("，"),e("code",[_._v("消费阶段")])]),_._v(" "),e("p",[e("img",{attrs:{src:"https://ddmcc-1255635056.cos.ap-guangzhou.myqcloud.com/WeChata090d8759ea5ceae2e557ed55b98078a.png",alt:""}})]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("生产阶段：")]),_._v(" 消息从 "),e("code",[_._v("Producer")]),_._v(" 创建出来，经过网络传输到 "),e("code",[_._v("Broker")]),_._v(" 端")]),_._v(" "),e("li",[e("strong",[_._v("存储阶段：")]),_._v(" 消息在 "),e("code",[_._v("Broker")]),_._v(" 存储，如果是集群，消息会在这个阶段被复制到其他的副本上")]),_._v(" "),e("li",[e("strong",[_._v("消费阶段：")]),_._v(" 在这个阶段，"),e("strong",[e("code",[_._v("Consumer")]),_._v(" 从 "),e("code",[_._v("Broker")]),_._v(" 上拉取消息，经过网络传输到 "),e("code",[_._v("Consumer")]),_._v(" 上")])])]),_._v(" "),e("h3",{attrs:{id:"生产阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生产阶段"}},[_._v("#")]),_._v(" 生产阶段")]),_._v(" "),e("p",[_._v("在生产阶段，消息队列通过 "),e("strong",[_._v("请求确认机制")]),_._v(" ，来保证消息的可靠传递：当调用发消息方法时，消息队列客户端会将消息发送到 "),e("code",[_._v("Broker")]),_._v(" ，"),e("code",[_._v("Broker")]),_._v(" 收到消息后，会给客户端返回一个确认的响应，表明消息已经收到了。客户端收到响应后，完成一次正常的消息发送")]),_._v(" "),e("p",[_._v("只要 "),e("code",[_._v("Producer")]),_._v(" 收到了 "),e("code",[_._v("Broker")]),_._v(" 的确认响应，就可以保证消息在生产阶段不会丢失。有些消息队列在长时间没收到发送确认响应后，会自动重试，如果重试再失败，就会以返回值或者异常的方式告知用户")]),_._v(" "),e("p",[e("strong",[_._v("在编写发送消息代码时，正确处理返回值或者捕获异常，就可以保证这个阶段的消息不会丢失")])]),_._v(" "),e("h3",{attrs:{id:"存储阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储阶段"}},[_._v("#")]),_._v(" 存储阶段")]),_._v(" "),e("p",[_._v("在存储阶段正常情况下，只要 "),e("code",[_._v("Broker")]),_._v(" 在正常运行，就不会出现丢失消息的问题，但是如果 "),e("code",[_._v("Broker")]),_._v(" 出现了故障，比如进程死掉了或者服务器宕机了，还是可能会丢失消息的")]),_._v(" "),e("p",[e("strong",[_._v("如果对消息的可靠性要求非常高，一般可以通过配置 "),e("code",[_._v("Broker")]),_._v(" 参数来避免因为宕机丢消息")])]),_._v(" "),e("h4",[e("strong",[_._v("单个节点Broker")])]),_._v(" "),e("p",[_._v("对于单个节点的 "),e("code",[_._v("Broker")]),_._v(" ，需要配置刷盘策略，将消息写入磁盘后再给 "),e("code",[_._v("Producer")]),_._v(" 返回确认响应，这样即使宕机，由于消息已经写入磁盘，就不会丢失消息，恢复后还可以继续消费")]),_._v(" "),e("blockquote",[e("p",[_._v("在 "),e("code",[_._v("RocketMQ")]),_._v(" 中，将刷盘方式 flushDiskType 配置成 SYNC_FLUSH 同步刷盘")])]),_._v(" "),e("h4",[e("strong",[_._v("多节点集群Broker")])]),_._v(" "),e("p",[_._v("如果是由多个节点组成的集群，可以将 "),e("code",[_._v("Broker")]),_._v(" 集群配置成：至少将消息发送到2个以上的节点，再给客户端恢复确认响应。这样即使某个 "),e("code",[_._v("Broker")]),_._v(" 宕机时，其它的 "),e("code",[_._v("Broker")]),_._v(" 可以替代宕机的，也不会发生消息丢失")]),_._v(" "),e("h3",{attrs:{id:"消费阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#消费阶段"}},[_._v("#")]),_._v(" 消费阶段")]),_._v(" "),e("p",[_._v("消费阶段采用和生产阶段类似的确认机制来保证消息的可靠传递，"),e("strong",[_._v("客户端从 "),e("code",[_._v("Broker")]),_._v(" 拉取消息后，执行业务逻辑，成功后才给 "),e("code",[_._v("Broker")]),_._v(" 发送消费确认响应")]),_._v(" ，如果没有收到响应下次拉消息的时候还会返回同一条消息，确保消息不会在网络传输过程中丢失，也不会因为客户端在执行消费逻辑中出错导致丢失")]),_._v(" "),e("p",[e("strong",[_._v("在编写消费代码时，不要在收到消息后就立即发送消费确认，而是应该在执行完所有消费业务逻辑之后，再发送消费确认")])]),_._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),e("ul",[e("li",[_._v("在生产阶段，你需要捕获消息发送的错误，并重发消息")]),_._v(" "),e("li",[_._v("在存储阶段，你可以通过配置刷盘和复制相关的参数，让消息写入到多个副本的磁盘上，来确保消息不会因为某个 Broker 宕机或者磁盘损坏而丢失")]),_._v(" "),e("li",[_._v("在消费阶段，你需要在处理完全部消费业务逻辑之后，再发送消费确认")])])])}),[],!1,null,null,null);v.default=o.exports}}]);