import React, { Component } from 'react';  
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Welcome1 name="David" />
      <Welcome2 name="Jinho" />
    </div>
  );
}

function Welcome1(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Equivalent in ES6 class
class Welcome2 extends React.Component {
    
    render() {
    
        const title = ' Staff Analyst I';
        return <h1>Hello, {this.props.name} {title}</h1>;
    // this refers to Window Object(Global Scope)(?)
  }
}

export default App;
