 <script setup>
const slides = [
  { image: '/Images/food 1.jpg' },
  { image: '/Images/food 2.jpg' },
  { image: '/Images/food 3.jpg' },
  { image: '/Images/food 4.jpg' }
];
</script>

<template>
  <!-- HERO CAROUSEL FULL PAGE HEIGHT -->
  <div class="relative min-h-screen w-full">
    <v-carousel
      height="100vh"
      cycle
      hide-delimiter-background
      show-arrows="hover"
      class="w-full h-screen"
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        :src="slide.image"
        cover
        class="w-full h-screen object-cover"
      ></v-carousel-item>
    </v-carousel>
    <!-- Overlayed Content -->
    <div class="absolute inset-0 bg-black/40 z-20 flex flex-col justify-center items-center text-white text-center px-4">
      <h1 class="text-4xl md:text-5xl font-bold mb-2">Welcome to Karibu Jikoni</h1>
      <p class="text-lg mb-4">Delicious. Convenient. Just like home.</p>
      <v-btn color="deep-purple" size="large" @click="$router.push('/products')">
        Get Started
      </v-btn>
    </div>
  </div>

  <!--Latest from jitegemee-->
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-card
          subtitle="Karibu Jikoni is transforming food convenience "
          text="Say goodbye to takeout and tedious cooking. Karibu Jikoni brings pre-prepped, flavor-packed meals straight to your fridge. Whether you're a student, professional, or parent, our ready-to-cook options fit your lifestyle. We're not just delivering food — we're delivering freedom."
          title="Reimagining Mealtime"
          color="green-darken-4"
        ></v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card color="orange-darken-4">
          <template v-slot:title>
            Plans that Fit Your Plate
          </template>
          <template v-slot:subtitle>
            Choose daily, weekly, or monthly — your kitchen, your rules
          </template>
          <template v-slot:text>
            With Karibu Jikoni’s subscription model, you can enjoy fresh, high-quality meals without the daily hassle of shopping or prepping. Select a plan that matches your appetite, schedule, and budget — and pause or adjust anytime. Simplicity never tasted this good.
          </template>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card color="green-darken-4">
          <v-card-item>
            <v-card-title>More Than a Meal — It’s a Smart Choice</v-card-title>
            <v-card-subtitle>Save hours every week and reduce food waste.</v-card-subtitle>
          </v-card-item>
          <v-card-text>
            Karibu Jikoni cuts your kitchen time in half while keeping your wallet happy. No more wasted ingredients or impulsive takeout spending. Enjoy gourmet-style meals at a fraction of the cost — without compromising on flavor or freshness.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- Partners -->
  <v-container>
    <v-row>
      <v-col cols="12" md="2">
        <img src="../../public/co/art.png" />
      </v-col>
      <v-col cols="12" md="2">
        <img src="../../public/co/carrefour.png" />
      </v-col>
      <v-col cols="12" md="2">
        <img src="../../public/co/glovo.png" />
      </v-col>
      <v-col cols="12" md="2">
        <img src="../../public/co/pure.png" />
      </v-col>
      <v-col cols="12" md="2">
        <img src="../../public/co/uber.png" />
      </v-col>
      <v-col cols="12" md="2">
        <img src="../../public/co/green.png" />
      </v-col>
    </v-row>
  </v-container>
</template>




<script setup>
const slides = [
  { image: '/Images/food 1.jpg' },
  { image: '/Images/food 2.jpg' },
  { image: '/Images/food 3.jpg' },
  { image: '/Images/food 4.jpg' }
];
</script>

<template>
  <!-- HERO CAROUSEL FULL PAGE HEIGHT -->
  <div class="relative min-h-screen w-full">
    <v-carousel
      height="100vh"
      cycle
      hide-delimiter-background
      show-arrows="hover"
      class="w-full h-screen"
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        :src="slide.image"
        cover
        class="w-full h-screen object-cover"
      ></v-carousel-item>
    </v-carousel>
    <!-- Overlayed Content -->
    <div class="absolute inset-0 bg-black/40 z-20 flex flex-col justify-center items-center text-white text-center px-4">
      <h1 class="text-4xl md:text-5xl font-bold mb-2">Welcome to Karibu Jikoni</h1>
      <p class="text-lg mb-4">Delicious. Convenient. Just like home.</p>
      <v-btn color="deep-purple" size="large" @click="$router.push('/products')">
        Get Started
      </v-btn>
    </div>
  </div>

  <!--Latest from jitegemee-->
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-card
          subtitle="Karibu Jikoni is transforming food convenience "
          text="Say goodbye to takeout and tedious cooking. Karibu Jikoni brings pre-prepped, flavor-packed meals straight to your fridge. Whether you're a student, professional, or parent, our ready-to-cook options fit your lifestyle. We're not just delivering food — we're delivering freedom."
          title="Reimagining Mealtime"
          color="green-darken-4"
        ></v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card color="orange-darken-4">
          <template v-slot:title>
            Plans that Fit Your Plate
          </template>
          <template v-slot:subtitle>
            Choose daily, weekly, or monthly — your kitchen, your rules
          </template>
          <template v-slot:text>
            With Karibu Jikoni’s subscription model, you can enjoy fresh, high-quality meals without the daily hassle of shopping or prepping. Select a plan that matches your appetite, schedule, and budget — and pause or adjust anytime. Simplicity never tasted this good.
          </template>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card color="green-darken-4">
          <v-card-item>
            <v-card-title>More Than a Meal — It’s a Smart Choice</v-card-title>
            <v-card-subtitle>Save hours every week and reduce food waste.</v-card-subtitle>
          </v-card-item>
          <v-card-text>
            Karibu Jikoni cuts your kitchen time in half while keeping your wallet happy. No more wasted ingredients or impulsive takeout spending. Enjoy gourmet-style meals at a fraction of the cost — without compromising on flavor or freshness.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- Partners -->
  <v-container>
    <v-row>
      <v-col cols="12" md="2">
        <img src="../../public/co/art.png" />
      </v-col>
      <v-col cols="12" md="2">
        <img src="../../public/co/carrefour.png" />
      </v-col>
      <v-col cols="12" md="2">
        <img src="../../public/co/glovo.png" />
      </v-col>
      <v-col cols="12" md="2">
        <img src="../../public/co/pure.png" />
      </v-col>
      <v-col cols="12" md="2">
        <img src="../../public/co/uber.png" />
      </v-col>
      <v-col cols="12" md="2">
        <img src="../../public/co/green.png" />
      </v-col>
    </v-row>
  </v-container>
</template>



<div class="relative w-full" style="height:70vh;">
    <v-carousel
      height="70vh"
      cycle
      hide-delimiter-background
      show-arrows="hover"
      class="w-full h-full"
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        :src="slide.image"
        cover
        class="w-full h-full object-cover"
      ></v-carousel-item>
    </v-carousel>
    <!-- Overlayed Content -->
    <div class="absolute inset-0 bg-black/40 z-20 flex flex-col justify-center items-center text-white text-center px-4">
      <h1 class="text-4xl md:text-5xl font-bold mb-2">Welcome to Karibu Jikoni</h1>
      <p class="text-lg mb-4">Delicious. Convenient. Just like home.</p>
      <v-btn color="deep-purple" size="large" @click="$router.push('/products')">
        Get Started
      </v-btn>
    </div>
  </div>



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
    removeFromCart(name) {
      this.items = this.items.filter(item => item.name !== name)
    },
    clearCart() {
      this.items = []
    }
  }
})




<script setup>
const slides = [
  { image: '/Images/food 1.jpg' },
  { image: '/Images/food 2.jpg' },
  { image: '/Images/food 3.jpg' },
  { image: '/Images/food 4.jpg' }
];
</script>

<template>
  <div style="position: relative; height: 70vh;">
    <!-- Moving carousel background -->
    <v-carousel
      height="70vh"
      cycle
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-img
          :src="slide.image"
          cover
          height="100%"
        ></v-img>
      </v-carousel-item>
    </v-carousel>
  </div>

<!-- Final centered, elegant, translucent hero overlay -->
<div
  style="
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
    width: 100%;
  "
>
  <h1
    style="
      font-size: 2.75rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
      color: rgba(255, 255, 255, 0.85);
      text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    "
  >
    Welcome to Karibu Jikoni
  </h1>

  <p
    style="
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
      color: rgba(255, 255, 255, 0.8);
      text-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
    "
  >
    Delicious. Convenient. Just like home.
  </p>

  <v-btn
    color="orange"
    size="large"
    @click="$router.push('/products')"
    style="
      background-color: rgba(255, 165, 0, 0.4);
      color: rgba(255, 255, 255, 0.95);
      font-weight: bold;
      border: 1px solid rgba(255, 165, 0, 0.5);
      box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    "
  >
    Get Started
  </v-btn>
</div>





<template>
     <v-app-bar app color="green-darken-4" >
    <v-app-bar-title>KARIBU JIKONI</v-app-bar-title>
        <v-btn to="/" color="orange-darken-4"> Home</v-btn>
        <v-btn to="/products" color="orange-darken-4"> Products</v-btn>
        <v-btn to="/checkout" color="orange-darken-4"> Check Out</v-btn>
       <v-btn to="/subscription" color="orange-darken-4"> Subscription</v-btn>
        <v-btn to="/aboutus" color="orange-darken-4"> About Us</v-btn>
        <v-btn to="/contactus" color="orange-darken-4"> Contact Us</v-btn>
        <v-btn to="/signup" color="orange-darken-4"> Sign Up</v-btn>
        <v-btn to="/login" color="orange-darken-4"> Log In</v-btn>
        
        
</v-app-bar>

</template>


<v-btn to="/checkout" color="orange-darken-4" class="mx-2">Check Out</v-btn>

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




