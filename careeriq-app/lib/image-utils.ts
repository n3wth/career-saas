/**
 * Image Optimization Utilities - Cycle 12
 * 
 * Utilities for generating blur placeholders and managing image sizes
 */

// Precomputed blur data URLs for common images
// Format: data:image/jpeg;base64,...
export const BLUR_PLACEHOLDERS = {
  hero: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8VAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA//2Q==',
  default: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8VAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA//2Q==',
};

// Responsive image size configurations
export const IMAGE_SIZES = {
  // Hero image breakpoints
  hero: {
    desktop: { width: 1920, height: 1080 },
    tablet: { width: 768, height: 576 },
    mobile: { width: 375, height: 300 },
  },
  // Thumbnail breakpoints
  thumbnail: {
    large: { width: 400, height: 300 },
    medium: { width: 200, height: 150 },
    small: { width: 100, height: 75 },
  },
  // Section images
  section: {
    desktop: { width: 1200, height: 600 },
    tablet: { width: 768, height: 384 },
    mobile: { width: 375, height: 188 },
  },
};

/**
 * Generate responsive sizes attribute for Next.js Image
 * 
 * @param type - Image type (hero, thumbnail, section)
 * @returns CSS sizes string for responsive images
 */
export function getResponsiveSizes(
  type: 'hero' | 'thumbnail' | 'section' = 'section'
): string {
  const sizeConfigs = {
    hero: '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 100vw',
    thumbnail: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    section: '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 100vw',
  };

  return sizeConfigs[type];
}

/**
 * Get blur placeholder for an image type
 * 
 * @param type - Image type
 * @returns Base64 encoded blur placeholder
 */
export function getBlurPlaceholder(type: string): string {
  return BLUR_PLACEHOLDERS[type as keyof typeof BLUR_PLACEHOLDERS] || BLUR_PLACEHOLDERS.default;
}

/**
 * Generate srcset for responsive images
 * 
 * @param basePath - Base path without extension
 * @param sizes - Array of sizes to generate
 * @param format - Image format (webp, jpg, png)
 * @returns srcset string
 */
export function generateSrcSet(
  basePath: string,
  sizes: number[] = [375, 640, 768, 1024, 1200, 1920],
  format: 'webp' | 'jpg' | 'png' = 'webp'
): string {
  return sizes
    .map((size) => `${basePath}-${size}.${format} ${size}w`)
    .join(', ');
}

/**
 * Create picture element with responsive images and WebP support
 * Used for static HTML sites (Agentic Dev)
 * 
 * @param imagePath - Path to image (without extension)
 * @param alt - Alt text
 * @param width - Image width
 * @param height - Image height
 * @param loading - Lazy or eager
 * @returns HTML string
 */
export function createPictureElement(
  imagePath: string,
  alt: string,
  width: number,
  height: number,
  loading: 'lazy' | 'eager' = 'lazy'
): string {
  return `
    <picture>
      <source 
        type="image/webp"
        srcset="${generateSrcSet(imagePath, [375, 640, 768, 1024, 1200, 1920], 'webp')}"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 100vw"
      >
      <source 
        type="image/jpeg"
        srcset="${generateSrcSet(imagePath, [375, 640, 768, 1024, 1200, 1920], 'jpg')}"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 100vw"
      >
      <img 
        src="${imagePath}-1200.jpg"
        alt="${alt}"
        width="${width}"
        height="${height}"
        loading="${loading}"
        decoding="async"
      >
    </picture>
  `.trim();
}

/**
 * Performance optimization constants
 */
export const PERFORMANCE_TARGETS = {
  lcpTarget: 2500, // ms
  fcpTarget: 1800, // ms
  clsTarget: 0.1,
  tbtTarget: 200, // ms
  imageBudget: 500 * 1024, // 500KB total for images
  jsBudget: 300 * 1024, // 300KB JavaScript
  cssBudget: 150 * 1024, // 150KB CSS
};

/**
 * Image optimization checklist
 */
export const OPTIMIZATION_CHECKLIST = {
  imageFormats: ['WebP', 'AVIF support'],
  lazyLoading: ['Intersection Observer', 'native loading="lazy"'],
  preloading: ['Hero image preload', 'LCP element prioritization'],
  blurPlaceholders: ['Blur data URLs', 'Smooth loading transition'],
  responsiveness: ['Device-specific sizes', 'Proper srcset'],
  caching: ['1-year cache for hashed assets', 'Immutable header'],
};

export default {
  BLUR_PLACEHOLDERS,
  IMAGE_SIZES,
  PERFORMANCE_TARGETS,
  OPTIMIZATION_CHECKLIST,
  getResponsiveSizes,
  getBlurPlaceholder,
  generateSrcSet,
  createPictureElement,
};
