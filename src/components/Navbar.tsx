import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Sun,
  Moon,
  Menu,
  X,
  Phone,
  Mail,
  Sparkles,
  ChevronRight,
  MapPin,
  Clock,
} from 'lucide-react';
import { NavigationView } from '../types';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  activeView: NavigationView;
  onNavigate: (view: NavigationView) => void;
  onOpenPPDB: () => void;
  onOpenVideo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  activeView,
  onNavigate,
  onOpenPPDB,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; view: NavigationView }[] = [
    { label: 'Beranda', view: 'beranda' },
    { label: 'Program', view: 'program' },
    { label: 'Fasilitas', view: 'fasilitas' },
    { label: 'Prestasi', view: 'prestasi' },
    { label: 'Dewan Guru', view: 'guru' },
    { label: 'Agenda & Berita', view: 'berita' },
    { label: 'Kontak', view: 'kontak' },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="hidden md:block bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-blue-100 text-xs py-2 px-4 border-b border-blue-700/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-blue-300" />
              Jl. Karimata No. 58, Sumbersari, Jember, Jawa Timur
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-blue-300" />
              Senin - Jumat: 06.45 - 15.30 WIB
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:03315550192"
              className="flex items-center gap-1.5 hover:text-white transition"
            >
              <Phone className="w-3.5 h-3.5 text-blue-300" />
              (0331) 555-0192
            </a>
            <a
              href="mailto:info@smpnjember.sch.id"
              className="flex items-center gap-1.5 hover:text-white transition"
            >
              <Mail className="w-3.5 h-3.5 text-blue-300" />
              info@smpnjember.sch.id
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#070b14]/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800/80 py-2.5'
            : 'bg-white dark:bg-[#070b14] border-b border-slate-100 dark:border-slate-800/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo Brand */}
          <button
            onClick={() => onNavigate('beranda')}
            className="flex items-center gap-3.5 shrink-0 group text-left"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white text-xl shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="leading-tight">
              <span className="block text-lg sm:text-[19px] font-extrabold tracking-tight text-slate-900 dark:text-white font-heading">
                SMP Negeri Jember
              </span>
              <span className="block text-[10px] font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
                AKREDITASI A UNGGUL • KABUPATEN JEMBER
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 text-[13.5px] font-semibold text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeView === link.view;
              return (
                <button
                  key={link.label}
                  onClick={() => onNavigate(link.view)}
                  className={`py-1 relative transition-colors ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 font-bold'
                      : 'hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Action Buttons Right */}
          <div className="flex items-center gap-3 shrink-0">
            {/* PPDB Button */}
            <button
              onClick={onOpenPPDB}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold shadow-md shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300" />
              <span>Daftar PPDB 2026</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle tema gelap atau terang"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title={darkMode ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white dark:bg-[#0b101e] border-b border-slate-200 dark:border-slate-800 px-5 pt-3 pb-6 space-y-3 shadow-xl transition-all">
            <div className="grid grid-cols-2 gap-2 pb-2">
              {navLinks.map((link) => {
                const isActive = activeView === link.view;
                return (
                  <button
                    key={link.label}
                    onClick={() => {
                      onNavigate(link.view);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold text-left transition ${
                      isActive
                        ? 'bg-blue-600 text-white font-bold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPPDB();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-600/30"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Pendaftaran PPDB Online 2026 / 2027</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
