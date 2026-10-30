import coverage from '../public/reference/implemented-upgrades.json' with {type:'json'};
import type {ComponentRecord,PageId} from './catalog';
const api:Record<string,string>={
 'upgrade-media':'shadcn/ui AspectRatio', 'upgrade-alert':'shadcn/ui Alert, AlertTitle, AlertDescription + Lucide TriangleAlert',
 'upgrade-empty':'shadcn/ui Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent',
 'upgrade-field':'shadcn/ui Field, FieldLabel, FieldError, FieldSet, Spinner + Lucide Handshake + Motion busy rotation',
 'upgrade-item':'shadcn/ui ItemGroup, Item, ItemMedia, ItemTitle, ItemDescription, ItemActions',
 'upgrade-avatar':'shadcn/ui Avatar, AvatarFallback',
 'upgrade-calendar':'shadcn/ui ButtonGroup, InputGroup, Popover, DropdownMenu, Toast; Lucide Link, Copy',
 'upgrade-input-group':'shadcn/ui InputGroup, InputGroupInput, InputGroupAddon, InputGroupButton, Tooltip',
 'upgrade-radio':'shadcn/ui RadioGroup, RadioGroupItem, FieldLabel', 'upgrade-native':'shadcn/ui NativeSelect, NativeSelectOption',
 'upgrade-marker':'shadcn/ui Marker, MarkerIcon, MarkerContent + Lucide CodeXml', 'upgrade-scroll':'shadcn/ui ScrollArea',
 'upgrade-collapsible':'shadcn/ui Collapsible, CollapsibleTrigger, CollapsibleContent', 'upgrade-separator':'shadcn/ui Separator',
 'upgrade-avatar-circles':'Magic UI AvatarCircles with neutral role-initial data SVGs', 'upgrade-bento':'Magic UI BentoGrid + shadcn/ui Card content',
 'upgrade-pattern':'Magic UI DotPattern({glow:false}) / GridPattern; shadcn NativeSelect comparison',
 'upgrade-highlight':'Custom native HTML mark; static alternative, not Magic UI Highlighter',
 'upgrade-lazy':'Motion LazyMotion + m; asynchronous domMax feature loader',
 'upgrade-variants':'Motion Variants for page, reveal and pressed states',
 'upgrade-motion-scope':'Motion m.create(Card), named variants, LayoutGroup, useInView, usePageInView, useScopeMotion, scoped animate keyframes and one reverse repeat',
 'upgrade-folder':'React Bits Folder({variant:"matte",draggable:false,intro:false}) + Custom static Lucide Folder fallback',
 'upgrade-icons':'Lucide Clock, Folder, CodeXml, Link, Handshake, TriangleAlert',
};
const names:Record<string,string>={
 'upgrade-media':'Reserved editorial media ratio','upgrade-alert':'Persistent warning / failure alert','upgrade-empty':'Honest empty and no-match state',
 'upgrade-field':'Labelled and validated local enquiry fields','upgrade-item':'Document / resource metadata rows','upgrade-avatar':'Neutral committee-role avatar',
 'upgrade-calendar':'Calendar utility group, menus and copy feedback','upgrade-input-group':'Search field group and clear tooltip','upgrade-radio':'Visible single-choice form options',
 'upgrade-native':'Native select alternative','upgrade-marker':'Guide section / group marker','upgrade-scroll':'Bounded illustrative guide reader','upgrade-collapsible':'Supplementary review metadata disclosure',
 'upgrade-separator':'Resource group separator','upgrade-avatar-circles':'Neutral role summary circles','upgrade-bento':'Responsive resource bento layout','upgrade-pattern':'Mutually exclusive static background comparison',
 'upgrade-highlight':'Static text emphasis (Custom alternative)','upgrade-lazy':'Shared lightweight Motion feature loading','upgrade-variants':'Shared named animation states',
 'upgrade-motion-scope':'Bounded, visibility-aware project sequence study','upgrade-folder':'Supplementary folder illustration with visible external controls','upgrade-icons':'Additional meaningful interface icons',
};
const pages:PageId[]=['home','events','join','about','resources','partners'];
export const enhancementComponents:Record<string,ComponentRecord>={};
for(const id of new Set(coverage.entries.map(e=>e.inspectId))){
 const rows=coverage.entries.filter(e=>e.inspectId===id);
 const sources:ComponentRecord['sources']=id==='upgrade-highlight'?['Custom']:['upgrade-media','upgrade-avatar','upgrade-scroll','upgrade-separator'].includes(id)?['shadcn/ui']:id==='upgrade-motion-scope'?['Motion','shadcn/ui','Custom']:id==='upgrade-field'?['shadcn/ui','Motion','Lucide React']:id==='upgrade-folder'?['React Bits','Custom','Lucide React','shadcn/ui']:id==='upgrade-pattern'||id==='upgrade-bento'?['Magic UI','shadcn/ui']:id==='upgrade-avatar-circles'?['Magic UI','Custom']:id==='upgrade-lazy'||id==='upgrade-variants'?['Motion']:id==='upgrade-icons'?['Lucide React']:['shadcn/ui','Lucide React'];
 enhancementComponents[id]={name:names[id],sources,api:api[id],purpose:rows.map(e=>e.name).join(' / ')+'. Implements the accepted Add/Optional assessment with the stated content boundaries.',customisation:rows.map(e=>e.tryIt).join(' '),animation:id==='upgrade-motion-scope'?['M12']:id==='upgrade-folder'?['M13']:id==='upgrade-field'?['M07']:[],file:id==='upgrade-lazy'?'src/App.tsx · src/motion-features.ts':id==='upgrade-variants'?'src/motion-policy.ts':'src/Enhancements.tsx · reference/enhancement-provenance.json',docs:id==='upgrade-highlight'?'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark':rows[0].docs,snippet:id==='upgrade-media'?'<AspectRatio ratio={3 / 2}>\n  <img src={image} alt={description} />\n</AspectRatio>':id==='upgrade-lazy'?'<LazyMotion features={loadMotionFeatures} strict>\n  <m.main variants={pageVariants} />\n</LazyMotion>':id==='upgrade-highlight'?'<mark>owner and reviewed date</mark>':id==='upgrade-motion-scope'?'const scope = useScopeMotion(ref, setup, { deps: [enabled] });\nscope.current?.run(() => animate(".study-signal",\n  {x: [0, 24, 48]}, {duration: 0.65, repeat: 1, repeatType: "reverse"}));':`// Actual API: ${api[id]}\n// See src/Enhancements.tsx and the installed sources in Code & setup.`,decisions:[...new Set(rows.flatMap(e=>e.designDecisions))]};
}
export const enhancementPages:Record<PageId,string[]>={
 home:['upgrade-media','upgrade-lazy','upgrade-variants'],
 events:['upgrade-media','upgrade-alert','upgrade-empty','upgrade-calendar','upgrade-icons','upgrade-lazy','upgrade-variants'],
 join:['upgrade-lazy','upgrade-variants'],
 about:['upgrade-avatar','upgrade-avatar-circles','upgrade-item','upgrade-icons','upgrade-lazy','upgrade-variants'],
 resources:['upgrade-empty','upgrade-input-group','upgrade-bento','upgrade-pattern','upgrade-marker','upgrade-highlight','upgrade-scroll','upgrade-collapsible','upgrade-separator','upgrade-folder','upgrade-item','upgrade-motion-scope','upgrade-icons','upgrade-lazy','upgrade-variants'],
 partners:['upgrade-field','upgrade-radio','upgrade-native','upgrade-icons','upgrade-lazy','upgrade-variants'],
};
