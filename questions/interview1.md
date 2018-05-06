1，xss，CSRF?

	Cross Site Scripting 跨站脚本攻击
	使用XSS这个名字是为了和css区分开来
	往html中注入恶意的js代码，当浏览器在执行时，造成攻击
	效果，盗取cookie，修改数据，跳转至恶意钓鱼网站等
	
	CSRF Cross-site request forgery 跨站请求伪造
	
	验证码，token加在提交的数据上，后端验证数据

﻿react原理，JSX渲染流程
Cookie的使用技巧，原理
cookie是个什么，主要做什么，API有哪些，session的区别，怎么搭配使用，什么场景要用


前端优化
雅虎军规

重构技巧
《重构，改善既有代码的设计》《JavaScript设计模式》

transform？？动画的优化
现在的前端处理动画的方法


ES6的几个方法，assign，some，map，reduce


回流


测试框架，测试UI组件，测试js逻辑

js实现的继承 ES6的class就好了

js的设计模式

SPA，多页面框架合计元素

SSR与首页渲染优化

前端缓存

深浅拷贝

js高阶函数

eval

持续集成


﻿1 了解ES6的所有新特性

1，新的关键字let const  变量的解构赋值
2，原始数据类型 undefined null Boolean String Number Object Symbol
3，在es5上的扩展，主要是新的API，字符串，正则，数值，函数【some map reduce】，数组，对象【assign，getOwnProperty】，新增了API，用的很频繁
4，Set和Map数据结构
5，迭代器中的for…in循环
6，Generator函数
7，async await
8，Class
9，Promise对象

Symbol详解，Reflect详解，Proxy



2 熟练使用命令行，包括 gulp webpack vue-cli git 
常用的构建工具


3 理解前端常用设计模式（装逼词汇），如闭包、面向对象、MVC、MVVM、单项数据流、路由、单元测试、SSR、意大利面
条、模块化、组件化、函数式、纯函数、高阶函数、不可变数据



4 能熟练使用至少一种前端框架，如 vue ng 和 react
熟练掌握React 【JSX，编译过程，生命周期，优化方法，this】

5 熟悉 HTTP，了解请求 响应 缓存 代理 反向代理 https 等   Nginx  部署等
http，https


6 在 GitHub 至少有一个 star 超过 42 的开源代码作品（markdown 不算）
项目1：构建自己的react-koa2-mysql的应用
项目2：储能OS的前端框架改造，清晰描述nova的设计思想，以及渲染过程，好处与坏处分析