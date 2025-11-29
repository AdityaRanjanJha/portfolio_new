import {motion} from 'framer-motion'; 

type Props = {
    directionLeft?: boolean;
    title: string;
    imageSrc?: string;
    proficiency: number;
}

const Skill = ({directionLeft, title, imageSrc, proficiency} : Props ) => {
    return (
        <div className="group relative flex cursor-pointer">
            <div className='flex items-center justify-center rounded-full border border-gray-500 h-24 w-24 xl:w-32 xl:h-32 bg-gray-800/50 p-3'>
                {imageSrc ? (
                    <motion.img
                    initial = {{ x: directionLeft ? -200 : 200, opacity:0}}
                    transition={{duration: 1}}
                    whileInView={{opacity: 1,x: 0}}
                    src={imageSrc}
                    alt={title}
                    className='w-full h-full object-contain'
                    />
                ) : (
                    <motion.p
                    initial = {{ x: directionLeft ? -200 : 200, opacity:0}}
                    transition={{duration: 1}}
                    whileInView={{opacity: 1,x: 0}}
                    className='text-2xl font-bold text-[#33FF58]'
                    >
                        {title}
                    </motion.p>
                )}
            </div>
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>{proficiency}%</p>
                </div>
            </div>
        </div>
    )
}

export default Skill;