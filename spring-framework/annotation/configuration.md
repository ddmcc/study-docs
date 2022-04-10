---
title: Configuration
---



### 作用是什么

声明这是一个配置类，相当于以前的xml配置文件。被注解声明的类表示有一个或多个 `@Bean` 方法，这些方法可以被 `Spring` 容器处理以在运行时为这些 bean 生成 bean 定义和服务请求

被 `@Configuration` 声明的类使用 `AnnotationConfigApplicationContext` 或支持 Web 的变体`AnnotationConfigWebApplicationContext`进行引导初始化



### @Configuration 修饰类的约束

- 配置类必须作为类提供（即不是作为从工厂方法返回的实例），允许通过生成的子类进行运行时增强
- 配置类不能是 final 类（允许在运行时使用子类），除非 `proxyBeanMethods` 标志设置为false ，在这种情况下不需要运行时生成的子类
- 任何嵌套的配置类都必须声明为static



### @Configuration注解使用

被 `@Configuration`注解标注的类中，所有被 `@Bean` 注解修饰的方法返回的对象均会被注册到 **Spring** 容器中，使用举例如下

```java
// 告诉Spring这是一个配置类
@Configuration
public class ConfigurationTest {

    // 向容器注册bwan，类型为方法返回值类型，id默认是方法名，也可以指定为myBean
    @Bean("myBean")
    public User user() {
        return new User("大锤");
    }

    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(ConfigurationTest.class);
        User user = context.getBean(User.class);
        System.out.println(user);
    }
}

// 输出
> Task :springsource-test:ConfigurationTest.main()
User{name='大锤'}
```

如上所示，**`Spring` 会将方法返回`User`注册到 `Spring` 容器中，默认情况下 beanName = 方法名，如上面例子User对象 beanName 则为user，也可以在 @Bean 注解中设置名称**。配置类 **ConfigurationTest** 在 `Spring` 启动阶段会被先加载并解析为`ConfigurationClass`对象，然后会基于 `ConfigurationClass` 对象为容器注册 `BeanDefinition`，以及基于 **user()** 方法为容器注册`BeanDefinition`，后续 `Spring` 会基于这些 `BeanDefinition` 向容器注册bean



上面是基于 **Configuration** 注解用 `Java` 代码的方式来声明 `Spring` 容器中的bean，那么用  `xml` 来定义上面的例子就是：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	   xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

	<bean class="com.ddmcc.User" id="user">
		<constructor-arg name="name" value="李四" />
	</bean>
</beans>
```



`xml` 文件对应的引导类为 **ClassPathXmlApplicationContext** ：

```java
public class ConfigurationXmlTest {

    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
        User user = context.getBean(User.class);
        System.out.println(user);
    }
}

// 输出
> Task :springsource-test:ConfigurationXmlTest.main()
User{name='李四'}

```



// todo 约束测试