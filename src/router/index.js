import { createRouter, createWebHistory } from 'vue-router'
import ContactUs from '../components/ContactUs.vue'
import CheckOut from '../components/CheckOut.vue'
import Subscription from '../views/Subscription.vue'
import HomePage from '../components/HomePage.vue'
import Products from '../components/Products.vue'
import LogIn from '../components/LogIn.vue'
import SignUp from '../components/SignUp.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    
    
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactUs,
    },{
      path: '/checkout',
      name: 'checkout',
      component: CheckOut,
    },
    {
      path: '/subscription',
      name: 'subscription',
      component: Subscription,
    },
    {
      path: '/',
      name: 'homepage',
      component: HomePage,
    },
    {
      path: '/meals',
      name: 'meals',
      component: Products,
    },
    {
  path: '/products/:slug',
  name: 'product-detail',
  component: () => import('../components/ProductDetail.vue'),
},

    {
      path: '/login',
      name: 'login',
      component: LogIn,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
  ],
})

export default router


