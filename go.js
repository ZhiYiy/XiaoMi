/*
跨域 ： CORS JSONP 代理跨域
CORS 服务端设置 前端直接调用 说明 后台允许前端某个站点进行访问

JSONP跨域 前端适配 后台配合 说明：前后台同时改造

接口代理 通过修改nginx服务器配置来实现 说明 前端修改 后台不动


需求梳理

熟悉文档 查看原型 读懂需求
了解前端设计稿 设计前端业务架构
了解后台接口文档 制定相关对接规范
协调资源
搭建前端架构

Cookie  localStorage  sessionStorage
存储大小  4k   5m
有效期  拥有有效期  永久存储
cookie会发送到服务端  存储在内存中  storage只存储在浏览器端
路径 cookie有路径限制 storage只存储在域名下
API cookie没有特定的API  storage有对应的API

为什么要封装Storage

只存储字符串 需要人工转换json


接口错误拦截

统一报错
未登录统一拦截
请求值  返回值统一处理


开发上线的不同阶段 需要不同的配置
不同的跨域方式 配置不同
打包的时候统一注入环境参数 统一管理环境 输出不同的版本包




 */