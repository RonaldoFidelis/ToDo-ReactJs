import { useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import { CardTask } from './components/CardTask'
import EditTask from './components/EditTask'

function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      text: 'Adicione uma nova tarefa!',
      status: false,
      edit: false
    },
  ])

  const addTask = (text) => {
    const newTask = [...task, {
      id: Math.floor(Math.random() * 1000),
      text: text,
      status: false,
      edit: false
    }];
    setTask(newTask);
  }

  const check = (id) => {
    const newTask = [...task]
    newTask.map((task) => {
      if (task.id == id) {
        if (task.status == true) {
          task.status = false
        } else {
          task.status = true
        }
      }
    })
    setTask(newTask)
  }

  const deleteTask = (id) => {
    const newTask = [...task]
    const filter = newTask.filter((task) => {
      if (task.id == id) {
        return null
      }
      return task;
    })
    setTask(filter)
  }

  const editTask = (id) => {
    const newTasks = [...task]
    newTasks.map((item) => {
      if (item.id === id) {
        item.edit = true
      }
    })

    setTask(newTasks)
  }

  const renderEditTask = (newTask, id) => {
    const tasks = [...task];
    const updateTask = tasks.map((item) => {
      if(item.id === id){
        item.text = newTask,
        item.status = false,
        item.edit = false
      }
      return item;
    })

    setTask(updateTask)

  }

  return (
    <div className='container flex items-center justify-center mx-auto mt-10'>
      <div className='flex flex-col w-80 p-2 max-h-96 bg-bg rounded-md shadow-2xl text-white'>
        <AddTask
          addTask={addTask} />
        <div className='grid items-center justify-center gap-2 overflow-y-scroll'>
          {task.map((item, index) => (
            item.edit ? (
              <EditTask
                key={index}
                renderEditTask={renderEditTask}
                task={item}/>
            ) : (
              <CardTask
                key={index}
                task={item}
                editTask={editTask}
                check={check}
                deleteTask={deleteTask} />)
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
