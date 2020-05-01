import React, { Component } from 'react';
import Header from '../common/header/Header';
import RouterMap from './RouterMap';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
/**
 * header组件在此调用
 */
const history=createBrowserHistory();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Router history={history}>
                <div className="main">
                    <Header/>
                    <RouterMap/> 
                </div>
            </Router>
        );
    }
}

export default App;