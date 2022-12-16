import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Constructor in React
// 1. It used for initializing the local state of the component by assigning an object to this.state.
// 2. It used for binding event handler methods that occur in your component.

// You cannot call setState() method directly in the constructor(). 
// If the component needs to use local state, you need directly to use 'this.state' to assign the initial state
// in the constructor. The constructor only uses this.state to assign initial state, and all other methods need 
// to use set.state() method.






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
