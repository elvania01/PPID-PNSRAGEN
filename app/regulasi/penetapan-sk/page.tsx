"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function PenetapanSKDIPPage() {
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

  const dokumen = [
    {judul: "SK DIP Pengadilan Negeri Sragen 2026", embed: "https://drive.google.com/file/d/1XinaqI8QItRqqyQstTJ2WAoDhmKmYbKR/preview",},
    {judul: "SK DIP Pengadilan Negeri Sragen 2026 (Semester 2)", embed: "https://drive.google.com/file/d/1ytjhPBr_Rm13BMeomFSYqyfpD6WO8VrC/preview",},
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      <section className="bg-white py-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900"> Penetapan SK DIP </h1>
      </section>

      <div className="border-y border-gray-200 bg-[#F5F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline"> Beranda </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">Penetapan SK DIP</span>
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

          <p className="mb-6 text-[15px] text-slate-700"> Penetapan SK DIP tahun 2026 </p>

          <div className="space-y-10">
            {dokumen.map((doc, index) => (
              <div key={index}>
                <h2 className="mb-3 text-lg font-semibold text-slate-800"> {index + 1}. {doc.judul} </h2>

                <div className="overflow-hidden rounded border border-gray-200">
                  <iframe
                    src={doc.embed}
                    title={doc.judul}
                    className="h-[800px] w-full"
                    allow="autoplay"
                  />
                </div>
              </div>
            ))}
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