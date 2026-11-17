import React from 'react';
import {
  GraduationCap,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from 'lucide-react';
import { NavigationView } from '../types';

interface FooterProps {
  onNavigate: (view: NavigationView) => void;
  onOpenPPDB: () => void;
  onOpenVisiMisi: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPPDB,
  onOpenVisiMisi,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
        {/* Kolom 1: Profil Sekolah */}
        <div className="space-y-4">
          <button
            onClick={() => onNavigate('beranda')}
            className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-white font-heading text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white text-base shadow-md shadow-blue-600/30">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-blue-500">SD Negeri</span>
              <span className="text-white"> Jember</span>
            </div>
          </button>

          <p className="text-xs leading-relaxed text-slate-400">
            SD Negeri Jember mencetak generasi pembelajar sepanjang hayat
            yang beriman, berkarakter mulia, cakap digital, dan siap bersaing di
            kancah global.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-blue-400 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Akreditasi A Unggul (Jember)</span>
          </div>
        </div>

        {/* Kolom 2: Tautan Cepat */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">
            Navigasi Halaman
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => onNavigate('beranda')}
                className="hover:text-white transition flex items-center gap-1.5 text-left"
              >
                <ChevronRight className="w-3 h-3 text-blue-500" /> Beranda Utama
              </button>
            </li>
            <li>
              <button
                onClick={onOpenVisiMisi}
                className="hover:text-white transition flex items-center gap-1.5 text-left"
              >
                <ChevronRight className="w-3 h-3 text-blue-500" /> Visi, Misi & Karakter Pancasila
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('program')}
                className="hover:text-white transition flex items-center gap-1.5 text-left"
              >
                <ChevronRight className="w-3 h-3 text-blue-500" /> Program Unggulan & Ekskul
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('fasilitas')}
                className="hover:text-white transition flex items-center gap-1.5 text-left"
              >
                <ChevronRight className="w-3 h-3 text-blue-500" /> Fasilitas Sekolah
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('prestasi')}
                className="hover:text-white transition flex items-center gap-1.5 text-left"
              >
                <ChevronRight className="w-3 h-3 text-blue-500" /> Prestasi Siswa & Guru
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('guru')}
                className="hover:text-white transition flex items-center gap-1.5 text-left"
              >
                <ChevronRight className="w-3 h-3 text-blue-500" /> Direktori Dewan Guru
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('berita')}
                className="hover:text-white transition flex items-center gap-1.5 text-left"
              >
                <ChevronRight className="w-3 h-3 text-blue-500" /> Agenda & Berita
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('kontak')}
                className="hover:text-white transition flex items-center gap-1.5 text-left"
              >
                <ChevronRight className="w-3 h-3 text-blue-500" /> Kontak & Pengaduan
              </button>
            </li>
            <li>
              <button
                onClick={onOpenPPDB}
                className="text-blue-400 font-bold hover:underline flex items-center gap-1.5 text-left pt-1"
              >
                <ChevronRight className="w-3 h-3 text-blue-500" /> Pendaftaran PPDB 2026
              </button>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Layanan Digital Sekolah */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">
            Program & Fasilitas
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => onNavigate('program')}
                className="hover:text-white transition flex items-center gap-1.5 text-left"
              >
                <ChevronRight className="w-3 h-3 text-blue-500" /> Smart Bilingual Class
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('fasilitas')}
                className="hover:text-white transition flex items-center gap-1.5 text-left"
              >
                <ChevronRight className="w-3 h-3 text-blue-500" /> Lab STEM, Fisika & Robotika
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('fasilitas')}
                className="hover:text-white transition flex items-center gap-1.5 text-left"
              >
                <ChevronRight className="w-3 h-3 text-blue-500" /> Perpustakaan Digital "Cahaya Ilmu"
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('prestasi')}
                className="hover:text-white transition flex items-center gap-1.5 text-left"
              >
                <ChevronRight className="w-3 h-3 text-blue-500" /> Hall of Fame Prestasi Siswa
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('berita')}
                className="hover:text-white transition flex items-center gap-1.5 text-left"
              >
                <ChevronRight className="w-3 h-3 text-blue-500" /> Kalender Akademik & Agenda
              </button>
            </li>
          </ul>
        </div>

        {/* Kolom 4: Sekretariat & Jam Pelayanan */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">
            Sekretariat Sekolah
          </h4>
          <div className="space-y-2.5 text-xs text-slate-400">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <span>Jl. Karimata No. 58, Kec. Sumbersari, Jember, Jawa Timur</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500 shrink-0" />
              <span>(0331) 555-0192 / +62 812-3456-7890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500 shrink-0" />
              <span>info@sdnjember.sch.id</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
        <p>
          &copy; 2026 SD Negeri Jember. Hak Cipta Dilindungi Undang-Undang.
        </p>
        <p className="flex items-center gap-1">
          Dikelola oleh Tim Pengembang IT & Humas SD Negeri Jember
        </p>
      </div>
    </footer>
  );
};
