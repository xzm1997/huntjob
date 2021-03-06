# 属性
## Position定位的几种取值
- static
- relative
- absolute
- sticky
## absolute和relative同时设置top值效果一样吗
- 不一样，相对位置与绝对位置
## Transform这个属性的偏移是重排还是重绘
- CSS的最终表现分为以下四步：Recalculate Style -> Layout -> Paint Setup and Paint -> Composite Layers
- 查找并计算样式 -> 排布 -> 绘制 -> 组合层
- 由于transform是位于Composite Layers层，而width、left、margin等则是位于Layout层，在Layout层发生的改变必定导致Paint Setup and Paint -> Composite Layers，所以相对而言使用transform实现的动画效果肯定比left这些更加流畅。
# 盒模型
## 盒模型，以及`box-sizing:border-box`使用场景，这两者的区别
- CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：**边距**，**边框**，**填充**，和**实际内容**。
## rem em
- 有一个比较普遍的误解，认为 em 单位是相对于父元素的字体大小。 事实上，它们是相对于使用em单位的元素的字体大小。父元素的字体大小可以影响 em 值，但这种情况的发生，纯粹是因为继承。
- rem 单位翻译为像素值是由 html 元素的字体大小决定的。 此字体大小会被浏览器中字体大小的设置影响，除非显式重写一个具体单位。
- em 单位转为像素值，取决于他们使用的字体大小。 此字体大小受从父元素继承过来的字体大小，除非显式重写与一个具体单位。
## 怎么计算不同屏幕rem
- 屏幕宽度:屏幕高度 > 16:9
  - 此时设计图需要等比例放大，直到 显示高度 = 屏幕高度；
  - 由于始终 设计图宽度 : 设计图高度 = 16:9，
  - 所以最终 显示宽度 = 屏幕高度 * (16 / 9)，显示高度 = 显示宽度 / (16 / 9)；
- 屏幕宽度:屏幕高度 <= 16:9
  - 此时始终 显示宽度 = 屏幕宽度，显示高度 = 显示宽度 / (16 / 9)

# Flex
## 概述
- Flex是FlexibleBox的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。任何一个容器都可以指定为Flex布局。行内元素也可以使用Flex布局。
- 注意，设为Flex布局以后，**子元素的float、clear和vertical-align属性将失效**。采用Flex布局的元素，称为Flex容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称"项目"。
- 容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis），项目默认沿水平主轴排列.
## Flex整个宽度不够的话会做什么处理？
- grow
  - 默认值0，如均不设置，则空余剩余部分
  - 计算
    - 剩余空间：x
    - 假设有三个flex item元素，flex-grow 的值分别为a, b, c
    - 每个元素可以分配的剩余空间为： a/(a+b+c) * x，b/(a+b+c) * x，c/(a+b+c) * x
- shrink：





  - 默认值是 1
  - 计算
    - 三个flex item元素的width: w1, w2, w3
    - 三个flex item元素的flex-shrink：a, b, c
    - 计算总压缩权重： sum = a * w1 + b * w2 + c * w3
    - 计算每个元素压缩率：S1 = a * w1 / sum，S2 =b * w2 / sum，S3 =c * w3 / sum
    - 计算每个元素宽度：width - 压缩率 * 溢出空间
## flex缩写
单值语法 | 等同于 | 备注
| :---: | :---: | :---: |
flex: initial | flex: 0 1 auto | 初始值，常用
flex: 0 | flex: 0 1 0% | 适用场景少
flex: none | flex: 0 0 auto | 推荐
flex: 1 | flex: 1 1 0% | 推荐
flex: auto | flex: 1 1 auto | 适用场景少
- initial: 元素会根据自身宽高设置尺寸。它会缩短自身以适应 flex 容器，但不会伸长并吸收 flex 容器中的额外自由空间来适应 flex 容器 。相当于将属性设置为 `flex: 0 1 auto`。
- auto: 元素会根据自身的宽度与高度来确定尺寸，但是会伸长并吸收 flex 容器中额外的自由空间，也会缩短自身来适应 flex 容器。这相当于将属性设置为 `flex: 1 1 auto`.
- none: 元素会根据自身宽高来设置尺寸。它是完全非弹性的：既不会缩短，也不会伸长来适应 flex 容器。相当于将属性设置为 `flex: 0 0 auto`。

# 伪类与伪元素
## CSS有哪些伪类，实现选择偶数个对象元素的伪类是什么
- **静态伪类**：只能用于超链接的样式
  - `:link` 超链接点击之前
  - `:visited` 链接被访问过之后
- **动态伪类**：针对所有标签都适用的样式
 - `:hover` “悬停”：鼠标放到标签上的时候
 - `:active` “激活”： 鼠标点击标签，但是不松手时。
 - `:focus` 是某个标签获得焦点时的样式（比如某个输入框获得焦点）

# 自适应
## 媒体查询
- @media 可以针对不同的屏幕尺寸设置不同的样式，特别是如果你需要设置设计响应式的页面，@media 是非常有用的。
