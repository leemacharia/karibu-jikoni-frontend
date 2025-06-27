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



<!-- latest from jitegemee-->
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