---
title: Scope
---



`Spring` 中的 bean 默认情况下是 **单例**，每次从容器获取/注入的都是同一个实例，可以通过 `@Scope` 注解来修改 bean 的作用域（生命周期）



### 作用域类型

#### 标准作用域

`Spring` 提供了开箱即用的作用域，定义在 `ConfigurableBeanFactory`接口中的 **SCOPE_SINGLETON**，**SCOPE_PROTOTYPE** 称为单例和原型

- SCOPE_SINGLETON：单实例的（默认），**ioc容器启动时** 会创建实例并放到容器中，以后每次获取都是直接从容器中拿

- SCOPE_PROTOTYPE：多实例的，容器启动时并不会创建对象放在容器中，**每次获取的时候才会创建**



#### web环境作用域

定义在 `WebApplicationContext` 接口中的 **SCOPE_REQUEST**、**SCOPE_SESSION** 和 **SCOPE_APPLICATION** 被称为 web 环境作用域

- SCOPE_REQUEST：一次请求创建一个实例
- SCOPE_SESSION：同一个session创建一个实例
- SCOPE_APPLICATION：应用里只会存在一个实例，通常情况下和 singleton 效果一样，但也有特殊情况：**singleton 是一个 `Spring` 容器中只有一个实例，当应用有多个容器时，还是会存在多个实例。而 application 作用域不管有几个容器，相同的 bean 实例只有一个



### @Scope 使用

#### 默认单例模式

```java
@Configuration
public class ScopeTest {
    
    @Bean
    public User user() {
        System.out.println("初始化。。。。");
        return new User("大锤");
    }

    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(ScopeTest.class);
        User user = context.getBean(User.class);
        User user1 = context.getBean(User.class);
        System.out.println(user == user1); // 默认单例模式，输出为：true
    }
}
```



添加 `@Scope` 注解，修改为原型模式：

```java
@Configuration
public class ScopeTest {

    @Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
    @Bean
    public User user() {
        // 每次获取都会调用创建方法
        System.out.println("初始化。。。。");
        return new User("大锤");
    }

    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(ScopeTest.class);
        User user = context.getBean(User.class);
        User user1 = context.getBean(User.class);
        System.out.println(user == user1); // 原型模式，输出为：false
    }
}
```



### 自定义作用域

自定义Scope主要分为两步：

- 实现 Scope 接口
- 将自定义 Scope 注册到容器中



#### 实现 Scope 接口

下面我们来实现一个线程作用域的 Scope，在同一线程中获取的是同一个实例，否则是不同的实例：

```java
static class ThreadScope implements Scope {

        private static final ThreadLocal<Map<String, Object>> BEANS = new NamedThreadLocal<>("ThreadScope") {
            @Override
            protected Map<String, Object> initialValue() {
                return new HashMap<>(4);
            }
        };

        /**
         * 返回当前作用域中name对应的bean对象
         * @param name：需要检索的bean对象的名称
         * @param objectFactory：如果name对应的bean对象在当前作用域中没有找到，那么可以调用这个objectFactory来创建这个bean对象
         */
        @Override
        public Object get(String name, ObjectFactory<?> objectFactory) {
            // 获取线程map
            Map<String, Object> scope = BEANS.get();
            Object scopedObject = scope.get(name);
            // 没有则创建，并放入线程map中
            if (scopedObject == null) {
                scopedObject = objectFactory.getObject();
                scope.put(name, scopedObject);
            }
            return scopedObject;
        }

        /**
         * bean作用域范围结束回调方法，用于bean的清理
         */
        @Override
        public Object remove(String name) {
            Map<String, Object> scope = BEANS.get();
            return scope.remove(name);
        }

        @Override
        public void registerDestructionCallback(String name, Runnable callback) {

        }

        @Override
        public Object resolveContextualObject(String key) {
            return null;
        }

        @Override
        public String getConversationId() {
            return Thread.currentThread().getName();
        }
    }
```



#### 将自定义 Scope 注册到容器中

通过 `ConfigurableBeanFactory#registerScope(String scopeName, Scope scope)` 将自定义作用域注册到容器中

```java
	/**
	 * Register the given scope, backed by the given Scope implementation.
	 * @param scopeName the scope identifier
	 * @param scope the backing Scope implementation
	 */
	void registerScope(String scopeName, Scope scope);
```



#### 测试自定义作用域

创建 `Spring` 容器，并将 `ThreadScope` 作用域注册到容器中，然后开启多线程并获取 bean 实例：

```java
    @Bean
    @org.springframework.context.annotation.Scope("thread")
    public User user() {
        return new User("213");
    }    

    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(CustomScopeTest.class);
        // 向容器中注册自定义作用域
        context.getBeanFactory().registerScope("thread", new ThreadScope());
				// 开启4个线程获取
        for (int i = 0; i < 4; i++) {
            new Thread(() -> {
                System.out.println(Thread.currentThread().getName() + context.getBean(User.class ));
                System.out.println(Thread.currentThread().getName() + context.getBean(User.class ));
            }).start();
        }
    }
```





每个线程都会创建新的 bean 实例，即会创建4个，**同一线程** 中两次获取的实例是 **相同** 的，**不同线程** 则不同：

![](https://ddmcc-1255635056.cos.ap-guangzhou.myqcloud.com/WeChat42763bc5750d14a238cb3fc2159fa9cd.png)





