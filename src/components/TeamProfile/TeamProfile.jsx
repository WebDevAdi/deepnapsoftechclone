import React from 'react'

function TeamProfile({memberName, designation, profileImage}) {
  return (
    <div className='relative border border-slate-500 rounded-lg pt-20 w-fit p-4'>
     <div className="flex justify-center">
     <div className="absolute -top-20  h-36 w-36 rounded-full bg-gray-500 overflow-hidden">
        {/* profile photo */}
        <img src={profileImage} className='w-full h-full object-cover' alt="" />
      </div>

     </div>
      <div className='text-white text-2xl font-bold text-center my-2'>
        {memberName}
      </div>

      <div className='text-center text-md text-slate-500 font-semibold my-2'>
        {designation}
      </div>

      <div className='flex justify-center'>
        <button className='text-white bg-blue-500 rounded p-1 px-5 my-1'>
            Profile
        </button>
      </div>
    </div>
  )
}

export default TeamProfile
