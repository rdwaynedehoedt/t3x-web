import React from 'react';
import { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceGrid from '@/components/services/ServiceGrid';
import Benefits from '@/components/services/Benefits';
import FAQ from '@/components/services/FAQ';
import CTA from '@/components/services/CTA';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Services | T3X - Technology Solutions',
  description: 'Explore our range of technology and digital transformation services designed to help your business grow - including web design & development, ecommerce, SEO, digital marketing, and IT infrastructure.',
  keywords: [
    'web design',
    'web development',
    'ecommerce development',
    'domain registration',
    'web hosting',
    'digital marketing',
    'SEO',
    'search engine optimization',
    'IT infrastructure',
    'IT services Sri Lanka',
    'digital transformation'
  ],
  alternates: {
    canonical: 'https://t3x.lk/services',
  },
  openGraph: {
    title: 'Professional Technology Services by T3X',
    description: 'Explore our range of technology and digital transformation services designed to help your business grow.',
    url: 'https://t3x.lk/services',
    images: [
      {
        url: '/og-services.jpg', // Create an image showcasing your services
        width: 1200,
        height: 630,
        alt: 'T3X Technology Services'
      }
    ]
  },
  twitter: {
    title: 'Professional Technology Services by T3X',
    description: 'Explore our range of technology and digital transformation services designed to help your business grow.',
    images: ['/og-services.jpg']
  }
};

export default function ServicesPage() {
  return (
    <div className="flex-1">
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Service",
                "position": 1,
                "name": "Web Design & Development",
                "description": "Custom responsive sites, optimized for performance and SEO.",
                "provider": {
                  "@type": "Organization",
                  "name": "T3X Technology Solutions"
                },
                "serviceType": "Web Development",
                "offers": {
                  "@type": "Offer",
                  "price": "Custom pricing based on requirements",
                  "priceCurrency": "LKR"
                }
              },
              {
                "@type": "Service",
                "position": 2,
                "name": "Ecommerce and Shopping",
                "description": "Complete online store solutions to sell products and services.",
                "provider": {
                  "@type": "Organization",
                  "name": "T3X Technology Solutions"
                },
                "serviceType": "Ecommerce Development",
                "offers": {
                  "@type": "Offer",
                  "price": "Custom pricing based on requirements",
                  "priceCurrency": "LKR"
                }
              },
              {
                "@type": "Service",
                "position": 3,
                "name": "Domain Registration & Hosting",
                "description": "Secure your online identity with reliable domain and hosting services.",
                "provider": {
                  "@type": "Organization",
                  "name": "T3X Technology Solutions"
                },
                "serviceType": "Web Hosting",
                "offers": {
                  "@type": "Offer",
                  "price": "Custom pricing based on requirements",
                  "priceCurrency": "LKR"
                }
              },
              {
                "@type": "Service",
                "position": 4,
                "name": "Digital Marketing",
                "description": "Comprehensive strategies to grow your online presence and reach.",
                "provider": {
                  "@type": "Organization",
                  "name": "T3X Technology Solutions"
                },
                "serviceType": "Marketing",
                "offers": {
                  "@type": "Offer",
                  "price": "Custom pricing based on requirements",
                  "priceCurrency": "LKR"
                }
              },
              {
                "@type": "Service",
                "position": 5,
                "name": "Search Engine Optimization",
                "description": "Improve visibility and rankings to drive organic traffic to your site.",
                "provider": {
                  "@type": "Organization",
                  "name": "T3X Technology Solutions"
                },
                "serviceType": "SEO",
                "offers": {
                  "@type": "Offer",
                  "price": "Custom pricing based on requirements",
                  "priceCurrency": "LKR"
                }
              },
              {
                "@type": "Service",
                "position": 6,
                "name": "IT Infrastructure Services",
                "description": "Robust technology solutions to support and scale your business operations.",
                "provider": {
                  "@type": "Organization",
                  "name": "T3X Technology Solutions"
                },
                "serviceType": "IT Services",
                "offers": {
                  "@type": "Offer",
                  "price": "Custom pricing based on requirements",
                  "priceCurrency": "LKR"
                }
              }
            ]
          })
        }}
      />
      <ServicesHero />
      <ServiceGrid />
      <Benefits />
      <FAQ />
      <CTA />
    </div>
  );
} 