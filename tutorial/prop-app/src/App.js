import logo from './logo.svg';
import './App.css';
import React, {component} from 'react';


// State and Props
// It is possible to combine both state and props in your app. 
// You can set the state in the parent component and pass it in the child component using props. 
// It can be shown in the below example.

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: "Python",
    }
  }

  render(){
    return(
      <div className='wrapper'>
        <Language LanProp = {this.state.name} />
      </div>
    );
  }
}

class Language extends React.Component{

  render(){
    return(
      <h1>
        {this.props.LanProp}
      </h1>
    );
  }

}

export default App;
