# HW CompSoc functional React design review

## Vercel deployment

Import this repository with the repository root as the Root Directory. The tracked
`vercel.json` selects Vite, runs `npm run build:vercel`, and serves `dist/website`.
This deploys the visitor website. The required `scripts/export-website.mjs` is
included in Git; the other local review/export scripts remain ignored.

Run `npm run build:vercel` locally to check the deployment build. The separate
`npm run build:website` command still exports to `../compsoc-website` for local review.

## New: visitor-facing local website

Open **../compsoc-website/index.html** for the six-page proof of concept. It prioritizes Discord/social joining, then events and resources, with a clear sponsor route. Exact supplied links and official SVG branding are used; placeholders and local draft behavior are labelled. The earlier review app stays separate. See **WEBSITE.md** for source, build instructions and research traceability, and **qa/website-validation.md** for checks.


## Future-feature implementation pass

Open **dist/future-showcase.html** to go straight to the new Resources walkthrough. It uses the included source project and demonstrates a working checklist, genuine completion progress, unfinished filtering, task pagination, the / search shortcut, a bounded reader with reading position, an expandable file map, literal command instructions and a cancellable build-flow explanation. Static and reduced-motion modes retain usable content and controls.

All **97 original Later records** are reassessed in **public/reference/future-review.json** and **future-review.md**: **28 map to four working review groups; 69 remain deferred** with specific requirements. Open **Implemented upgrades → Future feature reassessment** for the new index, or use the **Future entries reassessed** shortcuts in Site assessment. The original Later decision stays traceable; the status **Future review demonstration** records the new code without implying production approval. Full assessment JSON/CSV/Markdown include the outcome and reason.

Nine genuine component source files and three exact-pinned Radix implementation primitives were added. Source originals, adaptations and hashes are in **reference/future-provenance.json**. No paid source or additional highlighting/theme engine was adopted. See **qa/future-validation.md** for checks and limits. The source registry includes FutureStudy.tsx and its inspector/model files; the motion plan now has 15 entries.


## Site assessment updated after implementation

**dist/library-assessment.html** now reports actual implementation status alongside each original decision. The accepted-record summary shows 23 Integrated, 4 Selectable alternative, 14 Review demonstration and 1 Custom static alternative records, spanning 23 implementation groups. Filter by implementation status or current use; accepted rows have direct Try and Inspect actions. The five library conclusions, technical notes, JSON/CSV exports and Markdown report reflect the completed showcase pass. Original Add/Optional decisions and intended production placement remain for traceability; the retained inventory is still separate. Highlighter's native mark fallback does not count as use of the upstream Magic UI component.

The assessment refresh passes 12 automated tests and both builds. Its new browser interactions were not revalidated in this pass because the local preview connection timed out; earlier showcase validation is recorded separately in qa/upgrades-validation.md.


## Implemented Add / Optional upgrades

Open **dist/showcase.html** for the updated pages, or **dist/implemented-upgrades.html** for the new implementation index. **Implemented upgrades** in the toolbar and **Upgrades** in Reference map all **42 Add/Optional assessment records** to **23 inspectable implementation groups**. Shared APIs such as LazyMotion and its feature-topic row use one implementation.

The pages now use genuine shadcn Alert/Empty states, AspectRatio for event/editorial media, Field validation, Item document rows, neutral Avatar fallbacks, grouped calendar actions, InputGroup search/copy controls, Popover guidance, Dropdown Menu, supplementary Toast feedback, Radio Group/Native Select alternatives, Scroll Area, Collapsible, Separator and a genuine section Marker. Static mode retains interactive controls. New icons have actual text-labelled roles.

**Optional upgrades** compares the optional compositions with the simpler layout. Resources uses Magic UI BentoGrid; the illustrative guide lets you choose plain/dots/grid backgrounds, never multiple textures at once. About includes explicitly neutral role-initial AvatarCircles rather than invented people. The local partnership form lets you compare radio, native-select and existing Select views of the same field; only one is mounted at a time. All draft feedback remains local, and data fields are disabled during the 600ms pending state.

The resource study demonstrates the genuine React Bits Folder using a matte, non-draggable, non-zooming configuration without an intro animation. Its external labelled control and every document row remain visible; Static/reduced motion unmounts Folder and shows a Custom static Lucide alternative. The bounded Motion study demonstrates named variants, local orchestration/LayoutGroup, m.create(Card), useInView, usePageInView and useScopeMotion with one reverse repeat. Unmounting or suppressing motion cancels the scope. These are illustrative review studies, not claims of a real maintained HW guide/project.

Two source findings are explicit: the current shadcn **Marker is a section/group label**, not an inline word highlight. The current Magic UI **Highlighter requires rough-notation**, an additional animation dependency, so the intended static emphasis uses native HTML **mark**, attributed **Custom**. The fetched original is retained for reference; that Magic UI component/engine is not installed. Magic Bento’s upstream arrow icon is adapted to Lucide; AvatarCircles gets descriptive neutral labels and same-page links. Imports are adapted to the selected project aliases/primitives. Exact originals, adaptations and installed hashes are in **reference/enhancement-provenance.json**.

Motion now uses **m + LazyMotion** and shared named page/reveal/pressed variants. The portable HTML deliberately inlines its feature bundle to work offline. **dist/production/index.html** is also built as standard ES modules and emits a separate deferred **motion-features** chunk. **public/reference/motion-build-measurement.json** records actual byte sizes; no offline payload or measured page-speed improvement is claimed. Serve the modular directory over HTTP; use the portable file for double-click review.

The assessment now displays implementation status per accepted record. Complete mappings live in **public/reference/implemented-upgrades.json**. To regenerate metadata after a deliberate source/policy change, run the catalogue generator, assessment generator, `python scripts/record-enhancements.py`, then the assessment generator again to refresh implementation descriptions, followed by `npm test` and `npm run build`. Ordinary builds use the checked-in metadata. The source viewer includes the new installed components, adapters, context and motion modules.

Only the Radix implementation primitives required by the genuine shadcn sources were added as npm dependencies. No new UI framework, alternate icon set, rough-notation, GSAP, Three.js or paid component is installed. Licenses retained from the earlier source packages continue to apply, including the React Bits Commons Clause. See **qa/upgrades-validation.md** for the actual checks and limits.

## New: component-by-component site assessment

Open **dist/library-assessment.html**, or choose **Site assessment** in the review toolbar/Reference tabs. All 3,158 catalogue IDs now have a decision in the requested order: **shadcn/ui → Magic UI → Motion → React Bits → Lucide React**. The original inventory remains a separate unassessed snapshot for provenance; the assessment supplies the decisions.

Each assessment explains technical feasibility, page context, where/how it would be used, the required trigger/conditions, why it fits or does not fit, an alternative, source/version/license/dependency gates, current implementation status and the earlier D-series research/design rationale. Filter by decision and page as well as the original catalogue filters. The library summaries distinguish Keep, Add, Optional, Later, Do not add, Developer only and Reference only. The later implementation pass described above now adds the accepted upgrades and shows their status in this assessment.

Every named standard component has a judgement. Repeated creative families and the icon long tail use explicitly disclosed contextual policies; the Review basis field identifies these. Every Magic UI recipe points to its parent decision. Every icon has a semantic decision and pinned-file availability check. This is not a claim that every source, paid variant or glyph was separately installed, visually tested or audited for accessibility. Publicly named paid collections are assessed at their indexed family level.

Useful findings include five shadcn foundation recommendations (Alert, Aspect Ratio, Empty, Field and Item), centralised Motion variants and a measured production LazyMotion evaluation, and Clock/TriangleAlert where real content needs those meanings. Keep the existing one-pass Magic UI Shine Border and restrained React Bits Spotlight Card. Most additional text, cursor, background, carousel and second-control systems do not help the agreed public tasks. Future project media/counters require real maintained content, not invented society evidence. Keep/Addition counts include overlapping API capabilities, not that many new installs.

The review catches React Native guidance that is not applicable to React DOM, resolves inherited Lucide category metadata, and checks the installed Motion namespaces: **AnimateView is absent from motion/react 14.8.0**. The assessment stage did not install dependencies; the later implementation pass added only the documented shadcn implementation primitives and retained source/license evidence. No paid access was acquired.

Complete files are **public/reference/library-assessment.json**, **library-assessment.csv**, and **library-assessment.md**. The HTML export controls download all entries with full names/source metadata and decisions irrespective of filters. The checked-in JSON stores ID-keyed review records alongside method, summaries and design evidence; the CSV/Markdown are also directly readable without the app. To regenerate after a deliberate catalogue refresh:

```sh
python scripts/build-library-catalogue.py
python scripts/assess-library-catalogue.py
npm test
npm run build
```

The explicit judgement source is scripts/assessment_policy.py; source availability evidence is reference/motion-installed-exports.json. The offline review file is intentionally larger because it embeds the complete catalogue, assessment, imagery and code viewer. This is not a production bundle-size target.

## New: full library catalogue

Open **dist/library-catalogue.html** to enter the new section directly, or select **Library catalogue** in the showcase toolbar or Reference tabs. It is a dated inventory of 3,158 officially documented entries across all five ecosystems, including 2,014 canonical Lucide icons. Counts include components, patterns, API topics, examples, tools and publicly indexed extension collections; they are not counts of standalone installable components.

Search and filter by library, category, type, access and current use. Each entry has a stable reference ID, a description, official source link and current-use label. Download the complete JSON or CSV using the export controls; active filters do not restrict exports. The same files are in public/reference/library-catalogue.json and .csv. All placement, suitability, decision and rationale fields are unassessed/blank, ready for the next review.

The scope panel explains coverage and count differences. It includes every free component named by the retained Magic UI and React Bits indexes and every canonical SVG named by Lucide's retained repository tree. shadcn's current navigation is merged with its index; primitive implementation variants are grouped under their component family. Paid components and publicly named collection families are labelled separately. Unlisted paid variants, unrelated community registries, every prop combination and non-React framework APIs are outside this finite inventory. Current docs may describe APIs or icons newer than the pinned packages. No additional dependency has been installed or adopted.

Official source snapshots, hashes and repository revisions are retained in reference/catalog-sources and the catalogue JSON. Rebuild the inventory from those retained snapshots with `python scripts/build-library-catalogue.py`; ordinary npm builds use the checked-in JSON. A bulk React Bits dependency-metadata download failed, so per-component dependency inspection remains for the adoption review. This does not affect the named component inventory from its successfully retrieved official index.

Open **dist/showcase.html** in a modern browser. This is the working React application in a single self-contained HTML file, including imagery, styles, libraries and source examples. No installation, CDN or server is needed to review it. The same exported HTML was exercised over localhost; the automated preview environment blocks file URLs, so a direct file-protocol launch was not tested there.

## Review controls

- Choose Home, Events, Join, About, Resources or Partners in the review toolbar.
- **Static / Animated** compares the same layout. Static keeps buttons, dialogs, search, forms and navigation functional while suppressing optional motion.
- **Replay** restarts entrance and border effects and resets the current page's temporary demo state.
- **Inspect** highlights selectable regions. Select one to see the exact component API, foundation, motion provider, custom styling and original design decision IDs. Turn it off to use the page normally.
- **Reference** contains the current page's component breakdown, implemented motion proposals, composition examples, actual source files and setup instructions.
- **Motion plan → Play / locate** takes you to the relevant component and describes the interaction needed to trigger it. Hover, focus, scroll and state effects still require their natural triggers.
- **Reduced-motion preview** suppresses optional motion. The operating system's reduced-motion preference always takes precedence; this control cannot override it. The React Bits spotlight also falls back to an ordinary card on coarse pointers.

## Design and scope

The six established page compositions, system typography, spacing, blue/cyan palette and original brand/illustration assets are retained. Custom semantic layout preserves the earlier designs rather than introducing a different navigation pattern. Component metadata links back to the original D-series design decisions. Copies of the earlier design-decision and research traceability records are in public/reference.

Small additions support functional review: event feed states and filtering, resource category/search controls, dialogs explaining membership and document handoffs, and a partnership enquiry draft form. The inline partnership form is a **review-only interaction**, added to test validation and feedback; it is not a proposed launch requirement or a connected submission service.

Event dates, officers, resources, fees, sponsorship and registration data are clearly illustrative or pending. Registration interest and enquiry feedback exist only in current React state and disappear on reload/replay. Nothing is sent or persisted. The illustrative calendar download creates a labelled example .ics file; it does not subscribe to or modify a calendar. Production content, membership checkout, registration, CMS, email delivery and authentication remain future integration work.

## Source project

```sh
npm ci
npm run dev
npm test
npm run build
```

Authored and verified using Node 26.8.2 / npm 11.19.1. package-lock.json pins the dependency graph. The build runs TypeScript, exports the reference manifests, builds the app, and creates the portable HTML. Standard Vite output is also available in dist/index.html with adjacent assets.

- src/App.tsx — six page compositions, interactions, motion wrappers, review toolbar, inspector and reference sheet.
- src/catalog.ts — page-specific component attribution and 15 implemented motion proposals, including triggers, timing and reduced-motion fallbacks.
- src/app.css — brand styling, responsive layouts and motion suppression.
- src/components/ui — copied genuine shadcn/ui New York registry components.
- src/components/magicui/shine-border.tsx — genuine Magic UI ShineBorder.
- src/components/react-bits — genuine React Bits SpotlightCard and its stylesheet.
- reference/component-provenance.json — exact upstream URLs, retained files and hashes.
- reference/upstream — registry responses, copied source and original licenses.
- public/reference — machine-readable component, motion and research/design records.
- qa — responsive measurements, screenshots, calendar export and validation notes.

## Library boundaries and installation

React, Motion and Lucide React are npm dependencies. shadcn/ui, Magic UI and React Bits components are **copied registry/source components**, not invented npm imports. The exact downloaded sources are retained and verified against the installed files by npm test.

The selected shadcn/ui New York components use Radix primitives internally. These are implementation dependencies of those genuine shadcn/ui components; application code does not introduce a second UI system or directly compose Radix components. Class Variance Authority, clsx and tailwind-merge are styling utilities. Vite, TypeScript and Tailwind are build technologies.

Motion provides page/reveal, navigation, hover/press, dialog/sheet content, feedback, accordion and filter/layout transitions. Magic UI provides the one-pass blue/cyan border. React Bits supplies the restrained resource-card pointer/focus spotlight. Lucide React supplies interface icons. Original society logos and illustrations are brand assets. Custom components and native browser features are explicitly attributed as Custom.

The current React Bits license includes the Commons Clause alongside MIT terms; retain the complete upstream license when reusing/distributing it. The other retained component licenses are in reference/upstream. Review those files when carrying the showcase into a separately distributed product.

Official implementation references: [shadcn/ui](https://ui.shadcn.com/docs/components), [Magic UI Shine Border](https://magicui.design/docs/components/shine-border), [React Bits Spotlight Card](https://reactbits.dev/components/spotlight-card), [Motion accessibility](https://motion.dev/docs/react-accessibility), [Lucide React](https://lucide.dev/guide/packages/lucide-react).

## Validation and limits

The production portable export was reviewed in the in-app Chromium browser at desktop, tablet and mobile widths across all six pages. Functional checks include navigation, mobile sheet, event filters/error retry, dialogs, calendar export, resource search and empty state, FAQs, partnership validation/local feedback, inspector attribution, source viewer, motion replay, keyboard spotlight and reduced-motion suppression. See qa/validation.md and qa/responsive-metrics.json.

This is a design review showcase, not a production deployment or a complete accessibility certification. Operating-system preference changes, multiple browser engines, assistive-technology combinations, real service integrations and performance budgets on physical low-power devices were not tested. The portable bundle intentionally includes embedded images and the source viewer, so it is larger than an eventual production page.
