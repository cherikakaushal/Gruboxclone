// app/layout.js
import "./globals.css";
import Navbar from "../components/navbar/navbar"; // keep if you have it

export const metadata = {
  title: "Grubox — Healthy meals & smart cafeterias",
  description: "Fresh, homely meals and on-demand cafeterias for offices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        {/* Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />

        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {typeof Navbar === "function" ? <Navbar /> : null}
        <main>{children}</main>
      </body>
    </html>
  );
}
