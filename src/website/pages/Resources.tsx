import {useRef,useState} from 'react';
import {ArrowRight,ArrowUpRight,GitBranch,Search,X} from 'lucide-react';
import {Button} from '../../components/ui/button';
import {Badge} from '../../components/ui/badge';
import {Input} from '../../components/ui/input';
import {Label} from '../../components/ui/label';
import {Empty,EmptyHeader,EmptyTitle,EmptyDescription,EmptyContent} from '../../components/ui/empty';
import {FilterOptions} from '../components/FilterOptions';
import {links,resources,type Resource} from '../content';
import {iconFor,titles,Intro,SampleNote} from '../components/shared';
import {Select} from '../motion/Select';

// Resources are "files" (MOTION-PLAN §8.5): the card selects its filename on hover or focus, the whole card is the
// "Explore guide" button's hit area, and the guide grows out of the card it was opened from.
function ResourceCard({resource,featured,onOpen}:{resource:Resource;featured:boolean;onOpen:(resource:Resource,origin:DOMRect)=>void}){
 const [over,setOver]=useState(false);const card=useRef<HTMLDivElement>(null);const Icon=iconFor(resource.icon);
 return <div className={`resource-card ${featured?'featured':''}`} onPointerEnter={()=>setOver(true)} onPointerLeave={()=>setOver(false)} onFocus={()=>setOver(true)} onBlur={()=>setOver(false)}><div className="resource-plain" ref={card}>
  <div className="resource-top"><span className="icon-tile"><Icon aria-hidden="true"/></span><Badge variant="secondary">{resource.category}</Badge></div>
  <span className="eyebrow resource-file"><Select mode="hover" trigger="manual" play={over} className="select-strong">{`${resource.id}.md`}</Select> · {resource.type}</span>
  <h2>{resource.title}</h2><p>{resource.description}</p>
  <div className="resource-bottom"><span>{resource.minutes}</span><Button variant="link" className="resource-open" onClick={()=>onOpen(resource,card.current!.getBoundingClientRect())}>Explore guide<ArrowRight size={17} aria-hidden="true"/></Button></div>
 </div></div>}

export function Resources({onOpen}:{onOpen:(resource:Resource,origin:DOMRect)=>void}){const [category,setCategory]=useState('All');const [query,setQuery]=useState('');const list=resources.filter(r=>(category==='All'||r.category===category)&&`${r.title} ${r.description}`.toLowerCase().includes(query.trim().toLowerCase()));return <><Intro path="resources" sub={category==="All"?"":category.toLowerCase()} title={titles.resources}>Guides for getting started, getting unstuck and working out what to try next.</Intro><div className="wrap"><section className="site-section listing-section"><div className="event-tools"><FilterOptions id="resources" label="Resource category" options={['All','Learning','Community','Support']} value={category} onChange={setCategory}/><div className="search-control"><Label htmlFor="resource-search" className="sr-only">Search sample resources</Label><Search size={18} aria-hidden="true"/><Input id="resource-search" placeholder="Find something useful" value={query} onChange={e=>setQuery(e.target.value)}/>{query&&<Button variant="ghost" aria-label="Clear resource search" onClick={()=>setQuery('')}><X size={16}/></Button>}</div></div><div className="list-status"><span role="status">{list.length} resource previews</span><span>Learning at your own pace</span></div><SampleNote>Example material for the prototype. Publication needs a named maintainer and review date.</SampleNote><div className="website-bento">{list.map((resource,i)=><ResourceCard key={resource.id} resource={resource} featured={i===0} onOpen={onOpen}/>)}</div>{!list.length&&<Empty className="site-empty"><EmptyHeader><EmptyTitle>No resources found.</EmptyTitle><EmptyDescription>Try another category or a shorter search.</EmptyDescription></EmptyHeader><EmptyContent><Button variant="outline" onClick={()=>{setCategory('All');setQuery('')}}>Clear filters</Button></EmptyContent></Empty>}<div className="quiet-callout"><GitBranch aria-hidden="true"/><div><h3>Have something useful to share?</h3><p>Suggest a resource, a correction or a small project idea.</p></div><a href={`mailto:${links.email}?subject=Resource%20suggestion`} className="text-link">Send a suggestion<ArrowUpRight size={17} aria-hidden="true"/></a></div></section></div></>}
