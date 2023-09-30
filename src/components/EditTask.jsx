import { useState } from "react";

const EditTask = ({renderEditTask, task}) => {
  const [newTask, setNewTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    renderEditTask(newTask, task.id)
    setNewTask('')
  }

  return (
    <div className="mt-2 mb-3">
      <form
        className="flex fle-row text-sm items-center justify-center" onSubmit={handleSubmit}>
        <input
          className="w-48 px-2 py-3 outline-none h-7 bg-transparent border-2 border-body"
          type="text"
          placeholder="Nova tarefa..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} />
        <button
          className="px-2 py-1 text-center outline-none bg-button"
          type="submit">Editar</button>
      </form>
    </div>
  )
}

export default EditTask
