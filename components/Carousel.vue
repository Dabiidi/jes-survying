<template>
  <div class="relative max-w-4xl mx-auto">
 <p class="text-center text-2xl text-primary font-bold mb-4">Image Showcase</p>
  <div class="carousel-container">
    <div class="carousel-items" :style="carouselStyle">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="carousel-item"
        :class="{ active: index === activeIndex }"
      >
        <img :src="item.image" :alt="item.alt" />
        <p>{{ item.text }}</p>
      </div>
    </div>

    <div class="carousel-indicators">
      <span
        v-for="(item, index) in items"
        :key="index"
        class="indicator"
        :class="{ active: index === activeIndex }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

import car1 from '/static/images/car1.jpg'
import car2 from '/static/images/car2.jpg'
import car3 from '/static/images/car3.jpg'
import car4 from '/static/images/car4.jpg'
import car5 from '/static/images/car5.jpg'
import car6 from '/static/images/jes-image.jpg'

const images = [
  car1, 
  car2, 
  car3,
  car4,
  car5,
  car6,
]

const activeIndex = ref(0);
const items = ref([
  { image: car1, alt: 'Item 1',  },
  { image:  car2, alt: 'Item 2', },
  { image: car3, alt: 'Item 3', },
  { image: car4, alt: 'Item 3',  },
  { image: car5, alt: 'Item 3',  },
  { image: car6, alt: 'Item 3', },
]);

let intervalId;

const carouselStyle = computed(() => ({
  transform: `translateX(-${activeIndex.value * 100}%)`,
  transition: 'transform 0.5s ease',
}));

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % items.value.length;
};

const goToSlide = (index) => {
  activeIndex.value = index;
};

const startAutoSlide = () => {
  intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds
};

const stopAutoSlide = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
};

onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  stopAutoSlide();
});
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
}

.carousel-items {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
  text-align: center;
}

.carousel-item img {
  width: 100%;
  height: 400px; 
  object-fit: cover; 
}


.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.indicator {
  width: 10px;
  height: 10px;
  background-color: gray;
  border-radius: 50%;
  cursor: pointer;
}

.indicator.active {
  background-color: #12a19a;
}
</style>
