import React from 'react'
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Header from './components/Header';
import Home from "./components/Home";


import "./style/App.scss";
import "./style/header.scss";
import "./style/home.scss";

const App = () => {
  return (
    <div>

      <Router>
         
        <Header/>

        <Routes>
          <Route path='/' element= {<Home/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;