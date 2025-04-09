import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(true)  // Set default to true for dark mode

  // Check for saved theme preference
  if (localStorage.getItem('theme') === 'light') {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
  }

  // Watch for theme changes
  watch(isDark, (newValue) => {
    if (newValue) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  })

  function toggleTheme() {
    isDark.value = !isDark.value
  }

  return { isDark, toggleTheme }
}) 