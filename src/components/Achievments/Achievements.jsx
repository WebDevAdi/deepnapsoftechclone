import React from 'react'

function Achievements() {
    const svg1 = (
    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stat-icon " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11.482 20.924a1.666 1.666 0 0 1 -1.157 -1.241a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.312 .318 1.644 1.794 .995 2.697"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M20 21l2 -2l-2 -2"></path><path d="M17 17l-2 2l2 2"></path></svg>
    )


    const svg2 = (
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="stat-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-1 4v2h-5V7h5zm-5 4h5v2h-5v-2zM4 19V5h7v14H4z"></path></svg>
    )


    const svg3 = (
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="stat-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"></path></svg>
    )


    const svg4 = (
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="stat-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M84.475 16.084L81.4 65.79 50.752 37.183l-11.68 11.68 30.043 32.19-52.877 3.266c41.824 51.46 65.345 68.355 119.215 67.81l22.322 23.915c3.147-3.24 6.332-6.474 9.555-9.697h.002c3.534-3.535 7.077-7.003 10.623-10.442l-23.404-21.844c6.066-54.95-22.426-79.39-70.075-117.978zM448.77 18.22c-.973-.014-1.966-.01-2.975.01-2.307.042-4.705.175-7.193.397-19.907 1.776-44.9 9.53-72.664 22.795C310.41 67.95 243.78 116.28 180.282 179.777 116.786 243.275 68.35 310.01 41.717 365.647 28.4 393.463 20.594 418.514 18.78 438.462c-1.81 19.948 2.155 34.023 10.974 42.842 8.82 8.818 22.896 12.783 42.844 10.97 19.948-1.812 44.997-9.62 72.814-22.935 47.236-22.612 102.476-60.954 156.942-110.875l-14.186-15.152c-2.085 1.93-4.17 3.864-6.248 5.757-8.912 6.327-17.464 11.443-25.21 15.15-8.84 4.233-16.638 6.57-22.19 7.073-5.55.504-8.082-.607-9.34-1.865-1.258-1.258-2.37-3.79-1.866-9.34.505-5.55 2.842-13.35 7.075-22.192 6.817-14.243 18.406-31.213 33.516-48.138l.108.115c2.182-2.53 4.395-5 6.64-7.412.345-.37.695-.73 1.04-1.097 1.232-1.275 2.48-2.548 3.75-3.816 20.78-20.78 42.63-36.552 60.273-44.98 8.82-4.215 16.598-6.536 22.133-7.03.69-.062 1.336-.1 1.937-.113.6-.014 1.16-.006 1.678.02 3.107.165 4.77 1.027 5.72 1.978 1.268 1.267 2.38 3.8 1.885 9.334-.493 5.534-2.813 13.31-7.027 22.133-3.854 8.065-9.26 17.015-15.96 26.337-.293.32-.596.64-.892.96l15.136 14.182c49.233-53.96 86.992-108.535 109.31-155.25 13.264-27.764 21.02-52.76 22.796-72.667 1.776-19.906-2.207-33.965-11.036-42.793-7.242-7.242-18.002-11.223-32.625-11.44zm-12.286 65.944c7.31-.162 13.042 1.596 16.9 5.453 18.066 18.068-9.964 77.3-65.58 147.06.42-8.303-1.506-16.573-7.406-22.472-4.734-4.733-10.992-6.91-17.57-7.367-2.192-.153-4.42-.114-6.64.084-8.873.792-18.358 3.923-28.528 8.78-20.34 9.718-43.39 26.586-65.43 48.628v.002c-22.044 22.044-38.948 45.126-48.7 65.496-4.874 10.185-8.02 19.683-8.827 28.568-.807 8.886.94 17.925 7.262 24.247 5.734 5.733 13.706 7.7 21.77 7.414-68.26 53.8-125.842 80.59-143.612 62.82C65.44 428.193 126.725 326.7 226.967 226.46c84.577-84.578 170.046-141.423 209.517-142.296zM252.95 225.902c-8.514 8.23-16.85 16.654-25.036 25.29l10.453 11.203c8.565-9.02 17.39-17.43 26.535-25.338l-11.95-11.155zm52.595 49.088c-10.287 8.657-19.75 18.025-28.715 28.615l25.016 26.803-.082.08 14.29 15.262.06-.055 37.995 40.707-73.872 23.692 211.117 81.55-81.552-211.12-22.65 70.634-39.66-37.017.093-.097-15.19-14.234c-.042.04-.084.083-.125.126l-26.725-24.946z"></path></svg>
    )

  return (
    <div className='max-w-[1500px] mx-auto px-10 py-20'>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-10'>
        <div className='flex flex-col items-center border border-sky-500 rounded-lg border-t-4 border-t-sky-500 rounded-t-none p-5 border-t-gr'>
            <div className='my-2 text-sky-500 text-6xl'>
                {svg1}
            </div>
            <div className='text-white font-bold text-5xl my-2'>
                100+
            </div>
            <div className='text-white my-2 text-xl text-center'>
                Finished Projects
            </div>
        </div>


        <div className='flex flex-col items-center border border-sky-500 rounded-lg border-t-4 border-t-sky-500 rounded-t-none p-5 border-t-gr'>
            <div className='my-2 text-sky-500 text-6xl'>
                {svg2}
            </div>
            <div className='text-white font-bold text-5xl my-2'>
                30+
            </div>
            <div className='text-white my-2 text-xl text-center'>
                Created Jobs
            </div>
        </div>



        <div className='flex flex-col items-center border border-sky-500 rounded-lg border-t-4 border-t-sky-500 rounded-t-none p-5 border-t-gr'>
            <div className='my-2 text-sky-500 text-6xl'>
                {svg3}
            </div>
            <div className='text-white font-bold text-5xl my-2'>
                90+
            </div>
            <div className='text-white my-2 text-xl text-center'>
                Happy Customers
            </div>
        </div>



        <div className='flex flex-col items-center border border-sky-500 rounded-lg border-t-4 border-t-sky-500 rounded-t-none p-5 border-t-gr'>
            <div className='my-2 text-sky-500 text-6xl'>
                {svg1}
            </div>
            <div className='text-white font-bold text-5xl my-2'>
                25+
            </div>
            <div className='text-white my-2 text-xl text-center'>
                Technologies Have
            </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements
