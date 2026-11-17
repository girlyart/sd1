import React from 'react';
import { Quote, BookOpen, Building2, CheckCircle, Award, Users } from 'lucide-react';

interface ProfileSectionProps {
  onOpenVisiMisi: () => void;
  onNavigateToFacilities?: () => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  onOpenVisiMisi,
  onNavigateToFacilities,
}) => {
  return (
    <section
      id="profil"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#05070e] transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            Tentang Lembaga
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-snug mt-2">
            Profil & Sambutan <span className="text-blue-600">Kepala Sekolah</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Foto Kepala Sekolah dengan Card Profile */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#f0f6ff] dark:border-slate-800 bg-[#f0f6ff] dark:bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="Kepala Sekolah SMP Negeri Jember - Dr. H. Hendra Wijaya, M.Pd."
                className="w-full h-[400px] object-cover object-top group-hover:scale-102 transition-transform duration-500"
              />
              <div className="p-6 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent text-white -mt-24 relative z-10 pt-12">
                <span className="px-3 py-1 rounded-full bg-blue-600 text-[10px] font-bold uppercase tracking-wider">
                  Kepala Sekolah
                </span>
                <h3 className="text-xl font-extrabold mt-1.5">
                  Dr. H. Hendra Wijaya, M.Pd.
                </h3>
                <p className="text-xs text-slate-300 font-mono">
                  NIP. 19740815 199903 1 004
                </p>
                <div className="mt-3 flex items-center gap-3 text-[11px] text-blue-200">
                  <span className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-400" /> Kepala Sekolah Berprestasi
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Teks Sambutan & Data Sekolah */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0f6ff] dark:bg-slate-800 text-blue-600 dark:text-blue-400 text-xs font-bold">
              <Quote className="w-3.5 h-3.5" /> Sambutan Kepala Sekolah
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug">
              Mendidik Generasi Emas yang Berkarakter Luhur dan Siap Mendunia
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Assalamu’alaikum Warahmatullahi Wabarakatuh. Puji syukur kita panjatkan
              ke hadirat Tuhan Yang Maha Esa. SMP Negeri Jember berkomitmen
              menjadi rumah kedua bagi para siswa untuk bertumbuh menjadi pribadi
              yang beriman, berkarakter mulia, unggul dalam sains dan teknologi, serta
              siap bersaing di tingkat global.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Melalui penerapan Kurikulum Merdeka Mandiri, program Smart Bilingual
              Class, serta penguatan laboratorium STEM dan tahfidz Al-Qur'an, kami
              mendampingi setiap anak menemukan potensi terbaiknya dalam suasana belajar
              yang ramah anak, bebas perundungan, dan inklusif.
            </p>

            {/* Mini Stat Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#f0f6ff] dark:bg-slate-900 border border-blue-100 dark:border-slate-800 text-center shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">
                  30
                </div>
                <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 mt-0.5">
                  Rombel Kelas VII–IX
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#f0f6ff] dark:bg-slate-900 border border-blue-100 dark:border-slate-800 text-center shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">
                  98.6
                </div>
                <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 mt-0.5">
                  Akreditasi A Unggul
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#f0f6ff] dark:bg-slate-900 border border-blue-100 dark:border-slate-800 text-center shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">
                  100%
                </div>
                <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 mt-0.5">
                  Digital Smart Class
                </div>
              </div>
            </div>

            {/* Tombol Tindakan */}
            <div className="pt-3 flex flex-wrap gap-3">
              <button
                onClick={onOpenVisiMisi}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-600/25 transition flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Baca Visi & Misi Lengkap</span>
              </button>

              <button
                onClick={onNavigateToFacilities}
                className="px-6 py-3 rounded-xl bg-[#f0f6ff] dark:bg-slate-800 text-blue-600 dark:text-white text-xs sm:text-sm font-bold hover:bg-blue-100 dark:hover:bg-slate-700 transition flex items-center gap-2"
              >
                <Building2 className="w-4 h-4" />
                <span>Lihat Fasilitas Sekolah</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
