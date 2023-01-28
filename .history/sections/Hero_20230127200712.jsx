'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:p1-16 p1-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    />
    <div className="flex justify-center items-center flex-col relative z-10">
      <motion.h1
        variants={textVariant}>
        Metaverse
      </motion.h1>
    </div>
  </section>
);

export default Hero;
