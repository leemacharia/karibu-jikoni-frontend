import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    total: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  },
  actions: {
    addToCart(product) {
      console.log('Adding to cart:', product) // Debug
      const existing = this.items.find(item => item.name === product.name)
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
      this.items = [...this.items] // Force reactivity
    },
    incrementQuantity(item) {
      console.log('Incrementing quantity for:', item) // Debug
      const found = this.items.find(i => i.name === item.name)
      if (found) {
        found.quantity = (found.quantity || 1) + 1
        console.log('Updated quantity:', found.quantity) // Debug
        this.items = [...this.items] // Force reactivity
      } else {
        console.log('Item not found:', item.name) // Debug
      }
    },
    decrementQuantity(item) {
      console.log('Decrementing quantity for:', item) // Debug
      const found = this.items.find(i => i.name === item.name)
      if (found) {
        if (found.quantity > 1) {
          found.quantity--
          console.log('Updated quantity:', found.quantity) // Debug
          this.items = [...this.items] // Force reactivity
        } else {
          this.items = this.items.filter(i => i.name !== item.name)
          console.log('Removed item:', item.name) // Debug
        }
      } else {
        console.log('Item not found:', item.name) // Debug
      }
    }
  }
})
