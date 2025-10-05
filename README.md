# Yousef Mehdizadeh - Portfolio

A modern, responsive portfolio website built with Next.js, showcasing my skills, projects, and professional journey as a Software Engineer specializing in Full Stack and Embedded Systems.

## 🚀 Live Demo

[View Portfolio](https://adamzod.github.io/Portfolio/) *(Coming Soon)*

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Components**: 
  - Animated skill showcase with hover effects
  - Project modals with detailed information
  - Smooth scrolling navigation
  - Contact modal with direct links
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Ready**: Meta tags and structured data for search engines

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons

### UI Components
- **Radix UI** - Accessible component primitives
- **Custom Components** - Tailored UI elements
- **Responsive Design** - Mobile-first approach

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
Portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── ClientLayout.tsx   # Client-side layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── animations/        # Animation components
│   ├── ui/               # Reusable UI components
│   ├── hero-section.tsx  # Hero section
│   ├── skills-section.tsx # Skills showcase
│   ├── projects-section.tsx # Projects display
│   └── ...               # Other sections
├── lib/                  # Utility functions
│   ├── projects.ts       # Project data
│   └── utils.ts          # Helper functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Adamzod/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📱 Sections

### 🏠 Hero Section
- Professional headshot
- Name and title
- Brief introduction
- Contact buttons
- Social media links

### 🛠️ Skills & Technologies
- **Frontend**: React, Next.js, TypeScript, Tailwind CSS, Bootstrap
- **Backend**: Node.js, Express.js, Python, Django
- **Databases**: PostgreSQL, MongoDB
- **DevOps**: Docker, AWS

### 🚀 Projects
- Featured projects with detailed descriptions
- Technology stacks used
- Live demo and source code links
- Interactive project modals

### 📈 Journey
- Professional timeline
- Education and experience
- Key achievements and milestones

### 📝 Recent Posts
- Blog posts and articles
- Technical insights
- Learning experiences

## 🎨 Customization

### Adding New Projects
Edit `lib/projects.ts` to add or modify projects:

```typescript
export const projects: Project[] = [
  {
    id: "project-name",
    title: "Project Title",
    summary: "Brief description",
    description: "Detailed description",
    technologies: ["React", "Node.js"],
    links: {
      website: "https://example.com",
      source: "https://github.com/username/repo"
    },
    // ... other properties
  }
];
```

### Modifying Skills
Update the skills data in the main page component or create a separate skills configuration file.

### Styling
- Global styles: `app/globals.css`
- Component styles: Use Tailwind CSS classes
- Custom animations: `components/animations/`

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static site
- `npm run preview` - Preview production build

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### GitHub Pages
1. Run `npm run export`
2. Push the `out` folder to the `gh-pages` branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📞 Contact

- **Email**: [yousef@example.com](mailto:yousef@example.com)
- **LinkedIn**: [linkedin.com/in/yousefmehdizadeh](https://linkedin.com/in/yousefmehdizadeh)
- **GitHub**: [github.com/yousefmehdizadeh](https://github.com/yousefmehdizadeh)
- **Twitter**: [@yousefmehdizadeh](https://x.com/yousefmehdizadeh)

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide](https://lucide.dev/)
- UI components by [Radix UI](https://www.radix-ui.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

⭐ **Star this repository if you found it helpful!**