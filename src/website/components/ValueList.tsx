import {Reveal} from '../motion/Reveal';
import {FlipText} from '../motion/FlipText';

// Numbered big-type list (MOTION-PLAN §9.2), replacing the icon-card grid: pixel number, large title, body alongside.
// Rows reveal as they scroll in: the number flips and the title rises (MOTION-PLAN §8.2).
export function ValueList({items}:{items:{title:string;text:string}[]}){
 return <ol className="value-list">{items.map(({title,text},i)=><li key={title}><span className="value-num" aria-hidden="true"><FlipText value={String(i+1).padStart(2,'0')}/></span><Reveal as="h3" lines={[title]} delay={i*.08}/><p>{text}</p></li>)}</ol>;
}
