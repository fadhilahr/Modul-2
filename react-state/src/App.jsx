
import './App.css'
import { CounterComp } from './component/counterComp'
import { DisplayCounter } from './component/displayCount'
import { LocalStorage } from './component/localStorage'

function App() {
 

  return (
    <>
      {/* <LocalStorage /> */}
      <CounterComp />
      <DisplayCounter />
    </>
  )
}

export default App
