---
layout:     post
title:      Python网络爬虫（1）
category:   爬虫
tags:       爬虫
favour:     爬虫
description: 以新浪新闻爬虫为例，全面总结基础网络爬虫的工作原理及操作代码
---

## 为什么要写爬虫
爬虫作为网络世界的信息搜寻工，可以说对于网络来说是不可或缺的一部分，搜索引擎的基础也是爬虫，可见其地位的重要性。我们当然不能写出像百度这样的庞然大物，但是写出一些有助于提高信息搜集能力的爬虫来帮助我们工作和生活还是可以的。
简单来说用一个爬虫处理信息要比自己手动处理信息方便的多，可以节省大量的时间去做其他事情而不是把时间放到重复的操作上面，这是一种以时间换取时间的工作方法。

## 爬虫处理了什么
爬虫主要处理非结构化的数据（没有固定的数据结构，网页资料等），并将它们转化成结构化的信息，以方便用户进行分析总结。

## 简单网络爬虫的架构
根据web connector(网页链接器)request(请求)到网页，网页response(回应),这一一般网页请求模式来进行爬虫开发，通过对原始资料的资料剖析，由ETL脚本来进行数据抽取转换，将非结构化的网页数据转化为结构化数据，最后存储到数据库中。

## 开始写爬虫前的准备工作
### 使用开发人员工具
观察http请求与返回的内容，单击右键选择检查，选择network页签，doc，刷新网页进行观察。（推荐使用[chrome浏览器](http://www.google.cn/chrome/browser/desktop/)的內建开发人员工具）
### 安装requests,BeautifulSoup4,jupyter
* pip install requests(网络资源撷取套件)
* pip install BeautifulSoup4(找出所有含有特定标签的html元素，使用select找出含有XX的元素)(基础操作：select，ID前需加#，Class前需加.)
* pip install jupyter(用jupyter notebook编辑python,撰写爬虫)

## 新浪新闻网络爬虫
* 抓起内文资料
  * 取得内文页面
  * 抓取标题
  * 来源与时间（取得时间及来源）
  * 处理新闻来源信息
  * 取得内文
  * 取得编辑名称
  * 取得评论数
* 剖析新闻标识符
  * 取得新闻编号（正规表达式）
  * 将抓取评论数方法整理成一函式
* 内文信息抽取函式
  * 将抓取内文信息的方法整理成一函式，一次回传全部抓取的信息
* 从列表中连结取出每篇新闻内容
  * 取得每个分页的清单
  * 剖析分页信息
  * 建立剖析清单链接函式
  * 使用for循环产生多页链接
  * 批次抓取每页新闻内文
* 使用Pandas套件整理资料
* 保存到数据库
  * 将资料保存到sqlite3中

## 具体代码如下
由于范例中许多代码都是一步成型的编写，有几个步骤的跳跃如不能够理解，请联系本人索要细节代码，（细节部分代码略过不进行整理），只写出最终可运行代码。
### 三个函式
自定义函式代码整理
##### 评论数整理函式

        import re
        import json
        def getcommentcounts(newsurl)
        m=re.search('doc-i(.t).shtml',newsurl)
        newsid = m.group(1)
        comments = requests.get (commentURL.format(newsid))
        jd = json.loads(comments.text.strip('var data= '))
        return jd ['result']['count']['total']

        news = 'http:// '
        getcommentcounts(news)

##### 内文信息抽取函式

        import requests
        from bs4 import BeautifulSoup
        def getnewsdetail(newssurl:):
            result={}
            res = requests.get(newssurl)
            res.encoding = 'utf-8'
            soup = BeautfulSoup(res.text,'html.parser')
            result['title'] = soup.select('#artibody Title')[0].text
            result['newssource'] = soup.selet('.time-source span a')[0].text
            timesource = soup.select('.time-source')[0].contents[0].strip()
            result['dt'] = datetime.strptime(timesource , '%Y年%m月%d日.%H:%M')
            result['article'] = ' '.join[p.text.strip()for p in soup.select('#artibody p')[:-1]]
            result['editor'] = soup.select('.article-editor')[0].text.strip('责任编辑')
            result[]'comments' = getcommentcounts(newsurl)
            return result

        getnewsdetail('http://   ')

##### 剖析清单链接函式

        def parselistlinks(url):
            newsdetals = []
            res = requests.get(url)
            jd = json.loads(res.text.lstrip('newsloadercallback(').rstrip(');'))
            for ent in jd['result']['data']:
                newsdetails.apped(getnewsdetail(ent['url']))
            return newsdetails
        url ='http：//   '
        parselistlinks(url)

### 使用for循环产生多页连结

        url = 'http://   {}'
        for i in range(1,10):
            newssurl = url.format(i)
            print(newsurl)

### 批次抓取每页新闻内容

        import requests
        url = 'http://    '
        news_total =[]
        for i in range(1,3):
            newsurl = url.format(i)
            newsary = parselistlinks(newsurl)
            news_total.extend(newsary)
        len(nwes_total)

### 使用Pandas整理资料

        import pandas
        df = pandas.DataFrame(news_total)
            df.head()

### 保存到数据库

        df.to_excel('news.xlsx')

### 保存到资料库

        import sqlite 3
        with sqlite3.connect.('news.sqlite')as db:
        df.to_sql('news',con = db)

### 总结
由于对底层技术不甚了解，所以写一个爬虫很是吃力，有更好的解决方案我会及时更新出来。对于此次新浪新闻爬虫只是停留在理论学习阶段，未进行实际测试，如有需要实际应用的朋友可以自己将代码改写。感谢您花费时间查看此爬虫。




