import React, { useState } from 'react';
import { Users, Search, GraduationCap, Award, BookOpen } from 'lucide-react';
import { TEACHERS } from '../data/mockData';
import { Teacher } from '../types';

export const TeachersSection: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const departments = [
    { id: 'semua', label: 'Semua Guru' },
    { id: 'mipa', label: 'MIPA & STEM' },
    { id: 'bahasa', label: 'Bahasa' },
    { id: 'agama', label: 'Agama & BK' },
    { id: 'olahraga', label: 'Olahraga' },
    { id: 'seni', label: 'Seni Budaya' },
  ];

  const filteredTeachers = TEACHERS.filter((teacher) => {
    const matchesDept =
      selectedDept === 'semua' || teacher.department === selectedDept;
    const matchesSearch =
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <section
      id="guru"
      className="py-12 md:py-18 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#05070e] transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 text-[11px] font-bold uppercase tracking-wider mb-2">
            <Users className="w-3.5 h-3.5" />
            <span>DEWAN GURU & TENAGA PENDIDIK</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug">
            Tenaga Pendidik <span className="text-blue-600">SD Negeri</span> Jember
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Bapak dan ibu guru profesional, ramah, dan berpengalaman di bidangnya.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-7">
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                  selectedDept === dept.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700'
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-56">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari guru atau mapel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs bg-[#f0f6ff]/70 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-600 transition"
            />
          </div>
        </div>

        {/* Grid Kotak Guru Lebih Kecil & Kompak */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              onClick={() => setSelectedTeacher(teacher)}
              className="bg-[#f0f6ff]/70 dark:bg-slate-900 rounded-xl overflow-hidden shadow-xs hover:shadow-lg border border-blue-100/70 dark:border-slate-800 hover:-translate-y-1 transition-all duration-200 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Foto Persegi (1:1 / Aspect-Square) dengan Wajah Guru Terlihat Penuh */}
                <div className="w-full aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&crop=face&w=600&h=600&q=85';
                    }}
                    className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-blue-600/90 backdrop-blur-xs text-white text-[10px] font-bold shadow-xs">
                    {teacher.experienceYears}+ Thn
                  </div>
                </div>

                <div className="p-3 text-center">
                  <h4 className="font-extrabold text-xs sm:text-[13px] text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors line-clamp-1">
                    {teacher.name}
                  </h4>
                  <p className="text-[11px] text-blue-600 dark:text-blue-400 font-bold mt-0.5 truncate">
                    {teacher.subject}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                    {teacher.title}
                  </p>
                </div>
              </div>

              <div className="py-1.5 px-2 bg-white/70 dark:bg-slate-800/70 border-t border-blue-100/60 dark:border-slate-800 text-center">
                <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 flex items-center justify-center gap-0.5">
                  Profil Lengkap →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Teacher Profile Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 animate-in fade-in">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={selectedTeacher.photo}
                  alt={selectedTeacher.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&crop=face&w=600&h=600&q=85';
                  }}
                  className="w-16 h-16 rounded-2xl object-cover object-[center_20%] border-2 border-blue-600 shadow-sm shrink-0"
                />
                <div>
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                    {selectedTeacher.name}
                  </h3>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                    {selectedTeacher.subject}
                  </span>
                  {selectedTeacher.nip && (
                    <p className="text-[10px] text-slate-400 font-mono">
                      NIP. {selectedTeacher.nip}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={() => setSelectedTeacher(null)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-red-500 hover:text-white transition"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-slate-500">Jabatan & Peran:</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">
                    {selectedTeacher.title}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-slate-500">Pendidikan Terakhir:</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">
                    {selectedTeacher.education}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <BookOpen className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-slate-500">Pengalaman Mengajar:</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">
                    {selectedTeacher.experienceYears} Tahun sebagai Tenaga Pendidik
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedTeacher(null)}
                className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
