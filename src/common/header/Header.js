import React, { Component } from 'react';
// import moment from 'moment'; 
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
                {indent:true,text:'HOME',herf:'/'},
                {indent:false,text:'BLOG',herf:'/blog'},
                {indent:false,text:'WORK',herf:'/work'},
                {indent:false,text:'ABOUT',herf:'/about'}
            ], 
            date:new Date(),
            navDom:React.createRef()
        };
    }

    componentDidMount(){
        this.timerID=setInterval(()=>this.timeUpdata(),1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    timeUpdata=()=>{
        this.setState({
            date: new Date()
          })
    }

    render() {
        return (
            <div className="header">
                <div className="app-center">
                    <nav ref={this.navDom} className="nav">
                        <span><img src={logo} alt=""/></span>
                        {this.state.nav.map((val,i)=>{
                            return(
                                <a key={i}>
                                    {val.text}
                                </a>
                            )
                        })}
                    </nav>
                    <div className ="timer">
                        <a href="https://github.com/ChenzuozZZ"><img src={git} alt=""/></a>
                        <time>{this.state.date.toLocaleTimeString()}</time>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;