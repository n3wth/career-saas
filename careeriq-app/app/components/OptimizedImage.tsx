/**
 * OptimizedImage Component - Cycle 12 Performance Optimization
 * 
 * Features:
 * - Responsive images with Next.js Image component
 * - Blur placeholder support for smooth loading
 * - Priority loading for LCP elements
 * - Automatic WebP/AVIF format selection
 * - Responsive sizing for different breakpoints
 */

import Image from 'next/image';
import { CSSProperties } from 'react';

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  blurDataURL?: string;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
  fill?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'scale-down';
  objectPosition?: string;
}

/**
 * Optimized image wrapper with performance-focused defaults
 * 
 * @example
 * <OptimizedImage
 *   src="/images/hero.jpg"
 *   alt="Hero"
 *   width={1920}
 *   height={1080}
 *   priority={true}
 *   blurDataURL="data:image/jpeg;base64,..."
 *   sizes="(max-width: 640px) 100vw, (max-width: 1200px) 80vw, 100vw"
 * />
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  blurDataURL,
  className,
  style,
  sizes,
  fill = false,
  objectFit = 'cover',
  objectPosition = 'center',
}: OptimizedImageProps) {
  // Default responsive sizes for different breakpoints
  const defaultSizes =
    sizes ||
    `(max-width: 640px) 100vw,
     (max-width: 1024px) 90vw,
     (max-width: 1280px) 80vw,
     1200px`;

  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      priority={priority}
      placeholder={blurDataURL ? 'blur' : 'empty'}
      blurDataURL={blurDataURL}
      className={className}
      style={{
        objectFit: fill ? objectFit : undefined,
        objectPosition: fill ? objectPosition : undefined,
        ...style,
      }}
      sizes={defaultSizes}
      quality={85} // Balance between quality and file size
      loading={priority ? 'eager' : 'lazy'}
    />
  );
}

export default OptimizedImage;
