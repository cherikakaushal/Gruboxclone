// app/layout.js
import './globals.css';
import Navbar from '../components/navbar/navbar'; // Adjust if your navbar path differs

export const metadata = {
  title: 'Grubox | Healthy Office Meals in Gurgaon, Noida & Delhi',
  description: 'Order fresh, nutritious Indian meals delivered daily to your office. Grubox offers meal plans, subscriptions, and corporate food delivery across NCR.',
  metadataBase: new URL('https://services.grubox.in'),
  alternates: {
    canonical: 'https://services.grubox.in',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'Grubox | Healthy Office Meals',
    description: 'Fresh thalis and Indian meals delivered to offices in Delhi NCR',
    url: 'https://services.grubox.in',
    siteName: 'Grubox',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* W3.CSS */}
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/5/w3.css"
        />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Quicksand&display=swap"
          rel="stylesheet"
        />

        {/* Meta viewport for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="w3-light-grey">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
