---
title: ComponentScan
---



### 作用是什么

在 `Spring` 项目中，我们可以指定容器扫描的包，所有在指定的包或其子包下标注了 **@Repository** 、**@Service** 、**@Component** 、 **@Repository** 注解的类都会被注入到容器中

  `ComponentScan` 注解的作用就是用来定义要扫描的包（如果未定义特定的包，则会从声明此注解的类的包中进行扫描），该注解与 `Spring`  xml的 `<context:component-scan>` 元素的作用是一样的



### 使用 xml 方式定义扫描的包

在配置扫描元素 `<context:component-scan>` 节点之前，需要先加入 `context` 的命名空间 

```xml
xmlns:context="http://www.springframework.org/schema/context"
```

---

我们指定扫描 `com.ddmcc.scanpkg` 包下的组件，xml文件如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	   xmlns:context="http://www.springframework.org/schema/context"
	   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	   xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

	<context:component-scan base-package="com.ddmcc.scanpkg" />

</beans>
```

---

在 `com.ddmcc.scanpkg` 包下，分别定义 @Conteollrt、@Service、@Repository 注解修饰的类，结构如下：



![](https://ddmcc-1255635056.cos.ap-guangzhou.myqcloud.com/WeChatd0159bddb73367d72eb2f9d2e32e5d4a.png)



定义好后我们来编写代码，加载xml尝试输出 `Spring` 容器中的组件：

```java
public class ComponentScanXmlTest {

    public static void main(String[] args) {
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("beans.xml");

        String[] beanDefinitionNames = applicationContext.getBeanDefinitionNames();
        for (String definitionName : beanDefinitionNames) {
            System.out.println(definitionName);
        }
    }
}
```



---

运行后输出了被注解标注的类的组件：

![](https://ddmcc-1255635056.cos.ap-guangzhou.myqcloud.com/WeChate1562e875112927c13cb9104d98a91c5.png)



### 使用注解的方式定义扫描的包

以上面xml的例子，用 `@ComponentScan` 注解的方式来













