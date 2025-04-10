import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false) // Changed default to false for light mode
  const theme = computed(() => isDark.value ? 'dark' : 'light')

  function toggleTheme() {
    isDark.value = !isDark.value
    localStorage.setItem('theme', theme.value)
  }

  function initializeTheme() {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      isDark.value = false // Set default to light mode
      localStorage.setItem('theme', 'light')
    }
  }

  return {
    isDark,
    theme,
    toggleTheme,
    initializeTheme
  }
}) 