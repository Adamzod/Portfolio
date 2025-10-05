// Glass effect support detection and fallback
(function() {
  'use strict';
  
  // Check if backdrop-filter is supported
  function supportsBackdropFilter() {
    const testEl = document.createElement('div');
    const style = testEl.style;
    
    // Test for backdrop-filter support
    if ('backdropFilter' in style || '-webkit-backdrop-filter' in style) {
      return true;
    }
    
    // Test using CSS.supports if available
    if (typeof CSS !== 'undefined' && CSS.supports) {
      return CSS.supports('backdrop-filter', 'blur(10px)') || 
             CSS.supports('-webkit-backdrop-filter', 'blur(10px)');
    }
    
    return false;
  }
  
  // Apply fallback styles for unsupported browsers
  function applyFallbackStyles() {
    const glassElements = document.querySelectorAll('.glass-hero, .glass-card, .glass-modal');
    
    glassElements.forEach(element => {
      // Add a class to indicate fallback mode
      element.classList.add('glass-fallback');
      
      // Apply stronger background for better visibility
      if (element.classList.contains('glass-hero')) {
        element.style.background = 'rgba(20, 18, 40, 0.9)';
      } else {
        element.style.background = 'rgba(20, 18, 40, 0.95)';
      }
      
      // Add a subtle border for definition
      element.style.border = '1px solid rgba(255, 255, 255, 0.2)';
    });
  }
  
  // Initialize when DOM is ready
  function init() {
    if (!supportsBackdropFilter()) {
      console.log('Backdrop-filter not supported, applying fallback styles');
      applyFallbackStyles();
    } else {
      console.log('Backdrop-filter is supported');
    }
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
