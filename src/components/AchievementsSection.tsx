import React from 'react';
import { Trophy, Medal, Award, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/mockData';

export const AchievementsSection: React.FC = () => {
  // Hanya menampilkan 3 kotak prestasi utama pilihan
  const topThreeAchievements = ACHIEVEMENTS.slice(0, 3);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'trophy':
        return <Trophy className="w-5 h-5 text-amber-300" />;
      case 'award':
        return <Award className="w-5 h-5 text-amber-300" />;
      case 'medal':
      default:
        return <Medal className="w-5 h-5 text-amber-300" />;
    }
  };

  return (
    <section
      id="prestasi"
      className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#05070e] transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        {/* Compact Blue Showcase Card */}
        <div className="rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white p-6 sm:p-9 shadow-xl relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
            {/* Left: Summary Title & Stats */}
            <div className="lg:col-span-5 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-[11px] font-bold uppercase tracking-wider text-blue-100">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Kebanggaan Sekolah
              </span>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight">
                Jejak Prestasi Siswa SMP 6 Jember
              </h2>

              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                Setiap tahun, siswa-siswi kami berhasil menorehkan medali di ajang
                Olimpiade Sains Nasional (OSN), O2SN, dan FLS2N.
              </p>

              {/* Stat Counters */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/15">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-amber-300">
                    140+
                  </div>
                  <div className="text-[10px] text-blue-200 font-medium">
                    Trofi & Piagam
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-amber-300">
                    28
                  </div>
                  <div className="text-[10px] text-blue-200 font-medium">
                    Medali Nasional
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-amber-300">
                    99%
                  </div>
                  <div className="text-[10px] text-blue-200 font-medium">
                    Lolos SMA Unggul
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Exactly 3 Compact Cards Side-by-Side */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5">
              {topThreeAchievements.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl hover:bg-white/15 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-1 mb-2">
                      <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                        {getIcon(item.icon)}
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-amber-400/25 text-amber-300 text-[9px] font-extrabold uppercase">
                        {item.level}
                      </span>
                    </div>

                    <h4 className="font-bold text-xs sm:text-sm text-white leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-[10px] sm:text-[11px] text-blue-100 mt-1 line-clamp-2 leading-relaxed">
                      {item.competition}
                    </p>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-white/10 text-[9.5px] font-semibold text-amber-200/90 truncate">
                    🏅 {item.recipient}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
