import React, { Component } from 'react';

/**
 * 页面入口主组件
 */

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <main className="page">
                <div className="common-center">
                    <h2>这是主页Home</h2>
                </div>
            </main>
        );
    }
}

export default Home;