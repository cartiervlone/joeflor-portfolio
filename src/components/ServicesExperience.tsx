import { useEffect, useRef, useState, type CSSProperties, type RefObject } from 'react'
import { ArrowDown, ArrowRight, Briefcase, FilmSlate, GameController, Microphone, Sparkle, Toolbox, YoutubeLogo } from '@/components/slab'
import { SCROLLER_ID } from '@/hooks/useLenis'

const SERVICES = [
  { n: '01', title: 'Podcast Video Editing', icon: Microphone, body: 'Full podcast episodes, teasers, short-form reels, multicam and split-cam editing.', out: 'Full episode · Teaser · 2+ reels' },
  { n: '02', title: 'Gaming Montage Editing', icon: GameController, body: 'Music-driven gameplay edits shaped around timing, impact, motion, and cinematic flow.', out: 'Montage · Music sync · Effects' },
  { n: '03', title: 'YouTube & Social Editing', icon: YoutubeLogo, body: 'Story-focused edits for long-form videos, social clips, and creator content.', out: 'YouTube · Short-form · Social' },
  { n: '04', title: 'Film & Cinematic Editing', icon: FilmSlate, body: 'Narrative cuts built around pacing, atmosphere, composition, and visual intention.', out: 'Narrative · Cinematic · Trailers' },
] as const
const SPECIALTIES = ['Pacing','Music sync','Dialogue cleanup','Multicam','Split-cam','B-roll','Transitions','Captions','Sound design','Color','Cinematic flow','Storytelling']
const TOOLS = [
  ['DaVinci Resolve','davinciresolve','Edit · Color · Audio'], ['Premiere Pro','adobepremierepro','Edit · Multicam · Audio'],
  ['After Effects','adobeaftereffects','Motion · VFX · Titles'], ['CapCut','capcut','Short-form · Social'], ['Photoshop','adobephotoshop','Graphics · Thumbnails'],
] as const
const STEPS = [
  ['01','Send','Share the footage, brief, references, and the goal for the edit.'],
  ['02','Understand','Review the material and learn the intended style, audience, and story.'],
  ['03','Edit','Shape the first cut with pacing, sound, visuals, and flow.'],
  ['04','Refine','Feedback, cleanup, polish, and the final details.'],
  ['05','Deliver','Prepare the finished export for the format it needs to live in.'],
] as const
const clamp = (v:number) => Math.max(0, Math.min(1, v))
const smooth = (v:number) => { const t=clamp(v); return t*t*(3-2*t) }

function useProgress(ref: RefObject<HTMLElement | null>) {
  const [progress,setProgress]=useState(0)
  useEffect(()=>{
    const scroller=document.getElementById(SCROLLER_ID), scene=ref.current
    if(!scroller || !scene) return
    const mq=window.matchMedia('(prefers-reduced-motion: reduce)')
    if(mq.matches){ setProgress(1); return }
    let raf=0
    const update=()=>{
      raf=0
      const sr=scroller.getBoundingClientRect(), er=scene.getBoundingClientRect()
      setProgress(clamp((sr.top-er.top)/Math.max(1,scene.offsetHeight-scroller.clientHeight)))
    }
    const onScroll=()=>{ if(!raf) raf=requestAnimationFrame(update) }
    const onChange=()=>update()
    update(); scroller.addEventListener('scroll',onScroll,{passive:true}); window.addEventListener('resize',onScroll,{passive:true}); mq.addEventListener('change',onChange)
    return()=>{ scroller.removeEventListener('scroll',onScroll); window.removeEventListener('resize',onScroll); mq.removeEventListener('change',onChange); if(raf) cancelAnimationFrame(raf) }
  },[ref])
  return progress
}

function ToolLogo({slug,name}:{slug:string;name:string}) { return <img src={'https://cdn.simpleicons.org/'+slug} alt={name+' logo'} loading="lazy" decoding="async" /> }

function Folder({progress}:{progress:number}) {
  const reveal=smooth((progress-.05)/.28), lift=smooth((progress-.18)/.34), open=smooth((progress-.42)/.34), pages=smooth((progress-.62)/.28), done=smooth((progress-.74)/.22)
  const folderStyle={opacity:.15+reveal*.85,transform:'translate3d(0,'+(110-lift*110)+'px,0) scale('+(0.78+reveal*.22)+') rotateX('+(4-lift*4)+'deg)'}
  return <div className="svc-folder-wrap" style={folderStyle}>
    <div className="svc-folder-glow"/><div className="svc-folder-shadow"/>
    <div className="svc-folder">
      <div className="svc-folder-tab"><i/>JH / SERVICES</div>
      <div className="svc-folder-back"/>
      <div className="svc-folder-pages" style={{opacity:.12+pages*.88,transform:'translate3d(0,'+((1-pages)*46)+'px,0) scale('+(0.96+pages*.04)+')'}}>
        <article className="svc-page svc-page--offer"><small>01 / WHAT I OFFER</small><h2>Services + deliverables.</h2><div className="svc-service-list">{SERVICES.map(({n,title,icon:Icon,body,out})=><div className="svc-service" key={title}><span><Icon size={16} weight="duotone"/></span><b><em>{n}</em>{title}</b><p>{body}</p><label>{out}</label></div>)}</div></article>
        <article className="svc-page svc-page--role"><small>02 / CURRENT ROLE</small><span className="svc-kicker">CURRENTLY</span><h2>Podcast Video Editor.</h2><p>Full episodes, teasers, short-form reels, multicam, split-cam, and audio cleanup.</p><div className="svc-episode"><span>Teaser</span><span>Intro + Lower Third</span><span>Body</span><span>Outro</span></div><div className="svc-role-row"><b>SHORT-FORM</b><span>2+ reels</span><b>AUDIO</b><span>Cleanup → RX → mix</span></div><div className="svc-origin"><GameController size={14} weight="duotone"/><span><b>ORIGIN</b> Gaming montage editing.</span></div></article>
        <article className="svc-page svc-page--work"><small>03 / WHAT I ACTUALLY DO</small><h2>From raw footage to a finished cut.</h2><div className="svc-demo-grid"><div className="svc-demo"><small>MULTICAM / SPLIT-CAM</small><div className="svc-cams"><i>HOST</i><i>GUEST</i><i>HOST + GUEST</i></div></div><div className="svc-demo"><small>AUDIO</small><div className="svc-wave">{Array.from({length:10},(_,i)=><i key={i}/>)}</div><label>RAW → RX CLEANUP → FINAL</label></div></div><p className="svc-tags">Cutting · Pacing · B-roll · Transitions · Captions · Music · SFX · Color · Dialogue cleanup</p></article>
        <article className="svc-page svc-page--language"><small>04 / EDITING LANGUAGE</small><h2>Make every part feel intentional.</h2><div className="svc-specialties">{SPECIALTIES.map(x=><span key={x}>{x}</span>)}</div><div className="svc-principle"><Sparkle size={14} weight="duotone"/>Effects should serve the moment — never the other way around.</div></article>
        <article className="svc-page svc-page--tools"><small>05 / TOOLS</small><div className="svc-tools-heading"><span><Toolbox size={24} weight="duotone"/></span><div><label>THE TOOLKIT</label><h2>Tools I work with.</h2></div></div><div className="svc-tools">{TOOLS.map(([name,slug,detail])=><div className="svc-tool" tabIndex={0} key={name}><span><ToolLogo slug={slug} name={name}/></span><b>{name}</b><small>{detail}</small></div>)}</div><p className="svc-tool-hint">Hover or focus a logo</p></article>
      </div>
      <div className="svc-folder-cover" style={{transform:'rotateX('+(-open*78)+'deg)',opacity:.98-open*.24}}><div className="svc-cover-shine"/><div className="svc-cover-copy"><i/><small>VIDEO EDITING / POST-PRODUCTION</small><strong>SERVICES</strong><span>What I offer. How I work. What goes into the cut.</span></div><label>JH — 2026</label><ArrowRight className="svc-cover-arrow" size={20}/></div>
      <div className="svc-folder-notch"/>
    </div>
    <div className="svc-folder-base"/><label className="svc-folder-status">{done>.8?'FOLDER OPEN':open>.65?'OPENING':lift>.6?'UNLOCKING':'SERVICES'}</label>
  </div>
}

function Beyond(){ return <section className="svc-beyond"><div className="svc-fog svc-fog--beyond"/><div className="svc-section-label"><span>06</span><b>BEYOND THE EDIT</b></div><div className="svc-beyond-copy"><small>THE SPACE OUTSIDE THE FOLDER</small><h2>Good editing isn't just about effects.</h2><p>It's about making every part of a video feel intentional. Rhythm, pacing, sound, visuals, and storytelling all need to work together.</p></div><div className="svc-principles">{['RHYTHM','PACING','SOUND','VISUALS','STORY','INTENTION'].map(x=><span key={x}>{x}</span>)}</div><div className="svc-before-after"><article><b>RAW</b><div className="svc-timeline svc-timeline--raw">{Array.from({length:5},(_,i)=><i key={i}/>)}</div><small>Unshaped footage</small></article><ArrowRight size={23}/><article><b>FINAL CUT</b><div className="svc-timeline">{Array.from({length:7},(_,i)=><i key={i}/>)}</div><small>Intentional rhythm + flow</small></article></div></section> }
function Workflow(){ return <section className="svc-workflow"><div className="svc-section-label"><span>07</span><b>FROM FOOTAGE TO FINAL</b></div><div className="svc-workflow-head"><div><small>WORKING TOGETHER</small><h2>A clear path from brief to delivery.</h2></div><p>The same intention carries through the client experience: understand the project, build the edit, refine the details, and deliver the finished piece.</p></div><ol>{STEPS.map(([n,t,b])=><li key={n}><span>{n}</span><strong>{t}</strong><p>{b}</p></li>)}</ol></section> }

export default function ServicesExperience(){
  const sceneRef=useRef<HTMLElement>(null), beyondRef=useRef<HTMLElement>(null), progress=useProgress(sceneRef)
  const [hint,setHint]=useState(true)
  useEffect(()=>{const s=document.getElementById(SCROLLER_ID); if(!s)return; const f=()=>setHint(s.scrollTop<80); f(); s.addEventListener('scroll',f,{passive:true}); return()=>s.removeEventListener('scroll',f)},[])
  const jump=()=>beyondRef.current?.scrollIntoView({behavior:'smooth',block:'start'})
  return <div className="svc-experience">
    <section className="svc-arrival"><div className="svc-fog svc-fog--arrival"/><div className={'svc-arrival-copy'+(hint?' is-visible':'')}><small>SERVICES / 01</small><h1>What I offer.</h1><p>Scroll to open the folder.</p><span><ArrowDown size={16}/> Scroll</span></div></section>
    <section className="svc-folder-scene" ref={sceneRef}><div className="svc-folder-sticky"><div className="svc-fog svc-fog--scene"/><div className="svc-scene-copy" style={{opacity:1-smooth(progress*1.9)}}><span>SERVICES / 02</span><p>Open the folder to explore the work.</p></div><Folder progress={progress}/><div className="svc-folder-finish" style={{opacity:smooth((progress-.88)/.12),transform:'translate(-50%,'+((1-smooth((progress-.88)/.12))*16)+'px)'}}><b>READY FOR THE NEXT CUT.</b><button type="button" onClick={jump}>Continue <ArrowRight size={15}/></button></div></div></section>
    <div ref={beyondRef}><Beyond/><Workflow/></div>
    <section className="svc-cta"><div><Briefcase size={23} weight="duotone"/></div><small>THE NEXT CUT</small><h2>Have a project in mind?</h2><p>Tell me what you're making and what you want the edit to feel like.</p><a href="/contact">Let's Work <ArrowRight size={16}/></a></section>
  </div>
}
