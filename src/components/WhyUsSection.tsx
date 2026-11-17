import React from 'react';
import { Globe, Bot, BookOpenCheck, Trophy, Sparkles } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const reasons = [
    {
      icon: Globe,
      title: 'Smart Bilingual Class',
      desc: 'Pembelajaran Sains & Matematika pengantar dwi-bahasa (English & Indonesia) dengan fasilitas kelas interaktif berstandar global.',
      tag: 'Kurikulum Unggulan',
    },
    {
      icon: Bot,
      title: 'Lab STEM & Robotika',
      desc: 'Lingkungan belajar sains modern dilengkapi laboratorium praktikum IPA terpadu, koding Python, IoT, dan inovasi robotik.',
      tag: 'Teknologi 4.0',
    },
    {
      icon: BookOpenCheck,
      title: 'Tahfidz & Budi Pekerti',
      desc: 'Penguatan adab mulia, hafalan Al-Qur\'an Juz 30-28 bersanad, pembiasaan ibadah harian, dan pembinaan konseling ramah anak.',
      tag: 'Karakter & Spiritual',
    },
    {
      icon: Trophy,
      title: 'Jejaring Prestasi Luas',
      desc: '99% lulusan diterima di SMP unggulan & favorit serta langganan medali emas OSN, O2SN, dan FLS2N tingkat provinsi & nasional.',
      tag: 'Akreditasi A Unggul',
    },
  ];

  return (
    <section
      id="kenapa-kami"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#f0f6ff] dark:bg-slate-900/60 border-y border-blue-100/70 dark:border-slate-800/80 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        {/* Judul Seksi */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KEUNGGULAN UTAMA SEKOLAH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-snug">
            Kenapa Harus <span className="text-blue-600 dark:text-blue-400">SD Negeri</span> Jember?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Komitmen kami menghadirkan ekosistem pendidikan komprehensif yang mengasah
            intelektual, akhlak, dan talenta kreatif setiap generasi bangsa.
          </p>
        </div>

        {/* 4 Kartu Keunggulan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900/90 text-slate-800 dark:text-white rounded-2xl p-7 text-center shadow-md hover:shadow-xl border border-blue-100/80 dark:border-slate-800 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg shadow-blue-600/25 group-hover:scale-110 flex items-center justify-center transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-slate-800 px-2.5 py-1 rounded-md mb-2.5">
                    {item.tag}
                  </span>
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
