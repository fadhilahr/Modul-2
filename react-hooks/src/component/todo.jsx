import { memo } from "react"


 const TodoList = ({todo, addTodo}) => {
    console.log("render child");
    return (
        <div>
            <h2>My Todo</h2>
            {
                todo.map((item) => {
                    return (
                        <h3>{item}</h3>
                    )
                })
            }
            <button onClick={addTodo}>add todo</button>
        </div>
    )
}

export default memo(TodoList)