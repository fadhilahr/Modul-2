import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import   {add} from "../redux/addList"


export const ComponentTodo = () => {

const todoRef = useRef()
const dispatch = useDispatch()
const submit = () => {
    const data = todoRef.current.value
    dispatch (add(data))
    todoRef.current.value = ""

}

const todo = useSelector((state) => state.addList.value)

    return (
        <div>
            <h1>TO DO LIST APP </h1>
            <input type = "text" ref={todoRef} />
            <button onClick={submit}>+</button>
        {
            todo.map((item) => {
                return (
                    <h3>
                        {item}
                    </h3>
                )
            })
        }
        </div>
    )

}