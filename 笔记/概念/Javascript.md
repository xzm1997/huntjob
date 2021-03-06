# 异步

## ajax
- Ajax技术核心就是`XMLHttpRequest`对象。
- Ajax技术的工作原理可以分成3步	
    - **创建Ajax对象**：new
    - **发送请求**：open；send
    - **获取响应**：	
      1. 求还没有建立（open执行前）
      2. 请求建立了还没发送（执行了open）
      3. 请求正式发送（执行了send）	
      4. 请求已受理，有部分数据可以用，但还没有处理完成	
      5. 请求完全处理完成
- js是**单线程**的，浏览器是**多线程**的。JavaScript处理异步都是以`callback`的方式

### ajax怎么做到seo友好
- Quickling 技术
  - 在用户点击A链接的时候阻止A链接的默认跳转

## ECMAScript6 `Promise`·
- 参考
  - <a src="https://zhuanlan.zhihu.com/p/26523836">理解JavaScript Promise</a>
### 概念
- **消灭嵌套调用**：通过 `Promise` 的链式调用可以解决；
- **合并多个任务的请求结果**：使用 `Promise.all` 获取合并多个任务的错误处理。
- `Promise` 正是用一种更加友好的代码组织方式，解决了**异步嵌套**的问题。`Promise` 将嵌套调用改为链式调用，增加了可阅读性和可维护性。
### 用法
- `Promise`对象代表一个**异步**操作，有3种状态：等待`pending`、已完成`fulfilled`、已拒绝`rejected`。
- 一个`promise`的状态只可能从**等待**转到**完成**态或者**拒绝**态，不能逆向转换，同时**完成**态和**拒绝**态不能相互转换。
- `promise`必须实现`then`方法（可以说，`then`就是`promise`的核心），而且`then`必须返回一个`promise`，同一个`promise`的`then`可以调用多次，并且回调的执行顺序跟它们被定义时的顺序一致。
- `then`方法接受两个参数，第一个参数是成功时的回调，在`promise`由**等待**态转换到**完成**态时调用，另一个是失败时的回调，在`promise`由**等待**态转换到**拒绝**态时调用。同时，`then`可以接受另一个`promise`传入，也接受一个类`then`的对象或方法，即thenable对象。
- `then`: 分别向`doneList`和`failList`中添加回调函数
- `always`: 添加一个无论成功还是失败都会调用的回调函数
- `Promise.all(iterable)`方法返回一个`Promise`实例，此实例在 `iterable`参数内所有的`promise`都“完成`resolved`”或参数中不包含 `promise`时回调完成`resolve`；如果参数中`promise`有一个失败`rejected`，此实例回调失败`reject`，失败原因的是第一个失败`promise`的结果。
<!-- ### 实现 -->

### `Promise` 的理解和使用
- **概念**
  - 抽象表达: `promise`是ES6中新增的进行异步编程的新的解决方案。而旧的解决方案是纯回调函数
  - 具体表达: 
    - 从语法上来说: `promise`是一个构造函数
    - 从功能上来说: `Promise`是一个容器，容器中存放的是一个异步任务。`Promise`本身不是异步的，它里边的任务是异步的。也就是说`promise`对象用来封装一个异步操作并可以获取其结果
  - `promise`的状态改变(只有2种, 只能改变一次) 
    - 异步任务执行成功，调用`resolve()`，`Promise`会把任务状态从`pending`改为`resolved`。`resolved`，又称 `fulfilled`
    - 异步任务执行失败，调用`reject()`，`Promise`会把任务状态从`pending`改为`rejected`
- **优势**
  - 指定回调函数的方式更加灵活
    - 旧的方式，不用`promise`：必须在启动异步任务前指定
    - 使用`promise`：启动异步任务 => 返回`promise`对象 => 给`promise`对象绑定回调函数(甚至可以在异步任务结束后指定)
  - 支持链式调用, 可以解决回调地狱问题 

### 注意
- Promise的状态在发生变化之后，就不会再发生变化
- `promise.then` 是微任务，它会在所有的宏任务执行完之后才会执行，同时需要promise内部的状态发生变化
- `Promise.resolve`方法的参数如果是一个原始值，或者是一个不具有`then`方法的对象，则`Promise.resolve`方法返回一个新的`Promise`对象，状态为`resolved`
- `Promise`没有返回值，后面的代码不会执行
- Promise返回任意一个非 promise 的值都会被包裹成 promise 对象
- `.then` 或 `.catch` 返回的值不能是 promise 本身，否则会造成死循环。
- `.then` 或`.catch` 的参数期望是函数，传入非函数则会发生**值透传**。
- finally本质上是then方法的特例 `.finally()`方法的回调函数不接受任何的参数，也就是说你在`.finally()`函数中是无法知道Promise最终的状态是`resolved`还是`rejected`的 它最终返回的默认会是一个上一次的Promise对象值，不过如果抛出的是一个异常则返回异常的Promise对象。
- `all`和`race`传入的数组中如果有会抛出异常的异步任务，那么只有最先抛出的错误会被捕获，并且是被`then`的第二个参数或者后面的catch捕获；但并不会影响数组中其它的异步任务的执行。
- 如果`async`函数中抛出了错误，就会终止错误结果，不会继续向下执行。如果想要让错误不足之处后面的代码执行，可以使用catch来捕获
- `.then` 或者 `.catch` 的参数期望是函数，传入非函数则会发生值穿透。

## `Async`和`Await`
- `async`函数是使用`async`关键字声明的函数，允许使用`await`关键字。`async`和`await`关键字让我们可以用一种更简洁的方式写出基于`Promise`的**异步**行为，而无需刻意地链式调用`promise`。
- `async`函数还可以被作为**表达式**来定义。
- 语法：
  ```
  async function name([param[, param[, ... param]]]) {
      statements 
  }
  ```
  - `name`        函数名称。
  - `param`       要传递给函数的参数的名称。
  - `statements`  包含函数主体的表达式。可以使用`await`机制。
  - 返回值: 一个`Promise`，这个`promise`要么会通过一个由`async`函数返回的值被解决，要么会通过一个从`async`函数中抛出的（或其中没有被捕获到的）异常被拒绝。
- `async`函数可能包含0个或者多个`await`表达式。`await`表达式会暂停整个`async`函数的执行进程并出让其控制权，只有当其等待的基于`promise`的异步操作被兑现或被拒绝之后才会恢复进程。`promise`的解决值会被当作该`await`表达式的返回值。使用`async/await`关键字就可以在异步代码中使用普通的`try/catch`代码块。
- `async`函数一定会返回一个`promise`对象。如果一个`async`函数的返回值看起来不是`promise`，那么它将会被隐式地包装在一个`promise`中。
- <a src = "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function">MDN链接</a>
### 示例一：改写
- prmoise：
```
function getProcessedData(url) {
  return downloadData(url) // 返回一个 promise 对象
    .catch(e => {
      return downloadFallbackData(url)  // 返回一个 promise 对象
    })
    .then(v => {
      return processDataInWorker(v); // 返回一个 promise 对象
    });
}
```
- 改写为
```
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}

```


## requestAnimationFrame
- 异步函数
- [ ] TODO: 学习


# 浏览器与前端性能优化

## `URL`加载过程
1. 用户输入网址（假设是个 HTML 页面，第一次访问，无缓存情况），浏览器向服务器发出HTTP请求，服务器返回 HTML 文件； （善用缓存，减少HTTP请求，减轻服务器压力）
2. 浏览器载入 HTML 代码，发现`<head>`内有一个`<link>`引用外部 CSS 文件,则浏览器立即发送CSS文件请求，获取浏览器返回的CSS文件；  （CSS文件合并，减少HTTP请求）
3. 浏览器继续载入 HTML 中`<body>`部分的代码，并且CSS文件已经拿到手了，可以开始渲染页面了；（CSS文件需要放置最上面，避免网页重新渲染）
4. 浏览器在代码中发现一个`<img>`标签引用了一张图片，向服务器发出请求。此时浏览器不会等到图片下载完，而是继续渲染后面的代码；（图片文件合并，减少HTTP请求）
5. 服务器返回图片文件，由于图片占用了一定面积，影响了后面段落的排布，因此浏览器需要回过头来重新渲染这部分代码；（最好图片都设置尺寸，避免重新渲染）
6. 浏览器发现了一个包含一行JavaScript代码的 `<script>` 标签，会立即运行该js代码；（script最好放置页面最下面）                   
7. js脚本执行了语句，它令浏览器隐藏掉代码中的某个 `<div>`,突然就少了一个元素，浏览器不得不重新渲染这部分代码；（页面初始化样式不要使用js控制）   
8. 终于等到了`</html>`的到来，浏览器泪流满面……
9. 等等，还没完，用户点了一下界面中的“换肤”按钮，JavaScript 让浏览器换了一下`<link>`标签的 CSS 路径；
10. 浏览器召集了在座的各位 `<div><span><ul><li>` 们，“大伙儿收拾收拾行李，咱得重新来过……”，浏览器向服务器请求了新的CSS文件，重新渲染页面。

## `reflow`回流与`repaint`重绘
- **`reflow`回流**
  - 浏览器要花时间、花精力去渲染，尤其是当它发现某个部分发生了点变化影响了布局，需要倒回去重新渲染
  - `reflow`回流是导致DOM脚本执行**低效**的关键因素之一。页面上任何一个结点触发`reflow`，都会导致它的子结点及祖先结点重新渲染。
- **`repaint`重绘**
  - 如果只是改变某个元素的背景色、文字颜色、边框颜色等等不影响它周围或内部布局的属性，将只会引起浏览器`repaint`重绘。
  - `repaint`的速度明显快于`reflow`
- 尽量避免`reflow`回流
  -  `reflow`回流是导致DOM脚本执行低效的关键因素之一。页面上任何一个结点触发`reflow`，都会导致它的子结点及祖先结点重新渲染。
  -  **触发回流**：
     -  改变窗囗大小
     -  改变文字大小
     -  添加/删除样式表
     -  内容的改变，如用户在输入框中敲字
     -  激活伪类，如:`hover` (IE里是一个兄弟结点的伪类被激活)
     -  操作class属性
     -  脚本操作DOM
     -  计算`offsetWidth`和`offsetHeight`
     -  设置`style`属性
  - `reflow`是不可避免的，只能将`reflow`对性能的影响减到最小。
    - 尽可能限制`reflow`的影响范围。需要改变元素的样式，不要通过父级元素影响子元素。最好直接加在子元素上。
    - 通过设置`style`属性改变结点样式的话，每设置一次都会导致一次`reflow`。所以最好通过设置`class`的方式。
- **优化**
  - 实现元素的动画，它的`position`属性应当设为`fixed`或`absolute`，这样不会影响其它元素的布局。
  - 权衡速度的平滑。比如实现一个动画，以1个像素为单位移动这样最平滑，但`reflow`就会过于频繁，`CPU`很快就会被完全占用。如果以3个像素为单位移动就会好很多。
  - 不要用`tables`布局的另一个原因就是`tables`中某个元素一旦触发`reflow`就会导致`table`里所有的其它元素`reflow`。在适合用`table`的场合，可以设置`table-layout`为`auto`或`fixed`，这样可以让`table`一行一行的渲染，这种做法也是为了限制`reflow`的影响范围。
  - 很多情况下都会触发`reflow`，如果css里有`expression`，每次都会重新计算一遍。
  - 减少不必要的 DOM 层级（DOM depth）。改变 DOM 树中的一级会导致所有层级的改变，上至根部，下至被改变节点的子节点。这导致大量时间耗费在执行`reflow`上面。
  - 避免不必要的复杂的`CSS`选择器，尤其是后代选择器`descendant selectors`，因为为了匹配选择器将耗费更多的CPU。

## 跨域
- 目的：为了越过同源策略的限制
- 同源协议：
  - 为了安全
  - 为了防止 CSRF(Cross-site request forgery), 中文名为跨站请求伪造，简单来说就是身份盗用
- 只要协议、域名、端口有任何一个不同，都被当作是不同的**域**。
- **完全一致**的意思是，**域名**要相同（`www.example.com`和`example.com`不同），**协议**要相同（`http`和`https`不同），**端口号**要相同（默认是`:80`端口，它和`:8080`就不同）。有的浏览器口子松一点，允许端口不同，大多数浏览器都会严格遵守这个限制。
- **方法**
  1. `CORS`
  `CORS`（Corss-Origin Resource Sharing, 跨资源共享），基本思想是使用自定义的`HTTP`头部让浏览器与服务器进行沟通，从而决定请求或响应的成功或失败。即给请求附加一个额外的`Origin`头部，其中包含请求页面的源信息（协议、域名和端口），以便服务器根据这个头部决定是否给予响应。
  2. `document.domain`
  将页面的`document.domain`设置为相同的值，页面间可以互相访问对方的`JavaScript`对象。
  **注意：**
    - 不能将值设置为`URL`中不包含的域；
    - 松散的域名不能再设置为紧绷的域名。
    - 注意，这种方法只适用于`Cookie`和`iframe`窗口，`LocalStorage`和`IndexDB`无法通过这种方法，规避同源政策，而要使用`PostMessage API`。 
  3. 图像`Ping`**(单向)**
    ```
    var img=new Image();
    img.onload=img.onerror=function(){
    ... ...
    }
    img.src="url?name=value";
    ```
  - 请求数据通过查询字符串的形式发送，响应可以是任意内容，通常是像素图或204响应。
  - 图像`Ping`最常用于跟踪用户点击页面或动态广告曝光次数。
  - **缺点**：
    - 只能发送`GET`请求；
    - 无法访问服务器的响应文本，只能用于浏览器与服务器间的单向通信。
  4. `Jsonp`：解决`ajax`跨域请求
    ```
    var script=document.createElement("script");
    script.src="url?callback=handleResponse";
    document.body.insertBefore(script,document.body.firstChild);
    ```
  - JSONP由两部分组成：**回调函数**和**数据**
    - **回调函数**是接收到响应时应该在页面中调用的函数，其名字一般在请求中指定。
    - **数据**是传入回调函数中的`JSON`数据。
  - **优点**：能够直接访问响应文本，可用于浏览器与服务器间的双向通信。
  - **缺点**：
    - `JSONP`从其他域中加载代码执行，其他域可能不安全；
    - 没有关于JSONP调用的错误处理，一旦回调函数调用失败，浏览器会以静默失败的方式处理。
    - 支持GET请求，这是由于该技术本身的特性所决定的。因此，对于一些需要对安全性有要求的跨域请求，JSONP的使用需要谨慎一点了。
    - 不支持用async:false的方法设置同步。

  5. `Comet`
  - `Comet`可实现服务器向浏览器推送数据。
  - `Comet`是实现方式：**长轮询**和**流**
  - **短轮询**即浏览器定时向服务器发送请求，看有没有数据更新。
  - **长轮询**即浏览器向服务器发送一个请求，然后服务器一直保持连接打开，直到有数据可发送。发送完数据后，浏览器关闭连接，随即又向服务器发起一个新请求。其优点是所有浏览器都支持，使用`XHR`对象和`setTimeout()`即可实现。
  - **流**即浏览器向服务器发送一个请求，而服务器保持连接打开，然后周期性地向浏览器发送数据，页面的整个生命周期内只使用一个`HTTP`连接。
  6. `WebSocket`
     - `WebSocket`可在一个单独的持久连接上提供**全双工**、**双向通信**。
     - `WebSocket`使用**自定义协议**，未加密的连接时`ws://`；加密的链接是`wss://`。
     ```
     var webSocket=new WebSocket("ws://");
     webSocket.send(message);
     webSocket.onmessage=function(event){
     var data=event.data;
     ... ....
     }
     ```
     - **注意**：
       - 必须给`WebSocket`构造函数传入绝对`URL`；
       - `WebSocket`可以打开任何站点的连接，是否会与某个域中的页面通信，完全取决于服务器；
       - `WebSocket`只能发送纯文本数据，对于复杂的数据结构，在发送之前必须进行序列化`JSON.stringify(message)`。
     - **优点**：在客户端和服务器之间发送非常少的数据，减少字节开销。
  7. 使用`window.name`来进行跨域
     - `window`对象有个`name`属性，该属性有个特征：即在一个窗口`window`的生命周期内,窗口载入的所有的页面都是共享一个`window.name`的，每个页面对`window.name`都有读写的权限，`window.name`是持久存在一个窗口载入过的所有页面中的，并不会因新页面的载入而进行重置。
     - 这个属性的最大特点是，无论是否同源，只要在同一个窗口里，前一个网页设置了这个属性，后一个网页可以读取它。 
  8. 使用`HTML5`的`window.postMessage`方法跨域
     - `HTML5`引入了一个全新的`API`：跨文档通信`API`
     - 这个`API`为`window`对象新增了一个`window.postMessage`方法，允许跨窗口通信，不论这两个窗口是否同源。
     - 举例来说，父窗口`http://a.com`向子窗口`http://b.com`发消息，调用`postMessage`方法就可以了。 b页面通过监听`message`事件可以接受到来自a页面的消息。
  9. 使用片段识别符来进行跨域
     - 片段标识符`fragment identifier`指的是，`URL`的`#`号后面的部分，比如`http://example.com/x.html#flag`的`#flag`。如果只是改变片段标识符，页面不会重新刷新。 
     - 父窗口可以把信息，写入子窗口的片段标识符。
  10. webpack
     - webpack使用proxy解决跨域问题。基于webpack-dev-server，只适合开发阶段。
     - proxy 工作原理上市利用 http-proxy-middleware 这个http 代理中间件，实现请求转发给其他的服务器。
- 分类
  - 简单请求：对于简单请求，浏览器直接请求，会在请求头信息中，增加一个origin字段，来说明本次请求来自哪个源（协议+域名+端口）。服务器根据这个值，来决定是否同意该请求，服务器返回的响应会多几个头信息字段
    - 请求方式只能是：GET、POST、HEAD
    - HTTP请求头限制这几种字段：Accept、Accept-Language、Content-Language、Content-Type、Last-Event-ID
    - Content-type只能取：application/x-www-form-urlencoded、multipart/form-data、text/plain
  - 非简单请求：对那种对服务器有特殊要求的请求，比如请求方式是PUT或者DELETE，或者Content-Type字段类型是application/json。都会在正式通信之前，增加一次HTTP请求，称之为**预检**。浏览器会先询问服务器，当前网页所在域名是否在服务器的许可名单之中，服务器允许之后，浏览器会发出正式的XMLHttpRequest请求，否则会报错。
- 为什么只有浏览器（或JS）是有所谓的同源策略？
  - 这是因为浏览器向一个域发起请求时总是会带上这个域及其父域的cookies。于是别有用心的人就可以诱骗你进入一个陌生页面，并向一些你可能登录过的网站发请求，盗取你的信息或做一些敏感操作。
- 补充
  - 同域策略只阻止你读取AJAX返回的内容
  - fetch API可以在发起请求时不携带cookies
  - img和script等标签在现代浏览器中也可以。
  - cors之所以在复杂请求时要发起两个请求，也是为了尽可能地防止不支持cors的服务器无意中认可了cors请求，出现和跨域一样的安全问题。
  - JSONP虽然能够绕过同源策略，但其实和普通的跨域请求一样危险，知名网站有时也会因此出现安全问题。
  - canvas虽然可以绘制跨域来源的图片，但如果这张图片在请求时带上了cookies，那么canvas当中的内容就无法再通过API导出了，这也是为了防止用户的隐私被盗取。
  - 虽然不写端口号在http协议时默认80端口，但如果在不写端口的域上，请求显式写明80端口的域，则这个请求也可能是跨域的，具体情况需要看浏览器实现；
  - 同理https和443也是一样的。script标签在跨域时onerror可能会取不到任何异常详情，这同样是为了保护用户信息安全。
  - WebSocket在连接建立时，浏览器发起的第一个握手请求实际为GET请求，这个请求可以跨域，而且这个请求会自动带上cookies。但在目前浏览器的实现中，开发者的代码无法拿到请求的返回内容。如果在https页面尝试建立非wss的连接，则这个握手请求会被浏览器阻断。对于不支持WebSocket协议的服务器，请求的返回会缺少一些协议规定的信息，此时浏览器会终止WebSocket的建立。细节可以参考相应的RFC。
  - HTTP/2中，携带cookies的请求和不携带cookies的请求在一些浏览器中会被拆分成到不同的连接当中，这一行为会导致一些你认为已经进入客户端cache的资源出现重新下载的情况。
## 业面性能指标
- **白屏时间**（first Paint Time）
  - **概念**
    - 用户从打开页面开始到页面开始有东西呈现为止
    - 白屏会在页面加载之前触发，在这段时间里，不会呈现任何内容和信息给用户。虽然背景色会很快完成绘制，但是实际的内容和交互可能要花很长的时间去加载
    - 白屏时间过长，会让用户认为我们的页面不能用或可用性差。可以通过适当调整页面结构，来优化网页
  - **过程解析**
    - **`DNS Lookup`**, 即浏览器从`DNS`服务器中进行域名查询。浏览器会先对页面进行域名解析，获取到服务器的IP地址后，进而和服务器进行通信。通常在整个加载页面的过程中，浏览器会多次进行`DNS Lookup`，包括页面本身的域名查询以及在解析`HTML`页面时加载的`JS`、`CSS`、`Image`、`Video`等资源产生的域名查询。
    - **建立TCP请求连接**，浏览器和服务端TCP请求建立的过程，是基于`TCP/IP`，该协议由网络层的`IP`和传输层的`TCP`组成。`IP`是每一台互联网设备在互联网中的唯一地址。
    - **服务端请求处理响应**，在`TCP`连接建立后，`Web`服务器接受请求，开始进行处理，同时浏览器端开始等待服务器的处理响应。`Web`服务器根据请求类型的不同，进行相应的处理。静态资源如图片、`CSS`文件、静态`HTML`直接进行响应；如其他注册的请求转发给相应的应用服务器，进行如数据处理、缓存中取数据，将数据按照约定好的格式响应给浏览器。
    - **客户端下载、解析、渲染显示页面**，在服务器返回数据后，客户端浏览器接收数据，进行HTML下载、解析、渲染显示。
      1. 如果是`Gzip`包，则先解压为`HTML`
      2. 解析`HTML`的头部代码，下载头部代码中的样式资源文件或脚本资源文件
      3. 解析`HTML`代码和样式文件代码，构建`HTML`的`DOM`树以及与`CSS`相关的`CSSOM`树
      4. 通过遍历`DOM`树和`CSSOM`树，浏览器依次计算每个节点的大小、坐标、颜色等样式，构造渲染树
      5. 根据渲染树完成绘制过程
    - 浏览器下载`HTML`后，首先解析头部代码，进行样式表下载，然后继续向下解析`HTML`代码，构建`DOM`树，同时进行样式下载。当`DOM`树构建完成后，立即开始构造`CSSOM`树。理想情况下，样式表下载速度够快，`DOM`树和`CSSOM`树进入一个并行的过程，当两棵树构建完毕，构建渲染树，然后进行绘制。
  - **影响因素**：网络，服务端性能，前端页面结构设计
  - **优化**
    - **DNS解析优化**：`DNS`缓存优化、`DNS`预加载策略、稳定可靠的`DNS`服务器
    - **TCP网络链路优化**
    - **服务端处理优化**
    - **浏览器下载、解析、渲染页面优化**：尽可能的精简`HTML`的代码和结构、尽可能的优化`CSS`文件和结构、一定要合理的放置`JS`代码，尽量不要使用内联的`JS`代码
- **首屏时间**
  - 用户浏览器首屏内所有内容都呈现出来所花费的时间
  - 当页面绘制完第一个 `DOM` 内容，会触发首屏，这里的内容可以是文字、图片或者是 `canvas`。
  - 首屏决定了网页的用户体验，因为它会标记实际内容何时加载到页面中，而不仅仅是标记页面的变化状态。因为关注的是内容，所以该指标可以了解用户何时收到消耗性信息，比如文本，视觉效果等，这比通过背景改变或样式改变对用户体验进行评估更有用。
- **用户可操作时间**(dom Interactive)——用户可以进行正常的点击、输入等操作，默认可以统计 `dom ready` 时间，因为通常会在这时候绑定事件操作
- **总下载时间**——页面所有资源都加载完成并呈现出来所花的时间，即页面 `onload` 的时间

## cookie
- cookie的有效时间默认为-1，如果不进行设置的话，就会默认在浏览器会话关闭时结束。
- 可以通过`setMaxAge()`方法设置cookie的生命期。
- 当`setMaxAge(0)`表示立刻删除该浏览器上指定的cookie

## 懒加载
- **原理**：图片进入可视区域之后再去请求图片资源。
  - 懒加载的原理就是在图片进入**可视化区域**之后，动态的去设置`img`标签中的`src`属性。如果在可视区域之外的图片的`img`中的`src`属性已被提前设置，那么就不是懒加载了，而是所有图片都会被加载。
  - 在图片进入可视化区域之前，`img`标签上的`src`属性并没有被设置。在`img`标签上有一个`data-url`属性。该属性的值存放着图片的真实请求地址，但是由于`src`属性上并没有值，所以图片并不会被加载。我们的`js`可以监听`scroll`事件，在计算到图片**进入可视区域**之后。就拿到`img`标签上的`data-url`属性的值，把它设置到`src`属性上，这就是懒加载的一个原理。
- **优势**
  - 对于电商等**图片很多**，**页面很长**的业务场景适用
  - **减少无效资源的加载**：比如我们的页面有100张图片，但是用户往下滑动看的时候只看了十张图片。如果我们把这100张图片全部都加载完成，页面上会有很多的浪费。所以就可以使用懒加载，图片进入可视区域之后再去加载。
  - **并发加载的资源过多会阻塞js的加载**，影响网站的正常使用。因为**浏览器会限制在一个域名下并发请求的数量**。如果前边图片加载数量过多，要发送http请求，就会影响到后边js的并发加载，影响到页面中js逻辑的使用（JS文件一般放在页面底部）。使用图片懒加载可以避免这个问题。
- 参考<a src = "https://blog.csdn.net/weixin_43974265/article/details/115740672">JS实现图片的懒加载</a>

# BOM

## `History` 对象
- `length`返回浏览器历史列表中的`URL`数量
- `back()`加载 history列表中的前一个`URL`
- `forward()` 加载`history`列表中的下一个`URL`
- `go()`加载`history`列表中的某个具体页面

# DOM

## DOM相关
- `innerHTML`：是从对象的起始位置到终止位置的全部内容,包括Html标签。
- `innerText`：从起始位置到终止位置的内容, 但它去除Html标签
- `outerHTML`：除了包含`innerHTML`的全部内容外, 还包含对象标签本身。

## 自定义属性定位/筛选节点
- 除了ID选择器的唯一性和`querySelector`返回单个节点，其余返回节点列表
- `querySelectorAll`
  - `var ele = document.querySelectorAll('[data_name="aa"]')`
  - 此时返回的是一个 `NodeList` 对象
- `getElementsByClassName`
  - `var x = document.getElementsByClassName("demo color");`
  - 返回的是一个节点列表
- `getElementsByTagName`
  - var x = document.getElementsByTagName("p");
  - 返回列表中的元素按照它们在源代码中出现的顺序进行排序。
- `getElementById`
  - `var x = document.getElementById(ID)`
  - 根据元素的 id 属性获取一个元素节点对象
- 元素选择器`display`属性：
  ![display](https://uploadfiles.nowcoder.com/images/20220301/391249040_1646104790622/6273257A4E837042FBC171E31137DFB8)

## `append`用法
- `append(content)`方法
  - 方法作用：向每个匹配的元素内部追加内容。
  - 参数介绍：`content (<Content>)`: 要追加到目标中的内容。
  - 用法示例：
    HTML代码为
    `<p>I come from </p><p>I love  </p>`
    向所有p标签中追加一个单词china，则写法为
    `$("p").append("china");`
    结果为：
    `<p>I come from china</p><p>I love china </p>`
- `appendTo(expr)`方法
  - 方法作用：把所有匹配的元素追加到指定的元素元素集合中。
  - 参数介绍：expr (String): 用于匹配元素的jQuery表达式。
  - 用法示例：
  - HTML代码为
    `<b>I love china </b><p></p>`
    把标签b追加到p元素中，写法为
    `$("b").appendTo("p");`
    结果为：
    `<p><b>I love china </b></p>`
    使用`appendTo`这个方法是颠倒了常规的`$(A).append(B)`的操作，即不是把B追加到A中，而是把A追加到B中。

## `iframe`特点与使用
- 创建比一般的 DOM 元素慢了 1-2 个数量级:
  - `iframe`的创建比其它包括`scripts`和`css`的DOM元素的创建慢了 1-2 个数量级，使用`iframe`的页面一般不会包含太多`iframe`，所以创建DOM节点所花费的时间不会占很大的比重。
  - 但带来一些其它的问题：`onload`事件以及连接池`connection pool`
- 阻塞页面加载:
  - 及时触发 window 的 `onload` 事件是非常重要的。`onload` 事件触发使浏览器的 “忙” 指示器停止，告诉用户当前网页已经加载完毕。当 `onload` 事件加载延迟后，它给用户的感觉就是这个网页非常慢。
  - window 的 `onload` 事件需要在所有 `iframe` 加载完毕后（包含里面的元素）才会触发。在 `Safari` 和 `Chrome` 里，通过 JavaScript 动态设置`iframe`的`SRC`可以避免这种阻塞情况
- 唯一的连接池: 
  - 浏览器只能开少量的连接到web服务器。比较老的浏览器，包含 `Internet Explorer 6 & 7` 和 `Firefox 2`，只能对一个域名`hostname`同时打开两个连接。这个数量的限制在新版本的浏览器中有所提高。`Safari 3+` 和 `Opera 9+` 可同时对一个域名打开 4 个连接，`Chrome 1+`, `IE 8` 以及 `Firefox 3 `可以同时打开 6 个
  - 绝大部分浏览器，主页面和其中的`iframe`是共享这些连接的。这意味着 `iframe`在加载资源时可能用光了所有的可用连接，从而阻塞了主页面资源的加载。如果 `iframe`中的内容比主页面的内容更重要，这当然是很好的。但通常情况下，`iframe`里的内容是没有主页面的内容重要的。这时`iframe` 中用光了可用的连接就是不值得的了。一种解决办法是，在主页面上重要的元素加载完毕后，再动态设置`iframe`的 SRC。
  - 不利于`SEO`:
    - 搜索引擎的检索程序无法解读`iframe`。另外，`iframe`本身不是动态语言，样式和脚本都需要额外导入。
    - 综上，`iframe` 应谨慎使用。

## CSS与JS阻塞`DOM`解析与渲染
- 尽量将CSS放头部，JS放底部，这样可以提高页面的性能。**CSS不会阻塞`DOM`的解析、阻塞页面渲染；JS阻塞`DOM`解析**
- CSS不会阻塞`DOM`的解析: 浏览器是解析`DOM`生成`DOM Tree`，结合CSS生成的`CSS Tree`，最终组成`render tree`（渲染树），再渲染页面。由此可见，在此过程中`CSS`完全无法影响`DOM Tree`，因而无需阻塞`DOM`解析。
- CSS阻塞页面渲染: 基于性能与用户体验的考虑，浏览器会尽量减少渲染的次数，CSS阻塞页面渲染。
- JS阻塞`DOM`解析
  - 优化：按需要加上`defer`或者`async`属性，此时脚本下载的过程中是不会阻塞`DOM`解析的。
- 浏览器遇到`<script>`(JS)标签时，会触发页面渲染
- 参考: <a src = "https://juejin.cn/post/6844903497599549453">原来CSS与JS是这样阻塞DOM解析和渲染的</a>

### DOM事件流
- 事件流所描述的就是从页面中接受事件的顺序。包括事件冒泡和事件捕获。现行的主流是事件冒泡
- **事件冒泡**
  事件冒泡即事件开始时，由最具体的元素接收（也就是事件发生所在的节点），然后逐级传播到较为不具体的节点。
- **事件捕获**
  事件捕获的概念，与事件冒泡正好相反。它认为当某个事件发生时，父元素应该更早接收到事件，具体元素则最后接收到事件。
- DOM事件流包括三个**阶段**。
  - 事件捕获阶段
  - 处于目标阶段
  - 事件冒泡阶段

#### 事件级别
- DOM级别一共有四个级别，分为： DOM0级、DOM1级、DOM2级以及DOM3级。
- DOM事件分为三个级别： DOM0级事件处理、DOM2级事件处理、DOM3级事件处理。

# 事件

## 任务执行顺序
- **同步** -> **异步** -> **回调**
- 异步任务分为宏任务和微任务，微任务优先级高于宏任务。`promise.then`执行的微任务，`setTimeout`是异步宏任务

## 事件循环
- **执行中的线程**：
  - **主线程**：也就是 `js` 引擎执行的线程，这个线程只有一个，页面渲染、函数处理都在这个主线程上执行。
  - **工作线程**：也称幕后线程，这个线程可能存在于浏览器或`js`引擎内，与主线程是分开的，处理文件读取、网络请求等异步事件。
- 事件循环是一个在 JavaScript 引擎**等待**任务，**执行**任务和进入**休眠**状态等待更多任务这几个状态之间转换的无限循环。
- 主线程运行时候，产生堆（Heap）和栈（Stack），栈中的代码调用各种外部 `API`，它们在任务队列中加入各种事件。只要栈中的代码执行完毕，主线程就会通过事件循环机制读取任务队列，依次执行那些事件所对应的回调函数。
- **运行机制**
  - 所有同步任务都在主线程上执行，形成一个**执行栈**
  - 主线程之外，还存在一个**任务队列**。只要异步任务有了运行结果，就**任务队列**之中放置一个事件
  - 一旦**执行栈**中的所有同步任务执行完毕，系统就会读取**任务队列**，看看里面有哪些待执行事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行
  - 主线程不断重复上面的第三步
![事件循环](https://tsejx.github.io/javascript-guidebook/static/workflow.7125d86b.jpg)

## 事件模型
- javascript程序使用的是事件驱动的设计模式，为一个元素添加事件监听函数，当这个元素的相应事件被触发那么其添加的事件监听函数就被调用：事件是javascript和HTML交互基础, 任何文档或者浏览器窗口发生的交互, 都要通过绑定事件进行交互; 所有浏览器都支持DOM0级事件处理程序，且使用该方式时，事件处理程序是在元素的作用域中运行，因此程序中的this都是指向元素。
### DOM0
- 标签内 `onclick` 事件
- JS内 `onlicke=function(){}` 函数
### DOM2
- `addEventListener()`
- `removeEventListener()`
- 三个**参数**
  - 第一个参数是事件名（如`click`, IE是 `onclick`）；
  - 第二个参数是事件处理程序函数；
  - 第三个参数如果是true则表示在捕获阶段调用，为`false`表示在冒泡阶段调用。
- DOM0 与 DOM2 **区别**
  - 只有2级DOM包含3个事件：事件捕获阶段、处于目标阶段和事件冒泡阶段, DOM0 不包含
  - 如果定义了两个dom0级事件，dom0级事件会覆盖
  - dom2不会覆盖，会依次执行
  - dom0和dom2可以共存，不互相覆盖，但是dom0之间依然会覆盖
### DOM3
- DOM3级事件在DOM2级事件的基础上添加了更多的事件类型
  事件类型 | 说明 | 举例
  | :---: | :---: | :---: |
  UI事件 | 当用户与页面上的元素交互时触发 | load、scroll
  焦点事件 | 当元素获得或失去焦点时触发 | blur、focus
  鼠标事件 | 当用户通过鼠标在页面执行操作时触发 | dbclick、mouseup
  滚轮事件 | 当使用鼠标滚轮或类似设备时触发 | mousewheel
  文本事件 | 当在文档中输入文本时触发 | textInput
  键盘事件 | 当用户通过键盘在页面上执行操作时触发 | keydown、keypress
  合成事件 | 当为IME（输入法编辑器）输入字符时触发 | compositionstart
  变动事件 | 当底层DOM结构发生变化时触发 | DOMsubtreeModified
- 为什么没有DOM1级事件处理呢？
  因为1级DOM标准中并没有定义事件相关的内容，所以没有所谓的1级DOM事件模型。

## 事件流
- `dom2` 规定的事件流包括3个阶段：**事件捕获**；处于目标阶段（**事件处理**）；**事件冒泡**阶段

## 事件对象的方法
- `preventDefault()` 取消事件默认行为，如阻止点击提交按钮时对表单的提交
- `stopImmediatePropagation()` 取消事件冒泡同时阻止当前节点上的事件处理程序被调用，影响当前的事件
- `stopPropagation()` 取消事件冒泡，不影响事件
- `cancelBubbe()` 取消事件冒泡
- `returnValue()` 取消事件默认行为

## 事件处理程序
- `btn.onclick = a`     相当于把函数`a`赋值给btn的点击事件处理程序（此时函数`a`不会执行）
- `btn.onclick = a()`   函数`a`执行，打印1并将返回值（函数`b`）赋值给`btn`的点击事件处理程序

## 不能冒泡的9个事件
- `load`
- `unload`
- `mouseenter`
- `mouseleave`
- `blur`
- `focus`
- `error`
- `resize`
- `abort` 从3个角度说可分为**ui事件**、**鼠标移入移出事件**、**聚焦和失焦件**

## 事件触发
事件|说明
| :---: | :---: |
`onfocus` | 获取焦点时 一般在`<input>` `<select>` `<a>` 使用
`onBlur` | 元素失去焦点时 一般用于表单输入框
`onSubmit` | 在提交 一般用于`<form>`
`onKeyDown` | 键盘按键时触发

## 常用事件
1. **点击事件**
   1. `onclick`：单击事件
   2. `ondblclick`：双击事件
   3. `oncontextmenu`：浏览者按下鼠标右键出现菜单时或者通过键盘的按键触发页面菜单时触发的事件
2. **焦点事件**
   1. `onblur`：失去焦点
   2. `onfocus`:元素获得焦点。
3. **加载事件**
   1. `onload`：一张页面或一幅图像完成加载。
4. **鼠标事件**
   1. `onmousedown`：鼠标按钮被按下。
   2. `onmouseup`：鼠标按键被松开。
   3. `onmousemove`：鼠标被移动。
   4. `onmouseover`：鼠标移到某元素之上。
   5. `onmouseout`：鼠标从某元素移开。
5. **键盘事件**
   1. `onkeydown`：某个键盘按键被按下。    
   2. `onkeyup`：某个键盘按键被松开。
   3. `onkeypress`：某个键盘按键被按下并松开。
6. **选择和改变**
   1. `onchange`：域的内容被改变。
   2. `onselect`：文本被选中。
7. **表单事件**
   1. `onsubmit`：确认按钮被点击。
   2. `onreset`：重置按钮被点击。
8. **`touch`事件**
   1. `ouchstart`: 手指放到屏幕上时触发
   2. `touchmove`: 手指在屏幕上滑动式触发
   3. `touchend`: 手指离开屏幕时触发
   4. `touchcancel`: 系统取消`touch`事件的时候触发，比较少用

## 事件绑定
- 三种**方式**
  - 使用内联
  - 使用`.onclick`的方式
  - 使用**事件监听**`addEventListener`的方式
    - 可以绑定多个事件，常规的事件绑定只执行最后绑定的事件。
    - 可以解除相应的绑定

## 事件委托（事件代理）
- 事件委托就是利用冒泡的原理，把事件加到父元素或祖先元素上，触发执行效果。
- 优点
  - 提高JavaScript性能。事件委托可以显著的提高事件的处理速度，减少内存的占用。 实例分析JavaScript中的事件委托和事件绑定 ，这篇文章写得还不错。
  - 动态的添加DOM元素，不需要因为元素的改动而修改事件绑定。

## window.postMessage
- window.postMessage() 方法可以安全地实现跨源通信
- 宏任务

# 原型

## `prototype` 与 `__proto__` 
- **关系**
  - 函数（或构造函数）身上才有 `prototype` （`prototype`名字叫原型，原型是一个对象）；
  - 而其他任何通过构造函数实例化出来的对象(不包括`null`、`undefined`）身上都有 `__proto__`（`__proto__`是隐式原型，隐式原型也一个对象）
  - 实例化对象的 `__proto__` 就是 构造函数的 `prototype` （`===`关系）
  - **附**：`undefind` 和 `null` 既没有`prototype`也没有 `__proto__`，因为它俩不是函数，也不是函数实例化出来的对象
- **原型5个原则**
  - 所有的引用类型（数组、对象、函数），都具有**对象特性**，即可自由扩展属性
  - 所有的引用类型（数组、对象、函数），都有一个`__proto__`（**隐式原型**）属性，属性值是一个普通的对象
  - 所有的函数，都有一个`prototype`（**显式原型**）属性，属性值也是一个普通对象
  - 所有的引用类型（数组、对象、函数），`__proto__`属性值指向（完全相等）它的构造函数的`prototype`属性值
  - 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去`__proto__`（即它的构造函数的`prototype`中）寻找。

## 原型重写
- 重写原型对象**切断**了现有原型与任何之前已经存在的实例之间的联系，他们引用的仍然是最初的原型
- 如果构造函数没有`x`去原型下找
- 如果有`x`但是没有赋值，则是`undefined`,相当于`x=undefined`.就不会进入原型链了

## 原型
- 原型是一个从其他对象**继承属性**的对象。一个函数被定义的时候，同时会有一个对应的`prototype`出现
- 所有的引用类型（数组、对象、函数），都具有对象特性，即可自由扩展属性（除了`null`以外）
- 所有的引用类型（数组、对象、函数），都有一个`__proto__（`隐式原型）属性，属性值是一个普通的对象
- 所有的函数，都有一个`prototype`（显式原型）属性，属性值也是一个普通对象
- 所有的引用类型（数组、对象、函数），`__proto__`属性值指向（完全相等）它的构造函数的`prototype`属性值
- 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去`__proto__`（即它的构造函数的`prototype`中）寻找。

## 原型链
![示意图](https://images2018.cnblogs.com/blog/1265396/201711/1265396-20171127082821065-1506469155.png)
- **原型链**是原型组成的链，对象的`__proto__`它的是原型，而原型也是一个对象，也有`__proto__`属性，原型的`__proto__`又是原型的原型，就这样可以一直通过`__proto__`向上找，当向上找找到`Object`的原型时停止。
- 实例就是**对象**，实例通过`new`一个构造函数生成的。
- 实例的`__proto__`指向的是原型对象。
- 实例的构造函数的`prototype`也是指向的原型对象。
- 原型对象的`construor`指向的是构造函数。
- 通过一个构造函数创建出来的多个实例，如果都要添加一个方法，给每个实例去添加并不是一个明智的选择。这时就该用上原型了。在实例的原型上添加一个方法，这个原型的所有实例便都有了这个方法。
- 只有函数有`prototype`,对象是没有的。但是函数也是有`__proto__`的，因为函数也是对象。函数的`__proto__`指向的是`Function.prototype`。
- **原型链继承**：如果属性有引用类型的，改变一个，则其他的也会跟着改变
- `null` 没有原型，并作为这个原型链中的最后一个环节。
- 几乎所有 JavaScript 中的对象都是位于原型链顶端的 `Object` 的实例。
- JavaScript 并没有其他基于类的语言所定义的“方法”。在 JavaScript 里，任何函数都可以添加到对象上作为对象的属性。函数的继承与其他的属性继承没有差别，包括上面的“属性遮蔽”
![phototype](https://pic1.zhimg.com/80/e83bca5f1d1e6bf359d1f75727968c11_1440w.jpg?source=1940ef5c)

## `new`运算符
- 一个新对象被**创建**。它继承自`foo.prototype`。
- 构造函数返回一个对象。在执行的时候，相应的传参会被传入，同时上下文`this`会被指定为这个新的实例。
- `new foo`等同于`new foo()`, 只能用在不传递任何参数的情况
- 如果构造函数返回了一个对象，那个这个对象会取代整个`new`出来的结果。如果构造函数没有返回对象，那个`new`出来的结果为`步骤1`创建的对象。

## 继承
- JavaScript实现继承共6种方式：**原型链继承**、**借用构造函数继承**、**组合继承**、**原型式继承**、**寄生式继承**、**寄生组合式继承**。
- **参考**: <a src = "https://www.cnblogs.com/Leophen/p/11401734.html">JavaScript实现继承的6种方式</a>

# 对象
- 在JavaScript中一个对象是以键值对保存的任意的无序集合。如果它不是**原始类**（`undefined`,`null`,`boolean`,`number`或`string`）,它就是一个**对象**。

## 如何判断一个对象是否为`Array`
- `typeof`：不可行，返回`object`
- `instanceof`：在多全局对象（跨`frame`对象构建或多个`window`）的场景下会失效
  - instanceof会检查整个原型链，将沿着A(左)的__proto__这条线来一直找，同时沿着B(右)的prototype这条线来一直找，直到能找到同一个引用，即同一个对象，那么就返回true。如果找到终点还未重合，则返回false。
- `Object.prototype.toString.call(obj) === '[object Array]'`; 

## 对象
- **内部对象**：`Array`、`Boolean`、`Date`、`Function`、`Global`、`Math`、`Number`、`Object`、`RegExp`、`String`以及各种错误类对象，包括`Error`、`EvalError`、`RangeError`、`ReferenceError`、`SyntaxError`和`TypeError`。
- **宿主对象**：宿主对象就是执行JS脚本的环境提供的对象。对于嵌入到网页中的JS来说，其宿主对象就是浏览器提供的对象，所以又称为浏览器对象，如IE、Firefox等浏览器提供的对象。不同的浏览器提供的宿主对象可能不同，即使提供的对象相同，其实现方式也大相径庭！这会带来浏览器兼容问题，增加开发难度，如`Window`和`Document`，`Element`，`form`，`image`，等等。
- **自定义对象**：开发人员自己定义的对象。JS允许使用自定义对象，使JS应用及功能得到扩充

## 全局声明
- 与 var 关键字不同，使用 let 在全局作用域中声明的变量不会成为 window 对象的属性（var 声明的变量则会）
- 注意：函数中`var a = b = 3;`a为局部变量，b为全局变量;
- 标准模式下，当函数里面的变量没有定义时候会调用全局变量
- `var a = 1` 声明了一个全局变量
- 'a = a' 创建了一个全局对象的属性

## 数字
- JavaScript内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。
- Javascript中，由于其变量内容不同，变量被分为基本数据类型变量和引用数据类型变量。基本类型变量用八字节内存，存储基本数据类型(数值、布尔值、`null`和未定义)的值，引用类型变量则只保存对对象、数组和函数等引用类型的值的引用(即内存地址)。
- JS中的数字是不分类型的，也就是没有`byte/int/float/double`等的差异。
### BigInt
- `BigInt` 是一种特殊的数字类型，它提供了对**任意长度整数**的支持。
- **创建**：
  - 在一个整数字面量后面加 `n`
    `const bigint = 1234567890123456789012345678901234567890n;`
  - 调用 `BigInt` 函数，该函数从字符串、数字等中生成 `bigint`。
    `const sameBigint = BigInt("1234567890123456789012345678901234567890");`

## var
- 允许重复声明

## let
- **不存在变量提升**
- **暂时性死区**
  - 只要块级作用域内存在、它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
  - ES6 明确规定，如果区块中存在`let`和`const`命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
- **不允许重复声明**
- 无法`delete()`

## Proxy
- Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义

## Reflect
- Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与proxy handlers (en-US)的方法相同。Reflect不是一个函数对象，因此它是不可构造的。

## Boolean类型转换
- 对于`String`:只有非空字符串为真
- 对于`Number`:除了`0`和`NaN`之外都为真
- 对于`Boolean`:`true`为真
- 对于`Object`:除了`null`之外都为真
- `undefined`为`false`;
- 在关系运算符中，`null`，`undefined`会被`Number()`强制转换成数字类型；
- 在相等运算符中，`null`，`undefined`则不会转化为数字类型，而是经过特殊处理后转化为`false`
- 任何对象转为布尔值，都为得到 `true`，在`JS`中，只有`0`，`-0`，`NaN`，`""`，`null`，`undefined`这六个值转布尔值时，结果为`false`

## `Number()`类型转换
```
console.log(Number(""));            //0
console.log(Number(null));          //0
console.log(Number(undefined));     //NaN

console.log(parseInt(""));          //NaN
console.log(parseInt(null));        //NaN
console.log(parseInt(undefined));   //NaN

console.log(null == 0);             //false
console.log(undefined == 0);        //false
```

## JS数据类型
- 基本数据类型（简单数据类型）
    - 存储在栈中的简单数据段
    - `Undefined`、`Null`、`Boolean`、`Number` 、`string`、`Symbol`
- 引用数据类型（复杂数据类型）
    - 存储在堆中的对象，存储在栈中的值是一个指针，指向 存储对象的内存地址
    - 函数，对象，数组等
- `Symbol`本质上是一种唯一标识符，可用作对象的唯一属性名，这样其他人就不会改写或覆盖你设置的属性值。
  - `Symbol`数据类型的特点是唯一性，即使是用同一个变量生成的值也不相等
    ```
    let id1 = Symbol('id');
    let id2 = Symbol('id');
    console.log(id1 == id2);  //false
    ```
  - `Symbol`数据类型的另一特点是隐藏性，`for···in`, `object.keys()` 不能访问
    ```
    let id = Symbol("id");
    let obj = {
    [id]:'symbol'
    };
    for(let option in obj){
        console.log(obj[option]); //空
    }
    ```
  - 内部没有`construtor`构造器，不能使用`new`关键字创建
  - 注意
    - Symbol值不能与其他类型的值进行运算
    - Symbol 值不可以和其他类型值进行混合运算,否则会报错
    - Symbol 值如果想要作为属性名，那就不能再用点运算符，因为点运算符后面跟的总是字符串
    - 在对象内部使用Symbol 值作为属性名的时候，必须要将值放在方括号中
  - **参考**：<a src = "https://blog.csdn.net/qq_33408245/article/details/82953143">js中的Symbol数据类型</a>
- `typeof` 能判断**类型**有：`number`、`string`、`boolean`、`symbol`、`undefined`、`function`；
- 原始值是存储在栈中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。 
- 引用值是存储在堆中的对象，也就是说，存储在变量处的值是一个指针，指向存储对象的内存处。
- ECMAScript5中有5种原始类型，即`undefined`、`null`、`number`、`string`、`boolean`。
![数据类型](https://uploadfiles.nowcoder.com/images/20190903/8018242_1567479495575_D3936A1FC6EBC59323A9A311B6076ABF)

## 变量与函数提升
- javascript只有函数作用域， 没有块作用域
- 会将当前作用域的所有变量的声明提升到程序的顶部
- 变量声明、函数声明都会被提升到作用域顶处； 
- 当出现相同名称时，**优先级**为：变量声明``foo#1`` < 函数声明``foo#2`` < 变量赋值``foo#3``
- 在函数内部可以不声明，就是隐式全局变量。
- 函数会先去找自己内部的变量，内部有就不会往外面找，内部没有才去外面找


## `undefined`和`null`
- `undefined`和`null`与任何有意义的值比较返回的都是`false`，但是null与`undefined`之间互相比较返回的是`true`。
- `undefined`值是派生自`null`值的，因此`ECMA-262`规定对它们的相等性测试要返回`true`。
  ```
  undefined == null     //true;
  undefined === null    //false
  ```

## 正则表达式
### 符号
  符号|解释|属性
  | :---: | :---:| :---:|
  `var obj=/ /`|创建正则对象；即赋值被注释掉，及运行被结束
  `/正则表达式主体/修饰符`|可选属性
  `i`|执行对大小写不敏感的匹配；| 修饰符
  `g`|执行全局匹配<br> 查找所有匹配而非在找到第一个匹配后停止 | 修饰符
  `m`|执行多行匹配| 修饰符
  `y` | 全局匹配。ES6新增 | 修饰符
  `[abc]`|查找方括号之间的任何字符。
  `[0-9]`|查找任何从 0 至 9 的数字
  `()` | 查找`()`中内容
  `(x\|y)`|查找任何以 `\|` 分隔的选项
  `\d`|查找数字
  `\D` |匹配一个非数字字符
  `\s`|查找空白字符
  `\b`|匹配单词边界
  `\w`|匹配字母数字或下划线
  `\W`|表示除了字母、数字下划线的字符
  `\uxxxx`|查找以十六进制数 `xxxx` 规定的 `Unicode` 字符
  `/^/`|匹配输入的开始
  `/[^]/`|表示非
  `$`|匹配输入的结束。
  `*`|匹配前一个表达式 0 次或多次。等价于`{0，}`
  `+`|匹配前面一个表达式 1 次或者多次。等价于`{1，}`
  `?`|非贪心的匹配前面一个表达式 0 次或者 1 次。等价于`{0，1}`
  `.`|默认匹配除换行符之外的任何单个字符。
  `{ }`|个数
  `\1`|对第一个捕获组的引用
  `$1`|第一个分组的值

### 方法
- **新建**
  - `var regex = /xyz/g;`
  - `var regex = new RegExp('xyz', 'i');`
- **`test()`**：正则实例对象的`test`方法返回一个布尔值，表示当前模式是否能匹配参数字符串。
    `/cat/.test('cats and dogs') // true`
- **`exec()`**：正则实例对象的`exec`方法，用来返回匹配结果。如果发现匹配，就返回一个数组，成员是匹配成功的子字符串，否则返回`null`。
    ```
    var s = '_x_x';
    var r1 = /x/;
    var r2 = /y/;

    r1.exec(s) // ["x"]
    r2.exec(s) // null
    ```
- **`match()`**：字符串实例对象的match方法对字符串进行正则匹配，返回匹配结果。
    ```
    var s = '_x_x';
    var r1 = /x/;
    var r2 = /y/;

    s.match(r1) // ["x"]
    s.match(r2) // null
    ```
- **`search()`**：字符串对象的`search`方法，返回第一个满足条件的匹配结果在整个字符串中的位置。如果没有任何匹配，则返回`-1`。
  `'_x_x'.search(/x/)  // 1`
- **`replace()`**：字符串对象的`replace`方法可以替换匹配的值。它接受两个参数，第一个是正则表达式，表示搜索模式，第二个是替换的内容。正则表达式如果不加g修饰符，就替换第一个匹配成功的值，否则替换所有匹配成功的值。
    `str.replace(search, replacement);`
- **`split()`**：字符串对象的split方法按照正则规则分割字符串，返回一个由分割后的各个部分组成的数组。
    `str.split(separator, [limit])`


## JavaScript的命名规则
- 必须以**字母**、**美元符号**或者**下划线**开头，中间可以是**数字**、**字母**、**下划线**、**美元符号**
- 变量名不能包含**空格**、**加号**、**减号**等符号
- 不能使用JavaScript中的关键字
- JavaScript的变量名是严格区分大小写的

## `Array`方法
- **会改变**数组的方法：
  方法|实例|说明
  | :---: | :---: | :---: |
  `push()`      ||将新元素添加到数组的末尾，并返回新的长度。
  `pop()`       ||删除数组的最后一个元素，并返回该元素。
  `shift()`     ||删除数组的第一个元素，并返回该元素。
  `unshift()`   ||将新元素添加到数组的开头，并返回新的长度。
  `splice()`    ||从数组中添加/删除元素。
  `sort()`      |`arr.sort((a, b) => a - b);`|函数返回排序后的`array`
  `reverse()`   ||反转数组中元素的顺序。
  `forEach()`   ||为每个数组元素调用函数。
  `fill()`      |`arr.fill(value, start, end)`|从索引 `start` 到 `end`，用重复的 `value` 填充数组。S
  `some()`      |`arr.some(fn)`|检测数组是否有元素符合指定条件，有一个符合就返回`true`
  `every()`     |`arr.every(fn)`|检测数组所有元素是否都符合指定条件，一个不符合就返回`false`
- **不会改变**数组的方法：
  方法|实例|说明
  | :---: | :---: | :---: |
  `filter()`    |`arr.filter(fn)`|使用数组中通过测试的每个元素创建新数组。
  `concat()`    ||函数连接多个`array`，不改变原`array`，返回连接的结果
  `slice()`     ||选择数组的一部分，并返回新数组。
  `map()`       ||函数对`array`中的每一项执行指定函数，将每一项执行的结果组成新的`array`返回
- 数组就是对象，对象不能用`length`返回其拥有的属性数量

## 字符串
- `.toString()`将会优先将小数点解析为数字小数点
- 因为连续的两个小数点不符合`number`的格式规则，第二个小数点才会被解析为调用方法

## class
- **类**是用于创建对象的模板。他们用代码封装数据以处理该数据。 JS中的类建立在原型上，但也具有某些语法和语义未与ES5类相似语义共享。
- 实际上，类是“特殊的函数”，就像你能够定义的函数表达式和函数声明一样，类语法有两个组成部分：类表达式和类声明。
- `class`和`let`一样都有暂时性死区
  - **在被声明前无法访问**。也就是在当前作用域能找到，但是要在声明后才能访问。`es6`中的`class`和`let` `const`一样都不存在提升
  - 暂时性死区的问题矛头都指向了一个**原则**：先声明，后使用，不存在变量声明提升。
- 每个类中包含了一个特殊的方法 constructor()，它是类的构造函数，这种方法用于创建和初始化一个由 class 创建的对象。

### extends
- Class 可以通过extends关键字实现继承 这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。
- super关键字，它在这里表示父类的构造函数， 用来新建父类的this对象。
- ES6 要求，子类的构造函数必须执行一次super函数。子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用super方法，子类就得不到this对象。
- 只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，是基于对父类实例加工，只有super方法才能返回父类实例

## 映射和集合
### `Map` 映射
- `Map` 是一个**带键的数据项的集合**，就像一个 `Object` 一样。 但是它们最大的差别是 `Map` 允许任何类型的键`key`。
- **方法与属性**
  名称|说明
  | :---: | :---: |
  `new Map()`|创建 `map`。
  `map.set(key, value)`|根据键存储值。
  `map.get(key)`|根据键来返回值，如果 `map` 中不存在对应的 `key`，则返回 `undefined`。
  `map.has(key)`|如果 `key` 存在则返回 `true`，否则返回 `false`。
  `map.delete(key)`|删除指定键的值。
  `map.clear()`|清空 `map`。
  `map.size`|返回当前元素个数。
  `map.keys()`|遍历并返回所有的键
  `map.values()`|遍历并返回所有的值
  `map.entries()`|遍历并返回所有的实体`[key, value]`，`for..of` 默认使用
- **注意**：
  - `map[key]` 不是使用 `Map` 的正确方式，应该使用 `map` **方法**：`set` 和 `get` 等。
  - `Map` 还可以**使用对象作为键**。在 `Object` 中，我们则无法使用对象作为键。在 `Object` 中使用字符串作为键是可以的，但我们无法使用另一个 `Object` 作为 `Object` 中的键。
  - **迭代**的**顺序**与插入值的顺序相同。与普通的 `Object` 不同，`Map` 保留了此顺序。
  - `Map` 有内建的 `forEach` 方法，与 `Array` 类似
### `Set` 集合
- Set 是一个特殊的类型集合: “值的集合”（**没有键**），它的**每一个值只能出现一次**。
- **方法与属性**
  名称|说明
  | :---: | :---: |
  `new Set(iterable)`|创建一个 `set`，如果提供了一个 `iterable` 对象（通常是数组），将会从数组里面复制值到 `set` 中。
  `set.add(value)`|添加一个值，返回 `set` 本身
  `set.delete(value)`|删除值，如果 `value` 在这个方法调用的时候存在则返回 `true` ，否则返回 `false`。
  `set.has(value)`|如果 `value` 在 `set` 中，返回 `true`，否则返回 `false`。
  `set.clear()`|清空 `set`。
  `set.size`|返回元素个数。
  `set.keys()`|遍历并返回所有的值
  `set.values()`|与 `set.keys()` 作用相同，这是为了兼容 Map，
  `set.entries()`|遍历并返回所有的实体`[value, value]`，它的存在也是为了兼容 `Map`。
- **注意**：
  - 它的主要特点是，重复使用同一个值调用 `set.add(value)` 并不会发生什么改变。这就是 `Set` 里面的**每一个值只出现一次**的原因。
  - 可以使用 `for..of` 或 `forEach` 来遍历 `Set`

## `Undefined`、`NaN` 和 `Null`
- `undefined` 属性
  - 用于存放 JavaScript 中未定义的值，它表示变量声明过但并未赋过值
  - 无论什么情况下都没有必要把一个变量的值显式地设置为`undefined`，但是设置这个值为 `Null` 可以释放这个对象的内存，把此变量的指针设置为空。
- `NaN`
  - `NaN` 即非数值（Not a Number），NaN 属性与 `Number.Nan` 属性相同。
  - 请使用 `isNaN()` 来判断一个值是否是数字。原因是 `NaN` 与所有值都不相等，包括它自己。但是在`Set`集合中`NaN`被判定为和它自己相等。
- `Null`
  - 在 JavaScript 中 `null` 表示 "什么都没有"。
  - `null` 是一个只有一个值的特殊类型。表示一个空对象引用。
  - 从逻辑角度来看，`null` 值表示一个空对象指针，而这也正是使用 `typeof` 操作符检测 `null` 值会返回`object`的原因。
  - 用 `typeof` 检测 `null` 返回是`object`。`null` 和 `undefined` 的值相等，但类型不等

## `valueOf`与`toString`
- valueOf: 返回对象的原始值表示
- toString: 返回对象的字符串表示

## `Arguments` 对象
- `arguments` 是一个对应于传递给函数的参数的类数组对象。
- `arguments` 对象是所有（非箭头）函数中都可用的局部变量
- `arguments` 对象不是一个 `Array` 。它类似于`Array`，但除了`length`属性和索引元素之外没有任何`Array`属性。例如，它没有 `pop` 方法。但是它可以被转换为一个真正的`Array`
  ```
  var args = Array.prototype.slice.call(arguments);
  var args = [].slice.call(arguments);

  // ES2015
  const args = Array.from(arguments);
  const args = [...arguments];
  ```

## `New`
- 创建一个空对象
- 把这个空对象的`__proto__`指向构造函数的`prototype`
- 把这个空对象赋值给`this`
- 执行构造函数内的代码，注意此时的`this`指向新对象

### 调用new的过程
- 首先创建了一个新的空对象
- 设置原型，将对象的原型设置为函数的 `prototype `对象。
- 让函数的` this` 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
- 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

## `Object`
### Object.defineProperty()
- `Object.defineProperty()` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
- 语法：`Object.defineProperty(obj, prop, descriptor)`

# 函数
## 运算符
### `^`
- :house: 异或运算

## 相关概念
### 立即执行函数
- :house: **定义**：声明一个函数，并马上调用这个匿名函数就叫做立即执行函数；即立即执行函数是定义函数以后立即执行该函数。
- **立即函数的写法**
  - JS引擎规定，如果`function`出现在行首，一律解析成语句。
  ```
  // 立即执行函数的两种写法
  // 第一种：用括号把整个函数定义和调用包裹起来
  (function(){
  // function body
  }())

  // 第二种：用括号把函数定义包裹起来，后面再加括号
  (function (){
  //function body
  })()
  ```
  - 上边的两种写法，就是立即执行函数的两种写法，都是以圆括号开头，引擎会意味后面跟的是表达式，而不是一个函数定义语句，所以就避免了错误，这就叫做**立即调用的函数表达式**。
  - 立即执行函数一般也写成**匿名函数**，匿名函数写法为`function(){/…/}`，所谓匿名函数，就是使用`function`关键字声明一个函数，但未给函数命名，倘若需要传值，直接将参数写到括号内即可。
  ```
  // 其它写法
  (function foo(){console.log("Hello World!")}())     // 用括号把整个表达式包起来,正常执行
  (function foo(){console.log("Hello World!")})()     // 用括号把函数包起来，正常执行
  !function foo(){console.log("Hello World!")}()      // 使用！，求反，这里只想通过语法检查。
  +function foo(){console.log("Hello World!")}()      // 使用+，正常执行
  -function foo(){console.log("Hello World!")}()      // 使用-，正常执行
  ~function foo(){console.log("Hello World!")}()      // 使用~，正常执行
  void function foo(){console.log("Hello World!")}()  // 使用void，正常执行
  new function foo(){console.log("Hello World!")}()   // 使用new，正常执行
  ```
- **作用**
  - 不必为函数命名，避免了**污染**全局变量
  - 立即执行函数内部形成了一个**独立的作用域**，可以封装一些外部无法读取的私有变量，这个作用域里面的变量，外面访问不到，这样就可以避免变量污染
  - **封装**变量
  - **闭包**和私有数据
- **注意**
  - 可以定义全局变量，且不被销毁
  - 立即执行的函数表达式中`this`指向全局也就是`window` **:four:**

### 逗号表达式
- 逗号表达式只有**最后一项**是**有效**的

### 函数声明
- js里面**没有函数重载的概念**，在其他语言中（如java）中，可以存在同名函数，只要传入的参数数量或者类型不同即可。
- 在js中，定义了两个同名函数后，后面的函数会**覆盖**前面定义的函数。
- 由于函数声明提升，所以**函数声明会提前**，由于存在同名函数，后面的`add`函数将覆盖第一个`add`函数，所以两次调用`add()`返回的值是相同的。

### 函数调用
![函数调用](https://uploadfiles.nowcoder.com/images/20170213/3936586_1486951174438_2E756A236D128A21111515CF5E316E41)

函数声明
```javascript
function sum(a,b){
    return a+b
}
```
函数表达式
```javascript
var sum = function(a,b){
    return a+b
}
```
`Function` 构造函数【从技术角度讲，这是一个函数表达式】
```javascript
var sum = new Function('a','b','return a+b')//不推荐使用，影响函数解析性能
```

## JavaScript的全局函数
类型|个数|函数名
| :---: | :---: | :---: |
编码相关|6|`escape()` `unescape()` `encodeURI()` `decodeURI()` `encodeURIComponent()` `decodeURIComponent()`
数据处理|2|`Number()` `String()`
数字相关|4|`isFinite()` `isNaN()` `parseFloat()` `parseInt()`
特殊|1|`eval()`
![具体含义](https://uploadfiles.nowcoder.com/images/20170807/6690215_1502068310572_072774B6B658B3603E1AA7198722775C)

## 常用函数
### Math.max(x)
- 函数 `Math.max(x)`;的参数是`Number`类型，可以是小数，整数，正数，负数或者是0.如果不是上面所述类型就会返回`NaN`.

### 取整
- `Math.round(x)`
  - 如果参数的小数部分等于0.5，则舍入到下一个在正无穷方向上的整数
  - 与很多其他语言中的`round()`函数不同，`Math.round()`并不总是舍入到远离0的方向
  - `parseInt`转换为整数
  - `floor`向下取整
  - `ceil`向上取整
  - `split`操作数必需为正则或字符串

### `in`运算符
- 如果指定的属性在指定的对象或其原型链中，则in 运算符返回true。

### constructor 
- `constructor` 是构造函数属性
- 它是原型属性 `prototype`所指向的那个对象的属性
- Number 对象本身可作为构造函数
- 通过`Object[key] = value`; 形式给`constructor`对象添加`key = 1`属性,对应的`value = 123`

### setTimeout
- `setTimeout()`方法接收两个参数，第一个参数可以是包含JavaScript代码的字符串，或者是一个函数。第二个参数表示等待多长时间的毫秒数将当前任务添加到队列中。
  ```
  setTimeout("go()", 10);  //等待10毫秒执行go函数
  setTimeout(go, 10);       //等待10毫秒执行go函数
  setTimeout(go(), 10);    //立即执行go函数, 执行的结果作为返回值传递给settimeout
  ```
- 关于引号问题：
  - 带引号，该方法在全局环境中寻找；
  - 不带引号，该方法在局部环境中寻找。
  ```
  setTimeout('fn()', 1000); // 全局变量
  setTimeout(fn, 1000); // 局部变量
  setTimeout(fn(), 1000); // 立即执行，执行的结果作为返回值传递给settimeout。
  ```
- 放入任务队列，即使延迟设置为0，也是最后执行
- 每次`for`循环的时候`setTimeout`都会执行，因为`setTimeout`是异步函数，里面的`function`则不会立即执行，而是会被放入任务队列
- 只有主线上的全部执行完，才会执行任务队列里的任务
- `let`有自己的作用域，不同于`var`
- 严格模式下，`setTimeout`中函数的`this`指向的`window`

### setInterval
- setInterval 是一个宏任务, 推入任务队列后的时间不准确
- 会在 N 秒之后被推入任务队列，在 setInterval 被推入任务队列时，如果在它前面有很多任务或者某个任务等待时间较长比如网络请求等，那么这个定时器的执行时间和我们预定它执行的时间可能并不一致。相差的时间是越来越大的，**越来越不准确**
- 考虑极端情况，假如定时器里面的代码需要进行大量的计算(耗费时间较长)，或者是 DOM 操作。这样一来，花的时间就比较长，有可能前一次代码还没有执行完，后一次代码就被添加到队列了。也会到时定时器变得不准确，甚至出现同一时间**执行两次**的情况。
- 综上所述，setInterval 有两个缺点：
  - 使用 setInterval 时，某些间隔会被跳过；
  - 可能多个定时器会连续执行；
- 解决方法：setTimeout 模拟 setInterval
  - 在前一个定时器执行完前，不会向队列插入新的定时器
  - 保证定时器间隔

### `== ===`区别
- `==`判断相等
- `===`绝对相等，先比较数据类型是否一样，更加绝对意义上的相等，不会发生自动类型转换
```
NaN == NaN // false
NaN === NaN // false
// indexOf方法无法识别数组的NaN成员
[NaN].indexOf(NaN) // -1
```
- 赋值操作符`=`的优先级小于三元操作符的优先级
- `Object.is()`，其行为与`===`基本一致，不过有两处不同： +0不等于-0。 `NaN`等于自身。
- `==`操作符：先转类型，再比较；`Boolean`值和数值比较，先将`Boolean`值转为数值，`true`转为1，`false`转为0

### `sort()`函数
- `numbers.sort((a,b)=>a-b)`：升序排列
- 等价于`{return (a.value-b.value)}`
- `sort()` 方法用原地算法对数组的元素进行**排序**，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的`UTF-16`代码单元值序列时构建的
- 由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。

### `get set`使用
- 为内部属性提供了一个方便习惯的读/写方式
- `get`与`set`是方法，因为是方法，所以可以进行判断。
- `get`是得到 一般是要返回的,`set`是设置不用返回
- `getter`、`setter`必须一起用？

### 匿名自执行函数
- 匿名自执行函数首先是一个匿名函数，但是这个函数是可以自己自动执行的，不需要借助其他的元素。

### `for()` 与 `forEach()`
- `forEach`方法在数组元素为空时会跳过执行回调函数, 未初始化的项亦将被跳过
- 除了抛出异常以外，没有办法跳出或中止`forEach`方法。如果需要中止或跳出循环，不应该是`forEach`。在`forEach`中使用 `return false` 或者 `break`无法跳出整个循环，并且使用`break`会直接报错
- `forEach()`方法是对数组中的每一项运行给定函数。
- 回调函数的参数`item`为数组当前项，`idx`为当前索引。
- forEach(), filter(), reduce(), every(), some()会跳过空位
- map()会跳过空位，但保留这个值

### 函数声明与表达式

- 函数声明语法定义：`function sum(num1,num2){return num1+num2}`
- 函数表达式定义函数：
  - `var sum = function(num1,num2){return num1+num2};`
  - `var sum = new Function("num1","num2","return num1+num2")`;
  - `Function`构造函数可以接受任意数量的参数，但最后一个参数始终被看成函数体，注意函数表达式定义函数的方法与声明其他变量时一样需要加分号。
  - 函数声明可以被提前，但函数表达式不能被提前

### `try...catch...finally`用法
- `try`块一共有三个关键字`try`,`catch`还有`finally`；
- `finally`语句无论`try`和`catch`执行结果如何都会执行；
- `catch`是捕获到`try`语句块里的错误才会执行；
- `catch`和`finally`语句都是可选的，但你在使用`try`语句时必须至少使用一个（也就是`try`必须搭配`catch`或者`finally`）。
- 如果`try`语句没有使用`finally`，则返回`try`语句中`return`的东西，函数`try...catch`语句之外的`return`不执行
- 如果try语句后面有`finally`，`try`中的`return`不会跳出函数,因为一定要进入`finally`语句，函数`try...finally`语句之外的`return`不执行
- 如果try语句后面有finally，try中就算有break用来跳出语句块，也不管用，只要有finally，不管try和catch语句中执行什么，一定会进入finally语句

### `RegExp` 正则表达式
- `RegExp` 对象用于**将文本与一个模式匹配**。
- `RegExp` 对象的主要方法是 `exec()`，该方法是专门为捕获组而设计的。 `exec()`接受一个参数，即要应用模式的字符串，然后返回包含第一个匹配项信息的数组；或者在没有匹配项的情况下返回 `null`。

### 方法劫持、显式绑定:`apply`,`call`,`bind`的用法
- 重新**定义**``this``对象
- `apply`和`call`会使当前函数立即执行，`bind`会返回一个函数，后续需要时再调用
- `call`与`apply`都属于`Function.prototype`的一个方法，所以每个`function`实例都有`call`、`apply`属性
- `call`是`apply`的语法糖，只有传的参数不同，`call`中要传多个任意参数，`apply`只可以直接传数组或者类数组
- bind是为函数绑定一个this上下文
- 传入`null`或者`undefind`和没传一样，还是全局的window
- `apply`会将一个数组装换为一个参数接一个参数的传递给方法

### `with`函数
- **警告**：
  - 不建议使用`with`语句，因为它可能是混淆错误和兼容性问题的根源。
  - 在`ECMAScript 5`严格模式中该标签已被禁止。推荐的替代方案是声明一个临时变量来承载你所需要的属性。
  ```
  with (expression) {
      statement
  }
  ```
- `expression` 将给定的表达式添加到在评估语句时使用的作用域链上。表达式周围的括号是必需的。
- `statement` 任何语句。要执行多个语句，请使用一个块语句 `({ ... })`对这些语句进行分组。
- `with` 代码块内部，每个变量首先会指向 `obj` 对象属性

### 生成器函数
- `function*` 这种声明方式会定义一个生成器函数`generator function`,它返回一个`Generator`对象。`ES6`的新特性
- 生成器是一种**返回迭代器**的函数
- 也可以使用构造函数`GeneratorFunction`或`function* expression`定义生成器函数。
- 语法：
  - `function* name([param[, param[, ... param]]]) { statements }`
  - `name`函数名；`param`要传递给函数的一个参数的名称，一个函数最多可以有255个参数；`statements`普通JS语句。
- 生成器函数在执行时能暂停，后面又能从暂停处继续执行。
- 描述：
  - 调用一个生成器函数并不会马上执行它里面的语句，而是返回一个这个生成器的 迭代器`iterator`对象。当这个迭代器的`next()`方法被首次（后续）调用时，其内的语句会执行到第一个（后续）出现`yield`的位置为止，`yield`后紧跟迭代器要返回的值。或者如果用的是`yield*`，则表示将执行权移交给另一个生成器函数（当前生成器暂停执行）。
  - `next()`方法返回一个对象，这个对象包含两个属性：`value`和`done`，`value`属性表示本次`yield`表达式的返回值，`done`属性为布尔类型，表示生成器后续是否还有`yield`语句，即生成器函数是否已经执行完毕并返回。
  - 调用`next()`方法时，如果传入了参数，那么这个参数会传给上一条执行的`yield`语句左边的变量
  - 当在生成器函数中显式`return`时，会导致生成器立即变为完成状态，即调用`next()`方法返回的对象的`done`为`true`。如果`return`后面跟了一个值，那么这个值会作为当前调用`next()`方法返回的`value`值。
- 注意：
  - 生成器函数**不能当构造器使用**
  - ES6引入的新特性

### `delete()` 函数
- `delete`操作符用于删除对象的某个属性
- `var`, `let` 以及 `const` 创建的不可设置的属性不能被`delete`操作删除
- 当且仅当该属性的 `configurable` 为 `true` 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认值为 `true` 。
- `eval`中声明`var`变量是唯一一个被添加到变量名列表同时也可以被 `delete` 删除的特例

### `open` 函数
- `open()` 方法可以查找一个已经存在或者新建的浏览器窗口。
- **语法**：
  - `window.open([URL], [窗口名称], [参数字符串])`
  - **参数说明**:
    - `URL`：可选参数，在窗口中要显示网页的网址或路径。如果省略这个参数，或者它的值是空字符串，那么窗口就不显示任何文档。
    - **窗口名称**：可选参数，被打开窗口的名称。
      1. 该名称由字母、数字和下划线字符组成。
      2. `_top`、`_blank`、`_selft`具有特殊意义的名称。
         `_blank`：在新窗口显示目标网页
         `_self`：在当前窗口显示目标网页
         `_top`：框架网页中在上部窗口中显示目标网页
      3. 相同 `name` 的窗口只能创建一个，要想创建多个窗口则 `name` 不能相同。
      4. `name` 不能包含有空格。
  - **参数字符串**：可选参数，设置窗口参数，各参数用逗号隔开。

### `eval()` 函数
- `eval()` 函数计算 JavaScript 字符串，并把它作为脚本代码来执行。
- 如果参数是一个表达式，`eval()` 函数将执行表达式。如果参数是Javascript语句，`eval()`将执行 Javascript 语句。
- `eval()` 将会返回对最后一个表达式的求值结果。
- `eval`中声明`var`变量是唯一一个被添加到变量名列表同时也可以被 `delete` 删除的特例
- 是JavaScript的全局函数

### `slice()` 方法
- `slice()` 方法可从已有的数组中**返回选定的元素**。
- `slice()` 方法可**提取字符串的某个部分**，并以新的字符串**返回**被提取的部分。
- `array.slice(start, end)`
  参数|描述
  | :---: | :---: |
  `start`|**可选**。</br>规定从何处开始选取。如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，`slice(-2)` 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
  `end`|**可选**。</br>规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组**包含从 `start` 到数组结束的所有元素**。如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 `slice(-2,-1)` 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。

  返回值|描述
  | :---: | :---: |
  `Array`|返回一个**新的数组**</br>包含从 `start`（包括该元素） 到 `end`（不包括该元素）的 `arrayObject` 中的元素。

### `new` 运算符
- `new` 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。
- `new` 关键字会进行如下的操作：
  - 创建一个空的简单JavaScript对象（即`{}`）；
  - 为步骤1新创建的对象添加属性`__proto__`，将该属性链接至构造函数的原型对象；
  - 将步骤1新创建的对象作为`this`的上下文；
  - 如果该函数没有返回对象，则返回`this`。
- 当代码 `new Foo(...)` 执行时，会发生以下事情：
  - 一个继承自 `Foo.prototype` 的新对象被创建。
  - 使用指定的参数调用构造函数 `Foo`，并将 `this` 绑定到新创建的对象。`new Foo` 等同于 `new Foo()`，也就是没有指定参数列表，`Foo` 不带任何参数调用的情况。
  - 由构造函数返回的对象就是 `new` 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。（一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）

### `search` 函数
- 方法 `str.search(regexp)` 返回第一个匹配项的位置，如果未找到，则返回 -1

### `return` 方法
- 在构造函数里面，不写`return`的话默认就是返回创建的实例对象
- 加入了`return`的话
  - 如果`return`的是一个**基本数据类型**的话比如，`boolean`, `number`, `undefined`等那么仍然返回实例对象
  - 如果返回的是一个**对象**的话，则返回该对象，原本的指向实际对象的`this`会被无效化。

### `eval` 函数
- eval() 函数会将传入的字符串当做 JavaScript 代码进行执行。

## Axios
### 拦截器
- 当切换步骤或切换tab等情况，前一个组件中发起的请求可能还在进行中，用户就已经退出了步骤流程，也可能是切换到了其他的tab页面，之前的请求还在进行中，如果不去处理未完成的请求，会极大地影响页面性能，甚至导致后续的请求超时，或者数据处理不正确，页面展示错误等等
- 方法
  - AbortController
  - CancelToken deprecated


# 常用概念

## 严格模式
- 严格模式下的`this`在函数体内不会默认指向`window`，而是指向`undefined`
- 严格模式下函数参数不能同名
- 严格模式下，构造函数中`this`指向实例对象
- 在非严格模式下，**独立函数**调用内部`this`都执行`window`

## 模块化
- 模块化的开发方式可以提高代码复用率，方便进行代码的管理。通常一个文件就是一个模块，有自己的作用域，只向外暴露特定的变量和函数。目前流行的js模块化规范有`CommonJS`、`AMD`、`CMD`以及`ES6`的模块系统。
- 参考: <a src = 'https://es6.ruanyifeng.com/#docs/module-loader'>module-loader</a>
### CommonJS
- `Node.js` 是`commonJS` 规范的主要实践者，它有四个重要的环境变量为模块化的实现提供支持：`module`、`exports`、`require`、`global`。实际使用时，用`module.exports` 定义当前模块对外输出的接口（不推荐直接用`exports`），用`require`加载模块。
- `commonJS` 用**同步**的方式加载模块。在服务端，模块文件都存在本地磁盘，读取非常快，所以这样做不会有问题。但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。

### AMD
- AMD：推崇依赖前置；提前执行；用户体验好，没有延迟，依赖模块提前执行即可——`require.js`
- AMD规范采用**异步方式**加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。这里介绍用`require.js`实现AMD规范的模块化：用`require.config()`指定引用路径等，用`define()`定义模块，用`require()`加载模块。

### CMD
- CMD：推崇依赖就近；延迟执行；性能好——`sea.js`
- CMD是另一种js模块化方案，它与AMD很类似，不同点在于：AMD 推崇依赖前置、提前执行，CMD推崇依赖就近、延迟执行。此规范其实是在`sea.js`推广过程中产生的。

### ES6 Module
- ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，旨在成为浏览器和服务器通用的模块解决方案。其模块功能主要由两个命令构成：`export`和`import`。`export`命令用于规定模块的对外接口，`import`命令用于输入其他模块提供的功能。
- ES6的模块不是对象，`import`命令会被 JavaScript 引擎静态分析，在编译时就引入模块代码，而不是在代码运行时加载，所以无法实现条件加载。也正因为这个，使得静态分析成为可能。

### ES6 模块与 CommonJS 模块的差异
1. `CommonJS` 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
   - `CommonJS` 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
   - ES6 模块的运行机制与 `CommonJS` 不一样。JS引擎对脚本静态分析的时候，遇到模块加载命令`import`，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6 的`import`有点像 `Unix` 系统的“符号连接”，原始值变了，`import`加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。
2. `CommonJS` 模块是运行时加载，ES6 模块是编译时输出接口。
   - 运行时加载: `CommonJS` 模块就是对象；即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。
   - 编译时加载: ES6 模块不是对象，而是通过 `export` 命令显式指定输出的代码，`import` 时采用静态命令的形式。即在`import`时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”。

  `CommonJS` 加载的是一个对象（即`module.exports`属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

## 回调函数
- 回调函数就是一个**被作为参数传递的函数**。
- **回调金字塔**解决：**迭代器**
- `forEach`方法在数组元素为空时会**跳过执行**回调函数
- **传参**：
  - 将回调函数的参数作为与回调函数同等级的参数进行传递
  - 回调函数的参数在调用回调函数内部创建
- 调用`setTimeout`函数会在一个时间段过去后在回调函数队列中添加一个消息。这个时间段作为函数的第二个参数被传入。如果队列中没有其它消息，消息会被马上处理。但是，如果有其它消息，`setTimeout`消息必须等待其它消息处理完。因此第二个参数仅仅表示最少的时间 而非确切的时间
- 宏任务压栈后不执行也会开启定时器

## JavaScript函数中的`this`四种绑定形式
1. **默认绑定**
  - `this`默认指向`window`，独立函数默认挂载到了`window`下面
  - 在严格模式下，`this`是无法指向全局
2. **隐式绑定**
  - 隐式绑定会把调用函数中的`this`指向这个上下文对象
  - 对象属性引用链中，`this`指向离调用函数最近的上下文对象
  - **隐性丢失**：隐式绑定的函数丢失绑定对象，从而默认绑定到全局或者`undefined`（取决于是否使用严格模式）
    - **为函数调用创建别名**：虽然`bar`是`obj.foo`的一个引用，但是`bar`引用的是`foo`函数的本身，此时的`bar()`其实就是一个不带任何修饰的函数调用，所以应用了默认绑定，`this`为全局
    ```
    function foo(){
      console.log(this.a);
    }
    var obj={
      a:2,
      foo:foo
    }
    var bar=obj.foo;
    var a="window";
    bar()                     //window
    ```
   
    - **传入回调函数**：参数传递其实就是隐式赋值。相当于`var fn=obj.foo`，与创建别名的结果一样，应用了默认绑定，应该注意的是，`return`返回一个函数时，也是应用了默认绑定
    ```
    function foo(){
      console.log(this.a);
    }
    function doFoo(fn){
      fn();
    }
    var obj={
      a:2,
      foo:foo
    }
    var a="window";
    doFoo(obj.foo)            //window
    ```
    - **传入语言内置的函数**
    ```
    function foo(){
    console.log(this.a);
    }
    var obj={
      a:2,
      foo:foo
    }
    var a="window";
    setTimeout(obj.foo, 100)    //window
    ```
3. **显式绑定**
  - 要达到隐式绑定的效果，须在对象内部包含一个指向函数的属性，通过调用这个属性间接引用函数，从而把`this`间接绑定到这个对象上。如果不想在对象内包含函数引用，而想在某个对象上强制调用函数，达到把`this`绑定到该对象上，那就要用到显式绑定。
  - 显式绑定依赖于javascript给所有函数提供的两个方法：`call()`和`apply()`
  - 为了解决绑定丢失的问题，需要用到硬绑定
4. **`new`绑定**:在定义好函数后，都会`new`一下，生成一个新的对象，`new`的过程中会执行下面的操作：
  - 创建一个全新的对象
  - 给这个对象挂载`prototype`属性
  - 新对象会绑定到函数调用的`this`（调用这个对象下的函数方法时，`this`会指向该对象）
  - 如果函数没有返回其他对象，那`new`表达式中的函数调用会返回这个新对象
- **`ES6`箭头函数**:
  - 普通函数，`this`永远指向它的调用者
  - :house: `ES6`中用箭头定义函数`=>`，不遵循`this`的四条规则，而是**根据外层作用域**来决定`this`，即指向定义时的上下文
  - 注意：**对象不构成单独的作用域**，此时箭头的函数的`this`就指向了全局作用域`window`。
  - `(()=>{}).length;` 获取方法形参个数，形参为0

## 迭代器
- 迭代器是一个**对象**，需要满足：对象内部有方法`next`，`next`方法要求返回对象`done: true`或`false, value:值`
- 如果一个对象，实现了`Symbol.iterator`方法，且这个方法返回一个迭代器，这个方法就是一个生成迭代器的函数
1. 用`every`方法迭代:`every`方法会迭代数组中的每个元素，直到返回`false`。```numbers.every(isEven);```
2. 用`some`方法迭代:和`every`的行为相反，会迭代数组中的每个元素，直到函数返回`true`。`numbers.some(isEven);`
3. 用`forEach`方法迭代:如果要迭代整个数组，可以用`forEach`方法。它和使用`for`循环的结果相同。`numbers.forEach(x => console.log(x % 2 === 0));`
4. 用`map`和`filter`方法迭代
   - `const myMap = numbers.map(isEven);`:保存了传入`map`方法的`isEven`函数的运行结果`[false，true，false，true，false，true，false]`
   - `const evenNumbers = numbers.filter(isEven);`返回的新数组由使函数返回`true`的元素组成。`[2,4,6,8,10,12,14]`
5. 使用 `reduce` 方法:`reduce`方法接收一个有如下四个参数的函数：`previousValue`、`currentValue`、`index`和`array`。因为`index`和`array`是可选的参数，所以如果用不到它们的话，可以不传。这个函数会返回一个将被叠加到**累加器**的值，`reduce`方法停止执行后会返回这个累加器。如果要对一个数组中的所有元素求和，这就很有用。`numbers.reduce((previous,current) => previous + current);`

## 箭头函数
- 箭头函数也叫`lambda`表达式，用于定义**轻量级的内联回调函数**
- **注意**：
  - 当箭头函数有一个参数的时候，参数可以不加括号，没有参数的时候就必须要加。
  - 如果函数体不止一行，应该用花括号括起来，这时就要显示地返回。
  - 箭头函数是lexically scoped（词法作用域），这意味着其`this`绑定到了附近`scope`的上下文。也就是说，不管`this`指向什么，都可以用一个箭头函数保存。

## 柯里化
- **概念**
  - 在数学和计算机科学中，柯里化是一种**将使用多个参数的一个函数转换成一系列使用一个参数**的函数的技术
  - 对于Javascript语言来说，通常说的柯里化函数的概念，与数学和计算机科学中的柯里化的概念并不完全一样。Javascript实际应用中的柯里化函数，可以**传递一个或多个参数**。
  - 柯里化是一种函数的**转换**，它是指将一个函数从可调用的`f(a, b, c)`转换为可调用的`f(a)(b)(c)`。
    ```
    //普通函数
    function fn(a,b,c,d,e) {
      console.log(a,b,c,d,e)
    }
    //生成的柯里化函数
    let _fn = curry(fn);

    _fn(1,2,3,4,5);     // print: 1,2,3,4,5
    _fn(1)(2)(3,4,5);   // print: 1,2,3,4,5
    _fn(1,2)(3,4)(5);   // print: 1,2,3,4,5
    _fn(1)(2)(3)(4)(5); // print: 1,2,3,4,5
    ```
  - 对于已经柯里化后的`_fn`函数来说，当接收的参数数量与原函数的形参数量**相同**时，执行原函数；当接收的参数数量**小于**原函数的形参数量时，返回一个函数用于接收剩余的参数，直至接收的参数数量与形参数量**一致**，执行原函数。
- **用途**
  - 柯里化实际是把简单的问题复杂化了，但是复杂化的同时，我们在使用函数时拥有了更加多的自由度。而这里对于函数参数的自由处理，正是柯里化的核心所在。
  - 柯里化本质上是**降低通用性**，**提高适用性**，即**参数复用**。
  - 柯里化不会调用函数。它只是对函数进行转换。
- **封装与实现**：
  - 通过函数的`length`属性，**获取**函数的形参个数，形参的个数就是所需的参数个数
  - 在调用柯里化工具函数时，**手动指定**所需的参数个数
  - 柯里化的这种封装函数的方式，只是一种思路，目的是从一个通用性很强，接收多个参数的函数转化为多个适用性强，接收参数单一的函数。
- 参考：<a src = 'https://juejin.cn/post/6844903743519997966'>JavaScript中的函数柯里化</a>

## 深拷贝与浅拷贝
- **概念**
  - **浅拷贝**是创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。
  - **深拷贝**是将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象。
  - **注意**：浅拷贝是复制属性，如果属性是引用类型，那么b修改属性a也会改变；但改变基本类型，a不会跟随改变
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/1/170965259fb768fd~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/1/1709652a7948d1b8~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)
  - 总而言之，浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。但深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象。
- **区别**：（针对引用类型）
  - 当把一个对象赋值给一个新的变量时，赋的其实是该对象的在栈中的地址，而不是堆中的数据。也就是两个对象指向的是同一个存储空间，无论哪个对象发生改变，其实都是改变的存储空间的内容，因此，两个对象是联动的。
  - **浅拷贝**：重新在堆中创建内存，拷贝前后对象的基本数据类型互不影响，但拷贝前后对象的引用类型因共享同一块内存，会相互影响。
  - **深拷贝**：从堆内存中开辟一个新的区域存放新对象，对对象中的子对象进行递归拷贝,拷贝前后的两个对象互不影响。
- **浅拷贝实现**：
  1. `Object.assign()`: 可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。
  ```
  let obj1 = { person: {name: "kobe", age: 41}, sports:'basketball' };
  let obj2 = Object.assign({}, obj1);
  obj2.person.name = "wade";
  obj2.sports = 'football'
  console.log(obj1); // { person: { name: 'wade', age: 41 }, sports: 'basketball' }
  ```
  2. 函数库`lodash的_.clone`方法:该函数库也有提供`_.clone`用来做浅拷贝,后面我们会再介绍利用这个库实现深拷贝。
  ```
  var _ = require('lodash');
  var obj1 = {
      a: 1,
      b: { f: { g: 1 } },
      c: [1, 2, 3]
  };
  var obj2 = _.clone(obj1);
  console.log(obj1.b.f === obj2.b.f);// true
  ```
  3. 展开运算符`...`: 展开运算符是一个es6/es2015特性，它提供了一种非常方便的方式来执行浅拷贝，这与`Object.assign()`的功能相同。
  ```
  let obj1 = { name: 'Kobe', address:{x:100,y:100}}
  let obj2= {... obj1}
  obj1.address.x = 200;
  obj1.name = 'wade'
  console.log('obj2',obj2) // obj2 { name: 'Kobe', address: { x: 200, y: 100 } }
  ```
  4. `Array.prototype.concat()`
  ```
  let arr = [1, 3, {
    username: 'kobe'
    }];
  let arr2 = arr.concat();    
  arr2[2].username = 'wade';
  console.log(arr); //[ 1, 3, { username: 'wade' } ]
  ```
  5. `Array.prototype.slice()`
  ```
  let arr = [1, 3, {
      username: ' kobe'
      }];
  let arr3 = arr.slice();
  arr3[2].username = 'wade'
  console.log(arr); // [ 1, 3, { username: 'wade' } ]
  ```
- 深拷贝
  1. `JSON.parse(JSON.stringify())`: 
     - 这也是利用`JSON.stringify`将对象转成`JSON`字符串，再用`JSON.parse`把字符串解析成对象，一去一来，新的对象产生了，而且对象会开辟新的栈，实现**深拷贝**。
     - 这种方法虽然可以实现数组或对象深拷贝,但**不能处理函数和正则**，因为这两者基于`JSON.stringify`和`JSON.parse`处理后，得到的正则就不再是正则（变为空对象），得到的函数就不再是函数（变为`null`）了。
  ```
  let arr = [1, 3, {
      username: ' kobe'
  }];
  let arr4 = JSON.parse(JSON.stringify(arr));
  arr4[2].username = 'duncan'; 
  console.log(arr, arr4)
  ```
  2. 函数库`lodash的_.cloneDeep`方法 : 该函数库也有提供`_.cloneDeep`用来做深拷贝
  ```
  var _ = require('lodash');
  var obj1 = {
      a: 1,
      b: { f: { g: 1 } },
      c: [1, 2, 3]
  };
  var obj2 = _.cloneDeep(obj1);
  console.log(obj1.b.f === obj2.b.f);// false
  ```
  3. `jQuery.extend()`方法: `jquery`有提供一個`$.extend`可以用来做`Deep Copy`
    `$.extend(deepCopy, target, object1, [objectN])  //第一个参数为true,就是深拷贝`
    ```
    var $ = require('jquery');
    var obj1 = {
        a: 1,
        b: { f: { g: 1 } },
        c: [1, 2, 3]
    };
    var obj2 = $.extend(true, {}, obj1);
    console.log(obj1.b.f === obj2.b.f); // false
    ```
  4. 手写递归方法

## 静态语言与动态语言
- **静态语言**（强类型语言）
  - 静态语言是**在编译时变量的数据类型即可确定**的语言，多数静态类型语言要求在使用变量之前必须声明数据类型。 
  - 编译器一次性生成目标代码，优化更充分，程序运行时速度更快。
    - 对于相同的源代码，编译所产生的的目标代码执行速度更快。
    - 目标代码不需要编译器就可以运行，在同类操作系统上使用灵活。
  - 例如：`C++`、`Java`、`Delphi`、`C#`等。
- **动态语言**（弱类型语言）
  - 动态语言是**在运行时确定数据类型**的语言。变量使用之前不需要类型声明，通常变量的类型是被赋值的那个值的类型。 
  - 执行程序时需要源代码，维护更加**灵活**。
    - 解释执行需要保留源代码，程序纠错和维护十分方便。
    - 只要存在解释器，源代码可以在任何操作系统上运行，可移植性好。
  - 例如`PHP`/`ASP`/`Ruby`/`Python`/`Perl`/`ABAP`/`SQL`/`JavaScript`/`Unix Shell`等等。

## 方法
- 通过 `类名.属性名=值/方法` 的方式是添加**静态方法**或者**静态变量**，并且只能通过`类名.`的方式去调用，由构造函数构造出来的实例对象不能访问直接访问静态成员

## 代码风格
- 参考：<a src = "https://zh.javascript.info/coding-style">代码风格</a>

## 解构
- 解构赋值语法是一种 Javascript 表达式。通过解构赋值, 可以将属性/值从对象/数组中取出,赋值给其他变量。
- 对象和数组逐个对应表达式，或称对象字面量和数组字面量，提供了一种简单的定义一个特定的数据组的方法。

## 垃圾回收机制
- JS会在创建变量时自动分配内存，在不使用的时候会自动周期性的释放内存，释放的过程就叫 "垃圾回收"。
- 如果不清楚回收的机制，会很容易造成混乱，而混乱就很容易造成"内存泄漏"
### 回收算法
- **标记清理**
  - 过程
    - 变量进入上下文，也可理解为作用域，会加上标记，证明其存在于该上下文；
    - 将所有在上下文中的变量以及上下文中被访问引用的变量标记去掉，表明这些变量活跃有用；
    - 在此之后再被加上标记的变量标记为准备删除的变量，因为上下文中的变量已经无法访问它们；
    - 执行内存清理，销毁带标记的所有非活跃值并回收之前被占用的内存；
  - **局限**
    - 由于是从根对象(全局对象)开始查找，对于那些无法从根对象查询到的对象都将被清除
    - 回收后会形成内存碎片，影响后面申请大的连续内存空间
![标记清理](https://segmentfault.com/img/remote/1460000038175561)
- **引用计数**
  - 规则
    - 声明一个变量，赋予它一个引用值时，计数+1；
    - 同一个值被赋予另外一个变量时，引用+1；
    - 保存对该值引用的变量被其他值覆盖，引用-1；
    - 引用为0，回收内存；
  - **局限**
    - 最重要的问题就是，循环引用的问题：两个都互相引用了，引用计数不为0，所以两个变量都无法回收。如果频繁的调用改函数，则会造成很严重的内存泄漏。
### Nodejs、V8回收机制
- V8的回收机制
  - **分代回收机制** ，将内存分为新生代（young generation）和老生代（tenured generation），新生代为存活时间较短的对象，老生代为存活时间较长或者常驻内存的变量。
  - **标记清除 & 整理**
    - 标记清除策略会产生内存碎片，从而影响内存的使用，这里标记整理算法的出现就能很好的解决这个问题。
  - 全停顿：为了避免应用逻辑与垃圾回收器看到的逻辑不一样，垃圾回收器在执行回收时会停止应用逻辑，执行完回收任务后，再继续执行应用逻辑。**这种停顿对新生代空间的影响较小，但对老生代空间可能会造成停顿的现象。**
  - 增量标记：为了解决全停顿的现象，2011年V8推出了增量标记。V8将标记过程分为一个个的子标记过程，同时让垃圾回收标记和JS应用逻辑交替进行，直至标记完成。

## 静态方法
- 静态方法是使用 static 关键字修饰的方法，又叫类方法，属于类的，但不属于对象，在实例化对象之前可以通过 `类名.方法名` 调用静态方法。
- 静态方法不能在对象上调用，只能在类中调用。
- 不能在类的实例上调用静态方法，而应该通过类本身调用。这些通常是实用程序方法，例如创建或克隆对象的功能。

# 模块

## 模块加载机制
- 首先加载**核心模块**，不管有没有同名/同目录的情况下,核心模块优先加载.
- 其次按照相对路径/绝对路径加载**文件模块**(加载顺序,首先试图按照路径查找 `.js` 扩展名的文件,如果没有,试图按照路径查找 `.json` 扩展名的文件,如果还是没有,就按照路径查找 `.node` 扩展名的`c++`模块了)
- 最后搜索 `node_modules` 目录下通过`npm`下载的**第三方模块**. 

## import
- 用于引用外部`CSS`

## ES6 模块与 CommonJS 模块差异
- 它们有三个重大差异。
- CommonJS 模块输出的是一个**值的拷贝**，ES6 模块输出的是**值的引用**。注意：CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值
- ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。CommonJS 模块是**运行时加载**，ES6 模块是**编译时输出接口**。原因：CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。
- CommonJS 模块的require()是**同步**加载模块，ES6 模块的import命令是**异步**加载，有一个独立的模块依赖的解析阶段


## JWT
- JSON Web Token（缩写 JWT）是目前最流行的跨域认证解决方案
- JWT 全称是Json Web Token，由服务端用加密算法对信息签名来保证其完整性和不可伪造。
- Token里可以包含所有必要信息，这样服务端就无需保存任何关于用户或会话的信息，JWT可用于身份认证、会话状态维持、信息交换等。特别适用于分布式站点的单点登录（SSO）场景。
- **优点**
  - JWT可以进行跨语言支持的，如JAVA，JavaScript，NodeJS，PHP等很多语言都可以使用；
  - JWT可以在自身存储一些其他业务逻辑所必要的非敏感信息；
  - JWT结构简单，字节占用很小，便于传输；
  - JWT不需要在服务端保存会话信息，易于应用的扩展；
- **缺点**
  - JWT包含认证信息，因此一旦信息泄露，任何人都可以获得令牌的所有权限；
  - JWT不建议使用HTTP协议来传输代码，而是使用加密的HTTPS协议进行传输；
  - 由于服务器不保存session状态，

- **组成**：
  - Header（头部）：签名的算法、令牌的类型
  - Payload（负载）：一个JSON 对象，包括发行者、过期时间、JWT面向的主题、用户、生效时间、签发时间、JWT唯一标识
  - Signature（签名）：对前两部分的签名，防止数据被篡改。需要一个服务器端的秘钥secretkey。然后，使用Header里面指定的签名算法，按照公式产生签名。

### **传统跨域用户认证**
  - 用户向服务器发送用户名和密码。
  - 服务器验证通过后，在当前对话（session）里面保存相关数据，比如用户角色、登录时间等等。
  - 服务器向用户返回一个 session_id，写入用户的 Cookie。
  - 用户随后的每一次请求，都会通过 Cookie，将 session_id 传回服务器。
  - 服务器收到 session_id，找到前期保存的数据，由此得知用户的身份。
- **问题**：扩展性（scaling）不好。如果是服务器集群，或者是跨域的服务导向架构，就要求 session 数据共享，每台服务器都能够读取 session。
- JWT 的原理是，服务器认证以后，生成一个 JSON 对象，发回给用户。以后，用户与服务端通信的时候，都要发回这个 JSON 对象。服务器完全只靠这个对象认定用户身份。为了防止用户篡改数据，服务器在生成这个对象的时候，会加上签名。服务器就不保存任何 session 数据了，也就是说，服务器变成无状态了，从而比较容易实现扩展。

### JWT 漏洞
- 空密码算法
- JWT爆破

# 闭包

## 实现闭包
- 闭包是js的一种特性，我们可以通过闭包实现**函数内外部的连接**，并且可以使得函数的局部变量始终存在于内存中。
- 匿名自执行函数还可以用于在js中模拟创建**块级作用域**，即如果使用匿名自执行函数将某些代码包裹起来可以实现块级作用域的效果，**减少全局变量的数量**，在匿名自执行函数执行结束后变量就会被内存释放掉，从而也会节省了内存。
- 闭包允许内层函数引用父函数中的变量，但该变量是最终值
- 闭包内变量要到整个闭包被清除的时候才会清除，比如局部变量要等到函数执行完之后。
- `Function`是引用类型：保存在堆中，变量保存在栈中；
- 闭包是指有权访问另一个函数作用域中变量的函数；

## 变量回收
- 代码回收规则如下：
  1. 全局变量不会被回收。
  2. 局部变量会被回收，也就是函数一旦运行完以后，函数内部的东西都会被销毁。
  3. 只要被另外一个作用域所引用就不会被回收

## 日期与事件
- `d.setDate(n);`
  - `n`表示一个月中的一天的一个数值:
  - 0为上一个月的最后一天
  - -1为上一个月最后一天之前的一天
  - 如果当月有31天, 32 为下个月的第一天
- `setMonth(month,day)`
  - `month`: 必需。一个表示月份的数值，该值介于 0（一月）~ 11（十二月）之间。
  - `day`: 可选。一个表示月的某一天的数值，该值介于 1 ~ 31 之间（以本地时间计）。在`EMCAScript`标准化之前，不支持该参数。
- 获取当前日期时间：
  - `Date()      // 'Wed Mar 16 2022 09:23:50 GMT+0800 (中国标准时间)'，[字符串]`
  - `new Date()  // 2022-03-16T01:24:02.196Z [对象]`


# jQuery
## jQuery `toggleClass()`
- `toggleClass()` 对设置或移除被选元素的一个或多个类进行切换。
- 该方法检查每个元素中指定的类。如果不存在则添加类，如果已设置则删除之。这就是所谓的切换效果。


## jQuery 高度与宽度
```
alert($(window).height()); //浏览器当前窗口可视区域高度
alert($(document).height()); //浏览器当前窗口文档的高度
alert($(document.body).height());//浏览器当前窗口文档body的高度
alert($(document.body).outerHeight(true));//浏览器当前窗口文档body的总高度 包括border padding margin
alert($(window).width()); //浏览器当前窗口可视区域宽度
alert($(document).width());//浏览器当前窗口文档对象宽度
alert($(document.body).width());//浏览器当前窗口文档body的高度
alert($(document.body).outerWidth(true));//浏览器当前窗口文档body的总宽度 包括border padding margin
```
- `innerWidth()` 方法返回元素的宽度（包括内边距）
- `innerHeight()` 方法返回元素的高度（包括内边距）

## jQuery
- `siblings()` 方法返回被选元素的**所有**同胞元素。
- `next()` 方法返回被选元素的**下一个**同胞元素。
- `find()` 方法返回被选元素的**后代**元素，一路向下直到最后一个后代。

# TypeScript
## 面试题
### 什么是TypeScript
- Typescript 是一个强类型的 JavaScript 超集，支持ES6语法，支持面向对象编程的概念，如类、接口、继承、泛型等。Typescript并不直接在浏览器上运行，需要编译器编译成纯Javascript来运行。

### 为什么要使用 TypeScript ? TypeScript 相对于 JavaScript 的优势是什么？
- 增加了静态类型，可以在开发人员编写脚本时检测错误，使得代码质量更好，更健壮。
- 优势:
  1. 杜绝手误导致的变量名写错;
  2. 类型可以一定程度上充当文档;
  3. IDE自动填充，自动联想;

### TypeScript 中 `const` 和 `readonly` 的区别？枚举和常量枚举的区别？接口和类型别名的区别？
- **`const` 和 `readonly`**: `const`可以防止变量的值被修改，`readonly`可以防止变量的属性被修改。
- **枚举和常量枚举**: 常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。 常量枚举成员在使用的地方会被内联进来。 之所以可以这么做是因为，常量枚举不允许包含计算成员。
- **接口和类型别名**: 两者都可以用来描述**对象**或**函数**的类型。与接口不同，类型别名还可以用于其他类型，如基本类型（原始值）、联合类型、元组。

### TypeScript 中 any 类型的作用是什么？
- 为编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。

### TypeScript 中 any、never、unknown、null & undefined 和 void 有什么区别？
- any: 动态的变量类型（失去了类型检查的作用）。
- never: 永不存在的值的类型。例如：never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
- unknown: 任何类型的值都可以赋给 unknown 类型，但是 unknown 类型的值只能赋给 unknown 本身和 any 类型。
- null & undefined: 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和  undefined 赋值给 number 类型的变量。当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自。
- void: 没有任何类型。例如：一个函数如果没有返回值，那么返回值可以定义为void。

### TypeScript 中 interface 可以给 Function / Array / Class（Indexable）做声明吗？
- 可以

### TypeScript 中可以使用 String、Number、Boolean、Symbol、Object 等给类型做声明吗？
- 可以

### TypeScript 中的 this 和 JavaScript 中的 this 有什么差异？
- TypeScript：`noImplicitThis: true` 的情况下，必须去声明 `this` 的类型，才能在函数或者对象中使用`this`。
- Typescript 中箭头函数的 `this` 和 ES6 中箭头函数中的 `this` 是一致的。

### TypeScript 中使用 Union Types 时有哪些注意事项
- **属性或方法访问**: 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法。

### TypeScript 中 type 和 interface 的区别?
- **相同点**：
  1. 都可以描述 '对象' 或者 '函数' 
  2. 都允许拓展(extends)
- **不同点**：
  1. `type` 可以声明基本类型，联合类型，元组
  2. `type` 可以使用 `typeof` 获取实例的类型进行赋值
  3. 多个相同的 `interface` 声明可以自动合并
- 使用 `interface` 描述`数据结构`，使用 `type` 描述`类型关系`

### TypeScript 中 ?.、??、!、!.、_、** 等符号的含义？
- `?.` 可选链 遇到 `null` 和 `undefined` 可以立即停止表达式的运行。
- `??` 空值合并运算符 当左侧操作数为 `null` 或 `undefined` 时，其返回右侧的操作数，否则返回左侧的操作数。
- `!` 非空断言运算符 `x!` 将从 `x` 值域中排除 `null` 和 `undefined`
- `!.`  在变量名后添加，可以断言排除`undefined`和`null`类型
- `_` 数字分割符 分隔符不会改变数值字面量的值，使人更容易读懂数字 .e.g `1_101_324`。
- `**` 求幂

### 简单介绍一下 TypeScript 模块的加载机制
- 假设有一个导入语句 `import { a } from "moduleA"`;
  1. 首先，编译器会尝试定位需要导入的模块文件，通过绝对或者相对的路径查找方式；
  2. 如果上面的解析失败了，没有查找到对应的模块，编译器会尝试定位一个外部模块声明（.d.ts）；
  3. 最后，如果编译器还是不能解析这个模块，则会抛出一个错误 `error TS2307: Cannot find module 'moduleA'`.

### 简单聊聊你对 TypeScript 类型兼容性的理解
- **ts 类型兼容**：
    当一个类型 Y 可以赋值给另一个类型 X 时， 我们就可以说类型 X 兼容类型 Y。也就是说两者在结构上是一致的，而不一定非得通过 extends 的方式继承而来
- **接口的兼容性**：
    X = Y 只要目标类型 X 中声明的属性变量在源类型 Y 中都存在就是兼容的（ Y 中的类型可以比 X 中的多，但是不能少）
- **函数的兼容性**：
    X = Y  Y 的每个参数必须能在 X 里找到对应类型的参数，参数的名字相同与否无所谓，只看它们的类型（参数可以少但是不能多。与接口的兼容性有区别，原因参考第 17 问）

### 对 TypeScript 类中成员的 public、private、protected、readonly 修饰符的理解？
- public: 成员都默认为public，被此限定符修饰的成员是可以被外部访问；
- private: 被此限定符修饰的成员是只可以被类的内部访问；
- protected: 被此限定符修饰的成员是只可以被类的内部以及类的子类访问;
- readonly: 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

### keyof 和 typeof 关键字的作用
- keyof 索引类型查询操作符 获取索引类型的属性名，构成联合类型。
- typeof 获取一个变量或对象的类型。

### 学习
- <a src="https://juejin.cn/post/7018805943710253086">学习</a>

# 应用
## 图片预加载
- 挂载时，调用preload方法，（预先处理）
- 图片加载成功时触发onload事件，（加载）
- 观察count，当count等于数组长度时，代表全部加载完毕，进行跳转。（跳到指定页面）
