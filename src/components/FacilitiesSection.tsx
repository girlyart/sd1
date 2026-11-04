import React, { useState } from 'react';
import { Building, Sparkles, CheckCircle2, Maximize2 } from 'lucide-react';
import { FACILITIES } from '../data/mockData';
import { Facility } from '../types';

export const FacilitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('semua');
  const [previewFacility, setPreviewFacility] = useState<Facility | null>(null);

  const tabs = [
    { id: 'semua', label: 'Semua Sarana' },
    { id: 'akademik', label: 'Ruang Kelas Smart' },
    { id: 'laboratorium', label: 'Laboratorium & Studio' },
    { id: 'olahraga', label: 'Sarana Olahraga' },
    { id: 'penunjang', label: 'Ibadah & Literasi' },
  ];

  const filteredFacilities =
    activeTab === 'semua'
      ? FACILITIES
      : FACILITIES.filter((f) => f.category === activeTab);

  return (
    <section
      id="fasilitas"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#05070e] border-b border-slate-100 dark:border-slate-800/80 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Building className="w-3.5 h-3.5" />
            <span>SARANA & PRASARANA STANDAR NASIONAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 leading-snug">
            Fasilitas Modern Penunjang{' '}
            <span className="text-blue-600">Pembelajaran Digital</span>
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Lingkungan sekolah yang asri, berteknologi tinggi, aman, dan nyaman
            untuk mengoptimalkan pengalaman belajar setiap peserta didik.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-[#f0f6ff]/60 dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="h-52 overflow-hidden relative cursor-pointer" onClick={() => setPreviewFacility(facility)}>
                  <img
                    src={facility.image}
                    alt={facility.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-white/90 text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 text-blue-600" /> Perbesar Foto
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-extrabold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="mt-4 pt-3 border-t border-blue-100 dark:border-slate-800/80 space-y-1.5">
                    {facility.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="text-[11px] font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewFacility && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-700 animate-in fade-in">
            <div className="relative h-72 sm:h-96">
              <img
                src={previewFacility.image}
                alt={previewFacility.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setPreviewFacility(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-red-600 transition"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {previewFacility.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
                {previewFacility.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {previewFacility.features.map((f, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-300 text-xs font-semibold"
                  >
                    ✓ {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
