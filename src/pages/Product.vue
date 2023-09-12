<template>
  <div class="row mt-5" v-if="product">
    <div class="col-4">
        <img class="w-100" :src="product.image" />
    </div>
    <div class="col8">
        <h1>{{product.title}}</h1>
        <h3>${{product.price}}</h3>
        <input type="text" v-model="quantity" class="text-center col-1 mr-2 p-1" style="color: black; background-color: white; border: 1px solid #ccc; padding: 5px;" />
        <button class="btn btn-primary" @click="AddToCart()"> Add to cart</button>
        <p class="mt-4">{{product.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Product',
    data: function () {
        return {
            quantity: null
        }
    },
    props: ['id'],
    methods: {
        AddToCart () {
            this.$store.dispatch('addToCart', {
                product: this.product,
                quantity: this.quantity
            })
        }
    },
    computed: {
        product () {
            return this.$store.state.product
        }
    },
    mounted () {
        this.$store.dispatch('getProduct', this.id)
    }
}
</script>

<style>

</style>
