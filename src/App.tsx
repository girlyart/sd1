import React, { useState, useEffect } from 'react';
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ProfileSection } from './components/ProfileSection';
import { ProgramsSection } from './components/ProgramsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { AchievementsSection } from './components/AchievementsSection';
import { TeachersSection } from './components/TeachersSection';
import { NewsSection } from './components/NewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PPDBModal } from './components/PPDBModal';
import { VideoModal } from './components/VideoModal';
import { VisiMisiModal } from './components/VisiMisiModal';
import { QuickActionToolbar } from './components/QuickActionToolbar';
import { NavigationView } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('smpn1_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [activeView, setActiveView] = useState<NavigationView>('beranda');
  const [isPPDBOpen, setIsPPDBOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVisiMisiOpen, setIsVisiMisiOpen] = useState(false);
  const [ppdbProgramInterest, setPpdbProgramInterest] = useState<string>('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('smpn1_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('smpn1_theme', 'light');
    }
  }, [darkMode]);

  const handleNavigate = (view: NavigationView) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProgramForPPDB = (programTitle: string) => {
    setPpdbProgramInterest(programTitle);
    setIsPPDBOpen(true);
  };

  const getViewLabel = (view: NavigationView): string => {
    switch (view) {
      case 'program':
        return 'Program Unggulan & Ekstrakurikuler';
      case 'fasilitas':
        return 'Fasilitas Modern Sekolah';
      case 'prestasi':
        return 'Jejak Prestasi Siswa & Guru';
      case 'guru':
        return 'Direktori Dewan Guru & Tenaga Pendidik';
      case 'berita':
        return 'Agenda & Berita Sekolah';
      case 'kontak':
        return 'Kontak & Sekretariat Sekolah';
      default:
        return 'Beranda Utama';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#070b14] text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenPPDB={() => {
          setPpdbProgramInterest('');
          setIsPPDBOpen(true);
        }}
        onOpenVideo={() => setIsVideoOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Jika di Beranda: HANYA tampilkan Top Header, Kenapa Harus SD Negeri Jember, dan Profil Kepala Sekolah */}
        {activeView === 'beranda' && (
          <>
            {/* 1. Top Header */}
            <HeroSection
              onOpenPPDB={() => {
                setPpdbProgramInterest('');
                setIsPPDBOpen(true);
              }}
              onOpenVideo={() => setIsVideoOpen(true)}
            />

            {/* 2. Kenapa Harus SD Negeri Jember? */}
            <WhyUsSection />

            {/* 3. Profil & Sambutan Kepala Sekolah */}
            <ProfileSection
              onOpenVisiMisi={() => setIsVisiMisiOpen(true)}
              onNavigateToFacilities={() => handleNavigate('fasilitas')}
            />
          </>
        )}

        {/* Jika di Luar Beranda: Tampilkan Breadcrumb navigasi dan Section yang Dipilih dari Menu */}
        {activeView !== 'beranda' && (
          <div className="animate-in fade-in duration-300">
            {/* Breadcrumb Navigation Bar */}
            <div className="bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 py-3.5 px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <button
                    onClick={() => handleNavigate('beranda')}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center gap-1"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>Beranda</span>
                  </button>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-blue-600 dark:text-blue-400 font-bold">
                    {getViewLabel(activeView)}
                  </span>
                </div>

                <button
                  onClick={() => handleNavigate('beranda')}
                  className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-600 text-slate-700 dark:text-slate-200 text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-blue-600" />
                  <span>Kembali ke Beranda</span>
                </button>
              </div>
            </div>

            {/* Section Konten Berdasarkan Pilihan Menu */}
            {activeView === 'program' && (
              <ProgramsSection onSelectProgramForPPDB={handleSelectProgramForPPDB} />
            )}

            {activeView === 'fasilitas' && <FacilitiesSection />}

            {activeView === 'prestasi' && <AchievementsSection />}

            {activeView === 'guru' && <TeachersSection />}

            {activeView === 'berita' && (
              <NewsSection
                onOpenPPDB={() => {
                  setPpdbProgramInterest('');
                  setIsPPDBOpen(true);
                }}
              />
            )}

            {activeView === 'kontak' && <ContactSection />}
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPPDB={() => {
          setPpdbProgramInterest('');
          setIsPPDBOpen(true);
        }}
        onOpenVisiMisi={() => setIsVisiMisiOpen(true)}
      />

      {/* Floating Action Button Toolbar */}
      <QuickActionToolbar
        onOpenPPDB={() => {
          setPpdbProgramInterest('');
          setIsPPDBOpen(true);
        }}
      />

      {/* Interactive Modals */}
      <PPDBModal
        isOpen={isPPDBOpen}
        onClose={() => setIsPPDBOpen(false)}
        initialProgramOfInterest={ppdbProgramInterest}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onOpenPPDB={() => {
          setIsPPDBOpen(true);
        }}
      />

      <VisiMisiModal
        isOpen={isVisiMisiOpen}
        onClose={() => setIsVisiMisiOpen(false)}
      />
    </div>
  );
}
