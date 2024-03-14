import { createSlice } from "@reduxjs/toolkit";


const addSlice = createSlice({
    name : 'addlist',
    initialState : {
        value : []
    }, 
    reducers : {
        add : (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const {add} = addSlice.actions
export default addSlice.reducer
