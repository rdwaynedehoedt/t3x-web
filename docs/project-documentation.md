# T3X Website Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Key Features](#key-features)
5. [Component Architecture](#component-architecture)
6. [Theme System](#theme-system)
7. [API Routes](#api-routes)
8. [Deployment Guide](#deployment-guide)
9. [Development Guidelines](#development-guidelines)
10. [Future Enhancements](#future-enhancements)
11. [SEO Management Guide](#seo-management-guide)

## Project Overview

The T3X website is a modern, responsive web application designed to showcase the company's services, values, and team while providing an intuitive and engaging user experience. The website serves as the primary online presence for T3X, helping potential clients learn about our offerings and connect with our team.

## Technology Stack

- **Frontend Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **State Management**: React Context
- **Deployment**: Vercel
- **Package Manager**: npm
- **Code Quality**: ESLint
- **Version Control**: Git

## Project Structure

```
t3x-website/
├── public/                 # Static assets
│   ├── images/            # Image assets
│   │   ├── about/         # About page
│   │   ├── careers/       # Careers page
│   │   ├── contact/       # Contact page
│   │   ├── portfolio/     # Portfolio page
│   │   ├── services/      # Services page
│   │   ├── page.tsx       # Homepage
│   │   └── layout.tsx     # Root layout
│   ├── components/        # Reusable components
│   │   ├── about/         # About page components
│   │   ├── services/      # Services page components
│   │   ├── contact/       # Contact page components
│   │   ├── layout/        # Layout components
│   │   └── ui/            # UI components
│   ├── styles/            # Global styles
│   └── utils/             # Utility functions
├── docs/                  # Documentation
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── postcss.config.mjs     # PostCSS configuration
└── package.json           # Project dependencies
```

## Key Features

### 1. Responsive Design
- Fully responsive layout for all device sizes
- Mobile-first approach
- Adaptive typography and spacing
- Touch-friendly interactions

### 2. Modern UI with Animations
- Smooth page transitions using Framer Motion
- Interactive UI elements
- Scroll-based animations
- 3D visual effects
- Custom cursor interactions

### 3. Theme System
- Light and dark mode support
- Theme persistence
- Smooth theme transitions
- Custom color variables
- System preference detection

### 4. Performance Optimization
- Static site generation
- Image optimization
- Code splitting
- Lazy loading
- Performance monitoring

### 5. SEO Optimization
- Metadata configuration
- Open Graph tags
- Schema.org markup
- Sitemap generation
- Canonical URLs

## Component Architecture

### Page Components
Each page is composed of several section components:

- **Hero Sections**: Top banner sections with animations
- **Content Sections**: Modular content blocks
- **CTA Sections**: Call-to-action areas
- **Feature Sections**: Service highlights
- **Team Sections**: Team member displays

### Reusable UI Components
- **AnimatedButton**: Interactive button with hover effects
- **ThemeToggle**: Theme switcher with animations
- **CustomCursor**: Custom cursor with interactions
- **ScrollAnimation**: Scroll-based animations
- **ServiceCard**: Service information cards
- **ContactForm**: Form with validation and submission
- **Navbar**: Responsive navigation
- **Footer**: Site footer with links

## Theme System

The theme system uses CSS variables and Tailwind CSS for styling:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --accent: #0070f3;
  --accent-light: #3291ff;
  --accent-dark: #0050b3;
  /* ... other variables ... */
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
  /* ... dark mode variables ... */
}
```

## API Routes

### Contact Form API
- Endpoint: `/api/contact`
- Method: POST
- Body: Form data (name, email, phone, company, message)
- Response: Success/error message

## Deployment Guide

1. **Build Process**
   ```bash
   npm run build
   ```

2. **Deployment Options**
   - Vercel (recommended)
   - Netlify
   - AWS Amplify
   - DigitalOcean App Platform

3. **Environment Variables**
   - Set up required environment variables
   - Configure email service credentials
   - Set up analytics tracking

4. **Domain Configuration**
   - Point domain to hosting provider
   - Set up SSL certificate
   - Configure DNS records

## Development Guidelines

### Getting Started
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```

### Code Style
- Use TypeScript for all components
- Follow Next.js App Router patterns
- Use Tailwind CSS for styling
- Component file naming: PascalCase
- Interface definitions in same file
- Use client components only when necessary

### Git Workflow
1. Create feature branch
2. Make changes
3. Run tests
4. Create pull request
5. Review and merge

## Future Enhancements

1. **Content Management**
   - Integration with headless CMS
   - Blog section
   - Dynamic content updates

2. **Internationalization**
   - Multi-language support
   - RTL support
   - Localized content

3. **Enhanced Features**
   - Interactive 3D models
   - Real-time chat support
   - Project showcase gallery
   - Client portal

4. **Performance**
   - Edge functions
   - Image optimization
   - Caching strategies
   - Performance monitoring

5. **Analytics**
   - User behavior tracking
   - Conversion tracking
   - A/B testing
   - Heat maps

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Three.js Documentation](https://threejs.org/docs/)
- [Vercel Deployment](https://vercel.com/docs)

## Component Details

### Core Components

#### 1. ThemeProvider
- **Location**: `src/components/ui/ThemeProvider.tsx`
- **Purpose**: Manages theme state and persistence
- **Features**:
  - Light/dark mode toggle
  - System preference detection
  - Theme persistence using localStorage
  - Smooth theme transitions
- **Usage**:
  ```tsx
  import { ThemeProvider } from '@/components/ui/ThemeProvider'
  
  export default function RootLayout({ children }) {
    return (
      <ThemeProvider>
        {children}
      </ThemeProvider>
    )
  }
  ```

#### 2. AnimatedButton
- **Location**: `src/components/ui/AnimatedButton.tsx`
- **Purpose**: Reusable animated button component
- **Props**:
  - `variant`: 'primary' | 'secondary' | 'outline'
  - `size`: 'sm' | 'md' | 'lg'
  - `className`: Additional CSS classes
  - `children`: Button content
- **Features**:
  - Hover animations
  - Loading state
  - Disabled state
  - Customizable variants

#### 3. ContactForm
- **Location**: `src/components/contact/ContactForm.tsx`
- **Purpose**: Handles contact form submissions
- **Features**:
  - Form validation
  - Success/error states
  - Loading indicators
  - API integration
- **API Integration**:
  ```typescript
  interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
  }
  ```

### Layout Components

#### 1. Navbar
- **Location**: `src/components/layout/Navbar.tsx`
- **Features**:
  - Responsive design
  - Mobile menu
  - Theme toggle
  - Active link highlighting
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

#### 2. Footer
- **Location**: `src/components/layout/Footer.tsx`
- **Features**:
  - Social media links
  - Navigation links
  - Copyright information
  - Newsletter signup

## Environment Setup

### Required Environment Variables
```env
# API Keys
NEXT_PUBLIC_EMAIL_SERVICE_API_KEY=your_api_key
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://t3x.lk
NEXT_PUBLIC_SITE_NAME=T3X
NEXT_PUBLIC_CONTACT_EMAIL=contact@t3x.lk

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_CHAT=false
```

### Development Environment
1. **Node.js Version**: 18.x or higher
2. **npm Version**: 9.x or higher
3. **Required Tools**:
   - Git
   - VS Code (recommended)
   - ESLint extension
   - Prettier extension

### Production Environment
1. **Build Requirements**:
   - Node.js 18.x
   - 2GB RAM minimum
   - 1GB storage space
2. **Recommended Hosting**:
   - Vercel (automatic deployments)
   - 2GB RAM
   - 10GB storage
   - Global CDN

## Performance Optimization

### 1. Image Optimization
- Use Next.js Image component
- Implement responsive images
- Lazy load images
- Use WebP format
- Example:
  ```tsx
  import Image from 'next/image'
  
  <Image
    src="/images/example.jpg"
    alt="Example"
    width={800}
    height={600}
    priority={true} // For above-the-fold images
  />
  ```

### 2. Code Splitting
- Dynamic imports for heavy components
- Route-based code splitting
- Example:
  ```tsx
  const DynamicComponent = dynamic(() => import('@/components/HeavyComponent'))
  ```

### 3. Caching Strategies
- Static page generation
- ISR (Incremental Static Regeneration)
- Browser caching
- CDN caching

## Troubleshooting Guide

### Common Issues

#### 1. Build Errors
- **Issue**: TypeScript compilation errors
  - **Solution**: Run `npm run type-check`
  - **Solution**: Check `tsconfig.json` settings

- **Issue**: Module not found
  - **Solution**: Run `npm install`
  - **Solution**: Check import paths

#### 2. Runtime Errors
- **Issue**: Theme not persisting
  - **Solution**: Check localStorage access
  - **Solution**: Verify ThemeProvider implementation

- **Issue**: Contact form not submitting
  - **Solution**: Check API endpoint
  - **Solution**: Verify environment variables

#### 3. Performance Issues
- **Issue**: Slow page load
  - **Solution**: Check image optimization
  - **Solution**: Implement code splitting
  - **Solution**: Enable caching

### Debugging Tools
1. **Browser DevTools**
   - Network tab for API calls
   - Performance tab for metrics
   - Console for errors

2. **Next.js Debugging**
   - `NEXT_DEBUG=true npm run dev`
   - `NEXT_TELEMETRY_DEBUG=1 npm run dev`

3. **Performance Monitoring**
   - Lighthouse audits
   - Web Vitals monitoring
   - Custom performance metrics

## Security Guidelines

### 1. API Security
- Rate limiting
- Input validation
- CORS configuration
- API key protection

### 2. Data Protection
- Environment variables
- Secure headers
- Content Security Policy
- XSS prevention

### 3. Authentication
- Session management
- Token handling
- Secure cookies
- Password policies

## Testing Strategy

### 1. Unit Tests
- Component testing
- Utility function testing
- API route testing
- Example:
  ```typescript
  describe('ContactForm', () => {
    it('validates email correctly', () => {
      // Test implementation
    })
  })
  ```

### 2. Integration Tests
- Page rendering
- API integration
- Form submissions
- Theme switching

### 3. E2E Tests
- User flows
- Critical paths
- Cross-browser testing
- Mobile responsiveness

## Maintenance Guide

### 1. Regular Updates
- Dependencies
- Security patches
- Content updates
- Performance monitoring

### 2. Backup Strategy
- Code repository
- Database backups
- Media assets
- Configuration files

### 3. Monitoring
- Error tracking
- Performance metrics
- User analytics
- Security alerts

## Contributing Guidelines

### 1. Code Review Process
- Pull request template
- Review checklist
- Testing requirements
- Documentation updates

### 2. Branch Strategy
- Main branch protection
- Feature branches
- Release branches
- Hotfix branches

### 3. Commit Guidelines
- Conventional commits
- Atomic commits
- Meaningful messages
- Related issues 

## SEO Management Guide

### 1. On-Page SEO Optimization

#### Meta Tags Configuration
```tsx
// Example of metadata configuration in layout.tsx
export const metadata = {
  title: 'T3X - Web Development & Digital Solutions | Sri Lanka',
  description: 'Leading web development company in Sri Lanka. Expert in custom web applications, e-commerce solutions, and digital transformation services.',
  keywords: 'web development, software development, Sri Lanka, custom web applications, e-commerce, digital solutions',
  openGraph: {
    title: 'T3X - Web Development & Digital Solutions',
    description: 'Transform your digital presence with T3X. Expert web development services in Sri Lanka.',
    images: '/og-images/t3x-og.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'T3X - Web Development & Digital Solutions',
    description: 'Leading web development company in Sri Lanka',
    images: '/og-images/t3x-twitter.jpg',
  }
}
```

#### Content Strategy
1. **Service Pages**
   - Web Development
   - E-commerce Solutions
   - Custom Software
   - Digital Marketing
   - UI/UX Design

2. **Blog Content**
   - Web Development Trends
   - Technology Insights
   - Case Studies
   - Industry News
   - Tutorials and Guides

3. **Location-Based Content**
   - Web Development Sri Lanka
   - Software Development Colombo
   - IT Services Sri Lanka
   - Digital Solutions Sri Lanka

### 2. Technical SEO

#### 1. Sitemap Generation
```typescript
// next.config.ts
export default {
  // ... other config
  generateSitemap: true,
  sitemap: {
    hostname: 'https://t3x.lk',
    exclude: ['/admin/*'],
    priority: {
      '/': 1.0,
      '/services': 0.9,
      '/portfolio': 0.8,
      '/blog': 0.7,
    }
  }
}
```

#### 2. Robots.txt Configuration
```txt
# public/robots.txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Sitemap: https://t3x.lk/sitemap.xml
```

#### 3. Performance Optimization
- Implement Core Web Vitals
- Optimize images and assets
- Enable compression
- Implement caching
- Use CDN for static assets

### 3. Local SEO Strategy

#### 1. Google Business Profile
- Complete business profile
- Regular updates
- Customer reviews
- Service area definition
- Business hours

#### 2. Local Citations
- Business directories
- Industry listings
- Local chamber of commerce
- Professional associations

#### 3. Location Pages
- Colombo office
- Service areas
- Local case studies
- Client testimonials

### 4. Content Marketing

#### 1. Blog Strategy
- Weekly technical articles
- Monthly case studies
- Industry insights
- Tutorial content
- Technology updates

#### 2. Keywords to Target
Primary Keywords:
- Web Development Sri Lanka
- Software Development Company
- Custom Web Applications
- E-commerce Solutions
- Digital Transformation

Secondary Keywords:
- Web Design Sri Lanka
- Mobile App Development
- UI/UX Design Services
- IT Solutions Provider
- Digital Marketing Agency

#### 3. Content Calendar
```markdown
Week 1: Technical Article
Week 2: Case Study
Week 3: Industry News
Week 4: Tutorial/Guide
```

### 5. Link Building Strategy

#### 1. Quality Backlinks
- Industry partnerships
- Guest blogging
- Technical forums
- Open source contributions
- Industry directories

#### 2. Internal Linking
- Service pages
- Portfolio items
- Blog posts
- Case studies
- Team profiles

### 6. Social Media Integration

#### 1. Social Profiles
- LinkedIn
- Twitter
- GitHub
- Behance
- Dribbble

#### 2. Content Sharing
- Blog posts
- Portfolio updates
- Team achievements
- Industry news
- Technical insights

### 7. Monitoring and Analytics

#### 1. Tools Setup
- Google Search Console
- Google Analytics 4
- SEMrush/Ahrefs
- Screaming Frog
- Google Tag Manager

#### 2. Key Metrics
- Organic traffic
- Keyword rankings
- Backlink profile
- Page load speed
- User engagement

### 8. Regular SEO Tasks

#### Daily
- Monitor rankings
- Check Google Search Console
- Respond to social media
- Update content calendar

#### Weekly
- Publish new content
- Analyze performance
- Check backlinks
- Update meta descriptions

#### Monthly
- Technical SEO audit
- Content strategy review
- Competitor analysis
- Performance report

### 9. Competitor Analysis

#### 1. Direct Competitors
- Analyze their keywords
- Study their content
- Monitor their backlinks
- Track their updates

#### 2. Market Position
- Service comparison
- Pricing analysis
- USP identification
- Gap analysis

### 10. Mobile SEO

#### 1. Mobile Optimization
- Responsive design
- Mobile-first indexing
- AMP pages
- Mobile usability

#### 2. Performance
- Core Web Vitals
- Mobile load speed
- Touch interactions
- Mobile navigation

### 11. International SEO

#### 1. Language Targeting
- English (primary)
- Sinhala (secondary)
- Tamil (tertiary)

#### 2. Regional Focus
- Sri Lanka (primary)
- South Asia (secondary)
- Global (tertiary)

### 12. E-commerce SEO

#### 1. Product Pages
- Unique descriptions
- High-quality images
- Customer reviews
- Schema markup

#### 2. Category Pages
- Clear navigation
- Filter options
- Breadcrumbs
- Internal linking

### 13. Technical Implementation

#### 1. Schema Markup
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "T3X",
  "url": "https://t3x.lk",
  "logo": "https://t3x.lk/logo.png",
  "sameAs": [
    "https://linkedin.com/company/t3x",
    "https://twitter.com/t3x"
  ]
}
```

#### 2. Canonical URLs
```html
<link rel="canonical" href="https://t3x.lk/services/web-development" />
```

### 14. Content Guidelines

#### 1. Writing Style
- Clear and concise
- Technical accuracy
- Engaging tone
- Action-oriented

#### 2. Formatting
- Short paragraphs
- Bullet points
- Subheadings
- Internal links

### 15. Regular Updates

#### 1. Content Refresh
- Update statistics
- Refresh case studies
- Update team information
- Add new services

#### 2. Technical Updates
- Security patches
- Performance optimization
- Schema updates
- Meta tag reviews 