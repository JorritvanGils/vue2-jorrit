export default {
    NEW_TODO: (state, todoItem) => {
      state.todos.push({
        title: todoItem,
        completed: false
      })
    },
    DELETE_TODO: (state, todoIndex) => {
      state.todos.splice(todoIndex, 1)
    },
    TOGGLE_TODO_STATUS: (state, todoIndex) => {
      state.todos[todoIndex].completed = !state.todos[todoIndex].completed
    }
  }
