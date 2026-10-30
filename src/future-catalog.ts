import coverage from '../public/reference/future-review.json' with {type:'json'};
import type {ComponentRecord} from './catalog';
const definitions:Record<string,{name:string;sources:ComponentRecord['sources'];api:string;animation:string[]}>= {
 'future-checklist':{name:'Source-project checklist and task navigation',sources:['shadcn/ui','Lucide React','Custom'],api:'Kbd, Table, Checkbox, Toggle, Progress, Pagination; actual local completion and filtering',animation:[]},
 'future-reader':{name:'Bounded walkthrough reading position',sources:['Magic UI','Motion','Custom'],api:'Adapted ScrollProgress; useScroll, useSpring, useTransform, useMotionTemplate, useMotionValueEvent; native progress fallback',animation:['M14']},
 'future-source':{name:'Actual source map and literal command instructions',sources:['Magic UI','shadcn/ui','Lucide React','Custom'],api:'Tree, Folder, File; Terminal with sequence=false and static children; Toggle line wrapping',animation:[]},
 'future-diagram':{name:'Cancellable source-to-export explanation',sources:['Motion','Lucide React','Custom'],api:'useAnimate, m.path / SVG pathLength and m.circle / cx; useInView and usePageInView gating',animation:['M15']},
};
export const futureComponents:Record<string,ComponentRecord>={};
for(const [id,definition] of Object.entries(definitions)){
 const entries=coverage.entries.filter(e=>e.inspectId===id);
 futureComponents[id]={...definition,purpose:'Local review demonstration of selected original Later entries; no society service/content approval is implied.',customisation:entries[0].reason,file:'src/FutureStudy.tsx · src/future-model.ts · reference/future-provenance.json',docs:entries[0].docs,snippet:`// ${definition.api}\n// Actual consumer: src/FutureStudy.tsx. Source evidence: reference/future-provenance.json.`,decisions:[...new Set(entries.flatMap(e=>e.designDecisions))]};
}
