<template>
  <div class="carousel">
    <div class="card-carousel" :style="{ transform: `translateX(${translateX}px)` }">
      <div class="card" v-for="card in cards" :key="card.id">
        <NuxtLink :to="card.link">
          <div class="image-container-section">
            <img class="img" :src="card.image" />
            <p><span class="subtitle2">CEO: {{ card.subtitle }}</span></p>
            <p><span class="subtitle2">Area: {{ card.area }}</span></p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <button class="prev-button" @click="slide(-1)">Previous</button>
    <button class="next-button" @click="slide(1)">Next</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const cards = [
  // Define your card objects here
];

const translateX = ref(0);
const currentIndex = ref(0);

function slide(direction) {
  const cardWidth = 300; // Width of each card (adjust based on your design)
  const containerWidth = 1000; // Width of the carousel container (adjust based on your design)
  const numCards = cards.length;
  
  currentIndex.value += direction;
  
  if (currentIndex.value < 0) {
    currentIndex.value = numCards - 1;
  } else if (currentIndex.value >= numCards) {
    currentIndex.value = 0;
  }
  
  translateX.value = -currentIndex.value * cardWidth + (containerWidth - cardWidth) / 2;
}
</script>

<style>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.card-carousel {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.card {
  flex: 0 0 300px;
  margin-right: 10px;
}

/* Add styling for the cards and other elements based on your design */

.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}
</style>
