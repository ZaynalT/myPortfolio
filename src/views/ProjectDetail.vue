<template>
  <div class="project-detail" ref="projectDetailContainer">
    <div class="project-header">
      <h1 class="project-title">{{ project?.title }}</h1>
      <div class="project-meta">
        <div class="project-links">
          <a :href="project?.github" target="_blank" class="btn secondary" v-if="project?.github?.length > 1">GitHub</a>
          <a :href="project?.demo" target="_blank" class="btn primary" v-if="project?.demo?.length > 1">Live Demo</a>
        </div>
      </div>
    </div>

    <div class="project-content">
      <div class="project-image-container" v-if="project?.image">
        <img :src="project?.image" :alt="project?.title" class="project-image">
      </div>
      
      <div class="project-description">
        <h2>About the Project</h2>
        <div class="project-period-section">
          <p>{{ project?.period }}</p>
        </div>
        <div class="description-text" v-html="formatText(project?.fullText)"></div>
      </div>

      <div class="project-tags-section">
        <h2>Technologies Used</h2>
        <div class="project-tags">
          <Tag v-for="tag in project?.tags" :key="tag" :text="tag" type="skill" />
        </div>
      </div>

      <div class="back-link">
        <router-link to="/projects" class="btn secondary">
          <i class="fas fa-arrow-left"></i> Back to Projects
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Tag from '../components/Tag.vue'
import { useProjectsStore } from '../stores/projects'

const route = useRoute()
const store = useProjectsStore()
const project = ref(null)
const projectDetailContainer = ref(null)

const formatText = (text) => {
  if (!text) return ''
  return text
    .replace(/\\n/g, '<br>')  // string literal \n
    .replace(/\n/g, '<br>')   // actual newline character
}

onMounted(() => {
  // If projects are not loaded yet, fetch them
  if (store.projects.length === 0) {
    store.fetchProjects()
  }
  
  // Get project by ID
  const projectId = route.params.id
  project.value = store.getProjectById(projectId)
  
  // Scroll to top when entering project detail
  if (projectDetailContainer.value) {
    projectDetailContainer.value.scrollTop = 0
  }
})

// Watch for route changes
watch(() => route.params, (newParams) => {
  console.log('Route params changed:', newParams)
  if (newParams.id) {
    project.value = store.getProjectById(newParams.id)
  }
})
</script>

<style scoped>
.project-detail {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  overflow-y: auto;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  text-decoration: none;
  margin-bottom: 2rem;
  font-weight: 500;
  transition: opacity 0.3s ease;
}

.back-button:hover {
  opacity: 0.8;
}

.project-header {
  margin-bottom: 2rem;
}

.project-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0;
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

.project-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.project-description {
  margin: 3rem 0 2rem 0;
}

.project-description h2 {
  color: var(--text-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.back-link {
  margin-top: 2rem;
  text-align: center;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn i {
  font-size: 1rem;
}

.primary {
  background-color: #42b983;
  color: white;
}

.secondary {
  background-color: var(--hover-bg);
  color: var(--text-color);
  border: 1px solid var(--border-color);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .project-detail {
    padding: 1.5rem;
  }

  .project-title {
    font-size: 2.2rem;
  }

  .project-image {
    max-height: 400px;
  }
}

@media (max-width: 768px) {
  .project-detail {
    padding: 1rem;
  }

  .project-title {
    font-size: 2rem;
  }

  .project-image {
    max-height: 350px;
  }

  .project-description {
    font-size: 1rem;
    line-height: 1.6;
  }

  .project-tag {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
    border-radius: 20px;
  }
}

@media (max-width: 480px) {
  .project-detail {
    padding: 0.75rem;
  }

  .project-title {
    font-size: 1.8rem;
  }

  .project-image {
    max-height: 300px;
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

.project-meta {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.project-period {
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.8;
  display: inline-block;
}

.project-period-section {
  margin: 1.5rem 0;
}

.project-period-section p {
  color: var(--text-color);
  font-size: 1rem;
  opacity: 0.8;
}

.description-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  white-space: pre-line;
}

.description-text p {
  margin-bottom: 1rem;
}

.project-image-container {
  width: 100%;
  max-height: 500px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.project-tags-section {
  margin: 2rem 0;
}

.project-tags-section h2 {
  color: var(--text-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
</style> 