
想了解或者建议可以加Q：348826240

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
文件位置：src/common/header/header.js 
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



### day three
文件位置：src/common/header/header.css	header.js

​	先给header 中的a标签目录加上 ：hover下的状态，用到了伪元素::after 和相对定位。选中状态的话需要在组件加载时候和点击时候进行添加类名来实现选中。这两种样式都是用到了 `transition` 过渡

​	header 的响应式布局主要用到了媒体查询`@media screen and(xxxxx){}`，手机和PC端出现了不两种样式状态。

​	把时间标签实现了拖动，这个拖动特效实现了移动端的适配，移动端的响应事件有点不同，有兴趣可以百度一下。



### day four
文件位置：src/page/home/component/navbar	

​	主要是完成侧边栏的样式，用flex布局 真滴很方便，遇到的问题：1、react中img标签的src不能直接引用同级目录下的图片文件，需要把图片放在public做静态文件再引用，我直接放同级目录直接import 作为一个变量放在`src:{变量名}`。我把Navbar.js组件做了拆分，方便后面写相关的弹出窗口。

​	顺便写了一个Foot.js组件放在src/common中，遇到了许多细节问题：1、`html,body{height:100%}`可以让页面高度为屏幕显示高度。2、父子元素之间的margin边界重叠问题，解决办法很多要根据实际来。3、移动端点击元素可能会出现蓝色的背景框，给body加上css `-webkit-tap-highlight-``color``: ``transparent``;` `



### day five
调整一下css
给navbar items选中时候上下跳动一下，用了css3动画，文字加上阴影看起来立体了很多。time、header也给个box-shadow，起码要看起来高级点。

修改一下bug
1、子页面刷新时候 总是HOME 被选中状态， 而不是当前页，用了一下history包`import {createBrowserHistory} from 'history';`，在根组件App.js中传值`const history=createBrowserHistory();`给子组件History.js再访问history.location.hash，Header.js组件加载完成的时候判断需要给哪个组件加上选中状态。

2、footer的位置老是不好确定，刷新会出现在奇怪的地方，原因是页面高度设置的`body,html{heght:100%}`为屏幕可视区的高度。

=======
# MyWeb
create by react
>>>>>>> 81836b5101fb7c667857a2efb7b1fd7dbbc0e9e7
