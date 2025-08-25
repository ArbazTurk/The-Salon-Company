// app/components/LegacyLink.js
"use client";

import { usePathname } from 'next/navigation';

// This component mimics the Next.js Link but forces a full page reload.
// This is essential for legacy jQuery scripts to re-initialize correctly on every page.
const LegacyLink = ({ href, children, className, ...props }) => {
  const pathname = usePathname();

  const handleClick = (e) => {
    // If the link is for the current page, do nothing.
    if (href === pathname) {
      e.preventDefault();
      return;
    }
    // For all other links, let the browser handle it as a normal navigation.
    // This will cause a full page reload.
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};

export default LegacyLink;