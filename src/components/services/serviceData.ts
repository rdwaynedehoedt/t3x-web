// Service data type - icon will be added in the components
export interface ServiceDataType {
  id: string;
  title: string;
  description: string;
  details: {
    fullDescription: string;
    offerings: string[];
    technologies?: string[];
    process?: string[];
    supportPlans?: string[];
  };
}

export const serviceData: ServiceDataType[] = [
  {
    id: 'web-design-dev',
    title: 'Web Design & Development',
    description: 'Custom responsive sites, optimized for performance and SEO.',
    details: {
      fullDescription: 'We design and develop custom websites that are not only visually stunning but also technically excellent. Our sites are built with performance, accessibility, and SEO in mind from the ground up.',
      offerings: [
        'Custom UI/UX design tailored to your brand',
        'Responsive layouts that work beautifully on all devices',
        'Performance optimized code and assets',
        'SEO-friendly structure and metadata',
        'Content management system integration'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      process: [
        'Discovery and planning',
        'Wireframing and design concepts',
        'Development and content integration',
        'Testing and optimization',
        'Launch and post-launch support'
      ]
    }
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce and Shopping',
    description: 'Complete online store solutions to sell products and services.',
    details: {
      fullDescription: 'We build powerful ecommerce platforms that drive sales and provide seamless shopping experiences for your customers.',
      offerings: [
        'Custom online store development',
        'Product catalog and inventory management',
        'Secure payment gateway integration',
        'Mobile-optimized shopping experience',
        'Order management and fulfillment systems',
        'Customer account management'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Next.js Commerce', 'Headless CMS'],
      process: [
        'Store requirements analysis',
        'Platform selection and customization',
        'Product setup and organization',
        'Payment and shipping integration',
        'Testing and quality assurance',
        'Launch and sales optimization'
      ]
    }
  },
  {
    id: 'domain-hosting',
    title: 'Domain Registration & Hosting',
    description: 'Secure your online identity with reliable domain and hosting services.',
    details: {
      fullDescription: 'We provide comprehensive domain registration and web hosting solutions to ensure your website has a solid foundation with maximum uptime and performance.',
      offerings: [
        'Domain name registration and management',
        'Secure and reliable web hosting',
        'SSL certificate installation',
        'Email hosting and configuration',
        'DNS management',
        'Website migration services'
      ],
      technologies: ['AWS', 'Netlify', 'Vercel', 'Digital Ocean', 'Cloudflare', 'cPanel'],
      process: [
        'Domain availability check and recommendations',
        'Hosting requirements analysis',
        'Server configuration and optimization',
        'Security implementation',
        'Performance monitoring',
        'Regular maintenance and updates'
      ]
    }
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Comprehensive strategies to grow your online presence and reach.',
    details: {
      fullDescription: 'We create data-driven digital marketing campaigns that connect with your target audience and drive measurable results for your business.',
      offerings: [
        'Social media marketing and management',
        'Email marketing campaigns',
        'Content marketing strategy',
        'PPC advertising campaigns',
        'Analytics and performance reporting',
        'Conversion rate optimization'
      ],
      technologies: ['Google Analytics', 'Meta Business Suite', 'Mailchimp', 'Google Ads', 'HubSpot', 'SEMrush'],
      process: [
        'Market research and audience analysis',
        'Strategy development',
        'Campaign creation and implementation',
        'A/B testing and optimization',
        'Performance tracking and reporting',
        'Continuous improvement'
      ]
    }
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    description: 'Improve visibility and rankings to drive organic traffic to your site.',
    details: {
      fullDescription: 'Our SEO services are designed to improve your website\'s visibility in search engines, drive more qualified traffic, and increase conversions.',
      offerings: [
        'Comprehensive SEO audits',
        'Keyword research and strategy',
        'On-page SEO optimization',
        'Technical SEO improvements',
        'Content optimization',
        'Link building and off-page SEO',
        'Local SEO for businesses'
      ],
      technologies: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Moz', 'Screaming Frog', 'Google Analytics'],
      process: [
        'Initial website audit and analysis',
        'Competitor research',
        'SEO strategy development',
        'Implementation of on-page and technical SEO',
        'Content creation and optimization',
        'Monthly reporting and strategy refinement'
      ]
    }
  },
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure Services',
    description: 'Robust technology solutions to support and scale your business operations.',
    details: {
      fullDescription: 'We design, implement, and maintain IT infrastructure solutions that provide the foundation for your business technology needs, ensuring reliability, security, and scalability.',
      offerings: [
        'Network design and implementation',
        'Cloud infrastructure setup and management',
        'Server configuration and maintenance',
        'Data backup and disaster recovery',
        'IT security solutions',
        'Remote work infrastructure',
        'Hardware and software procurement'
      ],
      technologies: ['Microsoft Azure', 'AWS', 'Google Cloud', 'VMware', 'Cisco', 'Microsoft 365', 'Linux/Windows Server'],
      process: [
        'IT needs assessment',
        'Infrastructure planning and design',
        'Implementation and configuration',
        'Testing and validation',
        'Staff training and documentation',
        'Ongoing support and maintenance'
      ],
      supportPlans: [
        'Essential: Basic monitoring and security updates',
        'Standard: Regular maintenance plus limited support hours',
        'Premium: 24/7 support with dedicated team and proactive monitoring'
      ]
    }
  }
]; 