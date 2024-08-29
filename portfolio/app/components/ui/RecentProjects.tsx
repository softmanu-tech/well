
import { projects } from '@/data'
import React from 'react'
import PinContainer from './PinContainer'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
      <h1 className='heading text-black'>
        {' '}
        <span className='text-purple'> Recent Events </span>
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 justify-center items-center p-4 gap-x-4 gap-y-8 sm:gap-y-4 lg:gap-x-6 xl:gap-x-8 mt-10'>
        {projects.map(({id, title, des, img, iconLists, link}) => (
          <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
            <PinContainer title={title} href={link}>
              <div className='relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-t-3xl'>
                <img src='/bg.png' alt="bg-img" className='absolute inset-0 w-full h-full object-cover' />
                <img src={img} alt={title} className='absolute bottom-0 left-1/2 transform -translate-x-1/2 max-h-full w-auto object-contain' />
              </div>
              <div className='p-4 sm:p-6'>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>
                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mt-2'>
                  {des}
                </p>
                <div className='flex items-center justify-between mt-7 mb-3'>
                  <div className='flex items-center'>
                    {iconLists.map((icon, index) => (
                      <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:h-10 lg:w-10 w-8 h-8 flex justify-center items-center'
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <img src={icon} alt={icon} className="p-2 w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>
                  <div className='flex justify-center items-center'>
                    <p className='flex lg:text-xl md:text-xs sm:text-base mr-2 text-sm text-black'>
                      Check Live Site
                    </p>
                    <FaLocationArrow className='ms-3' color='#CBACF9' />
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects