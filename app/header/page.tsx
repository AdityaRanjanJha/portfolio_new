"use client"
import { SocialIcon } from "react-social-icons";
import { motion } from 'framer-motion';

type Props = {};

export default function Header({}: Props) {
    return (
        <header className="sticky top-0 flex items-start p-5 justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div
        initial={{
            x:-500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration:1.5
        }}
          className="flex flex-row item-center">
            <SocialIcon url= "https://twitter.com/AdityaRanjanJh5" 
            fgColor="gray" 
            bgColor="transparent"/>
            <SocialIcon url= "https://github.com/AdityaRanjanJha" 
            fgColor="gray" 
            bgColor="transparent"/>
            <SocialIcon url= "https://www.linkedin.com/in/aditya-ranjan-13a1a6252/" 
            fgColor="gray" 
            bgColor="transparent"/>
        </motion.div>

        <motion.div
        initial={{
            x:500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration:1.5,
        }}
        className="flex flex-row item-center text-gray-300 cursor-pointer">
            <SocialIcon
                className="cursor-pointer"
                network="email"
                fgColor="gray"
                bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in Touch</p>
        </motion.div>
        </header>
    );
    }