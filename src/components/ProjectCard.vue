<template>
  <router-link :to="'/projects/' + project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')" class="project-card">
    <div class="project-image-container">
      <img v-if="project.image" :src="project.image" :alt="project.title" class="project-image">
      <div v-else class="project-image-placeholder">
        <i class="fas fa-image"></i>
      </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>
      <div class="project-tags">
        <Tag v-for="tag in project.tags" :key="tag" :text="tag" type="project" />
      </div>
    </div>
  </router-link>
</template>

<script setup>
import Tag from './Tag.vue'

defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: var(--text-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  min-height: 400px;
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.1),
    0 6px 6px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.05);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 15px 25px rgba(0, 0, 0, 0.15),
    0 10px 10px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.05);
}

.project-image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  background: var(--hover-bg);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  opacity: 0.5;
  font-size: 3rem;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.project-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color);
  margin-bottom: 1rem;
  flex-grow: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

@media (max-width: 1024px) {
  .project-card {
    min-height: 380px;
  }

  .project-image-container {
    height: 180px;
  }
}

@media (max-width: 768px) {
  .project-card {
    min-height: 360px;
  }

  .project-image-container {
    height: 160px;
  }

  .project-title {
    font-size: 1.3rem;
  }

  .project-description {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .project-card {
    min-height: 340px;
  }

  .project-image-container {
    height: 140px;
  }

  .project-title {
    font-size: 1.2rem;
  }

  .project-description {
    font-size: 0.9rem;
  }
}
</style> 