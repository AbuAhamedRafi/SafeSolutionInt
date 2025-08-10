// Simple Image Error Handler for existing components

export const handleImageError = (e, fallbackUrl) => {
  if (fallbackUrl && e.target.src !== fallbackUrl) {
    e.target.src = fallbackUrl;
  } else {
    // If no fallback or fallback also failed, show a colored placeholder
    const rect = e.target.getBoundingClientRect();
    const width = rect.width || 800;
    const height = rect.height || 400;
    const placeholderUrl = `https://dummyimage.com/${Math.floor(width)}x${Math.floor(height)}/e5e7eb/6b7280.png&text=Image+Not+Available`;
    e.target.src = placeholderUrl;
  }
};

// Generate reliable fallback images
export const generateFallback = (text, color = 'e5e7eb', textColor = '6b7280', width = 800, height = 400) => {
  return `https://dummyimage.com/${width}x${height}/${color}/${textColor}.png&text=${encodeURIComponent(text)}`;
};

// Default fallback images for different categories
export const defaultFallbacks = {
  business: generateFallback('Business Solutions', '1e40af', 'ffffff'),
  technology: generateFallback('IT Solutions', '059669', 'ffffff'),
  construction: generateFallback('Construction', 'dc2626', 'ffffff'),
  logistics: generateFallback('Transportation', '7c3aed', 'ffffff'),
  consulting: generateFallback('Consulting', 'ea580c', 'ffffff'),
  project: generateFallback('Project', '8b5cf6', 'ffffff'),
  service: generateFallback('Service', 'ef4444', 'ffffff'),
  general: generateFallback('Safe Solution International', 'e5e7eb', '6b7280')
};
