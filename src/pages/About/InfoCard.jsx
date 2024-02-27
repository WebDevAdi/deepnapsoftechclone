import React from 'react'

function InfoCard({svg, title, description}) {
  return (
    <div className='flex items-start'>
      <div className='text-sky-500 text-3xl bg-[#062241] rounded p-2'>
        {/* svg */}
        {svg}
      </div>
      <div>
        <div className='text-white text-2xl'>
            {/* title */}
            {title}
        </div>
        <div className='text-slate-300 my-2'>
            {/* Information */}
            {description}
        </div>
      </div>
    </div>
  )
}

export default InfoCard
