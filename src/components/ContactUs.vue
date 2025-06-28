<script setup>

import {ref} from 'vue'

// models to uniquely identify each text field
const firstName = defineModel('firstName')
const lastName = defineModel('lastName')
const emailAddress = defineModel('emailAddress')
const phoneNumber = defineModel('phoneNumber')
const subject = defineModel ('subject')
const message = defineModel ('message')


// creating objects to hold the form data
const applicationFormDetails = ref({
    firstName: firstName,
    lastName: lastName,
    emailAddress: emailAddress,
    phoneNumber: phoneNumber,
    subject: subject,
    message: message,
   
})

//function to save data
function saveData(){
    for(let item in applicationFormDetails.value){
        console.log(applicationFormDetails.value[item])
    }
}
</script>
<template>
  <div
    style="
      background: url('../../public/Images/food\ 2.jpg') center/cover no-repeat;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      position: relative;
      padding-bottom: 60px; /* space for fixed footer */
    "
  >
    <!-- Contact form -->
    <div
      style="
        background: rgba(255, 255, 255, 0.75);
        backdrop-filter: blur(12px);
        padding: 2rem;
        border-radius: 12px;
        margin-left: 5vw;
        max-width: 600px;
        width: 90%;
        height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
      "
    >
      <h2 class="text-h5 mb-4">Get in Touch</h2>
      <v-row dense>
        <v-col cols="6">
          <v-text-field label="First" v-model="firstName" dense hide-details></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field label="Last" v-model="lastName" dense hide-details></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field label="Email" v-model="emailAddress" dense hide-details></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field label="Phone" v-model="phoneNumber" dense hide-details></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="Subject" v-model="subject" dense hide-details></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea label="Message" v-model="message" rows="3" dense hide-details></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-btn block color="orange-darken-4" @click="saveData()">Submit</v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
   
</template>
