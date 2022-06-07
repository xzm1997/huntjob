# 元素与标签
## 元素
- 元素名大小写不敏感
- 带有`id`的DOM树元素会成为全局变量

## 常用元素
元素|说明
| :----: | :----: |
`<meter>` | 标签定义已知范围或分数值内的标量测量。也被称为 `gauge`（尺度）。`<meter>` 标签不应用于指示进度。标记进度条，应使用 `<progress>` 标签
`<progress>`|`<progress>` 标签与 JavaScript 一起使用来显示任务的进度。`<progress>` 标签不适合用来表示度量衡（如磁盘使用情况的查询结果）。表示度量衡，使用 `<meter>` 标签
`<article>`|代表文档，页面或应用程序中独立的，完整的，可以独自被外部引用的内容，也可以嵌套使用。可以是一篇博客或者报刊中的文章，一篇论坛帖子，一段用户评论或者独立的插件，或其他任和独立的内容。
`<aside>`|用来表示当前页面或文章的附属信息部分，它可以包含当前页面或主要内容相关的引用，侧边栏，广告，导航条，以及其他类型的有别于主要内容的部分。
`<address>`|标签定义文档或文章的作者/拥有者的联系信息。
`<hr>`|标签在 HTML 页面中创建一条水平线。
`<cite>`|标签通常表示它所包含的文本对某个参考文献的引用，比如书籍或者杂志的标题。

## 块级元素
- 一般都是从新行开始，可以容纳行内元素和其他元素
- 块级元素独占一行，宽度自动填满
- 其`width`值和`height`值可以设置
- `margin`和`padding`值
- 行内元素典型代表`span`, `a`, `strong`, `em`, `del`, `ins`
  - 在一行上显示
  - 不能直接设置宽高
  - 元素的宽和高就是内容撑开的宽高
- 行内块元素（内联元素）典型代表`input`, `img`
  - 在一行上显示
  - 可以设置宽高
- 块元素典型代表`div`,`h1`-`h6`,`p`,`ul`,`li`
  - 独占一行
  - 可以设置宽高
  - 嵌套（包含）下，子块元素宽度（没有定义情况下）和父块元素宽度默认一致。
- `block`，`inline`和`inline-block`细节对比
  - `display:block`
    - `block`元素会独占一行，多个`block`元素会各自新起一行。默认情况下，`block`元素宽度自动填满其父元素宽度。
    - `block`元素可以设置`width`,`height`属性。块级元素即使设置了宽度,仍然是独占一行。
    - `block`元素可以设置`margin`和`padding`属性。
  - `display:inline`
    - `inline`元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化。
    - `inline`元素设置`width`,`height`属性无效。
    - `inline`元素的`margin`和`padding`属性，水平方向的`padding-left`, `padding-right`, `margin-left`, `margin-right`都产生边距效果；但竖直方向的`padding-top`, `padding-bottom`, `margin-top`, `margin-bottom`不会产生边距效果。
  - `display:inline-block`
    - 简单来说就是将对象呈现为`inline`对象，但是对象的内容作为`block`对象呈现。之后的内联对象会被排列在同一行内。比如我们可以给一个link（`<a></a>`）`inline-block`属性值，使其既具有`block`的宽度高度特性又具有`inline`的同行特性。

## 通过标签`<a>`打开链接
- 如果在标签`<a>`中写入`target`属性，则浏览器会根据`target`的属性值去打开与其命名或名称相符的框架`<frame>`或者窗口.

  值 | 描述 
  | :---: | :---: |
  `_blank` | 在新窗口中打开被链接文档。
  `_self` | 默认。在相同的框架中打开被链接文档。
  `_parent` | 在父框架集中打开被链接文档。
  `_top` | 在整个窗口中打开被链接文档。
  `framename` | 在指定的框架中打开被链接文档。

## 内联框架
- `<iframe>`元素会创建包含另外一个文档的内联框架
- `<iframe>`元素创建比一般的DOM元素**慢**了 1-2 个数量级:
  - `iframe`的创建比其它包括`scripts`和`css`的DOM元素的创建慢了 1-2 个数量级，使用`iframe`的页面一般不会包含太多`iframe`，所以创建DOM节点所花费的时间不会占很大的比重。
  - 但带来一些其它的问题：`onload`事件以及连接池`connection pool`
- 阻塞页面加载:
  - 及时触发 window 的 `onload` 事件是非常重要的。`onload` 事件触发使浏览器的 “忙” 指示器停止，告诉用户当前网页已经加载完毕。当 `onload` 事件加载延迟后，它给用户的感觉就是这个网页非常慢。
  - window 的 `onload` 事件需要在所有 `iframe` 加载完毕后（包含里面的元素）才会触发。在 Safari 和 Chrome 里，通过 JavaScript 动态设置`iframe`的`SRC`可以避免这种阻塞情况
- 唯一的连接池: 
  - 浏览器只能开少量的连接到web服务器。比较老的浏览器，包含 Internet Explorer 6 & 7 和 Firefox 2，只能对一个域名`hostname`同时打开两个连接。这个数量的限制在新版本的浏览器中有所提高。Safari 3+ 和 Opera 9+ 可同时对一个域名打开 4 个连接，Chrome 1+, IE 8 以及 Firefox 3 可以同时打开 6 个
  - 绝大部分浏览器，主页面和其中的`iframe`是共享这些连接的。这意味着 `iframe`在加载资源时可能用光了所有的可用连接，从而阻塞了主页面资源的加载。如果 `iframe`中的内容比主页面的内容更重要，这当然是很好的。但通常情况下，`iframe`里的内容是没有主页面的内容重要的。这时`iframe` 中用光了可用的连接就是不值得的了。一种解决办法是，在主页面上重要的元素加载完毕后，再动态设置`iframe`的 SRC。
  - 不利于 SEO:
    - 搜索引擎的检索程序无法解读 iframe。另外，iframe 本身不是动态语言，样式和脚本都需要额外导入。
    - 综上，iframe 应谨慎使用。

## script 标签
### async 属性
- 如 `async = 'async'` ，脚本相当于页面其余部分异步执行，即页面执行解析时，脚本执行。
- 如不使用，且 `defer = 'defer'` ，脚本将在页面完成解析时执行

# 像素
## 屏幕尺寸
超小屏幕（手机） | 小屏幕（平板）| 中等屏幕（桌面） | 大屏幕（桌面）
| :---: | :---: | :---: | :---: | 
<768px | >=768px | >=992px | >=1200px
.col-xs- | .col-sm- | .col-md- | .col-lg-

# 格式化数据
## `json`与`xml`
- `xml`
  - 格式统一，符合标准
  - 容易与其他系统进行远程交互，数据传输比较方便
  - `XML`文件庞大，文件格式复杂，传输占带宽
  - 服务器端和客户端都需要花费大量代码来解析`XML`，导致服务器端和客户端代码变得异常复杂且不易维护
  - 客户端不同浏览器之间解析`XML`的方式不一致，需要重复编写很多代码
  - 服务器端和客户端解析`XML`花费较多的资源和时间
- `json`
  - 数据格式比较简单，易于读写，格式都是压缩的，占用带宽小
  - 易于解析，客户端JavaScript可以简单的通过`eval_r()`进行`JSON`数据的读取
  - 持多种语言，包括ActionScript, C, C#, ColdFusion, Java, JavaScript, Perl, PHP, Python, Ruby等服务器端语言，便于服务器端的解析
  - 在PHP世界，已经有`PHP-JSON`和`JSON-PHP`出现了，偏于PHP序列化后的程序直接调用，PHP服务器端的对象、数组等能直接生成JSON格式，便于客户端的访问提取
  - 为`JSON`格式能直接为服务器端代码使用，大大简化了服务器端和客户端的代码开发量，且完成任务不变，并且易于维护
  - 没有XML格式这么推广的深入人心和喜用广泛，没有`XML`那么通用性
  - `JSON`格式目前在Web Service中推广还属于初级阶段


# HTML5
## h5新特性
- 语义标签
- 增强型表单
- 视频和音频
- `Canvas`绘图
- `SVG`绘图
- 地理定位
- 拖放`API`
- `WebWorker`
- `WebStorage`

## 废止特性
- HTML5 废了一些纯控制渲染的标签：`center`、`big`、`font`、`strike`、`b` 等

# 架构
## MVC架构
- 将整个应用分成 Model、View 和 Controller 三个部分，而这些组成部分其实也有着几乎相同的职责。
- 视图：管理作为位图展示到屏幕上的图形和文字输出；
- 控制器：翻译用户的输入并依照用户的输入操作模型和视图；
- 模型：管理应用的行为和数据，响应数据请求（经常来自视图）和更新状态的指令（经常来自控制器）
- 控制器负责对模型中的数据进行更新，而视图向模型中请求数据；当有用户的行为触发操作时，会有控制器更新模型，并通知视图进行更新，在这时视图向模型请求新的数据

## DHTML
- DHTML是Dynamic HTML的简称，就是动态的HTML(标准通用标记语言下的一个应用)，是相对传统的静态的html而言的一种制作网页的概念。
- DHTML只是HTML、CSS和客户端脚本的一种集成，即一个页面中包括html+css+javascript(或其它客户端脚本)
- html+css+javascript（或其他脚本）的优点：html确定页面框架，css和脚本决定**页面样式**、**动态内容**和**动态定位**。
- DHTML实现了网页从Web服务器下载后无需再经过服务的处理，而在浏览器中直接动态地更新网页的内容、排版样式和动画的功能
  - **动态内容**(Dynamic Content)：动态地更新网页内容，可“动态”地插入、修改或删除网页的元件，如文字、图像、标记等。
  - **动态排版样式**(Dynamic Style Sheets)：W3C的CSS样式表提供了设定HTML标记的字体大小、字形、样式、粗细、文字颜色、行高度、加底线或加中间横线、缩排、与边缘距离、靠左右或置中、背景图片或颜色等排版功能，而“动态排版样式”即可以“动态”地改变排版样式。

# 属性
## `data-*` 属性
- 所有主流浏览器都支持 `data-*` 属性。
- `data-*` 属性赋予我们在所有 HTML 元素上嵌入自定义 `data` 属性的能力。
- 存储的（自定义）数据能够被页面的 JavaScript 中利用，以创建更好的用户体验（不进行 `Ajax` 调用或服务器端数据库查询）。
- `data-*` 属性包括**两部分**：
  - 属性名不应该包含任何大写字母，并且在前缀 "data-" 之后必须有至少一个字符
  - 属性值可以是任意字符串
## 跨域
- CSS 文件的加载不受跨域限制
- `window.onerror` 方法默认情况下无法获取跨域脚本的报错详情
- `canvas` 中使用 `drawImage` 贴图会受跨域限制

## 可继承属性
可继承元素种类|元素名
| :---: | :---: |
所有元素|`visibility`和`cursor`。 
内联元素|`letter-spacing`、`word-spacing`、`white-space`、`line-height`、`color`、`font`、`font-family`、`font-size`、`font-style`、`font-variant`、`font-weight`、`text-decoration`、`text-transform`、`direction` 
终端块状元素|`text-indent`和`text-align`。 
列表元素|`list-style`、`list-style-type`、`list-style-position`、`list-style-image`。

# DOM
## DOM 树
- `HTML DOM` 定义了访问和操作 HTML 文档的标准方法。`DOM` 将 HTML 文档表达为树结构。
![DOM树](https://img-blog.csdn.net/20151110111104365)
- 层级结构是指元素和元素之间的关系
- 解析器输出的树是由`DOM`元素和属性节点组成的
- 5个常用的`DOM`方法：
  - `getElemenById`
  - `getElementsByTagName`
  - `getElementsByClassName`
  - `getAttribute`
  - `setAttribute`
- 带有`id`的`DOM`树元素会成为全局变量







