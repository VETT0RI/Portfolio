import { ServiceCard } from '@/components/ServiceCard'
import { services } from '../../data'

export default function Home() {
  return (
    <div className="flex flex-col px-6 pt-1 flex-grow">
      <h5 className="my-3 font-medium">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quae
        corporis similique laudantium fugit obcaecati, quaerat voluptatum rerum
        repellendus ullam expedita quasi dicta sint cupiditate et officiis
        deserunt! Totam, quia.
      </h5>
      <div className="p-4 mt-5 bg-gray-400 dark:bg-dark-100 ml-[-26px] mr-[-26px] flex-grow">
        <h6 className="my-3 font-bold text-xl tracking-wide">What i offer</h6>
        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((service) => (
            // eslint-disable-next-line react/jsx-key
            <div className="lg:col-span-1 bg-gray-200 dark:bg-dark-200 rounded-lg">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
