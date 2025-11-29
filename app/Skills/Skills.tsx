'use client'

import React from 'react'
import { motion } from 'framer-motion';
import Skill from '../components/Skill';

type Props = {}

const skills = [
  { title: "HTML", imageSrc: "/skills/html.svg", proficiency: 90},
  { title: "CSS", imageSrc: "/skills/css.svg", proficiency: 80 },
  { title: "JS", imageSrc: "/skills/javascript.svg", proficiency: 50 },
  { title: "React", imageSrc: "/skills/react.png", proficiency: 70 },
  { title: "Next", imageSrc: "/skills/nextjs.svg", proficiency: 50 },
  { title: "Node", imageSrc: "/skills/nodejs.png", proficiency: 60 },
  { title: "TW", imageSrc: "/skills/tailwind.svg", proficiency: 75 },
  { title: "Mongo", imageSrc: "/skills/mongodb.svg", proficiency: 70 },
  { title: "SQL", imageSrc: "/skills/postgresql.svg", proficiency: 20 },
  { title: "TypeScript", imageSrc: "/skills/typescript.svg", proficiency: 65 },
  { title: "Yarn", imageSrc: "/skills/yarn.svg", proficiency: 80 },
  { title: "MySQL", imageSrc: "/skills/mysql.svg", proficiency: 80 },

];

function Skills({} : Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over the skill for currency profiricency
      </h3>
      <div className='grid grid-cols-4 gap-5'>
        {skills.map((skill, index) => (
          <Skill 
            key={skill.title} 
            title={skill.title}
            imageSrc={skill.imageSrc}
            proficiency={skill.proficiency}
            directionLeft={index % 2 === 0}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills