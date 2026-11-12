"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";


type LaporanItem = {
  no: number;
  nama: string;
  link: string; 
};

const LAPORAN: LaporanItem[] = [
  { no: 1, nama: "Laporan Pengaduan Triwulan I 2026", link: "#" },
  { no: 2, nama: "Laporan Pengaduan Triwulan I", link: "#" },
  { no: 3, nama: "Laporan Pengaduan Triwulan II", link: "#" },
  { no: 4, nama: "Laporan Pengaduan Triwulan III", link: "#" },
  { no: 5, nama: "Laporan Pengaduan Triwulan IV", link: "#" },
];

export default function HasilPenangananPengaduanPage() {
  const tanggalSekarang = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

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
        <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-snug tracking-tight text-slate-900 md:text-4xl"> Menyampaikan Hasil Penanganan Pengaduan </h1>
      </section>

      <div className="border-y border-gray-200 bg-[#F5F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline"> Beranda </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600"> Menyampaikan Hasil Penanganan Pengaduan </span>
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

          <p className="mb-6 text-[15px] text-slate-700"> Menyampaikan Hasil Penanganan Pengaduan </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-white">
                  <th className="w-16 border border-gray-200 px-4 py-3 text-center font-bold text-slate-800"> No. </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold text-slate-800"> Berkas </th>
                  <th className="w-32 border border-gray-200 px-4 py-3 text-center font-bold text-slate-800"> Unduh </th>
                </tr>
              </thead>
              <tbody>
                {LAPORAN.map((item) => (
                  <tr key={item.no} className="even:bg-slate-50">
                    <td className="border border-gray-200 px-4 py-3 text-center text-slate-700"> {item.no} </td>
                    <td className="border border-gray-200 px-4 py-3 text-slate-700"> {item.nama} </td>
                    <td className="border border-gray-200 px-4 py-3 text-center">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-md bg-blue-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                      >
                        Unduh
                      </a>
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