import React, { Component } from 'react';
import './sup.css';
class Sup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            num:4665
         };
    }

    render() {
        return (
            <div className="sup">
                <div className="sup-close">
                    <p>
                        <a title="点赞" onClick={()=>this.props.close()}></a>
                        点赞
                    </p>
                </div>
                <div className="sup-wrap">
                    <div className="thanks">
                        Thank
                    </div>
                    <div className="num">
                        {this.state.num}+1
                    </div>
                </div>
            </div>
        );
    }
}

export default Sup;