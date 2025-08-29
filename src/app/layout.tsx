import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "../globals.css";
import "@mantine/core/styles.css";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Mantine needs this */}
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className="antialiased font-sans">
        <MantineProvider defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
