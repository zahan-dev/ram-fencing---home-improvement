'use client';

import React from 'react';
import { motion, type Variants } from 'motion/react';

interface FlipFadeTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div';
  delay?: number;
}

export default function FlipFadeText({
  text,
  className = '',
  as: Component = 'h2',
  delay = 0,
}: FlipFadeTextProps) {
  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -70,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 18,
        stiffness: 140,
        mass: 0.8,
      },
    },
  };

  const isCenter = className.includes('text-center');

  return (
    <Component className={`${className} ${isCenter ? 'flex justify-center text-center' : ''}`}>
      <motion.span
        className={`inline-flex flex-wrap items-baseline gap-x-[0.3em] perspective-1000 ${
          isCenter ? 'justify-center text-center' : ''
        }`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={wordVariants}
            className="inline-block transform-gpu origin-bottom preserve-3d"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
