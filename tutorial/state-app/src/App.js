import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react' 

// State
// The state is an updatable structure that is used to contain data or information about the component. 
// The state in a component can change over time. The change in state over time can happen as a response to 
// user action or system event. A component with the state is known as stateful components. 
// It is the heart of the react component which determines the behavior of the component and how it will render. 
// They are also responsible for making a component dynamic and interactive.

// it can be set by using setState() method and calling setState() method triggers UI updates. 
// A state represents the component's "local state" or "information". 
// It can only be accessed or modified inside the component or by the component directly. 
// To set an initial state before any interaction occurs, we need to use the getInitialState() method.

// For example, if we have five components that need data or information from the state, 
// then we need to create one container component that will keep the state for all of them.


class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      isDataIn: true,
    }
    
  }
  render(){
    const Mssg = this.state.isDataIn ? (        
        <span>Data In</span>
      ) :
      (
        <span> Data not In</span>
      ); 
  
      return (
        <div ClassName="MessageBox">
          <h1>Checking Data: {Mssg}</h1>
        </div>
      );
  }
}

export default App;
