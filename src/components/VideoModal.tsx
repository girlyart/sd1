import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, X, CheckCircle, Navigation } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPPDB: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onOpenPPDB,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  if (!isOpen) return null;

  const chapters = [
    {
      title: 'Gerbang & Koridor Utama Ramah Anak',
      desc: 'Sambutan selamat datang dan area drop-off aman untuk siswa.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
      time: '00:00 - 00:45',
    },
    {
      title: 'Smart Bilingual Class & Pembelajaran Cambridge',
      desc: 'Penggunaan Interactive Flat Panel dan diskusi dua bahasa.',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
      time: '00:45 - 01:30',
    },
    {
      title: 'Laboratorium STEM & Studio Robotika',
      desc: 'Eksperimen mikrokontroler IoT, 3D printing, dan sains terpadu.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80',
      time: '01:30 - 02:20',
    },
    {
      title: 'Gelanggang Olahraga & Lapangan Futsal/Basket',
      desc: 'Latihan tim O2SN, upacara bendera, dan festival olahraga.',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80',
      time: '02:20 - 03:00',
    },
    {
      title: 'Masjid Al-Uswah & Pusat Tahfidz Quran',
      desc: 'Halaqah Al-Quran juz 30-28 serta sholat berjamaah.',
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&q=80',
      time: '03:00 - 03:45',
    },
  ];

  const current = chapters[activeChapter];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 my-6">
        {/* Header */}
        <div className="p-4 sm:px-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs">
              <Play className="w-4 h-4 fill-white" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                Tur Virtual & Video Profil SMP Negeri 6 Jember
              </h3>
              <p className="text-[10px] text-slate-400">
                Dokumenter Resmi Fasilitas, Guru & Pembelajaran Berstandar Unggul
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-red-500 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video bg-slate-950 overflow-hidden group">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover filter brightness-[0.85] transition-all duration-700"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40 flex flex-col justify-between p-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-blue-600/90 text-white text-[11px] font-extrabold flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                Tur Virtual Sedang Berlangsung: {current.time}
              </span>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Center Play Indicator */}
            <div className="self-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-blue-600/90 hover:bg-blue-600 text-white flex items-center justify-center shadow-xl hover:scale-105 transition transform"
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7 fill-white" />
                ) : (
                  <Play className="w-7 h-7 fill-white ml-1" />
                )}
              </button>
            </div>

            {/* Bottom Info bar */}
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-blue-300">
                Segmen {activeChapter + 1} dari {chapters.length}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white leading-tight">
                {current.title}
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-xl">
                {current.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Chapter Selection Bar */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2 flex items-center gap-1">
            <Navigation className="w-3.5 h-3.5" /> Pilih Titik Tur Virtual:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChapter(idx)}
                className={`p-2 rounded-xl text-left text-xs transition border ${
                  activeChapter === idx
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md font-bold'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-blue-50'
                }`}
              >
                <span className="block text-[10px] opacity-80">{ch.time}</span>
                <span className="block truncate font-semibold">{ch.title}</span>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Tertarik bergabung dengan keluarga besar SMP 6 Jember?
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenPPDB();
              }}
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20"
            >
              Daftar PPDB Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
