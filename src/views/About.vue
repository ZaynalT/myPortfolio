<template>
  <div class="about">
    <div class="about-content">
      <div class="about-text">
        <h1 class="main-title">About Me</h1>
        <p class="bio">
          {{ bio.fullText }}
        </p>
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
              <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
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
    </div>


  </div>
</template>

<script setup>
import { bio } from '../data/bio'
import { ref, onMounted } from 'vue'

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
  margin-bottom: 1.5rem;
  color: var(--text-color);
  position: relative;
  display: inline-block;
}

.bio {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-color);
  white-space: pre-line;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  position: relative;
  display: inline-block;
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
  border-radius: 8px;
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.5s ease-out;
  opacity: 0;
  transform: translateX(-50px);
}

.skill-category.visible {
  opacity: 1;
  transform: translateX(0);
}

.category-title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--text-color);
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
  border-radius: 8px;
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.5s ease-out;
  opacity: 0;
  transform: translateX(-50px);
}

.education-item.visible {
  opacity: 1;
  transform: translateX(0);
}

.degree-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.institution {
  font-size: 1rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.period {
  font-size: 0.9rem;
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
  border-radius: 8px;
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.5s ease-out;
  opacity: 0;
  transform: translateX(-50px);
}

.employment-item.visible {
  opacity: 1;
  transform: translateX(0);
}

.period {
  color: var(--text-color);
  font-weight: 600;
  font-size: 1.1rem;
}

.company {
  color: var(--text-color);
  font-size: 1.1rem;
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
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.4rem;
  }

  .bio {
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
}
</style> 