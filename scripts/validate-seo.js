#!/usr/bin/env node

// SEO Build Validation Script
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const validateSEO = () => {
  console.log('🔍 Running SEO validation...\n');
  
  let errors = [];
  let warnings = [];
  
  // Check if essential SEO files exist
  const requiredFiles = [
    'public/robots.txt',
    'public/sitemap.xml',
    'public/manifest.json',
    'public/browserconfig.xml'
  ];
  
  requiredFiles.forEach(file => {
    if (!fs.existsSync(path.join(process.cwd(), file))) {
      errors.push(`Missing required SEO file: ${file}`);
    } else {
      console.log(`✅ Found: ${file}`);
    }
  });
  
  // Check robots.txt content
  try {
    const robotsContent = fs.readFileSync(path.join(process.cwd(), 'public/robots.txt'), 'utf8');
    if (!robotsContent.includes('Sitemap:')) {
      warnings.push('robots.txt should include a sitemap reference');
    }
    if (!robotsContent.includes('User-agent:')) {
      errors.push('robots.txt should include User-agent directive');
    }
  } catch (e) {
    errors.push('Could not read robots.txt file');
  }
  
  // Check sitemap.xml content
  try {
    const sitemapContent = fs.readFileSync(path.join(process.cwd(), 'public/sitemap.xml'), 'utf8');
    if (!sitemapContent.includes('<urlset')) {
      errors.push('sitemap.xml should be a valid XML sitemap');
    }
    const urlCount = (sitemapContent.match(/<url>/g) || []).length;
    console.log(`📄 Sitemap contains ${urlCount} URLs`);
  } catch (e) {
    errors.push('Could not read sitemap.xml file');
  }
  
  // Check manifest.json content
  try {
    const manifestContent = fs.readFileSync(path.join(process.cwd(), 'public/manifest.json'), 'utf8');
    const manifest = JSON.parse(manifestContent);
    
    const requiredManifestFields = ['name', 'short_name', 'start_url', 'display', 'theme_color', 'background_color'];
    requiredManifestFields.forEach(field => {
      if (!manifest[field]) {
        warnings.push(`manifest.json missing recommended field: ${field}`);
      }
    });
    
    if (!manifest.icons || manifest.icons.length === 0) {
      warnings.push('manifest.json should include icons');
    }
    
  } catch (e) {
    errors.push('Could not read or parse manifest.json file');
  }
  
  // Check index.html for essential meta tags
  try {
    const indexContent = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');
    
    const essentialMeta = [
      'meta name="description"',
      'meta name="keywords"', 
      'meta property="og:title"',
      'meta property="og:description"',
      'meta property="og:image"',
      'meta name="twitter:card"',
      'link rel="canonical"'
    ];
    
    essentialMeta.forEach(meta => {
      if (!indexContent.includes(meta)) {
        warnings.push(`index.html missing: ${meta}`);
      }
    });
    
    // Check for duplicate meta tags
    const titleTags = (indexContent.match(/<title>/g) || []).length;
    if (titleTags > 1) {
      errors.push('Multiple <title> tags found in index.html');
    }
    
  } catch (e) {
    errors.push('Could not read index.html file');
  }
  
  // Check package.json for SEO-related dependencies
  try {
    const packageContent = fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8');
    const packageJson = JSON.parse(packageContent);
    
    // Check if we have SEO components
    const seoFiles = [
      'src/components/SEO.jsx',
      'src/components/StructuredData.jsx'
    ];
    
    let hasSeoComponents = true;
    seoFiles.forEach(file => {
      if (!fs.existsSync(path.join(process.cwd(), file))) {
        hasSeoComponents = false;
      }
    });
    
    if (!hasSeoComponents) {
      warnings.push('Missing SEO components for dynamic meta tag management');
    }
    
  } catch (e) {
    warnings.push('Could not read package.json file');
  }
  
  console.log('\n📊 SEO Validation Results:');
  console.log('========================');
  
  if (errors.length === 0 && warnings.length === 0) {
    console.log('🎉 All SEO checks passed!');
  } else {
    if (errors.length > 0) {
      console.log('\n❌ Errors:');
      errors.forEach(error => console.log(`  - ${error}`));
    }
    
    if (warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      warnings.forEach(warning => console.log(`  - ${warning}`));
    }
  }
  
  console.log(`\n📈 SEO Score: ${Math.max(0, 100 - (errors.length * 20) - (warnings.length * 5))}/100`);
  
  // Return exit code based on errors
  return errors.length === 0 ? 0 : 1;
};

// Run validation if script is called directly
if (import.meta.url.endsWith(process.argv[1].replace(/\\/g, '/'))) {
  const exitCode = validateSEO();
  process.exit(exitCode);
}

export { validateSEO };
