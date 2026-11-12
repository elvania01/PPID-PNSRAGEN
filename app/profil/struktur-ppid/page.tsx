"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function StrukturPPIDPage() {
  const tanggalSekarang = new Intl.DateTimeFormat("id-ID", 
    {day: "numeric", month: "long", year: "numeric"}).format(new Date());
  
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
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Struktur PPID</h1>
      </section>

      <div className="border-y border-gray-200 bg-[#F5F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline"> Beranda </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">Struktur PPID</span>
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

          <div className="mb-8 flex justify-center rounded-lg border border-gray-100 bg-slate-50 p-4">
            <Image
              src="/struktur-ppid.png"
              alt="Struktur Organisasi PPID Pengadilan Negeri Sragen"
              width={900}
              height={600}
              className="h-auto w-full max-w-4xl object-contain"
              priority
            />
          </div>
          <div className="space-y-4 text-justify text-[15px] leading-relaxed text-slate-700">
            <p> Sesuai SK KMA Nomor 2-144/KMA/SK/VIII/2022 dan SK KPTUN Semarang Nomor 48/KPTUN/ND.1/3/2025 tanggal 3 Maret 2025 tentang: </p>

            <div className="space-y-3 pl-4">
              <div>
                <p className="font-semibold text-slate-900">A. Pelaksana pada Pengadilan Tingkat Pertama dan Banding</p>
                <ol className="list-decimal space-y-1 pl-6">
                  <li>Petugas Informasi dan Dokumentasi pada Pengadilan.</li>
                  <li>Petugas Informasi dan Dokumentasi pada Pengadilan Tinggi.</li>
                  <li>PPID adalah jabatan yang tidak memiliki tugas dan fungsi koordinasi/teknis.</li>
                  <li>
                    PPID hanya dapat berperan serta dalam proses dan/atau tata kelola tertentu yang bersifat koordinasi dan/atau memerlukan keputusan pimpinan serta membina/mengawasi PPID Pelaksana, Atasan PPID.
                  </li>
                </ol>
              </div>

              <div>
                <p className="font-semibold text-slate-900">B. Pelaksana pada Mahkamah Agung</p>
                <ol className="list-decimal space-y-1 pl-6">
                  <div>Atasan PPID adalah Sekretaris Mahkamah Agung.</div>
                  <div>PPID adalah Kepala Biro Hukum dan Hubungan Masyarakat.</div>
                  <div>PPID Pelaksana adalah Pejabat Eselon II pada Unit Kerja Eselon I di Mahkamah Agung.</div>
                  <div>
                    PPID Pelaksana di Tingkat Banding dan Tingkat Pertama terdiri dari:
                    <ul className="list-disc space-y-1 pl-6 mt-1">
                      <li>PPID Pelaksana pada Pengadilan Tingkat Banding.</li>
                      <li>PPID Pelaksana pada Pengadilan Tingkat Pertama.</li>
                      <li>PPID Pelaksana pada Kepaniteraan Mahkamah Agung.</li>
                      <li>PPID Pelaksana pada Badan Litbang Diklat Kumdil Mahkamah Agung.</li>
                    </ul>
                  </div>
                </ol>
              </div>
            </div>

            <footer className="border-t border-slate-200 bg-slate-50 py-6">
              <p className="text-center text-sm text-slate-500">
                © Pengadilan Negeri Sragen - 2026
              </p>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}