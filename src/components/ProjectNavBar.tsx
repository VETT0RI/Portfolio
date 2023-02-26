import React from 'react'
import { Category } from 'type'

export const NavItem: React.FC<{
  value: Category | 'All'
  handlerFilterCategory: Function
  active: string
}> = ({ value, handlerFilterCategory, active }) => {
  let className = 'cursor-pointer hover:text-green-400'
  if (active === value) className += ' text-green-400'
  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  )
}

export const ProjectNavBar: React.FC<{
  handlerFilterCategory: Function
  active: string
}> = (props) => {
  return (
    <nav className="flex space-x-3 px-3 py-2 list-none overflow-x-auto">
      <NavItem value="All" {...props} />
      <NavItem value="React" {...props} />
      <NavItem value="ReactNative" {...props} />
      <NavItem value="NextJS" {...props} />
      <NavItem value="Node" {...props} />
      <NavItem value="Express" {...props} />
    </nav>
  )
}
