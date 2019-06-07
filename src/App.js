import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import  Menus from  './components/Menus';
import  AddFoodItems from  './components/AddFoodItems';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Toolbar/>
       <main style={{marginTop:'64px'}}>
       <p> This is the cafee</p>
       </main>
       
      </div>
    );
  }
}
export default App;



