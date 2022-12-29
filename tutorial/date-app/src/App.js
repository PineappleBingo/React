import logo from './logo.svg';
import './App.css';

function App() {
  
  const current = new Date();
  const date = current.getDate()+ '/' + current.getMonth() + '/' + current.getFullYear();
  // console.log(typeof(date))

  return (
  
    <div>
      <span>opt1. Date().toLocalDateString()</span>
      <h1>{new Date().toLocaleDateString()+""}</h1>
      <h1>{new Date().toLocaleDateString("en-us", {month: "short"})}</h1>
      <h1>{new Date().toLocaleDateString("en-us", {day: "2-digit"})}</h1>
      <h1>{new Date().getFullYear()}</h1>

      <hr/>
      <span>Opt2. getDate()/getMonth()/getFullYear()</span>
      <h2>{date}</h2>

      <hr/>
      <span>International Date&Time : Intl.DateTimeFormat()</span>
      <h3>{new Intl.DateTimeFormat().format(current)}</h3>
      <h3>{new Intl.DateTimeFormat('es-US').format(current)}</h3>
      <h3>{new Intl.DateTimeFormat('ko-KR', { dateStyle: 'full', timeStyle: 'short', timeZone: 'Asia/Seoul'}).format(current)}</h3>
    </div>
  );
}

export default App;
