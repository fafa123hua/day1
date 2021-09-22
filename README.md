掘金地址：https://juejin.cn/user/2243435456897928

# day01 基础



## git提交规范

格式：
type(scope) : subject

( 1 ) type（必须） : commit 的类别，只允许使用下面几个标识：

feat : 新功能

fix : 修复bug

docs : 文档改变

style : 代码格式改变

refactor : 某个已有功能重构

perf : 性能优化

test : 增加测试

build : 改变了build工具 如 grunt换成了 npm

revert : 撤销上一次的 commit

chore : 构建过程或辅助工具的变动

( 2 ) scope（可选） : 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

( 3 ) subject（必须） : commit 的简短描述，不超过50个字符。

## node基础和搭建一个http服务器

通过流的形式返回图片，降低内存消耗

## cli搭建

npm link 可以将bin/zqh.js 放到全局进行操作

ora可以选择降版本使用

## 持久化技术

## cookie/session

cookie具有不可跨域名性

cookie.setMaxAge控制其生命周期

cookie数据存放在客户的浏览器上，session数据放在服务器上；带来的问题是cookie安全性不高，session会增加服务器负担

# day02 前端工程化



## esm规则

ES module的设计思想是尽量的`静态化`，使得`编译时就能确定模块的依赖关系`，以及输入和输出的变量。

1、ES6模块导入使用import...from...，{}里存放导入的方法
2、可以一起导入，也可以分开导入
3、named as myName中的as为重命名
4、import * as mylib from 'src/lib'
    把模块里定义导出的所有方法，绑定到mylib对象上
5、import 'src/mylib'代表只是把文件模块加载进来，没有调用相关方法



## koa-setup

核心：自动化思维

1. 创建了文件夹 （项目名）
2. 创建了 index.js
3. 创建了 Package.json
4. 安装依赖



## webpack/rollup/vite

原始项目的一些命名冲突，来源不清晰的情况因此演化出了各种工具，例如webpack/rollup/vite

#### webpack打包实现

多入口多文件，版本更新考虑和服务器搭建等功能实现

具体项目实现地址https://github.com/fafa123hua/flex



#### webpack/rollup/vite特点区别优势使用

#### webpack：

1.本质上是基于require，将esm=>require（自定义）（动态的）分析不出来；

2.从应用场景上来看webpack适合大型复杂的前端站点构建；

#### rollup：

1.从应用场景上来看rollup适合基础库的打包；

2.rollup本身不支持cjs形式的导入，但支持cjs形式导出；

3.rollup是面向`esm`的（静态）

4.支持导出`es`模块文件（webpack不支持导出es模块）

#### vite：

1.基于浏览器原生 ES imports 的开发服务器；

2.vite 只启动一台静态页面的服务器，对文件代码不打包，服务器会根据客户端的请求加载不同的模块处理，实现真正的按需加载；

![基于 ESM 的开发服务器](https://vitejs.cn/assets/esm.3070012d.png)

3.vite 采用立即编译当前修改文件的办法。同时 vite 还会使用缓存机制( http 缓存 => vite 内置缓存 )，加载更新后的文件内容，vite 具有了快速冷启动、按需编译、模块热更新等优良特质；

4.vite是包裹rollup的；



## 测试

##### 测试分层

用户手动测试

用户e2e测试

用户组件测试

用户单元测试



##### 单测 jest



##### 组件测试 cypress

@cypress/vue@next

@cypress/vite-dev-server

运行 open-ct 

vtu 是vue官方出版的测试



##### e2e测试 cypress



##### git hook （husky



##### lint&eslint

检测js代码里面的问题



## 基础能力

vite天然包裹rollup

### 自写loader

package.json加了type会有影响

将md装换成js的形式，让webpack打包可以识别



### 自写plugin

核心：在对应的时机做对应的事（时机参考api）



### esbuild



## 服务端



### 工具的版本控制



### 研发和数据统计

发布频率

工具使用



# day03 前端中后台体系概论

合理设计组件体系，高度覆盖日常开发需求；

实现数据和表现分离，强化复杂数据处理的能力；

以可视化的方式快速生成新界面的能力；



#### 中后台业务的特点

工作量大，页面多；

交互复杂，页面信息量大，涉及到数据模型复杂；

工作效率要求大于审美要求；

多数情况下属于刚需使用；

#### 中后台体系的目标

开发效率（复用性）；

易用性效率>美观、体验；

便捷的交互；

复杂数据处理的能力；

可访问性要求提升；

国际化要求提示；

## 组件体系分析

常见组件

<https://ant.design>
<https://vuetifyjs.com>
<https://react-bootstrap.github.io>
<https://mui.com>
<https://element.eleme.io>



### [Ant Design Pro](https://pro.ant.design/zh-CN)

npx create-umi myapp

第一步先选择 ant-design-pro，之后按需

antd 的模板，simple 是基础模板，complete 包含 antd 的集成方案；

 npm install 安装依赖，完成



## 设计组件

掘金地址：https://juejin.cn/post/7010761400532516895/