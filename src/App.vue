<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './pages/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>

</style>
