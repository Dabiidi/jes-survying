<template>
  <div>
    <!-- Header -->
    <Header />

    <!-- Main Page Content -->
    <main class="flex-grow">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>
