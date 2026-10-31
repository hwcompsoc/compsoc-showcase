import {type ReactNode} from 'react';
import {ArrowRight,ArrowUpRight,CodeXml,GitBranch,HeartHandshake,Info,Globe} from 'lucide-react';
import {Button} from '../../components/ui/button';
import {type Page} from '../content';
import {Reveal} from '../motion/Reveal';
import {Typed} from '../motion/Typed';

export const asset=(name:string)=>(window as Window & {__WEBSITE_ASSETS__?:Record<string,string>}).__WEBSITE_ASSETS__?.[name]??`./website-assets/${name}`;
export const external={target:'_blank',rel:'noopener noreferrer'} as const;
export const iconFor=(id:string)=>id==='code'?CodeXml:id==='branch'?GitBranch:id==='web'?Globe:HeartHandshake;
export const titles:Record<Page,string>={home:'Find your people.',join:'Join the community.',events:'What’s on',resources:'Guides and resources',about:'Built by students. For students.',partners:'Work with us'};
export function External({href,children,className=''}:{href:string;children:ReactNode;className?:string}){return <a href={href} {...external} className={className}>{children}<ArrowUpRight size={17} aria-hidden="true"/><span className="sr-only"> (opens in a new tab)</span></a>}
export function LinkButton({href,children,secondary=false}:{href:string;children:ReactNode;secondary?:boolean}){return <Button asChild className={secondary?'site-button secondary':'site-button'}><a href={href} {...external}>{children}<ArrowUpRight size={17} aria-hidden="true"/><span className="sr-only"> (opens in a new tab)</span></a></Button>}
// Page intro as a window (MOTION-PLAN §11.1): the title bar types the page's path as the wipe uncovers. `sub` retypes only the end of the path.
// The bar is decoration, so screen readers skip it.
export function Intro({path,sub='',status,title,heading,children}:{path:string;sub?:string;status?:ReactNode;title:string;heading?:ReactNode;children:ReactNode}){return <section className="page-intro"><div className="wrap"><div className="intro-window"><div className="intro-bar" aria-hidden="true"><span className="intro-path"><Typed text={`~/compsoc/${path}`} caret={!sub} speed={.02} delay={.15} trigger="mount"/>{sub&&<Typed key={sub} text={`/${sub}`} speed={.02} trigger="mount"/>}</span>{status&&<span className="intro-status">{status}</span>}</div><div className="intro-body"><Reveal as="h1" trigger="mount" delay={.15} lines={[heading??title]}/><p>{children}</p></div></div></div></section>}
export function SectionHeading({label,title,action}:{label?:string;title:string;action?:ReactNode}){return <div className="section-heading"><div>{label&&<span className="eyebrow">{label}</span>}<Reveal as="h2" lines={[title]}/></div>{action}</div>}
// A heading that rises out of its mask as it scrolls in (MOTION-PLAN §4.6).
export function RevealHeading({children,id,as='h2'}:{children:string;id?:string;as?:'h2'|'h3'}){return <Reveal as={as} id={id} lines={[children]}/>}
export function RouteLink({page,children,className=''}:{page:Page;children:ReactNode;className?:string}){return <a href={`#${page}`} className={`text-link ${className}`}>{children}<ArrowRight size={17} aria-hidden="true"/></a>}
export function SampleNote({children}:{children:ReactNode}){return <p className="sample-note"><Info size={14} aria-hidden="true"/>{children}</p>}
