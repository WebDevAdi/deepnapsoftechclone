import React from 'react'

function Banner() {
  return (
    <div className='banner'>
      <div className='flex items-center justify-around max-w-[1500px] mx-auto'>
        
      <div className='sm:max-w-[600px] md:max-w-[600px] lg:max-w-[880px]  px-10 my-10'>
        {/* banner content */}
        <h1 className='text-white font-bold text-3xl lg:text-4xl my-3'>Shaping Brands with the Best Website Design and Web Development Company in Faridabad & Delhi NCR</h1>
        <p className='text-slate-400 text-justify text-sm lg:text-lg xl:text-xl'>
        <span className='text-white'>Empowering Brands with Exceptional</span> Website Design and Web Development Services in Faridabad and Delhi NCR. Choose the Best Company to Elevate Your Online Presence. Deepnap Softech focuses on building robust digital identities. With a deep understanding of <span className='text-white'>Best Website Design and Web Development</span>, we create platforms that amplify your brand's presence. Through expert website design and web development, we translate ideas into immersive online experiences. Elevate your brand's online presence with best company across Faridabad & Delhi NCR <span className='text-white'>With Our Cutting-Edge Solutions.</span>
        </p>

        <div className='my-3'>
            <button className='bg-blue-600 text-white p-2 px-3 rounded'>Contact Us</button>
            <button className='border text-white p-2 px-3 rounded ml-5'>Showcase_</button>
        </div>

      </div>

      <div className='hidden md:flex'>
        {/* banner image */}
        <img src={'https://deepnapsoftech.com/assets/h2-H-ULGn1f.gif'} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Banner
