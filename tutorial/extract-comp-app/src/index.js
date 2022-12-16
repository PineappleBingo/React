import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// product object data
const product = {
    model: "HR-V",
    maker: "Honda",
    year: "2022",
    wheel: "4",
    engine:
    {
        model: "TurboX2",
        cylinder: 4,
        horsepower: 150,
        mode: "FWD",
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
        model = {product.model} 
        maker = {product.maker}
        year = {product.year}
        wheel = {product.wheel}
        engine = {product.engine}    
    />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
