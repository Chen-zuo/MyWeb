import React, { Component } from 'react';
import './setting.css'
class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="setting">
                <div className="setting-close">
                    <p>
                        <a title="关闭" onClick={()=>this.props.close()}></a>
                        设置
                    </p>
                </div>
                <h2>setting功能制作中</h2>
            </div>
        );
    }
}

export default Setting;