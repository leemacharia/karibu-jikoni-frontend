<script setup>
import { useCartStore } from '../stores/cart.js'
import { computed } from 'vue'

const cart = useCartStore()

const totalPrice = computed(() =>
  cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
)

const goToDelivery = () => {
  // Navigate to delivery & payment page
  window.location.href = '/delivery'
}
</script>

<template>
  <v-container class="py-10">
    <h1 class="text-2xl font-bold mb-6">Your Cart</h1>

    <v-row v-if="cart.items.length">
      <v-col cols="12" md="6" v-for="item in cart.items" :key="item.name">
        <v-card class="mb-4">
          <v-img :src="item.image" height="150px" cover></v-img>
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-subtitle>KES {{ item.price }} each</v-card-subtitle>

          <v-card-actions class="justify-between">
            <div class="flex items-center space-x-2">
              <v-btn icon @click="cart.decreaseQuantity(item)">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <span>{{ item.quantity }}</span>
              <v-btn icon @click="cart.increaseQuantity(item)">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
            <div class="font-bold">Total: KES {{ item.quantity * item.price }}</div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-alert v-else type="info" border="start" color="purple-lighten-4">
      Your cart is empty.
    </v-alert>

    <!-- Total & Action -->
    <v-divider class="my-6"></v-divider>

    <div class="text-right">
      <h2 class="text-xl font-bold mb-4">Total: KES {{ totalPrice }}</h2>
      <v-btn color="deep-purple" size="large" @click="goToDelivery">
        Place Order
      </v-btn>
    </div>
  </v-container>
</template>

