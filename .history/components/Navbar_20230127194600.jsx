'use client';

import { motion } from 'framer-motion';
// eslint-disable-next-line no-unused-vars
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth}`}
  </motion.nav>
);

export default Navbar;
