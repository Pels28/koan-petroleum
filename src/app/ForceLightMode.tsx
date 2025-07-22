// Add this to your layout.tsx
import { useEffect } from 'react';

function ForceLightMode() {
  useEffect(() => {
    // Remove any dark classes
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    
    // Disable dark mode detection
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    };
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return null;
}

export default ForceLightMode;

// Then add <ForceLightMode /> inside your Provider component