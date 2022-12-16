import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';  

class App extends Component {  
  constructor(props){  
    super(props);  
    this.state = {  
         data: 'www.javatpoint.com'  
      }  
    this.handleEvent = this.handleEvent.bind(this);  
  }  
  handleEvent(){  
    console.log(this.props);  
  }  
  render() {  
    return (  
      <div className="App">  
    <h2>React Constructor Example</h2>  
    <input type ="text" value={this.state.data} />  
        <button onClick={this.handleEvent}>Please Click</button>  
      </div>  
    );  
  }  
}

export default App;  
