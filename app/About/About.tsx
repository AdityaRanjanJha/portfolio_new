'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
    return (
        <motion.div
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1,
        }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto item-center mt-10'>
        <div className='flex flex-col items-center'>
            <h3 className='pb-10 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 1.2,
                }}
                src="/me2.jpg"
                className='md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
                />
            <div className='space-y-20 px-0 md:px-10'>
                <h4 className='pt-5 text-4xl font-semibold'>
                    Here is a <span className='text-[#33FF58]/50'>Little</span>{" "} 
                    background
                </h4>
                <p className='text-lg'>
                As a second-year Software Engineering student, I’m passionate about the ever-evolving world of technology. My journey has led me to explore app development, and I’m currently honing my skills in frontend web development. I thrive on challenges, am a quick learner, and have a deep enthusiasm for all things tech. I’m constantly on the lookout for opportunities to apply and expand my knowledge. Let’s connect and explore the possibilities of collaboration in this exciting tech landscape!
                </p>
            </div>  
        </div>
         
    </motion.div>
    )
}

export default About;