<script setup>
const plans = [
  {
    title: 'Daily Plan',
    subtitle: 'Perfect for busy weekdays',
    features: [
      '1 ready-to-eat meal per day',
      'Includes 1 pre-cooked side',
      'Next-day delivery',
      'Ideal for individuals'
    ],
    price: 'KES 350 / day',
    recommended: false
  },
  {
    title: 'Weekly Plan',
    subtitle: 'Our most popular choice!',
    features: [
      '7 flexible meals',
      'Mix of ready-to-eat & cook-your-own',
      'Free delivery',
      'Ideal for couples or small families'
    ],
    price: 'KES 2,200 / week',
    recommended: true
  },
  {
    title: 'Monthly Plan',
    subtitle: 'Best value for money',
    features: [
      '30+ meals per month',
      'Custom meal plan & dietary support',
      'Priority customer service',
      'Great for large households'
    ],
    price: 'KES 8,000 / month',
    recommended: false
  }
]
</script>

<template>
    <v-container class="py-12">
    <h1 class="text-3xl font-bold text-center mb-8">Choose Your Meal Plan</h1>
    <v-row justify="center" align="stretch">
      <v-col cols="12" sm="6" md="4" v-for="plan in plans" :key="plan.title">
        <v-card :elevation="plan.recommended ? 8 : 2" :color="plan.recommended ? 'deep-purple-lighten-5' : 'white'" class="h-100">
          <v-card-title class="text-center text-xl font-bold">{{ plan.title }}</v-card-title>
          <v-card-subtitle class="text-center text-md mb-2">
            {{ plan.subtitle }}
          </v-card-subtitle>
          <v-card-text>
            <ul>
              <li v-for="(feature, index) in plan.features" :key="index" class="mb-1">
                ✅ {{ feature }}
              </li>
            </ul>
            <div class="text-center text-2xl font-bold my-4">{{ plan.price }}</div>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="deep-purple" @click="$router.push('/signup')">Subscribe Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>