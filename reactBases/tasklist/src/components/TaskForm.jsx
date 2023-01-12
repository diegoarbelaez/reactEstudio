import React from 'react'
import { useState } from 'react';

const TaskForm = ({ agregarTarea }) => {

    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');

    function formSubmit(event) {
        event.preventDefault();
        if(value.length<5 || value2.length < 5) return
        agregarTarea(value,value2); 
        setValue('');
        setValue2('');       
    }

    function onInputAdd(element) {
        setValue(element.target.value);
    }

    function onTextareaAdd( element){
        setValue2(element.target.value);
    }

    return (
        <div className='max-w-md mx-auto'>
        <form
            onSubmit={formSubmit}
            className="bg-slate-800 p-10 mb-4 rounded-md"
        >
            <h1 className='text-2x1 font-bold text-white mb-3'>Create your task</h1>
            <input 
            className='bg-slate-300 p-3 w-full mb-2'
            placeholder='Please add a task'
            onChange={onInputAdd}
            value={value}
            autoFocus
            ></input>
                
            <textarea 
            className='bg-slate-300 p-3 w-full mb-2'
            placeholder='Write a description'
            onChange={onTextareaAdd}
            value={value2}
            >

            </textarea>
            <button className='bg-indigo-500 px-3 py-1 text-white'>Add Task</button>
        </form>
        </div> 
    )
}

export default TaskForm