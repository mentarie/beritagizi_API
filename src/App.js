import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import '../src/assets/css/App.css';
import Navbar from './common/layout/navbar-landing';
import Routering from './common/router/router'
class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Routering/>
      </div>
    );
  }
  
}
export default App;