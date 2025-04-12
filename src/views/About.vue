<template>
  <div class="about">
    <div class="about-content">
      <div class="about-text">
        <h1 class="main-title">About Me</h1>
        <p class="subtitle">{{ bio.subtitle }}</p>
        <p class="description">{{ bio.description }}</p>
        
        <Button
          v-if="!showFullBio"
          variant="outline"
          @click="showFullBio = true"
          class="read-more"
        >
          Read More
        </Button>
        
        <div v-if="showFullBio" class="full-bio">
          <p>{{ bio.fullText }}</p>
        </div>
      </div>

      <section class="employments-section">
        <h2 class="section-title">Employments</h2>
        <div class="employments-list">
          <div 
            class="employment-item" 
            v-for="(employment, index) in employments" 
            :key="employment.company"
            :class="{ 'visible': visibleItems.includes(index) }"
          >
            <span class="period">{{ employment.period }}</span>
            <span class="company">{{ employment.company }}</span>
          </div>
        </div>
      </section>

      <section class="skills-section">
        <h2 class="section-title">Skills</h2>
        <div class="skills-grid">
          <div 
            class="skill-category" 
            v-for="(skills, category, index) in skillCategories" 
            :key="category"
            :class="{ 'visible': visibleSkills.includes(index) }"
          >
            <h3 class="category-title">{{ category }}</h3>
            <div class="skills-list">
              <Tag v-for="skill in skills" :key="skill" :text="skill" type="skill" />
            </div>
          </div>
        </div>
      </section>

      <section class="education-section">
        <h2 class="section-title">Education</h2>
        <div class="education">
          <div 
            class="education-item" 
            v-for="(edu, index) in education" 
            :key="edu.id"
            :class="{ 'visible': visibleEducation.includes(index) }"
          >
            <h3 class="degree-title">{{ edu.degree }}</h3>
            <p class="institution">{{ edu.institution }}</p>
            <p class="period">{{ edu.period }}</p>
          </div>
        </div>
      </section>

      <section class="reviews-section">
        <h2 class="section-title">What People Say</h2>
        <div class="reviews-grid">
          <div 
            class="review-card" 
            v-for="(review, index) in reviews" 
            :key="review.id"
            :class="{ 'visible': visibleReviews.includes(index) }"
          >
            <div class="review-content">
              <div class="review-text">
                <p class="review-quote">"{{ review.text }}"</p>
                <div class="review-author">
                  <h3 class="author-name">{{ review.name }}</h3>
                  <p class="author-position">{{ review.position }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { bio } from '../data/bio'
import { reviews } from '../data/reviews'
import { ref, onMounted } from 'vue'
import Tag from '../components/Tag.vue'
import SectionTitle from '../components/SectionTitle.vue'
import Button from '../components/Button.vue'

const skillCategories = {
  'Frontend': [
    'React', 
    'NextJS', 
    'VueJS', 
    'HTML', 
    'CSS', 
    'Stylus', 
    'TailWind', 
    'Bulma', 
    'JavaScript', 
    'Typescript'
  ],
  'Backend': [
    'Spring Boot', 
    'Node.js', 
    'Java SE', 
    'Python', 
    'MySQL', 
    'MongoDB', 
    'Microsoft SQL Server', 
    'PostgreSQL'
  ],
  'DevOps': [
    'Docker', 
    'Kubernetes', 
    'AWS', 
    'Azure DevOps', 
    'GraphQL', 
    'Jenkins'
  ],
  'Tools': [
    'Git', 
    'VSCode', 
    'Jira', 
    'IntelliJ', 
    'Figma', 
    'NPM', 
    'Yarn', 
    'Webpack', 
    'XCode', 
    'pgAdmin', 
    'Eclipse', 
    'Atom', 
    'Sublime', 
    'VS Code'
  ],
  'Other': [
    'Agile', 
    'Scrum', 
    'CleanCode (SOLID)', 
    'Kanban', 
    'Mob programming', 
    'TDD', 
    'Devops', 
    'Automatic testing', 
    'REST', 
    'JSON', 
    'XML', 
    'Amplience', 
    'EPIServer', 
    'Mobile App Development', 
    'iOS', 
    'Android'
  ]
};

const education = [
  {
    id: 1,
    degree: 'Master of Science in Computer Systems & Networks',
    institution: 'Chalmers University of Technology, Gothenburg',
    period: 'September 2015 - November 2018'
  },
  {
    id: 2,
    degree: 'Bachelor of Science in Computer Engineering',
    institution: 'Chalmers University of Technology, Gothenburg',
    period: 'August 2011 - July 2014'
  },
  {
    id: 3,
    degree: 'Professional Scrum Master Certification',
    institution: 'Scrum.org',
    period: 'December 2018'
  },
  {
    id: 4,
    degree: 'Agile Basic Course',
    institution: 'Squeed',
    period: 'September 2018'
  }
];

const employments = [
  { period: '2024 – 2024', company: ' TechSeed' },
  { period: '2023 – 2024', company: ' Solid Beans' },
  { period: '2018–2023', company: ' Squeed' },
  { period: '2015–2017', company: ' Extenda Express AB, IT-Support' }
];

const visibleItems = ref([]);
const visibleSkills = ref([]);
const visibleEducation = ref([]);
const visibleReviews = ref([]);
const showFullBio = ref(false)

onMounted(() => {
  // Employment items observer
  const employmentObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.dataset.index);
        setTimeout(() => {
          visibleItems.value.push(index);
        }, index * 200);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Skills observer
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.dataset.index);
        setTimeout(() => {
          visibleSkills.value.push(index);
        }, index * 200);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Education observer
  const educationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.dataset.index);
        setTimeout(() => {
          visibleEducation.value.push(index);
        }, index * 200);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Reviews observer
  const reviewsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.dataset.index);
        setTimeout(() => {
          visibleReviews.value.push(index);
        }, index * 200);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe all items
  document.querySelectorAll('.employment-item').forEach((item, index) => {
    item.dataset.index = index;
    employmentObserver.observe(item);
  });

  document.querySelectorAll('.skill-category').forEach((item, index) => {
    item.dataset.index = index;
    skillsObserver.observe(item);
  });

  document.querySelectorAll('.education-item').forEach((item, index) => {
    item.dataset.index = index;
    educationObserver.observe(item);
  });

  // Observe review items
  document.querySelectorAll('.review-card').forEach((item, index) => {
    item.dataset.index = index;
    reviewsObserver.observe(item);
  });
});
</script>

<style scoped>
.about {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.about-text {
  max-width: 800px;
  margin: 0 auto;
}

.main-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-color);
  position: relative;
  display: inline-block;
}

.main-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 3px;
  background: var(--tag-bg);
  border-radius: 2px;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 1rem;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-color);
  margin-bottom: 1.5rem;
}

.read-more {
  margin-top: 1rem;
}

.full-bio {
  margin-top: 1.5rem;
}

.full-bio p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  white-space: pre-line;
}

.section-title {
  font-size: 1.8rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
}

/* Skills Section */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-category {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.1),
    0 6px 6px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateX(-50px);
  position: relative;
}

.skill-category::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  pointer-events: none;
  z-index: 1;
  border-radius: 12px;
}

.dark .skill-category::before {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

.skill-category.visible {
  opacity: 1;
  transform: translateX(0);
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 15px 25px rgba(0, 0, 0, 0.15),
    0 10px 10px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.05);
}

.category-title {
  font-size: 1.3rem;
  color: var(--text-color);
  margin-bottom: 1rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
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

.skill-tag:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
}

.skill-tag::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: transform 0.3s ease;
}

.skill-tag:hover::after {
  transform: translateX(100%);
}

/* Education Section */
.education {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.education-item {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.1),
    0 6px 6px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateX(-50px);
  position: relative;
}

.education-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  pointer-events: none;
  z-index: 1;
  border-radius: 12px;
}

.dark .education-item::before {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

.education-item.visible {
  opacity: 1;
  transform: translateX(0);
}

.education-item:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 15px 25px rgba(0, 0, 0, 0.15),
    0 10px 10px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.05);
}

.degree-title {
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.institution, .period {
  color: var(--text-color);
}

/* Employments Section */
.employments-section {
  margin-top: 3rem;
}

.employments-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.employment-item {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.1),
    0 6px 6px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateX(-50px);
  position: relative;
}

.employment-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  pointer-events: none;
  z-index: 1;
  border-radius: 12px;
}

.dark .employment-item::before {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

.employment-item.visible {
  opacity: 1;
  transform: translateX(0);
}

.employment-item:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 15px 25px rgba(0, 0, 0, 0.15),
    0 10px 10px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.05);
}

.period, .company {
  color: var(--text-color);
}

/* Reviews Section */
.reviews-section {
  margin-top: 3rem;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.review-card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.1),
    0 6px 6px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(20px);
  position: relative;
}

.review-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  pointer-events: none;
  z-index: 1;
  border-radius: 12px;
}

.dark .review-card::before {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

.review-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.review-card:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 15px 25px rgba(0, 0, 0, 0.15),
    0 10px 10px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.05);
}

.review-content {
  position: relative;
  z-index: 2;
}

.review-text {
  text-align: center;
}

.review-quote {
  font-size: 1.1rem;
  color: var(--text-color);
  margin-bottom: 1rem;
}

.review-author {
  margin-top: 1rem;
}

.author-name {
  font-size: 1.1rem;
  color: var(--text-color);
  margin-bottom: 0.25rem;
}

.author-position {
  color: var(--text-color);
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .about {
    padding: 1.5rem;
  }

  .main-title {
    font-size: 2.2rem;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .skills-grid,
  .education {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .about {
    padding: 1rem;
  }

  .main-title {
    font-size: 2.2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .subtitle, .description, .full-bio p {
    font-size: 1rem;
  }

  .skills-grid,
  .education {
    grid-template-columns: 1fr;
  }

  .skill-category,
  .education-item,
  .employment-item {
    padding: 1.25rem;
  }

  .employment-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .period,
  .company {
    font-size: 1rem;
  }

  .skill-tag {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
    border-radius: 20px;
  }

  .reviews-grid {
    grid-template-columns: 1fr;
  }

  .review-card {
    padding: 1.5rem;
  }

  .review-quote {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .about {
    padding: 0.75rem;
  }

  .main-title {
    font-size: 1.8rem;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .skill-tag {
    padding: 0.35rem 0.7rem;
    font-size: 0.8rem;
    border-radius: 18px;
  }

  .degree-title {
    font-size: 1.1rem;
  }

  .institution,
  .period {
    font-size: 0.9rem;
  }

  .review-quote {
    font-size: 0.9rem;
  }
}
</style> 