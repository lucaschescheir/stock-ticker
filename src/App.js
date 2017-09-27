import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/search';
import stockGraph from './components/stock_graphs';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Search />
          
      </div>
    );
  }
}

export default App;
