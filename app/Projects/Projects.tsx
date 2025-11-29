'use client'

import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

type Project = {
  title: string;
  image: string;
  description: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    title: "Code Field",
    image: "/projectscc/codefieldscc.png",
    description: "Built a real-time collaborative coding platform that lets multiple developers edit code together seamlessly. Powered by React.js, Node.js, and Socket.IO to ensure instant updates and synchronized editing. Designed a scalable multi-user environment with stable WebSocket communication for smooth interaction. Enhanced teamwork, boosting productivity and shared understanding of the evolving codebase.",
    githubLink: "https://github.com/AdityaRanjanJha/CodeField" // Add your GitHub link here
  },
  // Add your new projects here:
  {
    title: "SnapScribe",
    image: "/projectscc/snapscribescc.png",
    description: "Built a modern blogging platform using Next.js 14 with MongoDB for secure and efficient data management.Designed a clean CMS-style interface that lets users create, edit, and organize blog content with ease.Focused on seamless usability and smooth navigation to deliver a polished reading and writing experience.Successfully launched with active users publishing and consuming content in real time.",
    githubLink: "https://github.com/AdityaRanjanJha/snap_scribe"
  },
  {
    title: "Dyslexify",
    image: "/projectscc/dyslexifyscc.png", 
    description: "Created an accessibility-focused project during a hackathon, delivering AI-based text-to-speech and summarization.Developed a Chrome extension UI with secure API key protection, supporting both light and dark themes.Integrated Llama 3 and ChatGPT 3.5 models to summarize entire webpages instantly and efficiently.",
    githubLink: "https://github.com/AdityaRanjanJha/Dyslexsify"
  }
];

function Projects({}: Props) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -window.innerWidth : window.innerWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{opacity: 1}}
      transition={{duration:1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
    <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
    
    {/* Left Arrow */}
    <button
      onClick={() => scroll('left')}
      className='absolute left-5 top-1/2 -translate-y-1/2 z-30 opacity-30 hover:opacity-100 transition-opacity'
    >
      <svg className='w-12 h-12 text-[#33FF58]' fill='currentColor' viewBox='0 0 20 20'>
        <path fillRule='evenodd' d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' clipRule='evenodd' />
      </svg>
    </button>

    {/* Right Arrow */}
    <button
      onClick={() => scroll('right')}
      className='absolute right-5 top-1/2 -translate-y-1/2 z-30 opacity-30 hover:opacity-100 transition-opacity'
    >
      <svg className='w-12 h-12 text-[#33FF58]' fill='currentColor' viewBox='0 0 20 20'>
        <path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd' />
      </svg>
    </button>

    <div ref={scrollRef} className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#33FF58]/80'>
      {projects.map((project, i) => (
        <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen pt-40'> 
          <motion.img
            initial= {{
              y: -300,
              opacity: 0
            }}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1, y:0}}
            viewport={{once: true}}
            src={project.image}
            alt={project.title}
            className='max-h-60 md:max-h-80'
          />
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#33FF58]/50'>
                {project.title}
              </span>
            </h4>

            <p className='text-lg text-center md:text-left'>
              {project.description}
            </p>

            {project.githubLink && (
              <div className='flex justify-center'>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='flex items-center space-x-2 text-gray-400 hover:text-[#33FF58] transition-colors'
                >
                  <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                  </svg>
                  <span>View on GitHub</span>
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
    <div className='w-full absolute top-[30%] bg-[#33FF58]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects