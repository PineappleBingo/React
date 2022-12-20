import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

// Class Component
// Class components are more complex than functional components. 
// It requires you to extend from React. Component and create a render function which 
// returns a React element. You can pass data from one class to other class components. 
// You can create a class by defining a class that extends Component and has a render function. 
// Valid class component is shown in the below example.


// syntax
// class MyComponent extends React.Component {  
//   render() {  
//     return (  
//       <div>This is main component.</div>  
//     );  
//   }  
// }  


// ES6 Syntax
class App extends React.Component {
  constructor(){
    super();  
    this.state ={
      employee:
      [
        {
          "name": "David1",
          "email": "100@gmail.com",
        },
        {
          "name": "David2",
          "email": "200@gmail.com",
        },
        {
          "name": "David3",
          "email": "300@gmail.com",
        }
        ,
      ]
    }
  }
  render(){
    return(
    <div>
      <StudentName />
      <ul>
        {this.state.employee.map((item) => <NameList name = {item}/>)}
      </ul>
      <ul>
        {/* {this.state.employee.map((item) => <EmailList email = {item}/>)} */}
      </ul>
    </div>
    );
  }   
}

class StudentName extends React.Component{
  render(){
    return(
      <div>
        <h1>Student Name Detail</h1>
      </div>

    );
  }
}

class NameList extends React.Component{
  render(){
    return(
      <ol>{this.props.employee.name}</ol>
    );
  }
}

class EmailList extends React.Component{
  render(){
    return(
      <ol>{this.props.employee.email}</ol>
    );
  }
}


export default App;
