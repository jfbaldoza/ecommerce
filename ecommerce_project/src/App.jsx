import { useState } from 'react'
import './App.css'
import { Navbar } from './components'
import Main from './components/Main/Main'

function App() {


  return (
    <div className="app">
      <Navbar/>
      <Main/>
    </div>
  )
}

export default App
