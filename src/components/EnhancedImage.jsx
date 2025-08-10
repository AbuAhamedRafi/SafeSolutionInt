import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Enhanced Image Component with fallback support and loading states
 * @param {Object} props - Component props
 * @param {string} props.src - Primary image source URL
 * @param {string} props.fallbackSrc - Fallback image source URL
 * @param {string} props.alt - Alt text for the image
 * @param {string} props.className - CSS classes for styling
 * @param {boolean} props.lazy - Enable lazy loading (default: true)
 * @param {Function} props.onLoad - Callback when image loads successfully
 * @param {Function} props.onError - Callback when image fails to load
 */
const EnhancedImage = ({ 
  src, 
  fallbackSrc, 
  alt, 
  className = '', 
  lazy = true,
  onLoad,
  onError,
  ...props 
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = (e) => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(true);
      setIsLoading(true);
    } else {
      setIsLoading(false);
      if (onError) onError(e);
    }
  };

  const handleLoad = (e) => {
    setIsLoading(false);
    if (onLoad) onLoad(e);
  };

  return (
    <div className="relative overflow-hidden">
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}>
          <div className="flex items-center justify-center h-full">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleError}
        onLoad={handleLoad}
        loading={lazy ? 'lazy' : 'eager'}
        {...props}
      />
    </div>
  );
};

// PropTypes validation
EnhancedImage.propTypes = {
  src: PropTypes.string.isRequired,
  fallbackSrc: PropTypes.string,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  lazy: PropTypes.bool,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
};

// Default props
EnhancedImage.defaultProps = {
  fallbackSrc: null,
  className: '',
  lazy: true,
  onLoad: null,
  onError: null,
};

export default EnhancedImage;
