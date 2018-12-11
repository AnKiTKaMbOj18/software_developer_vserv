import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends Component{

    constructor(props){
        super(props);
        this.state={
          date:new Date()
        };
        console.log("const");
      }
    
      componentDidMount(){
        console.log('cdm');
        this.timerId=setInterval(()=>{
          this.tick()
        },1000);
      }
    
      componentWillUnmount(){
        console.log('cwum');
        clearInterval(this.timerId);
      }
    
      tick(){
        this.setState({
          date:new Date()
        });
      }
      
      render() {
        console.log('render');
        return (
          <div className="App">
          <p>Clock Here!</p>
          <h2>{this.state.date.toLocaleTimeString()}</h2>
          </div>
        );
      }
}

export default Clock;