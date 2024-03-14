import { useEffect, useRef, useState } from "react"


export  const ComponentRef = () => {
    const nameRef = useRef()
    const passRef = useRef()
    const [show , setShow] = useState(false)

    const onSubmit = () => {
        const data = {
            name : nameRef.current.value,
            password : passRef.current.value

        }
        console.log(data);
    }

    useEffect (() => {
        nameRef.current.focus()

    }, [])

    console.log(show);

    return (
        <div>
            <input type = "text" ref = {nameRef}/> <br/>
            <input type ={show == false ? "password" : "text"}  ref = {passRef}/> <br/>
            <button onClick={()=> setShow(!show)}> 
                {show == false ? "show" : "hide"}
            </button>
            <button onClick={onSubmit}>Submit</button>

        </div>
    )
}