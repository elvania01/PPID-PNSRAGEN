"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
  
type LaporanTahunan = {
  tahun: string;
  link: string;
};

const LAPORAN: LaporanTahunan[] = [
  {
    tahun: "- 2025",
    link: "https://drive.google.com/file/d/12BpaCBWiCkcEFLEC49iUW7f2dIh4n81m/view"
  },
  {
    tahun: "- 2026",
    link: "https://drive.google.com/drive/folders/1yRBYW4k14LAd5DqISDBCvXEF94c7FaKj"
  },
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
        <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-snug tracking-tight text-slate-900 md:text-4xl">
          Laporan Tahunan Layanan Informasi dan Dokumentasi
        </h1>
      </section>

      <div className="border-y border-gray-200 bg-[#F5F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">
              Beranda
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">Laporan Tahunan Layanan Informasi dan Dokumentasi</span>
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

          <p className="mb-6 text-[15px] font-medium text-slate-700"> Berikut Laporan Layanan Informasi dan Dokumentasi di Pengadilan Negeri Sragen </p>

          <div className="overflow-x-auto">
            <table className="mx-auto w-full max-w-3xl border-collapse border border-black text-sm">
              <thead>
                <tr>
                  <th className="border border-black px-4 py-2 text-center font-bold text-slate-900"> Tahun </th>
                  <th className="w-32 border border-black px-4 py-2 text-center font-bold text-slate-900"> Keterangan </th>
                </tr>
              </thead>
              <tbody>
                {LAPORAN.map((item) => (
                  <tr key={item.tahun}>
                    <td className="border border-black px-4 py-2 text-slate-700"> {item.tahun} </td>
                    <td className="border border-black px-4 py-2 text-center">
                      <Link
                        href={item.link}
                        className="inline-block rounded bg-blue-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-blue-700"
                      >
                        Lihat
                      </Link>
                    </td>
                  </tr>
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