<template>
  <nav class="top-nav">
    <router-link to="/"> <i class="fa fa-home"></i> Home </router-link>
    <router-link to="/about"><i class="fa fa-info-circle"></i> About</router-link>
    <router-link to="/todopage"><i class="fa fa-list"></i> Todo page</router-link>

  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
.top-nav {
  background-color: #cad7f4; /* Set the background color of the top bar */
  color: #fff; /* Set the text color to white */
  padding: 10px 0; /* Add some padding for spacing */
}

.fa {
  font-size: 18px; /* Adjust the font size of Font Awesome icons */
  margin-right: 5px; /* Add some spacing between the icon and text */
}
</style>
