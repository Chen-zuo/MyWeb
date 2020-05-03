import React, { Component } from 'react';
class NavItems extends Component {

    render() {
        // const isShow = this.props.isShow;
        // const Component = this.props.child;
        return (
            <div className="navitems" >
                <figure>
                    <img src={this.props.src} alt=""/>
                    <figcaption>{this.props.title}</figcaption>
                </figure>
            </div>
        );
    }
}

export default NavItems;