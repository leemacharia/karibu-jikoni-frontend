

<template>
  <v-card class="mb-4">
    <v-img :src="product.image" height="200" cover />
    <v-card-title class="text-lg font-bold">{{ product.name }}</v-card-title>
    <v-card-subtitle class="text-grey-600">KES {{ product.price }}</v-card-subtitle>
    <v-card-text>
      <span class="text-sm text-green-darken-4">{{ product.dietary.join(', ') }}</span>
    </v-card-text>
    <v-card-actions>
      <v-btn color="orange" block @click="addItem">Add to Cart</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useCartStore } from '../stores/cart.js'

const props = defineProps({
  product: Object
})

const cart = useCartStore()
const addItem = () => {
  cart.addToCart(props.product)
}
</script>
