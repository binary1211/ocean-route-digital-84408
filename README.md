# Ocean Route International - Import/Export Website

A stunning single-page responsive website for Ocean Route International, an import/export company specializing in agricultural products.

## 🌊 Features

- **3D Ocean Scene**: Interactive React Three Fiber scene with animated cargo ship
- **Particle Effects**: Beautiful tsparticles background for depth and atmosphere
- **Smooth Animations**: Framer Motion animations throughout with respect for reduced motion preferences
- **Responsive Design**: Mobile-first design that works perfectly on all devices
- **Contact Form**: Fully validated contact form with product interest selection
- **SEO Optimized**: Proper meta tags, semantic HTML, and accessibility features
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **React Three Fiber** - 3D graphics with Three.js
- **Framer Motion** - Smooth animations
- **tsparticles** - Particle effects
- **React Hook Form** - Form management
- **Zod** - Schema validation

## 📋 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx       # Sticky navigation with smooth scroll
│   ├── Hero.tsx            # Hero section with 3D scene
│   ├── OceanScene.tsx      # React Three Fiber 3D ocean
│   ├── ParticlesBackground.tsx # Particle effects
│   ├── About.tsx           # About us section
│   ├── Services.tsx        # Services showcase
│   ├── Certifications.tsx  # Certification badges
│   ├── Products.tsx        # Product categories
│   ├── ContactForm.tsx     # Contact form with validation
│   └── Footer.tsx          # Footer section
├── pages/
│   └── Index.tsx           # Main page layout
├── index.css               # Design system & global styles
└── main.tsx               # App entry point
```

## 🎨 Design System

### Colors
- **Primary**: `#1A2A80` (Navy Blue) - Main brand color
- **Accent**: `#74B1ED` (Sky Blue) - Secondary/accent color
- **Neutral**: Accessible gray scale for text and backgrounds

### Typography
- **Font**: Inter - Clean, modern, highly readable
- **Weights**: 300-800 for various use cases

### Components
All UI components use the design system tokens defined in `src/index.css`:
- No hard-coded colors in components
- Semantic color tokens (primary, accent, muted, etc.)
- Consistent spacing and shadows
- Dark mode support built-in

## 🛠️ Local Development

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd ocean-route-international

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 📧 Contact Form Backend

The contact form is currently configured to work with **console logging** for demonstration purposes. To enable actual email sending, you have two options:

### Option 1: Lovable Cloud (Recommended)

The easiest way to add backend functionality is to use **Lovable Cloud**:

1. Enable Lovable Cloud in your project settings
2. Create an edge function to handle email sending
3. Use environment variables for email credentials
4. Update the contact form to call your edge function

**Benefits**:
- No external accounts needed
- Built-in secrets management
- Serverless, auto-scaling
- Easy integration with the project

### Option 2: External Email Service

You can integrate with services like:
- **SendGrid**: Reliable transactional email API
- **Mailgun**: Developer-friendly email service
- **AWS SES**: Cost-effective for high volume

**Required Environment Variables** (when using external services):
```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASS=your-password
# OR for SendGrid
SENDGRID_API_KEY=your-api-key
```

**Email Configuration**:
- **From**: batchbinary@gmail.com
- **To**: externaluse.made@gmail.com

## 🎯 Sections Overview

### 1. Hero
- Full-screen hero with 3D animated ocean scene
- Interactive cargo ship that bobs and moves
- Particle effects for atmosphere
- CTA buttons with smooth scroll

### 2. About Us
- Company mission and values
- Three key value propositions
- Animated cards with icons

### 3. Services
- 6 core services in responsive grid
- Hover effects with Framer Motion
- Clear service descriptions

### 4. Certifications
- Quality certifications and standards
- Visual badges with icons
- Verified status indicators

### 5. Products
- 6 product categories with details
- Color-coded cards
- Comprehensive product lists

### 6. Contact Form
- Full validation with Zod schema
- Multi-select product interests
- GDPR consent checkbox
- Contact information cards
- Success/error toast notifications

## ♿ Accessibility

- Semantic HTML throughout
- ARIA labels and roles
- Keyboard navigation support
- Focus management on navigation
- Respects `prefers-reduced-motion`
- Proper heading hierarchy
- Alt text for all meaningful content

## 🎭 Animations

All animations respect user preferences:
- Smooth entrance animations on scroll
- Hover effects on interactive elements
- 3D scene auto-rotation (can be disabled)
- Particle effects (performance-optimized)
- Smooth scroll navigation

## 📱 Responsive Design

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All sections are fully responsive with mobile-first approach.

## 🔧 Customization

### Replace 3D Ship Model
The current ship is built with basic Three.js primitives. To use a custom GLTF model:

1. Add your `.gltf` or `.glb` file to `public/models/`
2. Update `src/components/OceanScene.tsx`:

```tsx
import { useGLTF } from '@react-three/drei';

function Ship() {
  const { scene } = useGLTF('/models/your-ship.glb');
  // ... use the loaded model
}
```

**Recommended Models**:
- [Sketchfab](https://sketchfab.com/search?q=cargo+ship&type=models) - Free 3D models
- [TurboSquid](https://www.turbosquid.com/) - Professional models
- [Poly Haven](https://polyhaven.com/) - Free high-quality assets

### Add Lottie Animations
To add Lottie animations:

```bash
npm install lottie-react
```

```tsx
import Lottie from 'lottie-react';
import animationData from './animation.json';

<Lottie animationData={animationData} loop={true} />
```

**Recommended Lottie Sources**:
- [LottieFiles](https://lottiefiles.com/) - Free animations
- [IconScout](https://iconscout.com/lotties) - Premium & free

## 🚢 Deployment

### Deploy with Lovable

The easiest way to deploy:

1. Open your project in [Lovable](https://lovable.dev)
2. Click **Publish** in the top right
3. Your site is live at `yoursite.lovable.app`

### Custom Domain

To connect a custom domain:
1. Navigate to Project > Settings > Domains
2. Follow the instructions to connect your domain
3. (Requires a paid Lovable plan)

### Deploy Elsewhere

The site is a standard Vite React app and can be deployed to:
- Vercel
- Netlify
- Cloudflare Pages
- AWS Amplify
- GitHub Pages

## 📄 License

© 2025 Ocean Route International. All rights reserved.

## 🤝 Support

For questions or support, contact:
- Email: externaluse.made@gmail.com
- Phone: +91 XXX XXX XXXX

---

Built with ❤️ using [Lovable](https://lovable.dev)
