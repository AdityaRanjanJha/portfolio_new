"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../BackgroundCircles/BackgroundCircles'
import { motion } from 'framer-motion'
import Image from 'next/image'
import me from '../../public/me.jpg'

export default function Client() {
    const [text , count] = useTypewriter({
        words: [
            "<Hello, I'm Aditya Ranjan Jha/>",
            "<I'm a Full Stack Developer/>",
            "<Love to code and build things/>",
            "<I'm a Tech Enthusiast/>",
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <motion.div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image src={me} alt='image not found!!' className='relative rounded-full h-32 w-32 mx-auto object-cover'/>
        <div className='z-20'>
            <h2 className='text-sm text-gray-500 uppercase pb-2 tracking-[15px]'>Software Engineer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#33FF58'/>
            </h1>
            <div className='pt-5'>
                {/* <Link href="#about"> */}
                    <button className='ButtonHero'>About</button>
                {/* </Link> */}
                {/* <Link href="#experience"> */}
                    <button className='ButtonHero'>Experience</button>
                {/* </Link> */}
                {/* <Link href="#skills"> */}
                    <button className='ButtonHero'>Skills</button>
                {/* </Link>
                <Link href="#projects"> */}
                    <button className='ButtonHero'>Projects</button>
                {/* </Link> */}
            </div>
        </div>
        
    </motion.div>
  )
}
