import React from 'react';
import Navbar from './Component/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import  Home from './Component/home'
import About from './Component/About'
import Contact from './Component/Contactus'
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route  path='/about' component={About} />
        <Route  path='/contact' component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
