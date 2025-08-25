"use client";
import "../../public/css/colors/scheme-01.css";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/css/plugins.css";
// import "../../public/css/swiper.css";
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
        {/* <Script src="/js/custom-marquee.js" strategy="afterInteractive" /> */}
        {/* <Script src="/js/swiper.js" strategy="afterInteractive" /> */}
        {/* custom-swiper-2.js is likely for a specific page, better to handle it there */}

        {/* Note: designesia.js is now loaded using the useExternalScript hook in individual pages */}
      </body>
    </html>
  );
}
