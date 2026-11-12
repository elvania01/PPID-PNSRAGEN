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

  const sopList = [
    {no: 1, judul: "SOP Pengumuman Informasi", link: "https://drive.google.com/file/d/1ovYBqytNNzyUxchkLatMPaTU_ahGEDy0/view"},
    {no: 2, judul: "SOP Pengujian tentang Konsekuensi", link: "https://drive.google.com/file/d/1fDB97IYHlKZmB-krOpJYFnve7XTb9UEH/view"},
    {no: 3, judul: "SOP Pengelolaan Permohonan Informasi", link: "https://drive.google.com/file/d/1PZTM-l9hest-h8Q8ZLFcbybiyP8j0j4e/view"},
    {no: 4, judul: "SOP Pengelolaan Keberatan Atas Informasi", link: "https://drive.google.com/file/d/1ekGF7bg6E9X4_CAim8Hiymr0hUcIKcOs/view"},
    {no: 5, judul: "SOP Pendokumentasian Informasi yang Dikecualikan", link: "https://drive.google.com/file/d/1ps63u3LnYOuzF8b9JDejFQ1lnqz6DPXM/view"},
    {no: 6, judul: "SOP Pendokumentasian Informasi Publik", link: "https://drive.google.com/file/d/15SLrlgWiI5K0yVFUy1oeaAGZnwyNv_tE/view"},
    {no: 7, judul: "SOP Penetapan dan Pemutakhiran Daftar Informasi Publik", link: "https://drive.google.com/file/d/14o2ja6Xj0L97anTLULe0iwpObkK_pnJ9/view"},
    {no: 8, judul: "SOP Penanganan Sengketa Informasi Publik oleh Atasan PPID", link: "https://drive.google.com/file/d/1XduPP2EMUWWI1QroB9Wq1kC4qzvJDeWn/view",},
    {no: 9, judul: "SOP Pelayanan Disabilitas", link: "https://drive.google.com/file/d/1q3VovkJMAXXFfGGRwdnMU1V3oi-ItRYH/view"},
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      <section className="bg-white py-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900"> SOP Terkait PPID </h1>
      </section>

      <div className="border-y border-gray-200 bg-[#F5F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline"> Beranda </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">SOP Terkait PPID</span>
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

          <p className="mb-6 text-[15px] text-slate-700"> Berikut Adalah SOP Terkait PPID di Pengadilan Negeri Sragen : </p>

          <ol className="list-decimal space-y-2 pl-6 text-[15px] text-slate-700">
            {sopList.map((sop) => (
              <li key={sop.no}>
                <a
                  href={sop.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {sop.judul}
                </a>
              </li>
            ))}
          </ol>
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