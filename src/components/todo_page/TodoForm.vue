<template>
  <div>
    <v-text-field type="text" v-model="newTodoItem"/>
    <v-btn @click="addNewTodoItem()">Submit</v-btn>
  </div>
</template>

<script>
export default {
    name: 'TodoForm',
    data () {
        return {
            newTodoItem: ''
        }
    },
    methods: {
        addNewTodoItem () {
            this.$store.dispatch('addNewTodo', this.newTodoItem)
            this.newTodoItem = ''
        }
    }

}
</script>

<style>

</style>
