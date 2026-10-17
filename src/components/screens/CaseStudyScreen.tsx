import React, { useState } from 'react';
import {
  Compass,
  Sun,
  Sunset,
  Moon,
  Sunrise,
  Layers,
  MapPin,
  Calendar,
  Maximize2,
  Users,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { ATELIER_PROJECTS, ProjectItem, MATERIALITY_INDEX, MaterialSpecimen } from '../../data/atelierData';
import { ScreenId } from '../ScreenSwitcherBar';

interface CaseStudyScreenProps {
  currentProjectId: string;
  onSelectProject: (id: string) => void;
  onOpenLightbox: (imageUrl: string, title: string, caption?: string, coordinates?: string) => void;
  onInspectMaterial: (material: MaterialSpecimen) => void;
  onNavigateScreen: (screen: ScreenId) => void;
}

export const CaseStudyScreen: React.FC<CaseStudyScreenProps> = ({
  currentProjectId,
  onSelectProject,
  onOpenLightbox,
  onInspectMaterial,
  onNavigateScreen,
}) => {
  const project =
    ATELIER_PROJECTS.find((p) => p.id === currentProjectId) || ATELIER_PROJECTS[0];

  const [activeDaylight, setActiveDaylight] = useState<'dawn' | 'zenith' | 'twilight' | 'nocturnal'>('zenith');
  const [activeHotspot, setActiveHotspot] = useState<string | null>(
    project.floorPlanHotspots?.[0]?.id || null
  );

  const daylightInfo = project.daylightModes?.[activeDaylight] || {
    description: 'Natural ambient daylight illuminating raw textures.',
    temp: '5000K',
    lux: '350 lx',
  };

  const currentIndex = ATELIER_PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject =
    ATELIER_PROJECTS[(currentIndex - 1 + ATELIER_PROJECTS.length) % ATELIER_PROJECTS.length];
  const nextProject =
    ATELIER_PROJECTS[(currentIndex + 1) % ATELIER_PROJECTS.length];

  return (
    <div className="w-full bg-[#fcf9f4] text-[#1c1c19] animate-fadeIn pb-space-3xl">
      {/* Top Project Selector Ribbon */}
      <div className="border-b border-[#d0c4bd] bg-[#f6f3ee] px-4 sm:px-8 lg:px-16 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-2 text-xs font-label-caps uppercase text-[#765937]">
          <button
            onClick={() => onNavigateScreen('overview')}
            className="hover:text-[#1c1c19] flex items-center"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            Overview
          </button>
          <span>/</span>
          <span>Monograph Case Studies</span>
        </div>

        {/* Project Selector Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto py-1">
          {ATELIER_PROJECTS.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                onSelectProject(p.id);
                setActiveHotspot(p.floorPlanHotspots?.[0]?.id || null);
              }}
              className={`px-3 py-1.5 text-xs font-label-caps uppercase tracking-wider transition-colors border ${
                p.id === project.id
                  ? 'bg-[#1c1c19] text-white border-[#1c1c19]'
                  : 'bg-white text-[#4d4540] border-[#d0c4bd] hover:border-[#1c1c19]'
              }`}
            >
              {p.number} • {p.title}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Exhibition Plate */}
      <section className="px-4 sm:px-8 lg:px-16 pt-8 pb-12 border-b border-[#d0c4bd]">
        <div className="max-w-7xl mx-auto">
          {/* Header Meta */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#d0c4bd] mb-8">
            <div>
              <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block mb-2">
                Spatial Monograph Record No. {project.number} • {project.category}
              </span>
              <h1 className="font-headline-xl text-3xl sm:text-5xl lg:text-6xl text-[#1c1c19]">
                {project.title}
              </h1>
            </div>
            <div className="text-right">
              <span className="text-xs font-label-caps uppercase text-[#4d4540] block">
                {project.location}
              </span>
              <span className="text-xs font-label-caps text-[#765937] uppercase tracking-widest">
                {project.coordinates}
              </span>
            </div>
          </div>

          {/* Hero Image with Lightbox Trigger */}
          <div
            onClick={() =>
              onOpenLightbox(
                project.heroImage,
                project.title,
                project.summary,
                project.coordinates
              )
            }
            className="relative aspect-[16/9] w-full border border-[#d0c4bd] overflow-hidden group cursor-pointer bg-[#ebe8e3] mb-8"
          >
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-sm border border-[#d0c4bd] px-5 py-3">
              <span className="text-xs font-label-caps uppercase tracking-widest text-[#1c1c19] block">
                Primary Exhibition Plate
              </span>
              <span className="text-xs font-body-sm text-[#4d4540]">
                Click for Full-Scale Architectural Inspection
              </span>
            </div>

            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-white/90 backdrop-blur-sm border border-[#d0c4bd] px-4 py-2.5 flex items-center space-x-2 text-xs font-label-caps text-[#1c1c19]">
              <Maximize2 className="w-3.5 h-3.5 text-[#765937]" />
              <span>Inspect Plate</span>
            </div>
          </div>

          {/* Metrics & Architectural Scope Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-[#f0ede9] border border-[#d0c4bd] text-xs font-label-caps uppercase">
            <div>
              <span className="text-[#7e756f] block mb-1">Spatial Area</span>
              <span className="text-[#1c1c19] font-medium text-sm">
                {project.scale} ({project.scaleSqFt})
              </span>
            </div>
            <div>
              <span className="text-[#7e756f] block mb-1">Commission Period</span>
              <span className="text-[#1c1c19] font-medium text-sm">
                {project.year}
              </span>
            </div>
            <div>
              <span className="text-[#7e756f] block mb-1">Discipline</span>
              <span className="text-[#1c1c19] font-medium text-sm">
                {project.subtitle}
              </span>
            </div>
            <div>
              <span className="text-[#7e756f] block mb-1">Coordinates</span>
              <span className="text-[#1c1c19] font-medium text-sm">
                {project.coordinates}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Choreography of Daylight Interactive Simulator */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 border-b border-[#d0c4bd] bg-[#f6f3ee]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block mb-2">
                02 / Spatial Principle
              </span>
              <h2 className="font-headline-md text-2xl sm:text-3xl text-[#1c1c19]">
                Choreography of Daylight
              </h2>
            </div>
            <div className="flex items-center space-x-2 bg-white border border-[#d0c4bd] p-1">
              <button
                onClick={() => setActiveDaylight('dawn')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-label-caps uppercase transition-colors ${
                  activeDaylight === 'dawn'
                    ? 'bg-[#1c1c19] text-white'
                    : 'text-[#4d4540] hover:text-[#1c1c19]'
                }`}
              >
                <Sunrise className="w-3.5 h-3.5 text-[#9e7d58]" />
                <span>Dawn</span>
              </button>
              <button
                onClick={() => setActiveDaylight('zenith')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-label-caps uppercase transition-colors ${
                  activeDaylight === 'zenith'
                    ? 'bg-[#1c1c19] text-white'
                    : 'text-[#4d4540] hover:text-[#1c1c19]'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-[#9e7d58]" />
                <span>Zenith Noon</span>
              </button>
              <button
                onClick={() => setActiveDaylight('twilight')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-label-caps uppercase transition-colors ${
                  activeDaylight === 'twilight'
                    ? 'bg-[#1c1c19] text-white'
                    : 'text-[#4d4540] hover:text-[#1c1c19]'
                }`}
              >
                <Sunset className="w-3.5 h-3.5 text-[#9e7d58]" />
                <span>Twilight Dusk</span>
              </button>
              <button
                onClick={() => setActiveDaylight('nocturnal')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-label-caps uppercase transition-colors ${
                  activeDaylight === 'nocturnal'
                    ? 'bg-[#1c1c19] text-white'
                    : 'text-[#4d4540] hover:text-[#1c1c19]'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-[#9e7d58]" />
                <span>Nocturnal</span>
              </button>
            </div>
          </div>

          {/* Daylight Mood Box */}
          <div className="p-6 bg-white border border-[#d0c4bd] flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-500">
            <div className="max-w-2xl">
              <span className="text-[11px] font-label-caps uppercase text-[#765937] tracking-widest block mb-1">
                Atmospheric Illumination State: {activeDaylight.toUpperCase()}
              </span>
              <p className="text-sm font-body-md text-[#4d4540] leading-relaxed">
                {daylightInfo.description}
              </p>
            </div>
            <div className="flex items-center space-x-6 text-xs font-label-caps uppercase text-[#7e756f] border-t md:border-t-0 md:border-l border-[#d0c4bd] pt-4 md:pt-0 md:pl-6 shrink-0">
              <div>
                <span className="block text-[#7e756f]">Color Temp</span>
                <span className="text-[#1c1c19] font-medium">{daylightInfo.temp}</span>
              </div>
              <div>
                <span className="block text-[#7e756f]">Ambient Illuminance</span>
                <span className="text-[#1c1c19] font-medium">{daylightInfo.lux}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Floor Plan & Spatial Hotspot Diagram */}
      {project.floorPlanHotspots && project.floorPlanHotspots.length > 0 && (
        <section className="px-4 sm:px-8 lg:px-16 py-12 border-b border-[#d0c4bd]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block mb-2">
                Tectonic Axonometric
              </span>
              <h2 className="font-headline-md text-2xl sm:text-3xl text-[#1c1c19]">
                Spatial Organization & Key Interventions
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Floor Plan Canvas with interactive pins */}
              <div className="lg:col-span-8 bg-[#ebe8e3] border border-[#d0c4bd] p-6 relative min-h-[380px] flex items-center justify-center">
                {/* Architectural Blueprint grid illustration */}
                <div className="relative w-full aspect-[16/10] bg-[#f0ede9] border border-[#d0c4bd] overflow-hidden p-6">
                  {/* Subtle architectural schematic grid lines */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(#7e756f 1px, transparent 1px), linear-gradient(90deg, #7e756f 1px, transparent 1px)',
                      backgroundSize: '30px 30px',
                    }}
                  ></div>

                  {/* Representative architectural wall partitions */}
                  <div className="absolute inset-8 border-2 border-[#1c1c19]/40 pointer-events-none"></div>
                  <div className="absolute top-8 bottom-8 left-1/2 border-l border-[#1c1c19]/30 pointer-events-none"></div>
                  <div className="absolute left-8 right-8 top-1/2 border-t border-[#1c1c19]/30 pointer-events-none"></div>

                  <span className="absolute top-3 left-4 text-[10px] font-label-caps uppercase text-[#7e756f]">
                    Floor Plan Schematic • 1:100 Scale Ref
                  </span>

                  {/* Hotspots */}
                  {project.floorPlanHotspots.map((hs) => (
                    <button
                      key={hs.id}
                      onClick={() => setActiveHotspot(hs.id)}
                      style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 group flex items-center justify-center transition-transform hover:scale-110 z-10`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-label-caps transition-colors ${
                          activeHotspot === hs.id
                            ? 'bg-[#765937] text-white ring-4 ring-[#765937]/30'
                            : 'bg-[#1c1c19] text-white hover:bg-[#765937]'
                        }`}
                      >
                        +
                      </div>
                      <span className="absolute left-8 bg-white border border-[#d0c4bd] px-2.5 py-1 text-[10px] font-label-caps text-[#1c1c19] whitespace-nowrap shadow-sm pointer-events-none">
                        {hs.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Hotspot Detailed Callout */}
              <div className="lg:col-span-4 bg-white border border-[#d0c4bd] p-6 space-y-4">
                <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block">
                  Interactive Node Inspector
                </span>
                {(() => {
                  const selectedHs =
                    project.floorPlanHotspots.find((h) => h.id === activeHotspot) ||
                    project.floorPlanHotspots[0];
                  return (
                    <div>
                      <h4 className="font-headline-sm text-xl text-[#1c1c19] mb-2">
                        {selectedHs.title}
                      </h4>
                      <p className="text-sm font-body-md text-[#4d4540] leading-relaxed mb-6">
                        {selectedHs.description}
                      </p>
                      <div className="p-3 bg-[#f6f3ee] border border-[#d0c4bd] text-xs font-label-caps text-[#765937] uppercase">
                        ✓ Tectonically Integrated into Architectural Shell
                      </div>
                    </div>
                  );
                })()}

                {/* Hotspot buttons list */}
                <div className="pt-4 border-t border-[#d0c4bd] space-y-2">
                  <span className="text-[11px] font-label-caps uppercase text-[#7e756f] block mb-2">
                    Select Architectural Point:
                  </span>
                  {project.floorPlanHotspots.map((hs) => (
                    <button
                      key={hs.id}
                      onClick={() => setActiveHotspot(hs.id)}
                      className={`w-full text-left p-2.5 text-xs font-label-caps uppercase transition-colors flex items-center justify-between border ${
                        activeHotspot === hs.id
                          ? 'border-[#765937] bg-[#f0ede9] text-[#1c1c19]'
                          : 'border-transparent hover:bg-[#f6f3ee] text-[#4d4540]'
                      }`}
                    >
                      <span>{hs.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#765937]" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Materials Used in this Project */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 border-b border-[#d0c4bd]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block mb-2">
                Tactile Composition
              </span>
              <h2 className="font-headline-md text-2xl sm:text-3xl text-[#1c1c19]">
                Materials Curated for {project.title}
              </h2>
            </div>
            <button
              onClick={() => onNavigateScreen('materiality')}
              className="text-xs font-label-caps uppercase tracking-widest text-[#765937] underline underline-offset-4 hover:text-[#1c1c19]"
            >
              Explore Full Material Vault →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.materials.map((matName, idx) => {
              // match with material index if possible
              const matched = MATERIALITY_INDEX.find((m) =>
                m.name.toLowerCase().includes(matName.toLowerCase().split(' ')[0])
              );
              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (matched) onInspectMaterial(matched);
                  }}
                  className="p-5 bg-white border border-[#d0c4bd] hover:border-[#765937] transition-colors cursor-pointer group"
                >
                  <span className="text-[10px] font-label-caps uppercase text-[#765937] tracking-widest block mb-2">
                    Specimen 0{idx + 1}
                  </span>
                  <h4 className="font-headline-sm text-lg text-[#1c1c19] mb-2 group-hover:text-[#765937] transition-colors">
                    {matName}
                  </h4>
                  <p className="text-xs font-body-sm text-[#4d4540]">
                    Curated expressly for acoustic warmth, longevity, and tactile honesty in this commission.
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#d0c4bd] flex items-center justify-between text-[11px] font-label-caps text-[#765937]">
                    <span>View Technical Spec</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Artisans & Craftsmanship Roster */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 border-b border-[#d0c4bd] bg-[#f6f3ee]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block mb-2">
                Craft Guild
              </span>
              <h3 className="font-headline-md text-2xl text-[#1c1c19] mb-4">
                Master Artisans & Specialized Guilds
              </h3>
              <p className="text-sm font-body-md text-[#4d4540] leading-relaxed">
                Every architectural envelope produced by Atelier Vauquelin relies on third- and fourth-generation craftspeople whose lineage preserves ancient European stonework and Japanese joinery methods.
              </p>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.artisans.map((artisan, i) => (
                <div key={i} className="p-5 bg-white border border-[#d0c4bd]">
                  <Users className="w-5 h-5 text-[#765937] mb-3" />
                  <span className="text-[10px] font-label-caps uppercase text-[#7e756f] block mb-1">
                    {artisan.role}
                  </span>
                  <h4 className="font-headline-sm text-base text-[#1c1c19] mb-1">
                    {artisan.name}
                  </h4>
                  <span className="text-xs text-[#765937] font-body-sm">
                    {artisan.city}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Curated Photo Gallery */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 border-b border-[#d0c4bd]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block mb-2">
                Curated Photographic Plates
              </span>
              <h2 className="font-headline-md text-2xl sm:text-3xl text-[#1c1c19]">
                Architectural Perspectives & Details
              </h2>
            </div>
            <span className="text-xs font-label-caps uppercase text-[#7e756f]">
              Click image to inspect at 1:1 scale
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.galleryImages.map((img, i) => (
              <div
                key={i}
                onClick={() =>
                  onOpenLightbox(img.url, `${project.title} - ${img.perspective}`, img.caption, project.coordinates)
                }
                className="group border border-[#d0c4bd] bg-[#ebe8e3] overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 bg-white border-t border-[#d0c4bd]">
                  <span className="text-[10px] font-label-caps uppercase text-[#765937] tracking-widest block mb-1">
                    {img.perspective}
                  </span>
                  <p className="text-xs font-body-sm text-[#4d4540]">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Project Navigation Bar */}
      <section className="px-4 sm:px-8 lg:px-16 pt-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between border-t border-[#d0c4bd] pt-8">
          <button
            onClick={() => onSelectProject(prevProject.id)}
            className="flex items-center space-x-3 text-xs font-label-caps uppercase text-[#4d4540] hover:text-[#1c1c19] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <div className="text-left">
              <span className="text-[10px] text-[#7e756f] block">Previous Project</span>
              <span>{prevProject.title}</span>
            </div>
          </button>

          <button
            onClick={() => onNavigateScreen('overview')}
            className="px-6 py-2.5 border border-[#1c1c19] text-xs font-label-caps uppercase tracking-widest text-[#1c1c19] hover:bg-[#1c1c19] hover:text-white transition-colors"
          >
            Back to All Works
          </button>

          <button
            onClick={() => onSelectProject(nextProject.id)}
            className="flex items-center space-x-3 text-xs font-label-caps uppercase text-[#4d4540] hover:text-[#1c1c19] transition-colors"
          >
            <div className="text-right">
              <span className="text-[10px] text-[#7e756f] block">Next Project</span>
              <span>{nextProject.title}</span>
            </div>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
