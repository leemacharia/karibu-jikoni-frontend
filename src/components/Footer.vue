<template>
  <v-footer
    app
    color="green-darken-4"
    height="48"
    class="text-white justify-center align-center px-4"
  >
    <div class="text-caption opacity-80">
      © {{ new Date().getFullYear() }} Karibu Jikoni — All rights reserved.
    </div>
  </v-footer>
</template>

<script setup>
  const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ]
</script>

<style scoped>
.v-footer {
  font-size: 0.75rem;
  letter-spacing: 0.5px;
}
</style>
