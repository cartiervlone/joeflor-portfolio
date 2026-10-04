import { useEffect, useRef, useState, type RefObject } from 'react'
import { ArrowDown, ArrowRight, Briefcase, FilmSlate, GameController, Microphone, Sparkle, Toolbox, YoutubeLogo } from '@/components/slab'
import { SCROLLER_ID } from '@/hooks/useLenis'

const SERVICES = [
  { title: 'Podcast Video Editing', icon: Microphone, body: 'Full podcast episodes, teasers, short-form reels, multicam and split-cam editing.', out: 'Full episode · Teaser · 2+ reels', details: 'Host + guest sync · Dialogue cleanup · B-roll · Captions · Music + SFX' },
  { title: 'Gaming Montage Editing', icon: GameController, body: 'Music-driven gameplay edits shaped around timing, impact, motion, and cinematic flow.', out: 'Montage · Music sync · Effects', details: 'Beat sync · Impact cuts · Motion effects · Sound design · Cinematic pacing' },
  { title: 'YouTube & Social Editing', icon: YoutubeLogo, body: 'Story-focused edits for long-form videos, social clips, and creator content.', out: 'YouTube · Short-form · Social', details: 'Hook-first pacing · Captions · B-roll · Retention-focused cuts · Platform-ready exports' },
  { title: 'Film & Cinematic Editing', icon: FilmSlate, body: 'Narrative cuts built around pacing, atmosphere, composition, and visual intention.', out: 'Narrative · Cinematic · Trailers', details: 'Story structure · Scene pacing · Color · Sound · Transitions · Emotional timing' },
] as const

const SPECIALTIES = ['Pacing','Music sync','Dialogue cleanup','Multicam','Split-cam','B-roll','Transitions','Captions','Sound design','Color','Cinematic flow','Storytelling']

const TOOLS = [
  ['DaVinci Resolve','davinciresolve','Color grading · Cutting · Fusion / 3D effects'],
  ['Premiere Pro','adobepremierepro','Multicam · Editing · Audio · Captions'],
  ['After Effects','adobeaftereffects','Motion graphics · Compositing · Visual effects'],
  ['CapCut','capcut','Auto captions · Templates · Quick social edits'],
  ['Photoshop','adobephotoshop','Thumbnails · Image cleanup · Graphic assets'],
] as const

const STEPS = [
  ['Send','Share the footage, brief, references, and the goal for the edit.'],
  ['Understand','Review the material and learn the intended style, audience, and story.'],
  ['Edit','Shape the first cut with pacing, sound, visuals, and flow.'],
  ['Refine','Feedback, cleanup, polish, and the final details.'],
  ['Deliver','Prepare the finished export for the format it needs to live in.'],
] as const

const clamp = (v:number) => Math.max(0, Math.min(1, v))
const smooth = (v:number) => { const t=clamp(v); return t*t*(3-2*t) }

function useProgress(ref: RefObject<HTMLDivElement | null>) {
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
    update()
    scroller.addEventListener('scroll',onScroll,{passive:true})
    window.addEventListener('resize',onScroll,{passive:true})
    mq.addEventListener('change',onChange)
    return()=>{ scroller.removeEventListener('scroll',onScroll); window.removeEventListener('resize',onScroll); mq.removeEventListener('change',onChange); if(raf) cancelAnimationFrame(raf) }
  },[ref])
  return progress
}

function ToolLogo({slug,name}:{slug:string;name:string}) {
  return <img src={'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@16.33.0/icons/'+slug} alt={name+' logo'} loading="eager" decoding="async" />
}

function Folder({progress}:{progress:number}) {
  const reveal=smooth((progress-.04)/.22)
  const lift=smooth((progress-.14)/.26)
  const open=smooth((progress-.34)/.18)
  // Finish revealing the folder pages slightly before the scene ends.
  // The extra scroll room lets the fully opened folder breathe at the bottom
  // instead of handing off immediately to the next section.
  const pageProgress=clamp((progress-.50)/.40)
  const pagePosition=pageProgress*7
  const pageStyle=(index:number)=>{
    const position=pagePosition-index
    const distance=Math.abs(position)
    const active=clamp(1-distance)
    // The page currently being revealed stays crystal sharp. Pages underneath
    // it remain visibly present through the clear folder, but progressively
    // soften as they move farther away from the active page.
    const openingBlur=(1-open)*18
    const depthBlur=Math.pow(distance,0.9)*7
    const blur=Math.min(22,openingBlur+depthBlur)
    const opacity=.1+active*.9
    const saturation=1-Math.min(.22,distance*.11)
    return {
      opacity,
      filter:'blur('+blur+'px) saturate('+saturation+')',
      transform:'translate3d('+(-position*24)+'px,'+(distance*10)+'px,'+(-distance*18)+'px) rotateY('+(position*10)+'deg) scale('+(0.96+active*.04)+')',
      zIndex:Math.round(active*100),
    }
  }
  const done=smooth((progress-.92)/.08)

  const folderStyle={
    opacity:.08+reveal*.92,
    transform:'translate3d(0,'+(90-lift*90)+'px,0) scale('+(0.82+reveal*.18)+') rotateX('+(3-lift*3)+'deg)'
  }

  return <div className="svc-folder-wrap" style={folderStyle}>
    <div className="svc-folder-glow"/>
    <div className="svc-folder-shadow"/>

    <div className="svc-folder">
      <div className="svc-folder-tab"><i/>JH / EDITING</div>
      <div className="svc-folder-back"/>

      <div className="svc-folder-pages" aria-label="Services and editing workflow">
        {SERVICES.map(({title,icon:Icon,body,out,details},index)=> {

          return <article className="svc-page svc-page--service" key={title} style={pageStyle(index)}>
            <div className="svc-page-topline"><span>WHAT I OFFER</span><i>{String(index+1).padStart(2,'0')}</i></div>
            <h2>{title}.</h2>
            <div className="svc-service-focus">
              <span><Icon size={30} weight="duotone"/></span>
              <p>{body}</p>
            </div>
            <label>{out}</label>
            <div className="svc-service-details">{details.split(' · ').map(detail=><span key={detail}>{detail}</span>)}</div>
            <div className="svc-page-progress"><i style={{width:(Math.max(0,Math.min(1,pageProgress-index/(SERVICES.length-1)))*100)+'%'}}/></div>
            <small className="svc-page-next">{index < SERVICES.length-1 ? 'Flip to the next page' : 'Keep scrolling for the rest of the folder'}</small>
          </article>
        })}

        <article className="svc-page svc-page--role" style={pageStyle(4)}>
          <div className="svc-page-topline"><span>CURRENT ROLE</span><i>NOW</i></div>
          <span className="svc-kicker">CURRENTLY</span>
          <h2>Podcast Video Editor.</h2>
          <p>Full episodes, teasers, short-form reels, multicam, split-cam, and audio cleanup.</p>
          <div className="svc-episode"><span>Teaser</span><span>Intro + Lower Third</span><span>Body</span><span>Outro</span></div>
          <div className="svc-role-row"><b>SHORT-FORM</b><span>2+ reels</span><b>AUDIO</b><span>Cleanup → RX → mix</span></div>
          <div className="svc-origin"><GameController size={16} weight="duotone"/><span><b>ORIGIN</b> Gaming montage editing.</span></div>
        </article>

        <article className="svc-page svc-page--work" style={pageStyle(5)}>
          <div className="svc-page-topline"><span>WHAT I ACTUALLY DO</span><i>WORK</i></div>
          <h2>From raw footage to a finished cut.</h2>
          <div className="svc-demo-grid"><div className="svc-demo"><small>MULTICAM / SPLIT-CAM</small><div className="svc-cams"><i>HOST</i><i>GUEST</i><i>HOST + GUEST</i></div></div><div className="svc-demo"><small>AUDIO</small><div className="svc-wave">{Array.from({length:10},(_,i)=><i key={i}/>)}</div><label>RAW → RX CLEANUP → FINAL</label></div></div>
          <p className="svc-tags">Cutting · Pacing · B-roll · Transitions · Captions · Music · SFX · Color · Dialogue cleanup</p>
        </article>

        <article className="svc-page svc-page--language" style={pageStyle(6)}>
          <div className="svc-page-topline"><span>EDITING LANGUAGE</span><i>FLOW</i></div>
          <h2>Make every part feel intentional.</h2>
          <div className="svc-specialties">{SPECIALTIES.map(x=><span key={x}>{x}</span>)}</div>
          <div className="svc-principle"><Sparkle size={16} weight="duotone"/>Effects should serve the moment — never the other way around.</div>
        </article>

        <article className="svc-page svc-page--tools" style={pageStyle(7)}>
          <div className="svc-page-topline"><span>TOOLS I WORK WITH</span><i>TOOLS</i></div>
          <div className="svc-tools-heading"><span><Toolbox size={27} weight="duotone"/></span><div><label>THE TOOLKIT</label><h2>My editing tools.</h2></div></div>
          <div className="svc-tools">{TOOLS.map(([name,slug,detail])=><div className="svc-tool" tabIndex={0} data-tooltip={name} aria-label={name} key={name}><span className="svc-tool-logo"><ToolLogo slug={slug} name={name}/></span><b className="svc-tool-name">{name}</b><small className="svc-tool-detail">{detail}</small></div>)}</div>
          <p className="svc-tool-hint">Hover or focus a logo to see its name.</p>
        </article>
      </div>

      <div className="svc-folder-cover" style={{transform:'rotateY('+(-open*88)+'deg)',opacity:.99-open*.18}}>
        <div className="svc-cover-shine"/>
        <div className="svc-cover-copy"><i/><small>VIDEO EDITING / POST-PRODUCTION</small><strong>SERVICES</strong><span>What I offer. How I work. What goes into the cut.</span></div>
        <label>JH — 2026</label>
        <ArrowRight className="svc-cover-arrow" size={20}/>
      </div>

      <div className="svc-folder-notch"/>
    </div>

    <div className="svc-folder-base"/>
    <label className="svc-folder-status">{done>.8?'FOLDER OPEN':open>.65?'OPENING':'SERVICES'}</label>
  </div>
}

function Beyond(){
  return <section className="svc-beyond">
    <div className="svc-fog svc-fog--beyond"/>
    <div className="svc-section-label"><b>BEYOND THE EDIT</b></div>
    <div className="svc-beyond-copy"><small>THE SPACE OUTSIDE THE FOLDER</small><h2>Good editing isn't just about effects.</h2><p>It's about making every part of a video feel intentional. Rhythm, pacing, sound, visuals, and storytelling all need to work together.</p></div>
    <div className="svc-principles">{['RHYTHM','PACING','SOUND','VISUALS','STORY','INTENTION'].map(x=><span key={x}>{x}</span>)}</div>
    <div className="svc-before-after"><article><b>RAW</b><div className="svc-timeline svc-timeline--raw">{Array.from({length:5},(_,i)=><i key={i}/>)}</div><small>Unshaped footage</small></article><ArrowRight size={23}/><article><b>FINAL CUT</b><div className="svc-timeline">{Array.from({length:7},(_,i)=><i key={i}/>)}</div><small>Intentional rhythm + flow</small></article></div>
  </section>
}

function Workflow(){
  return <section className="svc-workflow">
    <div className="svc-section-label"><b>FROM FOOTAGE TO FINAL</b></div>
    <div className="svc-workflow-head"><div><small>WORKING TOGETHER</small><h2>A clear path from brief to delivery.</h2></div><p>The same intention carries through the client experience: understand the project, build the edit, refine the details, and deliver the finished piece.</p></div>
    <ol>{STEPS.map(([t,b])=><li key={t}><strong>{t}</strong><p>{b}</p></li>)}</ol>
  </section>
}

export default function ServicesExperience(){
  const sceneRef=useRef<HTMLDivElement>(null)
  const progress=useProgress(sceneRef)

  return <div className="svc-experience">
    <section className="svc-arrival">
      <div className="svc-fog svc-fog--arrival"/>
      <div className="svc-arrival-copy is-visible"><h1>What I offer.</h1><p>A closer look at the work behind the cut.</p><span><ArrowDown size={16}/> Scroll</span></div>
    </section>

    <div className="svc-folder-scene" ref={sceneRef}>
      <div className="svc-folder-sticky">
        <div className="svc-fog svc-fog--scene"/>
        <Folder progress={progress}/>
      </div>
    </div>

    <div><Beyond/><Workflow/></div>

    <section className="svc-cta">
      <div><Briefcase size={23} weight="duotone"/></div>
      <small>THE NEXT CUT</small>
      <h2>Have a project in mind?</h2>
      <p>Tell me what you're making and what you want the edit to feel like.</p>
      <a href="/contact">Let's Work <ArrowRight size={16}/></a>
    </section>
  </div>
}
