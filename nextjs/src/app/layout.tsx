import './globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rocket todo | Nextjs',
  description: 'A simple app to control your daily tasks',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-600 text-gray-300`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
