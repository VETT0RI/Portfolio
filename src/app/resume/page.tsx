'use client'
import { Bar } from '@/components/Bar'
import { languages, tools } from 'data'
import { fadeInUp, routeAnimation } from 'animations'
import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-2"
    >
      {/* Education and Experience */}

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Information Technology</h5>
            <p className="font-semibold">
              Virtual University of the State of São Paulo (2021-2024)
            </p>
            <p className="my-3">
              I am currently pursuing a bachelor&quot;s degree in Information
              Technology
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">IT Infrastructure</h5>
            <p className="font-semibold">BRMedia Group (2022- on)</p>
            <p className="my-3">
              Activities: Support in Hardware and Software, purchase of IT
              equipment, Google Workspace management, network infrastructure
              planning and telecommunications
            </p>
          </div>
        </motion.div>
      </div>

      {/* Language and Tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold ">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((Language) => (
              <Bar data={Language} key={Language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold ">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
