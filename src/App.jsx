import { useEffect, useMemo, useState } from 'react'
import logoMappia from './logo-mappia.png'
import {
  aperitivoMenu,
  chefNote,
  comptoirMenu,
  contact,
  dailySuggestions,
  drinksMenu,
  epicerieProducts,
  home,
  navLinks,
  traiteur,
  traiteurSpecials,
  wineMenu,
} from './content'

function SectionIntro({ eyebrow, title, body, compact = false }) {
  return (
    <div className={compact ? 'max-w-2xl' : 'max-w-3xl'}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="section-title">{title}</h2>
      {body ? <p className="section-copy">{body}</p> : null}
    </div>
  )
}

function App() {
  const [activeFilter, setActiveFilter] = useState('Tutto')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const catalogueFilters = useMemo(
    () => ['Tutto', ...new Set(epicerieProducts.map((item) => item.category))],
    [],
  )

  const visibleProducts = useMemo(() => {
    if (activeFilter === 'Tutto') return epicerieProducts
    return epicerieProducts.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    )

    targets.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [activeFilter])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileNavOpen(false)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <div className="page-noise" aria-hidden="true" />

      <header className="site-header sticky top-0 z-50 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 md:gap-4 md:px-8 md:py-4">
          <a href="#home" className="brand-link">
            <img src={logoMappia} alt="Logo Ma' Pia" className="brand-logo-simple" loading="eager" decoding="async" />
          </a>

          <button
            type="button"
            className="nav-toggle"
            onClick={() => setMobileNavOpen((prev) => !prev)}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-nav"
            aria-label="Ouvrir le menu"
          >
            <span />
            <span />
            <span />
          </button>

          <nav className="site-nav site-nav-desktop" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <a href="#epicerie" className="nav-cta">
              Commmander
            </a>
          </nav>
        </div>

        <div id="mobile-nav" className={mobileNavOpen ? 'mobile-nav-panel mobile-nav-open' : 'mobile-nav-panel'}>
          <div className="mobile-nav-inner">
            {navLinks.map((link) => (
              <a
                key={`mobile-${link.href}`}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileNavOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#epicerie" className="mobile-nav-cta" onClick={() => setMobileNavOpen(false)}>
              Commmander
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="section-home mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-10 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pt-16"
        >
          <div data-reveal>
            <span className="eyebrow">{home.kicker}</span>
            <h1 className="hero-title">
              {home.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-[var(--color-muted)] md:text-xl">{home.intro}</p>
            <div className="mt-8">
              <a href={home.primaryAction.href} className="button-primary">
                {home.primaryAction.label}
              </a>
            </div>
          </div>

          <div className="hero-image-shell" data-reveal>
            <img
              src={home.heroImage}
              alt={home.heroAlt}
              className="h-full w-full object-cover"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </section>

        <section id="traiteur" className="section-band section-traiteur border-t border-[rgba(20,55,40,0.08)]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="image-card" data-reveal>
              <img
                src={traiteur.image}
                alt="Interieur de Ma' Pia"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div data-reveal>
              <SectionIntro eyebrow={traiteur.kicker} title={traiteur.title} body={traiteur.intro} />
              <div className="mt-8 space-y-4 text-[var(--color-muted)]">
                {traiteur.notes.map((note, index) => (
                  <p key={note} className="leading-8" style={{ '--reveal-delay': `${index * 70}ms` }} data-reveal>
                    {note}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-7xl px-5 md:px-8" data-reveal>
            <SectionIntro
              eyebrow="Selection traiteur"
              title="Plats signatures du moment"
              body="Base OCR nettoyee de la carte actuelle: antipasti, plats chauds et formules a emporter presentes ici de facon lisible."
              compact
            />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {traiteurSpecials.map((dish, index) => (
                <article
                  key={dish.title}
                  className="special-card"
                  data-reveal
                  style={{ '--reveal-delay': `${index * 80}ms` }}
                >
                  <div className="special-card-image">
                    <img
                      src={dish.image}
                      alt={dish.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-[var(--font-display)] text-3xl font-bold text-[var(--color-forest)]">{dish.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{dish.description}</p>
                    </div>
                    <span className="font-[var(--font-display)] text-2xl font-black text-[var(--color-red)]">{dish.price}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-7xl gap-6 px-5 md:px-8 lg:grid-cols-3">
            <article className="menu-list-card" data-reveal>
              <p className="menu-list-title">Antipasti</p>
              <ul className="menu-list">
                {comptoirMenu.antipasti.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="menu-list-card" data-reveal>
              <p className="menu-list-title">Plats</p>
              <ul className="menu-list">
                {comptoirMenu.plats.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="menu-list-card" data-reveal>
              <p className="menu-list-title">Formule a emporter</p>
              <ul className="menu-list">
                {comptoirMenu.takeaway.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mx-auto mt-6 grid max-w-7xl gap-6 px-5 md:px-8 lg:grid-cols-2">
            <article className="menu-list-card" data-reveal>
              <p className="menu-list-title">Desserts</p>
              <ul className="menu-list">
                {comptoirMenu.desserts.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="menu-list-card" data-reveal>
              <p className="menu-list-title">Pizzanino</p>
              <ul className="menu-list compact">
                {comptoirMenu.pizzaninoChoices.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="suggestions" className="section-suggestions mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div data-reveal>
            <SectionIntro
              eyebrow="Suggestions du Jour"
              title="Carte vivante et cave du Piemont"
              body="Chaque bloc reprend la carte OCR corrigee: suggestions de la semaine, cave par couleur, boissons et aperitivo."
            />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {dailySuggestions.map((item, index) => (
              <article
                key={item.day}
                className={index === dailySuggestions.length - 1 ? 'menu-card menu-card-featured' : 'menu-card'}
                data-reveal
                style={{ '--reveal-delay': `${index * 70}ms` }}
              >
                <h3 className="font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight">{item.day}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{item.dish}</p>
                <div className="mt-8 flex items-center justify-between gap-4">
                  <span className="font-[var(--font-display)] text-2xl font-black text-[var(--color-red)]">{item.price}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-6 xl:grid-cols-3">
            <article className="wine-panel" data-reveal>
              <p className="menu-list-title">Vins blancs</p>
              <ul className="menu-list">
                {wineMenu.blancs.map((wine) => (
                  <li key={wine.name}>
                    <span>{wine.name}</span>
                    <span>{wine.price}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="wine-panel" data-reveal>
              <p className="menu-list-title">Vins roses</p>
              <ul className="menu-list">
                {wineMenu.roses.map((wine) => (
                  <li key={wine.name}>
                    <span>{wine.name}</span>
                    <span>{wine.price}</span>
                  </li>
                ))}
              </ul>
              <p className="menu-list-title mt-8">Vins rouges</p>
              <ul className="menu-list">
                {wineMenu.rouges.map((wine) => (
                  <li key={wine.name}>
                    <span>{wine.name}</span>
                    <span>{wine.price}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="wine-panel" data-reveal>
              <p className="menu-list-title">Boissons & aperitivo</p>
              <ul className="menu-list compact">
                {drinksMenu.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="menu-list compact mt-6">
                {aperitivoMenu.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="quote-panel" data-reveal>
              <span className="eyebrow">En cuisine</span>
              <h3 className="font-[var(--font-display)] text-4xl font-black leading-tight text-[var(--color-forest)] md:text-5xl">
                {chefNote.quote}
              </h3>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">{chefNote.text}</p>
            </div>
            <div className="image-card" data-reveal>
              <img
                src={chefNote.image}
                alt="Menu et assiettes de Ma' Pia"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section id="epicerie" className="section-band section-epicerie border-t border-[rgba(20,55,40,0.08)]">
          <div className="mx-auto max-w-7xl px-5 md:px-8" data-reveal>
            <SectionIntro
              eyebrow="L'Epicerie"
              title="Le comptoir artisanal"
              body="Pates, fromages, vins et essentiels de placard selectionnes pour prolonger a la maison le gout de Ma' Pia."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {catalogueFilters.map((filter) => {
                const isActive = filter === activeFilter
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={isActive ? 'filter-chip filter-chip-active' : 'filter-chip'}
                  >
                    {filter}
                  </button>
                )
              })}
            </div>
            <div className="catalogue-grid mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
              {visibleProducts.map((product, index) => (
                <article
                  key={product.title}
                  className="product-card"
                  data-reveal
                  style={{ '--reveal-delay': `${index * 60}ms` }}
                >
                  <div className="product-media">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    {product.tag ? <span className="product-tag">{product.tag}</span> : null}
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-muted)]">{product.category}</p>
                      <h3 className="mt-2 font-[var(--font-display)] text-3xl font-bold text-[var(--color-forest)]">{product.title}</h3>
                    </div>
                    <span className="font-[var(--font-display)] text-2xl font-black text-[var(--color-red)]">{product.price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{product.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-contact mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-stretch">
            <div className="contact-panel" data-reveal>
              <SectionIntro
                eyebrow="Venir chez Ma' Pia"
                title="Une adresse, un comptoir, une table"
                body="Passez pour l'epicerie, restez pour le dejeuner, ou faites preparer votre prochaine reception."
                compact
              />
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="contact-label">Adresse</p>
                  {contact.address.map((line) => (
                    <p key={line} className="contact-copy">
                      {line}
                    </p>
                  ))}
                </div>
                <div>
                  <p className="contact-label">Horaires</p>
                  {contact.hours.map((line) => (
                    <p key={line} className="contact-copy">
                      {line}
                    </p>
                  ))}
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-copy">{contact.email}</p>
                </div>
                {contact.phone ? (
                  <div>
                    <p className="contact-label">Telephone</p>
                    <p className="contact-copy">{contact.phone}</p>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="contact-image-shell" data-reveal>
              <img
                src={contact.image}
                alt="Interieur du comptoir Ma' Pia"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[rgba(27,28,21,0.08)] bg-[var(--color-walnut)] px-5 py-10 text-[var(--color-paper)] md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="brand-mark text-[var(--color-paper)]">Ma' Pia</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-[rgba(251,250,238,0.72)]">
              Epicerie, traiteur et cucina contemporanea italiana.
            </p>
          </div>
          <p className="text-sm text-[rgba(251,250,238,0.72)]">Carte OCR normalisee et design Trattoria Moderna.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
