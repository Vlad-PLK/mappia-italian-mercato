import { useMemo, useState } from 'react'
import {
  categoryCards,
  chefNote,
  contact,
  dailySuggestions,
  drinks,
  epicerieFilters,
  epicerieProducts,
  home,
  navLinks,
  traiteur,
  traiteurSpecials,
  cateringFeatures,
} from './content'

function SectionIntro({ eyebrow, title, body }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="section-title">{title}</h2>
      {body ? <p className="section-copy">{body}</p> : null}
    </div>
  )
}

function App() {
  const [activeFilter, setActiveFilter] = useState('Tutto')

  const visibleProducts = useMemo(() => {
    if (activeFilter === 'Tutto') return epicerieProducts
    return epicerieProducts.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <div className="page-noise" aria-hidden="true" />

      <header className="sticky top-0 z-50 border-b border-white/40 bg-[rgba(251,250,238,0.76)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
          <a href="#home" className="brand-mark">
            Ma' Pia
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#epicerie" className="button-primary hidden md:inline-flex">
            Commander
          </a>
        </div>
        <nav className="mobile-anchor-nav md:hidden">
          {navLinks.slice(0, 4).map((link) => (
            <a key={link.href} href={link.href} className="mobile-anchor-link">
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-10 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-16">
          <div className="relative z-10">
            <span className="eyebrow">{home.kicker}</span>
            <h1 className="hero-title">
              {home.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-[var(--color-muted)] md:text-xl">{home.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={home.primaryAction.href} className="button-primary">
                {home.primaryAction.label}
              </a>
              <a href={home.secondaryAction.href} className="button-secondary">
                {home.secondaryAction.label}
              </a>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {categoryCards.map((card) => (
                <article key={card.title} className="info-pill">
                  <span className="info-pill-accent">{card.accent}</span>
                  <h3 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-red)]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{card.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="hero-image-shell">
              <img src={home.heroImage} alt={home.heroAlt} className="h-full w-full object-cover" />
            </div>
            <div className="floating-badge">{home.badge}</div>
            <div className="hero-card">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-red)]">Concept</p>
              <p className="mt-3 font-[var(--font-display)] text-3xl font-semibold leading-tight text-[var(--color-forest)]">
                Editorial, chaleureux, sans folklore surcharge.
              </p>
            </div>
          </div>
        </section>

        <section className="section-band bg-[var(--color-soft)]">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionIntro
              eyebrow="Main design.md"
              title="Unifie en une seule promenade gourmande"
              body="La page reprend l'energie vibrant-minimaliste de l'accueil, la douceur lumineuse du traiteur, la structure editoriale des suggestions et la grille boutique de l'epicerie."
            />
          </div>
        </section>

        <section id="traiteur" className="section-band bg-[linear-gradient(180deg,var(--color-paper)_0%,#fffdf7_100%)]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="relative order-2 lg:order-1">
              <div className="image-card -rotate-2">
                <img src={traiteur.image} alt="Chef preparant des pates" className="h-full w-full object-cover" />
              </div>
              <div className="script-note">{traiteur.scriptNote}</div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionIntro eyebrow={traiteur.kicker} title={traiteur.title} body={traiteur.intro} />
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="button-primary">
                  Demander un devis
                </a>
                <a href="#epicerie" className="button-secondary">
                  Voir l'epicerie
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {cateringFeatures.map((feature) => (
                  <article key={feature.title} className="feature-card">
                    <h3 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-forest)]">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{feature.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-7xl px-5 md:px-8">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionIntro
                eyebrow="Selection traiteur"
                title="Nos plats signatures"
                body="Des assiettes pretes a servir, avec une mise en scene plus douce et lumineuse que l'accueil, mais la meme exigence produit."
              />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {traiteurSpecials.map((dish) => (
                <article key={dish.title} className="special-card">
                  <div className="special-card-image">
                    <img src={dish.image} alt={dish.title} className="h-full w-full object-cover" />
                    <span className="special-card-badge">{dish.badge}</span>
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
        </section>

        <section id="suggestions" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <SectionIntro
            eyebrow="Suggestions du Jour"
            title="Semaine du 19 au 25 janvier"
            body="Cuisine familiale d'inspiration italienne, preparee chaque matin avec les produits de notre epicerie et servie comme un menu de trattoria contemporaine."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {dailySuggestions.map((item, index) => (
              <article
                key={item.day}
                className={index === dailySuggestions.length - 1 ? 'menu-card menu-card-featured xl:col-span-1' : 'menu-card'}
              >
                <span className="menu-card-number">{item.number}</span>
                <h3 className="font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight">{item.day}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{item.dish}</p>
                <div className="mt-8 flex items-center justify-between gap-4">
                  <span className="font-[var(--font-display)] text-2xl font-black text-[var(--color-red)]">{item.price}</span>
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                    {index === dailySuggestions.length - 1 ? 'Mercato' : 'Plat du jour'}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="quote-panel">
              <span className="eyebrow">Note du chef</span>
              <h3 className="font-[var(--font-display)] text-4xl font-black leading-tight text-[var(--color-forest)] md:text-5xl">
                {chefNote.quote}
              </h3>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">{chefNote.text}</p>
              <a href="#traiteur" className="button-primary mt-8 inline-flex">
                Reserver une table
              </a>
            </div>
            <div className="relative">
              <div className="image-card rotate-[1.5deg]">
                <img src={chefNote.image} alt="Plat de pates fraiches" className="h-full w-full object-cover" />
              </div>
              <div className="tag-burst">Produit du mois</div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {drinks.map((drink) => (
              <div key={drink.name} className="drink-row">
                <div>
                  <p className="font-[var(--font-display)] text-xl font-bold uppercase text-[var(--color-forest)]">{drink.name}</p>
                  <p className="text-sm italic text-[var(--color-muted)]">{drink.meta}</p>
                </div>
                <span className="font-[var(--font-display)] text-xl font-bold text-[var(--color-red)]">{drink.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="epicerie" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <SectionIntro
            eyebrow="L'Epicerie"
            title="Le comptoir artisanal"
            body="Une grille boutique plus nette, inspiree de l'ecran epicerie, mais ramenee dans la meme palette crema, forest et pomodoro pour ne pas casser l'unite du site."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {epicerieFilters.map((filter) => {
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
          <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {visibleProducts.map((product) => (
              <article key={product.title} className="product-card">
                <div className="product-media">
                  <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
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
                <button type="button" className="button-primary mt-6 w-full justify-center">
                  Ajouter au panier
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-band bg-[var(--color-soft)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:items-stretch">
            <div className="contact-panel">
              <SectionIntro
                eyebrow="Visiter la famiglia"
                title="Un dernier arret avant de commander"
                body="L'adresse, les horaires et un ton de service qui prolongent l'esprit de la boutique jusque dans le digital."
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
                <div>
                  <p className="contact-label">Telephone</p>
                  <p className="contact-copy">{contact.phone}</p>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="mailto:ciao@mapia-mercato.it" className="button-primary">
                  Ecrire a l'equipe
                </a>
                <a href="#home" className="button-secondary">
                  Retour en haut
                </a>
              </div>
            </div>
            <div className="contact-image-shell">
              <img src={contact.image} alt="Interieur de la boutique Ma' Pia" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[rgba(27,28,21,0.08)] bg-[var(--color-walnut)] px-5 py-10 text-[var(--color-paper)] md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="brand-mark text-[var(--color-paper)]">Ma' Pia</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-[rgba(251,250,238,0.72)]">
              Trattoria Moderna assemblee depuis les layouts Stitch de Mappia en une seule narration web React, Tailwind et Vite.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-[rgba(251,250,238,0.72)]">
            <a href="#suggestions">Menu</a>
            <a href="#traiteur">Traiteur</a>
            <a href="#epicerie">Epicerie</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
