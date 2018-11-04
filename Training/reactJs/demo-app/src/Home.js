import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Home extends Component {
    constructor(props) {
        super();
        // this.age = props.age;

        this.state = {
            age: props.age,
            status: 0,
            // homeLink: "changed HOME"
            homeLink: props.initialLinkName

        };
        setTimeout(() => {
            this.setState({ age: this.state.age - 10 })
        }, 3000);

        this.onUpdate = this.onUpdate.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
    }

    onUpdate() {
        this.setState({ age: this.state.age + 3, status: this.state.status + 1 })
        // this.age += 2;
        // console.log(this.age);
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    }

    render() {
        // console.log(this.props);
        return (
            <div>
                <h2>Hey from Home </h2>
                <p>My name is: {this.props.name} my age is:  {this.state.age}</p>
                <p>status: {this.state.status}</p>
                <button onClick={this.onUpdate} className="btn btn-success">click to increment</button>
                <hr />
                <button className="btn btn-primary" onClick={this.props.greet}>click to alert from child</button>
                <hr />
                <input type="text" value={this.state.homeLink}
                    onChange={(event) => this.onHandleChange(event)} />
                <button onClick={this.onChangeLink} className="btn btn-danger">click change header name</button>
            </div>
        );
    }
}

// Home.propTypes = {
//     name: React.PropTypes.string,
//     age: React.PropTypes.number
// };

export default Home;