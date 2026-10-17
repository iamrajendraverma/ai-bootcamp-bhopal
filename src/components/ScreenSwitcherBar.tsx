import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Sparkles, Clock, Compass, Layers, BookOpen, FileText } from 'lucide-react';
import { ambientSound } from '../utils/ambientAudio';

export type ScreenId = 'overview' | 'casestudy' | 'materiality' | 'monograph' | 'portal';

interface ScreenSwitcherBarProps {
  activeScreen: ScreenId;
  onSelectScreen: (screen: ScreenId) => void;
  casketCount: number;
  onOpenCasket: () => void;
}

export const ScreenSwitcherBar: React.FC<ScreenSwitcherBarProps> = ({
  activeScreen,
  onSelectScreen,
  casketCount,
  onOpenCasket,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [soundMode, setSoundMode] = useState<'rain' | 'hearth' | 'breeze'>('rain');
  const [parisTime, setParisTime] = useState('');
  const [tokyoTime, setTokyoTime] = useState('');

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setParisTime(
        new Intl.DateTimeFormat('fr-FR', {
          timeZone: 'Europe/Paris',
          hour: '2-digit',
          minute: '2-digit',
        }).format(now)
      );
      setTokyoTime(
        new Intl.DateTimeFormat('ja-JP', {
          timeZone: 'Asia/Tokyo',
          hour: '2-digit',
          minute: '2-digit',
        }).format(now)
      );
    };
    updateTimes();
    const interval = setInterval(updateTimes, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleSound = () => {
    const newStatus = ambientSound.toggle(soundMode);
    setIsPlayingAudio(newStatus);
  };

  const cycleSoundMode = () => {
    const nextMode = soundMode === 'rain' ? 'hearth' : soundMode === 'hearth' ? 'breeze' : 'rain';
    setSoundMode(nextMode);
    if (isPlayingAudio) {
      ambientSound.play(nextMode);
    }
  };

  return (
    <div className="w-full bg-[#1c1c19] text-[#fcf9f4] border-b border-[#31302d] text-xs font-label-caps uppercase tracking-wider py-2.5 px-4 md:px-8 flex flex-wrap items-center justify-between gap-3">
      {/* Studio Outpost Live Times */}
      <div className="hidden lg:flex items-center space-x-6 text-[#d0c4bd]">
        <div className="flex items-center space-x-2">
          <Clock className="w-3.5 h-3.5 text-[#9e7d58]" />
          <span>Paris {parisTime}</span>
          <span className="text-white/30">•</span>
          <span>Tokyo {tokyoTime}</span>
        </div>
        <div className="flex items-center space-x-1.5 text-white/50">
          <Compass className="w-3 h-3 text-[#9e7d58]" />
          <span>48°51'N 2°20'E</span>
        </div>
      </div>

      {/* Screen Navigation Tabs */}
      <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto py-0.5">
        <span className="hidden sm:inline-block text-[#9e7d58] text-[10px] tracking-widest mr-2">
          Screens:
        </span>
        <button
          onClick={() => onSelectScreen('overview')}
          className={`px-3 py-1.5 transition-colors border ${
            activeScreen === 'overview'
              ? 'bg-[#765937] text-white border-[#765937]'
              : 'border-[#31302d] text-[#d0c4bd] hover:text-white hover:border-[#d0c4bd]'
          }`}
        >
          01 Overview
        </button>
        <button
          onClick={() => onSelectScreen('casestudy')}
          className={`px-3 py-1.5 transition-colors border ${
            activeScreen === 'casestudy'
              ? 'bg-[#765937] text-white border-[#765937]'
              : 'border-[#31302d] text-[#d0c4bd] hover:text-white hover:border-[#d0c4bd]'
          }`}
        >
          02 Case Study
        </button>
        <button
          onClick={() => onSelectScreen('materiality')}
          className={`px-3 py-1.5 transition-colors border ${
            activeScreen === 'materiality'
              ? 'bg-[#765937] text-white border-[#765937]'
              : 'border-[#31302d] text-[#d0c4bd] hover:text-white hover:border-[#d0c4bd]'
          }`}
        >
          03 Material Vault
        </button>
        <button
          onClick={() => onSelectScreen('monograph')}
          className={`px-3 py-1.5 transition-colors border ${
            activeScreen === 'monograph'
              ? 'bg-[#765937] text-white border-[#765937]'
              : 'border-[#31302d] text-[#d0c4bd] hover:text-white hover:border-[#d0c4bd]'
          }`}
        >
          04 Monograph Vol. III
        </button>
        <button
          onClick={() => onSelectScreen('portal')}
          className={`px-3 py-1.5 transition-colors border ${
            activeScreen === 'portal'
              ? 'bg-[#765937] text-white border-[#765937]'
              : 'border-[#31302d] text-[#d0c4bd] hover:text-white hover:border-[#d0c4bd]'
          }`}
        >
          05 Spatial Brief
        </button>
      </div>

      {/* Trailing tools: Sound & Casket Tray */}
      <div className="flex items-center space-x-3">
        {/* Ambient Room Sound */}
        <div className="flex items-center border border-[#31302d] bg-[#151412] px-2 py-1">
          <button
            onClick={handleToggleSound}
            className="flex items-center space-x-1.5 text-[#d0c4bd] hover:text-white"
            title="Toggle spatial room ambience"
          >
            {isPlayingAudio ? (
              <Volume2 className="w-3.5 h-3.5 text-[#9e7d58] animate-pulse" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-[#7e756f]" />
            )}
            <span className="text-[10px]">
              {isPlayingAudio ? soundMode : 'Quiet'}
            </span>
          </button>
          {isPlayingAudio && (
            <button
              onClick={cycleSoundMode}
              className="ml-2 text-[9px] text-[#9e7d58] hover:underline"
              title="Change acoustic texture"
            >
              [Change]
            </button>
          )}
        </div>

        {/* Archival Casket Tray */}
        <button
          onClick={onOpenCasket}
          className="flex items-center space-x-2 border border-[#9e7d58] px-3 py-1 bg-[#151412] text-[#9e7d58] hover:bg-[#9e7d58] hover:text-white transition-colors"
        >
          <Layers className="w-3.5 h-3.5" />
          <span className="text-[10px]">Casket ({casketCount}/6)</span>
        </button>
      </div>
    </div>
  );
};
