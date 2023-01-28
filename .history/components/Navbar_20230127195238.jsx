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
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"/{'>'}
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        METAVERSUS
      </h2>
    </div>
  </motion.nav>
);

export default Navbar;
