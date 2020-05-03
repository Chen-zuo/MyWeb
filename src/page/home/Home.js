import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from '../../common/footer/Footer';
import './home.css';
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
            <div className="wrapper">
                <main className="page">

                        <h2 style={{fontSize:'50px',color:'white',marginTop:'50px'}}>
                            Hey There,<br/>
                            I'm Daozai.C
                            <br/>
                            ( σ'ω'σ) <br/># Skr
                        </h2>
                        <Navbar/>
                </main>
                <Footer/>
            </div>

        );
    }
}

export default Home;