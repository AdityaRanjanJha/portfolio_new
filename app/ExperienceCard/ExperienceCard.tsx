import React from 'react'

type Props = {}
function ExperienceCard({}: Props) {
  return (
    <article>
        <img
        className='w-86 h-86 rounded-full xl:h-[200px] xl:w-[200px]'
            src="https://github.com/AdityaRanjanJha/portfolio_new/blob/master/public/hacktober.jpeg"
            alt="image not found !!"
        />
    </article>
  )
}

export default ExperienceCard