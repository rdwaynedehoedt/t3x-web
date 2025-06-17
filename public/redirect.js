// This script handles client-side routing for Next.js static export
(function() {
  // Get the current path without query parameters
  const path = window.location.pathname;
  
  // If we're on the root path or an HTML file, do nothing
  if (path === '/' || path.endsWith('.html')) {
    return;
  }
  
  // Remove trailing slash if present
  const normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
  
  // Get the last segment of the path
  const segments = normalizedPath.split('/');
  const lastSegment = segments[segments.length - 1];
  
  // Check if we should redirect to an HTML file
  const pagesToCheck = [
    'services',
    'about',
    'portfolio',
    'contact',
    'careers'
  ];
  
  if (pagesToCheck.includes(lastSegment)) {
    // Redirect to the HTML version
    window.location.href = `/${lastSegment}.html${window.location.search}`;
  } else if (segments.length > 1 && !path.includes('.')) {
    // For deeper routes, redirect to 404
    window.location.href = '/404.html';
  }
})(); 