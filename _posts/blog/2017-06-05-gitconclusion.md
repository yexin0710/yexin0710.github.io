---
layout:     post
title:      Git命令总结
category:   命令
tags:       总结
favour:     命令总结
description: 总结常用的git命令，供以后使用。
---

## 分支操作


  * 列出所有现有分支

                   $ git branch -av
  * 切换分支

                   $ git checkout <branch>
  * 基于当前分支建立一个新的分支

                   $ git branch <new-branch>
  * 基于远程分支建立一个新的跟踪分支

                   $ git checkout --track <remote/bran-ch>
  * 删除一个本地分支

                   $ git branch -d <branch>
  * 标记当前分支（标记名称自定义）

                   $ git tag <tag-name>


## 更新和发布


  * 列出目前所有的git文件以及相关内容

                   $ git remote -v
  * 显示远程信息

                   $ git remote show <remote>
  * 添加新的远程库

                   $ git remote add <short name>
  * 从远程下载所有更改但不要更改到本地

                   $ git fetch <remote>
  * 从远程直接下载所有更改并更改进本地

                   $ git pull <remote> <branch>
  * 远程发布本地更改

                   $ git push <remote> <branch>
  * 把本地库的所有内容推送到远程库上

                   $ git push -u origin master
  * 在远程删除一个分支

                   $ git branch -dr <remote/branch>
  * 发布标签

                   $ git push --tags


## 创造


  * 克隆现有库(克隆其他人的仓库，但是必须知道那个仓库的地址)

                   $ git clone ssh://user@domain.com/repo.git
  * 创建一个新的本地储存库(将一个空目录变成git可以管理的仓库)

                   $ git init


## 本地更改


  * 查看当前修改(时刻掌握仓库当前的状态)

                   $ git status
  * 查看当前修改的不同(显示仓库修改前后的不同点，显示的格式是Unix通用的diff格式)

                   $ git diff
  * 添加当前所有变化到暂存区(把文件添加到仓库)

                   $ git add
  * 提交所有本地变化

                   $ git commit -a
  * 提交现有的本地更改

                   $ git commit
  * 把文件提交到仓库（“”中写此次提交的内容）

                   $ git commit -m“file”
  * 改变过去的改变（不能提交修改发表）

                   $ git commit --amend
  * 将本地仓库关联到远程库中（需要电脑配置好了SSH Key公钥）

                   $ git remote add origin git@server-name:path/repo-name.git

                   $ git remote add origin(远程库)


## 修改历史


  * 显示所有修改(显示最近到最远的提交日志，也可以加上“- -pretty=oneline” 参数)

                   $ git log
  * 显示变化的修改

                   $ git log -p < le>
  * 查看命令历史

                   $ git reflog
  * 显示谁在文件中修改了什么

                   $ git blame < le>


## 合并


  * 将分支合并到当前的头

                   $ git merge <branch>
  * 退回版本

                   $ git reset
  * 回到最近一次git commit 或git add 时的状态

                   $ git checkout - -file(文件)
  * 变更你当前的头（不要提交）

                   $ git rebase <branch>
  * 终止一个变基

                   $ git rebase --abort


## 核心总结


  * git是一个分布式版本控制系统

  * repository是版本库，仓库（可以理解成一个目录）

  * 所有的版本控制系统都只能跟踪文本文件的改动，不能跟踪文件的变化，只能把二进制文件每次改动串起来。

  * Unix的哲学是“没有消息就是好消息”

  * pwd命令用于显示当前目录，mkdir命令用于建立一个新的空目录

  * 提交修改和提交新文件是一样的两步，即git add 和git commit

  * git中用HEAD表示当前版本

  * git 跟踪并管理的是修改而非文件（git跟踪修改时每次修改如果不add到暂存区，那就不会加入到commit中）

  * git checkout - -file(文件) 命令可以让这个文件回到最近一次git commit 或git add 时的状态

  * git reast HEAD file 命令可以把暂存区的修改撤销掉（unstage），重新放回工作区。

  * git有工作区，暂存区，版本库，远程库

  * git rm 用于删除一个文件（如果该文件已经提交到版本库就不用担心误删等操作，可以用get checkout - -file命令进行复原，但会丢掉最近一次提交后你修改的内容）

  * git remote add origin(远程库) git@github.com:yourgithubusername/file.git 命令可以将本地仓库关联到远程库中（需要电脑配置好了SSH Key公钥）git remote add origin git@server-name:path/repo-name.git

  * git push -u origin master命令可以把本地库的所有内容推送到远程库上，第一次推送关联所以加上了-u参数（把当前分支master推送到远程）

  * git clone 命令可以克隆其他人的仓库，但是必须知道那个仓库的地址

  * git支持多种协议，包括https。通过ssh支持的原生git协议速度最快

  * git checkout 命令加上-b参数表示创建并切换（相当于git branch dev , git checkout dev两个命令）

  * 查看分支 git branch

  * 创建分支 git branch <name>

  * 切换分支 git checkout <name>

  * 创建加切换分支 git checkout -b <name>

  * 合并某分支到当前分支 git merge <name>

  * 删除分支 git branch -d <name>

  * 开发一个新功能最好新建一个分支


