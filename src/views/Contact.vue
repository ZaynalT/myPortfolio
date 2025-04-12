<template>
  <div class="contact">
    <div class="contact-content">
      <div class="contact-info">
        <h1 class="main-title">Get in Touch</h1>
        <p class="description">
          I'm always open to discussing new projects, creative ideas, or opportunities
          to be part of your visions.
        </p>
        
        <div class="email-contact">
          <i class="fas fa-envelope"></i>
          <a href="mailto:timocin.zaynal@gmail.com" class="email-link">timocin.zaynal@gmail.com</a>
        </div>
        
        <div class="social-links">
          <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" class="social-link">
            <i :class="link.icon"></i>
            <span>{{ link.name }}</span>
          </a>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            required
            class="form-input"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            class="form-input"
          />
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <input
            type="text"
            id="subject"
            v-model="form.subject"
            required
            class="form-input"
          />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            required
            class="form-textarea"
          ></textarea>
        </div>
        <Button
          type="submit"
          variant="primary"
          class="submit-btn"
          :full-width="true"
        >
          Send Message
        </Button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from '../components/Button.vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/ZaynalT',
    icon: 'fab fa-github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/timocinzaynal',
    icon: 'fab fa-linkedin'
  },
]

const handleSubmit = () => {
  // Handle form submission
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
  position: relative;
  display: inline-block;
}

h1::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 3px;
  background: var(--tag-bg);
  border-radius: 2px;
}

.contact-info h1.main-title::after {
  display: none;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-color);
  margin-bottom: 2rem;
}

.email-contact {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: var(--card-bg);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.email-contact:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.email-contact i {
  font-size: 1.5rem;
  color: var(--tag-bg);
}

.email-link {
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.email-link:hover {
  color: var(--tag-bg);
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
  background-color: var(--tag-bg);
  color: white;
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

.form-input, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.form-textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-btn {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style> 