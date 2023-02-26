'use client'
import React from 'react'
import { IProject } from 'type'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from 'animations'
import { MdClose } from 'react-icons/md'

export const ProjectCard: React.FC<{
  project: IProject
  showDetail: null | number
  handleShowDetails: (id: null | number) => void
}> = ({
  project: {
    id,
    name,
    imagePath,
    category,
    deployedUrl,
    description,
    techs,
    githubUrl,
  },
  showDetail,
  handleShowDetails,
}) => {
  return (
    <div>
      <Image
        onClick={() => handleShowDetails(id)}
        src={imagePath}
        alt={name}
        width="300"
        height="150"
        className="cursor-pointer"
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 h-auto w-full gap-x-12 text-black dark:text-white bg-gray-100 dark:bg-dark-100 p-2 md:p-10 rounded-lg">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeInUp}
              className="border-4 border-green-400"
            >
              <Image
                src={imagePath}
                alt={name}
                width="300"
                height="150"
                layout="responsive"
                quality={100}
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center my-4 space-x-3"
            >
              <Link
                href={githubUrl}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </Link>
              <Link
                href={deployedUrl}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <MdClose
            className="absolute top-3 right-3 rounded-full p-1 focus:outline-none bg-gray-200 dark:bg-dark-200 cursor-pointer"
            onClick={() => handleShowDetails(null)}
            size={30}
          />
        </div>
      )}
    </div>
  )
}
