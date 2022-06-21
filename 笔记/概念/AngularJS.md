## 面试
- `AngularJS`中`control`间通信最好使用广播的方式
- `AngularJS`中的服务实质上是单例对象
- `Angular`大大减少了对DOM的访问。`jQuery`极大的丰富了DOM操作
- 依赖注入（Dependency Injection），是这样一个过程：由于某客户类只依赖于服务类的一个接口，而不依赖于具体服务类，所以客户类只定义一个注入点。在程序 运行过程中，客户类不直接实例化具体服务类实例，而是客户类的运行上下文环境或专门组件负责实例化服务类，然后将其注入到客户类中，保证客户类的正常运行。


## 消息传输
- `$emit`只能向`parent controller`传递`event`与`data`，即向上冒泡
- `$broadcast`只能向`child controller`传递`event`与`data`，即向下传播事件
- `$on`用于接收`event`与`data`