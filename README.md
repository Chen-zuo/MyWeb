<<<<<<< HEAD
### 目录

[TOC]



### 快速食用

```shell
//先下载 或者 用git工具 clone
git clone https://github.com/ArthurYung/react-my-website.git
//进去目录下
cd myweb

// 安装依赖包，在package.json里查看有些啥包
npm install
//运行
npm run start
```

这里有一个地方要注意，做项目的时候npm安包有时候在package.json中没有相关信息，所以npm install之后还是报错没有找到Moudle，原来是因为我安装包的时候命令用了cnpm 导致了没有相关信息，我又重新装了一遍，所以大家自己做项目时候千万注意写正规的语句  最好加上 -s -d，觉得npm慢就用 nrm改用淘宝镜像。



### day one

​	第一天应该想了半天时间大概myweb有些个什么内容，早日打算计划生育。首先打算先把路由匹配起来，然后发现了新的点：**路由按需加载：**https://www.cnblogs.com/cckui/p/11492510.html	使用react-loadable实现代码分割，组件的异步加载。在项目中体现在src/route/RouterLoading.js

​	

### day two

​	主要整<header />组件，在src/App.js组件中引入<header />和路由组件<RouterMap/> 

。头部中的时间可以自己写，

```react
componentDidMount(){
    this.timerID=setInterval(()=>this.timeUpdata(),1000)
}

componentWillUnmount(){
    clearInterval(this.timerID);
}

timeUpdata=()=>{
        this.setState({
            //.toLocaleTimeString()转换为24小时时间字字符串
            date: new Date().toLocaleTimeString();
          })
    }
```

在设置在componentDIdmount中实现每秒刷新，记得在componentWillUnmount时候要清楚定时器。不想自己写就用`Moment.js `时间格式化插件。

​	组件整好了，把初始化样式./common/init.css弄起，今天先把头部样式搞定。

=======
# MyWeb
create by react
>>>>>>> 81836b5101fb7c667857a2efb7b1fd7dbbc0e9e7
