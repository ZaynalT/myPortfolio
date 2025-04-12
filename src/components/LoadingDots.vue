<template>
  <div class="loading-dots">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</template>

<script setup>
// No props or logic needed for this simple animation
</script>

<style scoped>
.loading-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 100px;
}

.dot {
  width: 12px;
  height: 12px;
  background-color: var(--tag-bg);
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out;
}

.dot:nth-child(1) {
  animation-delay: -0.32s;
}

.dot:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%, 100% { 
    transform: translateY(0);
  } 
  50% { 
    transform: translateY(-20px);
  }
}
</style> 