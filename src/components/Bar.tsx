import React from 'react'
import { ISkill } from 'type'
import { motion } from 'framer-motion'

export const Bar: React.FC<{
  data: ISkill
}> = ({ data: { Icon, level, name } }) => {
  const barWidth = `${level}%`

  const fadeInRight = {
    initial: {
      width: 0,
    },
    animate: {
      width: barWidth,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  }

  return (
    <>
      <Icon className="mr-2" />
      <p className="">{name}</p>

      <div className="text-white my-2 bg-gray-300 dark:bg-dark-300 rounded-full col-span-12">
        <motion.div
          variants={fadeInRight}
          initial="initial"
          animate="animate"
          className="px-4 py-1 items-center rounded-full bg-gradient-to-r from-green-400 to-blue-600 mr-[-16px] col-span-12"
          style={{ width: barWidth }}
        ></motion.div>
      </div>
    </>
  )
}
