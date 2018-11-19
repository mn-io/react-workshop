import React from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent';
import { FormComponent } from './FormComponent';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      greeting: 'world'
    }
  }

  handler = (event) => {
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
          <FormComponent handleOnKeyUp={this.handler}></FormComponent>
        </header>
      </div >
    );
  }
}

export default App;
