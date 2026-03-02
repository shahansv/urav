import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Urav",
  description: "Urav",
};

const AvenirFont = localFont({
  src: "./fonts/AvenirLT45Book.ttf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${AvenirFont.className}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
