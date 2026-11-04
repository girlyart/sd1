export type NavigationView =
  | 'beranda'
  | 'program'
  | 'fasilitas'
  | 'prestasi'
  | 'guru'
  | 'berita'
  | 'kontak';

export interface Teacher {
  id: string;
  name: string;
  title: string;
  subject: string;
  department: 'mipa' | 'bahasa' | 'ips' | 'agama' | 'olahraga' | 'seni';
  nip?: string;
  photo: string;
  experienceYears: number;
  education: string;
}

export interface Program {
  id: string;
  title: string;
  category: 'unggulan' | 'sains' | 'olahraga' | 'karakter';
  categoryLabel: string;
  description: string;
  detailedInfo: {
    overview: string;
    highlights: string[];
    schedule: string;
    mentor: string;
    target: string;
  };
  image: string;
}

export interface Facility {
  id: string;
  title: string;
  category: 'akademik' | 'laboratorium' | 'olahraga' | 'penunjang';
  description: string;
  features: string[];
  image: string;
}

export interface Achievement {
  id: string;
  title: string;
  competition: string;
  year: string;
  level: 'Nasional' | 'Provinsi' | 'Kota' | 'Internasional';
  recipient: string;
  category: 'sains' | 'olahraga' | 'seni' | 'umum';
  icon: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Akademik' | 'Prestasi' | 'PPDB' | 'Kegiatan';
  date: string;
  author: string;
  image: string;
  readTime: string;
}

export interface AcademicEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'Akademik' | 'Ujian' | 'Kesiswaan' | 'Libur';
}

export interface PPDBApplication {
  registrationId: string;
  studentName: string;
  nisn: string;
  birthDate: string;
  gender: string;
  previousSchool: string;
  path: 'Zonasi' | 'Prestasi' | 'Afirmasi' | 'Perpindahan Tugas Orang Tua';
  parentName: string;
  parentPhone: string;
  address: string;
  averageGrade: string;
  submissionDate: string;
  status: 'Menunggu Verifikasi' | 'Berkas Terverifikasi' | 'Lolos Seleksi Administrasi';
}
