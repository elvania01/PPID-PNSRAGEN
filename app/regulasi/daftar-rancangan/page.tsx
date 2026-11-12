"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function RancanganPeraturanPage() {
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

      <section className="bg-white px-6 py-10 text-center">
        <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-snug tracking-tight text-slate-900 md:text-4xl"> Menyampaikan Daftar Rancangan Peraturan, keputusan dan/atau kebijakan yang akan dikeluarkan/ditetapkan </h1>
      </section>

      <div className="border-y border-gray-200 bg-[#F5F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline"> Beranda </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600"> Menyampaikan Daftar Rancangan Peraturan, keputusan dan/atau kebijakan yang akan dikeluarkan/ditetapkan </span>
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

          <p className="mb-8 text-[15px] text-slate-700"> Menyampaikan Daftar Rancangan Peraturan, keputusan dan/atau kebijakan yang akan dikeluarkan/ditetapkan </p>
          <div className="mx-auto max-w-3xl text-justify font-serif text-[15px] leading-relaxed text-slate-800">
            <p className="mb-4 text-center font-bold">MEMUTUSKAN</p>

            <div className="mb-6 grid grid-cols-[120px_1fr] gap-2">
              <span className="font-semibold">Menetapkan</span>
              <span> : KEPUTUSAN ATASAN PEJABAT PENGELOLA INFORMASI DAN DOKUMENTASI (PPID) TENTANG PENETAPAN INFORMASI PUBLIK DI PENGADILAN NEGERI SRAGEN. </span>
            </div>

            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="font-semibold">KESATU</span>
              <span> : Menetapkan Daftar Informasi Publik di Pengadilan Negeri Sragen sebagaimana tercantum dalam lampiran keputusan ini. </span>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="mb-3 font-medium text-slate-800">Dasar Hukum:</p>
            <ol className="list-decimal space-y-2 pl-6 text-sm text-slate-700">
              <li>Undang-Undang Nomor 48 Tahun 2009 tentang Kekuasaan Kehakiman;</li>
              <li> Peraturan Pemerintah Nomor 61 Tahun 2010 tentang Pelaksanaan Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik; </li>
              <li> Peraturan Komisi Informasi Publik Nomor 1 Tahun 2021 tentang Standar Layanan Informasi Publik; </li>
              <li> Keputusan Ketua Mahkamah Agung Nomor: 2-144/KMA/SK/VIII/2022 tanggal 8 Agustus 2022 tentang Standar Pelayanan Informasi Publik di Pengadilan. </li>
            </ol>

            <a
              href="https://jdih.mahkamahagung.go.id/legal-product/sk-kma-nomor-2-144kmaskviii2022/detail"
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="mt-4 inline-block rounded-md bg-[#1a5c3a] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#144a2e]"
            >
              📄 Lihat SK KMA No. 2-144/KMA/SK/VIII/2022
            </a>
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