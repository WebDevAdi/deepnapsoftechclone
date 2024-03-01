import React from 'react'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import node from '../../assets/node.png'
import php from '../../assets/php.png'
import express from '../../assets/express.png'
import python from '../../assets/python.png'
import mongoDB from '../../assets/mongoDB.png'
import java from '../../assets/java.png'
import reactLogo from '../../assets/reactLogo.png'

function InfiniteSlidingLang() {
  return (
   <div className='my-20 bg-center gradient-background'>
    <div className='py-5 pt-10 text-white text-center font-bold text-2xl md:text-3xl lg:text-4xl px-10'>
    Driving Innovation and Success with Advanced Technology Solutions
    </div>
     <div className='flex relative overflow-hidden p-2 '>
        <div className='shrink-0 w-full slidingLanguages'>
            <div className="flex items-center">
              <div><img className='md:w-44' src={html} alt="" /></div>
              <div><img className='md:w-44' src={css} alt="" /></div>
              <div><img className='md:w-44' src={javascript} alt="" /></div>
              <div><img className='md:w-44' src={node} alt="" /></div>
              <div><img className='md:w-44' src={php} alt="" /></div>
              <div><img className='md:w-44' src={mongoDB} alt="" /></div>
              <div><img className='md:w-44' src={java} alt="" /></div>
              <div><img className='md:w-44' src={reactLogo} alt="" /></div>
              <div><img className='md:w-44' src={python} alt="" /></div>
              <div><img className='md:w-44' src={express} alt="" /></div>
            </div>
        </div>
        <div className='shrink-0 w-full slidingLanguages'>
            <div className="flex items-center">
              <div><img  className='md:w-44 ' src={html} alt="" /></div>
              <div><img  className='md:w-44 ' src={css} alt="" /></div>
              <div><img  className='md:w-44 ' src={javascript} alt="" /></div>
              <div><img  className='md:w-44 ' src={node} alt="" /></div>
              <div><img  className='md:w-44 ' src={php} alt="" /></div>
              <div><img  className='md:w-44 ' src={mongoDB} alt="" /></div>
              <div><img  className='md:w-44 ' src={java} alt="" /></div>
              <div><img  className='md:w-44 ' src={reactLogo} alt="" /></div>
              <div><img  className='md:w-44 ' src={python} alt="" /></div>
              <div><img  className='md:w-44 ' src={express} alt="" /></div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default InfiniteSlidingLang
