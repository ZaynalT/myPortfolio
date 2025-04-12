# Personal Portfolio Website

A modern, responsive portfolio website built with Vue.js 3, showcasing professional projects and skills with a focus on clean design and user experience.

## Features

- 🎨 Dark/Light mode with persistent user preferences
- 📱 Fully responsive design
- 🔍 SEO-friendly URLs
- 🏷️ Tag-based project filtering
- 📊 Firebase integration for data management
- 🎯 Clean and modern UI
- ⚡ Fast performance with Vue 3 and Vite

## Tech Stack

- Vue.js 3
- Vue Router
- Pinia (State Management)
- Firebase (Data Storage)
- CSS3
- Vite

## Project Setup

1. Clone the repository:
```bash
git clone https://github.com/ZaynalT/myPortfolio.git
cd myPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
Create a `.env` file in the root directory with the following Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

4. Run the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Environment Variables

The following environment variables are required for Firebase integration:

- `VITE_FIREBASE_API_KEY`: Your Firebase API key
- `VITE_FIREBASE_AUTH_DOMAIN`: Your Firebase auth domain
- `VITE_FIREBASE_PROJECT_ID`: Your Firebase project ID
- `VITE_FIREBASE_STORAGE_BUCKET`: Your Firebase storage bucket
- `VITE_FIREBASE_MESSAGING_SENDER_ID`: Your Firebase messaging sender ID
- `VITE_FIREBASE_APP_ID`: Your Firebase app ID
- `VITE_FIREBASE_MEASUREMENT_ID`: Your Firebase measurement ID

## Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable Vue components
├── data/           # Project data and configuration
├── router/         # Vue Router configuration
├── stores/         # Pinia stores
├── views/          # Page components
└── main.js         # Application entry point
```

## Key Components

- `Tag.vue`: Reusable tag component for skills and projects
- `Button.vue`: Custom button component with multiple variants
- `ProjectCard.vue`: Project card component for the projects grid
- `ProjectDetail.vue`: Detailed project view component

## Features in Detail

### Dark/Light Mode
- Toggle between dark and light themes
- User preferences are saved in localStorage
- Smooth transitions between themes

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Adaptive typography and spacing

### Project Showcase
- Grid layout for project cards
- Detailed project views
- Tag-based filtering
- SEO-friendly URLs with ID and title parameters

### Firebase Integration
- Real-time data retrieval
- Efficient data management
- Scalable architecture

## TODO
- [ ] Enable Server-Side Rendering (SSR) support
- [ ] Move bio data and reviews to firebase 
- [ ] Implement comprehensive testing suite
- [ ] Implement internationalization (i18n) support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Timocin Zaynal - [GitHub](https://github.com/ZaynalT)
