import React, { Component } from 'react';
import './msg.css';
class Msg extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msgs:[
                {
                    id:'Mr.Z',
                    data:'2020-5-1',
                    msg:'留言板功能还未完善，不能留言啦。'
                },
                {
                    id:'Mr.Z',
                    data:'2020-5-1',
                    msg:'留言板功能还未完善，不能留言啦。'
                },
                {
                    id:'Mr.Z',
                    data:'2020-5-1',
                    msg:'留言板功能还未完善，不能留言啦。'
                },
                {
                    id:'Mr.Z',
                    data:'2020-5-1',
                    msg:'留言板功能还未完善，不能留言啦。'
                },
                {
                    id:'Mr.Z',
                    data:'2020-5-1',
                    msg:'留言板功能还未完善，不能留言啦。'
                },
                {
                    id:'Mr.Z',
                    data:'2020-5-1',
                    msg:'留言板功能还未完善，不能留言啦。'
                },
                {
                    id:'Mr.Z',
                    data:'2020-5-1',
                    msg:'留言板功能还未完善，不能留言啦。'
                },
                {
                    id:'今晚打老虎',
                    data:'2020-1-1',
                    msg:'元旦快乐'
                },
                {
                    id:'XO',
                    data:'2019-6-4',
                    msg:'好好学习'
                }, 
                {
                    id:'369',
                    data:'2018-9-27',
                    msg:'他好像条狗'
                }  
            ]
         };
    }
    render() {
        return (
            <div className="msg">
                <div className="msg-close">
                    <p>
                        <a title="关闭" onClick={()=>this.props.close()}></a>
                        留言板
                    </p>
                </div>
                {/* msg显示 */}
                <div className="msg-content">
                    {this.state.msgs.map((val,key)=>{
                        return (
                            <li>
                                <article>
                                    <strong>{val.id}</strong>
                                    <span>{val.data}</span>
                                </article>
                                <section>
                                    {val.msg}
                                </section>
                            </li>
                        )
                    })}
                </div>
                {/* 输入框 */}
                <div className="comment-send">
                    <div className="comment-container">
                        <input autofocus placeholder="leave message..."/>
                        <span className='comment-submit'>留言</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Msg;