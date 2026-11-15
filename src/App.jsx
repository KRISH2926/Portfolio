import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BriefcaseBusiness, Camera, House, Images, Mail, Map, MapPin, UserRound, Users, Check, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { destinations, experiences, img } from './data.js';
const InteractiveBook = lazy(() => import('./components/ui/interactive-book.tsx'));
const LiquidText = lazy(() => import('./components/ui/liquid-text.tsx').then((m) => ({ default: m.LiquidText })));
const LiquidMetalButton = lazy(() => import('./components/ui/liquid-metal.tsx').then((m) => ({ default: m.LiquidMetalButton })));
const GlassDock = lazy(() => import('./components/ui/glass-dock.tsx').then((m) => ({ default: m.GlassDock })));
const ImageTrail = lazy(() => import('./components/ui/image-trail.tsx').then((m) => ({ default: m.ImageTrail })));
const StaggeredGrid = lazy(() => import('./components/ui/staggered-grid.tsx').then((m) => ({ default: m.StaggeredGrid })));
const ImageCollage = lazy(() => import('./components/ui/image-collage.tsx').then((m) => ({ default: m.ImageCollage })));
const WaveGridBackground = lazy(() => import('./components/ui/wave-grid.tsx').then((m) => ({ default: m.WaveGridBackground })));
const SpotlightNavbar = lazy(() => import('./components/ui/spotlight-navbar.tsx').then((m) => ({ default: m.SpotlightNavbar })));


function Header() {
  const navigate = (item) => {
    const section = document.querySelector(item.href);
    if (!section) return;
    window.history.pushState(null, '', item.href);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const dockItems = [
    { title: 'Home', icon: House, href: '#home' },
    { title: 'About', icon: UserRound, href: '#about' },
    { title: 'What I bring', icon: Check, href: '#bring' },
    { title: 'Experience', icon: BriefcaseBusiness, href: '#experience' },
    { title: 'Projects', icon: Images, href: '#work' },
    { title: 'Creative', icon: Camera, href: '#creative' },
    { title: 'Travel', icon: Map, href: '#travel' },
    { title: 'Contact', icon: Mail, href: '#contact' },
  ];
  const mobileItems = dockItems.map((item) => ({ ...item, onClick: () => navigate(item) }));
  const spotlightItems = dockItems.map(({ title, href }) => ({ label: title, href }));
  return <header className="topbar">
    <a className="wordmark" href="#home" aria-label="Krish home">Krish<span>.</span></a>
    <nav className="primary-spotlight" aria-label="Main navigation"><Suspense fallback={<span className="nav-loading">Explore</span>}><SpotlightNavbar items={spotlightItems} onItemClick={navigate} className="portfolio-spotlight"/></Suspense></nav>
    <nav className="mobile-dock-nav" aria-label="Main navigation"><Suspense fallback={<span className="nav-loading">Explore</span>}><GlassDock items={mobileItems} dockClassName="portfolio-dock"/></Suspense></nav>
  </header>;
}

function Photo({ number, alt, className = '', eager = false }) {
  return <img className={className} src={img(number)} alt={alt} loading={eager ? 'eager' : 'lazy'} />;
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-copy">
      <div className="eyebrow">HEY, I’M KRISH <span className="eyebrow-line"/></div>
      <h1>Curious about a<br/>lot of <span className="liquid-word-wrap"><em className="liquid-word-label">things.</em><Suspense fallback={null}><LiquidText text="things." fontSize={300} color="#bd705b" className="liquid-word"/></Suspense></span></h1>
      <p className="hero-intro">I enjoy meeting people, working on ideas, organising things, creating stories and exploring places I've never been to. I guess I just like keeping myself busy with things that teach me something or give me a good story to tell.</p>
      <div className="hero-tags" aria-label="Areas I enjoy"><span><BriefcaseBusiness size={14}/> Operations</span><span><Users size={14}/> Community</span><span><Camera size={14}/> Creative Work</span><span><MapPin size={14}/> Travel</span></div>
      <div className="hero-actions"><Suspense fallback={<a className="round-link" href="#work">Explore my work</a>}><LiquidMetalButton type="button" size="sm" icon={<ArrowDown size={16}/>} metalConfig={{colorBack:'#849170',colorTint:'#e3a18a',speed:.38}} className="hero-metal-cta" onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior:'smooth' })}>Explore my work</LiquidMetalButton></Suspense><a className="hero-about-link" href="#about">A little about me <ArrowDown size={13}/></a></div>
    </div>
    <figure className="hero-photo-wrap hero-journal-art"><div className="hero-paper-orbit" aria-hidden="true"/><div className="hero-instant hero-instant-sunset"><Photo number="/images/travel/mussoorie/02.webp" alt="Sunset over the hills in Mussoorie"/><span>last light</span></div><div className="hero-instant hero-instant-mountain"><Photo number="/images/travel/mussoorie/05.webp" alt="Snow peaks above green mountain slopes"/><span>somewhere up high</span></div><div className="hero-photo-frame"><Photo number={2} alt="Krish outdoors at sunset" eager/><span className="hero-photo-clip" aria-hidden="true"/></div><div className="hero-field-note"><span>FIELD NOTES</span><strong>Build<br/>Create<br/>Explore</strong><i>and repeat</i></div><span className="hero-location-stamp"><MapPin size={13}/> MUSSOORIE</span><span className="hero-hand-doodle" aria-hidden="true">✳</span><figcaption>Personal photographs · collected along the way</figcaption></figure>
    <div className="hero-scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={16}/></div>
  </section>;
}

function About() {
  return <section className="section about-section" id="about">
    <div className="section-kicker"><span>01</span><span>A LITTLE ABOUT ME</span><span className="kicker-rule"/></div>
    <div className="about-layout">
      <div className="about-copy"><h2>A little bit of everything,<br/><em>connected by curiosity.</em></h2>
        <p>I've always enjoyed exploring things beyond a single area of interest. My journey started with computer science, but student communities, event management, operations and creative projects introduced me to different ways of thinking and working.</p>
        <p>I've found that I enjoy the process behind making something happen: understanding the idea, figuring out what needs to be done, bringing people together and working through the details until it comes to life.</p>
        <p>I'm someone who likes taking initiative, learning by doing and staying open to perspectives that challenge my own. I value good conversations, thoughtful collaboration and the satisfaction of seeing an idea move from a plan to something real.</p>
        <div className="about-principles">{[['01','Curiosity'],['02','Ownership'],['03','Collaboration']].map(([n, label]) => <div key={label}><span>{n}</span><strong>{label}</strong></div>)}</div>
      </div>
      <figure className="about-photo"><Suspense fallback={<Photo number={1} alt="Krish exploring a place at night"/>}><ImageTrail images={[1,2,35,41,48,66].map((n) => ({src:img(n),alt:'Personal travel photographs'}))} maxItems={4} threshold={65} minDelay={100} className="about-trail"><Photo number={1} alt="Krish exploring a place at night"/></ImageTrail></Suspense><figcaption>Personal moments along the way</figcaption></figure>
    </div>
  </section>;
}

function WhatIBring() {
  const strengths = [
    ['01','Operations & Execution','Organising workflows, managing details and helping plans move forward.'],
    ['02','Project Coordination','Aligning people, timelines and responsibilities to deliver outcomes.'],
    ['03','Communication & Community','Engaging people, coordinating teams and building participation.'],
    ['04','Creative Thinking','Exploring ideas, content, presentation and ways to make experiences more engaging.'],
  ];
  return <section className="section bring-section" id="bring"><div className="section-kicker"><span>02</span><span>WHAT I BRING</span><span className="kicker-rule"/></div><div className="bring-heading"><p className="overline">Different experiences. A common way of working.</p><h2>From the first idea<br/>to <em>the details.</em></h2></div><div className="bring-grid">{strengths.map(([n,title,description])=><article className="bring-card" key={title}><span>{n}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>;
}

function Experience() {
  const [active, setActive] = useState(0);
  const entries = [
    { name:'OneStop ESG', role:'Business Development & Operations', image:'/images/experience/onestop-logo.webp', alt:'OneStop ESG, World’s Largest ESG Marketplace', description:'Worked across research, company outreach, onboarding, platform management and content operations for a sustainability-focused marketplace. My role involved identifying relevant organisations, maintaining platform information, engaging stakeholders and supporting the growth of the marketplace.', metrics: experiences[0].metrics, note:'Research · Stakeholder outreach · Platform and content operations' },
    { name:'TUNIC Club, JMIT', role:'Convenor', image:10, alt:'TUNIC Club students at an outdoor campus event', description:'Led student teams and coordinated the planning and execution of institutional and inter-school events. Worked across event operations, delegation, promotions, creative execution and on-ground coordination.', metrics: experiences[1].metrics, note:'Zest Day · Syn-e-Quest · Pro-Fashional Fiesta' },
    { name:'Google Student Ambassador Program', role:'Student Ambassador · 2025', image:'/images/experience/gsa-photo.webp', alt:'A Google Student Ambassador wearing the program cap', description:'Selected among the Top 250 ambassadors in the 2025 program. Contributed to student engagement, awareness initiatives and conversations around technology and AI.', metrics: experiences[2].metrics, note:'Campus engagement · AI awareness · Peer learning' },
    { name:'JMIT Chronicles', role:'Scriptwriter · Anchor · Video Editor', image:15, alt:'A student editing a video on a computer', description:'Worked across scriptwriting, anchoring, video editing and content coordination. Mentored students, became part of the team and helped operate JMIT Chronicles across two seasons.', metrics: [], note:'Mentoring · Team operations · Two seasons' },
    { name:'Net Impact Delhi University', role:'Marketing & Communications', image:'/images/experience/netimpact-team.webp', alt:'Net Impact Delhi University marketing and communications team', description:'Contributed to digital communication through posters, videos and content created in collaboration with the marketing and communications team.', metrics: experiences[4].metrics, note:'Posters · Videos · Digital communication' },
  ];
  const entry = entries[active];
  return <section className="section experience-section" id="experience">
    <div className="section-kicker"><span>03</span><span>PROFESSIONAL EXPERIENCE</span><span className="kicker-rule"/></div>
    <div className="section-heading-row"><div><p className="overline">Different teams, shared momentum</p><h2>Work that moves<br/><em>things forward.</em></h2></div></div>
    <div className="experience-content"><div className="experience-list" role="tablist" aria-label="Professional experience">{entries.map((item,index)=><button className={`experience-item ${active===index?'active':''}`} key={item.name} role="tab" aria-selected={active===index} onClick={()=>setActive(index)}><span className="experience-num">0{index+1}</span><span className="experience-main"><strong>{item.name}</strong><small>{item.role}</small></span><ArrowUpRight className="experience-arrow" size={18}/></button>)}</div>
      <article className="experience-visual" role="tabpanel"><div className={`experience-visual-image experience-image-${active}`}>{entry.image ? <Photo number={entry.image} alt={entry.alt}/> : <div className="experience-visual-type"><span>0{active+1}</span><strong>{entry.name}</strong><small>{entry.role}</small></div>}</div><p className="experience-visual-role">{entry.role}</p><h3>{entry.name}</h3><p className="experience-description">{entry.description}</p><p className="experience-results">{entry.note}</p><div className="experience-metrics">{entry.metrics.map(([value,label])=><div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></article>
    </div>
  </section>;
}

function Work() {
  return <section className="section work-section" id="work">
    <div className="section-kicker"><span>04</span><span>SELECTED PROJECTS</span><span className="kicker-rule"/></div>
    <div className="work-intro"><div><p className="overline">Two digital project concepts</p><h2>Ideas, made<br/><em>visible.</em></h2></div><p>Project work focused on practical journeys and clear, useful interfaces.</p></div>
    <div className="work-grid">
      <article className="project-card project-pglife"><div className="project-media browser-shot"><Photo number={3} alt="PG Life accommodation discovery homepage screenshot"/></div><div className="project-details"><span className="project-type">DIGITAL PRODUCT · WEB</span><h3>PG Life</h3><p>A platform concept for helping users explore paying-guest accommodation options.</p><div><span>My contribution</span><p>Worked on the project structure, user-facing experience and supporting functionality.</p></div></div></article>
      <article className="project-card project-cabhelp"><div className="project-media browser-shot"><Photo number={6} alt="CabHelp driver registration form concept screenshot"/></div><div className="project-details"><span className="project-type">SERVICE CONCEPT · WEB</span><h3>CabHelp</h3><p>A cab-booking platform concept focused on the request-to-ride journey.</p><div><span>My contribution</span><p>Worked on the driver registration flow and service concept, with attention to the steps between requesting and completing a ride.</p></div></div></article>
    </div>
  </section>;
}

function CreativeWork() {
  const galleryImages = [7,8,9,10,11,12,13,14,15,16,17,18,19,20,21].map(img);
  const bentoItems = [
    { id:'tunic', title:'TUNIC Club', subtitle:'Events', description:'Institutional and inter-school events', icon:<Users size={16}/>, image:img(8) },
    { id:'chronicles', title:'JMIT Chronicles', subtitle:'Video stories', description:'Script, camera and edit', icon:<Camera size={16}/>, image:img(15) },
    { id:'events', title:'Events & teams', subtitle:'Execution', description:'Coordination and on-ground work', icon:<BriefcaseBusiness size={16}/>, image:img(11) },
    { id:'community', title:'Community work', subtitle:'Participation', description:'Activities with student groups', icon:<Images size={16}/>, image:img(12) },
  ];
  return <section className="section creative-section" id="creative">
    <div className="section-kicker"><span>05</span><span>CREATIVE WORK & EVENTS</span><span className="kicker-rule"/></div>
    <div className="creative-heading"><p className="overline">Ideas take shape with a team</p><h2>Made together,<br/><em>out in the world.</em></h2><p>Event work, team coordination and storytelling, from preparation through to the final details.</p></div>
    <div className="creative-stories">
      <article className="creative-story tunic-story"><div className="creative-story-photo"><Photo number={8} alt="Zest Day event stage and TUNIC Club banner"/></div><div><span className="project-type">TEAM LEADERSHIP · EVENTS</span><h3>TUNIC Club, JMIT</h3><p>Helped shape these events from early planning to show day, contributing to promotions, creative setup, task handoffs and on-ground coordination.</p></div></article>
      <article className="creative-story"><Photo number={9} alt="Student team meeting around a table"/><div><span className="project-type">COORDINATION · EXECUTION</span><h3>Making the plan work</h3><p>Preparation means working through the small details, sharing responsibilities and keeping people aligned as plans move toward event day.</p></div></article>
      <article className="creative-story"><Photo number={15} alt="A student editing a JMIT Chronicles video"/><div><span className="project-type">STORYTELLING · COMMUNICATION</span><h3>JMIT Chronicles</h3><p>Mentored students, became part of the team and helped operate JMIT Chronicles across two seasons.</p></div></article>
      <article className="creative-story gsa-story"><div className="gsa-photo-stack"><img className="gsa-certificate" src="/images/experience/gsa-certificate.webp" alt="Google Student Ambassador Program certificate of completion"/><img className="gsa-kit" src="/images/experience/gsa-kit.webp" alt="Google Student Ambassador welcome kit"/><img className="gsa-spark" src="/images/experience/gemini-spark.webp" alt="Gemini sparkle icon"/></div><div><span className="project-type">STUDENT COMMUNITY · AI</span><h3>Google Student Ambassador</h3><p>Selected among the Top 250 ambassadors for 2025. The program encouraged representing Gemini on campus, leading AI workshops and helping peers explore hands-on initiatives.</p></div></article>
    </div>
    <div className="creative-collage-divider">
      <div className="creative-collage-divider-heading"><span>SCRAPS FROM THE ARCHIVE</span><p>Click the photographs to bring them together</p></div>
      <Suspense fallback={null}><ImageCollage instruction="Toggle the photo arrangement" className="creative-collage-spread" images={[{src:img(7),x:-210,y:-8,rotate:-9,alt:'TUNIC Club team at a college event'},{src:img(9),x:-140,y:12,rotate:-5,alt:'Student team meeting around a table'},{src:img(10),x:-70,y:-14,rotate:4,alt:'Student community event outdoors'},{src:img(11),x:0,y:9,rotate:8,alt:'Students at a campus event'},{src:img(12),x:70,y:-11,rotate:-5,alt:'Student team at an event'},{src:img(13),x:140,y:13,rotate:6,alt:'TUNIC Club event on stage'},{src:img(14),x:210,y:-7,rotate:-7,alt:'Student recording a campus event'}]} containerClassName="creative-collage-spread-items" imageClassName="creative-collage-spread-item"/></Suspense>
    </div>
    <div className="creative-gallery-heading"><p className="overline">A few moments from the work</p><p>Event and team photographs from the portfolio.</p></div>
    <Suspense fallback={<p className="gallery-loading">Loading the photo gallery…</p>}><StaggeredGrid images={galleryImages} bentoItems={bentoItems} centerText="MADE TOGETHER" imageAlt="Student event and team photograph" showFooter={false} className="portfolio-staggered"/></Suspense>
  </section>;
}

function Travel() {
  const [active, setActive] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [bookOpen, setBookOpen] = useState(false);
  const [bookWidth, setBookWidth] = useState(180);
  const savedScrollY = useRef(0);
  useEffect(() => {
    const updateBookSize = () => setBookWidth(Math.min(360, Math.floor((window.innerWidth - 36) / 2)));
    updateBookSize();
    window.addEventListener('resize', updateBookSize);
    return () => window.removeEventListener('resize', updateBookSize);
  }, []);
  useEffect(() => {
    if (!bookOpen) return undefined;
    const body = document.body;
    const previousBodyStyles = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    savedScrollY.current = window.scrollY;
    body.style.position = 'fixed';
    body.style.top = `-${savedScrollY.current}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    body.style.overflow = 'hidden';
    return () => {
      Object.assign(body.style, previousBodyStyles);
      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, savedScrollY.current);
      requestAnimationFrame(() => { root.style.scrollBehavior = previousScrollBehavior; });
    };
  }, [bookOpen]);
  const place = destinations[active];
  const changePlace = (i) => { setActive((i + destinations.length) % destinations.length); setPhotoIndex(0); };
  const movePhoto = (step) => setPhotoIndex((photoIndex + step + place.images.length) % place.images.length);
  return <section className="travel-section" id="travel">
    <div className="travel-grid-orbit" aria-hidden="true"/>
    <div className="travel-top"><div className="section-kicker"><span>06</span><span>TRAVEL JOURNAL</span><span className="kicker-rule"/></div>
      <div className="travel-title-row"><div><p className="overline">A record of places and perspective</p><h2>Somewhere<br/>along the <em>way.</em></h2></div><div className="travel-intro"><p>I've always enjoyed stepping outside the familiar. Travelling gives me the chance to experience different environments, observe how people live, discover local cultures and look at everyday things from a different perspective.</p><p>From mountain trails and quiet riversides to historic streets and unfamiliar cities, every journey teaches me something. Sometimes it's about adapting to a new place, sometimes it's a conversation with someone along the way, and sometimes it's simply learning to slow down and notice the details.</p><p>I like documenting these experiences through photographs and videos, keeping a record of not just where I've been, but what each place has made me see differently.</p></div></div>
    </div>
    <div className="journal">
      <div className="journal-sidebar"><span className="journal-label">PLACES I'VE BEEN</span><div className="destination-list" role="tablist" aria-label="Travel chapters">{['Mountain journeys','Culture & heritage','Personal moments','Mountain escapes'].map((group)=><div className="destination-group" key={group}><span>{group}</span>{destinations.map((d,i)=>d.category===group&&<button className={i===active?'destination-tab active':'destination-tab'} key={d.name} onClick={()=>changePlace(i)} role="tab" aria-selected={i===active}><span>{String(i+1).padStart(2,'0')}</span>{d.name}</button>)}</div>)}</div></div>
      <div className="journal-feature">
        <div className="journal-image-wrap"><Photo number={place.images[photoIndex]} alt={`${place.name} travel photograph, frame ${photoIndex + 1}`} key={`${active}-${photoIndex}`} eager={active === 0 && photoIndex === 0}/><div className="journal-image-shade"/>
          <div className="image-location"><MapPin size={13}/>{place.tag}</div><div className="journal-frame-count">{String(photoIndex + 1).padStart(2, '0')} <i/> {String(place.images.length).padStart(2, '0')}</div>
          <div className="journal-image-title"><span>CHAPTER 0{active + 1}</span><h3>{place.name}</h3></div>
          <div className="image-controls"><button onClick={() => movePhoto(-1)} aria-label="Previous photograph"><ArrowLeft size={18}/></button><button onClick={() => movePhoto(1)} aria-label="Next photograph"><ArrowRight size={18}/></button></div>
        </div>
        <div className="journal-caption"><p>{place.note}</p><button className="open-book-button" onClick={() => setBookOpen(true)}>Open this travel story <ArrowUpRight size={14}/></button></div>
      </div>
      {bookOpen && <div className="book-modal" role="dialog" aria-modal="true" aria-label={`${place.name} travel story`}><button className="book-modal-close" onClick={() => setBookOpen(false)} aria-label="Close travel story and return to this place"><X/></button><p className="book-modal-label">FIELD NOTES · {place.name.toUpperCase()}</p><div className="book-component-wrap"><Suspense fallback={<span>Opening the journal…</span>}><InteractiveBook className="travel-story-book" coverImage={img(place.cover)} bookTitle={place.name} bookAuthor={place.tag} width={bookWidth} height={Math.round(bookWidth * 1.36)} pages={place.images.map((photo, index) => ({pageNumber:index+1,title:`${place.name} · ${String(index+1).padStart(2,'0')}`,content:<><img className="book-page-image" src={img(photo)} alt={`${place.name} travel photograph ${index+1}`}/><p className="book-page-caption">{place.tag}</p></>}))}/></Suspense></div><span className="book-modal-tip">OPEN THE COVER · USE THE ARROWS OR LEFT AND RIGHT KEYS TO TURN PAGES</span></div>}
    </div>
    <div className="travel-photo-grid">{['Mountain journeys','Culture & heritage','Personal moments','Mountain escapes'].map((label)=><button key={label} onClick={()=>changePlace(destinations.findIndex((d)=>d.category===label))}><span>{label}</span><div>{destinations.filter((destination)=>destination.category===label).flatMap((destination)=>destination.images).slice(0,4).map((photo,index)=><Photo key={`${label}-${photo}-${index}`} number={photo} alt={`${label} travel photograph ${index+1}`}/>)}</div></button>)}</div>
  </section>;
}

function Contact() {
  const [status, setStatus] = useState('idle');
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'krishtiwari136118@gmail.com';
  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    const data = new FormData(form);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: data.get('name'), email: data.get('email'), _replyto: data.get('email'), message: data.get('message'), _subject: 'Portfolio contact form' }),
      });
      const payload = await response.text();
      let result = {};
      try { result = JSON.parse(payload); } catch { result = { message: payload }; }
      if (!response.ok || result.success !== 'true' && result.success !== true) {
        if (String(result.message || '').toLowerCase().includes('activation')) {
          setStatus('activation');
          return;
        }
        throw new Error('The message could not be sent. Please email directly.');
      }
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };
  return <footer className="contact-section" id="contact"><div className="contact-top"><div className="section-kicker"><span>07</span><span>CONTACT</span><span className="kicker-rule"/></div><div className="contact-layout"><div className="contact-copy"><p className="overline">For projects, ideas and opportunities</p><h2>Get in<br/><em>touch.</em></h2><p>Have an idea, a project or an opportunity in mind?</p><p>I'd be happy to hear about it. I'm always open to thoughtful conversations, interesting collaborations and opportunities to create something meaningful.</p><a className="email-link" href={`mailto:${contactEmail}`}><Mail size={17}/>{contactEmail}<ArrowUpRight size={15}/></a><div className="social-links"><a href="https://www.instagram.com/krish_2926" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13}/></a><a href="https://www.linkedin.com/in/krish2926" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a></div></div>
      <form className="contact-form" onSubmit={submit}><label>Your name<input name="name" autoComplete="name" maxLength="100" placeholder="Your name" required/></label><label>Your email<input type="email" name="email" autoComplete="email" maxLength="254" placeholder="you@example.com" required/></label><label>Message<textarea name="message" minLength="10" maxLength="5000" placeholder="Write your message" rows="4" required/></label><Suspense fallback={<button type="button" className="send-button" disabled>Loading button…</button>}><LiquidMetalButton type="submit" size="sm" disabled={status === 'sending'} icon={<ArrowUpRight size={16}/>} metalConfig={{colorBack:'#849170',colorTint:'#e3a18a',speed:.38}} className="send-metal">{status === 'sending' ? 'Sending…' : status === 'sent' ? 'Send another message' : 'Send message'}</LiquidMetalButton></Suspense><span className={`form-note ${status === 'error' || status === 'activation' ? 'form-error' : ''}`} aria-live="polite">{status === 'sent' ? 'Thanks. Your message has been sent.' : status === 'activation' ? `One setup step remains: open the FormSubmit activation email sent to ${contactEmail}, then try again.` : status === 'error' ? 'Your message could not be sent. Please try again or email directly.' : status === 'sending' ? 'Sending your message…' : ''}</span></form></div></div>
    <div className="footer-bottom"><div className="footer-signoff"><span className="footer-wordmark">Krish<span>.</span></span><div><strong>Krish Tiwari</strong><small>Stay curious. Make things happen.</small></div></div><div className="footer-links"><a href="https://www.instagram.com/krish_2926" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={12}/></a><a href="https://www.linkedin.com/in/krish2926" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12}/></a><a href={`mailto:${contactEmail}`}>Email <ArrowUpRight size={12}/></a><a href="#home">Back to top <ArrowUpRight size={12}/></a></div></div>
  </footer>;
}

export default function App() {
  const appRef = useRef(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return undefined;
    const elements = document.querySelectorAll('.hero-copy, .hero-photo-wrap, .about-layout, .bring-card, .experience-item, .experience-visual, .project-card, .creative-story, .journal, .travel-photo-grid, .contact-layout');
    elements.forEach((element, index) => {
      element.classList.add('scroll-reveal');
      element.style.setProperty('--reveal-delay', `${(index % 4) * 55}ms`);
    });
    document.documentElement.classList.add('scroll-motion-ready');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('scroll-motion-ready');
    };
  }, []);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const context = gsap.context(() => {
      gsap.to('.hero-photo-frame', { y: -28, ease: 'none', scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: 0.7 } });
      gsap.to('.hero-instant-sunset', { y: -36, rotate: 10, ease: 'none', scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: 0.9 } });
      gsap.to('.hero-instant-mountain', { y: 24, rotate: -12, ease: 'none', scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: 0.9 } });
      gsap.to('.travel-grid-orbit', { backgroundPosition: '110px 150px', ease: 'none', scrollTrigger: { trigger: '#travel', start: 'top bottom', end: 'bottom top', scrub: 0.8 } });
    }, appRef);
    return () => context.revert();
  }, []);
  return <><div className="site-wave-background" aria-hidden="true"><Suspense fallback={null}><WaveGridBackground gridSize={26} colorBase="#f7f5ed" colorHigh="#cc8166" waveAmplitude={0.56} waveSpeed={5.5} waveWidth={3.6} waveMaxHeight={0.62}/></Suspense></div><div className="portfolio-content" ref={appRef}><Header/><main><Hero/><About/><WhatIBring/><Experience/><Work/><CreativeWork/><Travel/><Contact/></main></div></>;
}
