import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | T3X - Technology Solutions',
  description: 'Explore our portfolio of successful technology projects, including websites, business systems, and digital solutions developed for clients in Sri Lanka and internationally.',
  keywords: [
    'tech portfolio', 
    'website projects', 
    'business system examples', 
    'digital solution case studies', 
    'Sri Lanka tech projects', 
    'web development portfolio',
    'technology case studies'
  ],
  alternates: {
    canonical: 'https://t3x.lk/portfolio',
  },
  openGraph: {
    title: 'T3X Technology Solutions Portfolio',
    description: 'Explore our portfolio of successful technology projects and digital solutions.',
    url: 'https://t3x.lk/portfolio',
    images: [
      {
        url: '/og-portfolio.jpg', // Create a portfolio showcase image
        width: 1200,
        height: 630,
        alt: 'T3X Portfolio'
      }
    ]
  },
  twitter: {
    title: 'T3X Technology Solutions Portfolio',
    description: 'Explore our portfolio of successful technology projects and digital solutions.',
    images: ['/og-portfolio.jpg']
  }
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 