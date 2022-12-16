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
function App extends React.Component {
  constructor{
    super();
    this.state ={
      data:
      [
        {
          "name": "David1",
        },
        {
          "name": "David2",
        },
        {
          "name": "David3",
        }
        ,
      ]
    }
  }
  render(
    <div>
      <StudentName />
      <ul>
        {this.state.data.map((item) => <List data = {item}/>)}
      </ul>
    </div>
  );
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


export default App;
