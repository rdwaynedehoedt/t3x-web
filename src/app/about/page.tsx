import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import Mission from '@/components/about/Mission';
import Values from '@/components/about/Values';
import ScrollAnimation from '@/components/ui/ScrollTrigger';

export const metadata: Metadata = {
  title: 'About Us | T3X - Technology Solutions',
  description: 'Learn about T3X, our mission, values, and the story behind our innovative technology solutions for businesses in Sri Lanka and beyond.',
  keywords: [
    'T3X', 
    'technology company', 
    'Sri Lanka tech', 
    'tech company mission', 
    'innovation',
    'company values',
    'digital transformation',
    'technology solutions'
  ],
  alternates: {
    canonical: 'https://t3x.lk/about',
  },
  openGraph: {
    title: 'About T3X - Our Story & Mission',
    description: 'Learn about T3X, our mission, values, and the story behind our innovative technology solutions for businesses.',
    url: 'https://t3x.lk/about',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'T3X About Us'
      }
    ]
  },
  twitter: {
    title: 'About T3X - Our Story & Mission',
    description: 'Learn about T3X, our mission, values, and the story behind our innovative technology solutions for businesses.',
    images: ['/og-about.jpg']
  }
};

export default function About() {
  return (
    <div className="flex-1">
      <AboutHero />
      
      <ScrollAnimation animation="fade-up">
        <OurStory />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade-up">
        <Mission />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade-up">
        <Values />
      </ScrollAnimation>
    </div>
  );
} 