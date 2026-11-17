import React from 'react';
import { Target, CheckCircle2, Award, Heart, Sparkles, X, ShieldCheck } from 'lucide-react';

interface VisiMisiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisiMisiModal: React.FC<VisiMisiModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const profilPancasila = [
    'Beriman, Bertakwa kepada Tuhan YME & Berakhlak Mulia',
    'Berkebhinekaan Global',
    'Bergotong Royong',
    'Mandiri & Tangguh',
    'Bernalar Kritis',
    'Kreatif & Inovatif',
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 my-6">
        {/* Header */}
        <div className="p-5 sm:px-6 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full">
                Landasan Filosofis Sekolah
              </span>
              <h3 className="font-extrabold text-lg mt-0.5">
                Visi, Misi & Tujuan Pendidikan
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
          {/* Visi */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/70 dark:from-slate-800 dark:to-slate-800/60 border border-blue-200 dark:border-slate-700">
            <span className="text-[11px] font-extrabold text-blue-700 dark:text-blue-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <Sparkles className="w-4 h-4" /> Visi SD Negeri Jember
            </span>
            <p className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-relaxed italic">
              "Terwujudnya Lulusan SD yang Berakhlak Mulia, Unggul dalam Prestasi
              Sains & Teknologi, Cakap Digital, serta Berbudaya Lingkungan Hidup."
            </p>
          </div>

          {/* Misi */}
          <div>
            <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600" /> Misi Sekolah:
            </h4>
            <div className="space-y-2.5">
              {[
                'Menanamkan nilai-nilai keimanan, ketakwaan, dan budi pekerti luhur melalui pembiasaan ibadah harian serta program tahfidz Al-Qur\'an.',
                'Melaksanakan pembelajaran berdiferensiasi yang aktif, inovatif, menyenangkan, dan berpusat pada siswa berbasis Kurikulum Merdeka Mandiri.',
                'Mengembangkan potensi akademik dan talenta non-akademik siswa secara terprogram melalui pembinaan intensif olimpiade (OSN, O2SN, FLS2N).',
                'Mewujudkan iklim sekolah yang aman, inklusif, ramah anak, serta bebas dari segala bentuk perundungan (anti-bullying) dan kekerasan.',
                'Membekali peserta didik dengan kecakapan literasi digital, computational thinking, koding, serta wawasan lingkungan hidup berkesinambungan.',
              ].map((misi, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                    {misi}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 6 Dimensi Profil Pelajar Pancasila */}
          <div>
            <h4 className="font-extrabold text-sm text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" /> 6 Dimensi Profil Pelajar Pancasila:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {profilPancasila.map((dim, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl border border-blue-100 dark:border-slate-800 bg-[#f0f6ff]/50 dark:bg-slate-800/80 text-[11px] font-bold text-slate-800 dark:text-slate-200"
                >
                  <span className="text-blue-600 mr-1.5">✓</span>
                  {dim}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md shadow-blue-600/20"
            >
              Tutup Penjelasan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
