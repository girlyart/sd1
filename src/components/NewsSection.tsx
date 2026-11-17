import React, { useState } from 'react';
import { Newspaper, Calendar, Clock, ArrowRight, MapPin, Tag, User, Share2 } from 'lucide-react';
import { ARTICLES, ACADEMIC_EVENTS } from '../data/mockData';
import { Article } from '../types';

interface NewsSectionProps {
  onOpenPPDB: () => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onOpenPPDB }) => {
  const [activeTab, setActiveTab] = useState<'berita' | 'agenda'>('berita');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [articleCategory, setArticleCategory] = useState<string>('Semua');

  const filteredArticles =
    articleCategory === 'Semua'
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === articleCategory);

  return (
    <section
      id="berita"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#f0f6ff] dark:bg-slate-900/60 border-y border-blue-100/70 dark:border-slate-800/80 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold mb-2">
              <Newspaper className="w-3.5 h-3.5" />
              <span>INFORMASI & WARTA KAMPUS BIRU</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-snug">
              Berita & Agenda <span className="text-blue-600">Sekolah</span>
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-500 dark:text-slate-400">
              Ikuti perkembangan kegiatan akademik, prestasi siswa, dan kalender kegiatan di SD Negeri Jember.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('berita')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'berita'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              Berita & Artikel
            </button>
            <button
              onClick={() => setActiveTab('agenda')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'agenda'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              Agenda Kegiatan
            </button>
          </div>
        </div>

        {/* Tab 1: Berita & Artikel */}
        {activeTab === 'berita' && (
          <div>
            {/* Filter Kategori */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
              {['Semua', 'Kegiatan', 'Prestasi', 'PPDB'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setArticleCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition ${
                    articleCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase shadow">
                        {article.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {article.date}
                        </span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className="font-extrabold text-base text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-slate-50 dark:border-slate-800/60 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 hover:underline"
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Agenda Kalender Akademik */}
        {activeTab === 'agenda' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACADEMIC_EVENTS.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-blue-100 dark:border-slate-800 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 text-[10px] font-extrabold uppercase">
                    {event.type}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2.5 py-1 rounded-lg">
                    <Calendar className="w-3.5 h-3.5" />
                    {event.date}
                  </div>
                </div>

                <h4 className="font-bold text-base text-slate-900 dark:text-white mb-3">
                  {event.title}
                </h4>

                <div className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-blue-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Full Article Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 my-8 animate-in fade-in">
              <div className="relative h-60 overflow-hidden">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-red-600 transition"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">
                    {selectedArticle.category}
                  </span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>Penulis: {selectedArticle.author}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-snug">
                  {selectedArticle.title}
                </h3>

                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line space-y-3">
                  {selectedArticle.content}
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 italic">
                    Sumber: Redaksi Resmi SD Negeri Jember
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="px-5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold"
                    >
                      Tutup
                    </button>
                    {selectedArticle.category === 'PPDB' && (
                      <button
                        onClick={() => {
                          setSelectedArticle(null);
                          onOpenPPDB();
                        }}
                        className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
                      >
                        Daftar PPDB Sekarang
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
