export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Residential Sanctuaries' | 'Boutique Hospitality' | 'Cultural Spaces' | 'Private Villas';
  location: string;
  year: string;
  scale: string;
  scaleSqFt: string;
  materials: string[];
  summary: string;
  fullDescription: string;
  heroImage: string;
  galleryImages: { url: string; caption: string; perspective: string }[];
  coordinates: string;
  architecturalFeatures: string[];
  artisans: { role: string; name: string; city: string }[];
  floorPlanHotspots?: { id: string; title: string; description: string; x: number; y: number }[];
  daylightModes?: {
    dawn: { description: string; temp: string; lux: string };
    zenith: { description: string; temp: string; lux: string };
    twilight: { description: string; temp: string; lux: string };
    nocturnal: { description: string; temp: string; lux: string };
  };
}

export interface MaterialSpecimen {
  id: string;
  number: string;
  name: string;
  category: 'Stone' | 'Timber' | 'Textile' | 'Metal' | 'Mineral';
  quarryProvenance: string;
  density: string;
  acousticCoeff: string;
  finish: string;
  description: string;
  tactileNotes: string;
  thermalBehavior: string;
  image: string;
  weightPerSpecimen: number; // in grams
}

export interface MonographPage {
  pageNumber: number;
  chapter: string;
  leftTitle: string;
  leftContent: string;
  rightImage: string;
  rightCaption: string;
  technicalPlate?: string;
}

export const ATELIER_PROJECTS: ProjectItem[] = [
  {
    id: 'kyoto-pavillion',
    number: '01',
    title: 'The Kyoto Pavillion',
    subtitle: 'Residential Sanctuary',
    category: 'Residential Sanctuaries',
    location: 'Kyoto, Japan',
    year: '2022 — 2024',
    scale: '680 m²',
    scaleSqFt: '7,320 sq.ft',
    materials: ['Smoked Oak', 'Raked Plaster', 'Kyoto Basalt', 'Brushed Bronze'],
    summary:
      'A 680 m² contemplative residence designed around meditative internal courtyards. Hand-raked mineral plaster, aged cedar rafters, and a monolithic travertine bath frame seasonal cherry blossoms.',
    fullDescription:
      'Situated at the foothills of the Higashiyama mountains in eastern Kyoto, The Kyoto Pavillion is an exploration of the liminal space between historic Japanese sukiya-zukuri joinery and contemporary European reductionism. Organized around three internal moss gardens, the residence eliminates traditional interior partitions in favor of rhythmic slatted cedar screens and acoustic raked plaster planes that absorb peripheral sound.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDgggaqnYCTT1y322CC-X9YOEEdnox3uUhl0S6gnNLGKKXWNzvhrUjGkLGpb3QyZsKqN_PWngSfvkBAIMbwW8BK4GoV350jV1P9jMbn_6fC6dqBk2BcHF2Nn6JdQ8VJEAkwj2wbQrW3SHRh-69w4X4ymaiiidilgvTr4XfMUi3_eGck6gBcrFh2TK3Z0vZCVvTSwdDNzckVhHkMCLUbPHiAwAr6KNFfUrYPKoeeLC-99VC0zqMiYOn8',
    galleryImages: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgggaqnYCTT1y322CC-X9YOEEdnox3uUhl0S6gnNLGKKXWNzvhrUjGkLGpb3QyZsKqN_PWngSfvkBAIMbwW8BK4GoV350jV1P9jMbn_6fC6dqBk2BcHF2Nn6JdQ8VJEAkwj2wbQrW3SHRh-69w4X4ymaiiidilgvTr4XfMUi3_eGck6gBcrFh2TK3Z0vZCVvTSwdDNzckVhHkMCLUbPHiAwAr6KNFfUrYPKoeeLC-99VC0zqMiYOn8',
        caption: 'Central Engawa colonnade framing the private moss garden at morning mist.',
        perspective: 'Longitudinal Axis / East Wing',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGYC03ZOj_ERP8XtVZ1ZOmyicEF_CrbKWqLi65jDXn0f3tB1HbE9_NFCU1QZkMzmMZ63Yfbs006HrJx6jTYthRlxdGzFskd4VPrBl8M4ZXSgVvkUVYabNPdHE95bKgZd6H6eiKHosYrVpmV_LPQ5lLMJyzmODdNXsnyp6hD6icIdT6ojZUp2tFaa-B6hqcqdybNESWoCAe2W7g5T9qMVmMcIKW6lUkrnTZnxH5QFerunp3NwDqwXey',
        caption: 'Monolithic travertine soaking bath carved from a single 9-ton quarry block.',
        perspective: 'Thermal Chamber',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwfj_n45qTDwHwvrz6xeSHBRPOyv2-xVclHdcOFhwvqtMX7PX36lCUUtU43vCT6CsyKw5hxSOWuqQIe1klb5SLyWyL3DdMfa4Y8-II-HvZpDhIL4lpWpFvomovBb6UVH7Uslj-XDoPG6-fnDFPgSi_eRApRd1XnK9qUX8bGyBuohQLMwqP1qLdUKh1NtFwXCaaYIczEhilr-lO-BpychHHkJU96o7hQnDsh8X6MyAMzt51ISTzWTFw',
        caption: 'Tea ceremonial room with hand-split basalt flooring and brass lantern niches.',
        perspective: 'Subterranean Garden Level',
      },
    ],
    coordinates: "35°01'18\"N 135°47'34\"E",
    architecturalFeatures: [
      'Submerged geothermal cooling floor with unpolished basalt slabs',
      'Continuous 14-meter cantilevered cedar beam ceiling with hidden acoustic baffle',
      'Recessed raked mineral plaster wall finished with volcanic dust from Mount Hiei',
      'Custom unvarnished bronze sliding panel hardware cast in Basel',
    ],
    artisans: [
      { role: 'Master Carpenter (Sukiya)', name: 'Kenzo Murata', city: 'Kyoto' },
      { role: 'Stonemason', name: 'Marco Valenti', city: 'Tivoli' },
      { role: 'Acoustic Engineering', name: 'Dr. Jean-Luc Reymond', city: 'Lausanne' },
    ],
    floorPlanHotspots: [
      { id: 'bath', title: 'Monolithic Travertine Bath', description: 'Recessed 900mm below floor line, fed by natural mountain spring water.', x: 28, y: 35 },
      { id: 'courtyard', title: 'Internal Moss Sanctuary', description: 'Open-air oculus admitting Zen rainfall and dappled cherry tree canopy.', x: 50, y: 48 },
      { id: 'tea-alcove', title: 'Sunken Tea Alcove', description: 'Framed in quarter-sawn ancient cedar with concealed low-level lantern reveals.', x: 72, y: 30 },
      { id: 'library', title: 'Acoustic Library Wing', description: 'Wall-to-wall mineral plaster bookshelves with sound absorption coefficient 0.85.', x: 65, y: 75 },
    ],
    daylightModes: {
      dawn: { description: 'Diffused eastern blue light catches the tooth of the raked plaster, highlighting horizontal graining.', temp: '4800K', lux: '180 lx' },
      zenith: { description: 'Deep cantilevered roof overhangs shelter the interior from glare, casting geometric trapezoid shadows.', temp: '5600K', lux: '420 lx' },
      twilight: { description: 'Bronze fixtures warm to deep amber; the courtyard gravel glows like liquid graphite.', temp: '2700K', lux: '65 lx' },
      nocturnal: { description: 'Concealed baseboard reveals and floating brass candle boxes orchestrate absolute meditative calm.', temp: '2100K', lux: '25 lx' },
    },
  },
  {
    id: 'villa-saint-germain',
    number: '02',
    title: 'Villa Saint-Germain',
    subtitle: 'Private Penthouse',
    category: 'Residential Sanctuaries',
    location: 'Paris, France',
    year: '2021 — 2023',
    scale: '420 m²',
    scaleSqFt: '4,520 sq.ft',
    materials: ['Fluted Arabescato', 'French Walnut', 'Patinated Brass', 'Oatmeal Linen'],
    summary:
      'Historic 19th-century Haussmannian volume redefined through a bold architectural spine of carved Arabescato marble, patinated bronze reveals, and quiet acoustical drapery.',
    fullDescription:
      'Occupying the piano nobile and fifth floor of an 1878 stone mansion on Boulevard Saint-Germain, this commission strips away decades of ornamental pastiche to celebrate the raw muscularity of Paris limestone. A continuous 22-meter spine wall in fluted Arabescato marble houses climate systems and private art niches while connecting public entertaining salons with contemplative inner chambers.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDF5Z6LnCpBi1cjrChibjpuIMxVwL10nW-Hk38vzHXIIkKmEyFmP6gh2QFxge-Zgv1WK1f9XJ9mLeXAtJv_Gn3yzzPSCz9Z1-vkglZ8Q-mUubjIx6ZQdOdf2YdusAH3hoVI0eoGaMZ6ko6Uwkg31BsYrBezi-ukz_cUxCmw5pnCn126hXStckxxD2E_1oVn5KTxXFfXKiFZfmnSE-htF6TzXU50T_ZuMP4UBuAtBBDV0UHvJRnze9gt',
    galleryImages: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF5Z6LnCpBi1cjrChibjpuIMxVwL10nW-Hk38vzHXIIkKmEyFmP6gh2QFxge-Zgv1WK1f9XJ9mLeXAtJv_Gn3yzzPSCz9Z1-vkglZ8Q-mUubjIx6ZQdOdf2YdusAH3hoVI0eoGaMZ6ko6Uwkg31BsYrBezi-ukz_cUxCmw5pnCn126hXStckxxD2E_1oVn5KTxXFfXKiFZfmnSE-htF6TzXU50T_ZuMP4UBuAtBBDV0UHvJRnze9gt',
        caption: 'Grand Salon fireplace hand-fluted from solid Carrara block with patinated brass mantel.',
        perspective: 'Grand Salon / South Orientation',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAde6OKJaV8l72RSPtqL-W3qo5ELnPl6pD_wge1IKFIFUUr-LpvTxuR_pC0CEia0JJA7LxcL6CB0pT-x14q9fXvWOtRZNVh1czhw8MaDIqzGifBEb-Dk203tmj3Uls2H1SyhUGwOQ-LIs8VbFW9V-TLRBxOfubRwoho_HkHUjazW0OvK6-97Ffw46wyna_boNjDUGTVJjFBPNWi2a6b4FxsZBYB16x8nBKIcI1lg1A0ZKhMRvrYoBp',
        caption: 'Acoustical double-layer drapery hand-woven in Lyon for sound attenuation.',
        perspective: 'Drapery Detail',
      },
    ],
    coordinates: "48°51'12\"N 02°19'58\"E",
    architecturalFeatures: [
      'Original 4.2-meter ceiling cornices meticulously conserved alongside shadow reveals',
      'Solid herringbone walnut floor reclaimed from 18th-century Normandy châteaux',
      'Invisible frameless pivot portals with concealed hydraulic self-closers',
      'Subtle perimeter air diffuser hairline integrated directly above baseboard',
    ],
    artisans: [
      { role: 'Cabinetry & Parquetry', name: 'Atelier Féau Boiseries', city: 'Paris' },
      { role: 'Marble Carver', name: 'Pierre Roche', city: 'Carrara' },
      { role: 'Architectural Bronze', name: 'Fonderie de Coubertin', city: 'Saint-Rémy' },
    ],
    floorPlanHotspots: [
      { id: 'salon', title: 'Grand Reception Salon', description: 'Fluted marble fireplace and herringbone parquetry with double-height windows.', x: 30, y: 40 },
      { id: 'gallery', title: 'Arabescato Spine Gallery', description: 'Monumental 22-meter circulation corridor with museum lighting.', x: 50, y: 50 },
      { id: 'dining', title: 'Intimate Dining Rotunda', description: 'Hand-rubbed lacquer walls and bespoke round walnut table.', x: 75, y: 35 },
    ],
    daylightModes: {
      dawn: { description: 'Haussmannian zinc roofs reflect cool Paris morning light across chalk walls.', temp: '5200K', lux: '210 lx' },
      zenith: { description: 'High south-facing French windows flood the parquetry with rich golden amber rays.', temp: '4900K', lux: '580 lx' },
      twilight: { description: 'Boulevard streetlamps cast warm bronze halos onto the fluted marble columns.', temp: '2500K', lux: '80 lx' },
      nocturnal: { description: 'Concealed linear coves highlight ceiling moldings while keeping lower eye-line intimate.', temp: '2200K', lux: '35 lx' },
    },
  },
  {
    id: 'maison-alabaster',
    number: '03',
    title: 'Maison Alabaster',
    subtitle: 'Coastal Retreat',
    category: 'Private Villas',
    location: "Cap d'Antibes, France",
    year: '2023 — 2024',
    scale: '890 m²',
    scaleSqFt: '9,580 sq.ft',
    materials: ['Roman Travertine', 'Sea Salt Linen', 'Bleached Cypress', 'Chalk Plaster'],
    summary:
      'Stepped limestone terraces overlooking the Mediterranean. A monolithic travertine colonnade serves as an environmental shading filter, inviting sea breezes and soft chiaroscuro.',
    fullDescription:
      'Anchored on the pine-scented promontory of Cap d’Antibes, Maison Alabaster is designed as a series of stepped limestone plinths descending toward the sea. Monolithic 6-meter travertine colonnades buffer intense summer sun while creating rhythmic deep shadows that cool the living pavilions via stack-effect ventilation.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkTwcdWEp0_lGxZQY-zUaVeVOx_gTSvs1DO1pwQSARk16AvWxWMVVUhsOwSOurQVKr_n9Qwo_A-F6u6RMV3GzmL0qIzHAAGMsXXJZ1YM_t4O5AwtN4AsT4kA2huZjgEP7aP2ZUPjWwVPrDkKmd8BlIJDFV2rsZJYGyAu3vAJVNtb_QIlZblthIcxFVw9ZQCxyievMVCkrmemCwMQ9rMPIbwwJRi3aV7nSc_LaZsB63qBp9Z3Qhq72j',
    galleryImages: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkTwcdWEp0_lGxZQY-zUaVeVOx_gTSvs1DO1pwQSARk16AvWxWMVVUhsOwSOurQVKr_n9Qwo_A-F6u6RMV3GzmL0qIzHAAGMsXXJZ1YM_t4O5AwtN4AsT4kA2huZjgEP7aP2ZUPjWwVPrDkKmd8BlIJDFV2rsZJYGyAu3vAJVNtb_QIlZblthIcxFVw9ZQCxyievMVCkrmemCwMQ9rMPIbwwJRi3aV7nSc_LaZsB63qBp9Z3Qhq72j',
        caption: 'Stepped Mediterranean loggia with Roman travertine colonnades and floating linen curtains.',
        perspective: 'Sea Pavilion Terrace',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgGSETsMJLlA1CVCB0ucJADi4ScELMReXvt8HRCRWRDUhDDnzUcSydp2KtNUfDPFbIRVj5RLwQ-D4N6YN9M5srogzwpZ88XjYo6rmWU6Wk8K2KYqBroAcX8LASENemVb6USK9N6exz8Y26aYsBLJ9Yk1Bx3GwX-DV_dmFCZT4r0JUp-h0BMPWRsSjiXVtLU3uQljWusUWYb8BzWb3RIe7sBFhyBXUdnWxtXaEfw2kMD7yLcwqP06FW',
        caption: 'Unsealed porous travertine floor that remains cool under Mediterranean noon heat.',
        perspective: 'Tactile Ground Surface',
      },
    ],
    coordinates: "43°33'05\"N 07°07'42\"E",
    architecturalFeatures: [
      'Self-shading travertine colonnades reducing solar heat gain by 68%',
      'Infinity seawater reflecting pool merging seamlessly with the horizon line',
      'All exterior sliding glass walls pocket completely into double concrete walls',
      'Salt-mist resistant marine brass architectural fittings hand-aged with sea salt solution',
    ],
    artisans: [
      { role: 'Colonnade Masonry', name: 'Atelier de la Pierre Bleue', city: 'Aix-en-Provence' },
      { role: 'Textile Artisan', name: 'Élise Bernard', city: 'Arles' },
      { role: 'Landscape Architect', name: 'Gilles Clément Studio', city: 'Paris' },
    ],
    floorPlanHotspots: [
      { id: 'colonnade', title: 'Travertine Colonnade Loggia', description: 'External gallery shielding private quarters from direct sun.', x: 42, y: 32 },
      { id: 'water', title: 'Seawater Infinity Plinth', description: 'Linear thermal pool reflecting Mediterranean sky.', x: 20, y: 65 },
      { id: 'atrium', title: 'Pergola Courtyard', description: 'Internal olive grove providing passive cross ventilation.', x: 68, y: 45 },
    ],
    daylightModes: {
      dawn: { description: 'Rosy pink morning mist off the Côte d’Azur washes across raw limestone.', temp: '4200K', lux: '320 lx' },
      zenith: { description: 'Brilliant Mediterranean white light broken into geometric columns of shade.', temp: '6200K', lux: '950 lx' },
      twilight: { description: 'Golden terracotta dusk turns the travertine warm amber; sea breeze stirs linen curtains.', temp: '2900K', lux: '120 lx' },
      nocturnal: { description: 'Dark sea horizon with underwater stone glow illuminating the loggia perimeter.', temp: '2400K', lux: '40 lx' },
    },
  },
  {
    id: 'aura-spa',
    number: '04',
    title: 'Aura Spa & Tea House',
    subtitle: 'Wellness Sanctuary',
    category: 'Boutique Hospitality',
    location: 'Geneva, Switzerland',
    year: '2023 — 2024',
    scale: '1,150 m²',
    scaleSqFt: '12,380 sq.ft',
    materials: ['Rammed Earth', 'Basalt Stone', 'Water Basins', 'Smoked Bronze'],
    summary:
      'An underground subterranean refuge celebrating raw rammed earth walls, water basins reflecting candlelight, and minimalist black granite seating pods designed for absolute sensory recalibration.',
    fullDescription:
      'Excavated into the lakeside topography of Lake Geneva, Aura Spa & Tea House is an architectural meditation on earth, silence, and water. Constructed entirely from local excavated glacial marl, gravel, and clay rammed in situ, the subterranean sanctuary maintains an innate thermal inertia and cocooning acoustical dampening.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwfj_n45qTDwHwvrz6xeSHBRPOyv2-xVclHdcOFhwvqtMX7PX36lCUUtU43vCT6CsyKw5hxSOWuqQIe1klb5SLyWyL3DdMfa4Y8-II-HvZpDhIL4lpWpFvomovBb6UVH7Uslj-XDoPG6-fnDFPgSi_eRApRd1XnK9qUX8bGyBuohQLMwqP1qLdUKh1NtFwXCaaYIczEhilr-lO-BpychHHkJU96o7hQnDsh8X6MyAMzt51ISTzWTFw',
    galleryImages: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwfj_n45qTDwHwvrz6xeSHBRPOyv2-xVclHdcOFhwvqtMX7PX36lCUUtU43vCT6CsyKw5hxSOWuqQIe1klb5SLyWyL3DdMfa4Y8-II-HvZpDhIL4lpWpFvomovBb6UVH7Uslj-XDoPG6-fnDFPgSi_eRApRd1XnK9qUX8bGyBuohQLMwqP1qLdUKh1NtFwXCaaYIczEhilr-lO-BpychHHkJU96o7hQnDsh8X6MyAMzt51ISTzWTFw',
        caption: 'Subterranean reflecting pool with monolithic basalt stepping stones.',
        perspective: 'Central Thermal Crypt',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuas3IeIH7iRhJbLZ-UsHGESs2akyMG96IjDRpRuVKIXXj_rianQA1jnvCM4wCNwiwgfNKHVyuwA-tc9GkkD2dd5ScsdNKd556KkJzI4bQ5IJPw9JDQJL852Dc5OSmu_WlR5sIDJnTSR55kdXAhsGtxisV-guJeQgnSBhpAZE8vfnfC37w7ALEsxoW7jr3GGyCN-La7WJ7YfPhjvfvm_eNqFWocN002WR7WQsWgo-A2sEyGkx4lN7l',
        caption: 'Hand-rubbed gunmetal bronze hardware and water spouts in steam chamber.',
        perspective: 'Hydraulic Detail',
      },
    ],
    coordinates: "46°12'09\"N 06°09'28\"E",
    architecturalFeatures: [
      '600mm thick continuous monolithic rammed earth walls with acoustic dampening STC 58',
      'Naturally pressurized mineral spring pool heated via deep geothermal boreholes',
      'Hidden air handling slots maintaining zero draft and 72% relative humidity',
      'Tactile basalt seating slabs heated to exact body temperature (36.8°C)',
    ],
    artisans: [
      { role: 'Earthen Architecture Master', name: 'Martin Rauch (Consultant)', city: 'Schlins' },
      { role: 'Basalt Masonry', name: 'Stefan Holzer', city: 'Graubünden' },
      { role: 'Acoustic Specialist', name: 'Dr. Sophie Meyer', city: 'Zurich' },
    ],
    floorPlanHotspots: [
      { id: 'crypt', title: 'Central Thermal Pool', description: 'Natural dark spring water surrounded by raw rammed earth.', x: 50, y: 50 },
      { id: 'steam', title: 'Basalt Vapor Chamber', description: 'Thermal vapor room infused with mountain pine essence.', x: 25, y: 35 },
      { id: 'tea-refuge', title: 'Zen Tea Refuge', description: 'Low timber tables overlooking illuminated water fountain.', x: 75, y: 65 },
    ],
    daylightModes: {
      dawn: { description: 'Light shafts from surface skylights cast knife-edge diagonal rays through rising steam.', temp: '4000K', lux: '90 lx' },
      zenith: { description: 'Direct noon beams penetrate the sunken lightwell to illuminate the pool bottom.', temp: '5400K', lux: '220 lx' },
      twilight: { description: 'Subtle perimeter floor lanterns take over; lightwell fades to sapphire indigo.', temp: '2600K', lux: '45 lx' },
      nocturnal: { description: 'Absolute candlelight chiaroscuro; water ripples project kinetic patterns on clay.', temp: '1900K', lux: '15 lx' },
    },
  },
];

export const MATERIALITY_INDEX: MaterialSpecimen[] = [
  {
    id: 'mat-01',
    number: '01',
    name: 'Roman Travertine',
    category: 'Stone',
    quarryProvenance: 'Tivoli Quarries, Lazio, Italy',
    density: '2,480 kg/m³',
    acousticCoeff: 'NRC 0.15 (Honed)',
    finish: 'Honed unsealed finish with naturally exposed pocket fissures',
    description:
      'Extracted from the ancient geothermal deposits of Tivoli. Cut along the natural sediment bedding plane to reveal warm oatmeal striations and open thermal fissures that invite the touch.',
    tactileNotes: 'Cool initial contact, softening to ambient room temperature; naturally porous and velvety underfoot.',
    thermalBehavior: 'Exceptional thermal mass, ideal for integrated hydronic sub-floor heating and passive solar retention.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBgGSETsMJLlA1CVCB0ucJADi4ScELMReXvt8HRCRWRDUhDDnzUcSydp2KtNUfDPFbIRVj5RLwQ-D4N6YN9M5srogzwpZ88XjYo6rmWU6Wk8K2KYqBroAcX8LASENemVb6USK9N6exz8Y26aYsBLJ9Yk1Bx3GwX-DV_dmFCZT4r0JUp-h0BMPWRsSjiXVtLU3uQljWusUWYb8BzWb3RIe7sBFhyBXUdnWxtXaEfw2kMD7yLcwqP06FW',
    weightPerSpecimen: 420,
  },
  {
    id: 'mat-02',
    number: '02',
    name: 'Hinoki Cypress',
    category: 'Timber',
    quarryProvenance: 'Nagano Prefecture Forests, Japan',
    density: '480 kg/m³',
    acousticCoeff: 'NRC 0.35 (Planed)',
    finish: 'Hand-planed with traditional kanna planes; unvarnished',
    description:
      'Sacred Japanese softwood harvested exclusively from managed Kiso timber stands. Planed with hand-forged blades to preserve the open cellular structure and aromatic phytoncides.',
    tactileNotes: 'Silk-like softness without synthetic friction; subtle natural elasticity and soothing organic cedar aroma.',
    thermalBehavior: 'Low thermal conductivity; warm to the skin in winter and pleasantly dry during humid monsoon periods.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAqyq1FPDXAk-IrWe0E6TBAJu2oPT7xLCfr_iUgRVFZunu5C95lsiZ_RAlUVzuPbs5JS62mufqu1fnPOvglm4VWkQTGBnZWK1Ti67bCf1e16VvzdHBlwSPGPbz6bB9GXgSMKLOUgKKjOheYhiBAgo_8ZzL0wa3BKJiXYUqGqbYa_B8jZ8Pqth_O5FomKrH7SVCWkEA0Ez9hN9r3icMwtIV-YdIFt8aFJfw3eUZYIpI3kEesJsFOwXsZ',
    weightPerSpecimen: 140,
  },
  {
    id: 'mat-03',
    number: '03',
    name: 'Loomed Raw Silk',
    category: 'Textile',
    quarryProvenance: 'Lyon Historic Looms, France',
    density: '310 g/m²',
    acousticCoeff: 'NRC 0.65 (Double Gathered)',
    finish: 'Organic slubbed weave for diffuse light transmission',
    description:
      'Spun from raw wild tussah cocoons and unbleached Belgian flax on mechanical jacquard looms preserved since the 19th century. Provides subtle acoustical dampening and luminous translucency.',
    tactileNotes: 'Textured slub grain with a crisp yet fluid drape; softens harsh sunlight into atmospheric butter-gold.',
    thermalBehavior: 'Breathable, hygroscopic fiber acting as a micro-climate buffer for large glazed apertures.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBAde6OKJaV8l72RSPtqL-W3qo5ELnPl6pD_wge1IKFIFUUr-LpvTxuR_pC0CEia0JJA7LxcL6CB0pT-x14q9fXvWOtRZNVh1czhw8MaDIqzGifBEb-Dk203tmj3Uls2H1SyhUGwOQ-LIs8VbFW9V-TLRBxOfubRwoho_HkHUjazW0OvK6-97Ffw46wyna_boNjDUGTVJjFBPNWi2a6b4FxsZBYB16x8nBKIcI1lg1A0ZKhMRvrYoBp',
    weightPerSpecimen: 85,
  },
  {
    id: 'mat-04',
    number: '04',
    name: 'Gunmetal Bronze',
    category: 'Metal',
    quarryProvenance: 'Basel Foundry, Switzerland',
    density: '8,730 kg/m³',
    acousticCoeff: 'Reflective',
    finish: 'Cold-patinated with sulfur salts and microcrystalline wax',
    description:
      'Cast binary alloy of 88% copper and 12% tin. Hand-rubbed with botanical sulfur compounds to create a deep espresso-brown patina that wears gracefully to gold where hands touch over years.',
    tactileNotes: 'Heavy, authoritative metallic heft with a satin wax touch that rejects fingerprints and oil buildup.',
    thermalBehavior: 'Rapid conductive response; stores residual warmth when placed near fireplace or solar radiant banks.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAuas3IeIH7iRhJbLZ-UsHGESs2akyMG96IjDRpRuVKIXXj_rianQA1jnvCM4wCNwiwgfNKHVyuwA-tc9GkkD2dd5ScsdNKd556KkJzI4bQ5IJPw9JDQJL852Dc5OSmu_WlR5sIDJnTSR55kdXAhsGtxisV-guJeQgnSBhpAZE8vfnfC37w7ALEsxoW7jr3GGyCN-La7WJ7YfPhjvfvm_eNqFWocN002WR7WQsWgo-A2sEyGkx4lN7l',
    weightPerSpecimen: 560,
  },
  {
    id: 'mat-05',
    number: '05',
    name: 'Slaked Lime Plaster',
    category: 'Mineral',
    quarryProvenance: 'Bordeaux Calcaires, France',
    density: '1,720 kg/m³',
    acousticCoeff: 'NRC 0.28 (Troweled)',
    finish: 'Triple-aged slaked lime mixed with crushed Carrera marble powder',
    description:
      'Pure calcium hydroxide slaked in underground pits for four years. Applied in three paper-thin coats with stainless spatulas, burnished with olive oil Marseille soap for an alabaster luster.',
    tactileNotes: 'Cool mineral surface with subtle trowel rhythm; absorbs glare and imparts sculptural depth to walls.',
    thermalBehavior: 'Vapor-permeable (breathable) natural hygroscopic humidity regulator, naturally mold and allergen resistant.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC91yAR8B300PVF7ci3TWyPdw4z2LLwKmwrRJO9VTrZ4nzrYAIUKCU7lDMt5Onx8UgKGwBL5VwQmbjd0_cQ1lbTSFrAnAftXRtRKneud1uMLVRWYqMYpIVxlnVnO_McFdn-5NGgDbzIRiad9SFA9bHEf4rrlAwT1DNFIkbiJ30oIIo1UxjL2ueMh3j41eV9HwGbQhLeFmII-DNnTK5qHHrX1nS69MDI8pODw3xNrBNymc82TmpkFACE',
    weightPerSpecimen: 210,
  },
];

export const MONOGRAPH_SPREADS: MonographPage[] = [
  {
    pageNumber: 24,
    chapter: 'Part I: Proportions of Silence',
    leftTitle: 'The Architecture of the Undone',
    leftContent:
      'We often mistake luxury for abundance. But true luxury is always an act of subtraction—the courageous elimination of decorative clutter until only the bone of space remains. In our work across Paris and Tokyo, we do not build walls to display art; the walls themselves, sculpted in lime plaster and raked shadow, become the contemplation.',
    rightImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCGYC03ZOj_ERP8XtVZ1ZOmyicEF_CrbKWqLi65jDXn0f3tB1HbE9_NFCU1QZkMzmMZ63Yfbs006HrJx6jTYthRlxdGzFskd4VPrBl8M4ZXSgVvkUVYabNPdHE95bKgZd6H6eiKHosYrVpmV_LPQ5lLMJyzmODdNXsnyp6hD6icIdT6ojZUp2tFaa-B6hqcqdybNESWoCAe2W7g5T9qMVmMcIKW6lUkrnTZnxH5QFerunp3NwDqwXey',
    rightCaption: 'Plate 08: Minami-Aoyama Residence, Tokyo. Morning light ingress across hand-carved travertine plinth.',
  },
  {
    pageNumber: 68,
    chapter: 'Part II: The Mineral Memory',
    leftTitle: 'Honoring the Quarry Tectonic',
    leftContent:
      'Stone is not dead matter. In the quarries of Tivoli and Carrara, each block carries the geological memory of million-year marine compression. When we cut travertine unsealed, we preserve its open pockets. The stone breathes, sweats, and accepts the oils of human palms.',
    rightImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBgGSETsMJLlA1CVCB0ucJADi4ScELMReXvt8HRCRWRDUhDDnzUcSydp2KtNUfDPFbIRVj5RLwQ-D4N6YN9M5srogzwpZ88XjYo6rmWU6Wk8K2KYqBroAcX8LASENemVb6USK9N6exz8Y26aYsBLJ9Yk1Bx3GwX-DV_dmFCZT4r0JUp-h0BMPWRsSjiXVtLU3uQljWusUWYb8BzWb3RIe7sBFhyBXUdnWxtXaEfw2kMD7yLcwqP06FW',
    rightCaption: 'Plate 19: Roman Travertine macro texture from the Tivoli Basin.',
  },
  {
    pageNumber: 142,
    chapter: 'Part III: Subterranean Sanctuaries',
    leftTitle: 'Rammed Earth as Sound Envelope',
    leftContent:
      'In Geneva, beneath the level of water and noise, we formed walls with five distinct layers of alpine earth, marl, and chalk. Sound ceases to bounce; it dies gently into the clay. The acoustics of a room determine how deeply the resident can exhale.',
    rightImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwfj_n45qTDwHwvrz6xeSHBRPOyv2-xVclHdcOFhwvqtMX7PX36lCUUtU43vCT6CsyKw5hxSOWuqQIe1klb5SLyWyL3DdMfa4Y8-II-HvZpDhIL4lpWpFvomovBb6UVH7Uslj-XDoPG6-fnDFPgSi_eRApRd1XnK9qUX8bGyBuohQLMwqP1qLdUKh1NtFwXCaaYIczEhilr-lO-BpychHHkJU96o7hQnDsh8X6MyAMzt51ISTzWTFw',
    rightCaption: 'Plate 34: Aura Spa thermal chamber and candle-lit basalt pool.',
  },
];
