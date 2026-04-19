# 🎨 El Canah Zossou - Interactive 3D Portfolio

A **scalable, extensible portfolio website** showcasing 3D development, real-time graphics, VR/AR experiences, and software engineering projects. Built with **Next.js, React Three Fiber, and Three.js**.

## 🚀 Features

- **Interactive 3D Homepage** - Real-time 3D experience using Three.js
- **Responsive Portfolio Gallery** - Showcase projects with filtering by type and technology
- **Scalable Architecture** - Easily add new experiences, projects, or content types
- **GitHub Codespaces Ready** - Develop from iPad, PC, or any environment
- **Type-Safe** - Full TypeScript support for reliable development
- **Dark Theme** - Modern, professional UI with Tailwind CSS
- **SEO Optimized** - Next.js metadata and Open Graph support

## 📁 Project Structure

The project uses a **modular, scalable architecture** designed for easy content expansion:

```
app/src/
├── app/                          # Next.js app router
│   ├── page.tsx                 # Home page entry
│   └── layout.tsx               # Root layout with SEO
│
├── core/three/                   # Three.js & React Three Fiber
│   ├── CanvasRoot.tsx           # 3D Canvas wrapper
│   └── SceneManager.tsx          # Scene routing logic
│
├── experience/scenes/            # 3D Scene components
│   ├── HomeScene.tsx            # Interactive home experience
│   └── GalleryScene.tsx          # Portfolio gallery view
│
├── components/                   # Reusable UI components
│   └── experience/              # Experience-related components
│       ├── ExperienceCard.tsx   # Single project card
│       ├── ExperienceGrid.tsx   # Gallery grid layout
│       └── HomeOverlay.tsx      # Home page UI overlay
│
├── data/                         # Content & data
│   └── experiences.ts           # All portfolio projects
│
├── types/                        # TypeScript definitions
│   └── experience.ts            # Experience types & interfaces
│
├── store/                        # Global state (Zustand)
│   └── useStore.ts              # Portfolio app state
│
├── lib/                          # Utilities & helpers
└── globals.css                   # Global styles
```

## 🎯 How to Add New Experiences

### Step 1: Add Experience Data

Edit `src/data/experiences.ts` and add a new experience object:

```typescript
{
  id: 'my-project',
  title: 'My New Project',
  description: 'Brief description of the project',
  type: 'threejs', // or 'unity', 'unreal', 'web', 'other'
  skills: ['3D Graphics', 'Python'],
  technologies: ['Three.js', 'Python', 'WebGL'],
  featured: true, // Show on home page
  date: '2025',
  tags: ['graphics', '3d'],
  thumbnail: '/images/project.jpg',
  fullDescription: 'Detailed description...',
  links: {
    github: 'https://github.com/...',
    demo: 'https://...',
  }
}
```

### Step 2: Add to Scene Manager (Optional)

If you need a dedicated scene for your experience, add it to `src/core/three/SceneManager.tsx`:

```typescript
case 'your-scene':
  return <YourScene />
```

### Step 3: No UI Updates Needed!

The gallery automatically displays your new experience thanks to the modular data-driven architecture.

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js** | React framework with SSR, routing, SSG |
| **React Three Fiber** | React renderer for Three.js |
| **Three.js** | 3D graphics library |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Zustand** | Lightweight state management |
| **React Three Drei** | Helpful utilities for React Three Fiber |

## 📦 Installation

### Prerequisites
- Node.js 18+ (or use Codespaces)
- npm or yarn

### Local Setup

```bash
cd app
npm install
npm run dev
```

Visit `http://localhost:3000` in your browser.

### GitHub Codespaces

1. Fork this repository
2. Click **Code** → **Codespaces** → **Create codespace on main**
3. Wait for container to build (devcontainer.json handles setup)
4. Terminal automatically opens with `npm install` already run
5. Run `npm run dev` and open preview in browser

## 🎮 Navigation & Scenes

The portfolio includes multiple interactive scenes:

| Scene | Route | Purpose |
|-------|-------|---------|
| **Home** | `/` (default) | Interactive 3D entry point with featured projects |
| **Gallery** | Via "View Portfolio" button | Browse all projects with filtering |
| **Detail** | From gallery cards | Individual project details (coming soon) |
| **About** | Via navigation | Resume and skills overview (coming soon) |

## 🧩 State Management

Global state is managed with **Zustand** in `src/store/useStore.ts`:

```typescript
const { scene, setScene, selectedExperienceId, setSelectedExperience } = useStore()
```

**State includes:**
- Current scene being displayed
- Selected experience ID
- Mobile menu state
- UI visibility toggles

## 🎨 Customization

### Update Personal Info

1. `src/app/layout.tsx` - Update metadata (title, description, keywords)
2. `src/components/experience/HomeOverlay.tsx` - Update name, title, contact info
3. `src/data/experiences.ts` - Add your projects

### Styling

- **Global colors**: Edit `app/src/app/globals.css`
- **Component styles**: Use Tailwind CSS classes (already configured)
- **Theme colors**: Modify Tailwind config in `tailwind.config.ts` if needed

### 3D Models

To add 3D models to scenes:

```typescript
import { useGLTF } from '@react-three/drei'

// In a scene component:
const { scene } = useGLTF('/models/my-model.glb')
// Use <primitive object={scene} />
```

## 📱 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
# Follow the prompts
```

### Docker / OVH

The project includes a `.devcontainer/devcontainer.json` for containerization.

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Manual Deployment

```bash
npm run build
npm start
```

Serves production build on `http://localhost:3000`

## 🔧 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm start        # Serve production build
npm run lint     # Run ESLint
npm run type-check # Check TypeScript types
```

## 📝 Adding New Scene Types

1. Create component in `src/experience/scenes/`
2. Update `SceneType` in `src/types/experience.ts`
3. Import and add case to `SceneManager.tsx`

Example:

```typescript
// src/experience/scenes/AboutScene.tsx
export default function AboutScene() {
  return <div>About content...</div>
}

// src/core/three/SceneManager.tsx
case 'about':
  return <AboutScene />
```

## 🚀 Future Enhancements

- [ ] 3D gallery with floating cards in space
- [ ] Experience detail page with embeded demos
- [ ] Unity WebGL build embedding
- [ ] Unreal Engine Pixel Streaming integration
- [ ] Advanced filtering and search
- [ ] Blog section for technical articles
- [ ] Dark/Light theme toggle
- [ ] i18n for multiple languages

## 📧 Contact

- **Email**: elcanahzossou@gmail.com
- **Phone**: +33 (0)6 9801 7037
- **Location**: 71 Rue du Général Conrad, 67000 Strasbourg, France

## 📄 License

This portfolio is open source and available under the MIT License.
