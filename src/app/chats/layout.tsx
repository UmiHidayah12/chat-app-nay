import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import localFont from "next/font/local";
import "./globals.css";
import "@mantine/core/styles.css";

const geistSans = localFont({
  src: [
    {
      path: "./fonts/Geist-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Geist-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "WhatsCatt",
  description: "A chat app built with Next.js and Mantine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
