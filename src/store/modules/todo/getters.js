export default {
    completedTodos: (state) => {
      return state.todos.filter(todo => todo.completed === true).length
    },
    pendingTodos: (state) => {
      return state.todos.filter(todo => todo.completed === false).length
    }
  }
