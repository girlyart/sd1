import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  Camera,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenPPDB: () => void;
  onOpenVideo: () => void;
}

const DEFAULT_HERO_IMG = '/assets/aistudio/Kolaborasi_matematika_siswa_SMP_Indonesia-3_f242de8f.png';

const PRESET_IMAGES = [
  {
    label: 'Kolaborasi Siswa (Resmi)',
    url: '/assets/aistudio/Kolaborasi_matematika_siswa_SMP_Indonesia-3_f242de8f.png',
  },
  {
    label: 'Laboratorium Sains',
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=85',
  },
  {
    label: 'Kelas Interaktif',
    url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=85',
  },
  {
    label: 'Perpustakaan Digital',
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1600&q=85',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenPPDB,
  onOpenVideo,
}) => {
  const [heroImage, setHeroImage] = useState<string>(DEFAULT_HERO_IMG);

  useEffect(() => {
    const saved = localStorage.getItem('smpn6_custom_hero_img');
    if (saved && !saved.includes('unsplash.com')) {
      setHeroImage(saved);
    } else {
      setHeroImage(DEFAULT_HERO_IMG);
      localStorage.setItem('smpn6_custom_hero_img', DEFAULT_HERO_IMG);
    }
  }, []);

  const handleCustomImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setHeroImage(result);
          try {
            localStorage.setItem('smpn6_custom_hero_img', result);
          } catch {
            // Storage quota reached, continue in memory
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = (url: string) => {
    setHeroImage(url);
    try {
      localStorage.setItem('smpn6_custom_hero_img', url);
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="beranda"
      className="relative w-full min-h-[600px] lg:min-h-[82vh] flex items-center justify-center bg-[#f8f9fa] dark:bg-[#070b14] overflow-hidden transition-colors duration-300 py-16 lg:py-24"
    >
      {/* Background Graphic Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Layer Foto Latar Belakang Dibuat Agak Transparan */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img
          src={heroImage}
          alt="Kolaborasi Belajar Matematika Siswa SMP 6 Jember"
          className="w-full h-full object-cover object-center select-none transition-all duration-700 opacity-25 dark:opacity-20 filter contrast-105"
          onError={() => setHeroImage(DEFAULT_HERO_IMG)}
        />
        {/* Lapisan Overlay Gradien Halus dari Atas & Bawah agar Teks di Tengah Sangat Jelas */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa]/90 via-[#f8f9fa]/60 to-[#f8f9fa]/95 dark:from-[#070b14]/90 dark:via-[#070b14]/65 dark:to-[#070b14]/95" />
      </div>

      {/* Konten Utama Header - Posisi Tengah (Centered) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-6">
        {/* Badge Atas Tengah */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/90 dark:bg-blue-950/90 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs sm:text-[12.5px] font-extrabold tracking-wider uppercase shadow-sm backdrop-blur-sm mx-auto">
          <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>SEKOLAH RAMAH ANAK & KURIKULUM MERDEKA MANDIRI</span>
        </div>

        {/* Judul Utama Tengah */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.12] text-slate-900 dark:text-white font-heading">
            SMP Negeri 6 <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Jember
            </span>
          </h1>
        </div>

        {/* Deskripsi Tengah */}
        <p className="text-slate-700 dark:text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
          Sekolah adalah tempat mencetak penerus bangsa yang berkualitas,
          berkarakter mulia, dan berprestasi di segala bidang yang dapat
          bersaing di dunia internasional.
        </p>

        {/* Tombol CTA Tengah */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenPPDB}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm flex items-center gap-3 shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Daftar PPDB Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenVideo}
            className="px-7 py-4 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-blue-200 dark:border-slate-700 hover:border-blue-600 hover:bg-blue-50/70 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold text-sm flex items-center gap-2.5 transition shadow-sm backdrop-blur-sm"
          >
            <PlayCircle className="w-5 h-5 text-blue-600" />
            <span>Video Profil</span>
          </button>
        </div>

        {/* Poin Keunggulan Cepat Tengah */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-slate-200/60 dark:border-slate-800 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Terakreditasi A (Unggul)</span>
          </div>
          <div className="flex items-center gap-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-slate-200/60 dark:border-slate-800 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Smart Bilingual Class</span>
          </div>
          <div className="flex items-center gap-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-slate-200/60 dark:border-slate-800 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Lab STEM & Robotika</span>
          </div>
        </div>
      </div>

      {/* Preset & Photo Switcher Toolbar (Kanan Bawah) */}
      <div className="absolute bottom-3 right-4 z-20 flex items-center gap-2">
        <div className="hidden sm:flex items-center gap-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-2 py-1 rounded-full border border-blue-100 dark:border-slate-800 shadow-sm text-[10px]">
          <span className="text-slate-400 px-1 font-semibold flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-blue-500" /> Tema:
          </span>
          {PRESET_IMAGES.map((preset) => (
            <button
              key={preset.label}
              onClick={() => handleResetImage(preset.url)}
              className={`px-2 py-0.5 rounded-full transition ${
                heroImage === preset.url
                  ? 'bg-blue-600 text-white font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-blue-600'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>

        <label
          htmlFor="uploadHeroBgInput"
          className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 hover:bg-blue-50 text-[11px] font-bold text-blue-700 dark:text-blue-300 shadow-md border border-blue-200 dark:border-slate-700 backdrop-blur-sm transition"
          title="Ganti atau unggah foto lokal ke banner hero"
        >
          <Camera className="w-3.5 h-3.5 text-blue-600" />
          <span>Ganti Foto</span>
          <input
            id="uploadHeroBgInput"
            type="file"
            accept="image/*"
            onChange={handleCustomImageUpload}
            className="hidden"
          />
        </label>

        {heroImage !== DEFAULT_HERO_IMG && (
          <button
            onClick={() => handleResetImage(DEFAULT_HERO_IMG)}
            className="p-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-500 hover:text-red-600 shadow-sm border border-slate-200 dark:border-slate-700 transition"
            title="Reset ke gambar resmi sekolah"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </section>
  );
};
