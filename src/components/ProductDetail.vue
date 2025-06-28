<script setup>
import { useCartStore } from '../stores/cart'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const cart = useCartStore()

const products = [
  {
    name: 'Butter Naan Pack',
    slug: 'butter-naan',
    price: 320,
    dietary: ['Vegetarian'],
    image: '../../public/Images/products/butter naan.jpeg'
  }
]

const product = products.find(p => p.slug === route.params.slug)

function handleOrderNow() {
  cart.addToCart(product)
  router.push('/checkout')
}
</script>

<template>
  <v-container>
    <h2 class="text-h5 mb-4">Product: {{ product.name }}</h2>
    <v-img :src="product.image" max-height="300" cover class="mb-4" />
    <p><strong>Price:</strong> KES {{ product.price }}</p>
    <p><strong>Dietary:</strong> {{ product.dietary.join(', ') }}</p>
    <v-btn color="orange-darken-4" @click="handleOrderNow">
      Order Now
    </v-btn>
  </v-container>
</template>
