export default {
    addNewTodo: ({ commit }, todoItem) => {
      commit('NEW_TODO', todoItem)
    },
    deleteTodo: ({ commit }, todoIndex) => {
      commit('DELETE_TODO', todoIndex)
    },
    toggleTodoStatus: ({ commit }, todoIndex) => {
      commit('TOGGLE_TODO_STATUS', todoIndex)
    }
  }
