<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  components: { ProductCard },
  data() {
    return {
      products: [
        {
          name: 'Spicy Marinated Chicken',
          price: 700,
          dietary: ['High Protein'],
          image: '../../public/Images/products/chicken 2.jpg'
        },
        {
          name: 'Vegan Coconut Lentils',
          price: 450,
          dietary: ['Vegan', 'Gluten-Free'],
          image: '../../public/Images/products/lentils 3.jpeg'
        },
        {
          name: 'Chapati Combo Pack',
          price: 350,
          dietary: ['Vegetarian'],
          image: '../../public/Images/products/chapati 3.jpeg'
        },
        {
          name: 'Beef Sukuma Bowl',
          price: 550,
          dietary: ['High Iron'],
          image: '../../public/Images/products/beef 2.jpeg'
        },
        {
          name: 'Grilled Tilapia Fillet',
          price: 800,
          dietary: ['Pescatarian', 'Low Carb'],
          image: '../../public/Images/products/tilapia 2.jpeg'
        },
        {
          name: 'Spicy Bean Stew',
          price: 420,
          dietary: ['Vegan'],
          image: '../../public/Images/products/beans.jpeg'
        },
        {
          name: 'Butter Naan Pack',
          price: 320,
          dietary: ['Vegetarian'],
          image: '../../public/Images/products/butter naan.jpeg'
        },
        {
          name: 'Broccoli & Carrot Stir-fry',
          price: 480,
          dietary: ['Vegan', 'Gluten-Free'],
          image: '../../public/Images/products/broccoli.jpeg'
        },
        {
          name: 'Ginger Chicken Soup',
          price: 600,
          dietary: ['High Protein', 'Low Carb'],
          image: '../../public/Images/products/chicken soup.jpeg'
        },
        {
          name: 'Githeri',
          price: 500,
          dietary: ['Vegan', 'High Fiber'],
          image: '../../public/Images/products/githeri.jpeg'
        }
      ]
    }
  }
}
</script>

<template>
  <v-container class="py-12">
    <h2 class="text-2xl font-bold mb-6 text-center">Explore Our Meals</h2>
    <v-row>
      <v-col v-for="item in products" :key="item.name" cols="12" sm="6" md="4">
        <ProductCard :product="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

