"use client";
import "../../public/css/coloring.css";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/css/plugins.css";
// import "../../public/css/style.css";

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
      </body>
    </html>
  );
}
