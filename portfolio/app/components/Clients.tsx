import React from 'react'
import { SequentialAppearingCards } from './ui/SequentialAppearingCards'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8' id='testimonials'>
      <h1 className='heading text-purple text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 md:mb-10'>
        Testimonials{' '}
        <span className='text-black'>
          
        </span>
      </h1>
      <div className='w-full'>
        <SequentialAppearingCards 
          items={testimonials}
        />
      </div>
    </div>
  )
}

export default Clients