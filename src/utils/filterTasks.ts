export const filterTasks = (tasks?: TaskResponse[]) => {
  const initialValue = {
    activeTasks: [] as TaskResponse[],
    doneTasks: [] as TaskResponse[],
  }

  if (!tasks) return initialValue

  return tasks.reduce((acc, task) => {
    task.completed ? acc.doneTasks.push(task) : acc.activeTasks.push(task)
    return acc
  }, initialValue)
}
