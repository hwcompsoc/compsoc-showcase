import {useRef,useState} from 'react';
import {Camera,Check,Copy,Info,MessageCircle} from 'lucide-react';
import {Button} from '../../components/ui/button';
import {Popover,PopoverTrigger,PopoverContent} from '../../components/ui/popover';
import {links,pages} from '../content';
import {LinkButton,RevealHeading,RouteLink} from './shared';
import {m} from 'motion/react';
import {usePointerLean} from '../motion/usePointerLean';
import {PixelBuild} from '../motion/PixelBuild';
import {Typed} from '../motion/Typed';
import {Logo} from './Logo';

// The page's last screen: a clear closing action, contact in one line, then a quiet row of logo, tagline and links
// (the full nav already lives in the header). The logo leans toward the mouse; "Email copied" types out (MOTION-PLAN §8.8).
export function Footer(){const logo=useRef<HTMLSpanElement>(null);const lean=usePointerLean(logo,true,{distance:4,angle:2});const [copied,setCopied]=useState(false);const [copyError,setCopyError]=useState(false);async function copy(){try{await navigator.clipboard.writeText(links.email);setCopied(true);setCopyError(false)}catch{setCopyError(true)}}
 return <footer className="site-footer"><div className="wrap">
  <section className="footer-cta" aria-labelledby="footer-cta-title"><div><RevealHeading id="footer-cta-title">Come and say hello.</RevealHeading><p>The quickest way in is the Discord.</p></div><div className="footer-actions"><LinkButton href={links.discord}><MessageCircle aria-hidden="true"/>Join the Discord</LinkButton><LinkButton href={links.instagram} secondary><Camera aria-hidden="true"/>Follow @hwcompsoc</LinkButton></div></section>
  <div className="footer-contact"><a className="email-link" href={`mailto:${links.email}`}>{links.email}</a><Button variant="ghost" onClick={copy} className="footer-copy">{copied?<Check aria-hidden="true"/>:<Copy aria-hidden="true"/>}<Typed key={String(copied)} text={copied?'Email copied':'Copy email address'} caret={false} trigger="mount" instant={!copied}/></Button><p role="status" className="footer-status">{copyError?'Copy is unavailable here. Select the address or open your email app.':copied?'Copied to your clipboard.':''}</p><p className="footer-partners">Thinking about supporting the society? <RouteLink page="partners">Let’s talk partnerships</RouteLink></p></div>
  <div className="footer-meta"><a href="#home" aria-label="HW CompSoc home" className="logo-link"><m.span ref={logo} style={lean.style} className="footer-logo-lean"><Logo tone="white" align="left" className="footer-logo"/></m.span></a><p className="footer-tagline">Computing. Community.<br/>A place to find your people.</p><nav className="footer-nav" aria-label="Footer navigation">{pages.filter(p=>p.id!=='home').map(p=><a key={p.id} href={`#${p.id}`}>{p.name}</a>)}</nav></div>
  <div className="footer-bottom"><span className="footer-legal"><span>Heriot-Watt Computer Science Society</span><span className="footer-sep" aria-hidden="true"> · </span><span>Local prototype</span></span><Popover><PopoverTrigger asChild><Button variant="ghost"><Info size={14} aria-hidden="true"/>About this prototype</Button></PopoverTrigger><PopoverContent className="website-popover"><PixelBuild trigger="mount" cols={6} rows={4} duration={.3}><h3>What’s real, what’s a preview.</h3><p>The branding, Discord, Instagram, Union destination and society email are supplied or confirmed links. Events, roles, guides and partnership content are samples. Enquiry drafts stay on this page. No live booking or form service is connected.</p></PixelBuild></PopoverContent></Popover></div>
 </div></footer>}
