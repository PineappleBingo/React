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

// To set the state, it is required to call the super() method in the constructor. 
// It is because this.state is uninitialized before the super() method has been called.

// If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.

// This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, 
// if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.

// https://reactjs.org/docs/faq-functions.html


class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { 
      isDataIn: false,
      isTrue: true,
      isYes: false,
      isYYES: true,
    }
    console.log("Component This:", this);

    // This binding is necessary to make "this" work in the callback.
    this.toggleData = this.toggleData.bind(this);
  }

  toggleData(){
    this.setState({isDataIn: !this.state.isDataIn});
  }
  // Work-around opt.1 - Bind in Constructor
  toggleData2 = () => {
    this.setState({isTrue: !this.state.isTrue});
  }
  // Work-around opt.2 - Public Class Syntax
  toggleData3(){
    this.setState({isYes: !this.state.isYes});
  }
  // Work-around opt.3 - Bind in Render
  toggleData4(){
    this.setState({isYYES: !this.state.isYYES});
  }

  render(){ 
    const Mssg = this.state.isDataIn ? (        
        <span>Data In</span>
      ) :
      (
        <span> Data not In</span>
      ); 
  
      return (
        <div className="MessageBox">
          <h1>Checking Data1 - Bind in Constructor(ES2015) : {Mssg}</h1>
          <button onClick={this.toggleData}> Click </button>
          <hr />
          <h1>Checking Data2 - Class Properties(ES2022) : {this.state.isTrue? 'On' : 'Off'}</h1>
          <button onClick={this.toggleData2}> Click</button>
          <hr />
          <h1>Checking Data3 - Using Arrow Function Callback : {this.state.isYes? 'Yes' : 'No'}</h1>
          {/* <button onClick={()=> this.toggleData3()}> Click</button> */}
          {/* 
          Using an arrow function in render creates a new function each time the component renders,
          which may break optimizations based on strict identity comparison. 
          */}
          <hr />
          <h1>Checking Data4 - Bind in Render : {this.state.isYYES? 'Yes' : 'No'}</h1>
          <button onClick={this.toggleData4.bind(this)}> Click</button>          

        </div>
      );
  }
}

export default App;
