<template>
  <div>
    <todo v-for="(todo, index) in $store.state.todos" :key="index" />
  </div>
</template>

<script>
import Todo from './Todo'
export default {
    name: 'TodoList',
    components: {
        Todo
    },
    mounted () {
        console.log(this.$store)
    }
}
</script>

<style>

</style>
