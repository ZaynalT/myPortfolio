<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-brand">Timocin Zaynal</div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <Button
          variant="text"
          :icon="isDark ? 'fas fa-sun' : 'fas fa-moon'"
          @click="toggleTheme"
          class="theme-toggle"
        />
      </div>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useThemeStore } from './stores/theme'
import { onMounted, watch } from 'vue'
import Button from './components/Button.vue'

const themeStore = useThemeStore()
const { isDark, toggleTheme } = themeStore

// Watch for theme changes and update document class
watch(() => themeStore.isDark, (newValue) => {
  document.documentElement.classList.toggle('dark', newValue)
})

onMounted(() => {
  themeStore.initializeTheme()
  document.documentElement.classList.toggle('dark', themeStore.isDark)
})
</script>

<style>
:root {
  --primary-color: #4CAF50;
  --primary-hover: #45a049;
  --secondary-color: #f0f0f0;
  --secondary-hover: #e0e0e0;
  --text-color: #333;
  --bg-color: #fff;
  --card-bg: #fff;
  --hover-bg: #f5f5f5;
  --nav-bg: #fff;
  --nav-text: #333;
  --nav-hover: #4CAF50;
  --transition-speed: 0.3s;
  --border-color: #e2e8f0;
  --tag-bg: #42b983;  /* Green color for tags in light mode */
}

.dark {
  --bg-color: #1a1a1a;
  --text-color: #e2e8f0;
  --nav-bg: #1a1a1a;
  --card-bg: #2d2d2d;
  --border-color: #404040;
  --hover-bg: #2d2d2d;
  --tag-bg: var(--primary-color);  /* Keep original color in dark mode */
  --primary-color: #42b983;  /* Keep primary color consistent in dark mode */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
  background-color: var(--bg-color);
  min-height: 100vh;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--nav-bg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a.router-link-active {
  color: #42b983;
}

.theme-toggle {
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.theme-toggle:hover {
  background-color: var(--hover-bg);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .navbar {
    padding: 1rem 1.5rem;
  }

  .nav-links {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
  }

  .nav-brand {
    font-size: 1.3rem;
  }

  .nav-links {
    gap: 1rem;
  }

  .nav-links a {
    font-size: 0.95rem;
  }

  .theme-toggle {
    font-size: 1.1rem;
    padding: 0.4rem;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0.75rem;
  }

  .nav-brand {
    font-size: 1.2rem;
  }

  .nav-links {
    gap: 0.75rem;
  }

  .nav-links a {
    font-size: 0.9rem;
  }

  .theme-toggle {
    font-size: 1rem;
    padding: 0.3rem;
  }
}

main {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 4rem); /* Account for navbar height */
  box-sizing: border-box;
}

/* Dark mode transitions */
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
</style> 