<script setup>
import { useCartStore } from '../stores/cart.js'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const cart = useCartStore()

const totalPrice = computed(() =>
  cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
)

const goToDelivery = () => {
  router.push('/delivery')
}
</script>

  <template>
  <v-container class="py-10">
    <h1 class="text-2xl font-bold mb-6">Your Cart</h1>

    <!-- CART CONTENT -->
    <v-row v-if="cart.items.length">
      <v-col
        v-for="item in cart.items"
        :key="item.name"
        cols="12"
        md="6"
        lg="4"
        class="d-flex"
      >
        <v-card class="mb-4" max-width="100%" style="width: 100%;">
          <!-- Product Image -->
          <v-img
            :src="item.image"
            aspect-ratio="1"
            cover
            class="rounded-t"
          ></v-img>

          <!-- Product Info -->
          <v-card-title class="text-wrap">{{ item.name }}</v-card-title>
          <v-card-subtitle>KES {{ item.price }} each</v-card-subtitle>

          <!-- Quantity Controls & Price -->
          <v-card-actions class="justify-between">
            <div class="d-flex align-center ga-2">
              <v-btn icon @click="cart.decreaseQuantity(item)">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <span>{{ item.quantity }}</span>
              <v-btn icon @click="cart.increaseQuantity(item)">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
            <div class="font-weight-bold">
              Total: KES {{ item.quantity * item.price }}
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- EMPTY CART MESSAGE -->
    <v-alert v-else type="info" border="start" color="purple-lighten-4">
      Your cart is empty.
    </v-alert>

    <!-- CART TOTAL + ACTION -->
    <v-divider class="my-6"></v-divider>
    <div class="text-right">
      <h2 class="text-xl font-bold mb-4">Total: KES {{ totalPrice }}</h2>
      <v-btn color="deep-purple" size="large" @click="goToDelivery">
        Place Order
      </v-btn>
    </div>
  </v-container>
</template>

