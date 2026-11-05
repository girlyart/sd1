import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface QuickActionToolbarProps {
  onOpenPPDB?: () => void;
}

export const QuickActionToolbar: React.FC<QuickActionToolbarProps> = () => {
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

  if (!showScrollTop) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center hover:bg-blue-50 dark:hover:bg-slate-700 transition cursor-pointer"
        aria-label="Kembali ke atas"
      >
        <ArrowUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
      </button>
    </div>
  );
};
