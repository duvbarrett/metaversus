'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:p1-16 p1-6`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView={}>

      </motion.div>
  </section>
);

export default Hero;
