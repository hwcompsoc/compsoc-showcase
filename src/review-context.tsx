import {createContext,useContext,type ReactNode} from 'react';
import {components,type PageId} from './catalog';
export type Modal = {type:'event'|'calendar'|'membership'|'resource'|'document'|'feedback';title?:string};
export type ReviewContext={animate:boolean;pointerFine:boolean;replay:number;page:PageId;navigate:(p:PageId)=>void;inspect:boolean;select:(id:string)=>void;open:(m:Modal)=>void;menu:()=>void;accordion:string;setAccordion:(s:string)=>void;filterRequest:number;enhancements:boolean;setEnhancements:(v:boolean)=>void};
export const Context=createContext<ReviewContext>(null!);
export const useReview=()=>useContext(Context);

export function Inspect({id,children,className='',domId}:{id:string;children:ReactNode;className?:string;domId?:string}){
 const r=useReview();const c=components[id];
 return <div id={domId} data-component={id} data-origin={c.sources.join(' + ')} className={`inspectable ${className}`} tabIndex={r.inspect?0:undefined} role={r.inspect?'button':undefined} aria-label={r.inspect?`Inspect ${c.name}`:undefined} onKeyDown={e=>{if(r.inspect&&(e.key==='Enter'||e.key===' ')){e.preventDefault();e.stopPropagation();r.select(id)}}}>{children}</div>
}
