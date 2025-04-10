<template>
  <div class="home">
    <section class="hero">
      <h1>Timocin Zaynal</h1>
      <p class="role">Front-End Developer</p>
      <p class="introduction">
        Specializing in creating modern, responsive web applications with Vue.js and React. 
        Focused on delivering exceptional user experiences through clean code and intuitive interfaces.
      </p>
      <div class="cta-buttons">
        <router-link to="/projects" class="btn primary">View My Projects</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
// Component logic will go here
</script>

<style scoped>
.home {
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-color);
}

.hero {
  text-align: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-weight: 700;
}

.role {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.introduction {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--text-color);
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.primary {
  background-color: var(--primary-color);
  color: white;
}

.secondary {
  background-color: var(--hover-bg);
  color: var(--text-color);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .role {
    font-size: 1.5rem;
  }

  .introduction {
    font-size: 1.1rem;
    padding: 0 1rem;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style> 