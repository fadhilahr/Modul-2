import { useReducer } from "react"


const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {count : state.count + 1}
        case "decrement" :
            return {count : state.count - 1}
        default:
            return state
    }

}



export const ComponentReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    console.log(state);

    return (
        <div>
            <button onClick={()=> dispatch({type : "decrement"})}>Decrement</button>
            <h2>{state.count}</h2>
            <button onClick={()=> dispatch({type: "increment"})}>Increment</button>

        </div>
    )
}