import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Header from "./Header";

class App extends Component {
  constructor(){
    super();

    this.state={
      homeLink:"Home"
    }
    this.onChangeLink=this.onChangeLink.bind(this);
  }
  onGreet(){
    alert("hello from parent  function called from child");
  };

  onChangeLink(newName){
    this.setState({homeLink:newName});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home 
            name={"ankit"} age={24} 
            greet={this.onGreet} 
            changeLink={this.onChangeLink}
            initialLinkName={this.state.homeLink}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
