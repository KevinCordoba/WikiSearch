import SignUp from './components/signUp';
import SignIn from './components/signUp';
import React from 'react'
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/login';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/registro' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} /> 
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
