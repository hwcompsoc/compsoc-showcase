import {domMax} from 'motion/react';
// Portable HTML carries its own code; keep the asynchronous provider lifecycle
// without a file/module request. The modular build uses feature-loader.ts.
export const loadMotionFeatures=()=>Promise.resolve(domMax);
