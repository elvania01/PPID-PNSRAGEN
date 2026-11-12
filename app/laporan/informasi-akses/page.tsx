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
  { no: 1, nama: "Laporan Data Pelayanan Informasi September", link: "https://drive.google.com/file/d/1mAlcLvAS-2yUTZneOy7ZkLO17WPDLJZH/view" },
  { no: 2, nama: "Laporan Data Keberatan Pelayanan Informasi Januari", link: "#" },
  { no: 3, nama: "Laporan Data Keberatan Pelayanan Informasi Maret", link: "#" },
  { no: 4, nama: "Laporan Data Keberatan Pelayanan Informasi Februari", link: "#" },
  { no: 5, nama: "Laporan Data Pelayanan Informasi Januari", link: "https://drive.google.com/file/d/1sp10lV-7WWm28sUdpnwtgjyVDwqUJ46P/view" },
  { no: 6, nama: "Laporan Data Keberatan Pelayanan Informasi Juni", link: "#" },
  { no: 7, nama: "Laporan Data Pelayanan Informasi Publik 2025", link: "https://drive.google.com/file/d/12BpaCBWiCkcEFLEC49iUW7f2dIh4n81m/view" },
  { no: 8, nama: "Laporan Data Pelayanan Informasi Maret", link: "https://drive.google.com/file/d/1sp10lV-7WWm28sUdpnwtgjyVDwqUJ46P/view?usp=drive_link" },
  { no: 9, nama: "Laporan Data Pelayanan Informasi Februari", link: "https://drive.google.com/file/d/1S0E1DkQTd4HIE10kwhrhuojEA5lL0ZGB/view" },
  { no: 10, nama: "Laporan Data Pelayanan Informasi Agustus", link: "https://drive.google.com/file/d/1ZGgLf7omM9kqLsnzQzglj9qUo9rTwaFi/view" },
  { no: 11, nama: "Laporan Data Pelayanan Informasi Juli", link: "https://drive.google.com/file/d/19FMvpOtzFi9rxbnSo0WRkHM34w9qZc3D/view" },
  { no: 12, nama: "Laporan Data Keberatan Pelayanan Informasi Agustus", link: "#" },
  { no: 13, nama: "Laporan Data Keberatan Pelayanan Informasi November", link: "#" },
  { no: 14, nama: "Laporan Data Keberatan Pelayanan Informasi September", link: "#" },
  { no: 15, nama: "Laporan Data Pelayanan Informasi Januari", link: "#" },
  { no: 16, nama: "Laporan Data Pelayanan Informasi Oktober", link: "#" },
  { no: 17, nama: "Laporan Data Keberatan Pelayanan Informasi Juli", link: "#" },
  { no: 18, nama: "Laporan Data Pelayanan Informasi Juni", link: "#" },
  { no: 19, nama: "Laporan Data Pelayanan Informasi Maret", link: "#" },
  { no: 20, nama: "Laporan Data Pelayanan Informasi Februari", link: "#" },
  { no: 21, nama: "Laporan Data Pelayanan Informasi Mei", link: "#" },
  { no: 22, nama: "Laporan Data Keberatan Pelayanan Informasi April", link: "#" },
  { no: 23, nama: "Laporan Data Pelayanan Informasi April", link: "#" },
  { no: 24, nama: "Laporan Data Keberatan Pelayanan Informasi Oktober", link: "#" },
  { no: 25, nama: "Laporan Data Keberatan Pelayanan Informasi Desember", link: "#" },
  { no: 26, nama: "LAPORAN MONEV E-PPID 2025 OKE", link: "#" },
  { no: 27, nama: "Laporan Data Pelayanan Informasi November", link: "#" },
  { no: 28, nama: "Laporan Data Keberatan Pelayanan Informasi Mei", link: "#" },
];

export default function LaporanAksesInformasiPage() {
    const tanggalSekarang = new Date().toLocaleDateString("id-ID", {day: "numeric", month: "long", year: "numeric"});

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
          Laporan Akses Informasi Badan Publik </h1></section>

      <div className="border-y border-gray-200 bg-[#F5F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">
              Beranda
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600"> Laporan Akses Informasi Badan Publik </span>
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

          <p className="mb-6 text-[15px] text-slate-700"> Informasi mengenai Laporan Akses Informasi Badan Publik </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-white">
                  <th className="w-16 border border-gray-200 px-4 py-3 text-center font-bold text-slate-800"> No.</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold text-slate-800"> Berkas</th>
                  <th className="w-32 border border-gray-200 px-4 py-3 text-center font-bold text-slate-800"> Unduh</th>
                </tr>
              </thead>
              <tbody>
                {LAPORAN.map((item) => (
                  <tr key={item.no} className="even:bg-slate-50">
                    <td className="border border-gray-200 px-4 py-3 text-center text-slate-700">{item.no}</td>
                    <td className="border border-gray-200 px-4 py-3 text-slate-700">{item.nama}</td>
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