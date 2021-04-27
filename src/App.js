import React ,{ Component} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './components/Navbar/Nav';
import Carosuelss from './components/Carosuel/Carosuel';
import  Cardd from './components/card/card';



function App() {
  return (
    <div className="App">
      <Example/>
      <Carosuelss  />
      < Cardd/>
     
      
 
    </div>

  );
}

export default App;
