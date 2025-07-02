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





<script setup>
const slides = [
  { image: '/Images/food 1.jpg' },
  { image: '/Images/food 2.jpg' },
  { image: '/Images/food 3.jpg' },
  { image: '/Images/food 4.jpg' }, // ✅ Add a comma here
];

// ✅ Now promoCards is outside of slides
const promoCards = [
  { 
    title: "🔥 Deal of the Day",
    subtitle: "Only today — save 20%!",
    description: "Enjoy our delicious Butter Naan Pack with a 20% discount. Only today!",
    cta: "Grab Naan Deal",
    slug: "butter-naan",
  },
  {
    title: "🥗 Healthy Choice Promo",
    subtitle: "Limited-time bundle",
    description: "Get 3 plant-based meal packs and pay for only 2. Perfect for meal preppers!",
    cta: "See Bundle",
    slug: "products", // fallback
  },
  {
    title: "🎉 First-Time Offer",
    subtitle: "New customers only",
    description: "Enjoy 15% off your first subscription plan. Use code: WELCOME15",
    cta: "Subscribe Now",
    slug: "subscription",
  },
];

import { useRouter } from 'vue-router'

const router = useRouter()

function handleDealClick(deal) {
  if (deal.slug === 'butter-naan') {
    router.push('/products/butter-naan')
  } else if (deal.slug === 'subscription') {
    router.push('/subscription')
  } else {
    router.push('/products')
  }
}


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

    <!-- STATIC overlay content above carousel -->
    <div
      style="position: absolute; inset: 0; z-index: 10; background-color: rgba(0,0,0,0.4); display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; color: white; padding: 1rem;"
    >
      <h1 style="font-size: 2.75rem; font-weight: bold;">Welcome to Karibu Jikoni</h1>
      <p style="font-size: 1.25rem; margin-bottom: 1rem;">Delicious. Convenient. Just like home.</p>
      <v-btn color="orange" size="large" @click="$router.push('/products')">
        Get Started
      </v-btn>
    </div>
  </div>

  <!-- About Us Section -->
<v-container class="my-10">
  <v-row align="center" justify="center">
    <v-col cols="12" md="5">
      <v-img
        src="../../public/Images/products/chicken 2.jpg"
        alt="About Karibu Jikoni"
        aspect-ratio="4/3"
        cover
        class="rounded-lg elevation-4"
      ></v-img>
    </v-col>
    <v-col cols="12" md="6">
      <h2 class="text-h5 font-weight-bold mb-4">About Karibu Jikoni</h2>
      <p class="mb-4 text-body-1">
        Karibu Jikoni was founded to simplify your mealtime experience. We deliver ready-to-eat and pre-prepped meals tailored to your lifestyle—whether you're a student, a busy professional, or a parent looking to save time.
      </p>
      <p class="text-body-2 text-grey-darken-1">
        Our commitment is to bring wholesome, flavorful food to your table without the stress of cooking from scratch. We believe food should nourish both body and soul—and we’re here to make it effortless.
      </p>
      <v-btn
        class="mt-4"
        color="green-darken-4"
        variant="tonal"
        to="/products"
      >
        Explore Our Meals
      </v-btn>
    </v-col>
  </v-row>
</v-container>



<!-- latest from jitegemee-->
 <!-- Promotions Section -->
<v-container class="my-10">
  <h2 class="text-h5 font-weight-bold text-center mb-6">Today's Specials & Deals</h2>
  <v-row dense>
    <v-col
      v-for="(deal, index) in promoCards"
      :key="index"
      cols="12"
      sm="6"
      md="4"
    >
         <v-card
        class="pa-4 elevation-3 promo-card"
       style="border-radius: 12px; cursor: pointer;"
       @click="handleDealClick(deal)"
       >
        <v-card-title class="font-weight-bold mb-1">
          {{ deal.title }}
        </v-card-title>
        <v-card-subtitle class="text-body-2 text-grey-darken-1 mb-2">
          {{ deal.subtitle }}
        </v-card-subtitle>
        <v-card-text class="text-body-1 mb-2">
          {{ deal.description }}
        </v-card-text>
        <v-btn
          v-if="deal.cta"
          color="orange-darken-4"
          size="small"
          variant="tonal"
          @click="$router.push('/products')"
        >
          {{ deal.cta }}
        </v-btn>
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

<style scoped>
.promo-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  background-color: rgba(255, 165, 0, 0.05); /* light orange tint */
}

.promo-card:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 165, 0, 0.12); /* slightly darker tint on hover */
}

</style>





// src/stores/cart.js
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



<script setup>
import { ref, watch } from 'vue'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
const cartMenu = ref(false)

watch(cartMenu, (newVal) => {
  console.log('cartMenu changed:', newVal) // Debug
})

const handleCartClick = () => {
  console.log('Cart icon clicked, setting cartMenu to:', !cartMenu.value) // Debug
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
      <v-btn to="/signup" color="orange-darken-4" class="mx-2">Sign Up</v-btn>
      <v-btn to="/login" color="orange-darken-4" class="mx-2">Log In</v-btn>
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