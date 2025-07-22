// Sitemap generator utility
export const generateSitemap = () => {
  const baseUrl = 'https://www.safesolutioninternational.org';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.9', changefreq: 'monthly' },
    { url: '/service', priority: '0.9', changefreq: 'weekly' },
    { url: '/projects', priority: '0.8', changefreq: 'weekly' },
    { url: '/blog', priority: '0.7', changefreq: 'daily' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Robots.txt content
export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.safesolutioninternational.org/sitemap.xml

# Disallow admin or private areas (if any)
# Disallow: /admin/
# Disallow: /private/

# Crawl delay (optional)
Crawl-delay: 1`;
};
