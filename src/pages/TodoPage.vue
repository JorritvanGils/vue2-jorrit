<template>
    <div>
        <h1>Todos</h1>
        <h3>Completed: {{completedTodos}}</h3>
        <h3>Pending: {{pendingTodos}}</h3>
        <todo-list />
        <todo-form/>
    </div>
</template>

<script>
import TodoList from '@/components/todo_page/TodoList.vue'
import TodoForm from '@/components/todo_page/TodoForm.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'TodoPage',
    components: {
        TodoList, TodoForm
    },
    computed: {
        ...mapGetters([
            'completedTodos', 'pendingTodos'
        ])
    }
}
</script>

<style>

</style>
