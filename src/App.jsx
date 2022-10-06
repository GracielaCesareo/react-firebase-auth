import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from './components/Login';

function App() {
 

  return (
    <div
      className="app h-screen flex justify-center items-center flex-col bg-blue-strong"
    >
      <h1
        className='text-2xl
        text-bold
        mb-4
        text-white'
      >
      Login Project
      </h1>

        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      
      {/* <Register /> */}
    </div>
  )
}

export default App
