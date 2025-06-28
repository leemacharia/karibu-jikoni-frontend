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

