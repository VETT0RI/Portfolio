'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { NavItem } from './NavItem'

export const Navbar: React.FC = () => {
  const [activeItem, setActiveitem] = useState<string>('')

  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/') setActiveitem('Sobre')
    if (pathname === '/projects') setActiveitem('Projetos')
    if (pathname === '/resume') setActiveitem('Resumo')
  }, [pathname])

  return (
    <nav className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-green-400 border-b-4 border-green-400 md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveitem}
          name="Sobre"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveitem}
          name="Projetos"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveitem}
          name="Resumo"
          route="/resume"
        />
      </div>
    </nav>
  )
}
