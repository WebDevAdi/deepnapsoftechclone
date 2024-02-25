import React from 'react'

function DomainCard({image,title}) {
  return (
    <div className='text-white flex flex-col items-center w-60 bg-[#101c36] p-4 rounded-lg'>
       <div>
        {/* Cover Image */}
        <img src={image} alt="" />
        </div> 

        <div>
            {/* domain title */}
            <div>{title}</div>
        </div>
    </div>
  )
}

export default DomainCard
