'use client';

import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import React, { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar scrollPosition={scrollPosition} className="mb-20" />
        {children}
      </body>
    </html>
  );
}
