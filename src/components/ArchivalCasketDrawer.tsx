import React, { useState } from 'react';
import { X, Trash2, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { MaterialSpecimen } from '../data/atelierData';

interface ArchivalCasketDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMaterials: MaterialSpecimen[];
  onRemoveMaterial: (id: string) => void;
  onClearCasket: () => void;
}

export const ArchivalCasketDrawer: React.FC<ArchivalCasketDrawerProps> = ({
  isOpen,
  onClose,
  selectedMaterials,
  onRemoveMaterial,
  onClearCasket,
}) => {
  const [patronName, setPatronName] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [brassPlateInscription, setBrassPlateInscription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const totalGrams = selectedMaterials.reduce((acc, m) => acc + m.weightPerSpecimen, 480); // 480g cedar box base
  const totalKg = (totalGrams / 1000).toFixed(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // simulate receipt
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-[110] flex justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-xl bg-[#fcf9f4] h-full flex flex-col border-l border-[#d0c4bd] shadow-2xl overflow-hidden">
        {/* Top Header */}
        <div className="p-6 border-b border-[#d0c4bd] bg-[#f6f3ee] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-label-caps uppercase text-[#765937] tracking-widest block">
              Patron Services • Bespoke Courier
            </span>
            <h2 className="font-headline-md text-2xl text-[#1c1c19]">
              The Archival Casket
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#7e756f] hover:text-[#1c1c19] border border-transparent hover:border-[#d0c4bd] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Explanation Box */}
          <div className="p-4 bg-[#f0ede9] border border-[#d0c4bd]">
            <p className="text-xs font-body-sm text-[#4d4540] leading-relaxed">
              Milled from a single solid block of Nagano Hinoki cypress, this casket accommodates six verified tactile specimens (100mm × 100mm). Shipped via temperature-controlled courier from our Paris or Tokyo vaults.
            </p>
          </div>

          {/* Visual Casket Tray (6 slots) */}
          <div>
            <div className="flex items-center justify-between text-xs font-label-caps uppercase mb-3">
              <span className="text-[#1c1c19]">
                Specimens Selected ({selectedMaterials.length} / 6)
              </span>
              {selectedMaterials.length > 0 && (
                <button
                  onClick={onClearCasket}
                  className="text-[#ba1a1a] hover:underline"
                >
                  Clear Casket
                </button>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3 p-4 bg-[#ebe8e3] border border-[#d0c4bd]">
              {[0, 1, 2, 3, 4, 5].map((slotIdx) => {
                const item = selectedMaterials[slotIdx];
                return (
                  <div
                    key={slotIdx}
                    className="relative aspect-square border border-[#d0c4bd] bg-[#fcf9f4] flex flex-col items-center justify-center overflow-hidden group"
                  >
                    {item ? (
                      <>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button
                            onClick={() => onRemoveMaterial(item.id)}
                            className="p-1.5 bg-white text-black hover:bg-[#ba1a1a] hover:text-white transition-colors"
                            title="Remove specimen"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="absolute bottom-0 inset-x-0 bg-[#1c1c19]/80 text-white text-[9px] font-label-caps text-center py-1 truncate px-1">
                          {item.name}
                        </div>
                      </>
                    ) : (
                      <div className="text-center p-2 text-[#7e756f]">
                        <span className="text-[10px] font-label-caps block">Slot 0{slotIdx + 1}</span>
                        <span className="text-[9px] text-[#7e756f]/70 uppercase">Empty</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-2 flex items-center justify-between text-xs font-label-caps text-[#7e756f]">
              <span>Milled Hinoki Base + Specimens</span>
              <span className="text-[#1c1c19] font-medium">Estimated Weight: ~{totalKg} kg</span>
            </div>
          </div>

          {/* Form or Confirmation */}
          {isSubmitted ? (
            <div className="p-6 bg-[#f6f3ee] border border-[#765937] text-center space-y-4 animate-fadeIn">
              <CheckCircle2 className="w-10 h-10 text-[#765937] mx-auto" />
              <h3 className="font-headline-sm text-xl text-[#1c1c19]">
                Archival Casket Requested
              </h3>
              <p className="text-sm font-body-sm text-[#4d4540]">
                The atelier concierge has registered your dispatch dossier for{' '}
                <strong className="text-[#1c1c19]">{patronName || 'Patron'}</strong>. Your custom engraved casket will be assembled in Tokyo and dispatched within 48 business hours.
              </p>
              <div className="text-xs font-label-caps text-[#765937] uppercase tracking-widest pt-2">
                Tracking Record: VAUQ-{Math.floor(100000 + Math.random() * 900000)}
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 bg-[#1c1c19] text-white text-xs font-label-caps uppercase tracking-widest"
              >
                Close Dossier
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-[#d0c4bd]">
              <span className="text-xs font-label-caps uppercase text-[#765937] tracking-widest block">
                Patron & Delivery Information
              </span>

              <div>
                <label className="block text-[11px] font-label-caps uppercase text-[#1c1c19] mb-1">
                  Patron or Architectural Practice *
                </label>
                <input
                  type="text"
                  required
                  value={patronName}
                  onChange={(e) => setPatronName(e.target.value)}
                  placeholder="e.g. Studio Kengo / Evelyn de V."
                  className="w-full bg-[#f6f3ee] border border-[#d0c4bd] px-3.5 py-2.5 text-sm text-[#1c1c19] focus:outline-none focus:border-[#765937]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-label-caps uppercase text-[#1c1c19] mb-1">
                  Private Courier Address *
                </label>
                <input
                  type="text"
                  required
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  placeholder="e.g. 74 Quai d'Orsay, 75007 Paris"
                  className="w-full bg-[#f6f3ee] border border-[#d0c4bd] px-3.5 py-2.5 text-sm text-[#1c1c19] focus:outline-none focus:border-[#765937]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-label-caps uppercase text-[#1c1c19] mb-1">
                  Custom Engraved Brass Plate Inscription (Optional)
                </label>
                <input
                  type="text"
                  value={brassPlateInscription}
                  onChange={(e) => setBrassPlateInscription(e.target.value)}
                  placeholder="e.g. Specimen Cabinet No. 42 for Villa Cap d'Antibes"
                  className="w-full bg-[#f6f3ee] border border-[#d0c4bd] px-3.5 py-2.5 text-sm text-[#1c1c19] focus:outline-none focus:border-[#765937]"
                />
              </div>

              <div className="p-3 bg-[#ebe8e3] border border-[#d0c4bd] flex items-center space-x-3 text-xs text-[#4d4540]">
                <ShieldCheck className="w-4 h-4 text-[#765937] shrink-0" />
                <span>Complimentary for accredited architects and prospective commission patrons.</span>
              </div>

              <button
                type="submit"
                disabled={selectedMaterials.length === 0}
                className="w-full py-4 bg-[#1c1c19] text-white text-xs font-label-caps uppercase tracking-widest hover:bg-[#765937] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Dispatch Verified Archival Casket</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
