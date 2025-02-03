import { useState } from 'react'
import './App.css'
import MedalForm from './components/MedalForm'
import MedalList from './components/MedalList'

function App() {

  return (
    <>
      <div>
        <MedalForm medals={medal}/>
        <MedalList medals={medal}/>
      </div>
    </>
  )
}

export default App
