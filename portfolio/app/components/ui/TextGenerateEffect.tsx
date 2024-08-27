"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  className,
  filter = true,
}: {
  className?: string;
  filter?: boolean;
}) => {
  const [scope, animate] = useAnimate();
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = [
    "Sizzle Africa Marketing Limited",
    "Defining Excellence For You"
  ];

  useEffect(() => {
    const animateText = async () => {
      await animate(
        "span",
        { opacity: 1 },
        { duration: 0.3, delay: stagger(0.15) }
      );

      await new Promise(resolve => setTimeout(resolve, 2000));

      await animate("span", { opacity: 0 }, { duration: 1.5 });

      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    };

    animateText();
  }, [scope.current, currentPhraseIndex]);

  const renderLetters = () => {
    const currentPhrase = phrases[currentPhraseIndex];
    return (
      <motion.div ref={scope}>
        {currentPhrase.split('').map((letter, idx) => (
          <motion.span
            key={idx}
            className={`opacity-0 ${idx > 5 ? 'glowing-text' : 'dark:text-brown text-black'}`}
            style={{
              filter: filter ? "blur(0px)" : "none",
              fontFamily: "'Kepler Std', serif",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: "4rem", 
            }}
            animate={{
              filter: filter ? ["blur(0px)", "blur(3px)", "blur(0px)"] : "none",
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <>
      <style jsx>{`
        @font-face {
          font-family: 'Kepler Std';
          src: url(' href="https://fonts.cdnfonts.com/css/kepler-std-3" rel="stylesheet";                ') format('woff2');
          font-weight: bold;
          font-style: italic;
        }

        .glowing-text {
          color: #69443c;
          text-shadow: 0 0 2px #69443c, 0 0 4px #69443c, 0 0 6px #69443c, 0 0 8px #69443c;
          animation: glow 3s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from {
            text-shadow: 0 0 2px #69443c, 0 0 4px #69443c, 0 0 6px #69443c, 0 0 8px #69443c;
          }
          to {
            text-shadow: 0 0 4px #69443c, 0 0 8px #69443c, 0 0 12px #69443c, 0 0 16px #69443c;
          }
        }
      `}</style>
      <div 
        className={cn("font-bold", className)} 
        style={{
          fontFamily: "'Kepler Std', serif",
          fontStyle: "italic",
          fontWeight: "bold",
        }}
      >
        <div className="my-4">
          <div className="dark:text-white text-black leading-snug tracking-wide">
            {renderLetters()}
          </div>
        </div>
      </div>
    </>
  );
};