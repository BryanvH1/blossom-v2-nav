// Shared by the phone and desktop mockups: areas, roles, log types, Today screens
const I = {
  today:'<path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  beds:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 4v16"/>',
  apply:'<path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/>',
  water:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  harvest:'<path d="M4 10h16l-1.5 9h-13z"/><path d="M8 10l2-5M16 10l-2-5"/>',
  shop:'<path d="M14.7 6.3a4 4 0 0 0 5 5L13 18a2.1 2.1 0 0 1-3-3l6.7-6.7z"/><path d="M4 20l4-4"/>',
  reports:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  map:'<path d="M9 4l6 2 6-2v14l-6 2-6-2-6 2V6z"/><path d="M9 4v14M15 6v14"/>',
  jobs:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9zM9 12l2 2 4-4"/>',
  machines:'<circle cx="7" cy="17" r="3"/><circle cx="18" cy="17" r="2"/><path d="M4 14V8h7l3 6h6M11 8V5"/>',
  orders:'<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/>',
  people:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 11a3 3 0 1 0 0-6M21 20c0-2.5-1.5-4.6-3.6-5.5"/>',
  more:'<path d="M4 7h16M4 12h16M4 17h16"/>'
};
const svg = (k, sw=2) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${I[k]}</svg>`;

// k: '' as John, 'renamed' (was), 'bryan' (placed by Sep 21 proposal)
const AREAS = [
  {id:'today', label:'Today', cap:'Run the day', why:'The home, plus the pages for running the day. Calendar and Weather were top-level in the Sep 21 proposal.', pages:[
    {n:'Today', r:'/dashboard', was:'Dashboard', k:'renamed', d:'Headline, Needs you, Hero, Today, Since you last looked.'},
    {n:'Work orders', r:'/management', was:'Management', k:'renamed', d:'Every order, by day and crew.'},
    {n:'My jobs', r:'/applications · /jobs', k:'', d:'Orders assigned to me, start to finish.'},
    {n:'Calendar', r:'/calendar', k:'', d:'Everything scheduled across all areas.'},
    {n:'Weather', r:'/weather', k:'', d:'Tabs: Forecast, Frost. Spray windows from wind.'}]},
  {id:'beds', label:'Beds', cap:'The beds and how the crop is doing', why:'Scouting and tests move here from the retired Crop area. Varieties stay with Beds as in the Sep 21 proposal.', pages:[
    {n:'Beds', r:'/beds', k:'', d:'Tabs: Beds, Blocks, Units, Varieties.'},
    {n:'Map', r:'/map', k:'bryan', d:'Tap a bed on the ground to open it. A chip here, not a tab, for run-the-farm roles.'},
    {n:'Scouting', r:'/scoutingReports', k:'', d:'Tabs: Reports, Trends, Traps, Pests list.'},
    {n:'Soil and tissue tests', r:'/soilTests · /tissueTests', was:'Tests', k:'renamed', d:'By list or periodic table.'},
    {n:'Sanding and pruning', r:'/sanding', was:'Vines', k:'renamed', d:'Sanding, pruning and mowing by bed.'}]},
  {id:'apply', label:'Apply', cap:'Spray and fertilizer, order to record', why:'Applications only. Chemigation is logged once and appears here and in Water.', pages:[
    {n:'Records', r:'/applicationLedger', was:'Applications', k:'renamed', d:'Tabs: All, Spray, Fertilizer.'},
    {n:'Spray report', r:'/purUpload', was:'PUR transfer', k:'renamed', d:'Only where a handler takes one.'},
    {n:'Applicators', r:'/applicators', k:'', d:'Who may spray, and when licenses expire.'},
    {n:'Products and limits', r:'/settings/reference/products', k:'', d:'Out of Settings ▸ Reference.'}]},
  {id:'water', label:'Water', cap:'Irrigation, frost, floods and pumps', why:'Every water event stays here.', pages:[
    {n:'Water events', r:'/water', k:'', d:'Sprinkler, flood and pump runs. Chemigation also shows in Apply.'},
    {n:'Pumps', r:'/pumps', k:'', d:'Pump list with meter readings.'},
    {n:'Sprinkler lines', r:'/water/sprinklers', k:'', d:'Sets and the beds they cover.'},
    {n:'Rainfall', r:'/water/rainfall', k:'', d:'Rain gauge log.'}]},
  {id:'harvest', label:'Harvest', cap:'Bring the crop in', why:'Unchanged apart from names.', pages:[
    {n:'Progress', r:'/harvest', was:'Harvest dashboard', k:'renamed', d:'Percent harvested and barrels to date.'},
    {n:'Deliveries', r:'/deliveries', k:'', d:'Loads from your handler, with quality.'},
    {n:'Yields', r:'/manualYield', k:'', d:'Barrels per bed, entered by hand.'}]},
  {id:'shop', label:'Shop', cap:'Keep the machines running', why:'Was Equipment in the Sep 21 proposal.', pages:[
    {n:'Maintenance', r:'/maintenance', k:'', d:'Tabs: Orders and service, Service due.'},
    {n:'Machines', r:'/equipment', was:'Equipment', k:'renamed', d:'Tabs: Machines, Groups.'},
    {n:'Mechanics', r:'/mechanics', k:'', d:'Mechanics roster.'}]},
  {id:'reports', label:'Reports', cap:'Report and export', why:'Was Data in the Sep 21 proposal. The spray report stays in Apply.', pages:[
    {n:'Reports', r:'/reports', k:'', d:'Printable and exportable reports.'},
    {n:'Charts', r:'/dashboard/data', was:'Data dashboard', k:'renamed', d:'Yield by year, barrels per acre by variety.'}]}
];
const A = Object.fromEntries(AREAS.map(a => [a.id, a]));

const LOGS = {
  scout:['Scouting report','Sweep counts by bed'],
  apply:['Application','Product, rate, beds, method'],
  water:['Water run','Irrigation, frost or flood'],
  sand:['Sanding or pruning','By bed'],
  yield:['Harvest yield','Barrels by bed'],
  maint:['Maintenance','Service or work order'],
  finish:['Finish my job','Start, stop, amounts used'],
  issue:['Machine problem','Report it to the shop'],
  hours:['Meter hours','Hours or miles by machine'],
  service:['Service done','Close a maintenance order']
};

// tab: [label, icon, area, pageIndex]
const ROLES = [
  {id:'farm', name:'Crop Manager', seats:'Owner, Operations Mgr, Crop Mgr, Operator, Application Foreman', set:'Run the farm', av:'CM', date:'Wed, Oct 7',
   tabs:[['Today','today','today',0],'+',['Apply','apply','apply',0],'more'], beds:true,
   areas:{today:[0,1,3,4],beds:'all',apply:'all',water:'all',harvest:'all',shop:[1],reports:'all'},
   log:['scout','apply','water','sand','yield','maint']},
  {id:'field', name:'Applicator', seats:'Applicator, Field Applicator', set:'Field', av:'AP', date:'Tue, Jul 14',
   tabs:[['Today','today','today',0],['Jobs','jobs','today',2],'+',['Map','map','beds',1],'more'],
   areas:{today:[0,2,3,4],beds:[0,1],apply:[0],water:[0],shop:[1]},
   log:['finish','water','issue']},
  {id:'mech', name:'Mechanic', seats:'Mechanic', set:'Shop (Jobs)', av:'ME', date:'Wed, Oct 7',
   tabs:[['Today','today','today',0],['Jobs','jobs','today',2],'+',['Machines','machines','shop',1],'more'],
   areas:{today:[0,2],shop:[0,1]},
   log:['service','hours','issue']},
  {id:'eqf', name:'Equipment Foreman', seats:'Equipment Foreman, Equipment & Building Mgr', set:'Shop (Maintenance)', av:'EF', date:'Wed, Oct 7',
   tabs:[['Today','today','today',0],['Maintenance','shop','shop',0],'+',['Machines','machines','shop',1],'more'],
   areas:{today:[0,3],shop:'all',reports:[0]},
   log:['maint','hours','issue']},
  {id:'admin', name:'Admin', seats:'Admin seat, Office Manager', set:'Office', av:'AD', date:'Wed, Oct 7',
   tabs:[['Today','today','today',0],['Work orders','orders','today',1],'+',['Reports','reports','reports',0],'more'],
   areas:{today:[0,1,3,4],beds:'all',apply:'all',water:'all',harvest:'all',shop:'all',reports:'all'},
   log:['scout','apply','water','sand','yield','maint']},
  {id:'fin', name:'Finance Manager', seats:'Finance Mgr, Accountant', set:'Office (no +)', av:'FM', date:'Wed, Oct 7',
   tabs:[['Today','today','today',0],['Reports','reports','reports',0],'more'],
   areas:{today:[0],beds:[0],apply:[0],water:[0],harvest:'all',shop:[1],reports:'all'},
   log:[]}
];

// ---- Today graphics (after John's Round 3–5 homes) ----
const ic = {
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>',
  clock:'<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  warn:'<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17.5v.5"/></svg>',
  snow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2v20M3.5 7l17 10M3.5 17l17-10"/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l4 4v14H6z"/><path d="M9 12h7M9 16h5"/></svg>',
  leaf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c0-9 6-14 15-14 0 9-5 15-14 15"/><path d="M5 19l7-7"/></svg>',
  wave:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h3l3-6 4 12 3-6h5"/></svg>',
  cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/></svg>',
  wrench:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0 5 5L13 18a2.1 2.1 0 0 1-3-3l6.7-6.7z"/><path d="M4 20l4-4"/></svg>',
  sign:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="11" rx="1.5"/><path d="M12 15v6M8 21h8"/></svg>'
};
const av = (t, c) => `<span class="dot-av" style="background:${c}">${t}</span>`;
const C = {a:'#b0573a', b:'#2f6b6f', m:'#5b3f8a', d:'#3c5d8c', t:'#7a6a2b', s:'#8a3b5c'};
const head = (a, b) => `<div class="z-head">${a}${b?`<span class="ask">${b}</span>`:''}</div>`;
const mini = (icon, t, s, btn) => `<div class="mini"><span class="sq">${ic[icon]}</span><span><b>${t}</b><span class="s">${s}</span></span>${btn?`<span class="go">${btn}</span>`:''}</div>`;
const needs = (n, inner) => `<div class="zcard warm"><div class="zhead"><b>Needs you</b><span class="count">${n}</span><span class="r">Most urgent first</span></div>${inner}</div>`;

// Overnight temperature curve, 6 AM today to 9 AM tomorrow, with numbered plan markers.
function frostChart(){
  const W = 300, H = 124, x0 = 6, x1 = 294, top = 26, bot = 96;
  const pts = [[0,38],[3,46],[7,54],[10,50],[13,41],[15.3,32],[18,29.5],[21,28],[23,27],[25,30.5],[26.2,32],[27,35]];
  const X = h => x0 + (h / 27) * (x1 - x0), Y = t => top + (56 - t) / (56 - 25) * (bot - top);
  const P = pts.map(([h, t]) => [X(h), Y(t)]);
  let d = `M${P[0][0].toFixed(1)},${P[0][1].toFixed(1)}`;
  for (let i = 0; i < P.length - 1; i++){
    const p0 = P[i-1] || P[i], p1 = P[i], p2 = P[i+1], p3 = P[i+2] || p2;
    const c1 = [p1[0] + (p2[0]-p0[0])/6, p1[1] + (p2[1]-p0[1])/6], c2 = [p2[0] - (p3[0]-p1[0])/6, p2[1] - (p3[1]-p1[1])/6];
    d += ` C${c1.map(v=>v.toFixed(1))} ${c2.map(v=>v.toFixed(1))} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  const y32 = Y(32), xa = X(15.3), xb = X(26.2), xmin = X(23), ymin = Y(27);
  const marks = [[0.67,'Now','now'],[4,'1',''],[11,'2','wait'],[16.75,'3','ice'],[25.5,'4','ice']];
  const mk = marks.map(([h, t, k]) => {
    const x = X(h);
    if (k === 'now') return `<line x1="${x}" y1="12" x2="${x}" y2="${Y(38.4)}" stroke="var(--ink)" stroke-width="1.2"/><rect x="${x-13}" y="2" width="26" height="13" rx="6.5" fill="var(--ink)"/><text x="${x}" y="11.5" text-anchor="middle" style="fill:var(--surface);font-weight:800">Now</text>`;
    const stroke = k === 'wait' ? 'var(--honey)' : k === 'ice' ? 'var(--ice-mid)' : 'var(--line-strong)';
    const fill = k === 'wait' ? 'var(--honey-bg)' : k === 'ice' ? 'var(--ice-bg)' : 'var(--surface)';
    return `<line x1="${x}" y1="15" x2="${x}" y2="${bot}" stroke="${stroke}" stroke-dasharray="2 2"/><circle cx="${x}" cy="8.5" r="6.5" fill="${fill}" stroke="${stroke}" stroke-width="1.3"/><text x="${x}" y="11.5" text-anchor="middle" style="fill:var(--ink);font-weight:800">${t}</text>`;
  }).join('');
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Temperature falls below 32°F at about 9 PM, bottoms at 27°F at 5 AM, and is back above freezing by 8 AM">
    <clipPath id="below"><rect x="0" y="${y32}" width="${W}" height="${H}"/></clipPath>
    <path d="${d} L${x1},${bot} L${x0},${bot} Z" fill="var(--ice-bg)" clip-path="url(#below)"/>
    <line x1="${x0}" y1="${y32}" x2="${x1}" y2="${y32}" stroke="var(--ice-mid)" stroke-dasharray="3 3"/>
    <text x="${x0}" y="${y32+10}" class="lbl">32°F</text>
    ${mk}
    <path d="${d}" fill="none" stroke="var(--ice)" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="${P[0][0]}" cy="${P[0][1]}" r="3.2" fill="var(--ink)"/>
    <circle cx="${xmin}" cy="${ymin}" r="3.6" fill="var(--ice)" stroke="var(--surface)" stroke-width="1.5"/>
    <text x="${xmin-4}" y="${ymin+12}" text-anchor="end" style="fill:var(--ink);font-weight:800">27°F at 5 AM</text>
    <text x="${(xa+xb)/2+10}" y="${y32-14}" text-anchor="middle" class="lbl">Below 32°F</text>
    <text x="${(xa+xb)/2+10}" y="${y32-4}" text-anchor="middle" class="lbl">10 h 50 min</text>
    ${[['6 AM',0],['Noon',6],['6 PM',12],['12 AM',18],['9 AM',27]].map(([t,h]) => `<text x="${X(h)}" y="${H-2}" text-anchor="${h===0?'start':h===27?'end':'middle'}">${t}</text>`).join('')}
  </svg>`;
}

const HOMES = {
  farm: () => `
    <div class="z-date">Wed, Oct 7 · 6:40 AM · 38°F, clear</div>
    ${head('Frost tonight, and two crews on Long Bog.', 'A flood on Frog Foot needs your yes by 5 PM.')}
    ${needs(3, `
      <div class="lead-row"><span class="pill wait">${ic.clock} Waiting on you</span><span class="by">by <b>5:00 PM</b></span></div>
      <div class="lead-t">Flood FF-1 tonight</div>
      <div class="from">${av('W', C.d)} Water lead asked 5:52 AM · Work order 214</div>
      <div class="facts"><div>Full by<b>9:00 PM</b></div><div>Harvest<b>Sat, Oct 10</b></div><div>Frog Foot<b>FF-1, 8.7 ac</b></div></div>
      <div class="why-line">${ic.snow}<span>Under water, FF-1 is safe from the frost without sprinklers.</span></div>
      <div class="acts"><span class="bigbtn">${ic.check} Approve flood</span><span class="ghost">Reply</span></div>
      ${mini('doc','Application record on DT-2','Aug 28. Applicator license missing.','Fix')}
      ${mini('leaf','Tissue results are in','3 beds low on nitrogen.','Open')}`)}
    <div class="frost">
      <div class="sky"><span class="pill">${ic.snow.replace('<svg','<svg width="11" height="11"')} Frost warning tonight</span>
        <div class="deg">27<sup>°F</sup></div><b>Low around 5 AM, clear and calm</b><small>Frost night 24 of the season. 2025 had 19 by now.</small></div>
      <div class="plan"><div class="plan-h">Tonight's frost plan <small>To Thu, 9 AM</small></div>${frostChart()}
        <ol class="steps">
          <li><span class="num">1</span><span class="when"><span class="mono">By 10:00 AM</span><span class="pill bad">${ic.warn} 12 days overdue</span></span><b>Pump P3 back from service</b><span class="s">Mechanic, 8 to 10. P3 feeds LB-1, LB-2 and LB-5.</span></li>
          <li><span class="num wait">2</span><span class="when"><span class="mono">From 5:00 PM</span><span class="pill wait">${ic.clock} Waiting on you</span></span><b>FF-1 under water instead</b><span class="s">Ready for harvest, no sprinklers.</span></li>
          <li><span class="num ice">3</span><span class="when"><span class="mono">By 10:45 PM</span><span class="pill ok">✓ P5 and P6 ready</span></span><b>Sprinklers on 12 beds</b><span class="s">Long Bog 3, Frog Foot 4, Canning 5.</span></li>
          <li><span class="num ice">4</span><span class="when"><span class="mono">10:45 PM to 7:30 AM</span><span class="pill ok">✓ Assigned</span></span><b>Frost watch</b><span class="s">Two on watch until the all clear.</span></li>
        </ol></div>
    </div>
    <div class="zcard"><div class="zhead"><b>Today</b><span class="r">8 crews and jobs</span></div>
      <ul class="tl">
        <li><span class="t mono">6:45 AM</span><span class="stack">${av('A',C.a)}${av('B',C.b)}</span><span><b>Crew huddle at the shop</b><span class="s ok-t">Crew A clocked in 6:31 AM</span></span></li>
        <li><span class="t mono">7:00 AM<br>to 3:00 PM</span><span>${av('A',C.a)}</span><span><b>Crew A harvests LB-3</b><span class="s">6 people</span></span></li>
        <li><span class="t mono">8:00 AM<br>to 10:00 AM</span><span>${av('M',C.m)}</span><span><b>Pump P3 service</b><span class="s">250-hour service, Long Bog west</span></span></li>
        <li><span class="t mono">8:30 AM<br>to 5:00 PM</span><span class="stack">${av('T',C.t)}${av('S',C.s)}</span><span><b>Loads to receiving</b><span class="s">About every 40 min</span></span></li>
        <li><span class="t mono">Tonight</span><span class="stack">${av('W',C.d)}${av('M',C.m)}</span><span><b>The frost night</b><span class="s">In the frost plan</span></span></li>
      </ul></div>
    <div class="zcard"><div class="zhead"><b>Since you last looked</b><span class="r">Tue 2:10 PM</span></div>
      <ul class="tl">
        <li><span class="t mono">6:00 AM</span><span>${av('!',C.d)}</span><span><b>Frost warning for tonight</b><span class="s">From NOAA. Blossom opened the frost plan.</span></span></li>
        <li><span class="t mono">Yesterday</span><span>${av('✓',C.b)}</span><span><b>13 loads delivered</b><span class="s">2 downgraded for color.</span></span></li>
      </ul></div>`,

  field: () => `
    <div class="z-date">Tue, Jul 14 · 6:40 AM · 66°F, clear</div>
    ${head('Tonight\'s Altacor is a go.', 'Post the signs by 8:45 PM.')}
    <div class="job">
      <div class="band"><div class="row"><span class="pill">My next job</span><span class="pill">✓ Approved</span></div><h3>Altacor on Long Bog</h3></div>
      <div class="in">
        <div class="meta">WO 131 · LB-1 to LB-5 · 46.3 ac · Chemigation for fruitworm</div>
        <div class="dose">
          <div><small>Put in</small><span class="big">208 <span>fl oz</span></span></div>
          <div class="rt"><b>1.63 gal</b><small>4.5 fl oz/ac × 46.3 ac</small></div>
          <div class="line"></div>
          <div><small>Run</small><b>8:45 to 9:45 PM</b></div>
          <div><small>Keep out until</small><b class="warn">⊖ 1:45 AM</b></div>
        </div>
        <div class="gng-h">Go / no-go <small>4 go · 2 later today</small></div>
        <div class="gng">
          <div class="later">Pumps, 2 PM<b>Mechanic checks P4</b></div>
          <div class="later">Bees off the bloom<b>After 8:30 PM</b></div>
          <div class="ok">✓ Wind at 8:45 PM<b>SW 5 mph</b></div>
          <div class="ok">✓ Rain<b>None until Thu</b></div>
          <div class="ok">✓ Label limit<b>2 of 3 after tonight</b></div>
          <div class="ok">✓ Pre-harvest interval<b>1 day</b></div>
        </div>
        <div class="acts"><span class="bigbtn">${ic.sign} Mark signs posted</span><span class="ghost">Start 8:30</span></div>
        <div class="gng-h" style="margin-top:12px">Tonight's log <small>Saves to the spray record</small></div>
        <div class="stepper">
          <div class="on"><i>1</i><b>Signs</b>Not yet</div>
          <div><i>2</i><b>Start</b>8:45 PM</div>
          <div><i>3</i><b>Stop</b>9:45 PM</div>
          <div><i>4</i><b>Open</b>1:45 AM</div>
        </div>
      </div>
    </div>
    <div class="zcard"><div class="zhead"><b>Later this week</b></div>
      ${mini('cal','Fri 17 · Intrepid 2F on Frog Foot','WO 132, 8:45 PM. Waiting on approval.')}
      ${mini('cal','Mon 20 · Flea beetle on CN-1 and CN-4','WO 133, evening, once the hives move.')}
    </div>`,

  mech: () => `
    <div class="z-date">Wed, Oct 7 · 6:40 AM · 38°F</div>
    ${head('Frost tonight, and Pump P3 is 12 days overdue.', 'Service it this morning. Three beds need it tonight.')}
    ${needs(2, `
      ${mini('wave','Beater 2 reel noise','Noted Thursday. Look at it after Crew B.','Open').replace('class="mini"','class="mini" style="border-top:0"')}
      ${mini('cal','Truck 4 inspection','Due Fri, Oct 9, not booked.','Book')}`)}
    <div class="svc">
      <span class="pill bad">${ic.warn} 250-hour service, due Sep 25</span>
      <div class="lead-t">Pump P3</div>
      <div class="s" style="font-size:12px;color:var(--muted)">Long Bog west. It feeds <b>LB-1</b>, <b>LB-2</b> and <b>LB-5</b> on tonight's frost.</div>
      <div class="tline">
        <div><i></i><b class="mono">8:00 AM</b>Start in the shop</div>
        <div><i></i><b class="mono">10:00 AM</b>Test run, back on line</div>
        <div><i></i><b class="mono">10:45 PM</b>Sprinklers on for frost</div>
      </div>
      <div class="acts"><span class="bigbtn">${ic.wrench} Start P3 service</span></div>
      <div class="zhead" style="margin:12px 0 0"><b>The checklist</b><span class="r"><span class="pill ok">✓ Parts on the shelf</span></span></div>
      <ul class="check">
        <li>Oil and oil filter<small>3 gal 15W-40</small></li>
        <li>Fuel and air filters<small>2 fuel, 1 air</small></li>
        <li>Grease the bearings<small>2 fittings</small></li>
        <li>Impeller and wear ring<small>Inspect</small></li>
        <li>Prime and test run<small>Log meter hours</small></li>
      </ul>
    </div>
    <div class="zcard"><div class="zhead"><b>The fleet</b><span class="r">14 machines</span></div>
      <div class="fleet"><span class="pill ok">✓ 12 ready</span><span class="pill bad">${ic.warn} P3 overdue</span><span class="pill wait">B2 to check</span></div></div>`,

  eqf: () => `
    <div class="z-date">Wed, Oct 7 · 6:40 AM · 38°F</div>
    ${head('Pump P3 has to be back before tonight\'s frost.', 'One order waits on your approval.')}
    ${needs(1, `
      <div class="lead-row"><span class="pill wait">${ic.clock} Your approval</span><span class="by">by <b>2:00 PM</b></span></div>
      <div class="lead-t">Replace sprayer nozzles</div>
      <div class="from">${av('A',C.a)} Applicator asked 6:05 AM · Work order 219</div>
      <div class="facts"><div>Parts<b>$140</b></div><div>Machine<b>Sprayer 2</b></div><div>Needed<b>Fri spray</b></div></div>
      <div class="acts"><span class="bigbtn">${ic.check} Approve</span><span class="ghost">Reply</span></div>`)}
    <div class="zcard"><div class="zhead"><b>Service due</b><span class="r">Next 30 days</span></div>
      <div class="bar2"><div class="lab"><span>Pump P3 · 250 h</span><b style="color:var(--cran-ink)">12 days over</b></div><div class="track"><div class="fill" style="width:100%;background:var(--cran)"></div></div></div>
      <div class="bar2"><div class="lab"><span>Loader · 500 h</span><b>in 3 days</b></div><div class="track"><div class="fill honey" style="width:90%"></div></div></div>
      <div class="bar2"><div class="lab"><span>Truck 4 · inspection</span><b>Oct 9</b></div><div class="track"><div class="fill" style="width:60%"></div></div></div>
    </div>
    <div class="zcard"><div class="zhead"><b>The fleet</b><span class="r">14 machines</span></div>
      <div class="fleet"><span class="pill ok">✓ 12 ready</span><span class="pill bad">${ic.warn} P3 overdue</span><span class="pill wait">B2 to check</span></div></div>`,

  admin: () => `
    <div class="z-date">Wed, Oct 7 · 6:40 AM</div>
    ${head('Two records need fixing before the spray report.', 'You fix them; a manager approves.')}
    ${needs(2, `
      ${mini('doc','Application record on DT-2','Aug 28. Applicator license missing.','Fix').replace('class="mini"','class="mini" style="border-top:0"')}
      ${mini('doc','Delivery ticket without a bed','Harvest ▸ Deliveries · Oct 6','Fix')}`)}
    <div class="zcard"><div class="zhead"><b>Spray report</b><span class="r"><span class="pill wait">Due Jan 31</span></span></div>
      <div class="bar2"><div class="lab"><span>Records complete</span><b>31 of 33</b></div><div class="track"><div class="fill" style="width:94%"></div></div></div>
      <div class="s" style="font-size:11.5px;color:var(--muted);margin-top:6px">The two above are the only gaps.</div></div>
    <div class="zcard"><div class="zhead"><b>Today</b></div>
      ${mini('leaf','Enter yesterday\'s yields','12 beds picked','Start').replace('class="mini"','class="mini" style="border-top:0"')}
      ${mini('doc','Upload this week\'s soil tests','From the lab email','Upload')}</div>`,

  fin: () => `
    <div class="z-date">Wed, Oct 7 · 6:40 AM</div>
    ${head('Harvest is 43% in.', 'Deliveries are tracking 6% ahead of last year.')}
    <div class="zcard"><div class="zhead"><b>Harvest</b><span class="r">Barrels to date</span></div>
      <div class="bar2"><div class="lab"><span>2026</span><b>43% · 41,200 bbl</b></div><div class="track"><div class="fill" style="width:43%"></div></div></div>
      <div class="bar2"><div class="lab"><span>2025 by Oct 7</span><b>37%</b></div><div class="track"><div class="fill prev" style="width:37%"></div></div></div>
      <div class="fleet" style="margin-top:10px"><span class="pill ok">✓ 13 loads yesterday</span><span class="pill wait">2 downgraded</span></div></div>
    <div class="zcard"><div class="zhead"><b>Since you last looked</b></div>
      ${mini('doc','Delivery statement expected','From the handler, for the October close').replace('class="mini"','class="mini" style="border-top:0"')}
      ${mini('leaf','Charts updated overnight','Yield by bed and variety','Open')}</div>`
};

