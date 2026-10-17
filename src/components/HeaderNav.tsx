import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ScreenId } from './ScreenSwitcherBar';

interface HeaderNavProps {
  onNavigateScreen: (screen: ScreenId) => void;
  onOpenConsultation: () => void;
  activeScreen: ScreenId;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onNavigateScreen,
  onOpenConsultation,
  activeScreen,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (screen: ScreenId, anchor?: string) => {
    onNavigateScreen(screen);
    setMobileMenuOpen(false);
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fcf9f4] border-b border-[#d0c4bd] transition-all duration-700 ease-out">
      <div className="w-full px-4 sm:px-8 lg:px-16 flex items-center justify-between h-20 md:h-24 max-w-full">
        {/* Brand Wordmark */}
        <button
          onClick={() => handleNavClick('overview')}
          className="text-left font-headline-sm text-xl md:text-2xl tracking-widest text-[#1c1c19] uppercase focus:outline-none hover:opacity-80 transition-opacity"
        >
          ATELIER VAUQUELIN
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          <button
            onClick={() => handleNavClick('overview', 'work')}
            className={`tracking-widest uppercase text-[11px] font-label-caps transition-colors duration-500 pb-1 ${
              activeScreen === 'overview'
                ? 'text-[#1c1c19] border-b border-[#765937]'
                : 'text-[#4d4540] hover:text-[#765937]'
            }`}
          >
            Work
          </button>
          <button
            onClick={() => handleNavClick('casestudy')}
            className={`tracking-widest uppercase text-[11px] font-label-caps transition-colors duration-500 pb-1 ${
              activeScreen === 'casestudy'
                ? 'text-[#1c1c19] border-b border-[#765937]'
                : 'text-[#4d4540] hover:text-[#765937]'
            }`}
          >
            Case Studies
          </button>
          <button
            onClick={() => handleNavClick('overview', 'philosophy')}
            className="text-[#4d4540] tracking-widest uppercase transition-colors duration-500 hover:text-[#765937] text-[11px] font-label-caps pb-1"
          >
            Philosophy
          </button>
          <button
            onClick={() => handleNavClick('materiality')}
            className={`tracking-widest uppercase text-[11px] font-label-caps transition-colors duration-500 pb-1 ${
              activeScreen === 'materiality'
                ? 'text-[#1c1c19] border-b border-[#765937]'
                : 'text-[#4d4540] hover:text-[#765937]'
            }`}
          >
            Material Vault
          </button>
          <button
            onClick={() => handleNavClick('monograph')}
            className={`tracking-widest uppercase text-[11px] font-label-caps transition-colors duration-500 pb-1 ${
              activeScreen === 'monograph'
                ? 'text-[#1c1c19] border-b border-[#765937]'
                : 'text-[#4d4540] hover:text-[#765937]'
            }`}
          >
            Monograph
          </button>
          <button
            onClick={() => handleNavClick('overview', 'studio')}
            className="text-[#4d4540] tracking-widest uppercase transition-colors duration-500 hover:text-[#765937] text-[11px] font-label-caps pb-1"
          >
            Studio
          </button>
        </nav>

        {/* Trailing Action */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center justify-center bg-[#1c1c19] text-white px-7 py-3 text-[11px] font-label-caps tracking-widest uppercase hover:bg-[#765937] transition-colors duration-500"
          >
            Book Consultation
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Navigation Menu"
            className="md:hidden text-[#1c1c19] p-2 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fcf9f4] border-b border-[#d0c4bd] px-6 py-6 space-y-4 animate-fadeIn">
          <button
            onClick={() => handleNavClick('overview', 'work')}
            className="block w-full text-left font-label-caps text-xs uppercase text-[#1c1c19] py-2 border-b border-[#d0c4bd]/40"
          >
            01 / Selected Spatial Works
          </button>
          <button
            onClick={() => handleNavClick('casestudy')}
            className="block w-full text-left font-label-caps text-xs uppercase text-[#1c1c19] py-2 border-b border-[#d0c4bd]/40"
          >
            02 / Architectural Case Studies
          </button>
          <button
            onClick={() => handleNavClick('materiality')}
            className="block w-full text-left font-label-caps text-xs uppercase text-[#1c1c19] py-2 border-b border-[#d0c4bd]/40"
          >
            03 / Tactile Materiality Vault
          </button>
          <button
            onClick={() => handleNavClick('monograph')}
            className="block w-full text-left font-label-caps text-xs uppercase text-[#1c1c19] py-2 border-b border-[#d0c4bd]/40"
          >
            04 / Volume III Monograph
          </button>
          <button
            onClick={() => handleNavClick('portal')}
            className="block w-full text-left font-label-caps text-xs uppercase text-[#1c1c19] py-2 border-b border-[#d0c4bd]/40"
          >
            05 / Commission Spatial Brief Builder
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full mt-4 py-3 bg-[#1c1c19] text-white font-label-caps text-xs uppercase tracking-widest text-center block"
          >
            Book Consultation
          </button>
        </div>
      )}
    </header>
  );
};
