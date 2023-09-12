<template>
    <div class="col3 mt-3">
        <div class="card h-100 text-left">
            <img class="w-100" :src=product.image alt="">
            <div class="card-body">
                <h4 class="card-title">
                    <router-link :to="{name:'product', params: {id: product.id}}"> {{product.title}} </router-link>
                </h4>
                <strong>${{product.price}}</strong>
                <p class="card-text" v-html="formattedDescription"></p>
            </div>
            <div class="px-4 pb-3">
                <button class="btn btn-secondary" @click="AddToCart()">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: ['product'],
    methods: {
        AddToCart () {
            this.$store.dispatch('addToCart', {
                product: this.product,
                quantity: 1
            })
        }
    },
    computed: {
        formattedDescription () {
        const maxLength = 30

        if (this.product.description.length > maxLength) {
            const chunks = []
            for (let i = 0; i < this.product.description.length; i += maxLength) {
            chunks.push(this.product.description.slice(i, i + maxLength))
            }

            return chunks.join('<br>')
        }

        return this.product.description
        }
    }
}
</script>

<style>

</style>
