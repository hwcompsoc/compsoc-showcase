export const guideTasks=[
 {id:'read',title:'Read the review boundaries',file:'README.md',note:'Separate sample interactions from live services.'},
 {id:'sources',title:'Inspect a copied component',file:'src/components/ui/button.tsx',note:'Compare its retained upstream source and provenance.'},
 {id:'tokens',title:'Find the society colours',file:'src/app.css',note:'Keep the blue/cyan palette and readable contrast.'},
 {id:'route',title:'Locate a page composition',file:'src/App.tsx',note:'The six public routes remain the primary tasks.'},
 {id:'motion',title:'Check Static and reduced motion',file:'src/motion-policy.ts',note:'Readable content and controls must remain.'},
 {id:'assessment',title:'Trace a design decision',file:'public/reference/library-assessment.json',note:'Connect the component to its rationale and findings.'},
 {id:'tests',title:'Run the local checks',file:'package.json',note:'npm test checks mappings and source evidence.'},
 {id:'build',title:'Review the portable export',file:'dist/showcase.html',note:'npm run build creates the offline review file.'},
] as const;
export function taskPage(completed:ReadonlySet<string>,unfinished:boolean,page:number,size=3){
 const filtered=guideTasks.filter(t=>!unfinished||!completed.has(t.id));
 const pages=Math.max(1,Math.ceil(filtered.length/size));
 const current=Math.max(0,Math.min(page,pages-1));
 return {items:filtered.slice(current*size,(current+1)*size),total:filtered.length,pages,current};
}
