import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

const Main = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h3>Main...</h3>
                    <br />
                </div>
                <br />
                <div className="col-xs-12">
                    <button className="btn btn-secondary" name="add" onClick={props.onInc}>Increment</button> <br/>
                    <button className="btn btn-primary" name="sub" onClick={props.onInc}>Decrement</button>
                    <h3> value: {props.value}</h3>
                </div>
            </div>
        </div>
    );
}

export default Main;