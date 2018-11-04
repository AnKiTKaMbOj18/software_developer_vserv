import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class Header extends Component {
const Header = (props) => {


    // render() {

    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        {/* <li><a href="#">Home</a></li> */}
                        <li><a href="#">{props.homeLink}</a></li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

// }

export default Header;