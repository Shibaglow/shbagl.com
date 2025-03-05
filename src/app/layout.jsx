import "./globals.css";
import Script from "next/script";
import CustomRainbowKit from "./components/rainbowkit/CustomRainbowKit";
import SmartScroll from "./components/js/SmartScroll";

export const metadata = {
  title: "ShibaGlow",
  description: "ShibaGlow",
};

export default function RootLayout({ children }) {
  const pageTitle = "ShibaGlow";
  const pageDescription = "ShibaGlow";
  const pageImage = "/images/logo.png";
  const pageUrl = "https://shbagl.com/";

  return (
    <html lang="en">

      <head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/images/logo.png" type="image/png" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
      </head>
      <body>
        <CustomRainbowKit>
          {/*  */}
          {children}

          {/* Back to Top Button */}
          <a href="#" className="back-to-top"> &#129137; </a>

          {/* All JS Scripts */}
          <Script src="/js/jquery-3.4.1.min.js" strategy="beforeInteractive" />
          <Script src="/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
          <Script src="/js/aos.js" strategy="lazyOnload" />
          <Script src="/js/main.js" strategy="lazyOnload" />
          {/* Initialize SmartScroll with optional settings */}
          <SmartScroll options={{ speed: 700, offset: 80, addActive: false, activeClass: "active" }} />
        </CustomRainbowKit>
      </body>
    </html>
  );
}
