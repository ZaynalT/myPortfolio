<template>
  <button
    :class="[
      'button',
      `button--${variant}`,
      { 'button--full-width': fullWidth }
    ]"
    :type="type"
    @click="$emit('click')"
  >
    <i v-if="icon" :class="icon" class="button__icon"></i>
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'text'].includes(value)
  },
  type: {
    type: String,
    default: 'button'
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  }
})

defineEmits(['click'])
</script>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  outline: none;
  gap: 0.5rem;
}

.button--full-width {
  width: 100%;
}

.button--primary {
  background-color: var(--tag-bg);
  color: white;
}

.button--primary:hover {
  background-color: var(--tag-bg);
  opacity: 0.9;
  transform: translateY(-2px);
}

.button--secondary {
  background-color: var(--secondary-color);
  color: var(--text-color);
}

.button--secondary:hover {
  background-color: var(--secondary-hover);
  transform: translateY(-2px);
}

.button--outline {
  background-color: transparent;
  border: 2px solid var(--tag-bg);
  color: var(--tag-bg);
}

.button--outline:hover {
  background-color: var(--tag-bg);
  color: white;
  transform: translateY(-2px);
}

.button--text {
  background-color: transparent;
  color: var(--text-color);
  padding: 0.5rem;
}

.button--text:hover {
  color: var(--tag-bg);
}

.button__icon {
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .button {
    padding: 0.625rem 1.25rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style> 