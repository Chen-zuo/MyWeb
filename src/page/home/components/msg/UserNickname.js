import React, { Component } from 'react';
class UserNickname extends Component {

    constructor(props) {
        super(props);
        this.nickname=React.createRef();
    }

    setName=()=>{
        let str=this.nickname.current.value;
        let reg=/^\s*$/
        if(str === '' || 
            str === undefined || 
            str === null||
            reg.test(str)||
            str.length<=10
        ){
            this.props.setNickName(this.nickname.current.value);
            this.props.close();
        }
    }

    setNameEnter=(e)=>{
        if(e.keyCode===13){
            this.setName();
        }else{
            return
        }
    }

    
    render() {
        return (
            <div className="nickname">
                <input onKeyUp={this.setNameEnter} ref={this.nickname} placeholder="取个昵称吧，≤10个字"/>
                <span onClick={this.setName}>确认</span>
            </div>
        );
    }
}

export default UserNickname;