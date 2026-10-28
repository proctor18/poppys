import Image from "next/image";

const instagram = "https://www.instagram.com/poppys_yeg/";
const maps = "https://www.google.com/maps/search/?api=1&query=10621+100+Avenue+NW+Edmonton+AB";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d={diagonal ? "M5 19 19 5M8 5h11v11" : "M4 12h16m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Instagram() {
  return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="17.4" cy="6.8" r="1" fill="currentColor"/></svg>;
}

function Flower({ className = "" }: { className?: string }) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 172 172" fill="none"><g stroke="currentColor" strokeWidth="1.45"><path d="M86 65C70 37 47 25 30 39c-16 14-5 41 25 47C25 93 17 113 32 132c15 19 43 6 54-23 9 28 33 42 52 26 19-16 9-41-22-49 30-6 44-30 29-47-16-19-42-10-59 26Z"/><path d="M86 65C82 44 76 28 67 16M55 86 15 83m71 26-5 48m35-71 41-7" opacity=".45"/><circle cx="86" cy="86" r="17"/><circle cx="86" cy="86" r="6"/><path d="M78 78 71 71m23 7 7-7M78 94l-7 7m23-7 7 7"/></g></svg>;
}

function Brand() {
  return <a href="#home" className="brand" aria-label="Poppy's Coffee and Juice, back to top"><span className="brand-script">Poppy&apos;s</span><span className="brand-subtitle">COFFEE &amp; JUICE</span></a>;
}

function Header() {
  return <>
    <div className="opening-ribbon"><span>COMING SOON</span><span className="ribbon-diamond" aria-hidden="true"/><span>10621 100 AVE NW, EDMONTON</span></div>
    <header className="site-header"><div className="header-inner shell">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation"><a href="#offerings">The good stuff</a><a href="#space">Our space</a><a href="#visit">Find us</a></nav>
      <a className="header-social" href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Follow Poppy's on Instagram"><span>FOLLOW ALONG</span><Instagram /></a>
      <details className="mobile-menu"><summary aria-label="Open navigation menu"><span/><span/><span/></summary><nav aria-label="Mobile navigation"><a href="#offerings">The good stuff</a><a href="#space">Our space</a><a href="#visit">Find us</a><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram <Arrow diagonal /></a></nav></details>
    </div></header>
  </>;
}

const offerings = [
  { number: "01", title: "Coffee", note: "For the first sip & the slow afternoon.", image: "/images/poppys-coffee.webp", alt: "Poppy's striped takeaway coffee cup on a marble table" },
  { number: "02", title: "Fresh-pressed juice", note: "Something bright, fresh, and feel-good.", image: "/images/poppys-drinks.webp", alt: "Colourful juices in branded Poppy's cups lined up together" },
  { number: "03", title: "Something to eat", note: "A delicious reason to linger a little longer.", image: "/images/poppys-croissant.webp", alt: "Filled croissant sandwich and coffee at Poppy's" },
];

export default function HomePage() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main">
      <section className="hero" id="home" aria-labelledby="hero-heading">
        <div className="hero-copy"><div className="hero-copy-inner">
          <span className="eyebrow"><span className="eyebrow-rule"/> A LITTLE SOMETHING GOOD</span>
          <h1 id="hero-heading">Your new <em>favourite</em> little corner.</h1>
          <p className="hero-lead">Thoughtfully prepared coffee, fresh-pressed juice, and food worth slowing down for. A place for gathering, nourishment, and the little moments in between.</p>
          <div className="hero-actions"><a className="button button-green" href="#visit">Come find us <Arrow diagonal /></a><a className="text-link" href="#space">Take a look inside <Arrow /></a></div>
          <div className="hero-bottom-note"><span className="note-symbol">✳</span> A new gathering place in downtown Edmonton</div>
        </div><Flower className="hero-watermark"/></div>
        <div className="hero-photo">
          <Image src="/images/poppys-interior-main.webp" alt="Poppy's warm interior with checked flooring, marble tables, rust-coloured chairs and tasseled pendant lights" fill priority sizes="(max-width: 800px) 100vw, 50vw" className="hero-photo-image"/>
          <div className="hero-photo-caption"><span>WELCOME TO POPPY&apos;S</span><span>EST. IN EDMONTON</span></div>
          <div className="hero-seal" aria-hidden="true"><span>COME AS YOU ARE</span><b>P</b><span>STAY A WHILE</span></div>
        </div>
      </section>
      <div className="stripe-divider" aria-hidden="true"/>
      <section className="intro" aria-label="About Poppy's">
        <Flower className="intro-flower"/><span className="eyebrow eyebrow-centered">MEET YOU AT POPPY&apos;S</span>
        <p>For <i>catching up.</i> For <i>slowing down.</i><br/>For the simple joy of <i>being here.</i></p>
        <span className="intro-small">A NEIGHBOURHOOD FEEL, RIGHT IN THE HEART OF THE CITY.</span>
      </section>
      <section className="offerings" id="offerings" aria-labelledby="offerings-heading"><div className="offerings-inner shell-wide">
        <div className="section-heading offerings-heading"><div><span className="eyebrow eyebrow-gold">MADE FOR YOUR EVERYDAY RITUALS</span><h2 id="offerings-heading">The good <em>stuff.</em></h2></div><p>A little pick-me-up, a midday pause, or a reason to get together. Whatever brings you in, we&apos;ve got a place for you.</p></div>
        <div className="offering-grid">{offerings.map(item => <article key={item.number} className="offering-card"><div className="offering-image-wrap"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 90vw, (max-width: 1050px) 45vw, 30vw"/><span className="offering-number">{item.number} / 03</span></div><div className="offering-info"><h3>{item.title}</h3><p>{item.note}</p></div></article>)}</div>
        <div className="offerings-note"><span>Curious what&apos;s on the menu?</span><a href={instagram} target="_blank" rel="noopener noreferrer">The latest is on Instagram <Arrow diagonal /></a></div>
      </div></section>
      <section className="space" id="space" aria-labelledby="space-heading"><div className="space-layout shell-wide">
        <div className="space-photos"><div className="space-photo-main"><Image src="/images/poppys-seating.webp" alt="Poppy's striped banquette, warm rust chairs and arched cane-panel walls" fill sizes="(max-width: 800px) 90vw, 43vw"/></div><div className="space-photo-detail"><Image src="/images/poppys-tables.webp" alt="Marble tabletops and custom upholstered seating at Poppy's" fill sizes="(max-width: 800px) 55vw, 24vw"/></div><span className="space-photo-label">A LITTLE LOOK INSIDE</span></div>
        <div className="space-copy"><span className="eyebrow">THE SPACE</span><h2 id="space-heading">Come in.<br/><em>Get comfy.</em><br/>Stay awhile.</h2><div className="small-gold-rule"/><p>We think the best parts of the day are often the unplanned ones. The conversations that run long. The coffee that turns into another coffee. The moments you wish would last just a little longer.</p><p>With soft textures, warm corners, and a seat waiting for you, Poppy&apos;s is made for all of it.</p><a className="underlined-link" href="#visit">We&apos;ll save you a seat <Arrow /></a><Flower className="space-flower"/></div>
      </div></section>
      <section className="interlude" aria-label="Poppy's philosophy"><div className="interlude-inner shell"><span className="interlude-star" aria-hidden="true">✳</span><p>Good coffee. Good company.<br/><em>A little more time to enjoy both.</em></p><span className="interlude-star" aria-hidden="true">✳</span></div></section>
      <section className="visit" id="visit" aria-labelledby="visit-heading">
        <div className="visit-photo"><Image src="/images/poppys-interior-main.webp" alt="View toward the Poppy's coffee counter and green-gold wall sign" fill sizes="(max-width: 800px) 100vw, 48vw"/><span className="visit-photo-label">SEE YOU SOON</span></div>
        <div className="visit-content"><div className="visit-content-inner"><span className="eyebrow eyebrow-gold">YOUR NEXT LITTLE STOP</span><h2 id="visit-heading">Find us <em>here.</em></h2><p className="visit-intro">Just a little corner of downtown, waiting to become part of your day.</p>
          <div className="visit-detail"><span className="detail-label">WHERE TO FIND US</span><address>10621 100 Avenue NW<br/>Edmonton, Alberta</address><a className="detail-link" href={maps} target="_blank" rel="noopener noreferrer">Get directions <Arrow diagonal /></a></div>
          <div className="visit-detail visit-opening"><span className="detail-label">OPENING SOON</span><p>We&apos;re putting the finishing touches on things. Follow along for our opening announcement and the latest updates.</p><a className="detail-link" href={instagram} target="_blank" rel="noopener noreferrer"><Instagram/> @poppys_yeg <Arrow diagonal /></a></div>
        </div></div>
      </section>
      <section className="closing" aria-label="Follow Poppy's"><span className="eyebrow">GOOD THINGS ARE COMING</span><p>We can&apos;t wait to <em>meet you.</em></p><a href={instagram} target="_blank" rel="noopener noreferrer" className="button button-outline">Follow the journey <Arrow diagonal /></a></section>
    </main>
    <footer className="footer"><div className="footer-inner shell-wide"><Brand/><p>Thoughtfully prepared. Happily shared.<br/>Downtown Edmonton, Alberta.</p><div className="footer-links"><a href="#home">Back to top ↑</a><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram <Arrow diagonal/></a></div></div><div className="footer-bottom shell-wide"><span>© {new Date().getFullYear()} POPPY&apos;S COFFEE &amp; JUICE</span><span>MADE WITH LOVE IN EDMONTON</span></div></footer>
  </>;
}
