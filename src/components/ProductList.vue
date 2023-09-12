<template>
  <div class="container">
    <div class="row">
        <product-card v-for="product in products" :key="product.id" :product="product"/>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
    name: 'ProductList',
    components: {
        ProductCard
    },
    mounted () {
        this.$store.dispatch('getProducts')
    },
    computed: {
        products () {
            return this.$store.state.products
        }
    }
}
</script>

<style>

</style>
