<template>
  <h2 class="section-title">
    {{ title }}
  </h2>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--text-color);
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 3px;
  background: var(--primary-color);
  border-radius: 2px;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.6rem;
    margin-bottom: 1.25rem;
  }
}
</style> 