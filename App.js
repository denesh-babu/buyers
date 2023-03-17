// import logo from './logo.svg';
import React from 'react';
import './App.css'
// import ButtonAppbar from './components/appbar'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Service from './pages/service'
import Readbtn from './pages/readbtn'
import Btn from './pages/Btn'
// import Get from './pages/get'


function App() {

  
  return (
    <Router>

    <div>

         {/* <ButtonAppbar /> */}

        
    </div> 
          
   <div>
          <Routes>
          <Route>
     
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Service />} />
          <Route path="readbtn" element={<Readbtn />} />
          <Route path="Btn"  element={<Btn />} />
          {/* <Route path="get"  element={<Get />} /> */}


        </Route>
      </Routes>
     
    </div>
    </Router>
 
      
  )
}

ReactDOM.render(<App />,document.getElementById('root'));
export default App
