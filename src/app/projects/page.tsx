'use client'
import { ProjectCard } from '@/components/ProjectCard'
import { ProjectNavBar } from '@/components/ProjectNavBar'
import { projects as projectsData } from 'data'
import { useState } from 'react'
import { Category } from 'type'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from 'animations'

export default function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projectsData)
  const [active, setActive] = useState<Category>('All')
  const [showDetails, setShowDetails] = useState<number | null>(null)

  const handlerFilterCategory = (category: Category) => {
    if (category === 'All') {
      setFilteredProjects(projectsData)
      setActive(category)
      return
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category),
    )
    setFilteredProjects(newArray)
    setActive(category)
  }

  const handleShowDetails = (id: number | null) => {
    setShowDetails(id)
    if (id) {
      const newArray = projectsData.filter((project) => project.id === id)
      setFilteredProjects(newArray)
    } else {
      handlerFilterCategory(active)
    }
  }

  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: '65vh' }}
    >
      <ProjectNavBar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <motion.div
        className="grid grid-cols-12 gap-4 my-3 relative"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {filteredProjects.map((project) => (
          // eslint-disable-next-line react/jsx-key
          <motion.div
            className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg"
            variants={fadeInUp}
            key={project.id}
          >
            <ProjectCard
              project={project}
              showDetail={showDetails}
              handleShowDetails={handleShowDetails}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
