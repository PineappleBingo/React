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
      students:
      [
        {
          id: 1,
          name: "David",
          email: "100@gmail.com",
        },
        {
          id: 2,
          name: "Peter",
          email: "200@gmail.com",
        },
        {
          id: 3,
          name: "Scott",
          email: "300@gmail.com",
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
        { this.state.students.map((student) => (
          <li>{student.name}</li>
        ))}
        {/* {this.state.students.map((student) => <NameList name = {student}/>)} */}

      </ul>
      <ul>
        {this.state.students.map((student) => (
          <li>{student.email}</li>
        ))}

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
      <ol>{this.props.student.name}</ol>
    );
  }
}

class EmailList extends React.Component{
  render(){
    return(
      <ol>{this.props.student.email}</ol>
    );
  }
}

export default App;
