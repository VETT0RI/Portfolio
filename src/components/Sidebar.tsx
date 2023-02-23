import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import React from 'react';
import Image from 'next/image'


export const Sidebar: React.FC = () => {
  return (
    <aside>
      <Image className='mx-auto rounded-full' src='https://avatars.githubusercontent.com/u/87362531?v=4' width={128} height={128} alt='Foto de Julio Vettori'/>
      <h3 className='my-4 text-3xl font-medium tracking-wider'> <span>Julio</span> Vettori</h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Web Developer</p>
      <a href='' download='name' className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full'><GiTie className='w-6 h-6'/> Download  Resume</a>
      {/* //social icon */}
      <div className='flex justify-around w-9/12 mx-auto my-5 md:w-full'>
        <a href="">
          <AiFillGithub className='w-8 h-8 '/>
        </a>
        <a href="">
          <AiFillLinkedin className='w-8 h-8 text-sky-500'/>
        </a>
      </div>
      {/* address */}
      <div className='py-4 my-5'>
        <div>
          <GoLocation />
          <span>São Paulo, Brasil</span>
        </div>
        <p>vettoribmxx@gmail.com</p>
        <p>+55 (11) 99217-8560</p>
      </div>
      {/* Email Button  */}
      <button >Email Me</button>
      <button >Toggle Theme</button>
    </aside>
  )
}