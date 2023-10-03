import { useState } from "react";

// eslint-disable-next-line react/prop-types
const AddTask = ({ addTask }) => {
  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task == null || task == '') {
      return
    } else {
      addTask(task);
      setTask('')
    }
  }

  return (
    <div className="mt-2 mb-3">
      <h1
        className="mb-2 text-base font-semibold text-center">Adicione uma Tarefa</h1>
      <form
        className="flex fle-row text-sm items-center justify-center" onSubmit={handleSubmit}>
        <input
          className="w-60 px-2 py-3 outline-none h-7 bg-transparent border-2 border-body"
          type="text"
          placeholder="Tarefa..."
          value={task}
          onChange={(e) => setTask(e.target.value)} />
        <button
          className="px-2 py-1 text-center outline-none bg-button"
          type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddTask
