"use client";

import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

type ItemInformasi = {no: string; nama: string; href?: string;};
type GrupInformasi = {kode: string; judul: string; href?: string; items: ItemInformasi[];};

const DATA_INFORMASI: GrupInformasi[] = [
  {kode: "A.", judul: "Informasi Tentang Profil Pengadilan",
    items: [
      { no: "1.", nama: "Sejarah Pengadilan", href: "https://pn-sragen.go.id/sejarah-pengadilan/" },
      { no: "2.", nama: "Profil Ketua", href: "https://pn-sragen.go.id/profil-ketua/" },
      { no: "3.", nama: "Profil Wakil Ketua", href: "https://pn-sragen.go.id/profil-wakil-ketua/" },
      { no: "4.", nama: "Profil Hakim", href: "https://pn-sragen.go.id/profil-hakim/" },
      { no: "5.", nama: "Profil Pejabat Struktural", href: "https://pn-sragen.go.id/profil-pejabat-struktural/" },
      { no: "6.", nama: "Profil Pejabat Fungsional", href: "https://pn-sragen.go.id/profil-pejabat-fungsional/" },
      { no: "7.", nama: "Profil Aparatur Kepaniteraan", href: "https://pn-sragen.go.id/kategori-pegawai/kepaniteraan/" },
      { no: "8.", nama: "Profil Aparatur Kesekretariatan", href: "https://pn-sragen.go.id/kategori-pegawai/kesekretariatan/" },
      { no: "9.", nama: "Profil PPPK", href: "https://pn-sragen.go.id/kategori-pegawai/pppk/" },
      { no: "10.", nama: "Struktur Organisasi", href: "https://pn-sragen.go.id/struktur-organisasi/" },
      { no: "11.", nama: "Statistik Pengadilan", href: "https://pn-sragen.go.id/statistik-pengadilan/" },
      { no: "12.", nama: "Wilayah Yurisdiksi", href: "https://pn-sragen.go.id/wilayah-yurisdiksi/" },
      { no: "13.", nama: "Visi dan Misi", href: "https://pn-sragen.go.id/visi-dan-misi/" },
      { no: "14.", nama: "Tugas Pokok dan Fungsi", href: "https://pn-sragen.go.id/tugas-pokok-dan-fungsi/" },
      { no: "15.", nama: "Kegiatan Pengadilan", href: "https://pn-sragen.go.id/kegiatan-pengadilan/" },
      { no: "16.", nama: "Survei Pelayanan Publik", href: "https://pn-sragen.go.id/survei-pelayanan-publik/" },
    ],
  },
  {kode: "B.", judul: "Pelayanan Dasar Pengadilan",
    items: [
      { no: "1.", nama: "Standar Pelayanan Pengadilan", href: "https://pn-sragen.go.id/standar-pelayanan-pengadilan/" },
      { no: "2.", nama: "Prosedur Penerimaan Gugatan", href: "https://pn-sragen.go.id/prosedur-penerimaan-gugatan/" },
      { no: "3.", nama: "Biaya Perkara", href: "https://pn-sragen.go.id/biaya-perkara/" },
      { no: "4.", nama: "Jam Kerja Pelayanan Publik", href: "https://pn-sragen.go.id/jam-kerja-pelayanan-publik/" },
      { no: "5.", nama: "Tata Tertib Persidangan", href: "https://pn-sragen.go.id/tata-tertib-persidangan/" },
      { no: "6.", nama: "Jadwal Persidangan", href: "https://pn-sragen.go.id/jadwal-persidangan/" },
    ],
  },
  {kode: "C.", judul: "Informasi Terkait Hak Masyarakat",
    items: [
      { no: "1.", nama: "Prosedur Pemberian Layanan Hukum", href: "https://pn-sragen.go.id/prosedur-pemberian-layanan-hukum/" },
      { no: "2.", nama: "Prodeo", href: "https://pn-sragen.go.id/prodeo/" },
      { no: "3.", nama: "Laporan Penyerapan Anggaran Posyankum", href: "https://pn-sragen.go.id/laporan-penyerapan-anggaran-posyankum/" },
      { no: "4.", nama: "Laporan Permohonan Informasi Publik", href: "https://pn-sragen.go.id/laporan-permohonan-informasi-publik/" },
      { no: "5.", nama: "Prosedur Permohonan Informasi", href: "https://pn-sragen.go.id/prosedur-permohonan-informasi/" },
      { no: "6.", nama: "Prosedur Keberatan Informasi", href: "https://pn-sragen.go.id/prosedur-keberatan-informasi/" },
      { no: "7.", nama: "Formulir Permohonan Informasi", href: "https://pn-sragen.go.id/formulir-permohonan-informasi/" },
      { no: "8.", nama: "Formulir Keberatan Informasi", href: "https://pn-sragen.go.id/formulir-keberatan-informasi/" },
      { no: "9.", nama: "Tim Pelaksana Penanganan Informasi", href: "https://pn-sragen.go.id/tim-pelaksana-penanganan-informasi/" },
      { no: "10.", nama: "Pedoman Pengaduan", href: "https://pn-sragen.go.id/pedoman-pengaduan/" },
      { no: "11.", nama: "Mekanisme Pengaduan", href: "https://pn-sragen.go.id/mekanisme-pengaduan/" },
      { no: "12.", nama: "Hak Pelapor dan Terlapor", href: "https://pn-sragen.go.id/hak-pelapor-dan-terlapor/" },
      { no: "13.", nama: "Formulir Pengaduan", href: "https://pn-sragen.go.id/formulir-pengaduan/" },
    ],
  },
  {kode: "D.", judul: "Sistem Informasi Perkara",
    items: [
      { no: "1.", nama: "Penelusuran Perkara", href: "https://pn-sragen.go.id/penelusuran-perkara/" },
      { no: "2.", nama: "Direktori Putusan", href: "https://pn-sragen.go.id/direktori-putusan/" },
      { no: "3.", nama: "Statistik Perkara", href: "https://pn-sragen.go.id/statistik-perkara/" },
    ],
  },
  {kode: "E.", judul: "Pengumuman",
    items: [
      { no: "1.", nama: "Lelang Barang dan Jasa Secara Elektronik", href: "https://pn-sragen.go.id/lelang-barang-dan-jasa-secara-elektronik/" },
      { no: "2.", nama: "Tata Cara Lelang Barang dan Jasa Pemerintah", href: "https://pn-sragen.go.id/tata-cara-lelang-barang-dan-jasa-pemerintah/" },
      { no: "3.", nama: "Rencana Umum Pengadaan Barang dan Jasa", href: "https://pn-sragen.go.id/rencana-umum-pengadaan-barang-dan-jasa/" },
    ],
  },
  {kode: "F.", judul: "Laporan Kinerja Pengadilan",
    items: [
      { no: "1.", nama: "Renstra", href: "https://pn-sragen.go.id/renstra/" },
      { no: "2.", nama: "IKU", href: "https://pn-sragen.go.id/iku/" },
      { no: "3.", nama: "RKT", href: "https://pn-sragen.go.id/rkt/" },
      { no: "4.", nama: "PKT", href: "https://pn-sragen.go.id/pkt/" },
      { no: "5.", nama: "Rencana Aksi Kinerja", href: "https://pn-sragen.go.id/rencana-aksi-kinerja/" },
      { no: "6.", nama: "LKJIP", href: "https://pn-sragen.go.id/lkjip/" },
      { no: "7.", nama: "Laporan Tahunan", href: "https://pn-sragen.go.id/laporan-tahunan/" },
      { no: "8.", nama: "Laporan LAKIP", href: "https://pn-sragen.go.id/laporan-lakip/" },
    ],
  },
  {kode: "G.", judul: "Laporan Bulanan",
    items: [
      {no: "1.", nama: "Laporan Bulanan Kepaniteraan dan Kesekretariatan (Capaian Kinerja)", href: "https://pn-sragen.go.id/laporan-bulanan-kepaniteraan-dan-kesekretariatan/",},
    ],
  },
  {kode: "H.", judul: "Transparansi Keuangan",
    items: [
      { no: "1.", nama: "Laporan Keuangan DIPA", href: "https://pn-sragen.go.id/dipa-petikan/" },
      { no: "2.", nama: "Laporan Realisasi Anggaran", href: "https://pn-sragen.go.id/laporan-realisi-anggaran/" },
      { no: "3.", nama: "Statistik Keuangan", href: "https://pn-sragen.go.id/statistik-keuangan/" },
      { no: "4.", nama: "Informasi Keuangan Hasil Audit", href: "https://pn-sragen.go.id/informasi-keuangan-hasil-audit/" },
      { no: "5.", nama: "RKA, RAB, dan sejenisnya", href: "https://pn-sragen.go.id/rka-rab-dan-sejenisnya/" },
    ],
  },
  {kode: "I.", judul: "Transparansi Aset",
    items: [
      { no: "1.", nama: "Laporan BMN", href: "https://pn-sragen.go.id/laporan-bmn/" },
      { no: "2.", nama: "Sarana dan Prasarana", href: "https://pn-sragen.go.id/sarana-dan-prasarana/" },
    ],
  },
  {kode: "J.", judul: "Transparansi Kepegawaian",
    items: [
      { no: "1.", nama: "Persyaratan Usul Menjadi PNS", href: "https://pn-sragen.go.id/persyaratan-usul-menjadi-pns/" },
      { no: "2.", nama: "Persyaratan Pengajuan Kartu Pegawai", href: "https://pn-sragen.go.id/persyaratan-pengajuan-kartu-pegawai/" },
      { no: "3.", nama: "Persyaratan Pengajuan BPJS", href: "https://pn-sragen.go.id/persyaratan-pengajuan-bpjs/" },
      { no: "4.", nama: "Persyaratan Pengajuan KARSU/KARIS", href: "https://pn-sragen.go.id/persyaratan-pengajuan-karsu-karis/" },
      { no: "5.", nama: "Persyaratan Kenaikan Pangkat Regular", href: "https://pn-sragen.go.id/persyaratan-kenaikan-pangkat-regular/" },
      { no: "6.", nama: "Persyaratan Kenaikan Pangkat Pilihan", href: "https://pn-sragen.go.id/persyaratan-kenaikan-pangkat-pilihan/" },
      { no: "7.", nama: "Persyaratan Pengajuan Pensiun", href: "https://pn-sragen.go.id/persyaratan-pengajuan-pensiun/" },
      { no: "8.", nama: "Statistik Kepegawaian", href: "https://pn-sragen.go.id/statistik-kepegawaian/" },
      {no: "9.", nama: "Informasi tentang Penerimaan Calon Pegawai dan/atau Pejabat Badan Publik Negara (Internal Badan Publik)", href: "https://pn-sragen.go.id/informasi-tentang-penerimaan-calon-pegawai-dan-atau-pejabat-badan-publik-negara/",},
    ],
  },
  {kode: "K.", judul: "LHKPN", items: [{ no: "1.", nama: "Data LHKPN Seluruh Pegawai", href: "https://pn-sragen.go.id/data-lhkpn-seluruh-pegawai/" }],},
  {kode: "L.", judul: "Informasi Mengenai Kegiatan dan Kinerja Badan Publik", href: "https://pn-sragen.go.id/informasi-mengenai-kegiatan-dan-kinerja-badan-publik/", items: [],},
];

export default function ProfilePage() {
    const tanggalSekarang = new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date());

    const [jumlahKunjungan, setJumlahKynjungan] = useState<number | null>(null);

  useEffect(() => {
    const hariIni = new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date());

    const savedTanggal = localStorage.getItem("tanggalKunjungan");
    const kunjunganStr = localStorage.getItem("jumlahKunjungan");
    let kunjunganNum: number;

    if (savedTanggal !== hariIni) {
      kunjunganNum = 1;
      localStorage.setItem("tanggalKunjungan", hariIni);
    } else {
      if (kunjunganStr === null) { kunjunganNum = 1;} 
      else {kunjunganNum = Number(kunjunganStr) + 1;}}
      
    localStorage.setItem("jumlahKunjungan", String(kunjunganNum));
    setJumlahKynjungan(kunjunganNum);
  }, []);
  
  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      <section className="bg-white py-10 text-center">
        <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-snug tracking-tight text-slate-900 md:text-4xl"> Informasi Berkala </h1>
      </section>

      <div className="border-y border-gray-200 bg-[#F5F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline"> Beranda </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">Informasi Berkala</span>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center gap-4 border-b border-gray-100 pb-4 text-sm text-slate-600">
            <div className="flex items-center gap-1.5">
              <span>📅</span>
              <span>{tanggalSekarang}</span>
            </div>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-1.5">
              <span>📖</span>
              <span>Dibaca : {jumlahKunjungan !== null ? `${jumlahKunjungan} kali` : "..."}</span>
            </div>
          </div>

          <p className="mb-6 text-[15px] font-medium text-slate-700"> Berikut Informasi Berkala pada Pengadilan Negeri Sragen : </p>

          <div className="overflow-x-auto">
            <table className="mx-auto w-full max-w-5xl border-collapse border border-black text-sm">
              <thead>
                <tr>
                  <th className="w-16 border border-black bg-gray-50 px-4 py-2 text-center font-bold text-slate-900"> No </th>
                  <th className="border border-black bg-gray-50 px-4 py-2 text-left font-bold text-slate-900"> Nama Informasi </th>
                  <th className="w-32 border border-black bg-gray-50 px-4 py-2 text-center font-bold text-slate-900"> Keterangan </th>
                </tr>
              </thead>
              <tbody>
                {DATA_INFORMASI.map((grup) => (
                  <Fragment key={grup.kode}>
                    <tr className="bg-gray-50">
                      <td className="border border-black px-4 py-2 text-center font-bold text-slate-900"> {grup.kode} </td>
                      <td className="border border-black px-4 py-2 font-bold text-slate-900"> {grup.judul} </td>
                      <td className="border border-black px-4 py-2 text-center">
                        {grup.href ? (
                          <Link
                            href={grup.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block rounded bg-blue-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-blue-700"
                          >
                            Lihat
                          </Link>
                        ) : null}
                      </td>
                    </tr>

                    {grup.items.length > 0
                      ? grup.items.map((item, index) => (
                          <tr key={`${grup.kode}-${index}`}>
                            <td className="border border-black px-4 py-2 text-center text-slate-700"> {item.no} </td>
                            <td className="border border-black px-4 py-2 text-slate-700"> {item.nama} </td>
                            <td className="border border-black px-4 py-2 text-center">
                              {item.href ? (
                                <Link
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block rounded bg-blue-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-blue-700"
                                >
                                  Lihat
                                </Link>
                              ) : (
                                <span className="inline-block rounded bg-gray-200 px-3 py-1 text-xs font-medium text-gray-500">
                                  -
                                </span>
                              )}
                            </td>
                          </tr>
                        ))
                      : !grup.href && (
                          <tr>
                            <td className="border border-black px-4 py-2 text-center text-slate-400">
                              -
                            </td>
                            <td className="border border-black px-4 py-2 italic text-slate-500">
                              (Belum ada rincian)
                            </td>
                            <td className="border border-black px-4 py-2 text-center text-slate-400">
                              -
                            </td>
                          </tr>
                        )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50 py-6">
        <p className="text-center text-sm text-slate-500">
          © Pengadilan Negeri Sragen - 2026
        </p>
      </footer>
    </main>
  );
}