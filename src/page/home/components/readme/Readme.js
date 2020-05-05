import React, { Component } from 'react';
import './readme.css'
class Readme extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="readme">
                <div className="readme-close">
                    <p>
                        <a title="关闭" onClick={()=>this.props.close()}></a>
                                说明
                    </p>
                </div>
                <div className="bear"></div>
                <p className="bear-text">JUST DO IT.</p>
            </div>
        );
    }
}

export default Readme;