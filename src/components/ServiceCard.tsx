import React from 'react'
import { IService } from 'type'
export const ServiceCard: React.FC<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    }
  }
  return (
    <div className="p-2 flex items-center space-x-4">
      <Icon className="w-12 h-12 text-green-400" />
      <div className="">
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  )
}
