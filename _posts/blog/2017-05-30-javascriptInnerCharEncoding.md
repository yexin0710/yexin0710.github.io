---
layout:     post
title:      【博客搭建系列】我的第一个独立blog
category: blog
tags: wiki
favour: 博客搭建
description: 从0到1教你如何搭建自己的独立博客
---

## 写在前面的话
本博客基于Jekyll+Github Pages进行搭建。模板为[Dailc的个人主页](https://dailc.github.io/about/about.html)
想要搭建一个blog并不是十分容易的事情，作为一个非计算机相关专业的人想要搭建一个属于自己的独立blog可谓困难重重。
网上教程多如牛毛，不过真正能把内在逻辑阐述清晰，让你有一个完整思路的教程真的是凤毛麟角。
我所写的这个教程不一定是完美的，但我会尽量把我踩过的雷区诠释清晰，
本教程基于Mac OS 系统，如非本系统仅供参考。

## 大纲

* 基础
  * git的使用
  * jekyll的使用
  * 前端代码的解读和更改
* 搭建
  * 安装Bundler
  * 安装Jekyll
  * 安装代码编辑器
* 修饰
  * 使用及更改模板
* 发布
  * 使用github Pages
* 问题及解决

## 基础
工欲善其事，必先利其器。

### git的使用
git是一款好用的分布式版本控制系统，它可以轻松实现版本之间的切换，独特的分支和暂存区功能大大提高了开发者的开发和修改效率，便于多人协作。
网上的git教程也是很多，如果你是为了搭建一个blog学习git，推荐学习[廖雪峰老师的git教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
只要你完整地看完廖老师的教程，搭建此博客的git命令也就差不多了。也可以参考我自己整理的git命令。

### Jekyll的使用
Jekyll 是一个简单的博客形态的静态站点生产机器。可以将纯文本转换为静态博客网站。整个网站的页面都是它生成的，从主页index到文章post。
推荐学习[极客学院的Jekyll教程](http://wiki.jikexueyuan.com/project/jekyll/usage.html)以及[Jekyll中文网](http://jekyll.com.cn/)

### 前端代码的解读和更改
由于需要使用别人的模板（当然你是大神直接自己敲代码也可以），多少都要学一些前端的知识。
这是新手快速搭建博客的最佳选择，我们不要重复造轮子，要善于运用别人开源分享出来的源代码来完成我们自己所要达到的目的。

## 搭建

### 安装Bundler
在Terminal中输入：gem install bundler

### 安装Jekyll
在Terminal中输入：gem install jekyll   ；将Jekyll存放于一个新的目录中：jekyll new your-site-name。这里要根据自己的需要活学活用。

### 安装代码编辑器
修改模板时电脑不能直接打开html，css和js等文件，这样我们就必须安装一个可以编辑这些文件的编辑器，推荐使用WebStorm。
WebStorm 是jetbrains公司旗下一款JavaScript 开发工具。
目前已经被广大中国JS开发者誉为“Web前端开发神器”、“最强大的HTML5编辑器”、“最智能的JavaScript IDE”等。与IntelliJ IDEA同源，继承了IntelliJ IDEA强大的JS部分的功能。
太多功能我们暂时用不上，不过这也意味着它完全符合我们目前搭建博客用来修改代码的需求。




## 附录
### 参考资料

* [Unicode与JavaScript详解](http://www.ruanyifeng.com/blog/2014/12/unicode.html)
* [JavaScript的内部字符编码是UCS-2还是UTF-16](http://www.techweb.com.cn/network/system/2016-10-11/2407639.shtml)
* [UTF-16与UCS-2的区别](http://demon.tw/programming/utf-16-ucs-2.html)
* [维基百科.字符编码](https://zh.wikipedia.org/wiki/%E5%AD%97%E7%AC%A6%E7%BC%96%E7%A0%81)