<template>
  <div class="projects">
    <h1>My life's work</h1>
    <div class="projects-grid">
      <router-link 
        v-for="project in projects" 
        :key="project.id" 
        :to="'/projects/' + project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')"
        class="project-card"
      >
        <div class="project-image-container" v-if="project.image">
          <img :src="project.image" :alt="project.title" class="project-image">
        </div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { projects } from '../data/projects'
</script>

<style scoped>
.projects {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-color);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: var(--card-bg);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-content {
  padding: 1.5rem;
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
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.project-tag {
  background: var(--tag-bg);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.project-tag:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
}

.project-tag::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: transform 0.3s ease;
}

.project-tag:hover::after {
  transform: translateX(100%);
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.project-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s ease;
}

.project-link:hover {
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .projects {
    padding: 1.5rem;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-content {
    padding: 1.25rem;
  }

  .project-title {
    font-size: 1.3rem;
  }

  .project-description {
    font-size: 0.95rem;
  }

  .project-tag {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
    border-radius: 20px;
  }
}

@media (max-width: 480px) {
  .projects {
    padding: 0.75rem;
  }

  .project-image-container {
    height: 180px;
  }

  .project-title {
    font-size: 1.2rem;
  }

  .project-description {
    font-size: 0.9rem;
  }

  .project-tag {
    padding: 0.35rem 0.7rem;
    font-size: 0.8rem;
    border-radius: 18px;
  }

  .project-links {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style> 