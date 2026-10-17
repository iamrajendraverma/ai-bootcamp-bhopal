/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenSwitcherBar, ScreenId } from './components/ScreenSwitcherBar';
import { HeaderNav } from './components/HeaderNav';
import { AtelierOverviewScreen } from './components/screens/AtelierOverviewScreen';
import { CaseStudyScreen } from './components/screens/CaseStudyScreen';
import { MaterialityVaultScreen } from './components/screens/MaterialityVaultScreen';
import { MonographReaderScreen } from './components/screens/MonographReaderScreen';
import { CommissionPortalScreen } from './components/screens/CommissionPortalScreen';
import { LightboxModal } from './components/LightboxModal';
import { MaterialModal } from './components/MaterialModal';
import { ArchivalCasketDrawer } from './components/ArchivalCasketDrawer';
import { MATERIALITY_INDEX, MaterialSpecimen } from './data/atelierData';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenId>('overview');
  const [currentProjectId, setCurrentProjectId] = useState<string>('kyoto-pavillion');

  // Patron's Archival Casket specimens (preloaded with 2 iconic specimens)
  const [selectedMaterials, setSelectedMaterials] = useState<MaterialSpecimen[]>([
    MATERIALITY_INDEX[0], // Roman Travertine
    MATERIALITY_INDEX[1], // Hinoki Cypress
  ]);

  // Lightbox Modal state
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    caption?: string;
    coordinates?: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
  });

  // Material Inspector Modal state
  const [inspectingMaterial, setInspectingMaterial] = useState<MaterialSpecimen | null>(null);

  // Archival Casket Drawer state
  const [isCasketDrawerOpen, setIsCasketDrawerOpen] = useState(false);

  // Toast / feedback message
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleToggleCasket = (material: MaterialSpecimen) => {
    const exists = selectedMaterials.some((m) => m.id === material.id);
    if (exists) {
      setSelectedMaterials((prev) => prev.filter((m) => m.id !== material.id));
      showToast(`Removed ${material.name} from Archival Casket`);
    } else {
      if (selectedMaterials.length >= 6) {
        showToast('Casket full: Maximum 6 specimens permitted per presentation box');
        setIsCasketDrawerOpen(true);
        return;
      }
      setSelectedMaterials((prev) => [...prev, material]);
      showToast(`Added ${material.name} to Archival Casket (${selectedMaterials.length + 1}/6)`);
    }
  };

  const handleOpenLightbox = (
    imageUrl: string,
    title: string,
    caption?: string,
    coordinates?: string
  ) => {
    setLightbox({
      isOpen: true,
      imageUrl,
      title,
      caption,
      coordinates,
    });
  };

  const handleOpenConsultation = () => {
    if (activeScreen === 'overview') {
      const el = document.getElementById('inquire');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    setActiveScreen('portal');
  };

  return (
    <div className="min-h-screen bg-[#fcf9f4] text-[#1c1c19] flex flex-col font-body-md antialiased selection:bg-[#e5e2dd] selection:text-[#1c1c19]">
      {/* Interactive Screen Explorer Bar */}
      <ScreenSwitcherBar
        activeScreen={activeScreen}
        onSelectScreen={(screen) => {
          setActiveScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        casketCount={selectedMaterials.length}
        onOpenCasket={() => setIsCasketDrawerOpen(true)}
      />

      {/* Main Editorial Header */}
      <HeaderNav
        activeScreen={activeScreen}
        onNavigateScreen={(screen) => {
          setActiveScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[150] bg-[#1c1c19] text-[#fcf9f4] px-5 py-3 border border-[#765937] shadow-xl text-xs font-label-caps uppercase tracking-wider animate-fadeIn flex items-center space-x-3">
          <span className="w-2 h-2 rounded-full bg-[#9e7d58]"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Dynamic Screen Container */}
      <main className="flex-1">
        {activeScreen === 'overview' && (
          <AtelierOverviewScreen
            onSelectProject={(id) => {
              setCurrentProjectId(id);
              setActiveScreen('casestudy');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenLightbox={handleOpenLightbox}
            onInspectMaterial={(mat) => setInspectingMaterial(mat)}
            onOpenCasketDrawer={() => setIsCasketDrawerOpen(true)}
            onNavigateScreen={(screen) => {
              setActiveScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeScreen === 'casestudy' && (
          <CaseStudyScreen
            currentProjectId={currentProjectId}
            onSelectProject={(id) => setCurrentProjectId(id)}
            onOpenLightbox={handleOpenLightbox}
            onInspectMaterial={(mat) => setInspectingMaterial(mat)}
            onNavigateScreen={(screen) => {
              setActiveScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeScreen === 'materiality' && (
          <MaterialityVaultScreen
            onInspectMaterial={(mat) => setInspectingMaterial(mat)}
            selectedMaterials={selectedMaterials}
            onToggleCasket={handleToggleCasket}
            onOpenCasketDrawer={() => setIsCasketDrawerOpen(true)}
            onNavigateScreen={(screen) => {
              setActiveScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeScreen === 'monograph' && (
          <MonographReaderScreen
            onOpenLightbox={handleOpenLightbox}
            onNavigateScreen={(screen) => {
              setActiveScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeScreen === 'portal' && (
          <CommissionPortalScreen
            onNavigateScreen={(screen) => {
              setActiveScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox((prev) => ({ ...prev, isOpen: false }))}
        imageUrl={lightbox.imageUrl}
        title={lightbox.title}
        caption={lightbox.caption}
        coordinates={lightbox.coordinates}
      />

      {/* Material Specimen Modal */}
      <MaterialModal
        material={inspectingMaterial}
        onClose={() => setInspectingMaterial(null)}
        isInCasket={
          inspectingMaterial
            ? selectedMaterials.some((m) => m.id === inspectingMaterial.id)
            : false
        }
        onToggleCasket={(mat) => handleToggleCasket(mat)}
      />

      {/* Patron Archival Casket Drawer */}
      <ArchivalCasketDrawer
        isOpen={isCasketDrawerOpen}
        onClose={() => setIsCasketDrawerOpen(false)}
        selectedMaterials={selectedMaterials}
        onRemoveMaterial={(id) => {
          setSelectedMaterials((prev) => prev.filter((m) => m.id !== id));
        }}
        onClearCasket={() => setSelectedMaterials([])}
      />
    </div>
  );
}
