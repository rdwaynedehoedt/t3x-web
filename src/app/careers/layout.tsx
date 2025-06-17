import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | T3X - Technology Solutions',
  description: 'Join the T3X team and build your career in technology. Explore job opportunities in web development, design, system architecture and more in Sri Lanka.',
  keywords: [
    'tech jobs', 
    'technology careers', 
    'web developer jobs', 
    'designer positions', 
    'Sri Lanka tech careers', 
    'IT jobs Colombo',
    'system architect positions',
    'software development careers'
  ],
  alternates: {
    canonical: 'https://t3x.lk/careers',
  },
  openGraph: {
    title: 'Careers at T3X Technology Solutions',
    description: 'Join the T3X team and build your career in technology. Explore job opportunities in Sri Lanka.',
    url: 'https://t3x.lk/careers',
    images: [
      {
        url: '/og-careers.jpg', // Create a careers/team image
        width: 1200,
        height: 630,
        alt: 'Careers at T3X'
      }
    ]
  },
  twitter: {
    title: 'Careers at T3X Technology Solutions',
    description: 'Join the T3X team and build your career in technology. Explore job opportunities in Sri Lanka.',
    images: ['/og-careers.jpg']
  }
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 