'use client'

import { motion } from 'framer-motion';
import React from 'react'

type Props = {}
const project = [1,2,3,4,5];
function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{opacity: 1}}
      transition={{duration:1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
      <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
        <motion.img
          initial= {{
            y: -300,
            opacity: 0
          }}
          transition={{duration: 1.2}}
          whileInView={{opacity: 1, y:0}}
          viewport={{once: true}}
          src="/projectscc/codefieldscc.png"
          className='max-h-60 md:max-h-80'
        />
        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
          <h4 className='text-4xl font-semibold text-center'>
            <span className='underline decoration-[#33FF58]/50'>
              Code Field
            </span>
          </h4>

          <p className='text-lg text-center md:text-left'>
          Built a real-time collaborative coding platform that lets multiple developers edit code together seamlessly.
          Powered by React.js, Node.js, and Socket.IO to ensure instant updates and synchronized editing.
          Designed a scalable multi-user environment with stable WebSocket communication for smooth interaction.
          Enhanced teamwork, boosting productivity and shared understanding of the evolving codebase.
          </p>
        </div>
      </div>

    </div>
    <div className='w-full absolute top-[30%] bg-[#33FF58]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects