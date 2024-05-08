'use client'
import React from 'react'
import hackto from '../../public/hacktober.jpeg'
import Image from 'next/image'

type Props = {}
function ExperienceCard({}: Props) {
  return (
    <article>
        <img
        className='w-32 h-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center'
            src="/hacktober.jpg"
            alt="image not found !!"
        />
    </article>
  )
}

export default ExperienceCard