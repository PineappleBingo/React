import logo from './logo.svg';
import './App.css';


// Reference 
// Intro-Hook
// https://reactjs.org/docs/hooks-intro.html

// Effective-Hook
// https://reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
