'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { NavItem } from './NavItem'

export const Navbar: React.FC = () => {
  const [activeItem, setActiveitem] = useState<string>('')

  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/') setActiveitem('About')
    if (pathname === '/projects') setActiveitem('Projects')
    if (pathname === '/resume') setActiveitem('Resume')
  }, [pathname])

  return (
    <nav className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-white-400 border-b-4 border-green-400 md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveitem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveitem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveitem}
          name="Resume"
          route="/resume"
        />
      </div>
    </nav>
  )
}
