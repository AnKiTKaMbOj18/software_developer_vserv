import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Main from '../components/Main';
import { connect } from 'react-redux';
import incDecNum from '../actions/mainAction'

class App extends Component {
  constructor(props) {
    super(props);
  }

  incDecNum = (e) => {
    this.props.dispatch(incDecNum(e));
  }
  render() {
    return (
      <div className="container">
        <h3>App</h3>
        {/* <Main value={this.props.main.value} onInc={this.props.incDecNum} /> */}
        <Main value={this.props.main.value} onInc={this.incDecNum} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    main: state.mainReducer
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     incDecNum: (e) => {
//       dispatch(incDecNum(e));
//     }
//   }
// }


// export default App;

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps)(App);