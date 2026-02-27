import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todoSlice'

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()

        if (!input.trim()) return

        dispatch(addTodo(input.toUpperCase()))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
            <input
                type='text'
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-gray-800 text-white px-3 py-1 rounded"
            />

            <button
                type='submit'
                className="bg-indigo-500 text-white px-6 py-2 rounded"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo