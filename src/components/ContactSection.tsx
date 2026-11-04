import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldAlert,
  MessageSquare,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    purpose: 'Informasi Pendaftaran Siswa Baru (PPDB)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: '',
      contact: '',
      purpose: 'Informasi Pendaftaran Siswa Baru (PPDB)',
      message: '',
    });
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <section
      id="kontak"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#05070e] transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Kolom Kiri: Informasi Kontak & Layanan */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                Layanan & Informasi
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
                Hubungi <span className="text-blue-600">Kami</span>
              </h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Punya pertanyaan seputar penerimaan siswa baru (PPDB), mutasi siswa,
                kunjungan studi banding, atau layanan konseling? Tim Tata Usaha dan
                Humas siap melayani Anda.
              </p>
            </div>

            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#f0f6ff]/60 dark:bg-slate-900 border border-blue-100/60 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider text-slate-400">
                    Alamat Kampus Sekolah
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    Jl. Karimata No. 58, Kec. Sumbersari, Jember, Jawa Timur 68121
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#f0f6ff]/60 dark:bg-slate-900 border border-blue-100/60 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider text-slate-400">
                    Telepon & WhatsApp Tata Usaha
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5 font-mono">
                    (0331) 555-0192 / +62 812-3456-7890
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#f0f6ff]/60 dark:bg-slate-900 border border-blue-100/60 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider text-slate-400">
                    Email Resmi Sekolah
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5 font-mono">
                    info@smpn6jember.sch.id
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/60">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
                    Posko Ramah Anak & Anti-Bullying
                  </h4>
                  <p className="text-xs text-amber-900 dark:text-amber-200 mt-0.5 font-medium">
                    Hotline Kerahasiaan BK: +62 813-8899-7711 (Tersedia 24 Jam untuk keamanan siswa)
                  </p>
                </div>
              </div>
            </div>

            {/* Jam Operasional */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
              <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mb-1.5">
                <Clock className="w-4 h-4 text-blue-600" /> Jam Kerja Pelayanan:
              </span>
              <div className="flex justify-between text-slate-500 dark:text-slate-400 py-0.5">
                <span>Senin - Kamis</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">07.00 - 15.30 WIB</span>
              </div>
              <div className="flex justify-between text-slate-500 dark:text-slate-400 py-0.5">
                <span>Jumat</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">07.00 - 15.00 WIB</span>
              </div>
              <div className="flex justify-between text-slate-500 dark:text-slate-400 py-0.5">
                <span>Sabtu - Minggu</span>
                <span className="text-rose-500 font-semibold">Tutup (Khusus Ekskul Terjadwal)</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Form Kirim Pesan & Mini Peta Lokasi */}
          <div className="lg:col-span-7 space-y-6">
            <form
              onSubmit={handleSubmit}
              className="bg-[#f0f6ff] dark:bg-slate-900 p-6 sm:p-8 rounded-3xl shadow-md border border-blue-100 dark:border-slate-800 space-y-4"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <span>Kirim Pesan / Pertanyaan Resmi</span>
              </h3>

              {submitted && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs flex items-center gap-2.5 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>
                    Terima kasih! Pesan Anda telah diterima oleh Sekretariat Humas SMP 6 Jember. Tim kami akan merespons melalui WhatsApp/Email.
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Hartono"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-blue-200/70 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Nomor WhatsApp / Email *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="0812xxxx / email@anda.com"
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-blue-200/70 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Keperluan / Topik *
                </label>
                <select
                  value={formData.purpose}
                  onChange={(e) =>
                    setFormData({ ...formData, purpose: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-blue-200/70 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-600"
                >
                  <option value="Informasi Pendaftaran Siswa Baru (PPDB)">
                    Informasi Pendaftaran Siswa Baru (PPDB 2026)
                  </option>
                  <option value="Permohonan Mutasi / Pindah Sekolah">
                    Permohonan Mutasi / Pindah Masuk Sekolah
                  </option>
                  <option value="Kerja Sama / Kunjungan Instansi">
                    Kerja Sama, Kunjungan Studi, atau Penelitian
                  </option>
                  <option value="Konseling Ramah Anak">
                    Layanan Konseling & Bimbingan Belajar Siswa
                  </option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Pesan Anda *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tuliskan pertanyaan atau permohonan informasi Anda di sini..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-blue-200/70 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-600"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/25 transition flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim Pesan Sekarang</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
