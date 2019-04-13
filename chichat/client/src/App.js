import React, { Component } from 'react';

import './App.css';

import Chat from './chat';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>

        <Chat />
      </div>
    );
  }
}

export default App;
