export const CardTask = ({ task, editTask, check, deleteTask }) => {

  return (
    <div className="flex items-center justify-between mb-2 bg-body rounded-md px-2 py-3 gap-1 w-64">
      <h1
        style={{ textDecorationLine: task.status ? 'line-through' : '' }}
        className="text-xs overflow-y-hidden">{task.text}</h1>
      <div
        className="flex fle-row gap-2 items-center justify-center">
        <button
          onClick={() => editTask(task.id)}
          className="flex items-center justify-center">
          <i className="text-sm fa-solid fa-pencil"></i>
        </button>
        <button
          onClick={() => check(task.id)}
          className="flex items-center justify-center">
          <i className="text-sm fa-solid fa-check"></i>
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="flex items-center justify-center">
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </div>
  )
}

export default CardTask
