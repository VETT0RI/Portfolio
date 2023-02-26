'use client'
import { ReactNode } from 'react'
import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-fixed bg-gradient-to-r from-green-400 to-blue-400 text-[#354358] dark:from-dark-500 dark:to-dark-700 dark:text-white">
        <ThemeProvider attribute="class">
          <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32">
            <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
              <Sidebar />
            </div>
            <div className="flex flex-col col-span-12 bg-white dark:bg-dark-500 lg:col-span-9 rounded-2xl overflow-hidden shadow-custom-light dark:shadow-custom-dark">
              <Navbar />
              <AnimatePresence>{children}</AnimatePresence>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
