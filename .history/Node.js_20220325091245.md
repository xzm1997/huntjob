# 概念
## 特点
- **异步**、**非阻塞**IO模型
- **事件循环**：Node的背后还有一个线程池，线程池会处理长时间运行的任务。线程池里的任务是通过队列和事件循环的机制来执行。
- **单线程**：Node的主线程只有一个。主线程是用于接收客户端请求。但不会处理具体的任务。
- **总结**：轻量和高效

##事件循环机制
- **微任务**：
  - `process.nextTick()` 注册的回调
  - ` promise.then()` 注册的回调
  - Node在执行微任务时， 会优先执行`nextTick task queue`中的任务，执行完之后会接着执行`promise task queue`中的任务。
![示意图](https://www.hepengfei.net/wp-content/uploads/2021/01/33.png)
- 如果执行了任何非阻塞异步代码（创建计时器、读写文件等），则会进入事件循环。其中事件循环分为六个阶段：
  - **Timers（计时器阶段）**：从图可见，初次进入事件循环，会从计时器阶段开始。此阶段会判断是否存在过期的计时器回调（包含`setTimeout`和`setInterval`），如果存在则会执行所有过期的计时器回调，执行完毕后，如果回调中触发了相应的微任务，会接着执行所有微任务，执行完微任务后再进入`Pending callbacks`阶段。
  - **Pending callbacks**：执行推迟到下一个循环迭代的 `I/O` 回调（系统调用相关的回调）。
  - **Idle/Prepare**：仅供内部使用。
  - **Poll（轮询阶段）**：
    - 当回调队列不为空时：会执行回调，若回调中触发了相应的微任务，这里的微任务执行时机和其他地方有所不同，不会等到所有回调执行完毕后才执行，而是针对每一个回调执行完毕后，就执行相应微任务。
    - 当回调队列为空时：但如果存在有计时器（`setTimeout`、`setInterval`和`setImmediate`）没有执行，会结束轮询阶段，进入`Check`阶段。否则会阻塞并等待任何正在执行的I/O操作完成，并马上执行相应的回调，直到所有回调执行完毕。
  - **Check（查询阶段）**：会检查是否存在`setImmediate`相关的回调，如果存在则执行所有回调，执行完毕后，如果回调中触发了相应的微任务，会接着执行所有微任务，执行完微任务后再进入`Close callbacks`阶段。
  - **Close callbacks**：执行一些关闭回调

## `CommonJS`标准
- 浏览器不兼容`CommonJS`的根本原因，在于缺少四个`Node.js`环境的变量。 `module` `exports` `require` `global`

## 多线程
- `Node.js` 使用两种线程：`event loop` 处理的主线程和 `worker pool` 中的几个辅助线程。
- **事件循环**是一种机制，它采用回调（函数）并注册它们，准备在将来的某个时刻执行。它与相关的 JavaScript 代码在同一个线程中运行。当 JavaScript 操作阻塞线程时，事件循环也会被阻止。
- **工作池**是一种执行模型，它产生并处理单独的线程，然后同步执行任务，并将结果返回到事件循环。事件循环使用返回的结果执行提供的回调。
- 简而言之，它负责异步 `I/O` 操作 —— 主要是与系统磁盘和网络的交互。它主要由诸如 `fs`（`I/O` 密集）或 `crypto`（CPU 密集）等模块使用。工作池用 `libuv` 实现，当 `Node` 需要在 JavaScript 和 C++ 之间进行内部通信时，会导致轻微的延迟，但这几乎不可察觉。

**参考**：<a src = "https://segmentfault.com/a/1190000021462627">一文搞懂 Node.js 中的多线程和多进程</a>

## JavaScript计时器
- `Timer` 函数是由浏览器实现的，不同浏览器的实现方式会有所不同。同时 `Timer` 也是由 `Node.js` 运行时本身实现的。
- 在 `Node` 中，计时器是 `global` 对象的一部分，该对象的行为类似于浏览器的 `window` 。你可以在 `Node` 的源代码中找到它的实现。

## V8 JavaScript 引擎
- `V8` 提供了 JavaScript 执行的运行时环境。 `DOM` 和其他 `Web` 平台 `API` 由浏览器提供。
- JavaScript 引擎独立于它所在的浏览器。 这个关键特性促成了 Node.js 的兴起。
- `V8`是一个开源项目，在性能方面要优于其他JavaScript引擎，Chrome 使用的`V8`引擎，浏览器市场占有率很大，并且`Node`也是基于`V8`研发的，`V8`也支持众多的操作系统和硬件架构，`V8`具有代表性，`V8`自08年发布以来，性能一直在稳步的提高
### 编译
- JavaScript 通常被认为是一门**解释型语言**，但是现代的 JavaScript 引擎不再只是解释 JavaScript，它们会编译它。JavaScript 由 `V8` 在内部使用即时 `JIT` 编译以加快执行速度。
- Java的处理过程加入了`JIT`的概念，`JIT`可以将字节码转为本地代码然后执行，会提高执行效率，`JIT`主要是起到**优化性能**的作用。很多JavaScript引擎也用到了。
- JavaScript被归类**弱类型解释型语言**，因为是弱类型语言，也可以说是动态类型语言。相比较而言，C++或者java等是静态类型语言，他们在编译的时候就能够知道每个变量的类型。而JavaScript在编辑的时候没法知道其变量的数据类型，只有在运行的时候才能确定，这导致JavaScript面临着性能方面的巨大压力。
- 随着将Java虚拟机的`JIT`技术引入，现在的做法是**将抽象语法树转成中间表示**（也就是字节码），然后通过`JIT`技术**转成本地代码**。也有些做法直接从抽象语法树生成本地代码的`JIT`技术，例如早期的`V8`。
- JavaScript引擎**组成**
  - **编译器**：将源代码编译成抽象语法树，在某些引擎（如JavaScriptCore，现在的`V8`）中还包括将抽象语法树转换成字节码
  - **解释器**：在某些引擎（如JavaScriptCore）中，解释器主要是接受字节码，解释执行字节码，但早期V8引擎中没有解释器
  - **JIT工具**：将字节码或者抽象语法树转换成本地代码，优化用
  - **垃圾回收器和分析工具**（profiler）：负责垃圾回收和收集引擎中的信息，帮助改善引擎的性能和功效
![编译过程](https://raw.githubusercontent.com/DengSongsong/Blogs/master/images/v8/JavaScript%E5%BC%95%E6%93%8E%E7%BC%96%E8%AF%91%E8%BF%87%E7%A8%8B.png)
### `V8` 执行过程
- `模块`
  - `parse`：负责将JavaScript源代码转换成**抽象语法树**（`AST`）
  - `Ignition`： `interpreter`，**解释器**，将`AST`转换成**字节码**（`Bytecode`），解析执行字节码，同时也收集TurboFan优化编译所需要的信息
  - `TurboFan：compiler`，`JIT`**编译器**，利用`Ignitio`所收集的类型信息，将`Bytecode`转换为优化的机器码
  - `Orinoco`：`garbage collector`，**垃圾回收模块**，负责将程序不再需要的内存空间回收
![V8](https://raw.githubusercontent.com/DengSongsong/Blogs/master/images/v8/V8%E7%BC%96%E8%AF%91%E8%BF%87%E7%A8%8B.jpg)
- 