'use client'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export const Sidebar: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <aside>
      <Image
        className="mx-auto rounded-full"
        src="https://avatars.githubusercontent.com/u/87362531?v=4"
        width={128}
        height={128}
        alt="Foto de Julio Vettori"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        {' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
          Julio
        </span>{' '}
        Vettori
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full">
        Web Developer
      </p>
      <a
        href=""
        download="name"
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>
      {/* //social icon */}
      <div className="flex justify-center w-9/12 gap-4 mx-auto my-5 md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 " />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 text-sky-500" />
        </a>
      </div>
      {/* address */}
      <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200 mx-[-16px]">
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>São Paulo, Brasil</span>
        </div>
        <p className="my-2">vettoribmxx@gmail.com</p>
        <p className="my-2">+55 (11) 99217-8560</p>
      </div>
      {/* Email Button  */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-black rounded-full bg-gradient-to-r from-green-400 to-blue-400 focus:outline-none"
        onClick={() => window.open('mailto:vettoribmxx@gmail.com')}
      >
        Email Me
      </button>
      <button
        className="w-8/12 px-5 py-2 my-2 text-black rounded-full bg-gradient-to-r from-green-400 to-blue-400"
        onClick={changeTheme}
      >
        Toggle Theme
      </button>
    </aside>
  )
}
