"use client";
import React from "react"; 


import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/app/components/ui/CanvasRevealEffect";

const Approach= ()=> { 
  return (
    <section className="w-full py-20">
        <h1 className="heading text-black">
        Market Research & <span className="text-purple">Case Studies</span>
        </h1>
      <div className="my-20 py-2 flex flex-col lg:flex-row items-center justify-center  dark:bg-purple w-full gap-4 ">
        <Card title="Exploratory Research" icon={<AceternityIcon order="Phase 1"/>}
            description={`
            Identify the significance of market research for your business
            Define research objectives and questions
            Conduct preliminary competitor analysis
            Explore potential market opportunities
            Gather initial customer insights and pain points
            Review existing literature and secondary data sources
            Develop hypotheses for further investigation
                
                `}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card title="Descriptive Research" icon={<AceternityIcon order="Phase 2"/>}
            description={`
                Design surveys and questionnaires for quantitative data collection
                Conduct in-depth interviews or focus groups for qualitative insights
                Analyze customer communication patterns and preferences
                Measure current market trends and consumer behaviors
                Assess your company's current market position
                Evaluate the competitive landscape in detail
                Collect demographic and psychographic data on target customers

                `}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
             title="Explanatory and Strategic Research" 
                icon={<AceternityIcon  order="Phase 3"/>}
            description={`
                    Analyze collected data to test hypotheses and draw conclusions
                    Identify key factors for staying ahead of competitors
                    Develop strategies for landing new opportunities in the market
                    Create action plans for improved communication with customers
                    Formulate recommendations for product/service improvements
                    Conduct predictive analysis for future market trends
                    Prepare a comprehensive market research report with actionable insights
                `}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
  img
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
  img?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4  h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}

          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 group-hover/canvas-card:-translate-y-2 transition duration-200"
        style={{ color: "#E4ECFF"}}
        
        > 
            {description}</p>

        <img />
      </div>
    </div>
  );
};
const description = [
    
  ];

const AceternityIcon = ({order}:{order:string}) => {
  return (
    <div>
 <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {order}
  </span>
</button>

    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
export default Approach
