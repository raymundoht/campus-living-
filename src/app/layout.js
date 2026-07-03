/**
 * Root Layout
 * ===========
 * Next.js App Router root layout. Wraps all pages with
 * the HTML shell, metadata, font imports, and global styles.
 */
import './globals.css';
import './additions.css';

/** Page metadata for SEO */
export const metadata = {
  title: 'Betsy Modular — Premium Modular Construction',
  description:
    'Precision-engineered modular structures delivered faster, smarter, and more sustainably. From concept to completion in a fraction of the time.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
