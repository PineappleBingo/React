import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


const A = 65 // ASCII character code

// Eaxample 1 ----------------------------------------------------------------
class Alphabet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.state.clickedList.push(letter);
    this.setState(this.state.clickedList);
    console.log(this.state.clickedList);
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
