import React from 'react'
import { TaskCard } from '../components/TaskCard'

export const TaskList = ({ tareas, deleteTask }) => {

  if (tareas.length === 0) {
    return <h1 className='text-white text-4xl font-bold text-center'>There is not tasks</h1>
  }
  

  return (
    <div className='grid grid-cols-4 gap-4 p-4 rounded-md'>
      {

        tareas.map(
          (element) =>
            <TaskCard key={element.id} element={element} deleteTask={deleteTask} />
        )
      }
    </div>
  )
}
