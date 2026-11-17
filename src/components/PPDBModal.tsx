import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  CheckCircle2,
  FileText,
  Search,
  HelpCircle,
  Download,
  Printer,
  ChevronDown,
  X,
  School,
  AlertCircle,
} from 'lucide-react';
import { PPDBApplication } from '../types';
import { PPDB_FAQS } from '../data/mockData';

interface PPDBModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgramOfInterest?: string;
}

export const PPDBModal: React.FC<PPDBModalProps> = ({
  isOpen,
  onClose,
  initialProgramOfInterest = '',
}) => {
  const [activeTab, setActiveTab] = useState<'daftar' | 'cekStatus' | 'faq'>('daftar');

  // Form State
  const [formData, setFormData] = useState({
    studentName: '',
    nisn: '',
    birthDate: '',
    gender: 'Laki-laki',
    previousSchool: '',
    path: 'Zonasi',
    parentName: '',
    parentPhone: '',
    address: '',
    averageGrade: '88.5',
    programInterest: initialProgramOfInterest || 'Reguler Kurikulum Merdeka',
  });

  const [registeredApp, setRegisteredApp] = useState<PPDBApplication | null>(null);

  // Status Check State
  const [searchCode, setSearchCode] = useState('');
  const [foundStatus, setFoundStatus] = useState<PPDBApplication | null>(null);
  const [searchAttempted, setSearchAttempted] = useState(false);

  // FAQ open states
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const regId = `SDNJ-2026-${randomNum}`;

    const newApp: PPDBApplication = {
      registrationId: regId,
      studentName: formData.studentName,
      nisn: formData.nisn,
      birthDate: formData.birthDate,
      gender: formData.gender,
      previousSchool: formData.previousSchool,
      path: formData.path as PPDBApplication['path'],
      parentName: formData.parentName,
      parentPhone: formData.parentPhone,
      address: formData.address,
      averageGrade: formData.averageGrade,
      submissionDate: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      status: 'Berkas Terverifikasi',
    };

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('smpn1_ppdb_submissions') || '[]');
      existing.unshift(newApp);
      localStorage.setItem('smpn1_ppdb_submissions', JSON.stringify(existing));
    } catch {
      // quota or private browsing
    }

    setRegisteredApp(newApp);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // fallback
    }
  };

  const handleSearchStatus = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchAttempted(true);

    const term = searchCode.trim().toUpperCase();
    if (!term) return;

    try {
      const stored: PPDBApplication[] = JSON.parse(
        localStorage.getItem('smpn1_ppdb_submissions') || '[]'
      );
      const match = stored.find(
        (a) =>
          a.registrationId.toUpperCase() === term ||
          a.nisn.toUpperCase() === term
      );

      if (match) {
        setFoundStatus(match);
      } else if (term === 'SDNJ-2026-8821' || term === 'SMPNJ-2026-8821' || term === 'SMPN1-2026-8821' || term === '0098765432') {
        // Demo mock record
        setFoundStatus({
          registrationId: 'SDNJ-2026-8821',
          studentName: 'Aisyah Putri Azzahra',
          nisn: '0098765432',
          birthDate: '2019-05-14',
          gender: 'Perempuan',
          previousSchool: 'TK Pertiwi 01 Jember',
          path: 'Prestasi',
          parentName: 'H. Bambang Prasetyo',
          parentPhone: '081234567890',
          address: 'Jl. Karimata No. 12, Sumbersari, Jember',
          averageGrade: '92.4',
          submissionDate: '24 Oktober 2026',
          status: 'Lolos Seleksi Administrasi',
        });
      } else {
        setFoundStatus(null);
      }
    } catch {
      setFoundStatus(null);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 my-6 flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="p-5 sm:px-6 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-lg">
              <School className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider font-extrabold bg-white/20 px-2 py-0.5 rounded-full">
                  Tahun Ajaran 2026 / 2027
                </span>
                <span className="text-[10px] font-bold text-amber-300">
                  ● Gelombang 1 DIBUKA
                </span>
              </div>
              <h3 className="font-extrabold text-base sm:text-lg mt-0.5">
                Portal PPDB Online SD Negeri Jember
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition"
            aria-label="Tutup"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900 px-6 pt-2 shrink-0">
          <button
            onClick={() => setActiveTab('daftar')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition flex items-center gap-1.5 ${
              activeTab === 'daftar'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Formulir Pendaftaran</span>
          </button>
          <button
            onClick={() => setActiveTab('cekStatus')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition flex items-center gap-1.5 ${
              activeTab === 'cekStatus'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Cek Status Seleksi</span>
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition flex items-center gap-1.5 ${
              activeTab === 'faq'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Panduan & FAQ</span>
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-slate-800 dark:text-slate-200">
          {/* TAB 1: FORM PENDAFTARAN */}
          {activeTab === 'daftar' && (
            <div>
              {registeredApp ? (
                /* Bukti Pendaftaran Tercetak */
                <div className="space-y-5 animate-in fade-in">
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <div className="font-bold text-sm">
                        Pra-Pendaftaran PPDB Berhasil Terkirim!
                      </div>
                      <p className="mt-0.5 text-[11px]">
                        Data calon peserta didik telah tersimpan di server panitia.
                        Silakan simpan atau cetak kartu bukti pendaftaran berikut.
                      </p>
                    </div>
                  </div>

                  {/* Kartu Bukti Tanda Daftar */}
                  <div className="p-5 sm:p-6 rounded-2xl border-2 border-dashed border-blue-300 dark:border-blue-700 bg-blue-50/40 dark:bg-slate-800/80 space-y-4">
                    <div className="flex items-start justify-between border-b border-blue-200 dark:border-slate-700 pb-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                          KARTU BUKTI PRA-PENDAFTARAN PPDB 2026
                        </span>
                        <h4 className="font-black text-xl text-slate-900 dark:text-white">
                          SD NEGERI JEMBER
                        </h4>
                        <p className="text-[10px] text-slate-400">
                          Jl. Karimata No. 58, Sumbersari, Jember, Jawa Timur
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="block text-[10px] text-slate-400">
                          No. Registrasi:
                        </span>
                        <span className="font-mono font-black text-base text-blue-700 dark:text-blue-400 bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-blue-200 dark:border-slate-700">
                          {registeredApp.registrationId}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[10px]">
                          Nama Calon Siswa
                        </span>
                        <span className="font-bold text-slate-900 dark:text-white">
                          {registeredApp.studentName}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">
                          NISN
                        </span>
                        <span className="font-bold font-mono text-slate-900 dark:text-white">
                          {registeredApp.nisn}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">
                          Asal Sekolah (TK / PAUD)
                        </span>
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {registeredApp.previousSchool}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">
                          Jalur PPDB
                        </span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">
                          {registeredApp.path}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">
                          No. WhatsApp Wali
                        </span>
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {registeredApp.parentPhone}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">
                          Tanggal Pendaftaran
                        </span>
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {registeredApp.submissionDate}
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-blue-200 dark:border-slate-700 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Status: Berkas Diterima Sistem</span>
                      <span className="text-blue-600 font-semibold">
                        Info verifikasi berkas akan dikirim via WhatsApp
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => setRegisteredApp(null)}
                      className="text-xs font-bold text-blue-600 hover:underline"
                    >
                      ← Daftarkan Calon Siswa Lain
                    </button>
                    <div className="flex gap-2">
                      <button
                        onClick={handlePrint}
                        className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 hover:bg-slate-200"
                      >
                        <Printer className="w-3.5 h-3.5" /> Cetak Bukti
                      </button>
                      <button
                        onClick={onClose}
                        className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-600/30"
                      >
                        Selesai
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Form Input PPDB */
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>
                      Pastikan data yang diisi sesuai dengan Dokumen Resmi (Kartu
                      Keluarga & Akta Kelahiran / Surat Keterangan TK). Pendaftaran ini <strong>100% Gratis</strong> tanpa biaya.
                    </span>
                  </div>

                  {/* Nama Lengkap */}
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Nama Lengkap Calon Siswa (Sesuai Akta Kelahiran) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Muhammad Farhan Al-Ghifari"
                      value={formData.studentName}
                      onChange={(e) =>
                        setFormData({ ...formData, studentName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  {/* NISN & Jenis Kelamin */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        NISN (10 Digit Angka) *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={10}
                        placeholder="Contoh: 0098765432"
                        value={formData.nisn}
                        onChange={(e) =>
                          setFormData({ ...formData, nisn: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:border-blue-600 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Jenis Kelamin *
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:border-blue-600"
                      >
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>
                  </div>

                  {/* Asal Sekolah TK/PAUD & Nilai Kesiapan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Asal Sekolah (TK / RA / PAUD) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: TK Pertiwi 01 Jember"
                        value={formData.previousSchool}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            previousSchool: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Rata-Rata Nilai Rapor (Skala 0-100) *
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        max="100"
                        min="50"
                        required
                        placeholder="89.5"
                        value={formData.averageGrade}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            averageGrade: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  {/* Jalur PPDB & Peminatan Tambahan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Jalur Seleksi PPDB *
                      </label>
                      <select
                        value={formData.path}
                        onChange={(e) =>
                          setFormData({ ...formData, path: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:border-blue-600 font-medium"
                      >
                        <option value="Zonasi">Jalur Zonasi Domisili (50% Kuota)</option>
                        <option value="Prestasi">Jalur Prestasi Akademik/Non-Akademik (30%)</option>
                        <option value="Afirmasi">Jalur Afirmasi KIP/KJP (15%)</option>
                        <option value="Perpindahan Tugas Orang Tua">Jalur Perpindahan Tugas Orang Tua (5%)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Peminatan Kelas / Ekskul Prioritas
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Smart Bilingual / OSN Sains / Robotika"
                        value={formData.programInterest}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            programInterest: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  {/* Nama Orang Tua & WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Nama Lengkap Orang Tua / Wali *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Ir. Hendarto"
                        value={formData.parentName}
                        onChange={(e) =>
                          setFormData({ ...formData, parentName: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        No. WhatsApp Aktif Orang Tua *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0812xxxxxxxx"
                        value={formData.parentPhone}
                        onChange={(e) =>
                          setFormData({ ...formData, parentPhone: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:border-blue-600 font-mono"
                      />
                    </div>
                  </div>

                  {/* Alamat Rumah */}
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Alamat Lengkap Domisili Sesuai KK *
                    </label>
                    <textarea
                      rows={2}
                      required
                      placeholder="Nama Jalan, RT/RW, Kelurahan, Kecamatan, Kota"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  {/* Action Submit */}
                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-200"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-7 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold shadow-lg shadow-blue-600/30 flex items-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Kirim Data Pendaftaran</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: CEK STATUS PENDAFTARAN */}
          {activeTab === 'cekStatus' && (
            <div className="space-y-5 text-xs">
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  Pencarian Status Verifikasi & Seleksi
                </h4>
                <p className="text-slate-500 dark:text-slate-400">
                  Masukkan No. Bukti Registrasi (contoh: <code>SDNJ-2026-8821</code>) atau 10 digit NISN calon siswa.
                </p>
              </div>

              <form onSubmit={handleSearchStatus} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ketik No. Registrasi atau NISN..."
                  value={searchCode}
                  onChange={(e) => setSearchCode(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:border-blue-600 font-mono"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md shadow-blue-600/20 hover:bg-blue-700 transition"
                >
                  Cek Status
                </button>
              </form>

              {foundStatus ? (
                <div className="p-5 rounded-2xl bg-[#f0f6ff] dark:bg-slate-800 border border-blue-200 dark:border-slate-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block">
                        No. Registrasi: {foundStatus.registrationId}
                      </span>
                      <h5 className="font-extrabold text-base text-slate-900 dark:text-white">
                        {foundStatus.studentName}
                      </h5>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs">
                      {foundStatus.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-blue-100 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                    <div>NISN: <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{foundStatus.nisn}</span></div>
                    <div>Jalur: <span className="font-bold text-slate-800 dark:text-slate-200">{foundStatus.path}</span></div>
                    <div>Asal Sekolah: <span className="font-medium text-slate-800 dark:text-slate-200">{foundStatus.previousSchool}</span></div>
                    <div>Tgl Daftar: <span className="font-medium text-slate-800 dark:text-slate-200">{foundStatus.submissionDate}</span></div>
                  </div>

                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 text-[11px] text-blue-700 dark:text-blue-300 font-medium">
                    Catatan Panitia: Berkas administratif telah diverifikasi lengkap. Harap memantau pengumuman pemeringkatan zonasi & undangan wawancara kelas peminatan.
                  </div>
                </div>
              ) : searchAttempted ? (
                <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-center">
                  Data dengan nomor registrasi / NISN tersebut belum ditemukan. Silakan periksa kembali ketikan Anda atau daftar di tab formulir.
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-500 text-center">
                  💡 Tips demo: Anda dapat mencoba mengecek nomor contoh <code>SDNJ-2026-8821</code> atau mendaftar baru.
                </div>
              )}
            </div>
          )}

          {/* TAB 3: FAQ & JUKNIS PPDB */}
          {activeTab === 'faq' && (
            <div className="space-y-3">
              {PPDB_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden bg-slate-50/50 dark:bg-slate-800/40"
                >
                  <button
                    onClick={() =>
                      setOpenFaqIdx(openFaqIdx === idx ? null : idx)
                    }
                    className="w-full p-4 text-left flex items-center justify-between gap-3 font-bold text-xs sm:text-sm text-slate-900 dark:text-white"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        openFaqIdx === idx ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {openFaqIdx === idx && (
                    <div className="px-4 pb-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
