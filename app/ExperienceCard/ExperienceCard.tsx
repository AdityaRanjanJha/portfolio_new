'use client'
import React from 'react'
import { motion } from 'framer-motion';

type Props = {}
function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center mt-24 space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{duration:1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        className='w-32 h-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center items-center'
            src="/hacktober.jpg"
            alt="image not found !!"
        />

        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>Participated in HACTOBER FEST</h4>
          <p className='font-bold text-2xl mt-1'>Hacktober Fest 2023</p>
          <div className='flex space-x-2 my-2'>
            <img 
              className='h-10 w-10 rounded-full'
              src='/jspic.png'
              alt='image not found!!'
            />
            <img 
              className='h-10 w-10 rounded-full'
              src='/nodejs.png'
              alt='image not found!!'
            />
            <img 
              className='h-10 w-10 rounded-full'
              src='/css.png'
              alt='image not found!!'
            />
          </div>
          <p className='uppercase py-5 text-gray-300'>
            Started my journey in open source by participating in Hacktober Fest 2023 in the month of October 2023. It was a great experience and it ended in the month of November.
          </p>
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard;