import "./App.css"
import { ComponentCallback } from "./component/callback"
import { ComponentCounter } from "./component/counter"
import { ComponentMemo } from "./component/memo"
import { ComponentReducer } from "./component/reducer"
import { ComponentRef } from "./component/ref"
import { ComponentState } from "./component/state"
import UserProvider from "./context/user"


function App() {

  return (
    <>
      <UserProvider>
        {/* <ComponentState /> */}
        {/* <ComponentRef /> */}
        {/* <ComponentMemo /> */}
        {/* <ComponentReducer /> */}
        {/* <ComponentCallback /> */}
        <ComponentCounter />
     
      </UserProvider>
    </>
  )
}

export default App
