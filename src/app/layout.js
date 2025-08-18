'use client';
import { useEffect } from 'react';
import "./globals.css"; // Re-enable this for base styles

export default function RootLayout({ children }) {
  // This useEffect will run only on the client, after the component has mounted
  useEffect(() => {
    // This function will dynamically load the scripts
    const loadScript = (src) => {
      // Avoid adding duplicate scripts
      if (document.querySelector(`script[src="${src}"]`)) return;
      
      const script = document.createElement('script');
      script.src = src;
      script.async = false; // Load in order
      document.body.appendChild(script);
    };

    // Load your scripts in the desired order
    loadScript('/js/plugins.js');
    loadScript('/js/designesia.js');
    loadScript('/js/custom-marquee.js');
    loadScript('/js/swiper.js');

    // It's good practice to clean up the scripts when the component unmounts
    return () => {
      const scripts = document.querySelectorAll('script[src^="/js/"]');
      scripts.forEach(script => script.remove());
    };
  }, []); // The empty array ensures this effect runs only once

  return (
    <html lang="en">
      {/* 
        This is a regular <head> tag, NOT the <Head> component from 'next/head'.
        This is the correct way for the App Router.
      */}
      <head>
        <title>Almaris — Hotel Website Template</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Almaris — Hotel Website Template" />
        
        {/* --- CSS Files --- */}
        {/* These have been uncommented and will now load properly. */}
        <link rel="icon" href="/images/icon.webp" type="image/gif" sizes="16x16" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap" />
        <link href="/css/plugins.css" rel="stylesheet" type="text/css" />
        <link href="/css/swiper.css" rel="stylesheet" type="text/css" />
        <link href="/css/style.css" rel="stylesheet" type="text/css" />
        <link href="/css/coloring.css" rel="stylesheet" type="text/css" />
        <link id="colors" href="/css/colors/scheme-01.css" rel="stylesheet" type="text/css" />
      </head>
      
      <body>
        <div id="wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}

// 'use client';
// import { useEffect } from 'react';
// import Head from 'next/head';

// export default function RootLayout({ children }) {
//   // This useEffect will run only on the client, after the component has mounted
//   useEffect(() => {
//     // This function will dynamically load the scripts
//     const loadScript = (src) => {
//       const script = document.createElement('script');
//       script.src = src;
//       script.async = false; // Load in order
//       document.body.appendChild(script);
//     };

//     // Load your scripts in the desired order
//     loadScript('/js/plugins.js');
//     loadScript('/js/designesia.js');
//     // We don't need to load swiper.js here because we are using the Swiper React component
//     // loadScript('/js/swiper.js');
//     loadScript('/js/custom-marquee.js');
//     // custom-swiper-2.js is likely for the old manual initialization, which we don't need
//     // loadScript('/js/custom-swiper-2.js');

//     // It's good practice to clean up the scripts when the component unmounts
//     return () => {
//       const scripts = document.querySelectorAll('script[src^="/js/"]');
//       scripts.forEach(script => script.remove());
//     };
//   }, []); // The empty array ensures this effect runs only once
//   return (
//     <html lang="en">
//       <Head>
//         <title>Almaris — Hotel Website Template</title>
//         <link rel="icon" href="/images/icon.webp" type="image/gif" sizes="16x16" />
//         <meta content="text/html;charset=utf-8" http-equiv="Content-Type" />
//         <meta content="width=device-width, initial-scale=1.0" name="viewport" />
//         <meta content="Almaris — Hotel Website Template" name="description" />
//         <meta content="" name="keywords" />
//         <meta content="" name="author" />

//         {/* CSS Files */}
//         {/* <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap" />
//         <link href="/css/plugins.css" rel="stylesheet" type="text/css" />
//         <link href="/css/swiper.css" rel="stylesheet" type="text/css" />
//         <link href="/css/style.css" rel="stylesheet" type="text/css" />
//         <link href="/css/coloring.css" rel="stylesheet" type="text/css" />
//         <link id="colors" href="/css/colors/scheme-01.css" rel="stylesheet" type="text/css" /> */}
//       </Head>
//       <body>
//         <div id="wrapper">
//           {children}
//         </div>

//         {/* JavaScript Files */}
//         {/* <script src="/js/plugins.js"></script>
//         <script src="/js/designesia.js"></script>
//         <script src="/js/swiper.js"></script>
//         <script src="/js/custom-marquee.js"></script>
//         <script src="/js/custom-swiper-2.js"></script> */}
//       </body>
//     </html>
//   );
// }


// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         {children}
//       </body>
//     </html>
//   );
// }
