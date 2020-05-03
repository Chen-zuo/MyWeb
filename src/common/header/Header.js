import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';
import git from './github.png';
import './header.css'


/**
 * @name 导航栏组件
 */
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            nav:[
                {indent:true,text:'HOME',herf:'/',isLink:null},
                {indent:false,text:'BLOG',herf:'/blog',isLink:null},
                {indent:false,text:'WORK',herf:'/work',isLink:null},
                {indent:false,text:'ABOUT',herf:'/about',isLink:null}
            ], 
            date:new Date(),
            timeNode:React.createRef()
        };
    }

    componentDidMount(){
        this.timerID=setInterval(()=>this.timeUpdata(),1000);
        this.isLink();
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    //更新时间
    timeUpdata=()=>{
        this.setState({
            date: new Date()
          })
    }

    //给a标签加hover
    isLink=()=>{
        let tempList=this.state.nav;
        tempList.forEach((val)=>{
            if(val.indent===true){
                val.isLink='isLink';
            }else{
                val.isLink=null;
            }
        });
        this.setState({
            nav:tempList
        });
    }

    handleIndent=(index)=>{
        this.state.nav.forEach((val)=>{
            val.indent=false;
        });
        let tempList=this.state.nav;
        tempList[index].indent=true;
        tempList.forEach((val)=>{
            if(val.indent===true){
                val.isLink='isLink';
            }else{
                val.isLink=null;
            }
        });
        this.setState({
            nav:tempList
        });
    }

    //给time添加拖拽，方法还要适配移动端
    handleDarg=(e)=>{
        let timeNode=this.state.timeNode.current;
        if(document.body.clientWidth<=500){
            let x=e.clientX-timeNode.offsetLeft;
            let y=e.clientY-timeNode.offsetTop;
            function move(e){
                timeNode.style.left=e.clientX-x+'px';
                timeNode.style.top=e.clientY-y+'px';
            }
            document.addEventListener('mousemove',move)
            document.addEventListener('mouseup',()=>{
                document.removeEventListener('mousemove',move)
            })
        }
    }
    handleDargMob=(e)=>{
        let timeNode=this.state.timeNode.current;
        if(document.body.clientWidth<=500){
            let x=e.touches[0].pageX-timeNode.offsetLeft;
            let y= e.touches[0].pageY-timeNode.offsetTop;
            function move(e){
                timeNode.style.left=e.touches[0].pageX-x+'px';
                timeNode.style.top=e.touches[0].pageY-y+'px';
            }
            document.addEventListener('touchmove',move)
            document.addEventListener('touchend',()=>{
                document.removeEventListener('touchmove',move)
            })
        }
    }

    render() {
        return (
            <div className="header">
                <div className="app-center">
                    <nav className="nav" >
                        <span><img src={logo} alt=""/></span>
                        {this.state.nav.map((val,index)=>{
                            return(
                                <Link 
                                    key={index} 
                                    to={val.herf} 
                                    className={val.isLink}
                                    onClick={this.handleIndent.bind(this,index)}
                                >
                                    {val.text}
                                </Link>
                            )
                        })}
                    </nav>
                    <div className ="timer">
                        <a href="https://github.com/Chen-zuo"><img src={git} alt=""/></a>
                        <time 
                            onMouseDown={this.handleDarg}
                            onTouchStart={this.handleDargMob}
                            ref={this.state.timeNode}
                        >
                            {this.state.date.toLocaleTimeString()}
                        </time>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;