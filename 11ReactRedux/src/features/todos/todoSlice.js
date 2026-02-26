import { createSlice , nanoid} from "@reduxjs/toolkit";
import { act } from "react";
// import { act} from "react";

const initialState = {
    todos : [{id:1 , text:"Hello World"}]
}


export const todoSlice = createSlice({
    name :'todo',
    initialState,
    reducers: {
        // Add Todo
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        // removeTodo
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !=action.payload)
        },
        
        // Update Todo
        updateTodo: (state, action) => {
            const todo  = state.todos.find(
                (todo) => todo.id === id
            );
            if(todo) {
                todo.text = text;
            }
        }
    }
})

export const {addTodo , removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer