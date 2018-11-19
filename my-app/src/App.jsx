import React from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      greeting: 'world'
    }
  }

  handleOnKeyUp = (event) => {
    const greeting = event.target.value
    const newState = { greeting }
    console.log(newState)
    this.setState(newState)
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <header className="App-header">
          <HeaderComponent name={this.state.greeting}></HeaderComponent>
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
