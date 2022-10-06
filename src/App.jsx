import React from 'react';
import { Router, RouterProvider } from "react-router-dom";

import router from './router/router';

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

      <RouterProvider router={router} />

      
    </div>
  )
}

export default App
