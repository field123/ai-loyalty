// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <body className={`${inter.variable} light`}>
            {children}
          </body>
      </html>
  )
}