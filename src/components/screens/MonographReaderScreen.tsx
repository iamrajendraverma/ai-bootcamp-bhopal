import React, { useState } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { MONOGRAPH_SPREADS } from '../../data/atelierData';
import { ScreenId } from '../ScreenSwitcherBar';

interface MonographReaderScreenProps {
  onOpenLightbox: (imageUrl: string, title: string, caption?: string) => void;
  onNavigateScreen: (screen: ScreenId) => void;
}

export const MonographReaderScreen: React.FC<MonographReaderScreenProps> = ({
  onOpenLightbox,
  onNavigateScreen,
}) => {
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [patronName, setPatronName] = useState('');
  const [patronAddress, setPatronAddress] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [reservedEditionNumber, setReservedEditionNumber] = useState(142);

  const currentSpread = MONOGRAPH_SPREADS[currentSpreadIndex];

  const handlePrev = () => {
    setCurrentSpreadIndex((prev) =>
      prev === 0 ? MONOGRAPH_SPREADS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSpreadIndex((prev) =>
      prev === MONOGRAPH_SPREADS.length - 1 ? 0 : prev + 1
    );
  };

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    setReservedEditionNumber((prev) => prev + 1);
    setOrderSuccess(true);
  };

  return (
    <div className="w-full bg-[#fcf9f4] text-[#1c1c19] animate-fadeIn pb-space-3xl">
      {/* Top Banner */}
      <section className="px-4 sm:px-8 lg:px-16 pt-12 pb-10 border-b border-[#d0c4bd] bg-[#f6f3ee]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block mb-2">
              Screen 04 • Limited Publication
            </span>
            <h1 className="font-headline-xl text-3xl sm:text-5xl text-[#1c1c19]">
              Volume III: Monograph Monolith
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setOrderModalOpen(true)}
              className="px-6 py-3 bg-[#1c1c19] text-white text-xs font-label-caps uppercase tracking-widest hover:bg-[#765937] transition-colors"
            >
              Acquire Clothbound Edition ($280)
            </button>
          </div>
        </div>
      </section>

      {/* Book Spread Presentation (Simulating high-end dual page monograph spread) */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 border-b border-[#d0c4bd]">
        <div className="max-w-6xl mx-auto">
          {/* Spread Navigation Controls */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#d0c4bd] text-xs font-label-caps uppercase text-[#7e756f]">
            <span>{currentSpread.chapter}</span>
            <div className="flex items-center space-x-4">
              <span>Spread {currentSpreadIndex + 1} of {MONOGRAPH_SPREADS.length}</span>
              <div className="flex items-center space-x-1">
                <button
                  onClick={handlePrev}
                  className="p-1 border border-[#d0c4bd] hover:border-[#1c1c19] text-[#1c1c19]"
                  aria-label="Previous Spread"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1 border border-[#d0c4bd] hover:border-[#1c1c19] text-[#1c1c19]"
                  aria-label="Next Spread"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Dual Page Container */}
          <div className="bg-[#f6f3ee] border border-[#d0c4bd] shadow-xl p-4 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
              {/* Book Spine Center Divider */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[#d0c4bd]/70 shadow-sm"></div>

              {/* Left Page (Typography & Essay) */}
              <div className="flex flex-col justify-between pr-0 md:pr-8 min-h-[420px]">
                <div>
                  <span className="text-[10px] font-label-caps uppercase text-[#765937] tracking-widest block mb-4">
                    Atelier Essay • Marc Vauquelin
                  </span>
                  <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#1c1c19] mb-6 leading-snug">
                    {currentSpread.leftTitle}
                  </h2>
                  <p className="text-sm sm:text-base font-body-md text-[#4d4540] leading-relaxed mb-8">
                    {currentSpread.leftContent}
                  </p>
                  <div className="p-4 bg-white/70 border border-[#d0c4bd] text-xs font-body-sm text-[#7e756f] italic">
                    “In our architecture, the silence is not empty; it is pregnant with intention and the memory of materials.”
                  </div>
                </div>

                <div className="pt-8 border-t border-[#d0c4bd]/50 flex items-center justify-between text-xs font-label-caps text-[#7e756f]">
                  <span>Atelier Vauquelin Press</span>
                  <span>Page {currentSpread.pageNumber}</span>
                </div>
              </div>

              {/* Right Page (High-Res Photographic Plate) */}
              <div className="flex flex-col justify-between pl-0 md:pl-8">
                <div>
                  <div
                    onClick={() =>
                      onOpenLightbox(
                        currentSpread.rightImage,
                        currentSpread.leftTitle,
                        currentSpread.rightCaption
                      )
                    }
                    className="relative aspect-[4/3] w-full overflow-hidden border border-[#d0c4bd] bg-[#ebe8e3] cursor-pointer group mb-4"
                  >
                    <img
                      src={currentSpread.rightImage}
                      alt={currentSpread.rightCaption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute bottom-3 right-3 bg-white/90 text-[#1c1c19] px-2.5 py-1 text-[10px] font-label-caps uppercase">
                      Inspect Plate
                    </div>
                  </div>
                  <p className="text-xs font-body-sm text-[#4d4540] italic leading-relaxed">
                    {currentSpread.rightCaption}
                  </p>
                </div>

                <div className="pt-8 border-t border-[#d0c4bd]/50 flex items-center justify-between text-xs font-label-caps text-[#7e756f]">
                  <span>Plate Specification: Uncoated Cotton</span>
                  <span>Page {currentSpread.pageNumber + 1}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Physical Specification Attributes */}
      <section className="px-4 sm:px-8 lg:px-16 pt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white border border-[#d0c4bd]">
            <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block mb-2">
              Binding & Cloth
            </span>
            <h4 className="font-headline-sm text-lg text-[#1c1c19] mb-2">
              Unbleached Raw Linen
            </h4>
            <p className="text-xs font-body-sm text-[#4d4540]">
              Hand-bound in Zurich using unbleached Belgian linen with deep-debossed 22-carat gold foil titling.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#d0c4bd]">
            <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block mb-2">
              Paper Medium
            </span>
            <h4 className="font-headline-sm text-lg text-[#1c1c19] mb-2">
              170gsm Fedrigoni Cotton
            </h4>
            <p className="text-xs font-body-sm text-[#4d4540]">
              Milled in Verona from archival acid-free cotton fibers, calibrated for deep chiaroscuro ink saturation.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#d0c4bd]">
            <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block mb-2">
              Collector Edition
            </span>
            <h4 className="font-headline-sm text-lg text-[#1c1c19] mb-2">
              Strictly 500 Exemplars
            </h4>
            <p className="text-xs font-body-sm text-[#4d4540]">
              Each copy hand-numbered and authenticated with the blind-embossed seal of Atelier Vauquelin.
            </p>
          </div>
        </div>
      </section>

      {/* Order Modal */}
      {orderModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#fcf9f4] border border-[#d0c4bd] max-w-lg w-full p-8 relative">
            <button
              onClick={() => {
                setOrderModalOpen(false);
                setOrderSuccess(false);
              }}
              className="absolute top-4 right-4 text-[#7e756f] hover:text-[#1c1c19]"
            >
              ✕
            </button>

            {orderSuccess ? (
              <div className="text-center space-y-4 py-4">
                <Check className="w-12 h-12 text-[#765937] mx-auto" />
                <h3 className="font-headline-md text-2xl text-[#1c1c19]">
                  Volume Reserved
                </h3>
                <p className="text-sm font-body-sm text-[#4d4540]">
                  Copy <strong className="text-[#1c1c19]">No. {reservedEditionNumber} of 500</strong> has been reserved for <strong className="text-[#1c1c19]">{patronName || 'Patron'}</strong>.
                </p>
                <p className="text-xs font-label-caps uppercase tracking-widest text-[#765937]">
                  Dispatched via insured diplomatic courier
                </p>
                <button
                  onClick={() => {
                    setOrderModalOpen(false);
                    setOrderSuccess(false);
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#1c1c19] text-white text-xs font-label-caps uppercase tracking-widest"
                >
                  Return to Monograph
                </button>
              </div>
            ) : (
              <form onSubmit={handleReserve} className="space-y-4">
                <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block">
                  Reserve Monograph Edition ($280)
                </span>
                <h3 className="font-headline-sm text-2xl text-[#1c1c19]">
                  Acquire Volume III: Monograph Monolith
                </h3>
                <p className="text-xs font-body-sm text-[#4d4540]">
                  Current available inventory: Copy {reservedEditionNumber} of 500. Includes complimentary worldwide courier dispatch.
                </p>

                <div>
                  <label className="block text-[11px] font-label-caps uppercase text-[#1c1c19] mb-1">
                    Patron Full Name *
                  </label>
                  <input
                    required
                    value={patronName}
                    onChange={(e) => setPatronName(e.target.value)}
                    placeholder="Baroness Evelyn de V."
                    className="w-full bg-[#f6f3ee] border border-[#d0c4bd] px-3.5 py-2.5 text-sm text-[#1c1c19] focus:outline-none focus:border-[#765937]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-label-caps uppercase text-[#1c1c19] mb-1">
                    Delivery Address *
                  </label>
                  <input
                    required
                    value={patronAddress}
                    onChange={(e) => setPatronAddress(e.target.value)}
                    placeholder="Quai d'Orsay, 75007 Paris"
                    className="w-full bg-[#f6f3ee] border border-[#d0c4bd] px-3.5 py-2.5 text-sm text-[#1c1c19] focus:outline-none focus:border-[#765937]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1c1c19] text-white text-xs font-label-caps uppercase tracking-widest hover:bg-[#765937] transition-colors mt-2"
                >
                  Confirm Reservation ($280)
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
