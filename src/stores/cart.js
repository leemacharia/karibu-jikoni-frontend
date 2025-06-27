import { defineStore } from 'pinia'

// src/stores/cart.js
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addToCart(product) {
      const existing = this.items.find(item => item.name === product.name)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    increaseQuantity(item) {
      const found = this.items.find(i => i.name === item.name)
      if (found) found.quantity++
    },
    decreaseQuantity(item) {
      const found = this.items.find(i => i.name === item.name)
      if (found && found.quantity > 1) {
        found.quantity--
      } else {
        this.items = this.items.filter(i => i.name !== item.name)
      }
    }
  }
})
