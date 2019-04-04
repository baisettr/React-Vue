import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Cart from './Cart';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
                <h1>Cart Demo </h1>
                <Cart />
            </div>
        )
    }
}

export default hot(module)(App);