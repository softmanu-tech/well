import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import {  testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-15' id='testimonials'>
        <h1 className='heading  text-purple' color='text-black'>
            Kind words from { ' '}
            <span className='text-black'> 
                satisfied clients

            </span>

        </h1>
        <div className='flex flex-col  items-center max-lg:mt-10'>

            
            <InfiniteMovingCards 

                items={testimonials}
                direction='right'
                speed="slow"


            />
  
            
         </div>
    </div>
  )
}

export default Clients
