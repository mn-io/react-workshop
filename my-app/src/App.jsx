import React from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent';

class App extends React.Component {

  handleOnKeyUp = (event) => {
    const val = event.target.value
    console.log({ val })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HeaderComponent name='World'></HeaderComponent>
          <input type='text'
            style={{ height: '1rem', marginTop: '1rem' }}
            onKeyUp={
              this.handleOnKeyUp
            }>
          </input>
        </header>
      </div >
    );
  }
}

export default App;
