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

## day02 前端工程化


## koa-setup



## webpack/rollup/vite



#### webpack

多入口多文件，版本更新考虑和服务器搭建等功能实现

具体项目实现地址https://github.com/fafa123hua/flex



#### webpack/rollup/vite区别优势使用





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



