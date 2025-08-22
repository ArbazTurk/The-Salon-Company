// app/components/ScriptLoader.js
"use client";

import { useEffect } from 'react';

const ScriptLoader = ({ scripts, onAllScriptsLoaded }) => {
  useEffect(() => {
    let loadedCount = 0;

    const loadScript = (index) => {
      if (index >= scripts.length) {
        // All scripts have been loaded
        if (onAllScriptsLoaded) {
          onAllScriptsLoaded();
        }
        return;
      }

      const src = scripts[index];
      
      // Check if script already exists to avoid duplicates
      if (document.querySelector(`script[src="${src}"]`)) {
        console.log(`Script ${src} is already loaded.`);
        loadScript(index + 1); // Load the next script
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = false; // Ensure scripts load in order

      script.onload = () => {
        console.log(`SUCCESS: Loaded script ${src}`);
        loadedCount++;
        loadScript(index + 1); // Load the next script in the array
      };

      script.onerror = () => {
        console.error(`ERROR: Failed to load script ${src}`);
        loadScript(index + 1); // Try to load the next one anyway
      };

      document.body.appendChild(script);
    };

    loadScript(0);

    // Cleanup function to remove scripts when component unmounts
    return () => {
      scripts.forEach(src => {
        const scriptElement = document.querySelector(`script[src="${src}"]`);
        if (scriptElement) {
          // In a real SPA, you might remove them, but for legacy scripts,
          // it's often safer to leave them. We'll leave them for now.
        }
      });
    };
  }, [scripts, onAllScriptsLoaded]);

  return null; // This component doesn't render anything
};

export default ScriptLoader;