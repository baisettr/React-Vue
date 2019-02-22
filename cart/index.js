import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './cart';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Cart />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));