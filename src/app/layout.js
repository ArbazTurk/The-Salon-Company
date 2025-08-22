// app/layout.js - FINAL, SIMPLIFIED VERSION
"use client";
import "../../public/css/colors/scheme-01.css";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/css/plugins.css";
import "../../public/css/swiper.css";
// import "../../public/css/style.css";
import "../../public/css/coloring.css";


import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <title>The Salon Company</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="The Salon Company Website" />
        <link
          rel="icon"
          href="/images/icon.webp"
          type="image/gif"
          sizes="16x16"
        />
        <link href="/css/style.css" rel="stylesheet" type="text/css" />
      </head>

      <body>
        <div id="wrapper">{children}</div>
        {/* 
          Load scripts normally. They will re-run on every full page reload.
          The `onLoad` and `useEffect` are no longer needed here because we are forcing reloads.
        */}
        {/* <Script src="/js/plugins.js" strategy="lazyOnload" />
        <Script src="/js/designesia.js" strategy="lazyOnload" />
        <Script src="/js/custom-marquee.js" strategy="lazyOnload" />
        <Script src="/js/swiper.js" strategy="lazyOnload" /> */}
        {/* Load jQuery (from plugins.js) first as other scripts depend on it */}
        <Script src="/js/plugins.js" strategy="afterInteractive" />

        {/* Load other scripts that depend on jQuery */}
        <Script src="/js/designesia.js" strategy="afterInteractive" />
        <Script src="/js/custom-marquee.js" strategy="afterInteractive" />
        <Script src="/js/swiper.js" strategy="afterInteractive" />
        {/* custom-swiper-2.js is likely for a specific page, better to handle it there */}
      </body>
    </html>
  );
}

// // app/layout.js - REVISED AGAIN
// "use client";

// import "./globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../public/css/plugins.css";
// import "../../public/css/swiper.css";
// // import "../../public/css/style.css";
// import "../../public/css/coloring.css";
// import "../../public/css/colors/scheme-01.css";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import ScriptLoader from "./components/ScriptLoader"; // Adjust path if needed

// export default function RootLayout({ children }) {
//   const pathname = usePathname();
//   const [scriptsLoaded, setScriptsLoaded] = useState(false);

//   // This effect re-runs the init function on every page change
//   useEffect(() => {
//     // Only run this if the initial scripts have been loaded
//     if (scriptsLoaded && typeof window.initDesignesia === "function") {
//       console.log(`Route changed to: ${pathname}. Re-initializing scripts.`);
//       try {
//         // Use a timeout to let React finish rendering the new page's DOM
//         setTimeout(() => {
//           window.initDesignesia();
//         }, 500);
//       } catch (error) {
//         console.error("Error re-initializing Designesia scripts:", error);
//       }
//     }
//   }, [pathname, scriptsLoaded]);

//   return (
//     <html lang="en" data-scroll-behavior="smooth">
//       <head>
//         <title>The Salon Company</title>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="description" content="The Salon Company Website" />
//         <link rel="icon" href="/images/icon.webp" type="image/gif" sizes="16x16" />
//         <link href="/css/style.css" rel="stylesheet" type="text/css" />
//       </head>

//       <body>
//         <div id="wrapper">{children}</div>

//         <ScriptLoader
//           scripts={[
//             "/js/plugins.js",
//             "/js/designesia.js",
//             "/js/custom-marquee.js",
//             "/js/swiper.js",
//           ]}
//           onAllScriptsLoaded={() => {
//             console.log("All scripts loaded for the first time.");
//             setScriptsLoaded(true);
//           }}
//         />
//       </body>
//     </html>
//   );
// }

// // app/layout.js - FINAL REVISED VERSION
// "use client";

// import "./globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../public/css/plugins.css";
// import "../../public/css/swiper.css";
// // import "../../public/css/style.css";
// import "../../public/css/coloring.css";
// import "../../public/css/colors/scheme-01.css";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import Script from "next/script";

// export default function RootLayout({ children }) {
//   const pathname = usePathname();
//   // State to track if the main initialization has happened
//   const [isInitialized, setIsInitialized] = useState(false);

//   // This effect runs only when the pathname changes (i.e., you navigate to a new page)
//   useEffect(() => {
//     // We only want to re-initialize scripts on route changes, not on the very first load.
//     // The onLoad prop of the Script component will handle the first load.
//     if (isInitialized) {
//       if (typeof window.initDesignesia === "function") {
//         console.log("Re-initializing scripts for new page:", pathname);
//         // A small delay helps ensure React has updated the DOM for the new page
//         setTimeout(() => {
//           window.initDesignesia();
//         }, 100);
//       }
//     }
//   }, [pathname, isInitialized]); // Effect depends on pathname and initialization status

//   const handleScriptLoad = () => {
//     console.log("SUCCESS: All essential scripts have loaded.");
//     if (typeof window.initDesignesia === "function") {
//       console.log("Running initial script initialization...");
//       window.initDesignesia();
//       setIsInitialized(true); // Mark as initialized
//     }
//   };

//   return (
//     <html lang="en">
//       <head>
//         <title>The Salon Company</title>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="description" content="The Salon Company Website" />
//         <link rel="icon" href="/images/icon.webp" type="image/gif" sizes="16x16" />
//         <link href="/css/style.css" rel="stylesheet" type="text/css" />
//         {/* CSS links are fine here */}
//       </head>

//       <body>
//         <div id="wrapper">{children}</div>

//         {/* Load jQuery first since other scripts depend on it. */}
//         <Script src="/js/plugins.js" strategy="afterInteractive" />

//         {/*
//           This is the main script. We add the `onLoad` prop here.
//           This function will ONLY run once, after designesia.js is loaded.
//         */}
//         <Script
//           src="/js/designesia.js"
//           strategy="afterInteractive"
//           onLoad={handleScriptLoad}
//         />

//         {/* These scripts are likely also initialized by designesia.js, so they just need to be loaded */}
//         <Script src="/js/custom-marquee.js" strategy="afterInteractive" />
//         <Script src="/js/swiper.js" strategy="afterInteractive" />
//       </body>
//     </html>
//   );
// }

// // app/layout.js - REVISED
// "use client";

// import "./globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../public/css/plugins.css";
// import "../../public/css/swiper.css";
// // import "../../public/css/style.css";
// import "../../public/css/coloring.css";
// import "../../public/css/colors/scheme-01.css";

// import { useEffect } from "react";
// import { usePathname } from "next/navigation";
// import Script from "next/script";

// export default function RootLayout({ children }) {
//   const pathname = usePathname();

//   useEffect(() => {
//     // This function will be called whenever the page (pathname) changes.
//     const reinitializeScripts = () => {
//       // Check if the initialization function from designesia.js is available on the window
//       setTimeout(() => {
//         // if (typeof window.initDesignesia === "function") {
//           console.log("Re-initializing Designesia scripts for:", pathname);
//           // A small delay can help ensure the DOM is fully updated by React
//           window.initDesignesia();
//         // }
//       }, 1000);
//     };
//     console.log("Pathname changed to:", pathname);

//     reinitializeScripts();
//   }, [pathname]); // The effect depends on the pathname

//   return (
//     <html lang="en">
//       <head>
//         <title>The Salon Company</title>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="description" content="The Salon Company Website" />
//         <link
//           rel="icon"
//           href="/images/icon.webp"
//           type="image/gif"
//           sizes="16x16"
//         />
//         <link href="/css/style.css" rel="stylesheet" type="text/css" />
//       </head>

//       <body>
//         <div id="wrapper">{children}</div>

//         {/* Use the next/script component for better performance and control */}
//         {/* Load jQuery (from plugins.js) first as other scripts depend on it */}
//         <Script src="/js/plugins.js" strategy="afterInteractive" />

//         {/* Load other scripts that depend on jQuery */}
//         <Script src="/js/designesia.js" strategy="afterInteractive" />
//         <Script src="/js/custom-marquee.js" strategy="afterInteractive" />
//         <Script src="/js/swiper.js" strategy="afterInteractive" />
//         {/* custom-swiper-2.js is likely for a specific page, better to handle it there */}
//       </body>
//     </html>
//   );
// }

// "use client";
// import "./globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import "../../public/css/style.css";
// import "../../public/css/colors/scheme-01.css";
// import "../../public/css/coloring.css";
// import "../../public/css/plugins.css";
// import "../../public/css/swiper.css";
// import { useEffect } from "react";

// export default function RootLayout({ children }) {
//   // This useEffect will run only on the client, after the component has mounted

//   useEffect(() => {
//     // Ye function ek script load karega, aur jab wo load ho jayegi, to callback function chalayega
//     const loadScript = (src, callback) => {
//       // Check karo ki script pehle se to nahi hai
//       if (document.querySelector(`script[src="${src}"]`)) {
//         if (callback) callback();
//         return;
//       }

//       const script = document.createElement("script");
//       script.src = src;

//       // Ye function tab chalega jab script poori tarah load ho chuki hogi
//       script.onload = () => {
//         if (callback) callback();
//       };

//       // Error handling ke liye
//       script.onerror = () => {
//         console.error(`Error loading script: ${src}`);
//       };

//       document.body.appendChild(script);
//     };

//     // Scripts ko ek chain mein load karna. Isse guarantee hai ki order sahi rahega.
//     loadScript("/js/plugins.js", () => {
//       // Ye console log tabhi aayega jab plugins.js 100% load ho chuki hogi
//       console.log("SUCCESS: jQuery and plugins.js loaded.");

//       // Ab designesia.js ko load karo
//       loadScript("/js/designesia.js", () => {
//         console.log("SUCCESS: designesia.js loaded.");

//         // Ab marquee script load karo
//         loadScript("/js/custom-marquee.js", () => {
//           console.log("SUCCESS: custom-marquee.js loaded.");

//           // Ab swiper.js ko load karo
//           loadScript("/js/swiper.js", () => {
//             console.log("SUCCESS: swiper.js loaded.");
//           });
//         });
//       });
//     });
//   }, []);

//   return (
//     <html lang="en">
//       <head>
//         <title>The Salon Company</title>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="description" content="The Salon Company Website" />
//         <link
//           rel="icon"
//           href="/images/icon.webp"
//           type="image/gif"
//           sizes="16x16"
//         />
//         {/* <link href="/css/plugins.css" rel="stylesheet" type="text/css" /> */}
//         {/* <link href="/css/swiper.css" rel="stylesheet" type="text/css" /> */}
//         <link href="/css/style.css" rel="stylesheet" type="text/css" />
//         {/* <link href="/css/coloring.css" rel="stylesheet" type="text/css" /> */}
//         {/* <link
//           id="colors"
//           href="/css/colors/scheme-01.css"
//           rel="stylesheet"
//           type="text/css"
//         /> */}
//       </head>

//       <body>
//         <div id="wrapper">{children}</div>
//       </body>
//     </html>
//   );
// }
