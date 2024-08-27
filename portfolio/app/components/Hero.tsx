import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { TextGenerate } from './ui/TextGenerate'


const Hero = () => {
  return (
    <div className='pb-20 pt-36 relative'>
      {/* Spotlight components remain unchanged */}
      <div>
        <div className="h-screen w-full dark:bg-purple bg-purple dark:bg-grid-brown/[0.2] bg-grid-black/[0.3] flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-purple bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
        </div>
        <div className='flex flex-col items-center relative my-20 z-10'>
          {/* SVG Logo */}
          <div className='mb-8 bg-white p-4 rounded-full'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    version="1.1" 
                    width="150" 
                    height="65" 
                    viewBox="0 0 300 131"
                    style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "crisp-edges", fillRule: "evenodd", clipRule: "evenodd"}}
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <g><path style={{opacity:1}} fill="#fdfdfd" d="M -0.5,-0.5 C 99.5,-0.5 199.5,-0.5 299.5,-0.5C 299.5,43.1667 299.5,86.8333 299.5,130.5C 199.5,130.5 99.5,130.5 -0.5,130.5C -0.5,86.8333 -0.5,43.1667 -0.5,-0.5 Z"/></g>
                    <g><path style={{opacity:1}} fill="#13026e" d="M 89.5,2.5 C 103.464,0.395995 113.297,5.72933 119,18.5C 120.687,39.146 111.187,48.9793 90.5,48C 81.5348,44.868 75.8681,38.7013 73.5,29.5C 55.6995,26.434 44.5328,33.7673 40,51.5C 37.521,70.7199 45.3543,83.5533 63.5,90C 80.9271,92.2026 95.4271,86.7026 107,73.5C 117.24,61.3499 127.24,49.0166 137,36.5C 148.688,22.905 163.188,13.7383 180.5,9C 183.167,8.33333 185.833,8.33333 188.5,9C 177.495,15.0053 167.995,22.8386 160,32.5C 149.603,48.5694 139.603,64.9027 130,81.5C 113.335,107.916 89.5019,119.416 58.5,116C 34.2356,109.07 19.7356,93.2371 15,68.5C 12.1371,44.7394 20.3037,25.9061 39.5,12C 52.5319,4.3075 66.3652,2.47417 81,6.5C 84.2146,5.80763 87.0479,4.47429 89.5,2.5 Z"/></g>
                    <g><path style={{opacity:1}} fill="#6a453e" d="M 219.5,9.5 C 253.326,8.51909 274.826,24.1858 284,56.5C 286.977,79.3515 279.81,98.1849 262.5,113C 248.735,121.82 233.902,124.32 218,120.5C 214.822,121.45 211.656,122.617 208.5,124C 191.368,126.028 181.702,118.528 179.5,101.5C 180.012,90.1491 185.679,82.6491 196.5,79C 211.984,77.0629 221.651,83.5629 225.5,98.5C 243.751,100.419 254.918,92.4185 259,74.5C 261.232,55.1165 253.065,42.6165 234.5,37C 225.023,35.4165 216.023,36.7498 207.5,41C 203.656,43.422 199.99,46.0887 196.5,49C 184.29,62.8744 172.457,77.041 161,91.5C 152.346,101.074 142.179,108.574 130.5,114C 124.041,116.617 117.374,117.95 110.5,118C 121.505,111.995 131.005,104.161 139,94.5C 150.168,77.5012 160.835,60.1678 171,42.5C 182.944,25.1244 199.111,14.1244 219.5,9.5 Z"/></g>
                </svg>
            </div>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />
            <TextGenerate
              className="text-center md:tracking-wider text-brown mb-4 text-sm md:text-lg lg:text-xl"
              words="Leading provider of innovative marketing solutions and corporate branding. Our integrated, cutting-edge strategies are designed to help clients achieve their goals, maximize efficiency, boost ROI, and enhance brand competence. With over a decade of experience in the corporate world, our team of marketing experts possesses the passion, skills, and creativity to develop specialized strategies that promote brand success. From comprehensive branding and messaging to targeted paid media and SEO, we are fully equipped to elevate your marketing efforts and help you reach your goals."
            />
            <a href="#about">
              <MagicButton 
                title="Show Our Work"
                icon={<FaLocationArrow />}
                position='right'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero