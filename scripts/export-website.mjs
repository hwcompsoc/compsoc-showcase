import {readFile,writeFile,readdir,mkdir,copyFile} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const out=path.resolve(root,process.argv[2]??'../compsoc-website');
await mkdir(path.join(out,'licenses'),{recursive:true});
for(const library of ['shadcn','magicui','react-bits'])await copyFile(path.join(root,`reference/upstream/${library}-LICENSE`),path.join(out,'licenses',`${library}-LICENSE.txt`));
// The OFL requires the licence to travel with the embedded Departure Mono font.
await copyFile(path.join(root,'src/website/fonts/DepartureMono-OFL.txt'),path.join(out,'licenses','departure-mono-OFL.txt'));
const dependencyLock=JSON.parse(await readFile(path.join(root,'package-lock.json'),'utf8'));
for(const [relative,metadata] of Object.entries(dependencyLock.packages)){
 if(!relative.startsWith('node_modules/')||metadata.dev)continue;
 const directory=path.join(root,relative);
 for(const name of await readdir(directory).catch(()=>[]))if(/^licen[sc]e(?:\.|$)/i.test(name)){
  const label=relative.replaceAll('node_modules/','').replaceAll('/','__');
  await copyFile(path.join(directory,name),path.join(out,'licenses',label+'__'+name)).catch(()=>{});
 }
}
await writeFile(path.join(out,'THIRD-PARTY-NOTICES.md'),'# Retained licenses\n\nThe licenses folder retains the genuine shadcn/ui, Magic UI and React Bits source licenses, including React Bits’ Commons Clause, and available runtime dependency license files from the pinned project. The visitor site embeds the Departure Mono typeface v1.500 (© 2022–2024 Helena Zhang), licensed under the SIL Open Font License 1.1 (licenses/departure-mono-OFL.txt). The dependency collection is broader than the visitor bundle because this project also builds the separate design review. Branding is from the user-supplied official asset library. No license to unseen paid components is implied.\n');
// The logo is drawn inline (components/Logo.tsx), so its SVG files are not embedded.
const names=['cursor-blue.svg','cursor-white.svg','cursor-blue-small.svg','cursor-white-small.svg','pointer-blue-small.svg','pointer-white-small.svg','pointer-blue-active-small.svg','pointer-white-active-small.svg','text-cursor-blue-small.svg','text-cursor-white-small.svg','text-cursor-blue-active-small.svg','text-cursor-white-active-small.svg'];
const assets={};
await mkdir(path.join(out,'website-assets'),{recursive:true});
for(const name of names){const original=path.join(root,'public/website-assets',name);assets[name]=`data:image/svg+xml;base64,${(await readFile(original)).toString('base64')}`;await copyFile(original,path.join(out,'website-assets',name));}
const cssNames=(await readdir(path.join(out,'assets'))).filter(name=>name.endsWith('.css'));
const css=(await Promise.all(cssNames.map(name=>readFile(path.join(out,'assets',name),'utf8')))).join('\n');
const js=await readFile(path.join(out,'assets/website.js'),'utf8');new Function(js);
const safe=text=>text.replaceAll('</script','<\\/script');
const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><script>(function(){var c;try{c=localStorage.getItem('hwcs-theme')}catch(e){}document.documentElement.dataset.theme=c==='dark'||(c!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light'})()</script><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Find your people at HW CompSoc. Join the Discord, explore events and learn together."><title>HW CompSoc — Find your people.</title><link rel="icon" href="${assets['cursor-blue.svg']}"><style>${css.replaceAll('</style','<\\/style')}</style></head><body><div id="root"></div><script>window.__WEBSITE_ASSETS__=${safe(JSON.stringify(assets))};</script><script>${safe(js)}</script></body></html>`;
await writeFile(path.join(out,'index.html'),html);
await writeFile(path.join(out,'README.md'),`# HW CompSoc local website proof of concept\n\nOpen index.html in a modern browser. It is self-contained: no install, CDN or server is needed. Extract the ZIP first if using the downloadable package.\n\nSix pages: Home, Join, Events, Resources, About, Partners. Discord, Instagram, Union membership and the official email use the supplied destinations. The official SVG assets are embedded unchanged. Page navigation, mobile menu, filtering, event/guide dialogs, personal guide checklists, example calendar exports and partnership enquiry previews work locally.\n\nSample events, roles, resources and partnership content are labelled. No live bookings, uploads, membership payments or form submissions are connected. The enquiry can open your email app with a draft only when you choose that action. External community links open in a new tab. Motion respects the operating system preference; add ?motion=off before a #page fragment for a static comparison.\n\nThe source remains in ../compsoc-showcase/src/website with shared genuine components and retained licenses/provenance. Build from that project with npm run build:website. The assessment and technical demonstrations remain in ../compsoc-showcase/dist, separate from this visitor experience. See that project's qa/website-validation.md for checks and limits.\n`);
console.log(`Local website: ${path.join(out,'index.html')} (${Math.round(Buffer.byteLength(html)/1024)} KiB, assets embedded).`);
