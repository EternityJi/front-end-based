# git详解

## git三个区

工作区 暂存区 仓库区

## git命令

1. git init(git初始化 每个项目初始化一次)
2. git add (将文件从工作区到暂存区)
3. git commit(将文件从暂存区到仓库区)
4. git commit -a -m (将已经暂存过(add)的修改的文件直接提交)
4. git status (查看文件状态)
5. git log(查看日志)
6. git diff(查看工作区与暂存区的不同)
7. git diff --cached(查看暂存区与仓库区的不同)
8. git diff HEAD (查看工作区与仓库区的不同  HEAD表示最新的那次提交)
9. git diff c265262 de4845b(查看两个版本的不同)

### git reset(版本回退  将代码恢复到已经提交的某一个版本中)

1. git reset --hard 版本号 将代码回退到某个指定的版本(版本号只要有前几位即可)
2. git reset --hard head~1 将版本会退到上一次提交
   ~1: 上一次提交
   ~2: 上上次提交
   ~0: 当前提交
★★★关于参数 --hard的解释
git reset --soft 版本号: 只重置仓库区
git reset --maxed 版本号: 重置仓库区和暂存区(默认)
git reset --hard  版本号: 重置仓库区和暂存区和工作区域

使用git log  只能查看当前版本之前的信息  
使用git reflog 可以查看所有的版本信息

### git忽视文件

管理不想被git管理的文件 即不想上传的文件

1. 在仓库的根目录下面创建一个.gitignore的文件  文件名是固定的
2. 将不需要别git 管理的文件路径添加到.gitignore中

### git分支

1. git branch 分支名称 (创建分支)
2. git branch (查看所有的分支)
3. git checkout 分支名称 (切换分支)
4. git checkout -b 分支名称 (切换并且创建分支)
5. git branch -d 分支名称(删除分支)
6. git merge 分支名称(合并分支)

### 分支冲突

对于同一个文件  如果有多个分支需要合并时 容易冲突
如果出现冲突 只能手动处理  再次提交 一般的做法 把自己的代码放到冲突代码的后面即可

## git与girhub

1. git与giehub没有直接的关系
2. git是版本控制工具
3. github是一个代码脱管平台  开源社区  是git的一个远程仓库

注意点:

```js
//1. gitHub是一个面向开源及私有软件项目的托管平台，因为只支持git 作为唯一的版本库格式进行托管，故名gitHub。
//2. github免费，代码所有人都能看到，但是只有你自己能修改。付费的可以隐藏。
//3. 创建git项目时，不能有中文。
```

### 操作

git push
git pull
git clone
git remote 给仓库设置别名  git remote add jepson git@github.com:jepsongithub/test.git  
git remote remove jepson 删除别名   
git clone的仓库默认有一个origin的别名