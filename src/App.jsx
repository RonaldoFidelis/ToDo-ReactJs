import { useState, useEffect } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import { CardTask } from './components/CardTask'
import EditTask from './components/EditTask'

function App() {
  const [task, setTask] = useState([])

  const setStorage = (task) => {
    let setTask = JSON.stringify(task)
    localStorage.setItem('tasks', setTask)
  }

  const getStorage = () => {
    let items = localStorage.getItem('tasks');
    let tasks = JSON.parse(items);
    return tasks;
  }

  const removeStorage = () => {

  }

  useEffect(() => {
    const tasks = getStorage();
    if (tasks && tasks.length > 0) {
      setTask(tasks);
    }
  }, []);

  const addTask = (text) => {
    const newTask = [...task, {
      id: Math.floor(Math.random() * 1000),
      text: text,
      status: false,
      edit: false
    }];

    setStorage(newTask);
    setTask(getStorage())
  }

  const check = (id) => {
    const tasks = getStorage();
    tasks.map((task) => {
      if (task.id == id) {
        if (task.status == true) {
          task.status = false
        } else {
          task.status = true
        }
      }
    })
    setStorage(tasks)
    setTask(getStorage())
  }

  const deleteTask = (id) => {
    const tasks = getStorage();
    const updatedTasks = tasks.filter(item => item.id !== id);
    setStorage(updatedTasks);
    setTask(getStorage())
  }

  const editTask = (id) => {
    const tasks = getStorage();
    tasks.map((item) => {
      if (item.id === id) {
        item.edit = true
      }

    })

    setStorage(tasks);
    setTask(getStorage())
  }

  const renderEditTask = (newTask, id) => {
    const tasks = getStorage();
    const updateTask = tasks.map((item) => {
      if (item.id === id) {
          console.log(item);
          item.text = newTask,
          item.status = false,
          item.edit = false
      }
      return item;
    })
    setStorage(updateTask)
    setTask(getStorage())

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
                task={item} />
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
