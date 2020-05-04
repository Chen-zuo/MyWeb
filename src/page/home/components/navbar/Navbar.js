import React, { Component } from 'react';
import NavItems from './NavItems';
import Sup from '../sup/Sup';
import Readme from '../readme/Readme';
import Msg from '../msg/Msg';
import Setting from '../setting/Setting';
//引入图片
import sup from './sup.png';
import readme from './readme.png';
import msg from './msg.png';
import setting from './setting.png';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            figures:[
                {
                    title:'点赞',
                    src:sup,
                    child:Sup,
                    isShow: false
                },{
                    title:'说明',
                    src:readme,
                    child:Readme,
                    isShow: false
                },{
                    title:'留言',
                    src:msg,
                    child:Msg,
                    isShow: false
                },{
                    title:'设置',
                    src:setting,
                    child:Setting,
                    isShow: false
                }
            ]
         };
    }

    show=(n)=>{
        let index = this.state.figures.indexOf(n);
        let tempList=this.state.figures;
        tempList.map(val=>val.isShow=false);
        tempList[index].isShow=true;
        this.setState({
            figures:tempList
        })
    }

    close=()=>{
        let tempList=this.state.figures;
        tempList.map(val=>val.isShow=false);
        this.setState({
            figures:tempList
        })
    }

    render() {
        return (
            <div className="navbar">
                {this.state.figures.map((val,key)=>{
                    return(
                        <NavItems
                            key={key}
                            show={this.show.bind(this,val)}
                            close={this.close.bind(this)}
                            {...val}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Navbar;