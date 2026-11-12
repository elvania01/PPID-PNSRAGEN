"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

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
        <h1 className="text-4xl font-bold tracking-tight text-slate-900"> Visi dan Misi </h1>
      </section>

      <div className="border-y border-gray-200 bg-[#F5F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline"> Beranda </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">Visi dan Misi</span>
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
              <span>Dibaca : {jumlahKunjungan !== null ? jumlahKunjungan : 0} kali</span>
            </div>
          </div>

          <div className="space-y-6 text-justify text-[15px] leading-relaxed text-slate-700">
            
            <div>
              <h2 className="mb-3 text-lg font-bold text-slate-900"> Visi: </h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li> Terwujudnya keterbukaan informasi publik secara modern menuju Pengadilan Negeri Sragen </li>
              </ol>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-slate-900"> Misi:  </h2>
              <ol className="list-decimal space-y-2 pl-6"> 
                <div> </div> i. Menyediakan informasi publik yang akurat dan dapat dipertanggungjawabkan <div> </div> 
                ii. Memberikan layanan informasi publik yang cepat, tepat, dan sederhana  <div> </div>
                iii. Memastikan pengelolaan layanan informasi publik didukung oleh sumber daya manusia yang profesional dan berintegritas  <div> </div>
                iv. Memanfaatkan teknologi informasi dan komunikasi yang mutakhir untuk mendukung pengelolaan keterbukaan informasi publik
              </ol>
            </div>

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