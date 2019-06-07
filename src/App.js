import React, { Component } from 'react';
import Nav from './components/Nav';
import Menu from './components/Menu/Menu';

class App extends Component {
  render() {
    return (
      <div className='menu'>
        <Nav />
          <h2>YUMMY CAFE</h2>
          <div class='second-part'>
            <p>What Do You Wanna Eat?</p>
            <div className='button'>
          <button>
            <h1>Add menu</h1>
          </button>
          </div>
          </div>
          
          <div  className='salad'>
              <select>
                <option value="0">BREAKFAST</option>
                <option value="1">Samosa</option>
                <option value="2">Mandazi</option>
                <option value="3">Mkate Mayai</option>
                <option value="4">Kaimati</option>
                <option value="5">Mahamri</option>
              </select>
              <select>
              <option value="0">LUNCH</option>
              <option value="1">Bhajia</option>
              <option value="2">Wali na maharage</option>
              <option value="3">Pilau</option>
              <option value="4">Chipsi Mayai</option>
              <option value="5">Ugali</option>
              </select>
              <select>
              <option value="0">DINNER</option>
              <option value="1">Mutton Biryani</option>
              <option value="2">Samaki wa kupaka</option>
              <option value="3">Chiken Pilau</option>
              <option value="4">Chicken biryani</option>
              <option value="5">Masala Shrimp</option>
              </select>
              
          </div>
         

         
      </div>
    );  
  }
}

export default App;



