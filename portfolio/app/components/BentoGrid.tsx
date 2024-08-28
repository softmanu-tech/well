


'use client'

import animationData from '@/data/confetti.json'
import { cn } from "@/utils/cn";
import { useState } from "react";
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import { GlobeDemo } from "./ui/GridGlobe";
import Lottie from "react-lottie";
import MagicButton from "./ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  videoSrc,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number,
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  videoSrc?: string;
}) => {
  const [copied, setCopied] = useState (false);

  const handleCopy = () => {
    navigator.clipboard.writeText('info@sizzleafrica.co.ke');
    setCopied(true)
  }

  return (
    
    <div
      className={cn (
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black overflow-hidden dark:border-white/[0.2] bg-white border justify-between flex flex-col space-y-4 border-white/[0.1]",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%)'
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && !videoSrc && (
            <img
              src={img}
              alt="img"
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
          {videoSrc && (id === 1 || id === 4 || id === 5) && (
            <video
              src={videoSrc}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt="img"
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation >
            <div className="absolute z-50 flex  text-white font-bold"></div>
          </BackgroundGradientAnimation>
        )}
        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
          <div className="font-sans font-extralight text-purple md:text-xs text-sm lg:text-base z-10 dark:text-neutral-300">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
          
          {id === 2 && (
            <BackgroundGradientAnimation>
              <div className='text-white'></div>

            </BackgroundGradientAnimation>
          )}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {['Create Immersive Experiences', 'Build Brand Loyalty', 
                'Client Satisfaction', 
                'Generate Positive Brand Associations', 'Event Marketing',
              ].map((item) => (
                  <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#242e83]"/>
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                {['Event Design', 'Brand Activation', 'Marketing Campaigns', 'Brand Ambassador', 'Technology Integration', 'Event production'].map((item) => (
                  <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData ,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  }
                }}/>
              </div>
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
};