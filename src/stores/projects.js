import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCollection } from '../firebase'
import myPortfolio from '@/assets/images/myPortfolio.png'
import call4help from '@/assets/images/call4help.png'
import volvoConnect from '@/assets/images/volvoConnect.jpg'
import bilia from '@/assets/images/bilia.png'
import ellos from '@/assets/images/ellos.png'
import scope360 from '@/assets/images/scope360.png'
import figure8 from '@/assets/images/figure8.png'

const imageMap = {
  'myPortfolio.png': myPortfolio,
  'call4help.png': call4help,
  'volvoConnect.jpg': volvoConnect,
  'bilia.png': bilia,
  'ellos.png': ellos,
  'scope360.png': scope360,
  'figure8.png': figure8
}

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref([])
  const loading = ref(false)
  const error = ref(null)

  function getImageUrl(imageName) {
    return imageMap[imageName] || ''
  }

  async function fetchProjects() {
    loading.value = true
    error.value = null
    try {
      const fetchedProjects = await getCollection('projects')
      // Map the image names to actual image imports
      projects.value = fetchedProjects.map(project => ({
        ...project,
        image: project.image ? getImageUrl(project.image) : ''
      }))
    } catch (err) {
      error.value = 'Failed to load projects. Please try again later.'
      console.error('Error loading projects:', err)
    } finally {
      loading.value = false
    }
  }

  function getProjectById(id) {
    return projects.value.find(project => project.id === id)
  }

  return {
    projects,
    loading,
    error,
    fetchProjects,
    getProjectById,
    getImageUrl
  }
}) 