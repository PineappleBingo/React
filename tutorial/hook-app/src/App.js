import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

// Reference 
// Intro-Hook
// https://reactjs.org/docs/hooks-intro.html

// Effective-Hook
// https://reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns

// Hooks let you split one component into smaller functions based on what pieces are related 
// (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods. 
// You may also opt into managing the component’s local state with a reducer to make it more predictable

// Hook-overview
// https://reactjs.org/docs/hooks-overview.html

function App() {

  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
