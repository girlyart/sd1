import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  PlayCircle,
  CheckCircle2,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenPPDB: () => void;
  onOpenVideo: () => void;
}

const DEFAULT_HERO_IMG = '/assets/aistudio/image_41af9ec3.png';

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenPPDB,
  onOpenVideo,
}) => {
  const [heroImage, setHeroImage] = useState<string>(DEFAULT_HERO_IMG);

  useEffect(() => {
    const saved = localStorage.getItem('sdnjember_custom_hero_img');
    if (saved && saved.startsWith('data:image')) {
      setHeroImage(saved);
    } else {
      setHeroImage(DEFAULT_HERO_IMG);
      localStorage.setItem('sdnjember_custom_hero_img', DEFAULT_HERO_IMG);
    }
  }, []);

  return (
    <section
      id="beranda"
      className="relative w-full min-h-[600px] lg:min-h-[82vh] flex items-center justify-center bg-[#f8f9fa] dark:bg-[#070b14] overflow-hidden transition-colors duration-300 py-16 lg:py-24"
    >
      {/* Background Graphic Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Layer Foto Latar Belakang Dibuat Center di Tengah & Agak Transparan */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <img
          src={heroImage}
          alt="Belajar Bersama Siswa SD Negeri Jember di Perpustakaan"
          className="w-full h-full object-cover object-center select-none transition-all duration-500 opacity-40 dark:opacity-30 filter contrast-105"
          onError={() => setHeroImage(DEFAULT_HERO_IMG)}
        />
        {/* Lapisan lembut netral agar foto dan tulisan seimbang */}
        <div className="absolute inset-0 bg-white/25 dark:bg-black/35 pointer-events-none" />
      </div>

      {/* Konten Utama Header - Posisi Tengah (Centered) Tanpa Blok Putih di Belakang Tulisan */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center space-y-6">
        {/* Badge Atas Tengah */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-600/30 bg-blue-600/10 text-blue-800 dark:text-blue-300 text-xs sm:text-[12.5px] font-extrabold tracking-wider uppercase mx-auto">
          <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>SEKOLAH RAMAH ANAK & KURIKULUM MERDEKA MANDIRI</span>
        </div>

        {/* Judul Utama Tengah */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] text-slate-900 dark:text-white font-heading drop-shadow-sm">
            SD Negeri <br />
            <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-600 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-300 bg-clip-text text-transparent">
              Jember
            </span>
          </h1>
        </div>

        {/* Deskripsi Tengah */}
        <p className="text-slate-800 dark:text-slate-100 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-semibold drop-shadow-xs">
          Sekolah adalah tempat mencetak penerus bangsa yang berkualitas,
          berkarakter mulia, dan berprestasi di segala bidang yang dapat
          bersaing di dunia internasional.
        </p>

        {/* Tombol CTA Tengah */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenPPDB}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm flex items-center gap-3 shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Daftar PPDB Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenVideo}
            className="px-7 py-4 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-700 hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold text-sm flex items-center gap-2.5 transition shadow-md cursor-pointer"
          >
            <PlayCircle className="w-5 h-5 text-blue-600" />
            <span>Video Profil</span>
          </button>
        </div>

        {/* Poin Keunggulan Cepat Tengah */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Terakreditasi A (Unggul)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Smart Bilingual Class</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Lab STEM & Robotika</span>
          </div>
        </div>
      </div>
    </section>
  );
};
