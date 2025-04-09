<template>
  <div class="contact">
    <div class="contact-content">
      <div class="contact-info">
        <h1>Get in Touch</h1>
        <p class="description">
          I'm always open to discussing new projects, creative ideas, or opportunities
          to be part of your visions.
        </p>
        
        <div class="social-links">
          <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" class="social-link">
            <i :class="link.icon"></i>
            <span>{{ link.name }}</span>
          </a>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" required>
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        
        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" id="subject" v-model="form.subject" required>
        </div>
        
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'fab fa-github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/timocinzaynal',
    icon: 'fab fa-linkedin'
  },
]

const handleSubmit = () => {
  // Handle form submission here
  console.log('Form submitted:', form.value)
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
.contact {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.contact-info {
  padding: 2rem;
}

h1 {
  color: var(--text-color);
  margin-bottom: 1rem;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-color);
  margin-bottom: 2rem;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--text-color);
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.social-link:hover {
  background-color: var(--hover-bg);
}

.contact-form {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-weight: 500;
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--bg-color);
  color: var(--text-color);
}

textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-btn {
  background-color: #42b983;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #3aa876;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style> 