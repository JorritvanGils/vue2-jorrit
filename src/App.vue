<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
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

<style scoped>
#app {
  font-family: 'Arial', sans-serif; /* Change the font family */
  background-color: #f0f0f0; /* Add a light background color */
  padding: 20px; /* Add some padding to the app container */
  border-radius: 5px; /* Add rounded corners for a softer look */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
  max-width: 800px; /* Limit the maximum width of the app */
  margin: 0 auto; /* Center the app horizontally */
}

/* Customize the header style */
.app-header {
  background-color: #333; /* Change the background color of the header */
  color: #fff; /* Set the text color to white */
  padding: 10px 0; /* Add padding for spacing */
  text-align: center; /* Center the header text */
}

/* Customize the link style */
.router-link {
  color: #007bff; /* Change link color */
  text-decoration: none; /* Remove underlines from links */
  font-weight: bold; /* Make links bold */
}

/* Add hover effect for links */
.router-link:hover {
  text-decoration: underline;
}
</style>
