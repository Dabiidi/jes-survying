<template>
  <nav class="bg-white/80 backdrop-blur-md shadow-md fixed w-full top-0 left-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="text-2xl font-extrabold text-primary">
            JES Surveying
          </NuxtLink>
        </div>

        <!-- Middle: Navigation Links -->
        <div class="hidden md:flex md:space-x-8 md:items-center">
          <NuxtLink to="/" class="text-primary hover:text-primary font-medium transition">Home</NuxtLink>
          <NuxtLink to="/" class="text-primary hover:text-primary font-medium transition">About</NuxtLink>
          <NuxtLink to="/" class="text-primary hover:text-primary font-medium transition">Services</NuxtLink>
          <NuxtLink to="/contact" class="text-primary hover:text-primary font-medium transition">Contact</NuxtLink>
        </div>

        <div class="flex items-center">
          <NuxtLink
            to="/contact"
            class="hidden md:inline-block bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-primary-dark transition"
          >
            Get Started
          </NuxtLink>

          <button @click="isOpen = !isOpen" class="md:hidden text-gray-700 focus:outline-none">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                v-if="!isOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-if="isOpen" class="md:hidden bg-white/90 backdrop-blur-md">
      <div class="px-4 pt-4 pb-6 space-y-3">
        <NuxtLink to="/" class="block text-gray-700 hover:text-primary py-2">Home</NuxtLink>
        <NuxtLink to="/about" class="block text-gray-700 hover:text-primary py-2">About</NuxtLink>
        <NuxtLink to="/services" class="block text-gray-700 hover:text-primary py-2">Services</NuxtLink>
        <NuxtLink to="/contact" class="block text-gray-700 hover:text-primary py-2">Contact</NuxtLink>
        <NuxtLink
          to="/contact"
          class="block text-center text-white bg-primary hover:bg-primary-dark rounded-full py-2 mt-2 font-semibold"
        >
          Get Started
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>
