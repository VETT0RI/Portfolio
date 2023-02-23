import { Sidebar } from '@/components/Sidebar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='bg-black'>
        <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:px-48'>
          <div className='col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl'>
            <Sidebar />
          </div>
          <div className='col-span-12 bg-white lg:col-span-9 rounded-2xl'>
            {children}
          </div>
        </div>
        
      </body>
    </html>
  )
}
