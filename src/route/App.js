import React, { Component } from 'react';
import Header from '../common/header/Header';
import RouterMap from './RouterMap';
import {HashRouter} from 'react-router-dom';

/**
 * header组件在此调用
 */

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <HashRouter >
                <div className="main">
                    <Header/>
                    <RouterMap/> 
                </div>
            </HashRouter>
        );
    }
}

export default App;