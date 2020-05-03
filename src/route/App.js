import React, { Component } from 'react';
import Header from '../common/header/Header';
import RouterMap from './RouterMap';
import {HashRouter} from 'react-router-dom';
import Footer from '../common/footer/Footer';
/**
 * 控制整个单页面大体结构
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
                <Footer/>
            </HashRouter>
        );
    }
}

export default App;