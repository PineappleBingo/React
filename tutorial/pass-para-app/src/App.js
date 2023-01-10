import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { useState } from 'react';


// ** We should treat an array in states as immutable **

// https://beta.reactjs.org/learn/updating-arrays-in-state
// https://beta.reactjs.org/reference/react/useState
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_array_literals

const A = 65 // ASCII character code
// const a = 97 // ASCII character code

// initial state, set letter with empty Array

let nextId = 0;

// https://reactjs.org/docs/hooks-state.html

// Example 2 -----------------------------------------------------------------

function 

// Equivalent in ES6 class
class UpdateState extends React.Component {
    
  const [cletters, setCletters] = useState([]);
  
  render() {
    <>
        const title = ' Staff Analyst I';
        return <h1>Hello, {this.props.name} {title}</h1>;
    </>
  }
}



// Eaxample 1 ----------------------------------------------------------------
class Alphabet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upperCase: true,
      justClicked: null,
      clickedList: [],
      letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))
    };
  }
  
  // Function Wrapper to call multible functon on OnClickd attribute
  onClick(event) {
    this.handleClick();
    this.handlePush();
  }
  
  handleClick(letter) {
    this.setState({ justClicked: letter }); 
    console.log(letter);
  }
  
  handlePush(letter){
    setLetters([
      {cletters: letter},
      ...cletters
    ]);
    // put olditems at the end
    
    
    // letters.push(letter);
    // this.state.clickedList.push(letter);
    // this.setState(this.state.clickedList);
    // console.log(this.state.clickedList);
    console.log(cletters);
  }
  
  // Toggle Convert Letter Cases
  toggleCase(){
    let charCode
    // upperCase? 
    this.state.clickedList.map((list, idx) => 
    charCode = list.charCodeAt(),
    this.setState(this.state.clickedList[this.idx] = charCode)
    );
    this.setState(this.state.clickedList); 
  }
  
  render() {
    
    
    return (
      <div>
        Just clicked: {this.state.justClicked}
        <br />
        
        Clicked List: {this.state.clickedList.map((list, idx) => 
          <span key={list+idx}>{list}, 
          {/* {console.log(list+idx)} */}
          </span>
        )}

        <button onCLick={()=> {
          setCletters([
            ...cletters,
            {
              cletters: 'clickedOne'
            }
          ]);
        }}> ADD </button>
      
        <hr />
        <ul>
          {this.state.letters.map(letter =>
            <li key={letter} onClick={() => {this.handleClick(letter); this.handlePush(letter)}}>
              {letter}
            </li>
          )}
        </ul>
      </div>
    )
  };
}

function App() {
  return (
    <>
    <h1>Example 1 - Passing parameter</h1>
    <Alphabet />
  </>
  );
}

export default App;
