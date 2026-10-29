'use client';

import React from 'react';
import { motion, type Variants } from 'motion/react';

interface StaggerTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'p' | 'span' | 'div';
}

export default function StaggerText({
  text,
  className = '',
  delay = 0.15,
  as: Component = 'p',
}: StaggerTextProps) {
  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Component className={className}>
      <motion.span
        className="inline-flex flex-wrap items-baseline gap-x-[0.25em]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={wordVariants}
            className="inline-block transform-gpu"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
