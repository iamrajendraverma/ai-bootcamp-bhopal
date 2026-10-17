import React, { useEffect } from 'react';
import { X, ZoomIn, MapPin, Compass } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  caption?: string;
  location?: string;
  coordinates?: string;
}

export const LightboxModal: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  caption,
  location,
  coordinates,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1c1c19]/95 backdrop-blur-md p-4 md:p-8 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white p-2 border border-white/20 hover:border-white/60 transition-colors z-10"
        aria-label="Close inspection view"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Container */}
      <div className="max-w-7xl w-full flex flex-col max-h-[92vh] border border-[#d0c4bd]/30 bg-[#1c1c19]">
        {/* Top Monograph Plate Bar */}
        <div className="px-6 py-3.5 border-b border-[#d0c4bd]/20 flex items-center justify-between text-[#d0c4bd] text-xs font-label-caps tracking-widest uppercase">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-[#9e7d58]"></span>
            <span>Archival Architectural Plate</span>
          </div>
          {coordinates && (
            <div className="hidden sm:flex items-center space-x-2 text-white/60">
              <Compass className="w-3.5 h-3.5 text-[#9e7d58]" />
              <span>{coordinates}</span>
            </div>
          )}
        </div>

        {/* Image Display */}
        <div className="relative flex-1 overflow-hidden flex items-center justify-center p-2 sm:p-6 bg-[#151412]">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[68vh] w-auto max-w-full object-contain border border-[#d0c4bd]/10 shadow-2xl"
          />
        </div>

        {/* Bottom Details Bar */}
        <div className="p-6 bg-[#1f1b18] border-t border-[#d0c4bd]/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-1">
              <h3 className="font-headline-sm text-white text-xl">{title}</h3>
              {location && (
                <span className="inline-flex items-center text-xs font-label-caps tracking-widest text-[#9e7d58]">
                  <MapPin className="w-3 h-3 mr-1" />
                  {location}
                </span>
              )}
            </div>
            {caption && (
              <p className="text-sm font-body-sm text-[#d0c4bd] max-w-2xl">
                {caption}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 border border-[#d0c4bd]/40 text-white text-xs font-label-caps tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Full Scale</span>
            </a>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#765937] text-white text-xs font-label-caps tracking-widest uppercase hover:bg-[#9e7d58] transition-colors"
            >
              Return to Studio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
