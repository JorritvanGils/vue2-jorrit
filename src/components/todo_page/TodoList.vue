<template>
  <div>
    <todo v-for="(todo, index) in todos" :key="index" :todo="todo"/>
  </div>
</template>

<script>

import Todo from '@/components/todo_page/Todo'
import { mapState } from 'vuex'
export default {
    name: 'TodoList',
    components: {
        Todo
    },
    computed: {
        ...mapState({
            todos: state => state.todos
        })
    },
    mounted () {
        console.log(this.$store)
    }
}
</script>

<style>

</style>
