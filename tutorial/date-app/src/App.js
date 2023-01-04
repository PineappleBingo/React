import logo from './logo.svg';
import './App.css';

function FirstDay(date = new Date()){
  // the day of the month - the day
  let fd = new Date(date.setDate(date.getDate() - date.getDay()));
  return fd.getDate();
}

function LastDay(date = new Date()){
  // the day of the month - the day + 6(1 week)
  let ld = new Date(date.setDate(date.getDate() - date.getDay() + 6));
  return ld.getDate();
}

function WeekDates(date = new Date()) {
    let firstday = new Date(date.setDate(date.getDate() - date.getDay()));
    let lastday = new Date(date.setDate(date.getDate() - date.getDay() + 6));
    let days_of_week = [];
    for (
        let day = new Date(firstday);
        day < lastday;
        day.setDate(day.getDate() + 1)
    ) {
        days_of_week.push(new Date(day));
    }
    days_of_week.push(lastday);

    return days_of_week;
}

function App() {
  
  const current = new Date();
  const date = current.getDate()+ '/' + current.getMonth() + '/' + current.getFullYear();
  
  let weekdates = []
  weekdates = WeekDates();
  console.log(weekdates);

  let firstday = FirstDay();
  let lastday = LastDay();

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
      
      <hr/>
      <span>Function WeekDates()</span>
      <>
      {weekdates.map((d, idx) => (
        <li key={idx}>{d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}</li>
        ))} 
      <h2>FistDay: {firstday}</h2>
      <h2>LastDay: {lastday}</h2> 
      </>
      
    </div>
  );
}

export default App;
