import {FutureReview} from './FutureReview';
import coverage from '../public/reference/implemented-upgrades.json';
import {useReview} from './review-context';
import {Button} from './components/ui/button';
import {Badge} from './components/ui/badge';
import {ArrowRight,CodeXml} from 'lucide-react';
import type {PageId} from './catalog';
export function ImplementedUpgrades({onClose}:{onClose:()=>void}){
 const r=useReview();function locate(e:typeof coverage.entries[number]){r.setEnhancements(true);onClose();r.navigate(e.page as PageId);setTimeout(()=>document.getElementById(e.target)?.scrollIntoView({behavior:'instant',block:'start'}),180)}
 return <section className="implemented-upgrades"><span className="eyebrow">Implementation / {coverage.updated}</span><h3>Try the accepted upgrades.</h3><Button variant="outline" onClick={()=>document.getElementById("future-review")?.scrollIntoView({block:"start",behavior:"instant"})}>Future feature reassessment</Button><p>All {coverage.entries.length} Add/Optional catalogue records are mapped below. Shared API/topic rows point to the same implementation. Static mode keeps controls functional and suppresses optional motion.</p><p>Use <b>Optional upgrades</b> in the toolbar to compare the optional compositions. Input controls and backgrounds are alternatives, not duplicated form fields or stacked effects.</p><details><summary>Content and source boundaries</summary><ul>{coverage.exceptions.map(s=><li key={s}>{s}</li>)}</ul></details>{coverage.entries.map(e=><article key={e.assessmentId} className="implemented-entry"><div><span className="eyebrow">{e.library} · {e.decision}</span><Badge variant="secondary">{e.status}</Badge></div><h4>{e.name}</h4><p>{e.tryIt}</p><p className="micro">{e.assessmentId} · {e.designDecisions.join(' · ')}</p><div className="implemented-actions"><Button variant="outline" onClick={()=>locate(e)}>Try on {e.page}<ArrowRight size={14} aria-hidden="true"/></Button><Button variant="outline" onClick={()=>r.select(e.inspectId)}>Inspect implementation<CodeXml size={14} aria-hidden="true"/></Button></div></article>)}<FutureReview onClose={onClose}/></section>
}
