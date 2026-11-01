import {useEffect,useRef,useState} from 'react';
import {ArrowRight,ArrowUpRight,Search,X} from 'lucide-react';
import {Button} from '../../components/ui/button';
import {Input} from '../../components/ui/input';
import {Label} from '../../components/ui/label';
import {Empty,EmptyHeader,EmptyTitle,EmptyDescription,EmptyContent} from '../../components/ui/empty';
import {FilterOptions} from '../components/FilterOptions';
import {links,resources,routeParam,type Resource} from '../content';
import {titles,Intro,SampleNote,WindowBar} from '../components/shared';

// Resources are "files" (MOTION-PLAN §8.5, §11.2): a window whose title bar filename is selected on hover or focus, the whole card is the
// "Explore guide" button's hit area, and the guide grows out of the card it was opened from.
function ResourceCard({resource,onOpen}:{resource:Resource;onOpen:(resource:Resource,origin:DOMRect)=>void}){
 const [over,setOver]=useState(false);const card=useRef<HTMLDivElement>(null);
 return <div className="resource-card" onPointerEnter={()=>setOver(true)} onPointerLeave={()=>setOver(false)} onFocus={()=>setOver(true)} onBlur={()=>setOver(false)}><div className="resource-plain" ref={card}>
  <WindowBar name={`${resource.id}.md`} meta={`${resource.category.toLowerCase()} · ${resource.minutes.toLowerCase()}`} selected={over}/>
  <div className="window-body"><h2>{resource.title}</h2><p>{resource.description}</p>
  <div className="resource-bottom"><span className="resource-type">{resource.type}</span><Button variant="link" className="resource-open" onClick={()=>onOpen(resource,card.current!.getBoundingClientRect())}>Explore guide<span className="sr-only">: {resource.title}</span><ArrowRight size={17} aria-hidden="true"/></Button></div></div>
 </div></div>}

// The page's closing call to action (R5): the next file in the grid, not yet written. Same window as a guide card, with a dashed frame,
// a faded "Create a new guide" title and placeholder lines; the whole card is the email link's hit area.
function SuggestCard(){
 const [over,setOver]=useState(false);
 return <div className="resource-card suggest-card" onPointerEnter={()=>setOver(true)} onPointerLeave={()=>setOver(false)} onFocus={()=>setOver(true)} onBlur={()=>setOver(false)}><div className="resource-plain">
  <WindowBar name="untitled.md" meta="new · by you" selected={over}/>
  <div className="window-body"><div className="suggest-draft"><h2 className="suggest-title">Create a new guide<span className="caret" aria-hidden="true"/></h2><span className="suggest-line" aria-hidden="true"/><span className="suggest-line short" aria-hidden="true"/></div>
  <div className="resource-bottom"><span className="resource-type">Know something useful?</span><a className="resource-open suggest-open" href={`mailto:${links.email}?subject=New%20guide`}>Email your idea<ArrowUpRight size={17} aria-hidden="true"/></a></div></div>
 </div></div>}

const categories=['All','Learning','Community','Support'];
// The category comes from the URL (`#resources/learning`), so the Home resource stack can link straight to a filter.
const fromHash=()=>categories.find(c=>c.toLowerCase()===routeParam(location.hash))??'All';
export function Resources({onOpen}:{onOpen:(resource:Resource,origin:DOMRect)=>void}){const [category,setCategory]=useState(fromHash);useEffect(()=>{const sync=()=>setCategory(fromHash());window.addEventListener('hashchange',sync);return()=>window.removeEventListener('hashchange',sync)},[]);
 // replaceState rather than a hash change, so picking a filter doesn't trigger the page wipe or add history entries.
 const choose=(next:string)=>{setCategory(next);history.replaceState(null,'',`#resources${next==='All'?'':`/${next.toLowerCase()}`}`)};const [query,setQuery]=useState('');const list=resources.filter(r=>(category==='All'||r.category===category)&&`${r.title} ${r.description}`.toLowerCase().includes(query.trim().toLowerCase()));return <><Intro path="resources" sub={category==="All"?"":category.toLowerCase()} title={titles.resources}>Guides for getting started, getting unstuck and working out what to try next.</Intro><div className="wrap"><section className="site-section listing-section"><div className="event-tools"><FilterOptions id="resources" label="Resource category" options={categories} value={category} onChange={choose}/><div className="search-control"><Label htmlFor="resource-search" className="sr-only">Search sample resources</Label><Search size={18} aria-hidden="true"/><Input id="resource-search" placeholder="Find something useful" value={query} onChange={e=>setQuery(e.target.value)}/>{query&&<Button variant="ghost" aria-label="Clear resource search" onClick={()=>{setQuery('');document.getElementById('resource-search')?.focus()}}><X size={16}/></Button>}</div></div><div className="list-status"><span role="status">{list.length} resource preview{list.length===1?'':'s'}{category!=='All'&&<span className="sr-only"> in {category}</span>}</span><span>Learning at your own pace</span></div><SampleNote>Example material for the prototype. Publication needs a named maintainer and review date.</SampleNote><div className="website-bento">{list.map(resource=><ResourceCard key={resource.id} resource={resource} onOpen={onOpen}/>)}<SuggestCard/></div>{!list.length&&<Empty className="site-empty"><EmptyHeader><EmptyTitle>No resources found.</EmptyTitle><EmptyDescription>Try another category or a shorter search.</EmptyDescription></EmptyHeader><EmptyContent><Button variant="outline" onClick={()=>{choose('All');setQuery('');document.getElementById('resource-search')?.focus()}}>Clear filters</Button></EmptyContent></Empty>}</section></div></>}
