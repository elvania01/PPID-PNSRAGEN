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
        <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-snug tracking-tight text-slate-900 md:text-4xl"> Informasi Wajib Tersedia Setiap Saat </h1>
      </section>

      <div className="border-y border-gray-200 bg-[#F5F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline"> Beranda </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">Informasi Wajib Tersedia Setiap Saat</span>
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

          <div className="text-[15px] leading-relaxed text-slate-700">
            <p className="mb-4 font-bold text-slate-900"> Berikut adalah informasi yang wajib tersedia setiap saat : </p> 
            <ol className="list-[upper-alpha] space-y-2 pl-6">
              <li>Seluruh informasi lengkap yang wajib diumumkan secara berkala</li>
              <li>Daftar Informasi Publik dan Daftar Informasi Dikecualikan</li>
              <li>
                Informasi tentang Perkara
                <ol className="list-decimal mt-1 space-y-1 pl-6">
                  <li>Direktori Putusan</li>
                  <li>Info Perkara</li>
                </ol>
              </li>
              <li>
                Informasi tentang Pengawasan dan Pendisiplinan
                <ol className="list-decimal mt-1 space-y-1 pl-6">
                  <li>Hukuman disiplin</li>
                </ol>
              </li>
              <li>
                Informasi tentang Peraturan, Kebijakan dan Hasil Penelitian
                <ol className="list-decimal mt-1 space-y-1 pl-6">
                  <li>Kebijakan Mahkamah Agung yang telah diterbitkan</li>
                  <li>Naskah kebijakan Mahkamah Agung yang telah diterbitkan</li>
                  <li>Daftar dan hasil penelitian</li>
                </ol>
              </li>
              <li>
                Informasi dan kebijakan yang disampaikan pejabat Mahkamah Agung dalam pertemuan yang terbuka untuk umum
                <ol className="list-decimal mt-1 space-y-1 pl-6">
                  <li>Informasi tentang Organisasi, Administrasi, Kepegawaian dan Keuangan</li>
                  <li>Pedoman Pengelolaan Organisasi</li>
                  <li>Pedoman Pengelolaan Administrasi</li>
                  <li>Pedoman Personel: (Buku | Potongan Buku)</li>
                  <li>Pedoman Keuangan: (Buku | Potongan Buku)</li>
                  <li>Standar Pelayanan</li>
                  <li>Profil Hakim dan Aparatur Pengadilan</li>
                  <li>Data Statistik Kepegawaian</li>
                  <li>Rencana Kerja dan Anggaran</li>
                  <li>Keuangan</li>
                  <li>Dokumen Pengadaan (Semua | Per Item)</li>
                  <li>Surat Perjanjian dan MoU ( Satu | Dua | Tiga | Empat | Lima)</li>
                </ol>
              </li>
              <li>Pengumuman</li>
              <li>Alasan Pengajuan Keberatan atas Informasi</li>
            </ol>
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