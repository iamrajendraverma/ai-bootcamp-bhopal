import React, { useState } from 'react';
import { Layers, Box, Check, ArrowRight, ShieldCheck, Sparkles, Filter, Globe, Plus } from 'lucide-react';
import { MATERIALITY_INDEX, MaterialSpecimen } from '../../data/atelierData';
import { ScreenId } from '../ScreenSwitcherBar';

interface MaterialityVaultScreenProps {
  onInspectMaterial: (material: MaterialSpecimen) => void;
  selectedMaterials: MaterialSpecimen[];
  onToggleCasket: (material: MaterialSpecimen) => void;
  onOpenCasketDrawer: () => void;
  onNavigateScreen: (screen: ScreenId) => void;
}

export const MaterialityVaultScreen: React.FC<MaterialityVaultScreenProps> = ({
  onInspectMaterial,
  selectedMaterials,
  onToggleCasket,
  onOpenCasketDrawer,
  onNavigateScreen,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Stone', 'Timber', 'Textile', 'Metal', 'Mineral'];

  const filteredMaterials = MATERIALITY_INDEX.filter((m) => {
    const matchesCategory = activeCategory === 'All' || m.category === activeCategory;
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.quarryProvenance.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#fcf9f4] text-[#1c1c19] animate-fadeIn pb-space-3xl">
      {/* Top Banner Header */}
      <section className="px-4 sm:px-8 lg:px-16 pt-12 pb-10 border-b border-[#d0c4bd] bg-[#f6f3ee]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#d0c4bd]">
            <div>
              <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block mb-2">
                Screen 03 • Materiality Vault
              </span>
              <h1 className="font-headline-xl text-3xl sm:text-5xl text-[#1c1c19]">
                The Tactile Archive
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={onOpenCasketDrawer}
                className="px-6 py-3 bg-[#1c1c19] text-white text-xs font-label-caps uppercase tracking-widest hover:bg-[#765937] transition-colors flex items-center space-x-2"
              >
                <Box className="w-4 h-4" />
                <span>Patron Casket ({selectedMaterials.length}/6)</span>
              </button>
            </div>
          </div>

          <p className="mt-6 text-sm sm:text-base font-body-md text-[#4d4540] max-w-3xl leading-relaxed">
            Every material in the Vauquelin archive is sourced directly from historic quarries, managed mountain forests, or specialized European foundries. We reject synthetic coatings and deceptive veneers in favor of living substances that gather dignity across generations.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="px-4 sm:px-8 lg:px-16 py-6 border-b border-[#d0c4bd] bg-[#fcf9f4] sticky top-20 z-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-label-caps uppercase tracking-wider transition-colors border ${
                  activeCategory === cat
                    ? 'bg-[#1c1c19] text-white border-[#1c1c19]'
                    : 'bg-white text-[#4d4540] border-[#d0c4bd] hover:border-[#765937]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search origin, mineral, texture..."
              className="w-full bg-white border border-[#d0c4bd] px-4 py-2 text-xs font-body-sm text-[#1c1c19] focus:outline-none focus:border-[#765937]"
            />
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 border-b border-[#d0c4bd]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map((mat) => {
              const inCasket = selectedMaterials.some((item) => item.id === mat.id);
              return (
                <div
                  key={mat.id}
                  className="group bg-white border border-[#d0c4bd] hover:border-[#765937] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image with zoom on hover */}
                    <div
                      onClick={() => onInspectMaterial(mat)}
                      className="relative aspect-square w-full overflow-hidden bg-[#ebe8e3] cursor-pointer"
                    >
                      <img
                        src={mat.image}
                        alt={mat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 px-2.5 py-1 border border-[#d0c4bd] text-[10px] font-label-caps uppercase tracking-widest text-[#1c1c19]">
                        {mat.number} • {mat.category}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/75 text-white px-2 py-0.5 text-[10px] font-label-caps uppercase tracking-widest">
                        {mat.density}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center space-x-1.5 text-xs font-label-caps uppercase text-[#765937] mb-2">
                        <Globe className="w-3 h-3" />
                        <span>{mat.quarryProvenance}</span>
                      </div>
                      <h3
                        onClick={() => onInspectMaterial(mat)}
                        className="font-headline-sm text-2xl text-[#1c1c19] mb-3 cursor-pointer group-hover:text-[#765937] transition-colors"
                      >
                        {mat.name}
                      </h3>
                      <p className="text-xs font-body-sm text-[#4d4540] mb-4 leading-relaxed line-clamp-3">
                        {mat.description}
                      </p>

                      <div className="py-3 border-t border-b border-[#d0c4bd] text-[11px] font-label-caps uppercase text-[#7e756f] space-y-1.5">
                        <div className="flex justify-between">
                          <span>Finish</span>
                          <span className="text-[#1c1c19] text-right truncate max-w-[160px]">
                            {mat.finish}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Acoustic Coeff</span>
                          <span className="text-[#1c1c19]">{mat.acousticCoeff}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="p-4 bg-[#f6f3ee] border-t border-[#d0c4bd] flex items-center justify-between gap-3">
                    <button
                      onClick={() => onInspectMaterial(mat)}
                      className="text-xs font-label-caps uppercase text-[#1c1c19] hover:text-[#765937] flex items-center"
                    >
                      <span>Examine Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </button>

                    <button
                      onClick={() => onToggleCasket(mat)}
                      className={`px-3 py-1.5 text-xs font-label-caps uppercase tracking-wider border transition-colors flex items-center space-x-1.5 ${
                        inCasket
                          ? 'bg-[#765937] text-white border-[#765937]'
                          : 'bg-white text-[#1c1c19] border-[#d0c4bd] hover:border-[#1c1c19]'
                      }`}
                    >
                      {inCasket ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>In Casket</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Casket</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Archival Casket Assembly Section */}
      <section className="px-4 sm:px-8 lg:px-16 pt-12">
        <div className="max-w-7xl mx-auto bg-[#f0ede9] border border-[#d0c4bd] p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block mb-2">
                Bespoke Archival Box For Commissions
              </span>
              <h2 className="font-headline-lg text-3xl text-[#1c1c19] mb-4">
                Curate Your Personal 6-Specimen Casket
              </h2>
              <p className="text-sm font-body-md text-[#4d4540] max-w-2xl leading-relaxed mb-6">
                Before initiating a formal architectural commission, we provide prospective patrons and architectural offices with a custom milled solid-Hinoki casket containing 6 physical verified stone, timber, and metal specimens.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs font-label-caps uppercase text-[#7e756f]">
                <span>Currently Selected: {selectedMaterials.length} of 6</span>
                <span>•</span>
                <span>Nagano Hinoki Milled Case</span>
                <span>•</span>
                <span>Complimentary for Verified Patrons</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <button
                onClick={onOpenCasketDrawer}
                className="w-full sm:w-auto px-8 py-4 bg-[#1c1c19] text-white text-xs font-label-caps uppercase tracking-widest hover:bg-[#765937] transition-colors"
              >
                Assemble & Request Casket →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
