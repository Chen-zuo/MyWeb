import React, { Component } from 'react';
import './msg.css';
import {CSSTransition} from 'react-transition-group';
import UserNickname from './UserNickname';
class Msg extends Component {
    constructor(props) {
        super(props);
        this.input=React.createRef();
        this.date=new Date;
        this.state = { 
            nickname:null,
            isShow:true,
            msgs:[
                {
                    id:'Mr.Z',
                    data:'2020-5-1',
                    msg:'留言板功能还未完善，日后再说。'
                },
                {
                    id:'Mr.Z',
                    data:'2020-5-1',
                    msg:'这是个0。'
                },
                {
                    id:'Mr.Z',
                    data:'2020-5-1',
                    msg:'This is 1'
                },
                {
                    id:'Mr.Z',
                    data:'2020/5/1',
                    msg:'233333333'
                },
                {
                    id:'Mr.Z',
                    data:'2020/5/1',
                    msg:'4不4傻'
                },
                {
                    id:'XO',
                    data:'2019/6/4',
                    msg:'好好学习'
                }, 
                {
                    id:'369',
                    data:'2018/9/27',
                    msg:'长一点就能看见滚动条了'
                },
                {
                    id:'369',
                    data:'2018/9/27',
                    msg:'长一点'
                },
                {
                    id:'369',
                    data:'2018/9/27',
                    msg:'再长一点'
                }

            ]
         };
    }

    componentDidMount(){
        let tempNickName=JSON.parse(localStorage.getItem('nickname'));
        let tempMsgs=JSON.parse(localStorage.getItem('msgs'));
        if(tempNickName){
            this.setState({
                isShow:false,
                nickname:tempNickName
            })
        }else{
            this.setState({
                isShow:true,
                nickname:null
            })
        }
        if(tempMsgs){
            this.setState({
                msgs:tempMsgs
            })
        }

    }

    componentWillUnmount(){
        localStorage.setItem('msgs',JSON.stringify(this.state.msgs));
    }

    // 关闭nickname设置框
    close=()=>{
        this.setState({
            isShow:false
        })
    }

    handleMsg=()=>{
        let str=this.input.current.value;
        let tempList=this.state.msgs;
        let reg=/^\s*$/
        if(str === '' || str === undefined || str === null||reg.test(str)||this.state.nickname===null)
        {return} // 如果输入的全是空格，则不提交
        else{
            tempList.unshift({
                id:this.state.nickname,
                data:this.date.toLocaleDateString(),
                msg:str})
        }
        this.setState({
            msgs:tempList
        })
        this.input.current.value=null;
    }

    handleMsgEnter=(e)=>{
        if(this.state.nickname===null){
            this.setState({
                isShow:true
            })
        }else{
            if(e.keyCode===13){
                this.handleMsg();
            }else{
                return
            }
        }
    }

    setNickName=(val)=>{
        localStorage.setItem('nickname',JSON.stringify(val));
        this.setState({
            nickname:val
        })
        this.close();
    }

    render() {
        return (
            <div className="msg">
                <CSSTransition
                    in={this.state.isShow}
                    key='test'
                    timeout={200}
                    unmountOnExit
                    classNames="nickname"
                >    
                    <UserNickname close={this.close} setNickName={this.setNickName}/>
                </CSSTransition>
                <div className="msg-close">
                    <p><a title="关闭" onClick={()=>this.props.close()}></a>留言板 </p>
                </div>
                {/* msg显示 */}
                <div className="msg-content">
                    {this.state.msgs.map((val,key)=>{
                        return (
                            <li key={key}> 
                                <article>
                                    <strong>{val.id}</strong><span>{val.data}</span>
                                </article>
                                <section>{val.msg}</section>
                            </li>
                        )
                    })}
                </div>
                {/* 输入框 */}
                <div className="comment-send">
                    <div className="comment-container">
                        <input 
                            ref={this.input}
                            placeholder="说点什么吧"
                            onKeyUp={this.handleMsgEnter}/>
                        <span className='comment-submit' onClick={this.handleMsg}>留言</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Msg;