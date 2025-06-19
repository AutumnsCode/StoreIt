import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";


const poppins = Poppins({

})

export const metadata: Metadata = {
  title: "StoreIt",
  description: "StoreIt - The only storage solution you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
