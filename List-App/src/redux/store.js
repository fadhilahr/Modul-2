import { configureStore } from "@reduxjs/toolkit";
import addSlice from './addList'


export const store = configureStore ({
    reducer : {
        addList :  addSlice
    }

})