import type {Variants} from 'motion/react';
export const ease=[0.22,1,0.36,1] as const;
export const pageVariants:Variants={hidden:{opacity:0,y:8},visible:{opacity:1,y:0}};
export const revealVariants:Variants={hidden:{opacity:0,y:12},visible:{opacity:1,y:0}};
export const pressVariants:Variants={rest:{scale:1},pressed:{scale:.98}};
export const groupVariants:Variants={hidden:{opacity:1},visible:{opacity:1,transition:{delayChildren:.03,staggerChildren:.04}}};
export const childVariants:Variants={hidden:{opacity:0,y:8},visible:{opacity:1,y:0,transition:{duration:.24}}};
export {loadMotionFeatures} from './feature-loader';
