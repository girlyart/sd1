import React, { useState } from 'react';
import {
  Trophy,
  Medal,
  Award,
  Sparkles,
  Search,
  CheckCircle2,
  Calendar,
  X,
  Star,
  Flame,
  ArrowUpRight,
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data/mockData';
import { Achievement } from '../types';

export const AchievementsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');
  const [selectedLevel, setSelectedLevel] = useState<string>('semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const categories = [
    { id: 'semua', label: 'Semua Bidang' },
    { id: 'sains', label: 'Sains & Robotika' },
    { id: 'seni', label: 'Seni & Budaya' },
    { id: 'olahraga', label: 'Olahraga & O2SN' },
    { id: 'umum', label: 'Pramuka & Religi' },
  ];

  const levels = [
    { id: 'semua', label: 'Semua Tingkat' },
    { id: 'Nasional', label: 'Nasional' },
    { id: 'Provinsi', label: 'Provinsi' },
    { id: 'Kota', label: 'Kota / Kab' },
  ];

  // Filtering
  const filteredAchievements = ACHIEVEMENTS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'semua' || item.category === selectedCategory;
    const matchesLevel =
      selectedLevel === 'semua' || item.level.toLowerCase() === selectedLevel.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.competition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.recipient.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  // Top 3 for Featured Podium
  const topPodium = ACHIEVEMENTS.slice(0, 3);

  const getBadgeStyle = (level: string) => {
    switch (level.toLowerCase()) {
      case 'nasional':
        return 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30';
      case 'provinsi':
        return 'bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30';
      default:
        return 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30';
    }
  };

  const getTrophyColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'nasional':
        return 'text-amber-500 bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800';
      case 'provinsi':
        return 'text-blue-600 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800';
      default:
        return 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800';
    }
  };

  return (
    <section
      id="prestasi"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/70 dark:bg-[#070b14] transition-colors"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* 1. Header Showcase & Statistik */}
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white p-7 sm:p-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-amber-300">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Hall of Fame • Jejak Prestasi Gemilang</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight font-heading">
              Prestasi Membanggakan <br />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-white bg-clip-text text-transparent">
                Siswa SD Negeri Jember
              </span>
            </h1>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
              Komitmen kami dalam membimbing talenta muda melahirkan generasi juara di bidang
              sains olimpiade, robotika modern, seni budaya FLS2N, olahraga O2SN, hingga kepanduan dan tahfidz.
            </p>
          </div>

          {/* Statistik Counter Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-8 mt-6 border-t border-white/15 relative z-10">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
              <div className="text-2xl sm:text-3xl font-black text-amber-300">140+</div>
              <div className="text-xs text-blue-100 font-semibold mt-1">Trofi & Penghargaan</div>
              <div className="text-[10px] text-blue-200/80 mt-0.5">Tingkat Kota s.d Nasional</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
              <div className="text-2xl sm:text-3xl font-black text-amber-300">28</div>
              <div className="text-xs text-blue-100 font-semibold mt-1">Medali Emas & Perak</div>
              <div className="text-[10px] text-blue-200/80 mt-0.5">OSN, O2SN & FLS2N</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
              <div className="text-2xl sm:text-3xl font-black text-amber-300">15</div>
              <div className="text-xs text-blue-100 font-semibold mt-1">Klub Pembinaan Aktif</div>
              <div className="text-[10px] text-blue-200/80 mt-0.5">Terbimbing Intensif</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
              <div className="text-2xl sm:text-3xl font-black text-amber-300">99%</div>
              <div className="text-xs text-blue-100 font-semibold mt-1">Lolos SMP Favorit</div>
              <div className="text-[10px] text-blue-200/80 mt-0.5">Jalur Prestasi Unggulan</div>
            </div>
          </div>
        </div>

        {/* 2. Sorotan 3 Juara Terkini (Podium Spotlight) */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                <Flame className="w-4 h-4 text-amber-500" />
                <span>Sorotan Utama Juara</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                Prestasi Unggulan Terkini
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 hidden sm:inline">
              Update Semester 2026/2027
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {topPodium.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedAchievement(item)}
                className={`relative rounded-3xl p-6 transition-all duration-300 cursor-pointer group flex flex-col justify-between border shadow-lg hover:-translate-y-1 ${
                  idx === 0
                    ? 'bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent border-amber-300/60 dark:border-amber-700/60'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                }`}
              >
                {/* Ranking Tag */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs ${getTrophyColor(
                      item.level
                    )}`}
                  >
                    {idx === 0 ? (
                      <Trophy className="w-6 h-6 text-amber-500" />
                    ) : idx === 1 ? (
                      <Award className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Medal className="w-6 h-6 text-emerald-600" />
                    )}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase border ${getBadgeStyle(
                      item.level
                    )}`}
                  >
                    Tingkat {item.level}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>Tahun {item.year}</span>
                    <span>•</span>
                    <span className="capitalize font-semibold text-blue-600 dark:text-blue-400">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {item.competition}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Peraih Prestasi:</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {item.recipient}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Filter Bar & Pencarian */}
        <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Kategori Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Pencarian */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari lomba, nama siswa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-600 transition"
              />
            </div>
          </div>

          {/* Tingkat Filter Chips */}
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            <span className="text-slate-500 font-medium">Tingkat Kejuaraan:</span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {levels.map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedLevel(lvl.id)}
                  className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold transition ${
                    selectedLevel === lvl.id
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-blue-600'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Grid Semua Prestasi */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>
              Menampilkan <strong className="text-slate-800 dark:text-slate-200">{filteredAchievements.length}</strong> prestasi
            </span>
            {(selectedCategory !== 'semua' || selectedLevel !== 'semua' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('semua');
                  setSelectedLevel('semua');
                  setSearchQuery('');
                }}
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Reset Filter
              </button>
            )}
          </div>

          {filteredAchievements.length === 0 ? (
            <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
              <Trophy className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                Tidak ada prestasi yang cocok
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Silakan coba kata kunci pencarian lain atau ubah filter kategori.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredAchievements.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedAchievement(item)}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border ${getTrophyColor(
                          item.level
                        )}`}
                      >
                        <Trophy className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-mono font-bold text-slate-400">
                          {item.year}
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border ${getBadgeStyle(
                            item.level
                          )}`}
                        >
                          {item.level}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-2">
                        {item.competition}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <div className="truncate">
                      <span className="text-[10px] text-slate-400 block font-medium">Siswa / Tim:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200 truncate">
                        {item.recipient}
                      </span>
                    </div>
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-[11px] shrink-0 ml-2">
                      Piagam →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 5. 3 Pilar Pembinaan Prestasi SD Negeri Jember */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 flex items-center justify-center font-bold">
              1
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Bimbingan Klinik Intensif
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Pelatihan rutin terjadwal dipandu guru penggerak, pembina berlisensi, serta dosen mitra perguruan tinggi.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 flex items-center justify-center font-bold">
              2
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Fasilitas Laboratorium & Studio
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Dukungan penuh kit robotika, lab sains terpadu, gelanggang olahraga resmi, dan studio musik & tari.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 flex items-center justify-center font-bold">
              3
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Apresiasi & Beasiswa Sekolah
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Penghargaan berupa piagam resmi, pembebasan biaya penunjang, serta rekomendasi ke SMP impian.
            </p>
          </div>
        </div>
      </div>

      {/* 6. Modal Detail Piagam & Penghargaan */}
      {selectedAchievement && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in">
            {/* Header Sertifikat */}
            <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 p-6 text-white relative">
              <button
                onClick={() => setSelectedAchievement(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-amber-300">
                  PIAGAM PRESTASI RESMI
                </span>
              </div>

              <h3 className="text-xl font-black">{selectedAchievement.title}</h3>
              <p className="text-xs text-blue-100 mt-1">{selectedAchievement.competition}</p>
            </div>

            {/* Isi Detail Piagam */}
            <div className="p-6 space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
                <div className="flex justify-between items-center py-1 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500">Nama Peraih:</span>
                  <span className="font-extrabold text-slate-900 dark:text-white text-sm">
                    {selectedAchievement.recipient}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500">Tingkat Kejuaraan:</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400 uppercase">
                    Tingkat {selectedAchievement.level}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500">Tahun Peraihan:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {selectedAchievement.year}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">Kategori Bidang:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200 capitalize">
                    {selectedAchievement.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-amber-800 dark:text-amber-200">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                <p className="text-[11px] leading-relaxed">
                  Telah diverifikasi oleh Bidang Kesiswaan SD Negeri Jember sebagai salah satu capaian unggulan sekolah.
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
