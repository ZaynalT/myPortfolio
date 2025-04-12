<template>
  <span class="tag" :class="{ 'skill-tag': type === 'skill', 'project-tag': type === 'project' }">
    {{ text }}
  </span>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'project',
    validator: (value) => ['project', 'skill'].includes(value)
  }
})
</script>

<style scoped>
.tag {
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.skill-tag {
  background-color: var(--tag-bg) !important;
}

.project-tag {
  background-color: var(--project-tag-bg) !important;
}

.tag:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
}

.tag::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: transform 0.3s ease;
}

.tag:hover::after {
  transform: translateX(100%);
}

@media (max-width: 768px) {
  .tag {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
    border-radius: 20px;
  }
}

@media (max-width: 480px) {
  .tag {
    padding: 0.35rem 0.7rem;
    font-size: 0.8rem;
    border-radius: 18px;
  }
}
</style> 