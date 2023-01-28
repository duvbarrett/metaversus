'use client';

import { motion } from 'framer-motion';
// eslint-disable-next-line no-unused-vars
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
  variants={navVariants}
  >
    navbar
  </motion.nav>
);

export default Navbar;
