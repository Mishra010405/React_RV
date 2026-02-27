import {createSlice , nanoid} from "@reduxjs/toolkit"
import {act} from "react";


const initialState = {
    todos: [{id:1 , text:"Hello World"}]
}

export const todoSlice = createSlice({
    name: todo,
    initialState,
    reducers: {
        // add todo
        addTodo: (state , action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }

            state.todos.push(todo)
        },
        // remove todo
        removeTodo : (state , action) => {
            state.todos  = state.todos.filter((todo) => todo.id 
        != action.payload)
        },

        // Update Todo
        updateTodo: (state, action) => {
            const todo  = state.todos.find(
                (todo) => todo.id === id
            );
            if(todo) {
                todo.text = text
            }
        },
        // Delete Todo
        deleteTodo : (state , action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        }
    }
})

export const {addTodo , updateTodo , deleteTodo , removeTodo}  = todoSlice.actions

export default todoSlice.reducer