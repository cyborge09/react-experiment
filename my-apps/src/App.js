import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import MyComponent from './Mycomponent';
// import FetchData from './FetchData';
// import Fetch from './Fetch';
// import ClassText from './ClassText';
import Login from './login/login';

class App extends Component {
  constructor()
  {
    super();
    this.state = {};
    this.child = this.child.bind(this);
  }
  child(val)
  {
    this.setState({value:val});
  }


  render() {
    return (
      <div className="App">
     
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get  , edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <ClassText/> */}
        {/* <Fetch/> */}
        <Login/>
        {/* {<FetchData/>} */}
        {/* <MyComponent props={this.child}/> */}
         <h1>{this.state.value}</h1>
      </div>
    );
  }
}

export default App;
