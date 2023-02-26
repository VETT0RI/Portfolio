'use client'
import { ServiceCard } from '@/components/ServiceCard'
import { services } from '../../data'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from 'animations'

export default function Home() {
  return (
    <motion.div
      className="flex flex-col px-6 pt-1 flex-grow"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 font-medium">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quae
        corporis similique laudantium fugit obcaecati, quaerat voluptatum rerum
        repellendus ullam expedita quasi dicta sint cupiditate et officiis
        deserunt! Totam, quia.
      </h5>
      <div className="p-4 mt-5 bg-gray-400 dark:bg-dark-100 ml-[-26px] mr-[-26px] flex-grow">
        <h4 className="my-3 font-semibold text-xl tracking-wide">
          What I Offer
        </h4>
        <motion.div
          className="grid my-3 md:grid-cols-2 gap-6"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            // eslint-disable-next-line react/jsx-key
            <motion.div
              variants={fadeInUp}
              className="md:col-span-1 col-span-2 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg"
            >
              <ServiceCard service={service} key={service.title} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
