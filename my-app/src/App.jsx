import React from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HeaderComponent></HeaderComponent>
        </header>
      </div>
    );
  }
}

export default App;
