<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-tem nav-link active">Home</router-link>
          <a class="nav-item nav-link" href="#">Product</a>
          <router-link to="/about" class="nav-tem nav-link active">about</router-link>
          <router-link to="/todopage" class="nav-tem nav-link active">todopage</router-link>
        </div>

        <div>
          <div class="dropdown open">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false"
            >{{cartItemCount}} Cart</button>
            <div @click="$event.stopPropagation()">
              <mini-cart></mini-cart>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MiniCart from '@/components/MiniCart.vue'
export default {
  name: 'AppHeader',
  components: {
    MiniCart
  },
  computed: {
    cartItemCount () {
      return this.$store.getters.cartItemCount
    }
  }
}
</script>

<style>

</style>
