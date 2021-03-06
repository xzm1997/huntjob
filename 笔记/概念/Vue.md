# 构建工具
## Webpack
### 构建流程
- 开始运行 Webpack。
  - 读取与合并参数，加载 plugin。
  - 实例化 Compiler。
    - 调用 compiler.run 创建 Compilation，代表一次资源的构建。
    - Compilation 对象也提供了很多关键步骤的钩子函数，并生成一次 Chunk。
    - Compilation.buildModule 主要执行 loader，编译掉不认识的代码。
- 使用 Parser 分析项目依赖。
  - 从 Chunk 开始解析依赖，使用 Module 和 Dependency 管理代码模块相互关系。
- 使用 Template 生成结果代码。
  - 基于 Chunk 的数据拼接字符串，生成最终代码。
### 核心概念
- 入口(entry)：入口是 webpack 构建开始的地方，通过入口文件，webpack 可以找到入口文件所依赖的文件，并逐步递归，找出所有依赖的文件。
- 输出(output)：output 属性告诉 webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件。
- loader：webpack 自身只支持 JavaScript。而 loader 能够让 webpack 处理那些非 JavaScript 文件，并且先将它们转换为有效的模块，然后添加到依赖图中，这样就可以提供给应用程序使用
- 插件(plugins)：插件其实就是一个类，通过监听 webpack 执行流程上的钩子函数，可以更精密地控制 webpack 的输出，包括：打包优化、资源管理和注入环境变量等。
### 模块
- Compiler。webpack 的运行**入口**，compiler 对象代表了完整的 webpack 环境配置。这个对象在启动 webpack 时被一次性建立，并配置好所有可操作的设置， 包括 options，loader 和 plugin。当在 webpack 环境中应用一个插件时，插件将收到此 compiler 对象的引用，可以使用它来访问 webpack 的主环境。
- Compilation。代表了一次资源的构建，当运行 webpack 开发环境时，每当检测到一个文件的变化，就会创建一个新的 compilation，从而生成一组新的编译资源。一个 compilation 对象表现了当前的模块资源、编译生成资源、变换的文件、以及被跟踪依赖的状态信息。compilation 也提供了很多关键步骤的回调，以供插件在自定义处理时选择使用。
- Module。用于表示代码模块的基础类，关于代码模块的所有信息都会存在 module 实例中，例如 dependencies（记录代码模块的依赖） 等。
  创建一个 module 对象，主要操作：
  - 搜集所有依赖的 module
  - 执行对应的 loader
- Chunk。一个 Chunk 是由一个或多个 Module 生成。一般根据入口文件生成 Chunk，然后把入口文件所依赖文件的 Module 集合加入到 Chunk 中。简单理解： Chunk 是打包后的代码块，如果没有使用代码拆分，那么打包后的 bundle 和 chunk 就是一样的。
  生成 Chunk 的两种方式：
  - 入口文件模块
  - 动态引入的模块
- Parser。基于 acorn 来分析 ast 语法树，解析出代码模块的依赖。
- Dependency。保存代码模块对应的依赖使用的对象，module 实例的 build 方法在执行完对应的 loader 时，会继续调用 parser 实例来解析自身依赖的模块，解析后的结果存放在 module.denpendencies 中，具体步骤如下：首先保存的是依赖的路径，后续会经由 compilation.processModuleDependencies 方法处理模块的依赖。
- Template。生成最终代码要使用到的代码模块，相当于是根据 modules 创建一个自执行函数来执行所有 modules。
## vue-loader
- loader是webpack生态中的一环


#相关链接
## 文件监听与热更新
### 热更新
- 模块热替换会在程序运行中，替换、添加、删除模块，无需重新加载整个页面，无需更替所有模块。模块热替换是`webpack`提供的最有用的功能之一，它允许在运行时更新各个模块，从而无需进行完全刷新，`hotmoudlereplacementplugin`内置插件配置 
- 与`watch`相比，它不输出文件，直接方式内存中，所以它的构建熟读更快。
- 热更新的核心是HMR Server和HMR Runtime。
  - HMR Server：是服务端，用来将变化的js模块通过websocket的消息通知给浏览器端
  - HMR Runtime：是浏览器端，用于接收HMR Server传递过来的模块数据，浏览器端可以看到.hot-update.json文件
###文件监听
- 每次修改代码后，都需要手动构建，影响开发效率。`webpack`提供了文件监听的作用。开启监听时，`webpack`会调用`node`中`fs`模块来判断文件是否发生变化，如果发生了变化，自动重新构建输出新的文件。
- `webpack`文件监听判断依据是看文件的最后编辑时间是否发生变化。

## 构建工具
- 构建工具的作用就是将这些浏览器不能识别的语法（高级语法）转换成了浏览器能识别的语法（低级语法）。
- 还有一个作用是将代码压缩混淆，在压缩代码体积的同时也让代码不易阅读。

## 核心概念
- `entry`：有两种方式：单入口、多入口
- `output`：
  - `entry`是单入口，`output`可通过修改参数`path`和`filename`。
  - `entry`是多入口，`output`的`filename`需要用`[name]`占位符，用来指定打包后的名称，对应的是`entry`中的`key`
- `mode`：可设置为`development`、`production`、`none`，默认是`production`。
  - `development`：开发环境
  - `production`：生产环境
  - `none`：不开启任何优化选项
- `loaders`
  - `webpack`只支持`js`和`json`两种文件类型，`loader`的作用就是用来处理其他的文件，并将它们添加到依赖图中。
  - `loader`是个函数，接收源文件作为参数，返回转换后的结果。
- `plugins`
  - 任何loader没法做的事情，都可以用plugin解决，它主要用于文件优化、资源管理、环境变量注入，作用于整个构建过程。
  - `plugin`是一个具有`apply`方法的`JavaScript`对象，由于`plugin`可以携带参数，所以必须在配置中向`plugins`属性传入一个实例
  
# 生命周期
## 生命周期与钩子
- `Vue`的生命周期**钩子**函数：就是指在一个组件从创建到销毁的过程自动执行的函数，包含组件的变化。
![示意图](https://cn.vuejs.org/images/lifecycle.png)
- **四个阶段**：
  - **创建阶段**: 
    - `beforeCreate`
      - 在实例初始化之后、进行数据侦听和事件/侦听器的配置之前同步调用
      - 这个阶段vue实例刚刚在内存中创建，此时data和methods这些都没初始化好。
    - `created`
      - 在实例创建完成后被立即同步调用;
      - 这个阶段vue实例在内存中已经创建好了，data和methods也能够获取到了，但是模板还没编译。不能访问到 `$el` 属性。
  - **挂载阶段**:
    - `beforeMount`
      - 在挂载开始之前被调用：相关的`render`函数首次被调用
      - 这个阶段完成了模板的编译，但是还没挂载到页面上。
    - `mounted`
      - 在挂载后被调用
      - 这个阶段，模板编译好了，也挂载到页面中了，页面也可以显示了。
  - **更新阶段**：
    - `beforeUpdate`
      - 转态更新之前执行此函数，此时data中数据的状态值已经更新为最新的，但是页面上显示的数据还是最原始的，还没有重新开始渲染DOM树。
    - `updated`
      - 这个阶段是转态更新完成后执行此函数，此时data中数据的状态值是最新的，而且页面上显示的数据也是最新的，DOM节点已经被重新渲染了。
  - **销毁(卸载)阶段**:   
    - `beforeDestroy`/`beforeUnmount`
      - 在卸载组件实例之前调用,在这个阶段，实例仍然是完全正常的,
    - `destroyed`/`unmounted`
      - 卸载组件实例后调用,调用此钩子时，组件实例的所有指令都被解除绑定，所有事件侦听器都被移除，所有子组件实例被卸载.

## 父子组件
- **父亲早出晚归，儿子迟到早退**
- 加载渲染过程：
  - 父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
- 子组件更新过程
  - 父beforeUpdate->子beforeUpdate->子updated->父updated
- 父组件更新过程
  - 父beforeUpdate->父updated
- 销毁过程
  - 父beforeDestroy->子beforeDestroy->子destroyed->父destroyed

# 基本概念
## 双向绑定
### 原理
![双向绑定原理](https://uploadfiles.nowcoder.com/images/20210401/447785786_1617244044166/C21B5ECC8B63BE4DC27B38A70C75A1CB)
- `View`的变化能实时让`Model`发生变化，而`Model`的变化也能实时更新`View`。
- Vue数据双向绑定原理是通过**数据劫持结合发布者-订阅者模式**的方式来实现的，首先是通过ES5提供的**Object.defineProperty()**方法来劫持（监听）各属性的`getter`、`setter`，并在当监听的属性发生变动时通知订阅者，是否需要更新，若更新就会执行对应的更新函数。
TODO: 待更新--<a src = "https://blog.nowcoder.net/n/8517450fe4fd4220b4078f9c61e42ec1">双向绑定原理</a>

## 双向绑定原理
- Vue数据双向绑定原理是通过数据劫持结合发布者-订阅者模式的方式来实现的，首先是对数据进行监听，然后当监听的属性发生变化时则告诉订阅者是否要更新，若更新就会执行对应的更新函数从而更新视图
- 实现数据的双向绑定，首先要对数据进行劫持监听，需要设置一个监听器Observer，用来监听所有属性。如果属性发上变化了，就需要告诉订阅者Watcher看是否需要更新。因为订阅者是有很多个，所以我们需要有一个消息订阅器Dep来专门收集这些订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理的。接着，我们还需要有一个指令解析器Compile，对每个节点元素进行扫描和解析，将相关指令（如v-model，v-on）对应初始化成一个订阅者Watcher，并替换模板数据或者绑定相应的函数，此时当订阅者Watcher接收到相应属性的变化，就会执行对应的更新函数，从而更新视图。
- 步骤
  - 实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。
  - 实现一个订阅者Watcher，每一个Watcher都绑定一个更新函数，watcher可以收到属性的变化通知并执行相应的函数，从而更新视图。
  - 实现一个解析器Compile，可以扫描和解析每个节点的相关指令（v-model，v-on等指令），如果节点存在v-model，v-on等指令，则解析器Compile初始化这类节点的模板数据，使之可以显示在视图上，然后初始化相应的订阅者（Watcher）。

## 组件间通信
- **方法一** `props` / `$emit`
  - 父组件通过`props`向下传递数据给子组件
  - 子组件通过`events`给父组件发送消息，实际上就是子组件把自己的数据发送到父组件。
- **方法二** `$emit` / `$on`
  - 这种方法通过一个空的Vue实例作为中央事件总线（事件中心），用它来触发事件和监听事件, 巧妙而轻量地实现了任何组件间的通信，包括父子、兄弟、跨级。
  - `$on` 监听了自定义事件 `data-a` 和 `data-b`，因为有时不确定何时会触发事件，一般会在 `mounted` 或 `created` 钩子中来监听
- **方法三** `vuex`
  - `Vuex`实现了一个**单向数据流**，在全局拥有一个`State`存放数据，当组件要更改`State`中的数据时，必须通过`Mutation`进行，`Mutation`同时提供了**订阅者模式**供外部插件调用获取`State`数据的更新。而当所有异步操作(常见于调用后端接口异步获取更新数据)或批量的同步操作需要走`Action`，但`Action`也是无法直接修改`State`的，还是需要通过Mutation来修改State的数据。最后，根据`State`的变化，渲染到视图上。
- **方法四** `$attrs` / `$listeners`
  - `$attrs`：包含了父作用域中不被 `prop` 所识别 (且获取) 的特性绑定 (`class` 和 `style` 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (`class` 和 `style` 除外)，并且可以通过 `v-bind="$attrs"` 传入内部组件。通常配合 `interitAttrs` 选项一起使用。
  - `$listeners`：包含了父作用域中的 (不含 `.native` 修饰器的) `v-on` 事件监听器。它可以通过 `v-on="$listeners"` 传入内部组件
- **方法五** `provide` / `inject`
  - 允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效
  - `provide` / `inject` API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种**主动提供**与**依赖注入**的关系
- **方法六** `$parent` / `$children` 与 `ref`
  - `ref`：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组
  - `$parent` / `$children` ：访问父 / 子实例

## Vue特点
- **轻量级** Angular的学习成本高，使用起来比较复杂，而Vue相对简单、直接，所以Vue使用起来更加友好。
- **数据绑定** Vue是一个MVVM框架，数据双向绑定，即当数据发生变化的时候，视图也就发生变化，当视图发生变化的时候，数据也会跟着同步变化，这也算是Vue的精髓之处。尤其是在进行表单处理时，Vue的双向数据绑定非常方便
- **指令** 指令主要包括内置指令和自定义指令，以“v-”开头，作用于HTML元素。指令提供了一些特殊的特性， 将指令绑定在元素上时，指令会给绑定的元素添加一些特殊的行为。 例如，v-bind动态绑定指令、v-if 条件渲染指令、v- for列表渲染指令等
- **插件** 插件用于对Vue框架功能进行扩展，通过`MyPlugin.install`完成插件的编写，简单配置后就可以全局使用。常用的扩展插件有`vue-router`、`Vuex` 等
- Vue很多特性与Angular和React有着相同的地方，但是也有着性能方面的差别。
  - Vue使用基于依赖追踪的观察系统并且使用异步队列更新，所有的数据都是独立触发的，提高了数据处理能力。
  - React和Vue的中心思想是一切都是组件，组件之间可以实现嵌套。
  - React 采用了特殊的JSX语法，Vue中也推崇编写以*.vue后缀命名的文件格式，对文件内容都有一些规定，两者需要编译后使用。
  - 值得一提的是，React依赖虚拟DOM，而Vue使用的是DOM模板。Vue 在模板中提供了指令、过滤器等，可以非常方便和快捷地操作DOM。推荐将Vue 使用到具有复杂交互逻辑的前端应用中，以确保用户的体验效果。

# 方法与属性
## 懒加载 `vue-lazyload`
- 轻量、强大、易用
- 支持所有图片
- 支持添加加载时样式
- 使用
  - 组件中使用`vue-lazyload`时，`v-lazy`代替`v-bind:src`
  - `:key`可以不加，如果不加`:key`属性，刷新页面时，可能由于`key`相同，图片不刷新

## diff算法
- Diff算法的作用是用来计算出 Virtual DOM 中被改变的部分，然后针对该部分进行原生DOM操作，而不用重新渲染整个页面。
- 策略
  - Tree Diff：对树每一层进行遍历，找出不同
  - Component Diff：数据层面的差异比较
  - Element Diff：真实DOM渲染，结构差异的比较

## 路由跳转
- `this.$router.push` ： 跳转到指定URL，向history栈添加一个新的记录，点击后退会返回至上一个页面
- `this.$router.replace`： 跳转到指定URL，替换history栈中最后一个记录，点击后退会返回至上上一个页面
- `this.$router.go(n)`：类似`window.history.go(n)`，向前或向后跳转n个页面，n可正（先后跳转）可负（向前跳转）
- `route-link` : 利用路由实现跳转

# Vue3
## 与Vue2差别
1. 生命周期变化
    Vue2.x | Vue3
    | :---: | :---: |
    beforeCreate | 使用 setup()
    created | 使用 setup()
    beforeMount | onBeforeMount
    mounted | onMounted
    beforeUpdate | onBeforeUpdate
    updated | onUpdated
    beforeDestroy | onBeforeUnmount
    destroyed | onUnmounted
    errorCaptured | onErrorCaptured
  - 使用setup代替了之前的beforeCreate和created，其他生命周期名字有些变化，功能都是没有变化的
  - 新增onRenderTracked、onRenderTriggered：这两个事件都带有一个DebuggerEvent，它使我们能够知道是什么导致了Vue实例中的重新渲染
2. 使用proxy代替defineProperty
   - defineProperty只能响应首次渲染时候的属性，Proxy需要的是整体，不需要关心里面有什么属性，而且Proxy的配置项有13种，可以做更细致的事情，这是之前的defineProperty无法达到的
   - 新增/删除属性、数组下标操作
3. Diff算法的提升
   - vue2.x：递归遍历两个虚拟DOM树，并比较每个节点上的每个属性，来确定实际DOM的哪些部分需要更新。
   - Vue3优化：
     - 分为嵌套“块”，更新块中的节点时，不再需要递归遍历DOM树，该块内的动态绑定可以在一个平面数组中跟踪。
     - 编译器积极地检测模板中的静态节点、子树甚至数据对象，并在生成的代码中将它们**提升到渲染函数之外**。这样可以避免在每次渲染时重新创建这些对象，从而大大提高内存使用率并减少垃圾回收的频率。
     - 在元素级别。编译器还根据需要执行的更新类型，为每个具有动态绑定的元素生成一个优化标志。运行时将获取这些提示并采用专用的快速路径。*例如，具有动态类绑定和许多静态属性的元素将收到一个标志，提示只需要进行类检查。*
4. typeScript的支持: `Composition API`
5. 打包体积变化
## 性能提升
### 响应式系统提升
- vue2在初始化的时候，对data中的每个属性使用definepropery调用getter和setter使之变为响应式对象。如果属性值为对象，还会递归调用defineproperty使之变为响应式对象。
- vue3使用proxy对象重写响应式。proxy的性能本来比defineproperty好，proxy可以拦截属性的访问、赋值、删除等操作，不需要初始化的时候遍历所有属性，另外有多层属性嵌套的话，只有访问某个属性的时候，才会递归处理下一级的属性。
- 优势：
  - 可以监听动态新增的属性；
  - 可以监听删除的属性；
  - 可以监听数组的索引和 length 属性；
### 编译优化
- 优化编译和重写虚拟dom，让首次渲染和更新dom性能有更大的提升
- vue2 通过标记静态根节点优化 diff 算法 
- vue3 标记和提升所有静态根节点,diff 的时候只比较动态节点内容
- Fragments, 模板里面不用创建唯一根节点,可以直接放同级标签和文本内容
- 跳过静态节点,直接对比动态节点,缓存事件处理函数

### 源码体积的优化
- vue3移除了一些不常用的api，例如：inline-template、filter等 使用tree-shaking


# vue-router
## vue中 $router 和 $route 的区别
> `this.$route`：当前激活的路由的信息对象。每个对象都是局部的，可以获取当前路由的 path, name, params, query 等属性。

> `this.$router`：全局的 router 实例。通过 vue 根实例中注入 router 实例，然后再注入到每个子组件，从而让整个应用都有路由功能。其中包含了很多属性和对象（比如 history 对象），任何页面也都可以调用其 push(), replace(), go() 等方法。

## 路由
### 方法
- router是VueRouter的一个实例，所以它是一个全局对象，包含了所有的子对象和属性
- route是正在跳转的这个路由的局部对象，可以获取这个正在跳转的路由的name，path，params，query等
### 页面跳转
- `this.$router.push` ： 跳转到指定URL，向history栈添加一个新的记录，点击后退会返回至上一个页面
- `this.$router.replace`： 跳转到指定URL，替换history栈中最后一个记录，点击后退会返回至上上一个页面
- `this.$router.go(n)`：类似`window.history.go(n)`，向前或向后跳转n个页面，n可正（先后跳转）可负（向前跳转）
- `route-link` : 利用路由实现跳转

## hash模式和history模式
### Hash模式
- 原理
  - 基于浏览器的hashchange事件，地址变化时，通过window.location.hash 获取地址上的hash值；并通过构造Router类，配置routes对象设置hash值与对应的组件内容。
- 优点
  - hash值会出现在URL中, 但是不会被包含在Http请求中, 因此hash值改变不会重新加载页面
  - hash改变会触发hashchange事件, 能控制浏览器的前进后退
  - 兼容性好
- 缺点
  - 地址栏中携带#，不美观
  - 只可修改 # 后面的部分，因此只能设置与当前 URL 同文档的 URL
  - hash有体积限制，故只可添加短字符串
  - 设置的新值必须与原来不一样才会触发hashchange事件，并将记录添加到栈中
  - 每次URL的改变不属于一次http请求，所以不利于SEO优化

### History模式
- 原理
  - 基于HTML5新增的pushState()和replaceState()两个api，以及浏览器的popstate事件，地址变化时，通过window.location.pathname找到对应的组件。并通过构造Router类，配置routes对象设置pathname值与对应的组件内容。
- 优点
  - 没有#，更加美观
  - pushState() 设置的新 URL 可以是与当前 URL 同源的任意 URL
  - pushState() 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中
  - pushState() 通过 stateObject 参数可以添加任意类型的数据到记录中
  - pushState() 可额外设置 title 属性供后续使用
  - 浏览器的进后退能触发浏览器的popstate事件，获取window.location.pathname来控制页面的变化
- 缺点
  - URL的改变属于http请求，借助history.pushState实现页面的无刷新跳转，因此会重新请求服务器。所以前端的 URL 必须和实际向后端发起请求的 URL 一致。如果用户输入的URL回车或者浏览器刷新或者分享出去某个页面路径，用户点击后，URL与后端配置的页面请求URL不一致，则匹配不到任何静态资源，就会返回404页面。所以需要后台配置支持，覆盖所有情况的候选资源，如果 URL 匹配不到任何静态资源，则应该返回app 依赖的页面或者应用首页。
  - 兼容性差，特定浏览器支持


# Vuex
## 概念
### State
- 单一状态树：用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 (SSOT)”而存在。每个应用将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。
### Getter
- 可以认为是 store 的计算属性
### Mutation
- 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的事件类型 (type)和一个回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
### Action
- Action 类似于 mutation，不同在于：
  - Action 提交的是 mutation，而不是直接变更状态。
  - Action 可以包含任意异步操作。
- 一个 store.dispatch 在不同模块中可以触发多个 action 函数。在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。
### Module
- 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割

## Vuex 的 mutation 中为什么不能做异步操作
- Vuex中所有的状态更新的唯一途径都是mutation，异步操作通过 Action 来提交 mutation实现，这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。
- 每个mutation执行完成后都会对应到一个新的状态变更，这样devtools就可以打个快照存下来，然后就可以实现 time-travel 了。如果mutation支持异步操作，devtool无法捕捉到变化，就没有办法知道状态是何时更新的，无法很好的进行状态的追踪，给调试带来困难。

## module
- 项目规模变大之后，单独一个`store`对象会过于庞大臃肿，通过模块方式可以拆分开来便于维护
- 可以按之前规则单独编写子模块代码，然后在主文件中通过`modules`选项组织起来：`createStore({modules:{...}})`
- 不过使用时要注意访问子模块状态时需要加上注册时模块名：`store.state.a.xxx`，但同时`getters`、`mutations`和`actions`又在全局空间中，使用方式和之前一样。如果要做到完全拆分，需要在子模块加上`namespace`选项，此时再访问它们就要加上命名空间前缀。
- 很显然，模块的方式可以拆分代码，但是缺点也很明显，就是使用起来比较繁琐复杂，容易出错。而且类型系统支持很差，不能给我们带来帮助。`pinia`显然在这方面有了很大改进，是时候切换过去了。


# 工程
## 组件间通信
- TODO: 待补充

# 异步
## 异步渲染
- vue是组件级更新，当数据更改一次组件就要重新渲染一次，性能不高，为了防止数据一更新就更新组件，所以做了个异步更新渲染。核心的方法就是nextTick
- 当数据变化后会调用notify方法，将watcher遍历，调用update方法通知watcher进行更新，这时候watcher并不会立即去执行，在update中会调用queueWatcher方法将watcher放到了一个队列里，在queueWatcher会根据watcher的进行去重，多个属性依赖一个watcher，如果队列中没有该watcher就会将该watcher添加到队列中，然后通过nextTick异步执行flushSchedulerQueue方法刷新watcher队列。flushSchedulerQueue中开始会触发一个before的方法，其实就是beforeUpdate，然后watcher.run() 才开始真正执行watcher，执行完页 面渲染完成，更新完成后调用updated。

## nextTick
- 定义：在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM，所以放在 Vue.nextTick()回调函数中的执行的应该是会对 DOM 进行操作的 js 代码；
- 理解：nextTick()，是将回调函数延迟在下一次 dom 更新数据后调用，简单的理解是：当数据更新了，在 dom 中渲染后，自动执行该函数
### 实现原理
- Vue 是异步执行 dom 更新的，一旦观察到数据变化，Vue 就会开启一个队列，然后把在同一个事件循环 (event loop) 当中观察到数据变化的 watcher 推送进这个队列。如果这个 watcher 被触发多次，只会被推送到队列一次。这种缓冲行为可以有效的去掉重复数据造成的不必要的计算和 DOm 操作。而在下一个事件循环时，Vue 会清空队列，并进行必要的 DOM 更新。 当你设置 vm.someData = ‘new value’，DOM 并不会马上更新，而是在异步队列被清除，也就是下一个事件循环开始时执行更新时才会进行必要的 DOM 更新。如果此时你想要根据更新的 DOM 状态去做某些事情，就会出现问题。。为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 Vue.nextTick(callback) 。这样回调函数在 DOM 更新完成后就会调用。
### 使用场景
- Vue 生命周期的 `created()` 钩子函数进行的 DOM 操作一定要放在 Vue.nextTick()的回调函数中，原因是在 `created()` 钩子函数执行的时候 DOM 其实并未进行任何渲染，而此时进行 DOM 操作无异于徒劳，所以此处一定要将 DOM 操作的 js 代码放进 Vue.nextTick()的回调函数中。与之对应的就是 mounted 钩子函数，因为该钩子函数执行时所有的 DOM 挂载已完成。 
- 当项目中你想在改变 DOM 元素的数据后基于新的 dom 做点什么，对新 DOM 一系列的 js 操作都需要放进 Vue.nextTick()的回调函数中；通俗的理解是：更改数据后当你想立即使用 js 操作新的视图的时候需要使用它
- 在使用某个第三方插件时 ，希望在 vue 生成的某些 dom 动态发生变化时重新应用该插件，也会用到该方法，这时候就需要在 $nextTick 的回调函数中执行重新应用插件的方法

# 源码
## diff算法
- 虚拟DOM
  - 用JS对象来模拟 DOM 结构
  - 将真实DOM的数据抽取出来，以对象的形式模拟树形结构，使其更加简洁明了。
- 流程: 在Vue中，主要是`patch()`、`patchVnode()`和`updateChildren()`这三个主要方法来实现`Diff`的
  - 当响应式数据变化的时候，就会触发页面更新函数updateComponent()
  - 此时updateComponet()就会调用patch()方法，在该方法中进行比较是否为相同节点，是的话执行patchVnode()方法，开始比较节点差异；而如果不是相同节点的话，则进行替换操作
  - 在patchVnode()中，首先是更新节点属性，然后会判断有没有孩子节点，有的话则执行updateChildren()方法，对孩子节点进行比较；如果没有孩子节点的话，则进行节点文本内容判断更新
  - updateChildren()中，会对传入的两个孩子节点数组进行一一比较，当找到相同节点的情况下，调用patchVnode()继续节点差异比较。
### Diff 算法的优化
- 只比较同一层级，不跨级比较
- 比较标签名: 如果同一层级的比较标签名不同，就直接移除老的虚拟 DOM 对应的节点，不继续按这个树状结构做深度比较
- 比较 key: 如果标签名相同，key 也相同
### Patch
- 该方法接收新旧虚拟Dom，即oldVnode，vnode，这个函数其实是对新旧虚拟Dom做一个简单的判断，而还没有进入详细的比较阶段。
- 首先判断vnode是否存在，如果不存在的话，则代表这个旧节点要整个删除；
- 如果vnode存在的话，再判断oldVnode是否存在，如果不存在的话，则代表只需要新增整个vnode节点就可以；
- 如果vnode和oldVnode都存在的话，判断两者是不是相同节点，如果是的话，这调用patchVnode方法，对两个节点进行详细比较判断；
- 如果两者不是相同节点的话，这种情况一般就是初始化页面，此时oldVnode其实是真实Dom，这是只需要将vnode转换为真实Dom然后替换掉oldVnode，具体就不多讲，这不是今天讨论的范围内。
