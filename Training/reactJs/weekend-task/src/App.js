import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: [],
      textValue: '',
    }

    this.onKeyInput = this.onKeyInput.bind(this);
    // this.onBtnDel=this.onBtnDel.bind(this);
    this.onClearChecked = this.onClearChecked.bind(this);
  }

  onChangeInput(e) {
    this.setState({
      textValue: e.target.value
    });
  }

  onKeyInput(e) {
    if (e.keyCode === 13) {
      if (this.state.textValue === "") {
        return;
      } else {
        var val = this.state.textValue;
        this.state.value.push(val);
        this.setState(
          this.state
        );
        this.state.textValue = ''
      }
      this.state.value.map((data) => console.log(data));
      console.log(this.state.value);
      document.getElementById('box').value = '';
    }
  }

  onBtnDel(e) {
    for (var i = 0; i < this.state.value.length; i++) {
      if (this.state.value[i] === e) {
        delete this.state.value[i];
      }
      this.setState({
        value: this.state.value
      });
      console.log(this.state.value);
    }
  }

  onClearChecked() {
    var check = document.getElementById('check');
    // var val = e.target.value;
    for (var i = 0; i < this.state.value.length; i++) {
      if (check.checked) {
        delete this.state.value[i];
      }
      this.setState({
        value: this.state.value
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>TODOS</h1>
        <input type="text" name="box" id="box" className="box" onKeyDown={this.onKeyInput} onChange={(box) => this.onChangeInput(box)} />
        <ul>
          {this.state.value.map((data, i) => {
            return <li key={i}>
              <input type="checkbox" name={data} checked={data.checked}  id="check" value={data} className="check" />
              {data} <button onClick={this.onBtnDel.bind(this, data)}>x</button></li>
          }
          )}
        </ul>
        <button onClick={this.onClearChecked}>clear checked</button>
      </div>
    );
  }
}

export default App;