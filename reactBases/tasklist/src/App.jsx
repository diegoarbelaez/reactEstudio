import React from 'react'
import TaskForm from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { tareas } from './assets/tasks'
import { useState, useEffect } from 'react';


const App = () => {

  const [tasks, setTasks] = useState([]);

  //Very first time load the tasks, just one time
  useEffect(() => {
    setTasks(tareas);
  }, [])

  function addTask(tituloTarea, descripcionTarea) {
    setTasks([...tasks, {
      title: tituloTarea,
      id: tasks.length,
      description: descripcionTarea
    }])
    console.log(tasks)
  }

  function deleteTask(idTarea) {
    setTasks(tasks.filter(element => element.id != idTarea));
  }


  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto'>
        <TaskForm agregarTarea={addTask} />
        <TaskList tareas={tasks} deleteTask={deleteTask} />
      </div>
    </main>
  )
}
export default App;



