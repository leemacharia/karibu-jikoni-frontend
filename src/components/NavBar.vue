<script setup>
import { ref, watch } from 'vue'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
const cartMenu = ref(false)

watch(cartMenu, (newVal) => {
  console.log('cartMenu changed:', newVal)
})

const handleCartClick = () => {
  console.log('Cart icon clicked, setting cartMenu to:', !cartMenu.value)
  cartMenu.value = !cartMenu.value
}
</script>

<template>
  <v-app-bar app color="green-darken-4" flat>
    <!-- Logo on the far left -->
    <router-link to="/" class="ml-4 mr-auto no-underline">
      <div
        class="kj-logo"
        style="
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, #5b8930, #f4861f);
          color: white;
          font-weight: bold;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        "
      >
        KJ
      </div>
    </router-link>

    <!-- Nav buttons aligned to the right -->
    <div class="d-flex align-center">
      <v-btn to="/meals" color="orange-darken-4" class="mx-2">Meals</v-btn>
      <v-btn to="/subscription" color="orange-darken-4" class="mx-2">Subscription</v-btn>
      <v-btn to="/contactus" color="orange-darken-4" class="mx-2">Contact Us</v-btn>
      <v-btn to="/signup" color="orange-darken-4" class="mx-2">Signup</v-btn>
    </div>

    <v-menu
      v-model="cartMenu"
      location="bottom end"
      offset-y
      :close-on-content-click="false"
      transition="slide-y-transition"
    >
      <template #activator="{ props }">
        <div class="cart-icon-wrapper" v-bind="props">
          <v-btn icon color="orange-darken-4">
            <v-icon>mdi-cart</v-icon>
          </v-btn>
          <span
            v-if="cart.items.length"
            class="cart-badge-attached"
          >
            {{ cart.items.reduce((sum, item) => sum + item.quantity, 0) }}
          </span>
        </div>
      </template>

      <v-card width="350" class="pa-2">
        <v-card-title class="text-h6">Your Cart</v-card-title>
        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="(item, index) in cart.items"
            :key="index"
            class="px-4"
          >
            <v-row align="center" no-gutters>
              <v-col cols="6">
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>
                  KES {{ item.price }} / unit
                </v-list-item-subtitle>
              </v-col>
              <v-col cols="6" class="d-flex align-center justify-end">
                <v-btn
                  icon
                  size="small"
                  color="red-darken-2"
                  @click="cart.decrementQuantity(item)"
                  :disabled="item.quantity <= 1"
                >
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <span class="mx-2">{{ item.quantity }}</span>
                <v-btn
                  icon
                  size="small"
                  color="green-darken-2"
                  @click="cart.incrementQuantity(item)"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-list-item>

          <v-list-item v-if="cart.items.length === 0" class="px-4">
            <v-list-item-title>No items in cart</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-divider v-if="cart.items.length"></v-divider>
        <v-card-text v-if="cart.items.length" class="text-right">
          <strong>Total: KES {{ cart.total.toFixed(2) }}</strong>
        </v-card-text>

        <v-card-actions class="justify-center">
          <router-link to="/checkout" @click="cartMenu = false">
            <v-btn color="orange-darken-4" variant="tonal">
              Proceed to Checkout
            </v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<style scoped>
.kj-logo:hover {
  transform: scale(1.08);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.no-underline {
  text-decoration: none;
}

.v-card-actions {
  padding-bottom: 12px;
}

.cart-icon-wrapper {
  position: relative;
  display: inline-block;
}

.cart-badge-attached {
  position: absolute;
  bottom: 2px;
  right: 2px;
  background-color: red;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 50%;
  line-height: 1;
  z-index: 10;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
}

.v-menu {
  z-index: 15000 !important;
}
</style>