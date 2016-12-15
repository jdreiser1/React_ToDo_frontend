import React, { Component } from 'react';
import './App.css';
import TodosContainer from './containers/TodosContainer.js'

class App extends Component {
  render() {
    return (
    <div>
      <TodosContainer />
    </div>
    )
  }
}

export default App;
