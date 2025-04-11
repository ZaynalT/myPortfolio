# Portfolio Website

A modern, responsive portfolio website built with Vue.js and Vite. This portfolio showcases my projects, skills, and professional experience.

## Features

- 🎨 Modern and responsive design
- 📱 Mobile-friendly interface
- 🚀 Fast performance with Vite
- 🎭 Smooth animations and transitions
- 🌓 Light/Dark mode support
- 📄 Project showcase with detailed views
- 🏷️ Tag-based project filtering
- 📱 Responsive navigation
- 🎯 SEO optimized

## Tech Stack

- Vue.js 3
- Vite
- CSS3
- Font Awesome Icons
- Vue Router

## Project Structure

```
src/
├── assets/          # Images, fonts, and other static assets
├── components/      # Reusable Vue components
├── data/           # Project data and content
├── views/          # Page components
├── App.vue         # Root component
└── main.js         # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Customization

### Adding Projects

To add new projects, edit the `src/data/projects.js` file:

```javascript
{
  title: "Project Title",
  description: "Brief project description",
  image: "path/to/image.jpg",
  tags: ["tag1", "tag2"],
  github: "https://github.com/yourusername/project",
  demo: "https://project-demo-url.com",
  fullText: "Detailed project description..."
}
```

### Styling

The project uses CSS variables for theming. You can customize colors and other styles in the `App.vue` file:

```css
:root {
  --primary-color: #your-color;
  --text-color: #your-color;
  --bg-color: #your-color;
  /* ... other variables ... */
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Contact

Timocin Zaynal - [timocin.zaynal@gmail.com]

Project Link: https://github.com/ZaynalT/myPortfolio
