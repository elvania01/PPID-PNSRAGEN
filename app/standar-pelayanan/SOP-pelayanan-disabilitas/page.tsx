"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function StandarPage() {
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
        <h1 className="text-4xl font-bold tracking-tight text-slate-900"> SOP Pelayanan Informasi untuk Penyandang Disabilitas </h1>
      </section>

      <div className="border-y border-gray-200 bg-[#F5F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline"> Beranda </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">SOP Pelayanan Informasi untuk Penyandang Disabilitas</span>
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

          <div className="mb-8 w-full overflow-hidden rounded-lg border border-gray-300 bg-gray-100">
            <iframe
              src="https://drive.google.com/file/d/1q3VovkJMAXXFfGGRwdnMU1V3oi-ItRYH/preview"
              className="h-[800px] w-full"
              title="SOP Pelayanan Informasi untuk Penyandang Disabilitas"
              allow="autoplay"
            />
            <p className="p-4 text-center text-sm text-slate-500">
              <a
                href="https://drive.google.com/file/d/1q3VovkJMAXXFfGGRwdnMU1V3oi-ItRYH/view"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Klik di sini untuk mengunduh dokumen.
              </a>
            </p>
          </div>

          <div className="space-y-4 text-justify text-[15px] leading-relaxed text-slate-700">
          </div>

          <footer className="border-t border-slate-200 bg-slate-50 py-6">
            <p className="text-center text-sm text-slate-500">
              © Pengadilan Negeri Sragen - 2026
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}