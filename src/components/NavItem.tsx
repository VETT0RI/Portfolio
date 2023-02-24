import React from 'react'
import Link from 'next/link'

export const NavItem: React.FC<{
  activeItem: string
  setActiveItem: Function
  name: string
  route: string
}> = ({ activeItem, name, route, setActiveItem }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <span
        onClick={() => setActiveItem('Sobre')}
        className="hover:text-green-400"
      >
        {name}
      </span>
    </Link>
  ) : null
}
