import {useEffect,useState} from 'react';
import {flip} from '../motion';
import {useMotionLevel,useTrigger,type Trigger} from './level';

const pools={digit:'0123456789',letter:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'};
const pick=(pool:string)=>pool[Math.floor(Math.random()*pool.length)];
const scramble=(ch:string)=>/\d/.test(ch)?pick(pools.digit):/[a-z]/i.test(ch)?pick(pools.letter):ch;

// Departures-board flip (MOTION-PLAN §8.4): characters cycle through look-alikes and settle left to right.
// Plays when triggered and again whenever `value` or `replay` changes. Screen readers only get the real value.
export function FlipText({value,replay,trigger='inView',play=true,className=''}:{value:string;replay?:unknown;trigger?:Trigger;play?:boolean;className?:string}){
 const level=useMotionLevel();const {ref,active}=useTrigger<HTMLSpanElement>(trigger,play);const [shown,setShown]=useState(value);
 useEffect(()=>{if(level!=='full'||!active){setShown(value);return}
  let tick=0;const total=flip.frames+value.length;
  const timer=setInterval(()=>{tick++;setShown([...value].map((ch,i)=>tick>=flip.frames+i?ch:scramble(ch)).join(''));if(tick>=total)clearInterval(timer)},flip.frame*1000);
  return()=>clearInterval(timer)},[value,replay,active,level]);
 return <span ref={ref} className={`flip ${className}`}><span className="sr-only">{value}</span><span aria-hidden="true">{shown}</span></span>;
}
