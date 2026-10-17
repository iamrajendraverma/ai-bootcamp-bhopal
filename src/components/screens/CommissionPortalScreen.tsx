import React, { useState } from 'react';
import { ShieldCheck, Check, ArrowRight, ArrowLeft, Download, FileText, Send, Sparkles } from 'lucide-react';
import { ScreenId } from '../ScreenSwitcherBar';

interface CommissionPortalScreenProps {
  onNavigateScreen: (screen: ScreenId) => void;
}

export const CommissionPortalScreen: React.FC<CommissionPortalScreenProps> = ({
  onNavigateScreen,
}) => {
  const [step, setStep] = useState(1);

  // Form states
  const [typology, setTypology] = useState('Private Residence / Villa');
  const [scaleM2, setScaleM2] = useState(650);
  const [geographicLocation, setGeographicLocation] = useState('Kyoto / Kansai');
  const [architecturalContext, setArchitecturalContext] = useState(
    'Historic Timber Framework'
  );
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([
    'Roman Travertine',
    'Hinoki Cypress',
    'Slaked Lime Plaster',
  ]);
  const [selectedSanctuaries, setSelectedSanctuaries] = useState<string[]>([
    'Recessed Soaking Bath',
    'Acoustic Library Wing',
    'Internal Moss Garden',
  ]);
  const [patronName, setPatronName] = useState('');
  const [patronEmail, setPatronEmail] = useState('');
  const [requiresNDA, setRequiresNDA] = useState(true);
  const [briefSubmitted, setBriefSubmitted] = useState(false);

  const toggleMaterial = (mat: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const toggleSanctuary = (sanc: string) => {
    setSelectedSanctuaries((prev) =>
      prev.includes(sanc) ? prev.filter((s) => s !== sanc) : [...prev, sanc]
    );
  };

  const scaleSqFt = Math.round(scaleM2 * 10.7639);

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBriefSubmitted(true);
  };

  return (
    <div className="w-full bg-[#fcf9f4] text-[#1c1c19] animate-fadeIn pb-space-3xl">
      {/* Top Banner */}
      <section className="px-4 sm:px-8 lg:px-16 pt-12 pb-10 border-b border-[#d0c4bd] bg-[#f6f3ee]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block mb-2">
              Screen 05 • Confidential Patron Portal
            </span>
            <h1 className="font-headline-xl text-3xl sm:text-5xl text-[#1c1c19]">
              Spatial Brief Builder
            </h1>
          </div>
          <div className="flex items-center space-x-2 text-xs font-label-caps text-[#765937] uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>Binding Bilateral NDA Protocol Active</span>
          </div>
        </div>
      </section>

      {/* 5-Step Process Bar */}
      <section className="px-4 sm:px-8 lg:px-16 py-6 border-b border-[#d0c4bd] bg-white sticky top-20 z-20">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-xs font-label-caps uppercase">
          {[
            '01 Typology & Scale',
            '02 Context',
            '03 Materials',
            '04 Sanctuaries',
            '05 Patron Dossier',
          ].map((label, idx) => (
            <button
              key={idx}
              onClick={() => setStep(idx + 1)}
              className={`pb-2 border-b-2 transition-colors ${
                step === idx + 1
                  ? 'border-[#765937] text-[#1c1c19] font-medium'
                  : step > idx + 1
                  ? 'border-[#d0c4bd] text-[#765937]'
                  : 'border-transparent text-[#7e756f] hover:text-[#1c1c19]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Main Interactive Container */}
      <section className="px-4 sm:px-8 lg:px-16 py-12">
        <div className="max-w-5xl mx-auto bg-white border border-[#d0c4bd] p-8 md:p-12 shadow-sm">
          {briefSubmitted ? (
            <div className="text-center space-y-6 py-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#f0ede9] text-[#765937] flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h2 className="font-headline-lg text-3xl text-[#1c1c19]">
                Architectural Brief Transmitted
              </h2>
              <p className="text-sm font-body-md text-[#4d4540] max-w-xl mx-auto leading-relaxed">
                Thank you, <strong className="text-[#1c1c19]">{patronName || 'Patron'}</strong>. Your bespoke commission brief for the <strong className="text-[#1c1c19]">{scaleM2} m² {typology}</strong> in <strong className="text-[#1c1c19]">{geographicLocation}</strong> has been encrypted and delivered directly to Marc Vauquelin.
              </p>

              {/* Dossier Summary Box */}
              <div className="max-w-2xl mx-auto p-6 bg-[#f6f3ee] border border-[#d0c4bd] text-left text-xs font-label-caps uppercase space-y-3">
                <div className="flex justify-between border-b border-[#d0c4bd] pb-2">
                  <span className="text-[#7e756f]">Commission Code</span>
                  <span className="text-[#1c1c19] font-medium">VAUQ-BRF-2025-089</span>
                </div>
                <div className="flex justify-between border-b border-[#d0c4bd] pb-2">
                  <span className="text-[#7e756f]">Selected Materials</span>
                  <span className="text-[#1c1c19]">{selectedMaterials.join(', ')}</span>
                </div>
                <div className="flex justify-between border-b border-[#d0c4bd] pb-2">
                  <span className="text-[#7e756f]">Spatial Programs</span>
                  <span className="text-[#1c1c19]">{selectedSanctuaries.join(', ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7e756f]">Confidentiality</span>
                  <span className="text-[#765937]">Bilateral Bilateral NDA Enforced</span>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4 pt-4">
                <button
                  onClick={() => window.print()}
                  className="px-6 py-3 border border-[#1c1c19] text-xs font-label-caps uppercase tracking-widest text-[#1c1c19] hover:bg-[#1c1c19] hover:text-white transition-colors flex items-center space-x-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Brief Dossier</span>
                </button>
                <button
                  onClick={() => onNavigateScreen('overview')}
                  className="px-6 py-3 bg-[#765937] text-white text-xs font-label-caps uppercase tracking-widest hover:bg-[#1c1c19] transition-colors"
                >
                  Return to Atelier
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Step 1: Typology & Scale */}
              {step === 1 && (
                <div className="space-y-8 animate-fadeIn">
                  <div>
                    <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block mb-2">
                      Step 01 / Spatial Typology & Scale
                    </span>
                    <h3 className="font-headline-md text-2xl text-[#1c1c19]">
                      Select the Nature of the Spatial Commission
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Private Residence / Villa',
                      'Subterranean Spa & Wellness',
                      'Boutique Hospitality & Hotel',
                      'Penthouse / Duplex Renovation',
                      'Yacht Architectural Interior',
                      'Cultural Foundation & Gallery',
                    ].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTypology(t)}
                        className={`p-4 border text-left text-sm font-body-sm transition-colors flex items-center justify-between ${
                          typology === t
                            ? 'border-[#765937] bg-[#f0ede9] text-[#1c1c19]'
                            : 'border-[#d0c4bd] hover:border-[#1c1c19]'
                        }`}
                      >
                        <span>{t}</span>
                        {typology === t && <Check className="w-4 h-4 text-[#765937]" />}
                      </button>
                    ))}
                  </div>

                  {/* Scale Slider */}
                  <div className="pt-6 border-t border-[#d0c4bd]">
                    <div className="flex items-center justify-between text-xs font-label-caps uppercase mb-3">
                      <span className="text-[#1c1c19]">Approximate Spatial Footprint</span>
                      <span className="text-[#765937] font-medium text-base">
                        {scaleM2} m² ({scaleSqFt} sq.ft)
                      </span>
                    </div>
                    <input
                      type="range"
                      min="150"
                      max="2500"
                      step="50"
                      value={scaleM2}
                      onChange={(e) => setScaleM2(Number(e.target.value))}
                      className="w-full h-1.5 bg-[#d0c4bd] accent-[#765937] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-label-caps text-[#7e756f] mt-2">
                      <span>150 m² (Pied-à-terre)</span>
                      <span>1,200 m² (Grand Villa)</span>
                      <span>2,500 m²+ (Private Estate)</span>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-8 py-3.5 bg-[#1c1c19] text-white text-xs font-label-caps uppercase tracking-widest hover:bg-[#765937] transition-colors flex items-center space-x-2"
                    >
                      <span>Proceed to Context</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Context & Geography */}
              {step === 2 && (
                <div className="space-y-8 animate-fadeIn">
                  <div>
                    <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block mb-2">
                      Step 02 / Geography & Architectural Fabric
                    </span>
                    <h3 className="font-headline-md text-2xl text-[#1c1c19]">
                      Geographic Location & Heritage Constraints
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-label-caps uppercase text-[#1c1c19] mb-2">
                        Geographic Coordinates / City *
                      </label>
                      <input
                        type="text"
                        value={geographicLocation}
                        onChange={(e) => setGeographicLocation(e.target.value)}
                        placeholder="e.g. Minami-Aoyama, Tokyo / Paris 7e / Lake Como"
                        className="w-full bg-[#f6f3ee] border border-[#d0c4bd] px-4 py-3 text-sm text-[#1c1c19] focus:outline-none focus:border-[#765937]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-label-caps uppercase text-[#1c1c19] mb-2">
                        Existing Architectural Shell
                      </label>
                      <select
                        value={architecturalContext}
                        onChange={(e) => setArchitecturalContext(e.target.value)}
                        className="w-full bg-[#f6f3ee] border border-[#d0c4bd] px-4 py-3 text-sm text-[#1c1c19] focus:outline-none focus:border-[#765937]"
                      >
                        <option>Historic Timber Framework (Japanese / Sukiya)</option>
                        <option>19th Century Haussmannian Stone (Parisian)</option>
                        <option>Stepped Mediterranean Terraces (Cap d'Antibes)</option>
                        <option>Subterranean Bedrock Excavation (Alpine)</option>
                        <option>New Raw Concrete Monolith Construction</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-[#d0c4bd]">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3 border border-[#d0c4bd] text-xs font-label-caps uppercase hover:border-[#1c1c19]"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-8 py-3.5 bg-[#1c1c19] text-white text-xs font-label-caps uppercase tracking-widest hover:bg-[#765937] transition-colors flex items-center space-x-2"
                    >
                      <span>Proceed to Materials</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Material Aspirations */}
              {step === 3 && (
                <div className="space-y-8 animate-fadeIn">
                  <div>
                    <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block mb-2">
                      Step 03 / Tactile Materiality
                    </span>
                    <h3 className="font-headline-md text-2xl text-[#1c1c19]">
                      Select Preferred Raw Earth-Born Media
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      'Roman Travertine',
                      'Hinoki Cypress',
                      'Loomed Raw Silk',
                      'Gunmetal Bronze',
                      'Slaked Lime Plaster',
                      'Kyoto Basalt Slabs',
                      'Fluted Arabescato Marble',
                      'Charred Yakisugi Cedar',
                      'Smoked French Oak',
                    ].map((mat) => {
                      const isSel = selectedMaterials.includes(mat);
                      return (
                        <button
                          key={mat}
                          type="button"
                          onClick={() => toggleMaterial(mat)}
                          className={`p-3.5 border text-left text-xs font-label-caps uppercase transition-colors flex items-center justify-between ${
                            isSel
                              ? 'border-[#765937] bg-[#f0ede9] text-[#1c1c19]'
                              : 'border-[#d0c4bd] bg-white text-[#4d4540] hover:border-[#1c1c19]'
                          }`}
                        >
                          <span>{mat}</span>
                          {isSel && <Check className="w-3.5 h-3.5 text-[#765937]" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-between pt-4 border-t border-[#d0c4bd]">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 border border-[#d0c4bd] text-xs font-label-caps uppercase hover:border-[#1c1c19]"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="px-8 py-3.5 bg-[#1c1c19] text-white text-xs font-label-caps uppercase tracking-widest hover:bg-[#765937] transition-colors flex items-center space-x-2"
                    >
                      <span>Proceed to Sanctuaries</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Spatial Sanctuaries */}
              {step === 4 && (
                <div className="space-y-8 animate-fadeIn">
                  <div>
                    <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block mb-2">
                      Step 04 / Sanctuary Programs
                    </span>
                    <h3 className="font-headline-md text-2xl text-[#1c1c19]">
                      Contemplative Amenities Required
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Recessed Soaking Bath (Travertine / Hinoki)',
                      'Acoustic Library Wing (Sound STC 65)',
                      'Internal Moss Garden / Courtyard',
                      'Subterranean Thermal Spring & Steam Crypt',
                      'Traditional Tatami Tea Alcove',
                      'Temperature-Controlled Wine Cellar Vault',
                    ].map((sanc) => {
                      const isSel = selectedSanctuaries.includes(sanc);
                      return (
                        <button
                          key={sanc}
                          type="button"
                          onClick={() => toggleSanctuary(sanc)}
                          className={`p-4 border text-left text-xs font-label-caps uppercase transition-colors flex items-center justify-between ${
                            isSel
                              ? 'border-[#765937] bg-[#f0ede9] text-[#1c1c19]'
                              : 'border-[#d0c4bd] bg-white text-[#4d4540] hover:border-[#1c1c19]'
                          }`}
                        >
                          <span>{sanc}</span>
                          {isSel && <Check className="w-4 h-4 text-[#765937]" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-between pt-4 border-t border-[#d0c4bd]">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 border border-[#d0c4bd] text-xs font-label-caps uppercase hover:border-[#1c1c19]"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(5)}
                      className="px-8 py-3.5 bg-[#1c1c19] text-white text-xs font-label-caps uppercase tracking-widest hover:bg-[#765937] transition-colors flex items-center space-x-2"
                    >
                      <span>Finalize Dossier</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 5: Patron Dossier & Submission */}
              {step === 5 && (
                <form onSubmit={handleFinalSubmit} className="space-y-6 animate-fadeIn">
                  <div>
                    <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block mb-2">
                      Step 05 / Principal Patron Credentials
                    </span>
                    <h3 className="font-headline-md text-2xl text-[#1c1c19]">
                      Transmit Confidential Brief Dossier
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-label-caps uppercase text-[#1c1c19] mb-1">
                        Patron Principal Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={patronName}
                        onChange={(e) => setPatronName(e.target.value)}
                        placeholder="e.g. Lord Alistair S."
                        className="w-full bg-[#f6f3ee] border border-[#d0c4bd] px-4 py-3 text-sm text-[#1c1c19] focus:outline-none focus:border-[#765937]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-label-caps uppercase text-[#1c1c19] mb-1">
                        Confidential Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={patronEmail}
                        onChange={(e) => setPatronEmail(e.target.value)}
                        placeholder="patron@estate.com"
                        className="w-full bg-[#f6f3ee] border border-[#d0c4bd] px-4 py-3 text-sm text-[#1c1c19] focus:outline-none focus:border-[#765937]"
                      />
                    </div>
                  </div>

                  <label className="flex items-start space-x-3 p-4 bg-[#f6f3ee] border border-[#d0c4bd] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={requiresNDA}
                      onChange={(e) => setRequiresNDA(e.target.checked)}
                      className="mt-1 h-4 w-4 text-[#765937] border-[#d0c4bd] rounded-none focus:ring-0"
                    />
                    <div className="text-xs font-body-sm text-[#4d4540]">
                      <span className="font-label-caps uppercase text-[#1c1c19] block mb-0.5">
                        Enforce Bilateral Non-Disclosure Protocol
                      </span>
                      Atelier Vauquelin shall maintain strict cryptographic confidentiality of all floor plans, coordinates, and ownership records.
                    </div>
                  </label>

                  <div className="flex justify-between pt-4 border-t border-[#d0c4bd]">
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="px-6 py-3 border border-[#d0c4bd] text-xs font-label-caps uppercase hover:border-[#1c1c19]"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-10 py-4 bg-[#1c1c19] text-white text-xs font-label-caps uppercase tracking-widest hover:bg-[#765937] transition-colors flex items-center space-x-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Brief Directly to Director Marc Vauquelin</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
