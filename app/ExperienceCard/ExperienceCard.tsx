'use client'
import React from 'react'
import { motion } from 'framer-motion';

type Props = {
  title: string,
  company: string,
  imageURL: string,
  techIcon: string[],
  description: string,
  summaryPoints: string[],
  dateRange: string
}
function ExperienceCard({
  title,
  company,
  imageURL,
  techIcon,
  description,
  summaryPoints,
  dateRange
}: Props) {
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
            src={imageURL}
            alt="image not found !!"
        />

        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>{title}</h4>
          <p className='font-bold text-2xl mt-1'>{company}</p>
          <div className='flex space-x-2 my-2'>
          {techIcon.map((techIcon,index)=>(
            <img
              key = {index} 
              className='h-10 w-10 rounded-full'
              src={techIcon}
              alt='image not found!!'
            />
        ))}

            {/* <img 
              className='h-10 w-10 rounded-full'
              src='/nodejs.png'
              alt='image not found!!'
            />
            <img 
              className='h-10 w-10 rounded-full'
              src='/css.png'
              alt='image not found!!'
            /> */}
            
          </div>
          <p className='uppercase py-5 text-gray-300'>
            {description}
          </p>
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            {summaryPoints.map((index,points)=>(
              <li key={index}>{points}</li>
            ))}
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard;