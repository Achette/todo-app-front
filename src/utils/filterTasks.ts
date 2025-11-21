export const filterTasks = (tasks: TaskResponse) => {
  return tasks.reduce(
    (acc, task) => {
      task.completed ? acc.doneTasks.push(task) : acc.activeTasks.push(task)
      return acc
    },
    { activeTasks: [] as TaskResponse, doneTasks: [] as TaskResponse }
  )
}
