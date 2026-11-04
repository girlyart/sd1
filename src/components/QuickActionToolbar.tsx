import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles, MessageCircle } from 'lucide-react';

interface QuickActionToolbarProps {
  onOpenPPDB: () => void;
}

export const QuickActionToolbar: React.FC<QuickActionToolbarProps> = ({
  onOpenPPDB,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center hover:bg-blue-50 dark:hover:bg-slate-700 transition"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        </button>
      )}

      {/* Floating PPDB Quick Button */}
      <button
        onClick={onOpenPPDB}
        className="group flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-xl shadow-blue-600/40 hover:scale-105 active:scale-95 transition-all"
      >
        <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
        <span className="hidden sm:inline">Daftar PPDB 2026</span>
        <span className="sm:hidden">PPDB</span>
      </button>

      {/* WhatsApp Help Chat Trigger */}
      <a
        href="https://wa.me/6281234567890?text=Halo%20Admin%20SMP%206%20Jember,%20saya%20ingin%20bertanya%20seputar%20PPDB%20dan%20sekolah"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition hover:scale-105"
        title="Chat dengan Humas & Tata Usaha via WhatsApp"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span className="hidden sm:inline">Bantuan WA</span>
      </a>
    </div>
  );
};
