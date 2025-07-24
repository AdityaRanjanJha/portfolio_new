'use client'

import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import { SiReact, SiJavascript, SiNodedotjs, SiMongodb } from "react-icons/si";

type Props = {}
function Experience({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='min-h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Experience
            </h3>
            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-24'>
                <ExperienceCard
                    title="Participated in HACKTOBER FEST"
                    company="Hacktober Fest 2023"
                    techIcon={['/jspic.png', '/nodejs.png', '/css.png']}
                    imageURL="/hacktober.jpg"
                    dateRange="October 2023 - November 2023"
                    description='Started my journey in open source by participating in Hacktober Fest 2023 in the month of October 2023. It was a great experience and it ended in the month of November.'
                    summaryPoints={[
                        'Started my open-source journey',
                        'Submitted 4+ PRs',
                        'Explored Git and GitHub',
                        'Learned collaboration via issues and PR reviews',
                    ]} />
                
                <ExperienceCard 
                    title='Software Development Intern'
                    company='Tinisoft'
                    techIcon={[
                        <SiReact size={40} color="#61DAFB" />,
                        <SiJavascript size={40} color="#F7DF1E" />,
                        <SiNodedotjs size={40} color="#339933" />,
                        <SiMongodb size={40} color="#47A248" />
                    ]}
                    imageURL='/tinisoft.jpeg'
                    dateRange='January 2024 - March 2024'
                    description='Worked as a Software Development Intern, focusing on full-stack web development using modern technologies.'
                    summaryPoints={[
                        'Built the Circuit Chrome extension at Tinisoft, utilizing Chrome APIs like tabCapture to enhance functionality.',
                        'Developed the front-end interface based on designer specifications for a seamless user experience.',
                        'Updated the extension to support the latest Chrome Sidebar API, ensuring compatibility with future browser updates.'
                    ]}
                />
            </div>
        </motion.div>
    )
}

export default Experience