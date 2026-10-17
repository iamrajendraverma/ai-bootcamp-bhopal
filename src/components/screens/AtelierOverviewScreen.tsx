import React, { useState } from 'react';
import { ArrowRight, Compass, Check, ArrowUpRight, ShieldCheck, Mail, Sparkles } from 'lucide-react';
import { ATELIER_PROJECTS, MATERIALITY_INDEX, ProjectItem, MaterialSpecimen } from '../../data/atelierData';
import { ScreenId } from '../ScreenSwitcherBar';

interface AtelierOverviewScreenProps {
  onSelectProject: (projectId: string) => void;
  onOpenLightbox: (imageUrl: string, title: string, caption?: string, coordinates?: string) => void;
  onInspectMaterial: (material: MaterialSpecimen) => void;
  onOpenCasketDrawer: () => void;
  onNavigateScreen: (screen: ScreenId) => void;
}

export const AtelierOverviewScreen: React.FC<AtelierOverviewScreenProps> = ({
  onSelectProject,
  onOpenLightbox,
  onInspectMaterial,
  onOpenCasketDrawer,
  onNavigateScreen,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Disciplines');
  const [inquiryType, setInquiryType] = useState('Private Residence / Villa');
  const [patronName, setPatronName] = useState('');
  const [patronEmail, setPatronEmail] = useState('');
  const [projectLocation, setProjectLocation] = useState('');
  const [projectArea, setProjectArea] = useState('');
  const [projectIntent, setProjectIntent] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [activeTenet, setActiveTenet] = useState<number>(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const categories = [
    'All Disciplines',
    'Residential Sanctuaries',
    'Boutique Hospitality',
    'Cultural Spaces',
    'Private Villas',
  ];

  const filteredProjects =
    activeCategory === 'All Disciplines'
      ? ATELIER_PROJECTS
      : ATELIER_PROJECTS.filter((p) => p.category === activeCategory);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSuccess(false);
    }, 4000);
  };

  return (
    <div className="w-full bg-[#fcf9f4] text-[#1c1c19]">
      {/* 2. Hero Section */}
      <section className="relative pt-space-xl pb-space-2xl px-margin lg:px-margin-desktop-wide border-b border-outline-variant">
        <div className="max-w-screen-2xl mx-auto">
          {/* Macro Top Meta Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-space-lg border-b border-outline-variant mb-space-xl">
            <div>
              <span className="text-label-caps font-label-caps uppercase text-secondary tracking-widest block mb-2">
                Monograph Edition XXIV
              </span>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Paris 8e • Minami-Aoyama, Tokyo • Zurich Enge
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-4 py-1.5 border border-outline-variant bg-surface-container-low text-label-caps font-label-caps text-on-surface uppercase tracking-widest text-[11px]">
                24 Global Honors — 85 Bespoke Commissions — Founded 2012
              </span>
            </div>
          </div>

          {/* Grand Architectural Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-space-xl">
            <div className="lg:col-span-9">
              <h1 className="text-display-hero font-display-hero text-primary tracking-tight leading-none mb-6">
                Quiet spaces sculpted in shadow, stone, and natural light.
              </h1>
            </div>
            <div className="lg:col-span-3 flex flex-col justify-end">
              <p className="text-body-lg font-body-lg text-on-surface-variant pb-2 leading-relaxed">
                A Paris & Tokyo-based interior architecture atelier crafting timeless residential sanctuaries and contemplative commercial environments.
              </p>
              <div className="pt-6 border-t border-outline-variant flex items-center justify-between text-label-caps font-label-caps uppercase text-on-surface-variant">
                <span>Spatial Coordinates</span>
                <span className="text-primary font-medium">35°39'42"N 139°43'05"E</span>
              </div>
            </div>
          </div>

          {/* Hero Visual (Tactile Panoramic Plate) */}
          <div className="relative w-full overflow-hidden border border-outline-variant bg-surface-container">
            <div
              onClick={() =>
                onOpenLightbox(
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuCGYC03ZOj_ERP8XtVZ1ZOmyicEF_CrbKWqLi65jDXn0f3tB1HbE9_NFCU1QZkMzmMZ63Yfbs006HrJx6jTYthRlxdGzFskd4VPrBl8M4ZXSgVvkUVYabNPdHE95bKgZd6H6eiKHosYrVpmV_LPQ5lLMJyzmODdNXsnyp6hD6icIdT6ojZUp2tFaa-B6hqcqdybNESWoCAe2W7g5T9qMVmMcIKW6lUkrnTZnxH5QFerunp3NwDqwXey',
                  'Residence Minami-Aoyama',
                  'A grand sunlit minimalist limestone interior designed by Atelier Vauquelin. Soaring floor-to-ceiling recessed reveals admit filtered Japanese morning light across raw monolithic travertine benches.',
                  "35°39'42\"N 139°43'05\"E"
                )
              }
              className="relative aspect-[21/9] w-full overflow-hidden group cursor-pointer"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                alt="Minami-Aoyama Residence panoramic plate"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGYC03ZOj_ERP8XtVZ1ZOmyicEF_CrbKWqLi65jDXn0f3tB1HbE9_NFCU1QZkMzmMZ63Yfbs006HrJx6jTYthRlxdGzFskd4VPrBl8M4ZXSgVvkUVYabNPdHE95bKgZd6H6eiKHosYrVpmV_LPQ5lLMJyzmODdNXsnyp6hD6icIdT6ojZUp2tFaa-B6hqcqdybNESWoCAe2W7g5T9qMVmMcIKW6lUkrnTZnxH5QFerunp3NwDqwXey"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

              {/* Floating Coordinate Pill */}
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-sm border border-outline-variant px-5 py-3">
                <span className="text-label-caps font-label-caps uppercase tracking-widest text-[#1c1c19] block">
                  Residence Minami-Aoyama
                </span>
                <span className="text-body-sm font-body-sm text-on-surface-variant">
                  Private Commission • Completed Autumn 2024
                </span>
              </div>
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 hidden sm:flex items-center space-x-3 bg-white/90 backdrop-blur-sm border border-outline-variant px-5 py-3 text-label-caps font-label-caps uppercase tracking-widest text-[#1c1c19]">
                <span>Archival Record No. 84 • Click to Inspect</span>
                <ArrowUpRight className="w-4 h-4 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Selected Spatial Works (Curated Asymmetric Portfolio Grid) */}
      <section className="py-space-2xl px-margin lg:px-margin-desktop-wide bg-surface" id="work">
        <div className="max-w-screen-2xl mx-auto">
          {/* Section Header & Filter Controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-space-lg border-b border-outline-variant mb-space-xl">
            <div>
              <span className="text-label-caps font-label-caps uppercase text-secondary tracking-widest block mb-3">
                Portfolio Portfolio
              </span>
              <h2 className="text-headline-xl font-headline-xl text-primary">Selected Spatial Works</h2>
            </div>
            {/* Filter Tags Bar */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 text-label-caps font-label-caps tracking-widest uppercase border transition-colors ${
                    activeCategory === cat
                      ? 'bg-primary text-white border-primary'
                      : 'bg-surface text-on-surface-variant hover:text-primary border-outline-variant'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Curated Asymmetric Project Grid */}
          <div className="space-y-space-2xl">
            {/* Project 01: Hero Panoramic Layout (The Kyoto Pavillion) */}
            <article className="group grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start pb-space-2xl border-b border-outline-variant">
              <div
                onClick={() =>
                  onOpenLightbox(
                    ATELIER_PROJECTS[0].heroImage,
                    ATELIER_PROJECTS[0].title,
                    ATELIER_PROJECTS[0].summary,
                    ATELIER_PROJECTS[0].coordinates
                  )
                }
                className="lg:col-span-8 overflow-hidden border border-outline-variant bg-surface-container cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                    alt="The Kyoto Pavillion residential sanctuary"
                    src={ATELIER_PROJECTS[0].heroImage}
                  />
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4 lg:pt-0 lg:pl-6">
                <div>
                  <div className="flex items-center justify-between text-label-caps font-label-caps uppercase text-secondary tracking-widest mb-4">
                    <span>Residential Sanctuary • 01</span>
                    <span>Kyoto, Japan</span>
                  </div>
                  <h3 className="text-headline-lg font-headline-lg text-primary mb-4">
                    The Kyoto Pavillion
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-8 leading-relaxed">
                    A 680 m² contemplative residence designed around meditative internal courtyards. Hand-raked mineral plaster, aged cedar rafters, and a monolithic travertine bath frame seasonal cherry blossoms.
                  </p>
                  <dl className="grid grid-cols-2 gap-y-4 gap-x-6 py-6 border-y border-outline-variant text-label-caps font-label-caps uppercase">
                    <div>
                      <dt className="text-on-surface-variant mb-1">Scale</dt>
                      <dd className="text-primary font-medium">680 m² / 7,320 sq.ft</dd>
                    </div>
                    <div>
                      <dt className="text-on-surface-variant mb-1">Timeline</dt>
                      <dd className="text-primary font-medium">2022 — 2024</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-on-surface-variant mb-1">Material Composition</dt>
                      <dd className="text-primary font-medium">
                        Smoked Oak, Raked Plaster, Kyoto Basalt, Brushed Bronze
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="pt-8">
                  <button
                    onClick={() => {
                      onSelectProject('kyoto-pavillion');
                      onNavigateScreen('casestudy');
                    }}
                    className="inline-flex items-center space-x-3 text-label-caps font-label-caps uppercase tracking-widest text-primary border-b border-primary pb-1 group-hover:text-secondary group-hover:border-secondary transition-all"
                  >
                    <span>View Complete Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>

            {/* Project 02 & 03: Two Column Diptych */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl pb-space-2xl border-b border-outline-variant">
              {/* Project 02: Villa Saint-Germain */}
              <article className="group flex flex-col justify-between">
                <div>
                  <div
                    onClick={() =>
                      onOpenLightbox(
                        ATELIER_PROJECTS[1].heroImage,
                        ATELIER_PROJECTS[1].title,
                        ATELIER_PROJECTS[1].summary,
                        ATELIER_PROJECTS[1].coordinates
                      )
                    }
                    className="overflow-hidden border border-outline-variant bg-surface-container mb-6 cursor-pointer"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                        alt="Villa Saint-Germain living salon"
                        src={ATELIER_PROJECTS[1].heroImage}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-label-caps font-label-caps uppercase text-secondary tracking-widest mb-3">
                    <span>Private Penthouse • 02</span>
                    <span>Paris, France</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-primary mb-3">
                    Villa Saint-Germain
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-6 leading-relaxed">
                    Historic 19th-century Haussmannian volume redefined through a bold architectural spine of carved Arabescato marble, patinated bronze reveals, and quiet acoustical drapery.
                  </p>
                  <div className="flex items-center space-x-6 text-label-caps font-label-caps uppercase text-on-surface-variant pb-6 border-b border-outline-variant">
                    <span>420 m²</span>
                    <span>•</span>
                    <span>Completed 2023</span>
                    <span>•</span>
                    <span>Fluted Marble & Walnut</span>
                  </div>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      onSelectProject('villa-saint-germain');
                      onNavigateScreen('casestudy');
                    }}
                    className="inline-flex items-center space-x-3 text-label-caps font-label-caps uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-all"
                  >
                    <span>Examine Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>

              {/* Project 03: Maison Alabaster */}
              <article className="group flex flex-col justify-between">
                <div>
                  <div
                    onClick={() =>
                      onOpenLightbox(
                        ATELIER_PROJECTS[2].heroImage,
                        ATELIER_PROJECTS[2].title,
                        ATELIER_PROJECTS[2].summary,
                        ATELIER_PROJECTS[2].coordinates
                      )
                    }
                    className="overflow-hidden border border-outline-variant bg-surface-container mb-6 cursor-pointer"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                        alt="Maison Alabaster coastal retreat"
                        src={ATELIER_PROJECTS[2].heroImage}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-label-caps font-label-caps uppercase text-secondary tracking-widest mb-3">
                    <span>Coastal Retreat • 03</span>
                    <span>Cap d'Antibes</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-primary mb-3">
                    Maison Alabaster
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-6 leading-relaxed">
                    Stepped limestone terraces overlooking the Mediterranean. A monolithic travertine colonnade serves as an environmental shading filter, inviting sea breezes and soft chiaroscuro.
                  </p>
                  <div className="flex items-center space-x-6 text-label-caps font-label-caps uppercase text-on-surface-variant pb-6 border-b border-outline-variant">
                    <span>890 m²</span>
                    <span>•</span>
                    <span>Completed 2024</span>
                    <span>•</span>
                    <span>Roman Travertine & Sea Salt Linen</span>
                  </div>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      onSelectProject('maison-alabaster');
                      onNavigateScreen('casestudy');
                    }}
                    className="inline-flex items-center space-x-3 text-label-caps font-label-caps uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-all"
                  >
                    <span>Examine Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            </div>

            {/* Project 04: Full Width Architectural Exhibition (Aura Spa & Tea House) */}
            <article className="group grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="flex items-center justify-between text-label-caps font-label-caps uppercase text-secondary tracking-widest mb-4">
                  <span>Wellness Sanctuary • 04</span>
                  <span>Geneva, Switzerland</span>
                </div>
                <h3 className="text-headline-lg font-headline-lg text-primary mb-4">
                  Aura Spa & Tea House
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-6 leading-relaxed">
                  An underground subterranean refuge celebrating raw rammed earth walls, water basins reflecting candlelight, and minimalist black granite seating pods designed for absolute sensory recalibration.
                </p>
                <div className="p-6 bg-surface-container-low border border-outline-variant mb-8 space-y-3">
                  <span className="text-label-caps font-label-caps uppercase text-primary font-medium tracking-widest block">
                    Acoustical & Spatial Mastery
                  </span>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Custom low-frequency sound dampening built into acoustic rammed earth layers, accompanied by a natural spring pool and thermal steam chambers.
                  </p>
                </div>
                <button
                  onClick={() => {
                    onSelectProject('aura-spa');
                    onNavigateScreen('casestudy');
                  }}
                  className="inline-flex items-center space-x-3 text-label-caps font-label-caps uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-all"
                >
                  <span>View Case Study Documentation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div
                onClick={() =>
                  onOpenLightbox(
                    ATELIER_PROJECTS[3].heroImage,
                    ATELIER_PROJECTS[3].title,
                    ATELIER_PROJECTS[3].summary,
                    ATELIER_PROJECTS[3].coordinates
                  )
                }
                className="lg:col-span-7 order-1 lg:order-2 overflow-hidden border border-outline-variant bg-surface-container cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                    alt="Aura Spa and Tea House subterranean interior"
                    src={ATELIER_PROJECTS[3].heroImage}
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. The Atelier Philosophy & Spatial Principles */}
      <section className="py-space-2xl px-margin lg:px-margin-desktop-wide bg-surface-container-low border-y border-outline-variant" id="philosophy">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
            {/* Left Column: Editorial Quote & Signature */}
            <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-outline-variant pb-space-lg lg:pb-0 lg:pr-space-xl">
              <div>
                <span className="text-label-caps font-label-caps uppercase text-secondary tracking-widest block mb-4">
                  Spatial Philosophy
                </span>
                <blockquote className="text-headline-lg font-headline-lg text-primary leading-snug mb-8">
                  “We do not decorate rooms; we orchestrate human sensory experience through proportion, stillness, and honest material permanence.”
                </blockquote>
                <p className="text-body-md font-body-md text-on-surface-variant mb-10 leading-relaxed">
                  True architectural luxury is silent. It exists in the transition between tactile stone and soft drapery; in the intentional calibration of daylight as it tracks across raw plaster through seasons.
                </p>
              </div>
              {/* Founder Attribution Card */}
              <div className="pt-8 border-t border-outline-variant flex items-center justify-between">
                <div>
                  <p className="text-headline-sm font-headline-sm text-primary">Marc Vauquelin</p>
                  <p className="text-label-caps font-label-caps uppercase text-on-surface-variant">
                    Principal Architect & Creative Director
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-label-caps font-label-caps uppercase text-secondary tracking-widest">
                    Paris • Tokyo
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: 3 Core Tenets */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-space-lg">
              {/* Tenet 01 */}
              <div
                onClick={() => setActiveTenet(0)}
                className={`group border-b border-outline-variant pb-8 cursor-pointer transition-opacity ${
                  activeTenet === 0 ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-label-caps font-label-caps uppercase text-secondary tracking-widest">
                    01 / Materiality
                  </span>
                  <span className="text-label-caps font-label-caps uppercase text-on-surface-variant">
                    Principle of Origin
                  </span>
                </div>
                <h4 className="text-headline-md font-headline-md text-primary mb-3 group-hover:text-secondary transition-colors">
                  Material Authenticity
                </h4>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Honoring raw stone, unsealed timbers, and hand-rubbed wax patinas that gracefully age with the inhabitants. We reject synthetic coatings and deceptive veneers in favor of tactile honesty that gathers dignity across decades.
                </p>
              </div>

              {/* Tenet 02 */}
              <div
                onClick={() => setActiveTenet(1)}
                className={`group border-b border-outline-variant pb-8 cursor-pointer transition-opacity ${
                  activeTenet === 1 ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-label-caps font-label-caps uppercase text-secondary tracking-widest">
                    02 / Illumination
                  </span>
                  <span className="text-label-caps font-label-caps uppercase text-on-surface-variant">
                    Principle of Shadow
                  </span>
                </div>
                <h4 className="text-headline-md font-headline-md text-primary mb-3 group-hover:text-secondary transition-colors">
                  Chiaroscuro of Daylight
                </h4>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Choreographing morning rays and twilight shadows to alter emotional weight throughout the day. Light is not treated as a static illumination tool, but as an active sculptural element slicing through space.
                </p>
              </div>

              {/* Tenet 03 */}
              <div
                onClick={() => setActiveTenet(2)}
                className={`group cursor-pointer transition-opacity ${
                  activeTenet === 2 ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-label-caps font-label-caps uppercase text-secondary tracking-widest">
                    03 / Craftsmanship
                  </span>
                  <span className="text-label-caps font-label-caps uppercase text-on-surface-variant">
                    Principle of Singularity
                  </span>
                </div>
                <h4 className="text-headline-md font-headline-md text-primary mb-3 group-hover:text-secondary transition-colors">
                  Bespoke Artistry
                </h4>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Every fixture, custom credenza, and architectural door handle is drawn expressly for each client's unique cadence of living, fabricated in collaboration with European master stonemasons and Japanese wood joiners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tactile Materiality Archive */}
      <section className="py-space-2xl px-margin lg:px-margin-desktop-wide bg-surface" id="materiality">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-space-lg border-b border-outline-variant mb-space-xl">
            <div>
              <span className="text-label-caps font-label-caps uppercase text-secondary tracking-widest block mb-2">
                Tactile Index
              </span>
              <h2 className="text-headline-xl font-headline-xl text-primary">The Materiality Archive</h2>
            </div>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-md leading-relaxed">
              A curated registry of earth-born media, custom woven textiles, and architectural hardware preserved in our material vaults.
            </p>
          </div>

          {/* Horizontal Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-space-xl">
            {MATERIALITY_INDEX.map((mat) => (
              <div
                key={mat.id}
                onClick={() => onInspectMaterial(mat)}
                className="group border border-outline-variant bg-surface-container p-4 flex flex-col justify-between hover:border-secondary transition-colors cursor-pointer"
              >
                <div>
                  <div className="aspect-square overflow-hidden bg-surface-container-high mb-4">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      alt={mat.name}
                      src={mat.image}
                    />
                  </div>
                  <span className="text-label-caps font-label-caps uppercase text-secondary tracking-widest block mb-1">
                    {mat.number} / {mat.category}
                  </span>
                  <h4 className="text-headline-sm font-headline-sm text-primary mb-2">
                    {mat.name}
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mb-4 leading-relaxed line-clamp-3">
                    {mat.finish}. {mat.quarryProvenance}.
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant flex items-center justify-between text-label-caps font-label-caps uppercase text-on-surface-variant">
                  <span>Inspection</span>
                  <span className="text-primary font-medium group-hover:text-secondary flex items-center">
                    Specs <ArrowRight className="w-3 h-3 ml-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Sample Archive Request Strip */}
          <div className="p-8 border border-outline-variant bg-surface-container-low flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <span className="material-symbols-outlined text-3xl text-secondary">
                inventory_2
              </span>
              <div>
                <h4 className="text-headline-sm font-headline-sm text-primary">
                  Private Archival Box for Architects & Patrons
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Request a custom-milled box containing 6 verified material specimens tailored to your upcoming commission.
                </p>
              </div>
            </div>
            <button
              onClick={onOpenCasketDrawer}
              className="inline-flex items-center px-6 py-3 border border-primary text-primary text-label-caps font-label-caps uppercase tracking-widest hover:bg-primary hover:text-white transition-colors"
            >
              Request Archival Casket
            </button>
          </div>
        </div>
      </section>

      {/* 6. Client Recognition & Monograph Highlights */}
      <section className="py-space-2xl px-margin lg:px-margin-desktop-wide bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-screen-2xl mx-auto">
          {/* Critical Acclaim Quotes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter pb-space-2xl border-b border-outline-variant mb-space-2xl">
            <div className="border-l border-outline-variant pl-6">
              <span className="text-label-caps font-label-caps uppercase text-secondary tracking-widest block mb-3">
                Architectural Digest
              </span>
              <p className="text-headline-sm font-headline-sm text-primary italic mb-4 leading-snug">
                “Vauquelin constructs poetry out of quiet limestone. A rare master of silence in a world overwhelmed by ornamentation.”
              </p>
              <span className="text-label-caps font-label-caps uppercase text-on-surface-variant">
                International AD100 Hall of Fame
              </span>
            </div>
            <div className="border-l border-outline-variant pl-6">
              <span className="text-label-caps font-label-caps uppercase text-secondary tracking-widest block mb-3">
                Wallpaper* Magazine
              </span>
              <p className="text-headline-sm font-headline-sm text-primary italic mb-4 leading-snug">
                “The studio's surgical dialogue between Parisian historicism and Japanese spatial restraint sets a new benchmark for the quiet luxury paradigm.”
              </p>
              <span className="text-label-caps font-label-caps uppercase text-on-surface-variant">
                Design Awards 2024 • Best Private Residence
              </span>
            </div>
            <div className="border-l border-outline-variant pl-6">
              <span className="text-label-caps font-label-caps uppercase text-secondary tracking-widest block mb-3">
                Elle Décor
              </span>
              <p className="text-headline-sm font-headline-sm text-primary italic mb-4 leading-snug">
                “Every commission feels like a private museum where shadows carry as much architectural substance as the monolithic marble slabs.”
              </p>
              <span className="text-label-caps font-label-caps uppercase text-on-surface-variant">
                Annual Design Excellence Trophy
              </span>
            </div>
          </div>

          {/* Monograph Feature Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center bg-surface border border-outline-variant p-8 md:p-12">
            <div
              onClick={() => onNavigateScreen('monograph')}
              className="lg:col-span-5 overflow-hidden border border-outline-variant cursor-pointer group"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Volume III: Monograph Monolith"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUxSOQr0A8eRE7tPYnlx_JSSxuACOtmypkHmdItciPdnqYKSqA364IF6GziQ5QWGbdWZFWxG4eWMwdJ3vDi_EfUuPyJa3DDikF86pc2aLG3FK8OwwGZa7FUcSuwYLCII6cFdGyK_eFrHA-lvVaW0RpPxjGPjgFGukU_QtbczVvR7H-I_sit0JsQtOF4Xz11tyvUt3MYwDpRkQTMGKRBUTg4BWEO_a_K1QURxZMwdm1A3AhyAFKg9i-"
              />
            </div>
            <div className="lg:col-span-7 lg:pl-8">
              <span className="text-label-caps font-label-caps uppercase text-secondary tracking-widest block mb-2">
                New Monograph Publication
              </span>
              <h3 className="text-headline-xl font-headline-xl text-primary mb-4">
                Volume III: Monograph Monolith
              </h3>
              <p className="text-body-lg font-body-lg text-on-surface-variant mb-6 leading-relaxed">
                A 440-page clothbound retrospective documenting ten years of residential commissions across Europe and Asia. Featuring essays by prominent architectural theorists, hand-tipped silver-gelatin photographs, and comprehensive tectonic axonometric plates.
              </p>
              <div className="flex flex-wrap items-center gap-6 mb-8 text-label-caps font-label-caps uppercase text-on-surface-variant">
                <span>Numbered Edition of 500</span>
                <span>•</span>
                <span>Uncoated Italian Cotton Paper</span>
                <span>•</span>
                <span>ISBN 978-2-957291-03-8</span>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <button
                  onClick={() => onNavigateScreen('monograph')}
                  className="inline-flex items-center px-8 py-3.5 bg-primary text-white text-label-caps font-label-caps uppercase tracking-widest hover:bg-secondary transition-colors"
                >
                  Acquire Monograph ($280)
                </button>
                <button
                  onClick={() => onNavigateScreen('monograph')}
                  className="text-label-caps font-label-caps uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors"
                >
                  Preview Digital Extract
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Architectural Consultation & Private Inquiries */}
      <section className="py-space-3xl px-margin lg:px-margin-desktop-wide bg-surface" id="inquire">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
            {/* Left Explanatory Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-label-caps font-label-caps uppercase text-secondary tracking-widest block mb-3">
                  Initiate A Dialogue
                </span>
                <h2 className="text-headline-xl font-headline-xl text-primary mb-6">Commission A Space</h2>
                <p className="text-body-lg font-body-lg text-on-surface-variant mb-8 leading-relaxed">
                  We accept a limited number of residential and cultural commissions annually to guarantee unfaltering principal devotion to every detail.
                </p>
                <div className="space-y-6 pt-6 border-t border-outline-variant">
                  <div>
                    <span className="text-label-caps font-label-caps uppercase text-primary font-medium tracking-widest block mb-1">
                      Direct Atelier Concierge
                    </span>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      commissions@atelier-vauquelin.com
                    </p>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      +33 (0)1 42 68 55 10
                    </p>
                  </div>
                  <div>
                    <span className="text-label-caps font-label-caps uppercase text-primary font-medium tracking-widest block mb-1">
                      Studio Visits by Appointment
                    </span>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      14 Rue de Beaujolais, 75001 Paris
                    </p>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      5-7-2 Minami-Aoyama, Minato-ku, Tokyo
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <span className="text-label-caps font-label-caps uppercase text-on-surface-variant tracking-widest block">
                  Confidentiality Guarantee
                </span>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  All proprietary architectural briefs and private residential coordinates are protected under binding bilateral non-disclosure protocols.
                </p>
                <button
                  onClick={() => onNavigateScreen('portal')}
                  className="mt-4 text-xs font-label-caps uppercase text-secondary tracking-widest underline underline-offset-4 hover:text-primary transition-colors block"
                >
                  Or Launch Full 5-Step Spatial Brief Builder →
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Card */}
            <div className="lg:col-span-7 bg-surface-container-low border border-outline-variant p-8 md:p-12">
              {inquirySubmitted ? (
                <div className="p-8 bg-white border border-[#765937] text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[#f0ede9] text-[#765937] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline-md text-2xl text-primary">
                    Private Brief Transmitted
                  </h3>
                  <p className="text-body-md text-on-surface-variant max-w-md mx-auto">
                    Thank you, <strong className="text-primary">{patronName || 'Patron'}</strong>. Your inquiry regarding the {inquiryType} in {projectLocation || 'the designated location'} has been received by our Paris & Tokyo directorate.
                  </p>
                  <p className="text-xs font-label-caps uppercase tracking-widest text-secondary pt-2">
                    Direct Concierge Contact within 48 Business Hours
                  </p>
                  <button
                    onClick={() => setInquirySubmitted(false)}
                    className="mt-4 px-6 py-2.5 border border-primary text-primary text-xs font-label-caps uppercase tracking-widest hover:bg-primary hover:text-white transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleInquirySubmit}>
                  {/* Project Type Selection */}
                  <div>
                    <label className="block text-label-caps font-label-caps uppercase text-primary tracking-widest mb-3">
                      Nature of Spatial Commission *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Private Residence / Villa',
                        'Boutique Hotel / Hospitality',
                        'Cultural Institution / Gallery',
                        'Yacht / Bespoke Interior',
                      ].map((type) => (
                        <label
                          key={type}
                          className={`flex items-center space-x-3 p-3.5 border cursor-pointer transition-colors ${
                            inquiryType === type
                              ? 'border-secondary bg-white'
                              : 'border-outline-variant bg-surface hover:border-secondary'
                          }`}
                        >
                          <input
                            checked={inquiryType === type}
                            onChange={() => setInquiryType(type)}
                            className="h-4 w-4 text-primary focus:ring-0 border-outline-variant bg-surface rounded-none"
                            name="project_type"
                            type="radio"
                          />
                          <span className="text-body-sm font-body-sm text-on-surface">
                            {type}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Client & Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-label-caps font-label-caps uppercase text-primary tracking-widest mb-2">
                        Principal Patron Name *
                      </label>
                      <input
                        required
                        value={patronName}
                        onChange={(e) => setPatronName(e.target.value)}
                        className="w-full bg-surface border-b border-outline-variant border-t-0 border-x-0 py-3 px-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-0 transition-colors"
                        placeholder="e.g. Baroness Evelyn de V."
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block text-label-caps font-label-caps uppercase text-primary tracking-widest mb-2">
                        Confidential Email *
                      </label>
                      <input
                        required
                        value={patronEmail}
                        onChange={(e) => setPatronEmail(e.target.value)}
                        className="w-full bg-surface border-b border-outline-variant border-t-0 border-x-0 py-3 px-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-0 transition-colors"
                        placeholder="patron@domain.com"
                        type="email"
                      />
                    </div>
                  </div>

                  {/* Location & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-label-caps font-label-caps uppercase text-primary tracking-widest mb-2">
                        Project Geographic Location *
                      </label>
                      <input
                        required
                        value={projectLocation}
                        onChange={(e) => setProjectLocation(e.target.value)}
                        className="w-full bg-surface border-b border-outline-variant border-t-0 border-x-0 py-3 px-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-0 transition-colors"
                        placeholder="e.g. Kyoto, Lake Como, Paris 7e"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block text-label-caps font-label-caps uppercase text-primary tracking-widest mb-2">
                        Approximate Area / Footprint
                      </label>
                      <input
                        value={projectArea}
                        onChange={(e) => setProjectArea(e.target.value)}
                        className="w-full bg-surface border-b border-outline-variant border-t-0 border-x-0 py-3 px-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-0 transition-colors"
                        placeholder="e.g. 500 – 1,200 m²"
                        type="text"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-label-caps font-label-caps uppercase text-primary tracking-widest mb-2">
                      Spatial Intent & Material Aspirations
                    </label>
                    <textarea
                      value={projectIntent}
                      onChange={(e) => setProjectIntent(e.target.value)}
                      className="w-full bg-surface border-b border-outline-variant border-t-0 border-x-0 py-3 px-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-0 transition-colors resize-none"
                      placeholder="Briefly describe your vision, existing architectural fabric, and aesthetic values..."
                      rows={4}
                    ></textarea>
                  </div>

                  {/* Submit Action */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                    <span className="text-label-caps font-label-caps uppercase text-on-surface-variant tracking-widest text-xs">
                      Response within 48 Business Hours
                    </span>
                    <button
                      className="w-full sm:w-auto px-10 py-4 bg-primary text-white text-label-caps font-label-caps tracking-widest uppercase hover:bg-secondary transition-colors duration-500"
                      type="submit"
                    >
                      Transmit Private Brief
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Refined Architectural Footer (Shared Component Anchor) */}
      <footer className="w-full border-t border-outline-variant flat no shadows bg-surface-container" id="studio">
        <div className="w-full px-margin lg:px-margin-desktop-wide pt-space-2xl pb-space-lg flex flex-col justify-between">
          {/* Top Row: Brand & Studio Global Outposts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter pb-space-xl border-b border-outline-variant">
            {/* Brand Wordmark & Mission */}
            <div className="lg:col-span-4">
              <a className="text-headline-md font-headline-md text-primary uppercase tracking-widest block mb-4" href="#">
                ATELIER VAUQUELIN
              </a>
              <p className="text-body-md font-body-md text-on-surface-variant max-w-sm mb-6 leading-relaxed">
                Interior Architecture • Spatial Scenography • Custom Furniture Millwork. Paris, Tokyo, and Zurich.
              </p>
              <span className="inline-flex items-center space-x-2 text-label-caps font-label-caps uppercase tracking-widest text-secondary">
                <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
                <span>Atelier Operational • Autumn Studio Cycle</span>
              </span>
            </div>

            {/* Studio Outpost 1: Paris */}
            <div className="lg:col-span-2">
              <span className="text-label-caps font-label-caps uppercase text-primary font-medium tracking-widest block mb-2">
                Paris Atelier
              </span>
              <address className="not-italic text-body-sm font-body-sm text-on-surface-variant space-y-1">
                <p>14 Rue de Beaujolais</p>
                <p>Palais-Royal, 75001 Paris</p>
                <p className="pt-2 text-primary font-medium">+33 (0)1 42 68 55 10</p>
              </address>
            </div>

            {/* Studio Outpost 2: Tokyo */}
            <div className="lg:col-span-2">
              <span className="text-label-caps font-label-caps uppercase text-primary font-medium tracking-widest block mb-2">
                Tokyo Atelier
              </span>
              <address className="not-italic text-body-sm font-body-sm text-on-surface-variant space-y-1">
                <p>5-7-2 Minami-Aoyama</p>
                <p>Minato-ku, Tokyo 107-0062</p>
                <p className="pt-2 text-primary font-medium">+81 (0)3 5413 8820</p>
              </address>
            </div>

            {/* Studio Outpost 3: Zurich */}
            <div className="lg:col-span-2">
              <span className="text-label-caps font-label-caps uppercase text-primary font-medium tracking-widest block mb-2">
                Zurich Studio
              </span>
              <address className="not-italic text-body-sm font-body-sm text-on-surface-variant space-y-1">
                <p>Gotthardstrasse 26</p>
                <p>8002 Zurich Enge</p>
                <p className="pt-2 text-primary font-medium">+41 (0)44 280 1900</p>
              </address>
            </div>

            {/* Quarterly Spatial Essays Subscription */}
            <div className="lg:col-span-2">
              <span className="text-label-caps font-label-caps uppercase text-primary font-medium tracking-widest block mb-2">
                Spatial Essays
              </span>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-4">
                Receive our quarterly philosophical correspondence on material culture.
              </p>
              {newsletterSuccess ? (
                <div className="text-xs font-label-caps uppercase text-secondary">
                  ✓ Subscription Recorded
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex items-center border-b border-outline-variant pb-2">
                  <input
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-transparent border-none p-0 text-body-sm font-body-sm text-on-surface placeholder:text-[#7e756f] focus:ring-0 focus:outline-none"
                    placeholder="Email address"
                    type="email"
                  />
                  <button aria-label="Subscribe" className="text-primary hover:text-secondary transition-colors" type="submit">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Middle Row: Architectural Navigation Links */}
          <div className="py-space-md border-b border-outline-variant flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <button
                onClick={() => onNavigateScreen('overview')}
                className="text-on-surface-variant text-label-caps font-label-caps tracking-widest uppercase hover:text-secondary transition-colors duration-500"
              >
                Architecture & Interiors
              </button>
              <button
                onClick={() => onNavigateScreen('casestudy')}
                className="text-on-surface-variant text-label-caps font-label-caps tracking-widest uppercase hover:text-secondary transition-colors duration-500"
              >
                Selected Commissions
              </button>
              <button
                onClick={() => onNavigateScreen('materiality')}
                className="text-on-surface-variant text-label-caps font-label-caps tracking-widest uppercase hover:text-secondary transition-colors duration-500"
              >
                Material Archive
              </button>
              <button
                onClick={() => onNavigateScreen('monograph')}
                className="text-on-surface-variant text-label-caps font-label-caps tracking-widest uppercase hover:text-secondary transition-colors duration-500"
              >
                Monograph
              </button>
              <button
                onClick={() => onNavigateScreen('portal')}
                className="text-on-surface-variant text-label-caps font-label-caps tracking-widest uppercase hover:text-secondary transition-colors duration-500"
              >
                Private Client Portal
              </button>
              <a
                className="text-on-surface-variant text-label-caps font-label-caps tracking-widest uppercase hover:text-secondary transition-colors duration-500"
                href="#inquire"
              >
                Inquiries
              </a>
            </div>
            <div className="flex items-center space-x-6 text-label-caps font-label-caps uppercase text-on-surface-variant">
              <span className="hover:text-secondary transition-colors cursor-pointer">Instagram</span>
              <span className="hover:text-secondary transition-colors cursor-pointer">Archello</span>
              <span className="hover:text-secondary transition-colors cursor-pointer">ArchDaily</span>
            </div>
          </div>

          {/* Bottom Copyright Row */}
          <div className="pt-space-md flex flex-col md:flex-row items-center justify-between gap-4 text-label-caps font-label-caps uppercase text-on-surface-variant">
            <p>© 2025 ATELIER VAUQUELIN. All rights reserved. Interior Architecture & Spatial Design.</p>
            <p className="text-xs">Quiet Luxury • Tactile Permanence • Orchestrated Daylight</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
