import React from 'react';
import { X, Check, Box, Layers, Thermometer, Volume2, Globe } from 'lucide-react';
import { MaterialSpecimen } from '../data/atelierData';

interface MaterialModalProps {
  material: MaterialSpecimen | null;
  onClose: () => void;
  isInCasket: boolean;
  onToggleCasket: (material: MaterialSpecimen) => void;
}

export const MaterialModal: React.FC<MaterialModalProps> = ({
  material,
  onClose,
  isInCasket,
  onToggleCasket,
}) => {
  if (!material) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1c1c19]/80 backdrop-blur-sm p-4 md:p-8 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#fcf9f4] border border-[#d0c4bd] max-h-[92vh] flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-[#d0c4bd] bg-[#f6f3ee] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-[#765937] font-label-caps text-xs tracking-widest uppercase">
              Tactile Specimen Index • {material.number}
            </span>
            <span className="text-[#7e756f]">•</span>
            <span className="text-[#1c1c19] font-label-caps text-xs uppercase tracking-widest">
              Category: {material.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#7e756f] hover:text-[#1c1c19] border border-transparent hover:border-[#d0c4bd] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Image & Micro Texture */}
          <div className="md:col-span-5 flex flex-col">
            <div className="relative aspect-square w-full border border-[#d0c4bd] overflow-hidden bg-[#ebe8e3] mb-4 group">
              <img
                src={material.image}
                alt={material.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-3 left-3 bg-[#fcf9f4]/90 px-3 py-1 border border-[#d0c4bd] text-[10px] font-label-caps tracking-widest uppercase">
                1:1 Scale Macro Plate
              </div>
            </div>
            <div className="bg-[#f0ede9] p-4 border border-[#d0c4bd] space-y-2">
              <div className="flex items-center justify-between text-xs font-label-caps uppercase text-[#4d4540]">
                <span>Sample Block Mass</span>
                <span className="text-[#1c1c19] font-medium">{material.weightPerSpecimen}g</span>
              </div>
              <div className="flex items-center justify-between text-xs font-label-caps uppercase text-[#4d4540]">
                <span>Acoustic Damping</span>
                <span className="text-[#1c1c19] font-medium">{material.acousticCoeff}</span>
              </div>
            </div>
          </div>

          {/* Details & Physical Properties */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="font-headline-lg text-3xl text-[#1c1c19] mb-2">
                {material.name}
              </h2>
              <div className="flex items-center space-x-2 text-xs font-label-caps text-[#765937] tracking-widest uppercase mb-4">
                <Globe className="w-3.5 h-3.5" />
                <span>{material.quarryProvenance}</span>
              </div>

              <p className="text-sm font-body-md text-[#4d4540] mb-6 leading-relaxed">
                {material.description}
              </p>

              {/* Physical specifications matrix */}
              <div className="space-y-4 border-t border-b border-[#d0c4bd] py-4 my-4">
                <div className="flex items-start space-x-3">
                  <Layers className="w-4 h-4 text-[#765937] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[11px] font-label-caps uppercase tracking-wider text-[#7e756f] block">
                      Surface Finish & Grain
                    </span>
                    <span className="text-sm font-body-md text-[#1c1c19]">
                      {material.finish}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Thermometer className="w-4 h-4 text-[#765937] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[11px] font-label-caps uppercase tracking-wider text-[#7e756f] block">
                      Thermal Inertia & Seasonality
                    </span>
                    <span className="text-sm font-body-md text-[#1c1c19]">
                      {material.thermalBehavior}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Volume2 className="w-4 h-4 text-[#765937] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[11px] font-label-caps uppercase tracking-wider text-[#7e756f] block">
                      Tactile Sensory Experience
                    </span>
                    <span className="text-sm font-body-md text-[#1c1c19]">
                      {material.tactileNotes}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] font-label-caps uppercase text-[#7e756f]">
                Preserved in Minami-Aoyama Vault
              </span>

              <button
                onClick={() => onToggleCasket(material)}
                className={`w-full sm:w-auto px-6 py-3.5 text-xs font-label-caps uppercase tracking-widest flex items-center justify-center space-x-2 transition-colors border ${
                  isInCasket
                    ? 'bg-[#765937] text-white border-[#765937]'
                    : 'bg-[#1c1c19] text-white border-[#1c1c19] hover:bg-[#765937]'
                }`}
              >
                {isInCasket ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Included in Patron Casket</span>
                  </>
                ) : (
                  <>
                    <Box className="w-4 h-4" />
                    <span>Add to Archival Casket (Max 6)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
