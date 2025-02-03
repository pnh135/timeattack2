import React, {useState} from 'react'
import './App.css'
import MedalForm from './components/MedalForm'
import MedalList from './components/MedalList'

function App() {
   const [medals, setMedals] = useState([]);

  return (
    <>
      <div>
        <h1>2024 파리 올림픽</h1>
        <MedalForm medals={medals}/>
        <MedalList medals={medals}/>
      </div>
    </>
  )
}

export default App
