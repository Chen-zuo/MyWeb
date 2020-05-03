import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';

class NavItems extends Component {
    
    // 点击navitem时先关闭所有弹窗打开当前弹窗
    handleShow=(close,show)=>{
        let open=new Promise(resolve=>{
            close();
            resolve();
        });
        open.then(()=>show());
    }


    render() {
        const Component = this.props.child;
        return (
            <div className="navitems" >
                <figure onClick={this.handleShow.bind(this,this.props.close,this.props.show)}>
                    <img src={this.props.src} alt=""/>
                    <figcaption>{this.props.title}</figcaption>

                </figure>
                <CSSTransition
                    in={this.props.isShow}
                    key='test'
                    timeout={200}
                    unmountOnExit
                    classNames="figure"
                >
                    <Component  />
                </CSSTransition>
            </div>
        );
    }
}

export default NavItems;