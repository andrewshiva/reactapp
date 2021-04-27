import React ,{ Component} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Navbar/Nav';
import Example from './components/Carosuel/Carosuel';
import  Cardd from './components/card/card';



function App() {
  return (
    <div className="App">
      <Nav/>
      <Example  />
      < Cardd/>
     
      
 
    </div>

  );
}

export default App;
