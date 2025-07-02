<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Sign In form
const signinEmail = ref('')
const signinPassword = ref('')
const signinError = ref('')

const handleSignin = () => {
  if (!signinEmail.value || !signinPassword.value) {
    signinError.value = 'All fields are required.'
    return
  }
  router.push('/meals')
}

// Sign Up form
const signupName = ref('')
const signupEmail = ref('')
const signupPassword = ref('')
const signupError = ref('')

const handleSignup = () => {
  if (!signupName.value || !signupEmail.value || !signupPassword.value) {
    signupError.value = 'All fields are required.'
    return
  }
  router.push('/meals')
}
</script>

<template>
  <v-container fluid class="fill-height" style="background: linear-gradient(135deg, #f5f5f5, #e8ecef); padding: 0; height: 100vh; margin: 0; width: 100vw; max-width: none; position: relative; overflow: hidden;">
    <v-row no-gutters align="center" style="height: 100%; width: 100%; position: relative;">
      <!-- Left Panel (Sign In) - 40% with floating effect -->
      <v-col cols="12" md="4" class="d-flex align-center justify-center" style="height: 100%; background-color: #264d29; position: relative; z-index: 3; box-shadow: 10px 0 20px rgba(0, 0, 0, 0.3); overflow: visible;">
        <v-card flat class="pa-6" style="width: 90%; max-width: 400px; background: transparent; border-radius: 100px 0 0 100px; margin-right: -20px; overflow: visible;">
          <v-card-title class="text-h4 text-center mb-4" style="color: #f4861f; font-weight: 700; font-family: 'Roboto', sans-serif;">
            Welcome Back!
          </v-card-title>
          <v-card-text class="text-center mb-6" style="color: #f5e8c7;">
            Enter your details to enjoy delicious, convenient meals with Karibu Jikoni
          </v-card-text>
          <v-card-text>
            <v-form @submit.prevent="handleSignin">
              <v-text-field
                v-model="signinEmail"
                label="EMAIL"
                prepend-icon="mdi-email"
                solo
                color="orange-darken-4"
                class="mb-4"
                :error-messages="signinError"
                style="background-color: #355e34; border: none; border-radius: 12px; width: 100%; font-weight: 500;"
              ></v-text-field>
              <v-text-field
                v-model="signinPassword"
                label="PASSWORD"
                prepend-icon="mdi-lock"
                solo
                type="password"
                color="orange-darken-4"
                class="mb-6"
                :error-messages="signinError"
                style="background-color: #355e34; border: none; border-radius: 12px; width: 100%; font-weight: 500;"
              ></v-text-field>
              <v-btn
                type="submit"
                block
                large
                style="border: 2px solid #f4861f; color: #f4861f; background: transparent; text-transform: uppercase; border-radius: 8px; font-weight: 600; transition: all 0.3s ease;"
                @mouseover="$event.target.style.backgroundColor = '#f4861f'; $event.target.style.color = 'white';"
                @mouseleave="$event.target.style.backgroundColor = 'transparent'; $event.target.style.color = '#f4861f';"
              >
                Sign In
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Right Panel (Sign Up) - 60% -->
      <v-col cols="12" md="8" class="d-flex align-center justify-center" style="height: 100%; position: relative; background: url('../../public/Images/food 3.jpg') no-repeat center center/cover; z-index: 1;">
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.3);"></div>
        <v-card flat class="pa-6" style="width: 80%; max-width: 400px; position: relative; z-index: 2; background: rgba(255, 255, 255, 0.6);">
          <v-card-title class="text-h4 text-center mb-4" style="color: #264d29; font-weight: 700; font-family: 'Roboto', sans-serif;">
            Create an Account
          </v-card-title>
          <v-card-text class="text-center mb-4">
            <v-row justify="center" class="mb-4">
              <v-col cols="2" v-for="icon in ['mdi-google', 'mdi-facebook']" :key="icon" class="d-flex justify-center">
                <v-btn icon :color="'#264d29'" style="border: 1px solid #264d29; border-radius: 50%; width: 36px; height: 36px; transition: all 0.3s ease;" @mouseover="$event.target.style.borderColor = '#f4861f'" @mouseleave="$event.target.style.borderColor = '#264d29'">
                  <v-icon :icon="icon" size="20"></v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <p style="color: #757575;">or use your email to register</p>
          </v-card-text>
          <v-card-text>
            <v-form @submit.prevent="handleSignup">
              <v-text-field
                v-model="signupName"
                label="FULL NAME"
                prepend-icon="mdi-account"
                solo
                color="grey"
                class="mb-4"
                :error-messages="signupError"
                style="background-color: rgba(240, 240, 240, 0.7); border: none; border-radius: 12px; width: 100%; font-weight: 600;"
              ></v-text-field>
              <v-text-field
                v-model="signupEmail"
                label="EMAIL"
                prepend-icon="mdi-email"
                solo
                color="grey"
                class="mb-4"
                :error-messages="signupError"
                style="background-color: rgba(240, 240, 240, 0.7); border: none; border-radius: 12px; width: 100%; font-weight: 600;"
              ></v-text-field>
              <v-text-field
                v-model="signupPassword"
                label="PASSWORD"
                prepend-icon="mdi-lock"
                solo
                type="password"
                color="grey"
                class="mb-6"
                :error-messages="signupError"
                style="background-color: rgba(240, 240, 240, 0.7); border: none; border-radius: 12px; width: 100%; font-weight: 600;"
              ></v-text-field>
              <v-btn
                type="submit"
                block
                large
                color="#264d29"
                class="white--text"
                style="text-transform: uppercase; font-weight: 700; border-radius: 8px; transition: all 0.3s ease;"
                @mouseover="$event.target.style.backgroundColor = '#f4861f'; $event.target.style.color = '#264d29';"
                @mouseleave="$event.target.style.backgroundColor = '#264d29'; $event.target.style.color = 'white';"
              >
                SIGN UP
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-footer color="grey-lighten-4" class="py-4">
      <v-row justify="center">
        <v-col cols="12" class="text-center" style="color: #757575;">
          © 2025 Karibu Jikoni — All rights reserved.
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<style scoped>
.v-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.v-text-field.v-input--is-focused .v-input__control {
  border-color: #f4861f !important;
}

@media (max-width: 960px) {
  .v-col-md-4 {
    height: 100%;
  }
  .v-col-md-4 .v-card {
    border-radius: 50px 0 0 50px;
    margin-right: -10px;
  }
  .v-col-md-8 {
    width: 100% !important;
    border-radius: 0 !important;
  }
}

@media (min-width: 960px) and (max-width: 1264px) {
  .v-col-md-4 .v-card {
    border-radius: 75px 0 0 75px;
    margin-right: -15px;
  }
}

@media (min-width: 1264px) {
  .v-col-md-4 .v-card {
    border-radius: 100px 0 0 100px;
    margin-right: -20px;
  }
}
</style>