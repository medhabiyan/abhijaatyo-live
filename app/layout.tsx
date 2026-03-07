import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// এইখানে ফেসবুক ও গুগলের ডোমেইন ভেরিফিকেশনের কোডটা বসানো হয়েছে
export const metadata: Metadata = {
  title: 'Abhijaatyo - আভিজাত্যের নতুন সংজ্ঞা',
  description: 'Premium Panjabi and Menswear Brand in Bangladesh',
  verification: {
    google: "r4YDbxwq1Y53EvX-THFQACPtAXgIG3D--_9Yf2n7svQ", // Google Search Console Verification
    other: {
      "facebook-domain-verification": ["9r7du7mhmfmoo6db0x1dtv5hfya22u"],
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ================= Google Analytics 4 (GA4) ================= */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-QR9CKF0DRE" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QR9CKF0DRE', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* ================= Facebook Pixel Base Code ================= */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}