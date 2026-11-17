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
  Sparkles,
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
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white overflow-hidden transition-colors"
    >
      {/* Background Graphic Glow Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Kolom Kiri: Informasi Kontak & Layanan Berwarna Biru dengan Teks Putih */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Layanan & Informasi Resmi
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 leading-tight font-heading">
                Hubungi <span className="text-amber-300">Kami</span>
              </h2>
              <p className="mt-3 text-sm text-blue-100 leading-relaxed font-normal">
                Punya pertanyaan seputar penerimaan siswa baru (PPDB), mutasi siswa,
                kunjungan studi banding, atau layanan konseling? Tim Tata Usaha dan
                Humas SMP Negeri Jember siap melayani Anda dengan ramah dan cepat.
              </p>
            </div>

            <div className="space-y-3.5 pt-1">
              {/* Alamat */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all">
                <div className="w-11 h-11 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0 shadow-inner">
                  <MapPin className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-blue-200 uppercase tracking-wider">
                    Alamat Kampus Sekolah
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5 leading-snug">
                    Jl. Karimata No. 58, Kec. Sumbersari, Jember, Jawa Timur 68121
                  </p>
                </div>
              </div>

              {/* Telepon */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all">
                <div className="w-11 h-11 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0 shadow-inner">
                  <Phone className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-blue-200 uppercase tracking-wider">
                    Telepon & WhatsApp Tata Usaha
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5 font-mono">
                    (0331) 555-0192 / +62 812-3456-7890
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all">
                <div className="w-11 h-11 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0 shadow-inner">
                  <Mail className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-blue-200 uppercase tracking-wider">
                    Email Resmi Sekolah
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5 font-mono">
                    info@smpnjember.sch.id
                  </p>
                </div>
              </div>

              {/* Posko Ramah Anak */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-500/20 backdrop-blur-md border border-amber-400/30">
                <div className="w-11 h-11 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center shrink-0 shadow-md">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                    Posko Ramah Anak & Hotline BK
                  </h4>
                  <p className="text-xs text-white mt-0.5 font-medium leading-relaxed">
                    Kerahasiaan terjamin: +62 813-8899-7711 (Tersedia 24 Jam)
                  </p>
                </div>
              </div>
            </div>

            {/* Jam Operasional */}
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white">
              <span className="font-bold text-white flex items-center gap-1.5 mb-2">
                <Clock className="w-4 h-4 text-amber-300" /> Jam Pelayanan Administrasi:
              </span>
              <div className="flex justify-between text-blue-100 py-1 border-b border-white/10">
                <span>Senin - Kamis</span>
                <span className="font-bold text-white">07.00 - 15.30 WIB</span>
              </div>
              <div className="flex justify-between text-blue-100 py-1 border-b border-white/10">
                <span>Jumat</span>
                <span className="font-bold text-white">07.00 - 15.00 WIB</span>
              </div>
              <div className="flex justify-between text-blue-100 py-1">
                <span>Sabtu - Minggu</span>
                <span className="text-amber-300 font-semibold">Tutup (Khusus Ekstrakurikuler)</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Form Kirim Pesan Berlatar Kaca Biru dengan Teks Putih */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-xl p-6 sm:p-9 rounded-3xl shadow-2xl border border-white/20 space-y-4"
            >
              <div className="border-b border-white/15 pb-4">
                <h3 className="text-xl font-extrabold text-white flex items-center gap-2.5">
                  <MessageSquare className="w-5 h-5 text-amber-300" />
                  <span>Kirim Pesan / Pertanyaan Resmi</span>
                </h3>
                <p className="text-xs text-blue-100 mt-1">
                  Sampaikan pertanyaan atau permohonan informasi Anda langsung ke bagian Tata Usaha sekolah.
                </p>
              </div>

              {submitted && (
                <div className="p-4 rounded-2xl bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-emerald-100 text-xs flex items-center gap-2.5 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                  <span>
                    Terima kasih! Pesan Anda telah diterima oleh Sekretariat Humas SMP Negeri Jember. Tim kami akan segera merespons melalui WhatsApp atau Email.
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-300 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-300 shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">
                  Keperluan / Topik Informasi *
                </label>
                <select
                  value={formData.purpose}
                  onChange={(e) =>
                    setFormData({ ...formData, purpose: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-300 shadow-sm"
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
                  <option value="Lainnya">Lainnya / Pertanyaan Umum</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">
                  Isi Pesan Anda *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tuliskan pertanyaan atau permohonan informasi Anda di sini..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-300 shadow-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-blue-50 text-blue-800 font-extrabold text-xs shadow-xl shadow-black/20 hover:-translate-y-0.5 active:translate-y-0 transition flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-blue-700" />
                  <span>Kirim Pesan Sekarang</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
