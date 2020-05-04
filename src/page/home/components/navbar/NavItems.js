import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';
// import './navbar.css';

class NavItems extends Component {  
          
    // t退场动画和下一个的出场动画要异步，整个睡眠时间
    handleShow=(close,show)=>{
        let open=new Promise(resolve=>{
            close();
            setTimeout(resolve,100);
        });
        open.then(()=>show());
    }


    render() {
        const isShow = this.props.isShow
        const Component = this.props.child;
        return (
            <div className="navitems" >
                <figure onClick={this.handleShow.bind(this,this.props.close,this.props.show)}>
                    <img src={this.props.src} alt=""/>
                    <figcaption>{this.props.title}</figcaption>
                 </figure>
                <CSSTransition
                    in={isShow}
                    key='test'
                    timeout={200}
                    unmountOnExit
                    classNames="figure"
                >    
                    <Component   close={this.props.close}/>
                </CSSTransition>
            </div>
        );
    }
}

export default NavItems;