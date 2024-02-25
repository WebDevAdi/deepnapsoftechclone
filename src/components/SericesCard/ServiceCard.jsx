import React from 'react'

function ServiceCard({title, description, svg}) {
  return (
    <div className="servicesCard cursor-pointer p-0.5 rounded-lg hover:shadow-sm hover:backdrop-blur-md hover:shadow-blue-500">
          <div className=" bg-[#101c36] h-full p-4 rounded-lg ">
            <div className="flex flex-col items-center">
              <div className="text-white text-xl ">
                {/* svg */}
               {svg}
              </div>
              <div>
                {/* title */}
                <div className="text-white text-xl">{title}</div>
              </div>
            </div>
            <div className="my-8">
              {/* description */}
              <div className="text-slate-400 text-justify">
               {description}
              </div>
            </div>
          </div>
        </div>
  )
}

export default ServiceCard
