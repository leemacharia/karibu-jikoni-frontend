<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
const cartMenu = ref(false)

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
      <v-btn to="/products" color="orange-darken-4" class="mx-2">Products</v-btn>
      
      <v-btn to="/subscription" color="orange-darken-4" class="mx-2">Subscription</v-btn>
      <v-btn to="/contactus" color="orange-darken-4" class="mx-2">Contact Us</v-btn>
      <v-btn to="/signup" color="orange-darken-4" class="mx-2">Sign Up</v-btn>
      <v-btn to="/login" color="orange-darken-4" class="mx-2">Log In</v-btn>
   
    </div>
 <v-menu
  v-model="cartMenu"
  location="bottom end"
  offset-y
  :close-on-content-click="false"
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

  <v-card width="300">
    <v-card-title class="text-h6">Your Cart</v-card-title>
    <v-divider></v-divider>

    <v-list>
      <v-list-item
        v-for="(item, index) in cart.items"
        :key="index"
        class="px-4"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ item.quantity }} × KES {{ item.price }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-if="cart.items.length === 0" class="px-4">
        <v-list-item-content>
          <v-list-item-title>No items in cart</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

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

.cart-icon-wrapper {
  position: relative;
  display: inline-block;
}

/* 👇 Recalibrated position to hug bottom-right corner of the cart icon */
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



</style>

