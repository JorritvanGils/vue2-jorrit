<template>
  <div style="width:250px; margin:5px auto;">
    <div style="display:flex; justify-content:space-between">
      <span :class="{completed: todo.completed}" @click="toggleTodoStatus(todo)">{{ todo.title }}</span>
      <v-btn @click="deleteTodoItem(todo)">Delete</v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Todo',
    props: ['todo'],
    methods: {
        ...mapActions([
            'deleteTodo', 'toggleTodoStatus'
        ])
    }
}
</script>

<style scoped>
    .completed {
        text-decoration: line-through;
    }
</style>
