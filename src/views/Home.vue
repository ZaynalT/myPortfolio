<template>
  <div class="home">
    <section class="hero">
      <h1>Welcome to Timocin's Portfolio</h1>
      <p class="subtitle">Computer Science Student & Developer</p>
      <div class="cta-buttons">
        <router-link to="/projects" class="btn primary">View My Projects</router-link>
        <router-link to="/contact" class="btn secondary">Contact Me</router-link>
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
}

.hero {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.subtitle {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
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
  transition: all 0.3s ease;
}

.primary {
  background-color: #42b983;
  color: white;
}

.secondary {
  background-color: #f0f0f0;
  color: #2c3e50;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style> 