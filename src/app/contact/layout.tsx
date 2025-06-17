import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | T3X - Technology Solutions',
  description: 'Get in touch with T3X for your technology needs. We provide website development, business systems, store solutions, and technical support services in Sri Lanka.',
  keywords: [
    'contact T3X', 
    'technology services contact', 
    'website development quote', 
    'business system consultation', 
    'Sri Lanka tech company', 
    'IT support services',
    'tech consultation'
  ],
  alternates: {
    canonical: 'https://t3x.lk/contact',
  },
  openGraph: {
    title: 'Contact T3X Technology Solutions',
    description: 'Get in touch with T3X for your technology needs. Located in Colombo, Sri Lanka.',
    url: 'https://t3x.lk/contact',
    images: [
      {
        url: '/og-contact.jpg', // Create a contact page image
        width: 1200,
        height: 630,
        alt: 'Contact T3X'
      }
    ]
  },
  twitter: {
    title: 'Contact T3X Technology Solutions',
    description: 'Get in touch with T3X for your technology needs. Located in Colombo, Sri Lanka.',
    images: ['/og-contact.jpg']
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 