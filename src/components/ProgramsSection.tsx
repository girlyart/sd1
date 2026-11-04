import React, { useState } from 'react';
import { ArrowRight, Sparkles, Clock, UserCheck, Target, CheckCircle2, BookOpen } from 'lucide-react';
import { PROGRAMS } from '../data/mockData';
import { Program } from '../types';

interface ProgramsSectionProps {
  onSelectProgramForPPDB: (programTitle: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectProgramForPPDB,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('semua');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const categories = [
    { id: 'semua', label: 'Semua Program' },
    { id: 'unggulan', label: 'Kelas Unggulan' },
    { id: 'sains', label: 'Sains & Teknologi' },
    { id: 'olahraga', label: 'Seni & Olahraga' },
    { id: 'karakter', label: 'Karakter & Religi' },
  ];

  const filteredPrograms =
    activeCategory === 'semua'
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="program"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#f0f6ff] dark:bg-slate-900/60 border-y border-blue-100/70 dark:border-slate-800/80 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KURIKULUM & PENGEMBANGAN TALENTA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-snug">
            Program Unggulan & Ekskul di{' '}
            <span className="text-blue-600 dark:text-blue-400">
              SMP 6 Jember
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Pilihan program kelas akademik dan pengembangan bakat ekstrakurikuler
            untuk mencetak siswa berprestasi nasional hingga internasional.
          </p>
        </div>

        {/* Filter Tabs Interaktif */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 ring-2 ring-blue-600/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 border border-blue-100 dark:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Kartu Program */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-blue-100/70 dark:border-slate-800 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full shadow">
                    {prog.categoryLabel}
                  </span>
                </div>

                <div className="p-6 pb-3">
                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed">
                    {prog.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-50 dark:border-slate-800/60 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProgram(prog)}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1.5 group-hover:underline"
                >
                  <span>Pelajari Detail Program</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 my-8">
            <div className="relative h-44 sm:h-52 overflow-hidden">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-red-600 transition"
                aria-label="Tutup modal"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-3 py-0.5 rounded-full bg-blue-600 text-[10px] font-extrabold uppercase tracking-wider">
                  {selectedProgram.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-black mt-1">
                  {selectedProgram.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-5 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-blue-600" /> Gambaran Umum Program
                </h4>
                <p className="leading-relaxed">
                  {selectedProgram.detailedInfo.overview}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">
                  Keunggulan & Kurikulum:
                </h4>
                <ul className="space-y-1.5">
                  {selectedProgram.detailedInfo.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-blue-50/70 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-slate-400">
                      Jadwal Kegiatan
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {selectedProgram.detailedInfo.schedule}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <UserCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-slate-400">
                      Pembina / Koordinator
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {selectedProgram.detailedInfo.mentor}
                    </span>
                  </div>
                </div>

                <div className="sm:col-span-2 flex items-start gap-2.5 pt-2 border-t border-blue-200/50 dark:border-slate-700">
                  <Target className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-slate-400">
                      Target & Output Siswa
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {selectedProgram.detailedInfo.target}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal footer buttons */}
              <div className="pt-2 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                >
                  Tutup
                </button>
                <button
                  onClick={() => {
                    const title = selectedProgram.title;
                    setSelectedProgram(null);
                    onSelectProgramForPPDB(title);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md shadow-blue-600/30 hover:from-blue-700 hover:to-indigo-700 transition"
                >
                  Daftar Peminatan di PPDB
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
