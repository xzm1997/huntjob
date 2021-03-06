# Vue 运行机制
## 双向绑定 :two:
- 通过数据劫持结合发布者-订阅者模式的方式来实现的，首先是对数据进行监听，然后当监听的属性发生变化时则告诉订阅者是否要更新，若更新就会执行对应的更新函数从而更新视图
- Object.defineProperty() 与 proxy()
  - Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
  - Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义
  - 使用proxy和Object.defineProperty()大同小异,只不过proxy可以直接监听整个data对象,而非data上的某个属性
- Proxy的优势:
  - Proxy可以直接监听整个对象而非属性。
  - Proxy可以直接监听数组的变化。
  - Proxy有13种拦截方法，如ownKeys、deleteProperty、has 等是 Object.defineProperty 不具备的。
  - Proxy返回的是一个新对象，我们可以只操作新的对象达到目的，而Object.defineProperty只能遍历对象属性直接修改;
  - Proxy做为新标准将受到浏览器产商重点持续的性能优化,也就是传说中的新标准的性能红利。
- Object.defineProperty()的缺点
  - Object.defineProperty 只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历。
  - Object.defineProperty不能监听数组。是通过重写数据的那7个可以改变数据的方法来对数组进行监听的。
  - Object.defineProperty 也不能对 es6 新产生的 Map,Set 这些数据结构做出监听。
  - Object.defineProperty也不能监听新增和删除操作，通过 Vue.set()和 Vue.delete来实现响应式的。
### Vue2
- Object.definedProperty() 是 es5 的属性，其通过 get() 和 set() 方法劫持数据的读写。
- 每个组件都有一个 data 选项，当组件渲染过程中，会对 data 数据进行遍历，用 Object.defineProperty 转为 getter/setter。data 之后添加的属性不能 observe
  - data 数据中存在对象，进行遍历递归
  - data 数据中有数组，如果数组元素为对象，重复上一步。没有则进行特殊处理
- 实现
  - 数据劫持：用于数据变化时更新视图。Object.defineProperty()
  - 观察者模式：用于视图变化时更新数据。addEventListener()触发事件
### Vue3
- Proxy()：Proxy() 是 es6 的构造函数，用于拦截外界对目标对象的读写。不需要进行遍历
- ref() reactive()：ref() reactive() 随时可以添加
  - Ref 用来创建基础类型的响应式数据，模板默认调用value显示数据。方法中修改需要修改value的值才能修改
  - Reactive 用来创建引用类型的响应式数据
  - Ref的本质是通过Reactive创建的，Ref(10)=>Reactive({value:10});
## hash和history
- hash模式
  - 基于浏览器的hashchange事件，地址变化时，通过window.location.hash 获取地址上的hash值；并通过构造Router类，配置routes对象设置hash值与对应的组件内容。
  - **优点**
    - hash值会出现在URL中, 但是不会被包含在Http请求中, 因此hash值改变不会重新加载页面
    - hash改变会触发hashchange事件, 能控制浏览器的前进后退
    - 兼容性好
  - **缺点**
    - 地址栏中携带#，不美观
    - 只可修改 # 后面的部分，因此只能设置与当前 URL 同文档的 URL
    - hash有体积限制，故只可添加短字符串
    - 设置的新值必须与原来不一样才会触发hashchange事件，并将记录添加到栈中
    - 每次URL的改变不属于一次http请求，所以不利于SEO优化
- history模式
  - 基于HTML5新增的`pushState()`和`replaceState()`两个api，以及浏览器的popstate事件，地址变化时，通过`window.location.pathname`找到对应的组件。并通过构造Router类，配置routes对象设置pathname值与对应的组件内容。
  - **优点**
    - 没有#，更加美观
    - `pushState()` 设置的新 URL 可以是与当前 URL 同源的任意 URL
    - `pushState()` 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中
    - `pushState()` 通过 stateObject 参数可以添加任意类型的数据到记录中
    - `pushState()` 可额外设置 title 属性供后续使用
    - 浏览器的进后退能触发浏览器的`popstate`事件，获取`window.location.pathname`来控制页面的变化
  - **缺点**
    - URL的改变属于http请求，借助history.pushState实现页面的无刷新跳转，因此会重新请求服务器。所以前端的 URL 必须和实际向后端发起请求的 URL 一致。如果用户输入的URL回车或者浏览器刷新或者分享出去某个页面路径，用户点击后，URL与后端配置的页面请求URL不一致，则匹配不到任何静态资源，就会返回404页面。所以需要后台配置支持，覆盖所有情况的候选资源，如果 URL 匹配不到任何静态资源，则应该返回 app 依赖的页面或者应用首页。
    - 兼容性差，特定浏览器支持
## 生命周期
### 概述
- **四个阶段**：
- **创建阶段**: 在组件创建时执行
  - `beforeCreate`
   - 在实例初始化之后、进行数据侦听和事件/侦听器的配置之前同步调用
   - 这个阶段vue实例刚刚在内存中创建，此时data和methods这些都没初始化好。
  - `created`
   - 在实例创建完成后被立即同步调用;
   - 这个阶段vue实例在内存中已经创建好了，data和methods也能够获取到了，但是模板还没编译。不能访问到 `$el` 属性。
- **挂载阶段**:DOM 被挂载时执行
  - `beforeMount`
   - 在挂载开始之前被调用：相关的`render`函数首次被调用
   - 这个阶段完成了模板的编译，但是还没挂载到页面上。
  - `mounted`
   - 在挂载后被调用
   - 这个阶段，模板编译好了，也挂载到页面中了，页面也可以显示了。
- **更新阶段**：当响应数据被修改时执行
  - `beforeUpdate`
   - 转态更新之前执行此函数，此时data中数据的状态值已经更新为最新的，但是页面上显示的数据还是最原始的，还没有重新开始渲染DOM树。
  - `updated`
   - 这个阶段是转态更新完成后执行此函数，此时data中数据的状态值是最新的，而且页面上显示的数据也是最新的，DOM节点已经被重新渲染了。
- **销毁(卸载)阶段**: 在元素被销毁之前立即运行
  - `beforeDestroy`/`beforeUnmount`
   - 在卸载组件实例之前调用,在这个阶段，实例仍然是完全正常的,
  - `destroyed`/`unmounted`
   - 卸载组件实例后调用,调用此钩子时，组件实例的所有指令都被解除绑定，所有事件侦听器都被移除，所有子组件实例被卸载.
### Vue3变化
- Vue3 Composition API 附带了一个 setup() 方法。此方法封装了我们的大多数组件代码，并处理了响应式，生命周期钩子函数等。
- onBeforeMount、onMounted、onBeforeUpdate、onUpdated、onBeforeUnmount、onUnmounted、onActivated、onDeactivated、onErrorCaptured
- beforeCreate -> use setup()
- created -> use setup()
- beforeMount -> onBeforeMount
- mounted -> onMounted
- beforeUpdate -> onBeforeUpdate
- updated -> onUpdated
- beforeDestroy -> onBeforeUnmount
- destroyed -> onUnmounted
- errorCaptured -> onErrorCaptured
- 新增onRenderTracked、onRenderTriggered：这两个事件都带有一个DebuggerEvent，它使我们能够知道是什么导致了Vue实例中的重新渲染

## 虚拟DOM
- 用js模拟一颗dom树，放在浏览器内存中。当你要变更时，虚拟dom使用diff算法进行新旧虚拟dom的比较，将变更放到变更队列中
- 优点
  - 保证性能下限
  - 无需手动操作DOM
  - 跨平台：虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。
- 缺点
  - 无法进行极致优化：虚拟 DOM + 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。
  - 首次渲染大量DOM时，由于多了一层虚拟DOM的计算，会比innerHTML插入慢。

## 缓存组件如何更新
## computed和watch的区别
- 相同点：他们两者都是观察页面数据变化的。
- 不同点：
- computed只有当依赖的数据变化时才会计算, 当数据没有变化时, 它会读取缓存数据。
- watch每次都需要执行函数。watch更适用于数据变化时的异步操作。
- 当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。这是和computed最大的区别，请勿滥用。

## vue出现空白页面的原因
- 路由重复：如果配置了两个路由是重复的，比如配置了两个`path: '/'`，那么访问就会看到空白页面，这时候改下重复的路由配置即可。
- 路由没有配置：如果没有配置路由，那么访问的页面也可能是空白页，比如访问`/yanggb`，但是路由里却没有配置，这时候配置上丢失的路由配置即可。
- 路由配置指向页面为空白页。

# 组件间通信
## 父子组件、兄弟组件的通信方式 :two:
- 场景：
  - 父子 组件之间的数据传递
  - 兄弟 组件之间的数据传递
  - 祖先组件 与 子组件 之间的数据传递
- 选择：
  - 当我们的项目比较大时，可以选择更好的状态管理解决方案`vuex`。
  - 节制地使用`$parent`和`$children`,它们的主要目的是作为访问组件的应急方法，
  - 更推荐用`props`和`events`实现父子组件通信
  - 如果仅仅是传递数据，就用`$attrs`/`$listeners`好点
  - 如何不仅传递数据，还做中间处理，就用`vuex`好些
- 方法：
  - 通信总线：`$emit` / `$on`，通过一个空的Vue实例作为中央事件总线（事件中心），用它来触发事件和监听事件
  - mitt
  - prop、$emit
  - `$parent` / `$children` 与 `ref`
  - Vuex：Vuex是一个专为Vue.js应用程序开发的状态管理模式，它解决了组件之间同一状态的共享问题，它采用集中式存储管理应用的所有组件的状态，所以组件就可以和`store`通讯了，其实`Vuex`就是用来管理组件之间通信的一个组件
## eventBus 问题
### 多次触发
- 问题描述：第一次会触发接口一次，第二次会触发接口两次，第N次会触发接口N次
- 原因：this.r o o t . B u s . root.Bus.root.Bus.on实际是向Bus容器中添加一个事件监听器，当页面跳转时，原来的vue组件被注销，但是原来vue组件向Bus容器中添加的事件监听器并不会被移除。因此，当下次进入这个vue组件对应的页面时，执行到this.r o o t . B u s . root.Bus.root.Bus.on时，又会向Bus容器中添加一个重复的事件监听器，以此类推，导致Bus容器中有很多个一模一样的事件监听器，从而导致事件只被触发一次，但是回调函数被执行多次的现象。
- 解决
    ```
    created(){
      eventBus.$off.$on("fetchList",()=>{
        this.getListData()
      })
    }
    ```
    ```
    beforeDestroy(){
      eventBus.$off("fetchList")
    }
    ```
### 其它缺点
- 操作麻烦，每一个事件，都要定义一个类；
- 增加方法数；
- 导致事件发送者和接收者都依赖耦合事件类；
- 事件发生者只能单向广播，无法获得接收者对事件的处理结果；

# 指令
## Vue中v-if和v-show的区别
- v-if：该指令用于条件性的渲染一块内容，当指令的表达式返回值为true的时候，内容会被渲染出来；如果条件一直为false，那么内容就一直不会被渲染。相反，当返回值为false的时候，内容会被销毁。
- v-show：该指令和v-if用法基本一致，指令表达式的值为true就显示，为false就隐藏。显示和隐藏是基于css的样式切换，类似于display: none属性。即使一开始条件为false，内容也会被渲染在文档中，只是由css样式控制隐藏而已。
- v-if在条件切换时，会对标签进行适当的创建和销毁，而v-show则仅在初始化时加载一次，因此v-if的开销相对来说会比v-show大。
- v-if是惰性的，只有当条件为真时才会真正渲染标签；如果初始条件不为真，则v-if不会去渲染标签。v-show则无论初始条件是否成立，都会渲染标签，它仅仅做的只是简单的CSS切换。

# 事件
## vue中常见的键盘事件
- `keyup` 按下按键并抬起触发
- `keydown` 按下按键即触发
- 回车=>`enter`
- 删除=>`delete`(捕获删除和退格事件)
- 退出=>`esc`
- 空格=>`space`
- 换行=>`tab`(特殊，必须配合`keydown`去使用)
- 上=>`up`
- 下=>`down`
- 左=>`left`
- 右=>`right`

# Vue3
## Vue3 相比 Vue2有哪些变化

## vue2 vue3 插槽
- 插槽是使用在子组件中的。
- 插槽是为了将父组件中的子组件模板数据正常显示
- 分类
  - 默认插槽：后备内容
  - 具名插槽：给插槽添加name属性，父组件通过 `v-slot : name` 的方式添加内容

# diff算法
- 虚拟DOM：虚拟DOM就是把真实DOM树的结构和信息抽象出来，以对象的形式模拟树形结构
- 为什么需要虚拟DOM？
  渲染真实DOM会有一定的开销，如果每次修改数据都进行真实DOM渲染，都会引起DOM树的重绘和重排，性能开销很大。那么有没有可能只修改一小部分数据而不渲染整个DOM呢？虚拟DOM和Diff算法可以实现。
- 怎么实现？
  - 先根据真实DOM生成一颗虚拟DOM树
  - 当某个DOM节点数据发生改变时，生成一个新的`Vnode`
  - 新的`Vnode`和旧的`oldVnode`进行对比
  - 通过`patch`函数一边比对一边给真实DOM打补丁或者创建`Vnode`、移除`oldVnode`等
- 异步更新队列
- 比较只会在同层级进行, 不会跨层级比较
- 在diff比较的过程中，循环从两边向中间收拢
## 流程
1. 对新老 VNode 的开始和结束位置进行标记
2. 分情况进行了新老节点的比较并移动对应的 VNode 节点。while 循环的退出条件是直到老节点或者新节点的开始位置大于结束位置。
   1. 当新老 VNode 节点的 start 满足sameVnode 时，直接 patchVnode 即可，同时新老 VNode 节点的开始索引都加1。
   2. 当新老 VNode 节点的 end 满足 sameVnode 时，同样直接 patchVnode 即可，同时新老 VNode 节点的结束索引都减1。
   3. 当老 VNode 节点的 start 和新 VNode 节点的 end 满足 sameVnode 时，这说明这次数据更新后 oldStartVnode 已经跑到了 oldEndVnode 后面去了。这时候在 patchVnode 后，还需要将当前真实 dom 节点移动到 oldEndVnode 的后面，同时老 VNode 节点开始索引加1，新 VNode 节点的结束索引减1。
   4. 当老 VNode 节点的 end 和新 VNode 节点的 start 满足 sameVnode 时，这说明这次数据更新后 oldEndVnode 跑到了 oldStartVnode 的前面去了。这时候在 patchVnode 后，还需要将当前真实 dom 节点移动到 oldStartVnode 的前面，同时老 VNode 节点结束索引减1，新 VNode 节点的开始索引加1。
   5. 如果都不满足以上四种情形，那说明没有相同的节点可以复用，于是则通过查找事先建立好的以旧的 VNode 为 key 值，对应 index 序列为 value 值的哈希表。从这个哈希表中找到与 newStartVnode 一致 key 的旧的 VNode 节点，如果两者满足 sameVnode 的条件，在进行 patchVnode 的同时会将这个真实 dom 移动到 oldStartVnode 对应的真实 dom 的前面；如果没有找到，则说明当前索引下的新的 VNode 节点在旧的 VNode 队列中不存在，无法进行节点的复用，那么就只能调用 createElm 创建一个新的 dom 节点放到当前 newStartIdx 的位置。

# Vue Router
## Vue Router两种模式的区别
### Hash模式
- 原理
  - 基于浏览器的`hashchange`事件，地址变化时，通过 `window.location.hash` 获取地址上的hash值；并通过构造Router类，配置routes对象设置hash值与对应的组件内容。
- 优点
  - hash值会出现在URL中, 但是不会被包含在Http请求中, 因此hash值改变不会重新加载页面
  - hash改变会触发`hashchange`事件, 能控制浏览器的前进后退
  - 兼容性好
- 缺点
  - 地址栏中携带#，不美观
  - 只可修改 # 后面的部分，因此只能设置与当前 URL 同文档的 URL
  - hash有体积限制，故只可添加短字符串
  - 设置的新值必须与原来不一样才会触发hashchange事件，并将记录添加到栈中
  - 每次URL的改变不属于一次http请求，所以不利于SEO优化

### History模式
- 原理
  - 基于HTML5新增的`pushState()`和`replaceState()`两个api，以及浏览器的popstate事件，地址变化时，通过`window.location.pathname`找到对应的组件。并通过构造Router类，配置routes对象设置pathname值与对应的组件内容。
- 优点
  - 没有#，更加美观
  - `pushState()` 设置的新 URL 可以是与当前 URL 同源的任意 URL
  - `pushState()` 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中
  - `pushState()` 通过 `stateObject` 参数可以添加任意类型的数据到记录中
  - `pushState()` 可额外设置 `title` 属性供后续使用
  - 浏览器的进后退能触发浏览器的`popstate`事件，获取`window.location.pathname`来控制页面的变化
- 缺点
  - URL的改变属于http请求，借助`history.pushState`实现页面的无刷新跳转，因此会重新请求服务器。所以前端的 URL 必须和实际向后端发起请求的 URL 一致。如果用户输入的URL回车或者浏览器刷新或者分享出去某个页面路径，用户点击后，URL与后端配置的页面请求URL不一致，则匹配不到任何静态资源，就会返回404页面。所以需要后台配置支持，覆盖所有情况的候选资源，如果 URL 匹配不到任何静态资源，则应该返回app 依赖的页面或者应用首页。
  - 兼容性差，特定浏览器支持

## 路由守卫
### 全局守卫
- 全局前置守卫 beforeEach
  - to：即将要进入的目标路由对象
  - from：当前导航正要离开的路由
  - next：执行下一步
- 全局后置钩子afterEach（少用）
  - 全局后置钩子与全局前置守卫类似，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身
### 路由独享的守卫 beforeEnter
- 使用方法与全局守卫相同
- 不同的是：全局守卫可以作用于全局，路由独享守卫只作用于被设置守卫的路由
## 组件内的守卫
- beforeRouteEnter
- beforeRouteUpdate
- beforeRouteLeave

# Vuex
## 如何在组件中监听Vuex的数据变化
- state 表示需要共享的状态数据
- mutations 表示更改state的方法集合，只能是同步更新，不能写ajax等异步请求
- actions 如果需要做异步请求，可以在actions中发起，然后提交给 mutations，mutation再做同步更新
- 也就是 state 负责管理状态 , mutation负责同步更新状态，action负责异步获取数据和提交给mutation
- 组件监听Vuex数据变化 就是 监听 Vuex中state的变化
- 方案
  - 在组件中通过组件的 watch 方法来做
  - vuex中store对象本身提供了watch函数 ,可以利用该函数进行监听

# Vue-cli
## 入口文件解析
- vue cli搭建的项目本质是一个集成预设置的webpack项目。是webpack驱动着项目的打包，热重载和本地运行。
- 
