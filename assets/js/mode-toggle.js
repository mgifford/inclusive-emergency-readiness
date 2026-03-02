// Mode Toggle Script
// Handles high contrast, low data, and text size adjustments
// Progressive enhancement - works without this script

(function() {
  'use strict';
  
  // Get saved preferences from localStorage
  const getPreference = (key) => {
    try {
      return localStorage.getItem(key) === 'true';
    } catch (e) {
      return false;
    }
  };
  
  const setPreference = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      // localStorage not available, preferences won't persist
    }
  };
  
  // Initialize on page load
  document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    
    // Apply saved preferences
    if (getPreference('high-contrast')) {
      body.classList.add('high-contrast');
      updateButtonState('high-contrast-toggle', true);
    }
    
    // Shared helper: enable or disable low-data mode
    function applyLowData(enable) {
      if (enable) {
        body.classList.add('low-data');
        updateButtonState('low-data-toggle', true);
      } else {
        body.classList.remove('low-data');
        updateButtonState('low-data-toggle', false);
      }
    }
    
    // Auto-enable low-data mode when browser/OS signals reduced-data preference.
    // Users can still override this manually via the toggle button.
    const prefersReducedData = window.matchMedia && window.matchMedia('(prefers-reduced-data: reduce)');
    if (prefersReducedData && prefersReducedData.matches) {
      applyLowData(true);
    } else if (getPreference('low-data')) {
      applyLowData(true);
    }
    
    // Keep in sync if the preference changes while the page is open
    if (prefersReducedData && prefersReducedData.addEventListener) {
      prefersReducedData.addEventListener('change', function(e) {
        if (e.matches) {
          applyLowData(true);
        } else if (!getPreference('low-data')) {
          applyLowData(false);
        }
      });
    }
    
    const savedTextSize = localStorage.getItem('text-size');
    if (savedTextSize) {
      document.documentElement.style.fontSize = savedTextSize;
    }
    
    // High Contrast Toggle
    const highContrastToggle = document.getElementById('high-contrast-toggle');
    if (highContrastToggle) {
      highContrastToggle.addEventListener('click', function() {
        body.classList.toggle('high-contrast');
        const isActive = body.classList.contains('high-contrast');
        setPreference('high-contrast', isActive);
        updateButtonState('high-contrast-toggle', isActive);
        announceChange(isActive ? 'High contrast mode enabled' : 'High contrast mode disabled');
      });
    }
    
    // Low Data Toggle
    const lowDataToggle = document.getElementById('low-data-toggle');
    if (lowDataToggle) {
      lowDataToggle.addEventListener('click', function() {
        body.classList.toggle('low-data');
        const isActive = body.classList.contains('low-data');
        setPreference('low-data', isActive);
        updateButtonState('low-data-toggle', isActive);
        announceChange(isActive ? 'Low data mode enabled' : 'Low data mode disabled');
      });
    }
    
    // Text Size Controls
    const textSizeIncrease = document.getElementById('text-size-increase');
    const textSizeDecrease = document.getElementById('text-size-decrease');
    
    if (textSizeIncrease) {
      textSizeIncrease.addEventListener('click', function() {
        adjustTextSize(1);
      });
    }
    
    if (textSizeDecrease) {
      textSizeDecrease.addEventListener('click', function() {
        adjustTextSize(-1);
      });
    }
    
    // Page-specific toggles (on disability pages)
    const toggleHighContrast = document.getElementById('toggle-high-contrast');
    if (toggleHighContrast) {
      toggleHighContrast.addEventListener('click', function(e) {
        e.preventDefault();
        if (highContrastToggle) {
          highContrastToggle.click();
        }
      });
    }
    
    const toggleLowData = document.getElementById('toggle-low-data');
    if (toggleLowData) {
      toggleLowData.addEventListener('click', function(e) {
        e.preventDefault();
        if (lowDataToggle) {
          lowDataToggle.click();
        }
      });
    }
  });
  
  // Update button visual state
  function updateButtonState(buttonId, isActive) {
    const button = document.getElementById(buttonId);
    if (button) {
      if (isActive) {
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');
      } else {
        button.classList.remove('active');
        button.setAttribute('aria-pressed', 'false');
      }
    }
  }
  
  // Adjust text size
  function adjustTextSize(direction) {
    const html = document.documentElement;
    const currentSize = parseFloat(window.getComputedStyle(html).fontSize);
    const newSize = currentSize + (direction * 2);
    
    // Limit text size between 14px and 26px
    if (newSize >= 14 && newSize <= 26) {
      html.style.fontSize = newSize + 'px';
      setPreference('text-size', newSize + 'px');
      announceChange('Text size adjusted to ' + newSize + ' pixels');
    }
  }
  
  // Announce changes to screen readers
  function announceChange(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }
  
  // Keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Alt + C = Toggle high contrast
    if ((e.ctrlKey || e.metaKey) && e.altKey && e.key === 'c') {
      e.preventDefault();
      const toggle = document.getElementById('high-contrast-toggle');
      if (toggle) toggle.click();
    }
    
    // Ctrl/Cmd + Alt + L = Toggle low data mode
    if ((e.ctrlKey || e.metaKey) && e.altKey && e.key === 'l') {
      e.preventDefault();
      const toggle = document.getElementById('low-data-toggle');
      if (toggle) toggle.click();
    }
    
    // Ctrl/Cmd + Plus = Increase text size
    if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '=')) {
      e.preventDefault();
      adjustTextSize(1);
    }
    
    // Ctrl/Cmd + Minus = Decrease text size
    if ((e.ctrlKey || e.metaKey) && e.key === '-') {
      e.preventDefault();
      adjustTextSize(-1);
    }
  });
  
})();
