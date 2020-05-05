import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from '../../common/footer/Footer';
import './home.css';
/**
 * 页面入口主组件
 */

class Home extends Component {
    constructor() {
        super()
        this.state = {
          span1:false,
          span2:false,
          span3:false   
        }
      }

    componentDidMount(){
        this.setTimeout1 = setTimeout(()=>{
          this.setState({
            span1:true
          })
        },300)
        this.setTimeout2 = setTimeout(()=>{
          this.setState({
            span2:true
          })
        },800)
        this.setTimeout3 = setTimeout(()=>{
          this.setState({
            span3:true
          })
        },1300)
      }
      componentWillUnmount(){
        clearTimeout(this.setTimeout1)
        clearTimeout(this.setTimeout2)
        clearTimeout(this.setTimeout3)
      }


    render() {
        return (
            <div className="wrapper">
                <main className="page">
                        <div className="text">
                           <span className={this.state.span1?'textAnimate':null}> Hey There,<br/> </span>
                           <span className={this.state.span2?'textAnimate':null}>  I'm Mr.Z <br/></span>
                           <span className={this.state.span3?'textAnimate':null}>( σ'ω'σ) <br/>  # Skr</span>
                        </div>
                        <Navbar/>
                </main>
                <Footer/>
            </div>

        );
    }
}

export default Home;