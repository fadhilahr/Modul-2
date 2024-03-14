import {Routes, Route} from 'react-router-dom'
import { Component } from 'react'
import './App.css'
import { UserComponent } from './component/user'
import { RegisterComp } from './component/register'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<UserComponent/>} />
        <Route path='/register' element={<RegisterComp/>} />
      </Routes>
    </>
  )
}

export default App
